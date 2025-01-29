import { useDispatch } from "react-redux";
import { Typography, TypographyH6 } from "@/components/custom/misc";
import { Button } from "@/components/ui/button";
import { Notice, toggleNoticeModal } from "@/shared/feature/reducers/misc";
import { addDays, addMonths, format, isAfter } from "date-fns";
import { Link } from "react-router-dom";
import { CartItem } from "@/vite-env";



export type Transaction = {
  reference: string
  amount: number
  data: string
  paid_at: string
  tracking_details: {
    delivered_on: string
    cleared_on: string
    shipped_on: string
    eta: string
  }
}

export type HistoryCard = {
  reference: string
  delivered_on: string
  shipped_on: string
  order_date: string
  products: CartItem[]
  // products: (Omit<Product, 'images'> & {image: Image})[]
}

export const HistoryCard = ({ order }: { order: Transaction }) => {
  const dispatch = useDispatch();
  const { reference, amount, data, tracking_details: { cleared_on, delivered_on, shipped_on, eta } } = order

  const deliveryConfirmation = () =>
    dispatch(
      toggleNoticeModal({
        title: "Confirm Delivery",
        message: "Do you want to confirm receipt of this delivery?",
        url: `/confirm-delevery/${reference}`,
        method: "patch",
      } as Notice)
    );

  const products = JSON.parse(data) as CartItem[]

  return (
    <div className="w-full lg:w-4/5 rounded-lg bg-theme">
      <div className="p-4 space-y-3">
        <div className="flex items-center justify-between border-b dark:border-dark-border pb-2">
          {/* {delivered_on ? (
            <label className="font-semibold text-amber-500 text-sm">Clearing</label>
          ) : shipped_on ? (
            <label className="font-semibold text-sky-500">
              Shipped out
            </label>
          ) : (
            <label className="font-semibold text-emerald-500">
              Collection & package delivery
            </label>
          )} */}
          {trackingStatus(new Date(order.paid_at), order.tracking_details)}


          <div className="flex items-center space-x-4 text-sm">
            <div className="pr-3 hidden lg:flex lg:space-x-5">
              <div className="">
                <label className="font-semibold mr-1">Order date: </label>
                <span className="">
                  {format(new Date(eta), "dd-MM-yyyy")}
                </span>
              </div>
              <div className="">
                <label className="font-semibold mr-1">Order ID: </label>
                <span className="">{reference}</span>
              </div>
            </div>
          </div>
        </div>

        {products.map(({ name, image, price, quantity }, index) => (
          <div className="grid grid-cols-6 lg:grid-cols-9 gap-3" key={index.toString()}>
            <div className="col-span-2">
              <img src={String(image)} alt="" className="lg:h-28 mx-auto" />
            </div>

            <div className="col-span-4 lg:col-span-5 pt-3 md:pr-3 lg:pt-0">
              <TypographyH6 className="block mb-3">{name}</TypographyH6>

              <Typography className="font-medium">
                <span className="mr-1">Gh¢</span> {price} x {quantity}
              </Typography>
            </div>

            {index === 0 && (
              <div className="col-span-6 lg:col-span-2 flex flex-col justify-center space-y-2 mt-5 lg:mt-0">
                <div className="text-center">
                  <label className="font-semibold mr-2">Total:</label>
                  <span className="font-medium">GH¢ {amount}</span>
                </div>

                {!delivered_on && (
                  <Button
                    className="w-full p-2 btn-black text-sm"
                    onClick={deliveryConfirmation}
                  >
                    Confirm delivery
                  </Button>
                )}
                <Link
                  to={`/track-package/${reference}`}
                  className="flex items-center justify-center bg-secondary w-full h-10 p-2 text-sm rounded"
                >
                  Track order
                </Link>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};


const trackingStatus = (orderDate: Date, details: TrackingDetails) => {
  const { cleared_on, delivered_on, shipped_on } = details
  const today = new Date()

  if (isAfter(shipped_on ? new Date(shipped_on) : addDays(orderDate, 14), today))
    return <TypographyH6>Shipped Out</TypographyH6>

  else if (isAfter(delivered_on ? new Date(delivered_on) : addDays(orderDate, 21), today))
    return <TypographyH6>Cleared</TypographyH6>

  else if (isAfter(cleared_on ? new Date(cleared_on) : addMonths(orderDate, 1), today))
    return <TypographyH6>Collection & package delivery</TypographyH6>

  else
    return <TypographyH6>Processed</TypographyH6>
}