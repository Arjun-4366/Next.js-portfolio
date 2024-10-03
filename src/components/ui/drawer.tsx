import * as React from "react";
import { Drawer as DrawerPrimitive } from "vaul"; 
console.log(DrawerPrimitive)

export const Drawer = DrawerPrimitive.Root
export const DrawerTrigger = DrawerPrimitive.Trigger
export const DrawerContent = DrawerPrimitive.Content

type DrawerOverlayProps = React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay>;

const DrawerOverlay = React.forwardRef<HTMLDivElement, DrawerOverlayProps>((props, ref) => (
  <DrawerPrimitive.Overlay ref={ref} {...props} />
));

DrawerOverlay.displayName = "DrawerOverlay";

export default DrawerOverlay;
