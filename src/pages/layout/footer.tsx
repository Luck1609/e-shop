import { Container, Logo, TypographyH6, TypographySm } from "@/components/custom/misc";
import { Link } from "react-router-dom";


export default function Footer() {
  return (
    <footer className="bg-dark">
      <Container className="grid grid-cols-2 lg:grid-cols-5 gap-5 text-white py-10 space-y-8">
        <article className="lg:col-span-2">
          <Logo className="text-left text-white mb-3 block" />
          <ul className="space-y-4">
            <li className="space-x-1">
              <span className="font-medium">Address:</span>
              <span>1609 Lucky Street. Sunyani, Bono Region</span>
            </li>
            <li className="space-x-1">
              <span className="font-medium">Hotline:</span>
              <a href="tel:+233249149420">(024) 914 9420</a>
            </li>
            <li className="space-x-1">
              <span className="font-medium">Email:</span>
              <a href="tel:+233249149420">vcmall@example.com</a>
            </li>
          </ul>
        </article>

        <article className="pl-10 lg:pl-0">
          <TypographyH6 className="text-left text-white mb-3 block">Quick links</TypographyH6>
          <ul className="space-y-4">
            <li className="">
              <Link to="/about-us">
                <TypographySm>About us</TypographySm>
              </Link>
            </li>
            <li className="">
              <Link to="/contact-us">
                <TypographySm>Contact us</TypographySm>
              </Link>
            </li>
            <li className="">
              <Link to="/help/faq">
                <TypographySm>FAQ</TypographySm>
              </Link>
            </li>
            <li className="">
              <Link to="/products">
                <TypographySm>Products</TypographySm>
              </Link>
            </li>
          </ul>
        </article>

        <article className="">
          <TypographyH6 className="text-left text-white mb-3 block">My account</TypographyH6>
          <ul className="space-y-4">
            <li className="">
              <Link to="/profile">
                <TypographySm>My acount</TypographySm>
              </Link>
            </li>
            <li className="">
              <Link to="/cart">
                <TypographySm>Cart</TypographySm>
              </Link>
            </li>
            <li className="">
              <Link to="/wishlist">
                <TypographySm>Wish list</TypographySm>
              </Link>
            </li>
          </ul>
        </article>

        <article className="pl-10 lg:pl-0">
          <TypographyH6 className="text-left text-white mb-3 block">Help center</TypographyH6>
          <ul className="space-y-4">
            <li className="">
              <Link to="/help/privacy-policy">
                <TypographySm>Privacy policy</TypographySm>
              </Link>
            </li>
            <li className="">
              <Link to="/help/refund-policy">
                <TypographySm>Refund policy</TypographySm>
              </Link>
            </li>
            <li className="">
              <Link to="/help/shipping-&-returns">
                <TypographySm>Shipping & return</TypographySm>
              </Link>
            </li>
            <li className="">
              <Link to="/help/terms-&-conditions">
                <TypographySm>Terms & conditions</TypographySm>
              </Link>
            </li>
          </ul>
        </article>
      </Container>
    </footer>
  )
}
