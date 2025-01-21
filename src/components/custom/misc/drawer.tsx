import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { useDispatch, useSelector } from "@/shared/feature/hooks"
import { toggleDrawer } from "@/shared/feature/reducers/misc"
import * as drawerItems from "@/shared/feature/widgets"

type Props = {
  component: () => JSX.Element
}

export function Drawer() {
  const { drawer } = useSelector(state => state.misc)
  const dispatch = useDispatch()

  const { component: Component }: Props = drawer?.component
    ? drawerItems[drawer.component as keyof typeof drawerItems] : {
      component: () => <></>
    }
  
  const close = () => dispatch(toggleDrawer())

  return (
    <Sheet open={drawer !== null} onOpenChange={close}>
      <SheetContent className="p-4">
        <SheetHeader>
          <SheetTitle>{ drawer?.title }</SheetTitle>
        </SheetHeader>
        
        <Component />
        
      </SheetContent>
    </Sheet>
  )
}
