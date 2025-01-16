import { Container, Logo, NavLink } from "@/components/custom/misc";
import { Button } from "@/components/ui/button";
import { IconHeart, IconSearch, IconShoppingCart } from "@tabler/icons-react";


export default function Nav() {
  return (
    <Container className="p-5">
      <nav className="flex justify-between items-center bg-white p-3 rounded-lg z-10 relative">
        <Logo />

        <ul className="flex">
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
            <Button variant="ghost">
              <IconSearch />
            </Button>
          </li>
          <li className="">
            <Button variant="ghost">
              <IconHeart />
            </Button>
          </li>
          <li className="">
            <Button variant="ghost">
              <IconShoppingCart />
            </Button>
          </li>
        </ul>
      </nav>
    </Container>
  )
}
