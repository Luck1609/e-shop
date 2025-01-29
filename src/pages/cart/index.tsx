import { TypographyH5 } from "@/components/custom/misc";
import { CartCard } from "./cart-drawer";

export default function CartPage() {
  return (
    <>
      <div className="grid grid-cols-6 col-span-3 py-3 lg:px-2">
        <div className="md:col-span-3 lg:pl-5">
          <TypographyH5>Products</TypographyH5>
        </div>

        <TypographyH5 className="w-full text-center hidden lg:inline-block">Price</TypographyH5>
        <TypographyH5 className="w-full text-center hidden lg:inline-block">Quantity</TypographyH5>
        <TypographyH5 className="w-full text-center hidden lg:inline-block">Total</TypographyH5>
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
    </>
  );
}
