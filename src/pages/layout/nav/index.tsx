import { CartIcon } from "@/assets/icons";
import { Container, Logo, NavLink, Typography } from "@/components/custom/misc";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useDispatch } from "@/shared/feature/hooks";
import { toggleDrawer } from "@/shared/feature/reducers/misc";
import { cn } from "@/shared/lib/utils";
import { Drawer } from "@/vite-env";
import { IconLogin, IconMenu3, IconUser, IconUserEdit } from "@tabler/icons-react";
import { Link, useLocation } from "react-router-dom";
import NavSearch from "./search";
import { links } from "./data";


export default function Nav() {
  const { pathname } = useLocation()
  const dispatch = useDispatch()

  const isHome = pathname.split("/")[1] === ""

  const toggleShoppingCart = () => {
    dispatch(toggleDrawer({
      title: "Shopping cart",
      description: "All of your items that are ready for checkout",
      component: "cart",
      direction: "right"
    } as Drawer))
  }

  const toggleMenu = () => {
    dispatch(toggleDrawer({
      title: "Menu",
      description: "",
      component: "menu",
      direction: "left"
    } as Drawer))
  }

  return (
    <div className={cn("", isHome ? "lg:p-5" : "bg-white")}>
      <Container className={cn("w-full relative z-10 p-0", isHome ? " bg-white rounded-lg" : "")}>
        <nav className={cn("flex justify-between items-center  p-3", isHome ? "" : "")}>
          <Logo />

          <ul className="hidden lg:flex">
            {
              links.map(({ url, name }) => (
                <li className="" key={url}>
                  <NavLink to={url}>{name}</NavLink>
                </li>
              ))
            }
          </ul>

          <ul className="flex space-x-1">
            <li className="">
              <NavSearch />
            </li>
            {/* <li className="">
              <Link to="wishlist">
                <Button size="icon" variant="ghost">
                  <IconHeart className="w-5 h-5" />
                </Button>
              </Link>
            </li> */}
            {
              pathname !== "/cart" && (
                <li className="">
                  <Button size="icon" variant="ghost" onClick={toggleShoppingCart}>
                    <CartIcon className="w-5 h-5 fill-color" />
                  </Button>
                </li>
              )
            }
            <li className="hidden md:block">
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <div className="w-10 h-10 flex items-center justify-center">
                    <IconUser className="w-5 h-5" />
                  </div>
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
              <Button size="icon" variant="ghost" onClick={toggleMenu}>
                <IconMenu3 className="w-5 h-5" />
              </Button>
            </li>
          </ul>
        </nav>
      </Container>
    </div>
  )
}
