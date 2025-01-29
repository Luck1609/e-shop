import { Container, Typography, TypographyH6 } from "@/components/custom/misc";
import { AddressForm, DeliveryAddress, DiscountForm } from "./address";
import ReviewItem from "./review-item";
import PaymentOptions from "./payment-options";

export default function CheckoutPage() {
  return (
    <Container className="grid lg:grid-cols-5 py-10">
      <div className="lg:col-span-3 space-y-5 p-5">
        <article>
          <TypographyH6>Personal info</TypographyH6>

          <AddressForm />
        </article>

        <article>
          <TypographyH6>Delivery info</TypographyH6>

          <DeliveryAddress />
        </article>

        <article>
          <TypographyH6>Payment info</TypographyH6>
          
          <PaymentOptions />
        </article>

      </div>

      <div className="lg:col-span-2 bg-slate-50 p-5 rounded-lg">
        <TypographyH6 className="mb-3">Checkout Summary</TypographyH6>

        <div className="">
          <Typography className="font-medium">Items</Typography>
          {
            Array.from(Array(4).keys()).map((id: number) => <ReviewItem key={id.toString()} />)
          }
        </div>
        
        <DiscountForm />

        <div className="">
          <div className="flex justify-between">
            <Typography>Subtotal</Typography>
            <Typography>$239</Typography>
          </div>
          <div className="flex justify-between">
            <Typography>Shipping</Typography>
            <Typography>$239</Typography>
          </div>
        </div>
      </div>
    </Container>
  );
}
