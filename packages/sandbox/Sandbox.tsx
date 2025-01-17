import '@tamagui/core/reset.css'
import '@tamagui/polyfill-dev'

import '../site/app.css'

import {
  AlertDialogDemo,
  AnimationsDemo,
  AnimationsPresenceDemo,
  ButtonDemo,
  DialogDemo,
  PopoverDemo,
  SelectDemo,
  SeparatorDemo,
  SheetDemo,
  SliderDemo,
  SwitchDemo,
  TooltipDemo,
} from '@tamagui/demos'
import { Sun } from '@tamagui/feather-icons'
import React from 'react'
import { useState } from 'react'
import { Animated, useColorScheme } from 'react-native'
import { Anchor, Button, Select, Square, Theme, XStack, YStack, styled } from 'tamagui'

import Tamagui from './tamagui.config'

// webpack fix..
if (typeof require !== 'undefined') {
  globalThis['React'] = require('react')
}

export const Sandbox = () => {
  const scheme = useColorScheme()
  const [theme, setTheme] = useState(scheme as any)

  return (
    <Tamagui.Provider defaultTheme={theme}>
      <link href="/fonts/inter.css" rel="stylesheet" />

      <button
        style={{
          position: 'absolute',
          top: 30,
          left: 20,
        }}
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      >
        Switch theme
      </button>

      <div
        style={{
          width: '100vw',
          // test scrolling
          height: '110vh',
          pointerEvents: 'auto',
          display: 'flex',
          flexDirection: 'column',
          background: 'var(--backgroundStrong)',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* <AnimationsDemo /> */}
        {/* <AnimationsPresenceDemo /> */}
        {/* <SeparatorDemo /> */}
        {/* <AlertDialogDemo /> */}
        {/* <DialogDemo /> */}
        {/* <PopoverDemo /> */}
        {/* <TooltipDemo /> */}
        {/* <SliderDemo /> */}
        {/* <SelectDemo /> */}
        {/* <SheetDemo /> */}
        {/* <SwitchDemo /> */}
        {/* <XStack space>
          <Square size={100} bc="red" />
          <Square $lg={{ display: 'none' }} size={100} bc="red" />
          <Square size={100} bc="red" />
          <Square size={100} bc="red" />
        </XStack> */}
        {/* <Theme name="dark">
          <ButtonDemo />
        </Theme> */}
      </div>
    </Tamagui.Provider>
  )
}
