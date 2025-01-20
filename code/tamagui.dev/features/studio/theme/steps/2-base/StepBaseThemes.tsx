import { memo } from 'react'
import { YStack } from 'tamagui'

import { NoticeParagraph, StudioNotice } from '~/features/studio/StudioNotice'
import { useThemeBuilderStore } from '~/features/studio/theme/store/ThemeBuilderStore'
import { BuildThemeItemFrame } from '../views/BuildThemeItemFrame'
import { PaletteView } from '../views/PaletteView'

type StepBaseThemesProps = {
  previewMode?: boolean
}

export const StepBaseThemes = memo((_props: StepBaseThemesProps) => {
  return <Palettes key={0} />
})

const Palettes = memo(() => {
  const store = useThemeBuilderStore()

  return (
    <YStack gap="$3" py="$3" px="$2">
      {Object.entries(store.palettes).map(([name, palette]) => {
        return (
          <BuildThemeItemFrame key={name} label={name}>
            <PaletteView
              onUpdate={(next) => {
                store.updatePalette(name, next)
              }}
              palette={palette}
            />
          </BuildThemeItemFrame>
        )
      })}
    </YStack>
  )
})

export const StepLightDarkTip = () => {
  return (
    <StudioNotice
      chromeless
      mih={320}
      miw={400}
      title="Base and Accent"
      steps={[
        // biome-ignore lint/correctness/useJsxKeyInIterable: <explanation>
        <>
          <NoticeParagraph>
            This is a multi-step theme generator. This first step sets up your base theme
            and accent color - which then syncs to a separate accent theme, but it doesn't
            deal with component themes which for now are set to defaults, so if you don't
            like palette selections by the switch or button, you can customize those along
            with all the other components on step three.
          </NoticeParagraph>

          <NoticeParagraph>
            The base + accent setup is useful because lets you use a brand color or
            contrasting color for one-off cases with the default tokens set on your base
            theme ($accent, $accent1...12), but also lets you re-theme areas with that
            accent color.
          </NoticeParagraph>

          <NoticeParagraph>
            Note that using the light/dark mode toggle shows you the final result for each
            in the Theme tab.
          </NoticeParagraph>
        </>,

        // biome-ignore lint/correctness/useJsxKeyInIterable: <explanation>
        <>
          <NoticeParagraph>
            We start you with a theme template that we find useful. Beyond the color steps
            from your palette ($color1 to $color12) it includes "generic" styles that
            Tamagui components will use ($background, $color, $colorHover...), as well as
            translucencies ($color0 and $background0 025 05 075).
          </NoticeParagraph>

          <NoticeParagraph>
            Since it's common to have an accent color and really theme to make areas "pop"
            we sync your Accent theme color here to a few base theme tokens ($accent and
            $accentBackground, $accent1 to 12). This way you can both &lt;Button
            theme="accent" /&gt; to change the whole look and feel of an area, or use the
            one-off accent as needed.
          </NoticeParagraph>
        </>,
      ]}
    />
  )
}

export const StepLightDarkPreviewThemes = () => {
  const store = useThemeBuilderStore()
  store.themeSuiteVersion
  return <StepBaseThemes previewMode key={store.themeSuiteVersion} />
}
