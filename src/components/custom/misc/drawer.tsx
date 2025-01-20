import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { useDispatch, useSelector } from "@/shared/feature/hooks"
import { toggleDrawer } from "@/shared/feature/reducers/misc"
import * as drawerItems from "@/shared/feature/widgets"
import { ReactNode } from "react"

type Props = {
  trigger: string | ReactNode
  component: () => JSX.Element
}

export function Drawer() {
  const { drawer } = useSelector(state => state.misc)
  const dispatch = useDispatch()

  const { component: Component }: Props = drawer?.component
    ? drawerItems[drawer.component as keyof typeof drawerItems] : {
      component: () => <></>,
      trigger: ""
    }
  
  const close = () => dispatch(toggleDrawer())

  return (
    <Sheet open={drawer !== null} onOpenChange={close}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>{ drawer?.title }</SheetTitle>
        </SheetHeader>
        
        <Component />
        
      </SheetContent>
    </Sheet>
  )
}
