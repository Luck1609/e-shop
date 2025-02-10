import { CartIcon } from "@/assets/icons";
import { Container, Logo, NavLink, Typography } from "@/components/custom/misc";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useDispatch } from "@/shared/feature/hooks";
import { toggleDrawer } from "@/shared/feature/reducers/misc";
import { cn } from "@/shared/lib/utils";
import { Drawer } from "@/vite-env";
import { IconHeart, IconLogin, IconMenu3, IconUser, IconUserEdit } from "@tabler/icons-react";
import { Link, useLocation } from "react-router-dom";
import NavSearch from "./search";


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
            <li className="">
              <NavLink to="/track-package">Track Package</NavLink>
            </li>
          </ul>

          <ul className="flex space-x-1">
            <li className="">
              <NavSearch />
            </li>
            <li className="">
              <Link to="wishlist">
                <Button size="icon" variant="ghost">
                  <IconHeart className="w-5 h-5" />
                </Button>
              </Link>
            </li>
            {
              pathname !== "/cart" && (
                <li className="">
                  <Button size="icon" variant="ghost" onClick={toggleShoppingCart}>
                    <CartIcon className="w-5 h-5 fill-color" />
                  </Button>
                </li>
              )
            }
            <li className="">
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Button size="icon" variant="ghost">
                    <IconUser className="w-5 h-5" />
                  </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent>
                  <DropdownMenuItem>
                    <Link to="/login" className="flex items-center space-x-1">
                      <IconLogin />
                      <Typography>Login</Typography>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/register" className="flex items-center space-x-1">
                      <IconUserEdit />
                      <Typography>Register</Typography>
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
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
