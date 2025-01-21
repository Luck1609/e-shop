import { Container, TypographyH5 } from "@/components/custom/misc";
import Title from "@/components/custom/misc/title";
import { CartCard } from "./cart-drawer";

export default function CartPage() {
  return (
    <div>
      <Container>
        <Title
          title="Cart"
          className="flex flex-col items-center"
        />

        <div className="grid lg:grid-cols-7 gap-5">

          <div className="lg:col-span-5 divide-y">
            <div className="grid grid-cols-6 col-span-3 py-3 lg:px-2">
              <div className="lg:col-span-3 pl-5">
                <TypographyH5>Products</TypographyH5>
              </div>
                <TypographyH5 className="w-full text-center">Price</TypographyH5>
                <TypographyH5 className="w-full text-center">Quantity</TypographyH5>
              <TypographyH5 className="w-full text-center">Total</TypographyH5>
            </div>
            
            <div className="divide-y">
              {
                Array.from(Array(5).keys()).map((index: number) => (
                  <div className="py-3" key={index.toString()}>
                    <CartCard />
                  </div>
                ))
              }
            </div>
          </div>

          <div className="lg:col-span-2 p-3 rounded-lg bg-red-200">
            <TypographyH5>Summary</TypographyH5>
          </div>
        </div>
      </Container>
    </div>
  );
}
