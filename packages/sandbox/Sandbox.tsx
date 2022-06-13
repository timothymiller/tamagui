// debug
import '@tamagui/core/reset.css'
import '@tamagui/polyfill-dev'

import { Tamagui as TT, Unspaced } from '@tamagui/core'
import { Drawer } from '@tamagui/drawer'
//         <Select.ScrollDownButton>👇</Select.ScrollDownButton>
//       </Select.Content>
//     </Select>
//   )
// }
import { ChevronDown, ChevronUp, X } from '@tamagui/feather-icons'
import React, { useState } from 'react'
import { useColorScheme } from 'react-native'
import { Button, Dialog, Fieldset, Input, Label, Paragraph, YStack } from 'tamagui'

import Tamagui from './tamagui.config'

TT['keep']
React['keep']

export const Sandbox = () => {
  const scheme = useColorScheme()
  const [theme, setTheme] = useState(scheme as any)
  return (
    <Tamagui.Provider defaultTheme={theme}>
      <button
        style={{
          position: 'absolute',
          bottom: 20,
          left: 20,
        }}
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      >
        Switch theme
      </button>

      <div
        style={{
          width: '100vw',
          height: '100vh',
          pointerEvents: 'auto',
          display: 'flex',
          flexDirection: 'column',
          background: 'var(--backgroundStrong)',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <DrawerDemo />
      </div>
    </Tamagui.Provider>
  )
}

// function SelectDemo() {
//   return (
//     <Select defaultValue="blueberry">
//       <Select.Trigger w={200} iconAfter={ChevronDown}>
//         <Select.Value placeholder="Something" />
//       </Select.Trigger>

//       <Select.Content>
//         <Select.ScrollUpButton>☝️</Select.ScrollUpButton>

//         <Select.Viewport minWidth={200}>
//           <Select.Group>
//             <Select.Label>Fruits</Select.Label>
//             <Select.Item value="apple" index={0}>
//               <Select.ItemText>Apple</Select.ItemText>
//             </Select.Item>
//             <Select.Item value="banana" index={1}>
//               <Select.ItemText>Banana</Select.ItemText>
//             </Select.Item>
//             <Select.Item value="blueberry" index={2}>
//               <Select.ItemText>Blueberry</Select.ItemText>
//             </Select.Item>
//             <Select.Item value="berry" index={3}>
//               <Select.ItemText>Berry</Select.ItemText>
//             </Select.Item>
//             <Select.Item value="strawberry" index={4}>
//               <Select.ItemText>Strawberry</Select.ItemText>
//             </Select.Item>
//             <Select.Item value="kiwi" index={5}>
//               <Select.ItemText>Kiwi</Select.ItemText>
//             </Select.Item>
//             <Select.Item value="grap" index={6}>
//               <Select.ItemText>Grap</Select.ItemText>
//             </Select.Item>
//             <Select.Item value="orange" index={7}>
//               <Select.ItemText>Orange</Select.ItemText>
//             </Select.Item>
//           </Select.Group>
//         </Select.Viewport>

export default function DrawerDemo() {
  const [show, setShow] = useState(false)
  return (
    <Drawer modal>
      <Drawer.Trigger asChild>
        <Button>Edit Profile</Button>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay key="overlay" o={0.5} />
        <Drawer.Content
          key="content"
          space
          animation={[
            'quick',
            {
              opacity: {
                overshootClamping: true,
              },
            },
          ]}
          enterStyle={{ x: 0, y: -40, opacity: 0 }}
          exitStyle={{ x: 0, y: 40, opacity: 0 }}
          x={0}
          opacity={1}
          y={0}
        >
          <Drawer.Title>Edit profile</Drawer.Title>
          <Drawer.Description>
            Make changes to your profile here. Click save when you're done.
          </Drawer.Description>
          <Fieldset horizontal>
            <Label w={160} justifyContent="flex-end" htmlFor="name">
              Name
            </Label>
            <Input f={1} id="name" defaultValue="Nate Wienert" />
          </Fieldset>
          <Fieldset horizontal>
            <Label w={160} justifyContent="flex-end" htmlFor="username">
              Username
            </Label>
            <Input f={1} id="username" defaultValue="@natebirdman" />
          </Fieldset>

          <YStack ai="flex-end" mt="$2">
            <Drawer.Close asChild>
              <Button theme="alt1" aria-label="Close">
                Save changes
              </Button>
            </Drawer.Close>
          </YStack>

          <Unspaced>
            <Drawer.Close asChild>
              <Button pos="absolute" t="$4" r="$4" circular icon={X} />
            </Drawer.Close>
          </Unspaced>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer>
  )
}
