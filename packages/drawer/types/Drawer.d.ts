import { GetProps } from '@tamagui/core';
import { Scope } from '@tamagui/create-context';
import { PortalProps } from '@tamagui/portal';
import { YStackProps } from '@tamagui/stacks';
import * as React from 'react';
import { View } from 'react-native';
import { RemoveScroll } from 'react-remove-scroll';
declare type ScopedProps<P> = P & {
    __scopeDrawer?: Scope;
};
declare type TamaguiElement = HTMLElement | View;
declare const createDrawerScope: import("@tamagui/create-context").CreateScope;
declare type RemoveScrollProps = React.ComponentProps<typeof RemoveScroll>;
interface DrawerProps {
    children?: React.ReactNode;
    open?: boolean;
    defaultOpen?: boolean;
    onOpenChange?(open: boolean): void;
    modal?: boolean;
    allowPinchZoom?: RemoveScrollProps['allowPinchZoom'];
}
interface DrawerTriggerProps extends YStackProps {
}
declare const DrawerTrigger: React.ForwardRefExoticComponent<DrawerTriggerProps & React.RefAttributes<TamaguiElement>>;
interface DrawerPortalProps extends Omit<PortalProps, 'asChild'> {
    children?: React.ReactNode;
    forceMount?: true;
}
declare const DrawerPortal: React.FC<DrawerPortalProps>;
interface DrawerOverlayProps extends YStackProps {
    forceMount?: true;
}
declare const DrawerOverlay: React.ForwardRefExoticComponent<DrawerOverlayProps & React.RefAttributes<TamaguiElement>>;
declare const DrawerContentFrame: import("@tamagui/core").TamaguiComponent<Omit<import("react-native").ViewProps, "display" | "children"> & import("@tamagui/core").RNWViewProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>> & Omit<{
    readonly fullscreen?: boolean | undefined;
    readonly elevation?: import("@tamagui/core").SizeTokens | undefined;
} & {
    fontFamily?: unknown;
    backgrounded?: boolean | undefined;
    radiused?: boolean | undefined;
    hoverable?: boolean | undefined;
    pressable?: boolean | undefined;
    focusable?: boolean | undefined;
    circular?: boolean | undefined;
    padded?: boolean | undefined;
    elevate?: boolean | undefined;
    bordered?: number | boolean | undefined;
    transparent?: boolean | undefined;
    chromeless?: boolean | undefined;
}, "size"> & {
    size?: import("@tamagui/core").SizeTokens | undefined;
} & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native").ViewProps, "display" | "children"> & import("@tamagui/core").RNWViewProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>> & Omit<{
    readonly fullscreen?: boolean | undefined;
    readonly elevation?: import("@tamagui/core").SizeTokens | undefined;
} & {
    fontFamily?: unknown;
    backgrounded?: boolean | undefined;
    radiused?: boolean | undefined;
    hoverable?: boolean | undefined;
    pressable?: boolean | undefined;
    focusable?: boolean | undefined;
    circular?: boolean | undefined;
    padded?: boolean | undefined;
    elevate?: boolean | undefined;
    bordered?: number | boolean | undefined;
    transparent?: boolean | undefined;
    chromeless?: boolean | undefined;
}, "size"> & {
    size?: import("@tamagui/core").SizeTokens | undefined;
}>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native").ViewProps, "display" | "children"> & import("@tamagui/core").RNWViewProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>> & Omit<{
    readonly fullscreen?: boolean | undefined;
    readonly elevation?: import("@tamagui/core").SizeTokens | undefined;
} & {
    fontFamily?: unknown;
    backgrounded?: boolean | undefined;
    radiused?: boolean | undefined;
    hoverable?: boolean | undefined;
    pressable?: boolean | undefined;
    focusable?: boolean | undefined;
    circular?: boolean | undefined;
    padded?: boolean | undefined;
    elevate?: boolean | undefined;
    bordered?: number | boolean | undefined;
    transparent?: boolean | undefined;
    chromeless?: boolean | undefined;
}, "size"> & {
    size?: import("@tamagui/core").SizeTokens | undefined;
}>>, any, import("@tamagui/core").StackPropsBase, {
    readonly fullscreen?: boolean | undefined;
    readonly elevation?: import("@tamagui/core").SizeTokens | undefined;
} & {
    fontFamily?: unknown;
    backgrounded?: boolean | undefined;
    radiused?: boolean | undefined;
    hoverable?: boolean | undefined;
    pressable?: boolean | undefined;
    focusable?: boolean | undefined;
    circular?: boolean | undefined;
    padded?: boolean | undefined;
    elevate?: boolean | undefined;
    bordered?: number | boolean | undefined;
    transparent?: boolean | undefined;
    chromeless?: boolean | undefined;
} & {
    size?: import("@tamagui/core").SizeTokens | undefined;
}>;
declare type DrawerContentFrameProps = GetProps<typeof DrawerContentFrame>;
declare type DrawerContentProps = DrawerContentFrameProps & {
    forceMount?: true;
};
declare const DrawerContent: React.ForwardRefExoticComponent<Omit<import("react-native").ViewProps, "display" | "children"> & import("@tamagui/core").RNWViewProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>> & Omit<{
    readonly fullscreen?: boolean | undefined;
    readonly elevation?: import("@tamagui/core").SizeTokens | undefined;
} & {
    fontFamily?: unknown;
    backgrounded?: boolean | undefined;
    radiused?: boolean | undefined;
    hoverable?: boolean | undefined;
    pressable?: boolean | undefined;
    focusable?: boolean | undefined;
    circular?: boolean | undefined;
    padded?: boolean | undefined;
    elevate?: boolean | undefined;
    bordered?: number | boolean | undefined;
    transparent?: boolean | undefined;
    chromeless?: boolean | undefined;
}, "size"> & {
    size?: import("@tamagui/core").SizeTokens | undefined;
} & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native").ViewProps, "display" | "children"> & import("@tamagui/core").RNWViewProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>> & Omit<{
    readonly fullscreen?: boolean | undefined;
    readonly elevation?: import("@tamagui/core").SizeTokens | undefined;
} & {
    fontFamily?: unknown;
    backgrounded?: boolean | undefined;
    radiused?: boolean | undefined;
    hoverable?: boolean | undefined;
    pressable?: boolean | undefined;
    focusable?: boolean | undefined;
    circular?: boolean | undefined;
    padded?: boolean | undefined;
    elevate?: boolean | undefined;
    bordered?: number | boolean | undefined;
    transparent?: boolean | undefined;
    chromeless?: boolean | undefined;
}, "size"> & {
    size?: import("@tamagui/core").SizeTokens | undefined;
}>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native").ViewProps, "display" | "children"> & import("@tamagui/core").RNWViewProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>> & Omit<{
    readonly fullscreen?: boolean | undefined;
    readonly elevation?: import("@tamagui/core").SizeTokens | undefined;
} & {
    fontFamily?: unknown;
    backgrounded?: boolean | undefined;
    radiused?: boolean | undefined;
    hoverable?: boolean | undefined;
    pressable?: boolean | undefined;
    focusable?: boolean | undefined;
    circular?: boolean | undefined;
    padded?: boolean | undefined;
    elevate?: boolean | undefined;
    bordered?: number | boolean | undefined;
    transparent?: boolean | undefined;
    chromeless?: boolean | undefined;
}, "size"> & {
    size?: import("@tamagui/core").SizeTokens | undefined;
}>> & {
    forceMount?: true | undefined;
} & React.RefAttributes<TamaguiElement>>;
declare const DrawerTitleFrame: import("@tamagui/core").TamaguiComponent<(Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{}, "size"> & {
    size?: import("@tamagui/core").FontSizeTokens | undefined;
} & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{}, "size"> & {
    size?: import("@tamagui/core").FontSizeTokens | undefined;
}>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{}, "size"> & {
    size?: import("@tamagui/core").FontSizeTokens | undefined;
}>>) | (Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{
    size?: import("@tamagui/core").FontSizeTokens | undefined;
}, string | number> & {
    [x: string]: undefined;
} & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{
    size?: import("@tamagui/core").FontSizeTokens | undefined;
}, string | number> & {
    [x: string]: undefined;
}>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{
    size?: import("@tamagui/core").FontSizeTokens | undefined;
}, string | number> & {
    [x: string]: undefined;
}>>) | (Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{
    size?: import("@tamagui/core").FontSizeTokens | undefined;
} & ({} | {
    [x: string]: undefined;
}), string | number> & {
    [x: string]: undefined;
} & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{
    size?: import("@tamagui/core").FontSizeTokens | undefined;
} & ({} | {
    [x: string]: undefined;
}), string | number> & {
    [x: string]: undefined;
}>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{
    size?: import("@tamagui/core").FontSizeTokens | undefined;
} & ({} | {
    [x: string]: undefined;
}), string | number> & {
    [x: string]: undefined;
}>>) | (Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{
    size?: import("@tamagui/core").FontSizeTokens | undefined;
} & ({} | {
    [x: string]: undefined;
}), string | number> & {
    [x: string]: undefined;
} & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{
    size?: import("@tamagui/core").FontSizeTokens | undefined;
} & ({} | {
    [x: string]: undefined;
}), string | number> & {
    [x: string]: undefined;
}>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{
    size?: import("@tamagui/core").FontSizeTokens | undefined;
} & ({} | {
    [x: string]: undefined;
}), string | number> & {
    [x: string]: undefined;
}>>) | (Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<({
    size?: import("@tamagui/core").FontSizeTokens | undefined;
} & ({} | {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
}), string | number> & {
    [x: string]: undefined;
} & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<({
    size?: import("@tamagui/core").FontSizeTokens | undefined;
} & ({} | {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
}), string | number> & {
    [x: string]: undefined;
}>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<({
    size?: import("@tamagui/core").FontSizeTokens | undefined;
} & ({} | {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
}), string | number> & {
    [x: string]: undefined;
}>>) | (Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<({
    size?: import("@tamagui/core").FontSizeTokens | undefined;
} & ({} | {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
}), string | number> & {
    [x: string]: undefined;
} & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<({
    size?: import("@tamagui/core").FontSizeTokens | undefined;
} & ({} | {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
}), string | number> & {
    [x: string]: undefined;
}>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<({
    size?: import("@tamagui/core").FontSizeTokens | undefined;
} & ({} | {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
}), string | number> & {
    [x: string]: undefined;
}>>) | (Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<({
    size?: import("@tamagui/core").FontSizeTokens | undefined;
} & ({} | {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
}), string | number> & {
    [x: string]: undefined;
} & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<({
    size?: import("@tamagui/core").FontSizeTokens | undefined;
} & ({} | {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
}), string | number> & {
    [x: string]: undefined;
}>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<({
    size?: import("@tamagui/core").FontSizeTokens | undefined;
} & ({} | {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
}), string | number> & {
    [x: string]: undefined;
}>>) | (Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<({
    size?: import("@tamagui/core").FontSizeTokens | undefined;
} & ({} | {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
}), string | number> & {
    [x: string]: undefined;
} & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<({
    size?: import("@tamagui/core").FontSizeTokens | undefined;
} & ({} | {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
}), string | number> & {
    [x: string]: undefined;
}>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<({
    size?: import("@tamagui/core").FontSizeTokens | undefined;
} & ({} | {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
}), string | number> & {
    [x: string]: undefined;
}>>) | (Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<(({
    size?: import("@tamagui/core").FontSizeTokens | undefined;
} & ({} | {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
}), string | number> & {
    [x: string]: undefined;
} & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<(({
    size?: import("@tamagui/core").FontSizeTokens | undefined;
} & ({} | {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
}), string | number> & {
    [x: string]: undefined;
}>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<(({
    size?: import("@tamagui/core").FontSizeTokens | undefined;
} & ({} | {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
}), string | number> & {
    [x: string]: undefined;
}>>) | (Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<(({
    size?: import("@tamagui/core").FontSizeTokens | undefined;
} & ({} | {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
}), string | number> & {
    [x: string]: undefined;
} & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<(({
    size?: import("@tamagui/core").FontSizeTokens | undefined;
} & ({} | {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
}), string | number> & {
    [x: string]: undefined;
}>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<(({
    size?: import("@tamagui/core").FontSizeTokens | undefined;
} & ({} | {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
}), string | number> & {
    [x: string]: undefined;
}>>) | (Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<(({
    size?: import("@tamagui/core").FontSizeTokens | undefined;
} & ({} | {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
}), string | number> & {
    [x: string]: undefined;
} & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<(({
    size?: import("@tamagui/core").FontSizeTokens | undefined;
} & ({} | {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
}), string | number> & {
    [x: string]: undefined;
}>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<(({
    size?: import("@tamagui/core").FontSizeTokens | undefined;
} & ({} | {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
}), string | number> & {
    [x: string]: undefined;
}>>) | (Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<(({
    size?: import("@tamagui/core").FontSizeTokens | undefined;
} & ({} | {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
}), string | number> & {
    [x: string]: undefined;
} & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<(({
    size?: import("@tamagui/core").FontSizeTokens | undefined;
} & ({} | {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
}), string | number> & {
    [x: string]: undefined;
}>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<(({
    size?: import("@tamagui/core").FontSizeTokens | undefined;
} & ({} | {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
}), string | number> & {
    [x: string]: undefined;
}>>) | (Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<(({
    size?: import("@tamagui/core").FontSizeTokens | undefined;
} & ({} | {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
}), string | number> & {
    [x: string]: undefined;
} & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<(({
    size?: import("@tamagui/core").FontSizeTokens | undefined;
} & ({} | {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
}), string | number> & {
    [x: string]: undefined;
}>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<(({
    size?: import("@tamagui/core").FontSizeTokens | undefined;
} & ({} | {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
}), string | number> & {
    [x: string]: undefined;
}>>) | (Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<(({
    size?: import("@tamagui/core").FontSizeTokens | undefined;
} & ({} | {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
}), string | number> & {
    [x: string]: undefined;
} & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<(({
    size?: import("@tamagui/core").FontSizeTokens | undefined;
} & ({} | {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
}), string | number> & {
    [x: string]: undefined;
}>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<(({
    size?: import("@tamagui/core").FontSizeTokens | undefined;
} & ({} | {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
}), string | number> & {
    [x: string]: undefined;
}>>) | (Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<(({
    size?: import("@tamagui/core").FontSizeTokens | undefined;
} & ({} | {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
}), string | number> & {
    [x: string]: undefined;
} & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<(({
    size?: import("@tamagui/core").FontSizeTokens | undefined;
} & ({} | {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
}), string | number> & {
    [x: string]: undefined;
}>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<(({
    size?: import("@tamagui/core").FontSizeTokens | undefined;
} & ({} | {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
}), string | number> & {
    [x: string]: undefined;
}>>) | (Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<(({
    size?: import("@tamagui/core").FontSizeTokens | undefined;
} & ({} | {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
}), string | number> & {
    [x: string]: undefined;
} & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<(({
    size?: import("@tamagui/core").FontSizeTokens | undefined;
} & ({} | {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
}), string | number> & {
    [x: string]: undefined;
}>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<(({
    size?: import("@tamagui/core").FontSizeTokens | undefined;
} & ({} | {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
}), string | number> & {
    [x: string]: undefined;
}>>), any, import("@tamagui/core").TextPropsBase, ((({
    size?: import("@tamagui/core").FontSizeTokens | undefined;
} & ({} | {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
})>;
declare type DrawerTitleProps = GetProps<typeof DrawerTitleFrame>;
declare const DrawerTitle: React.ForwardRefExoticComponent<((Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{}, "size"> & {
    size?: import("@tamagui/core").FontSizeTokens | undefined;
} & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{}, "size"> & {
    size?: import("@tamagui/core").FontSizeTokens | undefined;
}>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{}, "size"> & {
    size?: import("@tamagui/core").FontSizeTokens | undefined;
}>>) | Pick<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{
    size?: import("@tamagui/core").FontSizeTokens | undefined;
}, string | number> & {
    [x: string]: undefined;
} & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{
    size?: import("@tamagui/core").FontSizeTokens | undefined;
}, string | number> & {
    [x: string]: undefined;
}>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{
    size?: import("@tamagui/core").FontSizeTokens | undefined;
}, string | number> & {
    [x: string]: undefined;
}>>, string | number> | Pick<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{
    size?: import("@tamagui/core").FontSizeTokens | undefined;
} & ({} | {
    [x: string]: undefined;
}), string | number> & {
    [x: string]: undefined;
} & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{
    size?: import("@tamagui/core").FontSizeTokens | undefined;
} & ({} | {
    [x: string]: undefined;
}), string | number> & {
    [x: string]: undefined;
}>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{
    size?: import("@tamagui/core").FontSizeTokens | undefined;
} & ({} | {
    [x: string]: undefined;
}), string | number> & {
    [x: string]: undefined;
}>>, string | number> | Pick<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{
    size?: import("@tamagui/core").FontSizeTokens | undefined;
} & ({} | {
    [x: string]: undefined;
}), string | number> & {
    [x: string]: undefined;
} & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{
    size?: import("@tamagui/core").FontSizeTokens | undefined;
} & ({} | {
    [x: string]: undefined;
}), string | number> & {
    [x: string]: undefined;
}>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{
    size?: import("@tamagui/core").FontSizeTokens | undefined;
} & ({} | {
    [x: string]: undefined;
}), string | number> & {
    [x: string]: undefined;
}>>, string | number> | Pick<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<({
    size?: import("@tamagui/core").FontSizeTokens | undefined;
} & ({} | {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
}), string | number> & {
    [x: string]: undefined;
} & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<({
    size?: import("@tamagui/core").FontSizeTokens | undefined;
} & ({} | {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
}), string | number> & {
    [x: string]: undefined;
}>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<({
    size?: import("@tamagui/core").FontSizeTokens | undefined;
} & ({} | {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
}), string | number> & {
    [x: string]: undefined;
}>>, string | number> | Pick<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<({
    size?: import("@tamagui/core").FontSizeTokens | undefined;
} & ({} | {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
}), string | number> & {
    [x: string]: undefined;
} & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<({
    size?: import("@tamagui/core").FontSizeTokens | undefined;
} & ({} | {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
}), string | number> & {
    [x: string]: undefined;
}>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<({
    size?: import("@tamagui/core").FontSizeTokens | undefined;
} & ({} | {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
}), string | number> & {
    [x: string]: undefined;
}>>, string | number> | Pick<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<({
    size?: import("@tamagui/core").FontSizeTokens | undefined;
} & ({} | {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
}), string | number> & {
    [x: string]: undefined;
} & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<({
    size?: import("@tamagui/core").FontSizeTokens | undefined;
} & ({} | {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
}), string | number> & {
    [x: string]: undefined;
}>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<({
    size?: import("@tamagui/core").FontSizeTokens | undefined;
} & ({} | {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
}), string | number> & {
    [x: string]: undefined;
}>>, string | number> | Pick<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<({
    size?: import("@tamagui/core").FontSizeTokens | undefined;
} & ({} | {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
}), string | number> & {
    [x: string]: undefined;
} & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<({
    size?: import("@tamagui/core").FontSizeTokens | undefined;
} & ({} | {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
}), string | number> & {
    [x: string]: undefined;
}>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<({
    size?: import("@tamagui/core").FontSizeTokens | undefined;
} & ({} | {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
}), string | number> & {
    [x: string]: undefined;
}>>, string | number> | Pick<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<(({
    size?: import("@tamagui/core").FontSizeTokens | undefined;
} & ({} | {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
}), string | number> & {
    [x: string]: undefined;
} & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<(({
    size?: import("@tamagui/core").FontSizeTokens | undefined;
} & ({} | {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
}), string | number> & {
    [x: string]: undefined;
}>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<(({
    size?: import("@tamagui/core").FontSizeTokens | undefined;
} & ({} | {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
}), string | number> & {
    [x: string]: undefined;
}>>, string | number> | Pick<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<(({
    size?: import("@tamagui/core").FontSizeTokens | undefined;
} & ({} | {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
}), string | number> & {
    [x: string]: undefined;
} & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<(({
    size?: import("@tamagui/core").FontSizeTokens | undefined;
} & ({} | {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
}), string | number> & {
    [x: string]: undefined;
}>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<(({
    size?: import("@tamagui/core").FontSizeTokens | undefined;
} & ({} | {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
}), string | number> & {
    [x: string]: undefined;
}>>, string | number> | Pick<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<(({
    size?: import("@tamagui/core").FontSizeTokens | undefined;
} & ({} | {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
}), string | number> & {
    [x: string]: undefined;
} & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<(({
    size?: import("@tamagui/core").FontSizeTokens | undefined;
} & ({} | {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
}), string | number> & {
    [x: string]: undefined;
}>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<(({
    size?: import("@tamagui/core").FontSizeTokens | undefined;
} & ({} | {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
}), string | number> & {
    [x: string]: undefined;
}>>, string | number> | Pick<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<(({
    size?: import("@tamagui/core").FontSizeTokens | undefined;
} & ({} | {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
}), string | number> & {
    [x: string]: undefined;
} & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<(({
    size?: import("@tamagui/core").FontSizeTokens | undefined;
} & ({} | {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
}), string | number> & {
    [x: string]: undefined;
}>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<(({
    size?: import("@tamagui/core").FontSizeTokens | undefined;
} & ({} | {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
}), string | number> & {
    [x: string]: undefined;
}>>, string | number> | Pick<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<(({
    size?: import("@tamagui/core").FontSizeTokens | undefined;
} & ({} | {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
}), string | number> & {
    [x: string]: undefined;
} & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<(({
    size?: import("@tamagui/core").FontSizeTokens | undefined;
} & ({} | {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
}), string | number> & {
    [x: string]: undefined;
}>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<(({
    size?: import("@tamagui/core").FontSizeTokens | undefined;
} & ({} | {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
}), string | number> & {
    [x: string]: undefined;
}>>, string | number> | Pick<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<(({
    size?: import("@tamagui/core").FontSizeTokens | undefined;
} & ({} | {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
}), string | number> & {
    [x: string]: undefined;
} & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<(({
    size?: import("@tamagui/core").FontSizeTokens | undefined;
} & ({} | {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
}), string | number> & {
    [x: string]: undefined;
}>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<(({
    size?: import("@tamagui/core").FontSizeTokens | undefined;
} & ({} | {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
}), string | number> & {
    [x: string]: undefined;
}>>, string | number> | Pick<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<(({
    size?: import("@tamagui/core").FontSizeTokens | undefined;
} & ({} | {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
}), string | number> & {
    [x: string]: undefined;
} & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<(({
    size?: import("@tamagui/core").FontSizeTokens | undefined;
} & ({} | {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
}), string | number> & {
    [x: string]: undefined;
}>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<(({
    size?: import("@tamagui/core").FontSizeTokens | undefined;
} & ({} | {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
}), string | number> & {
    [x: string]: undefined;
}>>, string | number> | Pick<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<(({
    size?: import("@tamagui/core").FontSizeTokens | undefined;
} & ({} | {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
}), string | number> & {
    [x: string]: undefined;
} & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<(({
    size?: import("@tamagui/core").FontSizeTokens | undefined;
} & ({} | {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
}), string | number> & {
    [x: string]: undefined;
}>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<(({
    size?: import("@tamagui/core").FontSizeTokens | undefined;
} & ({} | {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
}), string | number> & {
    [x: string]: undefined;
}>>, string | number>) & React.RefAttributes<TamaguiElement>>;
declare const DrawerDescriptionFrame: import("@tamagui/core").TamaguiComponent<(Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{}, "size"> & {
    size?: import("@tamagui/core").FontSizeTokens | undefined;
} & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{}, "size"> & {
    size?: import("@tamagui/core").FontSizeTokens | undefined;
}>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{}, "size"> & {
    size?: import("@tamagui/core").FontSizeTokens | undefined;
}>>) | (Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{
    size?: import("@tamagui/core").FontSizeTokens | undefined;
}, string | number> & {
    [x: string]: undefined;
} & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{
    size?: import("@tamagui/core").FontSizeTokens | undefined;
}, string | number> & {
    [x: string]: undefined;
}>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{
    size?: import("@tamagui/core").FontSizeTokens | undefined;
}, string | number> & {
    [x: string]: undefined;
}>>) | (Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{
    size?: import("@tamagui/core").FontSizeTokens | undefined;
} & ({} | {
    [x: string]: undefined;
}), string | number> & {
    [x: string]: undefined;
} & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{
    size?: import("@tamagui/core").FontSizeTokens | undefined;
} & ({} | {
    [x: string]: undefined;
}), string | number> & {
    [x: string]: undefined;
}>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{
    size?: import("@tamagui/core").FontSizeTokens | undefined;
} & ({} | {
    [x: string]: undefined;
}), string | number> & {
    [x: string]: undefined;
}>>) | (Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{
    size?: import("@tamagui/core").FontSizeTokens | undefined;
} & ({} | {
    [x: string]: undefined;
}), string | number> & {
    [x: string]: undefined;
} & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{
    size?: import("@tamagui/core").FontSizeTokens | undefined;
} & ({} | {
    [x: string]: undefined;
}), string | number> & {
    [x: string]: undefined;
}>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{
    size?: import("@tamagui/core").FontSizeTokens | undefined;
} & ({} | {
    [x: string]: undefined;
}), string | number> & {
    [x: string]: undefined;
}>>), any, import("@tamagui/core").TextPropsBase, ({
    size?: import("@tamagui/core").FontSizeTokens | undefined;
} & ({} | {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
})>;
declare type DrawerDescriptionProps = GetProps<typeof DrawerDescriptionFrame>;
declare const DrawerDescription: React.ForwardRefExoticComponent<((Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{}, "size"> & {
    size?: import("@tamagui/core").FontSizeTokens | undefined;
} & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{}, "size"> & {
    size?: import("@tamagui/core").FontSizeTokens | undefined;
}>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{}, "size"> & {
    size?: import("@tamagui/core").FontSizeTokens | undefined;
}>>) | Pick<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{
    size?: import("@tamagui/core").FontSizeTokens | undefined;
}, string | number> & {
    [x: string]: undefined;
} & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{
    size?: import("@tamagui/core").FontSizeTokens | undefined;
}, string | number> & {
    [x: string]: undefined;
}>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{
    size?: import("@tamagui/core").FontSizeTokens | undefined;
}, string | number> & {
    [x: string]: undefined;
}>>, string | number> | Pick<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{
    size?: import("@tamagui/core").FontSizeTokens | undefined;
} & ({} | {
    [x: string]: undefined;
}), string | number> & {
    [x: string]: undefined;
} & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{
    size?: import("@tamagui/core").FontSizeTokens | undefined;
} & ({} | {
    [x: string]: undefined;
}), string | number> & {
    [x: string]: undefined;
}>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{
    size?: import("@tamagui/core").FontSizeTokens | undefined;
} & ({} | {
    [x: string]: undefined;
}), string | number> & {
    [x: string]: undefined;
}>>, string | number> | Pick<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{
    size?: import("@tamagui/core").FontSizeTokens | undefined;
} & ({} | {
    [x: string]: undefined;
}), string | number> & {
    [x: string]: undefined;
} & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{
    size?: import("@tamagui/core").FontSizeTokens | undefined;
} & ({} | {
    [x: string]: undefined;
}), string | number> & {
    [x: string]: undefined;
}>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{
    size?: import("@tamagui/core").FontSizeTokens | undefined;
} & ({} | {
    [x: string]: undefined;
}), string | number> & {
    [x: string]: undefined;
}>>, string | number>) & React.RefAttributes<TamaguiElement>>;
declare type DrawerCloseProps = YStackProps;
declare const DrawerClose: React.ForwardRefExoticComponent<Omit<import("react-native").ViewProps, "display" | "children"> & import("@tamagui/core").RNWViewProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>> & Omit<{}, "elevation" | "fullscreen"> & {
    readonly fullscreen?: boolean | undefined;
    readonly elevation?: import("@tamagui/core").SizeTokens | undefined;
} & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native").ViewProps, "display" | "children"> & import("@tamagui/core").RNWViewProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>> & Omit<{}, "elevation" | "fullscreen"> & {
    readonly fullscreen?: boolean | undefined;
    readonly elevation?: import("@tamagui/core").SizeTokens | undefined;
}>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native").ViewProps, "display" | "children"> & import("@tamagui/core").RNWViewProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>> & Omit<{}, "elevation" | "fullscreen"> & {
    readonly fullscreen?: boolean | undefined;
    readonly elevation?: import("@tamagui/core").SizeTokens | undefined;
}>> & React.RefAttributes<TamaguiElement>>;
declare const WarningProvider: {
    (props: {
        contentName: string;
        titleName: string;
        docsSlug: string;
    } & {
        children: React.ReactNode;
    }): JSX.Element;
    displayName: string;
};
declare const Drawer: ((props: ScopedProps<DrawerProps>) => JSX.Element) & {
    Trigger: React.ForwardRefExoticComponent<DrawerTriggerProps & React.RefAttributes<TamaguiElement>>;
    Portal: React.FC<DrawerPortalProps>;
    Overlay: React.ForwardRefExoticComponent<DrawerOverlayProps & React.RefAttributes<TamaguiElement>>;
    Content: React.ForwardRefExoticComponent<Omit<import("react-native").ViewProps, "display" | "children"> & import("@tamagui/core").RNWViewProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>> & Omit<{
        readonly fullscreen?: boolean | undefined;
        readonly elevation?: import("@tamagui/core").SizeTokens | undefined;
    } & {
        fontFamily?: unknown;
        backgrounded?: boolean | undefined;
        radiused?: boolean | undefined;
        hoverable?: boolean | undefined;
        pressable?: boolean | undefined;
        focusable?: boolean | undefined;
        circular?: boolean | undefined;
        padded?: boolean | undefined;
        elevate?: boolean | undefined;
        bordered?: number | boolean | undefined;
        transparent?: boolean | undefined;
        chromeless?: boolean | undefined;
    }, "size"> & {
        size?: import("@tamagui/core").SizeTokens | undefined;
    } & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native").ViewProps, "display" | "children"> & import("@tamagui/core").RNWViewProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>> & Omit<{
        readonly fullscreen?: boolean | undefined;
        readonly elevation?: import("@tamagui/core").SizeTokens | undefined;
    } & {
        fontFamily?: unknown;
        backgrounded?: boolean | undefined;
        radiused?: boolean | undefined;
        hoverable?: boolean | undefined;
        pressable?: boolean | undefined;
        focusable?: boolean | undefined;
        circular?: boolean | undefined;
        padded?: boolean | undefined;
        elevate?: boolean | undefined;
        bordered?: number | boolean | undefined;
        transparent?: boolean | undefined;
        chromeless?: boolean | undefined;
    }, "size"> & {
        size?: import("@tamagui/core").SizeTokens | undefined;
    }>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native").ViewProps, "display" | "children"> & import("@tamagui/core").RNWViewProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>> & Omit<{
        readonly fullscreen?: boolean | undefined;
        readonly elevation?: import("@tamagui/core").SizeTokens | undefined;
    } & {
        fontFamily?: unknown;
        backgrounded?: boolean | undefined;
        radiused?: boolean | undefined;
        hoverable?: boolean | undefined;
        pressable?: boolean | undefined;
        focusable?: boolean | undefined;
        circular?: boolean | undefined;
        padded?: boolean | undefined;
        elevate?: boolean | undefined;
        bordered?: number | boolean | undefined;
        transparent?: boolean | undefined;
        chromeless?: boolean | undefined;
    }, "size"> & {
        size?: import("@tamagui/core").SizeTokens | undefined;
    }>> & {
        forceMount?: true | undefined;
    } & React.RefAttributes<TamaguiElement>>;
    Title: React.ForwardRefExoticComponent<((Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{}, "size"> & {
        size?: import("@tamagui/core").FontSizeTokens | undefined;
    } & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{}, "size"> & {
        size?: import("@tamagui/core").FontSizeTokens | undefined;
    }>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{}, "size"> & {
        size?: import("@tamagui/core").FontSizeTokens | undefined;
    }>>) | Pick<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{
        size?: import("@tamagui/core").FontSizeTokens | undefined;
    }, string | number> & {
        [x: string]: undefined;
    } & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{
        size?: import("@tamagui/core").FontSizeTokens | undefined;
    }, string | number> & {
        [x: string]: undefined;
    }>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{
        size?: import("@tamagui/core").FontSizeTokens | undefined;
    }, string | number> & {
        [x: string]: undefined;
    }>>, string | number> | Pick<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{
        size?: import("@tamagui/core").FontSizeTokens | undefined;
    } & ({} | {
        [x: string]: undefined;
    }), string | number> & {
        [x: string]: undefined;
    } & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{
        size?: import("@tamagui/core").FontSizeTokens | undefined;
    } & ({} | {
        [x: string]: undefined;
    }), string | number> & {
        [x: string]: undefined;
    }>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{
        size?: import("@tamagui/core").FontSizeTokens | undefined;
    } & ({} | {
        [x: string]: undefined;
    }), string | number> & {
        [x: string]: undefined;
    }>>, string | number> | Pick<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{
        size?: import("@tamagui/core").FontSizeTokens | undefined;
    } & ({} | {
        [x: string]: undefined;
    }), string | number> & {
        [x: string]: undefined;
    } & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{
        size?: import("@tamagui/core").FontSizeTokens | undefined;
    } & ({} | {
        [x: string]: undefined;
    }), string | number> & {
        [x: string]: undefined;
    }>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{
        size?: import("@tamagui/core").FontSizeTokens | undefined;
    } & ({} | {
        [x: string]: undefined;
    }), string | number> & {
        [x: string]: undefined;
    }>>, string | number> | Pick<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<({
        size?: import("@tamagui/core").FontSizeTokens | undefined;
    } & ({} | {
        [x: string]: undefined;
    })) & ({} | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    }), string | number> & {
        [x: string]: undefined;
    } & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<({
        size?: import("@tamagui/core").FontSizeTokens | undefined;
    } & ({} | {
        [x: string]: undefined;
    })) & ({} | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    }), string | number> & {
        [x: string]: undefined;
    }>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<({
        size?: import("@tamagui/core").FontSizeTokens | undefined;
    } & ({} | {
        [x: string]: undefined;
    })) & ({} | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    }), string | number> & {
        [x: string]: undefined;
    }>>, string | number> | Pick<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<({
        size?: import("@tamagui/core").FontSizeTokens | undefined;
    } & ({} | {
        [x: string]: undefined;
    })) & ({} | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    }), string | number> & {
        [x: string]: undefined;
    } & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<({
        size?: import("@tamagui/core").FontSizeTokens | undefined;
    } & ({} | {
        [x: string]: undefined;
    })) & ({} | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    }), string | number> & {
        [x: string]: undefined;
    }>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<({
        size?: import("@tamagui/core").FontSizeTokens | undefined;
    } & ({} | {
        [x: string]: undefined;
    })) & ({} | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    }), string | number> & {
        [x: string]: undefined;
    }>>, string | number> | Pick<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<({
        size?: import("@tamagui/core").FontSizeTokens | undefined;
    } & ({} | {
        [x: string]: undefined;
    })) & ({} | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    }), string | number> & {
        [x: string]: undefined;
    } & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<({
        size?: import("@tamagui/core").FontSizeTokens | undefined;
    } & ({} | {
        [x: string]: undefined;
    })) & ({} | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    }), string | number> & {
        [x: string]: undefined;
    }>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<({
        size?: import("@tamagui/core").FontSizeTokens | undefined;
    } & ({} | {
        [x: string]: undefined;
    })) & ({} | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    }), string | number> & {
        [x: string]: undefined;
    }>>, string | number> | Pick<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<({
        size?: import("@tamagui/core").FontSizeTokens | undefined;
    } & ({} | {
        [x: string]: undefined;
    })) & ({} | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    }), string | number> & {
        [x: string]: undefined;
    } & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<({
        size?: import("@tamagui/core").FontSizeTokens | undefined;
    } & ({} | {
        [x: string]: undefined;
    })) & ({} | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    }), string | number> & {
        [x: string]: undefined;
    }>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<({
        size?: import("@tamagui/core").FontSizeTokens | undefined;
    } & ({} | {
        [x: string]: undefined;
    })) & ({} | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    }), string | number> & {
        [x: string]: undefined;
    }>>, string | number> | Pick<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<(({
        size?: import("@tamagui/core").FontSizeTokens | undefined;
    } & ({} | {
        [x: string]: undefined;
    })) & ({} | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    })) & ({} | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    }), string | number> & {
        [x: string]: undefined;
    } & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<(({
        size?: import("@tamagui/core").FontSizeTokens | undefined;
    } & ({} | {
        [x: string]: undefined;
    })) & ({} | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    })) & ({} | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    }), string | number> & {
        [x: string]: undefined;
    }>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<(({
        size?: import("@tamagui/core").FontSizeTokens | undefined;
    } & ({} | {
        [x: string]: undefined;
    })) & ({} | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    })) & ({} | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    }), string | number> & {
        [x: string]: undefined;
    }>>, string | number> | Pick<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<(({
        size?: import("@tamagui/core").FontSizeTokens | undefined;
    } & ({} | {
        [x: string]: undefined;
    })) & ({} | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    })) & ({} | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    }), string | number> & {
        [x: string]: undefined;
    } & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<(({
        size?: import("@tamagui/core").FontSizeTokens | undefined;
    } & ({} | {
        [x: string]: undefined;
    })) & ({} | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    })) & ({} | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    }), string | number> & {
        [x: string]: undefined;
    }>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<(({
        size?: import("@tamagui/core").FontSizeTokens | undefined;
    } & ({} | {
        [x: string]: undefined;
    })) & ({} | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    })) & ({} | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    }), string | number> & {
        [x: string]: undefined;
    }>>, string | number> | Pick<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<(({
        size?: import("@tamagui/core").FontSizeTokens | undefined;
    } & ({} | {
        [x: string]: undefined;
    })) & ({} | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    })) & ({} | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    }), string | number> & {
        [x: string]: undefined;
    } & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<(({
        size?: import("@tamagui/core").FontSizeTokens | undefined;
    } & ({} | {
        [x: string]: undefined;
    })) & ({} | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    })) & ({} | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    }), string | number> & {
        [x: string]: undefined;
    }>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<(({
        size?: import("@tamagui/core").FontSizeTokens | undefined;
    } & ({} | {
        [x: string]: undefined;
    })) & ({} | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    })) & ({} | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    }), string | number> & {
        [x: string]: undefined;
    }>>, string | number> | Pick<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<(({
        size?: import("@tamagui/core").FontSizeTokens | undefined;
    } & ({} | {
        [x: string]: undefined;
    })) & ({} | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    })) & ({} | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    }), string | number> & {
        [x: string]: undefined;
    } & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<(({
        size?: import("@tamagui/core").FontSizeTokens | undefined;
    } & ({} | {
        [x: string]: undefined;
    })) & ({} | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    })) & ({} | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    }), string | number> & {
        [x: string]: undefined;
    }>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<(({
        size?: import("@tamagui/core").FontSizeTokens | undefined;
    } & ({} | {
        [x: string]: undefined;
    })) & ({} | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    })) & ({} | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    }), string | number> & {
        [x: string]: undefined;
    }>>, string | number> | Pick<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<(({
        size?: import("@tamagui/core").FontSizeTokens | undefined;
    } & ({} | {
        [x: string]: undefined;
    })) & ({} | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    })) & ({} | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    }), string | number> & {
        [x: string]: undefined;
    } & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<(({
        size?: import("@tamagui/core").FontSizeTokens | undefined;
    } & ({} | {
        [x: string]: undefined;
    })) & ({} | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    })) & ({} | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    }), string | number> & {
        [x: string]: undefined;
    }>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<(({
        size?: import("@tamagui/core").FontSizeTokens | undefined;
    } & ({} | {
        [x: string]: undefined;
    })) & ({} | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    })) & ({} | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    }), string | number> & {
        [x: string]: undefined;
    }>>, string | number> | Pick<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<(({
        size?: import("@tamagui/core").FontSizeTokens | undefined;
    } & ({} | {
        [x: string]: undefined;
    })) & ({} | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    })) & ({} | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    }), string | number> & {
        [x: string]: undefined;
    } & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<(({
        size?: import("@tamagui/core").FontSizeTokens | undefined;
    } & ({} | {
        [x: string]: undefined;
    })) & ({} | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    })) & ({} | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    }), string | number> & {
        [x: string]: undefined;
    }>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<(({
        size?: import("@tamagui/core").FontSizeTokens | undefined;
    } & ({} | {
        [x: string]: undefined;
    })) & ({} | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    })) & ({} | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    }), string | number> & {
        [x: string]: undefined;
    }>>, string | number> | Pick<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<(({
        size?: import("@tamagui/core").FontSizeTokens | undefined;
    } & ({} | {
        [x: string]: undefined;
    })) & ({} | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    })) & ({} | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    }), string | number> & {
        [x: string]: undefined;
    } & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<(({
        size?: import("@tamagui/core").FontSizeTokens | undefined;
    } & ({} | {
        [x: string]: undefined;
    })) & ({} | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    })) & ({} | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    }), string | number> & {
        [x: string]: undefined;
    }>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<(({
        size?: import("@tamagui/core").FontSizeTokens | undefined;
    } & ({} | {
        [x: string]: undefined;
    })) & ({} | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    })) & ({} | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    }), string | number> & {
        [x: string]: undefined;
    }>>, string | number> | Pick<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<(({
        size?: import("@tamagui/core").FontSizeTokens | undefined;
    } & ({} | {
        [x: string]: undefined;
    })) & ({} | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    })) & ({} | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    }), string | number> & {
        [x: string]: undefined;
    } & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<(({
        size?: import("@tamagui/core").FontSizeTokens | undefined;
    } & ({} | {
        [x: string]: undefined;
    })) & ({} | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    })) & ({} | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    }), string | number> & {
        [x: string]: undefined;
    }>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<(({
        size?: import("@tamagui/core").FontSizeTokens | undefined;
    } & ({} | {
        [x: string]: undefined;
    })) & ({} | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    })) & ({} | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    }), string | number> & {
        [x: string]: undefined;
    }>>, string | number>) & React.RefAttributes<TamaguiElement>>;
    Description: React.ForwardRefExoticComponent<((Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{}, "size"> & {
        size?: import("@tamagui/core").FontSizeTokens | undefined;
    } & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{}, "size"> & {
        size?: import("@tamagui/core").FontSizeTokens | undefined;
    }>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{}, "size"> & {
        size?: import("@tamagui/core").FontSizeTokens | undefined;
    }>>) | Pick<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{
        size?: import("@tamagui/core").FontSizeTokens | undefined;
    }, string | number> & {
        [x: string]: undefined;
    } & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{
        size?: import("@tamagui/core").FontSizeTokens | undefined;
    }, string | number> & {
        [x: string]: undefined;
    }>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{
        size?: import("@tamagui/core").FontSizeTokens | undefined;
    }, string | number> & {
        [x: string]: undefined;
    }>>, string | number> | Pick<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{
        size?: import("@tamagui/core").FontSizeTokens | undefined;
    } & ({} | {
        [x: string]: undefined;
    }), string | number> & {
        [x: string]: undefined;
    } & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{
        size?: import("@tamagui/core").FontSizeTokens | undefined;
    } & ({} | {
        [x: string]: undefined;
    }), string | number> & {
        [x: string]: undefined;
    }>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{
        size?: import("@tamagui/core").FontSizeTokens | undefined;
    } & ({} | {
        [x: string]: undefined;
    }), string | number> & {
        [x: string]: undefined;
    }>>, string | number> | Pick<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{
        size?: import("@tamagui/core").FontSizeTokens | undefined;
    } & ({} | {
        [x: string]: undefined;
    }), string | number> & {
        [x: string]: undefined;
    } & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{
        size?: import("@tamagui/core").FontSizeTokens | undefined;
    } & ({} | {
        [x: string]: undefined;
    }), string | number> & {
        [x: string]: undefined;
    }>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native").TextProps, "children"> & import("@tamagui/core").RNWTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{
        size?: import("@tamagui/core").FontSizeTokens | undefined;
    } & ({} | {
        [x: string]: undefined;
    }), string | number> & {
        [x: string]: undefined;
    }>>, string | number>) & React.RefAttributes<TamaguiElement>>;
    Close: React.ForwardRefExoticComponent<Omit<import("react-native").ViewProps, "display" | "children"> & import("@tamagui/core").RNWViewProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>> & Omit<{}, "elevation" | "fullscreen"> & {
        readonly fullscreen?: boolean | undefined;
        readonly elevation?: import("@tamagui/core").SizeTokens | undefined;
    } & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native").ViewProps, "display" | "children"> & import("@tamagui/core").RNWViewProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>> & Omit<{}, "elevation" | "fullscreen"> & {
        readonly fullscreen?: boolean | undefined;
        readonly elevation?: import("@tamagui/core").SizeTokens | undefined;
    }>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native").ViewProps, "display" | "children"> & import("@tamagui/core").RNWViewProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>> & Omit<{}, "elevation" | "fullscreen"> & {
        readonly fullscreen?: boolean | undefined;
        readonly elevation?: import("@tamagui/core").SizeTokens | undefined;
    }>> & React.RefAttributes<TamaguiElement>>;
};
export { createDrawerScope, Drawer, DrawerTrigger, DrawerPortal, DrawerOverlay, DrawerContent, DrawerTitle, DrawerDescription, DrawerClose, WarningProvider, };
export type { DrawerProps, DrawerTriggerProps, DrawerPortalProps, DrawerOverlayProps, DrawerContentProps, DrawerTitleProps, DrawerDescriptionProps, DrawerCloseProps, };
//# sourceMappingURL=Drawer.d.ts.map