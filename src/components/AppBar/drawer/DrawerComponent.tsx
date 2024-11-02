import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import SocialMedias, { SocialMediasIconLayout } from "@/components/SocialMedias/SocialMedias"
// import { SocialMedias, SocialMediasIconLayout } from "@/components/ui/socialMedias"

export function DrawerComponent() {
  const [open, setOpen] = React.useState(false)

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Redes Sociais</DrawerTitle>
          <DrawerDescription>
            Me acompanhe e fique por dentro de tudo que eu faço!
          </DrawerDescription>
        </DrawerHeader>
        <SocialMedias layout={SocialMediasIconLayout.Horizontal} />
      </DrawerContent>
    </Drawer>
  )
}

export default DrawerComponent