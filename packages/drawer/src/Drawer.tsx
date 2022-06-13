import { AnimatePresence } from '@tamagui/animate-presence'
import { useComposedRefs } from '@tamagui/compose-refs'
import {
  GetProps,
  Slot,
  Theme,
  composeEventHandlers,
  isWeb,
  styled,
  useId,
  useThemeName,
  withStaticProperties,
} from '@tamagui/core'
import { Scope, createContext, createContextScope } from '@tamagui/create-context'
import { Dismissable, DismissableProps } from '@tamagui/dismissable'
import { FocusScope, FocusScopeProps } from '@tamagui/focus-scope'
import { Portal, PortalProps } from '@tamagui/portal'
import { ThemeableStack, YStack, YStackProps } from '@tamagui/stacks'
import { H2, Paragraph } from '@tamagui/text'
import { useControllableState } from '@tamagui/use-controllable-state'
import * as React from 'react'
import { View } from 'react-native'
import { RemoveScroll } from 'react-remove-scroll'

const DRAWER_NAME = 'Drawer'

type ScopedProps<P> = P & { __scopeDrawer?: Scope }
type TamaguiElement = HTMLElement | View

const [createDrawerContext, createDrawerScope] = createContextScope(DRAWER_NAME)

type DrawerContextValue = {
  triggerRef: React.RefObject<TamaguiElement>
  contentRef: React.RefObject<TamaguiElement>
  contentId: string
  titleId: string
  descriptionId: string
  open: boolean
  onOpenChange(open: boolean): void
  onOpenToggle(): void
  modal: boolean
  allowPinchZoom: RemoveScrollProps['allowPinchZoom']
}

const [DrawerProvider, useDrawerContext] = createDrawerContext<DrawerContextValue>(DRAWER_NAME)

type RemoveScrollProps = React.ComponentProps<typeof RemoveScroll>

interface DrawerProps {
  children?: React.ReactNode
  open?: boolean
  defaultOpen?: boolean
  onOpenChange?(open: boolean): void
  modal?: boolean
  allowPinchZoom?: RemoveScrollProps['allowPinchZoom']
}

/* -------------------------------------------------------------------------------------------------
 * DrawerTrigger
 * -----------------------------------------------------------------------------------------------*/

const TRIGGER_NAME = 'DrawerTrigger'

const DrawerTriggerFrame = styled(YStack, {
  name: TRIGGER_NAME,
})

interface DrawerTriggerProps extends YStackProps {}

const DrawerTrigger = React.forwardRef<TamaguiElement, DrawerTriggerProps>(
  (props: ScopedProps<DrawerTriggerProps>, forwardedRef) => {
    const { __scopeDrawer, ...triggerProps } = props
    const context = useDrawerContext(TRIGGER_NAME, __scopeDrawer)
    const composedTriggerRef = useComposedRefs(forwardedRef, context.triggerRef)
    return (
      <DrawerTriggerFrame
        tag="button"
        aria-haspopup="drawer"
        aria-expanded={context.open}
        aria-controls={context.contentId}
        data-state={getState(context.open)}
        {...triggerProps}
        ref={composedTriggerRef}
        onPress={composeEventHandlers(props.onPress, context.onOpenToggle)}
      />
    )
  }
)

DrawerTrigger.displayName = TRIGGER_NAME

/* -------------------------------------------------------------------------------------------------
 * DrawerPortal
 * -----------------------------------------------------------------------------------------------*/

const PORTAL_NAME = 'DrawerPortal'

type PortalContextValue = { forceMount?: true }
const [PortalProvider, usePortalContext] = createDrawerContext<PortalContextValue>(PORTAL_NAME, {
  forceMount: undefined,
})

interface DrawerPortalProps extends Omit<PortalProps, 'asChild'> {
  children?: React.ReactNode
  /**
   * Used to force mounting when more control is needed. Useful when
   * controlling animation with React animation libraries.
   */
  forceMount?: true
}

const DrawerPortal: React.FC<DrawerPortalProps> = (props: ScopedProps<DrawerPortalProps>) => {
  const { __scopeDrawer, forceMount, children, ...rest } = props
  const themeName = useThemeName()
  const context = useDrawerContext(PORTAL_NAME, __scopeDrawer)
  const isShowing = forceMount || context.open
  const contents = <AnimatePresence>{isShowing ? children : null}</AnimatePresence>
  if (!context.modal) {
    return contents
  }
  if (!isWeb && !isShowing) {
    return contents
  }
  return (
    <PortalProvider scope={__scopeDrawer} forceMount={forceMount}>
      <Portal
        zIndex={100}
        pointerEvents={isShowing ? 'auto' : 'none'}
        {...(isWeb && {
          maxHeight: '100vh',
        })}
        {...rest}
      >
        <Theme name={themeName}>{contents}</Theme>
      </Portal>
    </PortalProvider>
  )
}

DrawerPortal.displayName = PORTAL_NAME

/* -------------------------------------------------------------------------------------------------
 * DrawerOverlay
 * -----------------------------------------------------------------------------------------------*/

const OVERLAY_NAME = 'DrawerOverlay'

const DrawerOverlayFrame = styled(ThemeableStack, {
  name: OVERLAY_NAME,
  pointerEvents: 'auto',
  backgrounded: true,
  fullscreen: true,
})

interface DrawerOverlayProps extends YStackProps {
  /**
   * Used to force mounting when more control is needed. Useful when
   * controlling animation with React animation libraries.
   */
  forceMount?: true
}

const DrawerOverlay = React.forwardRef<TamaguiElement, DrawerOverlayProps>(
  (props: ScopedProps<DrawerOverlayProps>, forwardedRef) => {
    const portalContext = usePortalContext(OVERLAY_NAME, props.__scopeDrawer)
    const { forceMount = portalContext.forceMount, ...overlayProps } = props
    const context = useDrawerContext(OVERLAY_NAME, props.__scopeDrawer)

    if (!context.modal) {
      return null
    }

    // <AnimatePresence>
    return <DrawerOverlayImpl {...overlayProps} ref={forwardedRef} />
    // </AnimatePresence>
  }
)

DrawerOverlay.displayName = OVERLAY_NAME

type DrawerOverlayImplProps = GetProps<typeof DrawerOverlayFrame>

const DrawerOverlayImpl = React.forwardRef<TamaguiElement, DrawerOverlayImplProps>(
  (props: ScopedProps<DrawerOverlayImplProps>, forwardedRef) => {
    const { __scopeDrawer, ...overlayProps } = props
    const context = useDrawerContext(OVERLAY_NAME, __scopeDrawer)
    const content = (
      <DrawerOverlayFrame
        data-state={getState(context.open)}
        // We re-enable pointer-events prevented by `Drawer.Content` to allow scrolling the overlay.
        pointerEvents="auto"
        {...overlayProps}
        ref={forwardedRef}
      />
    )

    if (!isWeb) {
      return content
    }

    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      <RemoveScroll as={Slot} allowPinchZoom={context.allowPinchZoom} shards={[context.contentRef]}>
        {content}
      </RemoveScroll>
    )
  }
)

/* -------------------------------------------------------------------------------------------------
 * DrawerContent
 * -----------------------------------------------------------------------------------------------*/

const CONTENT_NAME = 'DrawerContent'

const DrawerContentFrame = styled(ThemeableStack, {
  name: CONTENT_NAME,
  tag: 'drawer',
  marginTop: 'auto',
  pointerEvents: 'auto',
  position: 'relative',
  backgrounded: true,
  padded: true,
  elevate: true,

  variants: {
    size: {
      '...size': (size, { tokens }) => {
        const radius = tokens.radius[size]
        return {
          borderTopLeftRadius: radius,
          borderTopRightRadius: radius,
        }
      },
    },
  },

  defaultVariants: {
    size: '$4',
  },
})

type DrawerContentFrameProps = GetProps<typeof DrawerContentFrame>

type DrawerContentProps = DrawerContentFrameProps & {
  /**
   * Used to force mounting when more control is needed. Useful when
   * controlling animation with React animation libraries.
   */
  forceMount?: true
}

const DrawerContent = React.forwardRef<TamaguiElement, DrawerContentProps>(
  (props: ScopedProps<DrawerContentProps>, forwardedRef) => {
    const portalContext = usePortalContext(CONTENT_NAME, props.__scopeDrawer)
    const { forceMount = portalContext.forceMount, ...contentProps } = props
    const context = useDrawerContext(CONTENT_NAME, props.__scopeDrawer)
    return (
      <>
        {context.modal ? (
          <DrawerContentModal {...contentProps} ref={forwardedRef} />
        ) : (
          <DrawerContentNonModal {...contentProps} ref={forwardedRef} />
        )}
      </>
    )
  }
)

DrawerContent.displayName = CONTENT_NAME

/* -----------------------------------------------------------------------------------------------*/

interface DrawerContentTypeProps
  extends Omit<DrawerContentImplProps, 'trapFocus' | 'disableOutsidePointerEvents'> {}

const DrawerContentModal = React.forwardRef<TamaguiElement, DrawerContentTypeProps>(
  (props: ScopedProps<DrawerContentTypeProps>, forwardedRef) => {
    const context = useDrawerContext(CONTENT_NAME, props.__scopeDrawer)
    const contentRef = React.useRef<HTMLDivElement>(null)
    const composedRefs = useComposedRefs(forwardedRef, context.contentRef, contentRef)

    // aria-hide everything except the content (better supported equivalent to setting aria-modal)
    // React.useEffect(() => {
    //   const content = contentRef.current
    //   if (content) {
    //     console.log('should hide others')
    //     // return hideOthers(content)
    //   }
    // }, [])

    return (
      <DrawerContentImpl
        {...props}
        ref={composedRefs}
        // we make sure focus isn't trapped once `DrawerContent` has been closed
        // (closed !== unmounted when animating out)
        trapFocus={context.open}
        disableOutsidePointerEvents
        onCloseAutoFocus={composeEventHandlers(props.onCloseAutoFocus, (event) => {
          event.preventDefault()
          context.triggerRef.current?.focus()
        })}
        onPointerDownOutside={composeEventHandlers(props.onPointerDownOutside, (event) => {
          const originalEvent = event['detail'].originalEvent
          const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true
          const isRightClick = originalEvent.button === 2 || ctrlLeftClick
          // If the event is a right-click, we shouldn't close because
          // it is effectively as if we right-clicked the `Overlay`.
          if (isRightClick) event.preventDefault()
        })}
        // When focus is trapped, a `focusout` event may still happen.
        // We make sure we don't trigger our `onDismiss` in such case.
        onFocusOutside={composeEventHandlers(props.onFocusOutside, (event) =>
          event.preventDefault()
        )}
      />
    )
  }
)

/* -----------------------------------------------------------------------------------------------*/

const DrawerContentNonModal = React.forwardRef<TamaguiElement, DrawerContentTypeProps>(
  (props: ScopedProps<DrawerContentTypeProps>, forwardedRef) => {
    const context = useDrawerContext(CONTENT_NAME, props.__scopeDrawer)
    const hasInteractedOutsideRef = React.useRef(false)

    return (
      <DrawerContentImpl
        {...props}
        ref={forwardedRef}
        trapFocus={false}
        disableOutsidePointerEvents={false}
        onCloseAutoFocus={(event) => {
          props.onCloseAutoFocus?.(event)

          if (!event.defaultPrevented) {
            if (!hasInteractedOutsideRef.current) context.triggerRef.current?.focus()
            // Always prevent auto focus because we either focus manually or want user agent focus
            event.preventDefault()
          }

          hasInteractedOutsideRef.current = false
        }}
        onInteractOutside={(event) => {
          props.onInteractOutside?.(event)

          if (!event.defaultPrevented) hasInteractedOutsideRef.current = true

          // Prevent dismissing when clicking the trigger.
          // As the trigger is already setup to close, without doing so would
          // cause it to close and immediately open.
          //
          // We use `onInteractOutside` as some browsers also
          // focus on pointer down, creating the same issue.
          const target = event.target as HTMLElement
          const trigger = context.triggerRef.current
          if (!(trigger instanceof HTMLElement)) return
          const targetIsTrigger = trigger.contains(target)
          if (targetIsTrigger) event.preventDefault()
        }}
      />
    )
  }
)

/* -----------------------------------------------------------------------------------------------*/

type DrawerContentImplProps = DrawerContentFrameProps &
  Omit<DismissableProps, 'onDismiss'> & {
    /**
     * When `true`, focus cannot escape the `Content` via keyboard,
     * pointer, or a programmatic focus.
     * @defaultValue false
     */
    trapFocus?: FocusScopeProps['trapped']

    /**
     * Event handler called when auto-focusing on open.
     * Can be prevented.
     */
    onOpenAutoFocus?: FocusScopeProps['onMountAutoFocus']

    /**
     * Event handler called when auto-focusing on close.
     * Can be prevented.
     */
    onCloseAutoFocus?: FocusScopeProps['onUnmountAutoFocus']
  }

const DrawerContentImpl = React.forwardRef<TamaguiElement, DrawerContentImplProps>(
  (props: ScopedProps<DrawerContentImplProps>, forwardedRef) => {
    const {
      __scopeDrawer,
      trapFocus,
      onOpenAutoFocus,
      onCloseAutoFocus,
      disableOutsidePointerEvents,
      onEscapeKeyDown,
      onPointerDownOutside,
      onFocusOutside,
      onInteractOutside,
      ...contentProps
    } = props
    const context = useDrawerContext(CONTENT_NAME, __scopeDrawer)
    const contentRef = React.useRef<HTMLDivElement>(null)
    const composedRefs = useComposedRefs(forwardedRef, contentRef)

    // Make sure the whole tree has focus guards as our `Drawer` will be
    // the last element in the DOM (beacuse of the `Portal`)
    // useFocusGuards();

    return (
      <>
        <FocusScope
          loop
          trapped={trapFocus}
          onMountAutoFocus={onOpenAutoFocus}
          onUnmountAutoFocus={onCloseAutoFocus}
        >
          <Dismissable
            disableOutsidePointerEvents={disableOutsidePointerEvents}
            onEscapeKeyDown={onEscapeKeyDown}
            onPointerDownOutside={onPointerDownOutside}
            onFocusOutside={onFocusOutside}
            onInteractOutside={onInteractOutside}
            // @ts-ignore
            ref={composedRefs}
            onDismiss={() => context.onOpenChange(false)}
          >
            <DrawerContentFrame
              id={context.contentId}
              aria-describedby={context.descriptionId}
              aria-labelledby={context.titleId}
              data-state={getState(context.open)}
              {...contentProps}
            />
          </Dismissable>
        </FocusScope>
        {process.env.NODE_ENV !== 'production' && (
          <>
            <TitleWarning titleId={context.titleId} />
            <DescriptionWarning contentRef={contentRef} descriptionId={context.descriptionId} />
          </>
        )}
      </>
    )
  }
)

/* -------------------------------------------------------------------------------------------------
 * DrawerTitle
 * -----------------------------------------------------------------------------------------------*/

const TITLE_NAME = 'DrawerTitle'
const DrawerTitleFrame = styled(H2, {
  name: TITLE_NAME,
})

type DrawerTitleProps = GetProps<typeof DrawerTitleFrame>

const DrawerTitle = React.forwardRef<TamaguiElement, DrawerTitleProps>(
  (props: ScopedProps<DrawerTitleProps>, forwardedRef) => {
    const { __scopeDrawer, ...titleProps } = props
    const context = useDrawerContext(TITLE_NAME, __scopeDrawer)
    return <DrawerTitleFrame id={context.titleId} {...titleProps} ref={forwardedRef} />
  }
)

DrawerTitle.displayName = TITLE_NAME

/* -------------------------------------------------------------------------------------------------
 * DrawerDescription
 * -----------------------------------------------------------------------------------------------*/

const DrawerDescriptionFrame = styled(Paragraph, {
  name: 'DrawerDescription',
})

type DrawerDescriptionProps = GetProps<typeof DrawerDescriptionFrame>

const DESCRIPTION_NAME = 'DrawerDescription'

const DrawerDescription = React.forwardRef<TamaguiElement, DrawerDescriptionProps>(
  (props: ScopedProps<DrawerDescriptionProps>, forwardedRef) => {
    const { __scopeDrawer, ...descriptionProps } = props
    const context = useDrawerContext(DESCRIPTION_NAME, __scopeDrawer)
    return (
      <DrawerDescriptionFrame id={context.descriptionId} {...descriptionProps} ref={forwardedRef} />
    )
  }
)

DrawerDescription.displayName = DESCRIPTION_NAME

/* -------------------------------------------------------------------------------------------------
 * DrawerClose
 * -----------------------------------------------------------------------------------------------*/

const CLOSE_NAME = 'DrawerClose'

type DrawerCloseProps = YStackProps

const DrawerClose = React.forwardRef<TamaguiElement, DrawerCloseProps>(
  (props: ScopedProps<DrawerCloseProps>, forwardedRef) => {
    const { __scopeDrawer, ...closeProps } = props
    const context = useDrawerContext(CLOSE_NAME, __scopeDrawer)
    return (
      <YStack
        tag="button"
        {...closeProps}
        ref={forwardedRef}
        onPress={composeEventHandlers(props.onPress, () => context.onOpenChange(false))}
      />
    )
  }
)

DrawerClose.displayName = CLOSE_NAME

/* -----------------------------------------------------------------------------------------------*/

function getState(open: boolean) {
  return open ? 'open' : 'closed'
}

const TITLE_WARNING_NAME = 'DrawerTitleWarning'

const [WarningProvider, useWarningContext] = createContext(TITLE_WARNING_NAME, {
  contentName: CONTENT_NAME,
  titleName: TITLE_NAME,
  docsSlug: 'drawer',
})

type TitleWarningProps = { titleId?: string }

const TitleWarning: React.FC<TitleWarningProps> = ({ titleId }) => {
  const titleWarningContext = useWarningContext(TITLE_WARNING_NAME)

  const MESSAGE = `\`${titleWarningContext.contentName}\` requires a \`${titleWarningContext.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${titleWarningContext.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${titleWarningContext.docsSlug}`

  React.useEffect(() => {
    if (!isWeb) return
    if (titleId) {
      const hasTitle = document.getElementById(titleId)
      if (!hasTitle) throw new Error(MESSAGE)
    }
  }, [MESSAGE, titleId])

  return null
}

const DESCRIPTION_WARNING_NAME = 'DrawerDescriptionWarning'

type DescriptionWarningProps = {
  contentRef: React.RefObject<TamaguiElement>
  descriptionId?: string
}

const DescriptionWarning: React.FC<DescriptionWarningProps> = ({ contentRef, descriptionId }) => {
  const descriptionWarningContext = useWarningContext(DESCRIPTION_WARNING_NAME)
  const MESSAGE = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${descriptionWarningContext.contentName}}.`

  React.useEffect(() => {
    if (!isWeb) return
    const contentNode = contentRef.current
    if (!(contentNode instanceof HTMLElement)) {
      return
    }
    const describedById = contentNode.getAttribute('aria-describedby')
    // if we have an id and the user hasn't set aria-describedby={undefined}
    if (descriptionId && describedById) {
      const hasDescription = document.getElementById(descriptionId)
      if (!hasDescription) console.warn(MESSAGE)
    }
  }, [MESSAGE, contentRef, descriptionId])

  return null
}

/* -------------------------------------------------------------------------------------------------
 * Drawer
 * -----------------------------------------------------------------------------------------------*/

const Drawer = withStaticProperties(
  function Drawer(props: ScopedProps<DrawerProps>) {
    const {
      __scopeDrawer,
      children,
      open: openProp,
      defaultOpen = false,
      onOpenChange,
      modal = true,
      allowPinchZoom,
    } = props
    const triggerRef = React.useRef<HTMLButtonElement>(null)
    const contentRef = React.useRef<TamaguiElement>(null)
    const [open = false, setOpen] = useControllableState({
      prop: openProp,
      defaultProp: defaultOpen,
      onChange: onOpenChange,
    })

    return (
      <DrawerProvider
        scope={__scopeDrawer}
        triggerRef={triggerRef}
        contentRef={contentRef}
        contentId={useId() || ''}
        titleId={useId() || ''}
        descriptionId={useId() || ''}
        open={open}
        onOpenChange={setOpen}
        onOpenToggle={React.useCallback(() => setOpen((prevOpen) => !prevOpen), [setOpen])}
        modal={modal}
        allowPinchZoom={allowPinchZoom || false}
      >
        {children}
      </DrawerProvider>
    )
  },
  {
    Trigger: DrawerTrigger,
    Portal: DrawerPortal,
    Overlay: DrawerOverlay,
    Content: DrawerContent,
    Title: DrawerTitle,
    Description: DrawerDescription,
    Close: DrawerClose,
  }
)

export {
  createDrawerScope,
  //
  Drawer,
  DrawerTrigger,
  DrawerPortal,
  DrawerOverlay,
  DrawerContent,
  DrawerTitle,
  DrawerDescription,
  DrawerClose,
  //
  WarningProvider,
}
export type {
  DrawerProps,
  DrawerTriggerProps,
  DrawerPortalProps,
  DrawerOverlayProps,
  DrawerContentProps,
  DrawerTitleProps,
  DrawerDescriptionProps,
  DrawerCloseProps,
}
