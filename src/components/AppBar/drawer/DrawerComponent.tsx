import * as React from "react"

import { Button } from "@/components/ui/button"
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
// import { SocialMedias, SocialMediasIconLayout } from "@/components/ui/socialMedias"

export function DrawerComponent() {
  const [open, setOpen] = React.useState(false)

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <img 
          src={AppIcons.menu}
          alt="Redes Sociais" 
          style={{ height: '24px', color: 'var(--background-color)' }}
        />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Redes Sociais</DrawerTitle>
          <DrawerDescription>
            Me acompanhe e fique por dentro de tudo que eu faço!
          </DrawerDescription>
          <SocialMedias layout={SocialMediasIconLayout.VerticalWithName} />
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  )
}

export default DrawerComponent