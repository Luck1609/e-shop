import { CartIcon } from "@/assets/icons";
import { Container, Logo, NavLink } from "@/components/custom/misc";
import { Button } from "@/components/ui/button";
import { useDispatch } from "@/shared/feature/hooks";
import { toggleDrawer } from "@/shared/feature/reducers/misc";
import { cn } from "@/shared/lib/utils";
import { IconHeart, IconMenu3, IconSearch, IconShoppingCart } from "@tabler/icons-react";
import { useLocation } from "react-router-dom";


export default function Nav() {
  const { pathname } = useLocation()
  const dispatch = useDispatch()

  const isHome = pathname.split("/")[1] === ""

  const toggleShoppingCart = () => {
    dispatch(toggleDrawer({
    title: "Shopping cart",
    description: "All of your items that are ready for checkout",
    component: "cart"
    } as Drawer))
  }

  return (
    <div className={cn("", isHome ? "lg:p-5" : "bg-white")}>
      <Container className={cn("w-full relative z-10", isHome ? " bg-white rounded-lg" : "")}>
        <nav className={cn("flex justify-between items-center  p-3", isHome ? "" : "")}>
          <Logo />

          <ul className="hidden lg:flex">
            <li className="">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="">
              <NavLink to="/categories">Categories</NavLink>
            </li>
            <li className="">
              <NavLink to="/products">Products</NavLink>
            </li>
          </ul>

          <ul className="flex space-x-1">
            <li className="">
              <Button size="icon" variant="ghost">
                <IconSearch className="w-5 h-5" />
              </Button>
            </li>
            <li className="">
              <Button size="icon" variant="ghost">
                <IconHeart className="w-5 h-5" />
              </Button>
            </li>
            <li className="">
              <Button size="icon" variant="ghost" onClick={toggleShoppingCart}>
                <CartIcon className="w-5 h-5 fill-color" />
              </Button>
            </li>
            <li className="block lg:hidden">
              <Button size="icon" variant="ghost">
                <IconMenu3 className="w-5 h-5" />
              </Button>
            </li>
          </ul>
        </nav>
      </Container>
    </div>
  )
}
