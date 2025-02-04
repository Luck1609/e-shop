import { Container, Title } from "@/components/custom/misc";
import Info from "./info";
import { Outlet, useLocation } from "react-router-dom";

const titles = {
  checkout: {
    title: "Checkout",
    className: "flex flex-col items-center"
  },
  cart: {
    title: "Cart",
    className: "flex flex-col items-center"
  },
}

export default function CheckoutLayout() {
  const { pathname } = useLocation()

  const location = pathname.split('/').pop()
  
  const { title, className } = titles[location as keyof typeof titles]

  return (
    <div>
      <Container>
        <Title
          title={title}
          className={className}
        />

        <div className="grid lg:grid-cols-7 gap-5">
          <div className="lg:col-span-5 divide-y">
           <Outlet />
          </div>

          <div className="lg:col-span-2 rounded-lg bg-white space-y-5">
            <Info />
          </div>
        </div>
      </Container>
    </div>
  );
}
