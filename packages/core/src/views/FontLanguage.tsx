import React, { createContext } from 'react'

import { FontLanguages } from '../types'

type FontLanguageProps = {
  children?: React.ReactNode
  language: FontLanguages
}

export const FontLanguageContext = createContext({
  language: 'default',
})

export const FontLanguage = (props: FontLanguageProps) => {
  if (process.env.TAMAGUI_TARGET === 'web') {
    // no re-render, just use variables
    return props.children
  }

  return props.children
}
