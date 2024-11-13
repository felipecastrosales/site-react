import * as React from "react"

import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

import SocialMedias, { SocialMediasIconLayout } from "@/components/SocialMedias/SocialMedias"
import AppIcons from "@/core/constants/AppIcons"

export function DrawerComponent() {
  const [open, setOpen] = React.useState(false)

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <AppIcons.menu
          style={{ height: '24px', width: '24px' }}
          aria-label="Redes Sociais" 
        />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left p-0">
          <DrawerTitle style={{ padding: '1.5rem 1rem 0.2rem 1rem' }}>Redes Sociais</DrawerTitle>
          <DrawerDescription style={{ padding: '0 1rem 0rem 1rem' }}>
            Me acompanhe e fique por dentro de tudo que eu faço!
          </DrawerDescription>
          <SocialMedias layout={SocialMediasIconLayout.VerticalWithName} />
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  )
}

export default DrawerComponent