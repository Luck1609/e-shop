import { Typography, TypographyH5, TypographyH6 } from "@/components/custom/misc";
import { Link } from "react-router-dom";

export default function Info() {


  return (
    <>
      <article className="bg-slate-50 p-3 rounded">
        <TypographyH5 className="mb-5">Summary</TypographyH5>

        <div className="w-full space-y-3 mb-3">
          <div className="flex justify-between">
            <Typography>Items</Typography>
            <Typography>5</Typography>
          </div>

          <div className="flex justify-between">
            <Typography>Subtotal</Typography>
            <Typography>$12.00</Typography>
          </div>

          <div className="flex justify-between">
            <Typography>Shipping fee</Typography>
            <Typography>$0.00</Typography>
          </div>

          <div className="flex justify-between">
            <Typography>Dicount</Typography>
            <Typography>$0.00</Typography>
          </div>

          <div className="flex justify-between">
            <Typography>Estimated total</Typography>
            <Typography>$12.00</Typography>
          </div>

          <Link to="/checkout" className="bg-secondary text-white flex items-center justify-center p-3 rounded w-full">Checkout</Link>
        </div>
      </article>

      <article className="bg-slate-50 p-3 rounded">
        <TypographyH6>Pay with</TypographyH6>

        <ul className="flex space-x-2 mb-5">
          <li className="">Visa</li>
          <li className="">Master card</li>
          <li className="">Paypal</li>
        </ul>

        <TypographyH6 className="">Buyer protection</TypographyH6>
        <Typography>Get a full refund if the item is not as described or not delivered</Typography>
      </article>
    </>
  );
}

