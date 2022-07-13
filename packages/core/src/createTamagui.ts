import { configListeners, setConfig } from './conf'
import { THEME_CLASSNAME_PREFIX } from './constants/constants'
import { isWeb } from './constants/platform'
import { SpacerProps } from './createComponent'
import { themeToVariableToValueMap } from './createTheme'
import { Variable, createVariable, isVariable } from './createVariable'
import { createVariables } from './createVariables'
import { createTamaguiProvider } from './helpers/createTamaguiProvider'
import { getInsertedRules } from './helpers/insertStyleRule'
import {
  registerCSSVariable,
  tokenRules,
  tokensValueToVariable,
} from './helpers/registerCSSVariable'
import { GetThemeUnwrapped } from './hooks/getThemeUnwrapped'
import { configureMedia } from './hooks/useMedia'
import { parseFont, registerFontVariables } from './insertFont'
import { Tamagui } from './Tamagui'
import {
  AnimationDriver,
  GenericTamaguiConfig,
  MediaQueryKey,
  StackProps,
  TamaguiInternalConfig,
  TextProps,
  ThemeObject,
} from './types'

export type CreateTamaguiProps = {
  shorthands?: GenericTamaguiConfig['shorthands']
  media?: GenericTamaguiConfig['media']
  animations?: AnimationDriver<any>
  fonts: GenericTamaguiConfig['fonts']
  tokens: GenericTamaguiConfig['tokens']
  themes: {
    [key: string]: {
      [key: string]: string | number | Variable
    }
  }

  defaultProps?: Record<string, any> & {
    Stack?: StackProps
    Text?: TextProps
    Spacer?: SpacerProps
  }

  // for the first render, determines which media queries are true
  // useful for SSR
  mediaQueryDefaultActive?: MediaQueryKey[]

  // what's between each CSS style rule, set to "\n" to be easier to read
  // defaults: "\n" when NODE_ENV=development, "" otherwise
  cssStyleSeparator?: string

  // (Advanced)
  // on the web, tamagui treats `dark` and `light` themes as special and
  // generates extra CSS to avoid having to re-render the entire page.
  // this CSS relies on specificity hacks that multiply by your sub-themes.
  // this sets the maxiumum number of nested dark/light themes you can do
  // defaults to 3 for a balance, but can be higher if you nest them deeply.
  maxDarkLightNesting?: number

  // adds @media(prefers-color-scheme) media queries for dark/light
  shouldAddPrefersColorThemes?: boolean

  // only if you put the theme classname on the html element we have to generate diff
  themeClassNameOnRoot?: boolean
}

// config is re-run by the @tamagui/static, dont double validate
const createdConfigs = new WeakMap<any, boolean>()

export type InferTamaguiConfig<Conf> = Conf extends {
  fonts: infer F
  tokens: infer A
  themes: infer B
  shorthands?: infer C
  media?: infer D
  animations?: AnimationDriver<infer E>
}
  ? TamaguiInternalConfig<A, B, C, D, E, F>
  : unknown

export function createTamagui<Conf extends CreateTamaguiProps>(
  config: Conf
): InferTamaguiConfig<Conf> {
  if (createdConfigs.has(config)) {
    return config as any
  }

  if (process.env.NODE_ENV === 'development') {
    if (!config.tokens) {
      throw new Error(`No tokens provided to Tamagui config`)
    }
    if (!config.themes) {
      throw new Error(`No themes provided to Tamagui config`)
    }
    if (!config.fonts) {
      throw new Error(`No fonts provided to Tamagui config`)
    }
  }

  configureMedia({
    queries: config.media as any,
    defaultActive: config.mediaQueryDefaultActive,
  })

  const fontTokens = createVariables(config.fonts!)
  const fontsParsed = (() => {
    const res = {} as typeof fontTokens
    for (const familyName in fontTokens) {
      res[`$${familyName}`] = parseFont(fontTokens[familyName])
    }
    return res!
  })()

  const themeConfig = (() => {
    const themes = { ...config.themes }
    const cssRules: string[] = []

    if (isWeb) {
      for (const key in config.tokens) {
        for (const skey in config.tokens[key]) {
          const val = config.tokens[key][skey]
          registerCSSVariable(val)
        }
      }

      for (const key in fontsParsed) {
        const fontParsed = fontsParsed[key]
        registerFontVariables(fontParsed)
      }

      const sep = process.env.NODE_ENV === 'development' ? config.cssStyleSeparator || ' ' : ''
      cssRules.push(`:root {${sep}${[...tokenRules].join(`;${sep}`)}${sep}}`)
    }

    // special case for SSR
    const hasDarkLight = 'light' in config.themes && 'dark' in config.themes
    const CNP = `.${THEME_CLASSNAME_PREFIX}`

    // dedupe themes to avoid duplicate CSS generation
    type DedupedTheme = {
      names: string[]
      theme: ThemeObject
    }
    const dedupedThemes: {
      [key: string]: DedupedTheme
    } = {}
    const existing = new WeakMap<ThemeObject, DedupedTheme>()

    // first, de-dupe and parse them
    for (const themeName in themes) {
      const rawTheme = themes[themeName]

      // if existing, avoid
      if (existing.has(rawTheme)) {
        const e = existing.get(rawTheme)!
        themes[themeName] = e.theme
        e.names.push(themeName)
        continue
      }

      // parse into variables
      const theme = { ...config.themes[themeName] }
      for (const key in theme) {
        // make sure properly names theme variables
        ensureThemeVariable(theme, key)
      }
      themes[themeName] = theme

      // set deduped
      dedupedThemes[themeName] = {
        names: [themeName],
        theme,
      }
      existing.set(config.themes[themeName], dedupedThemes[themeName])
    }

    // then, generate from de-duped
    if (isWeb) {
      for (const themeName in dedupedThemes) {
        const { theme, names } = dedupedThemes[themeName]
        let vars = ''

        themeToVariableToValueMap.set(theme, {})
        const varToValMap = themeToVariableToValueMap.get(theme)
        for (const themeKey in theme) {
          const variable = theme[themeKey] as Variable
          let value: any = null
          if (varToValMap) {
            varToValMap[variable.variable] = variable.val
          }
          if (variable.isFloating || !tokensValueToVariable.has(variable.val)) {
            value = variable.val
          } else {
            value = tokensValueToVariable.get(variable.val)!.variable
          }
          vars += `--${themeKey}:${value};`
        }

        const isDarkOrLightBase = themeName === 'dark' || themeName === 'light'
        const selectors = names.map((name) => {
          return `${CNP}${name}`
        })

        // since we dont specify dark/light in classnames we have to do an awkward specificity war
        // use config.maxDarkLightNesting to determine how deep you can nest until it breaks
        if (hasDarkLight) {
          for (const subName of names) {
            const isDark = isDarkOrLightBase || subName.startsWith('dark_')
            const childSelector = `${CNP}${subName.replace(isDark ? 'dark_' : 'light_', '')}`
            const order = isDark ? ['dark', 'light'] : ['light', 'dark']
            if (isDarkOrLightBase) {
              order.reverse()
            }
            const [stronger, weaker] = order
            const max = config.maxDarkLightNesting ?? 3

            new Array(Math.round(max * 1.5)).fill(undefined).forEach((_, pi) => {
              const isOdd = pi % 2 === 1
              if (isOdd && pi < 3) return
              const parents = new Array(pi + 1).fill(undefined).map((_, psi) => {
                return `${CNP}${psi % 2 === 0 ? stronger : weaker}`
              })
              let parentSelectors = parents.length > 1 ? parents.slice(1) : parents
              if (isOdd) {
                const [_first, second, ...rest] = parentSelectors
                parentSelectors = [second, ...rest, second]
              }
              selectors.push(`${parentSelectors.join(' ')} ${childSelector}`)
            })
          }
        }

        const rootSep = config.themeClassNameOnRoot ? '' : ' '
        const css = `${selectors.map((x) => `:root${rootSep}${x}`).join(', ')} {${vars}}`
        cssRules.push(css)

        if (config.shouldAddPrefersColorThemes && isDarkOrLightBase) {
          // add media prefers for dark/light base
          const isDark = themeName.startsWith('dark')
          cssRules.push(
            `@media(prefers-color-scheme: ${isDark ? 'dark' : 'light'}) {
      body { background:${theme.background}; color: ${theme.color} }
      :root {${vars} } 
    }`
          )
        }
      }
    }

    // proxy upwards to get parent variables (themes are subset going down)
    for (const themeName in themes) {
      // we could test if this is better as just a straight object spread or fancier proxy
      const cur: string[] = []
      // if theme is dark_blue_alt1_Button
      // this will be the parent names in order: ['dark', 'dark_blue', 'dark_blue_alt1"]
      const parents = themeName
        .split('_')
        .slice(0, -1)
        .map((part) => {
          cur.push(part)
          return cur.join('_')
        })

      if (!parents.length) continue

      const og = themes[themeName]
      themes[themeName] = new Proxy(og, {
        get(target, key) {
          if (key === GetThemeUnwrapped) {
            return og
          }
          if (Reflect.has(target, key)) {
            return Reflect.get(target, key)
          }
          // check parents
          for (let i = parents.length - 1; i >= 0; i--) {
            const parent = themes[parents[i]]
            if (!parent) {
              continue
            }
            if (Reflect.has(parent, key)) {
              return Reflect.get(parent, key)
            }
          }
          return Reflect.get(target, key)
        },
      })
    }

    tokensValueToVariable.clear()
    Object.freeze(cssRules)
    const css = cssRules.join('\n')

    return {
      themes,
      cssRules,
      css,
    }
  })()

  // faster lookups token keys become $keys to match input
  const tokensParsed: any = parseTokens(config.tokens)

  const getCSS = () => {
    return `${themeConfig.css}\n${getInsertedRules().join('\n')}`
  }

  if (config.shorthands) {
    for (const key in config.shorthands) {
      reversedShorthands[config.shorthands[key]] = key
    }
  }

  const next: TamaguiInternalConfig = {
    defaultTheme: 'light',
    animations: {} as any,
    shorthands: {},
    media: {},
    ...config,
    themes: themeConfig.themes,
    fontsParsed,
    themeConfig,
    tokensParsed,
    parsed: true,
    getCSS,
    Provider: null as any,
  }

  next.Provider = createTamaguiProvider(next)

  setConfig(next)

  if (configListeners.size) {
    configListeners.forEach((cb) => cb(next))
    configListeners.clear()
  }

  createdConfigs.set(next, true)

  if (process.env.NODE_ENV === 'development') {
    if (!globalThis['Tamagui']) {
      globalThis['Tamagui'] = Tamagui
    }
  }

  // @ts-expect-error
  return next
}

export const reversedShorthands: Record<string, string> = {}

const parseTokens = (tokens: any) => {
  const res: any = {}
  for (const key in tokens) {
    res[key] = {}
    for (const skey in tokens[key]) {
      res[key][`$${skey}`] = tokens[key][skey]
    }
  }
  return res
}

// mutates, freeze after
// shared by createTamagui so extracted here
function ensureThemeVariable(theme: any, key: string) {
  const val = theme[key]
  const themeKey = key
  if (!isVariable(val)) {
    theme[key] = createVariable({
      key: themeKey,
      name: themeKey,
      val,
    })
  } else {
    if (val.name !== themeKey) {
      // rename to theme name
      theme[key] = createVariable({
        key: val.name,
        name: themeKey,
        val: val.val,
      })
    }
  }
}

// for quick testing types:
// const conf = createTamagui({
//   fonts: {
//     body: createFont({}),
//     body_cn: createFont({}),
//   },
//   shorthands: {},
//   media: {
//     xs: {}
//   },
//   themes: {},
//   tokens: {
//     color: {},
//     radius: {},
//     size: {},
//     space: {},
//     zIndex: {},
//   },
// })

// type Conf = typeof conf
// type Fonts = Conf['fonts']
// type Medias = Conf['media']
