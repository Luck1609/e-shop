import { useState } from "react";
import { Container, Typography, TypographyH6, TypographyLead } from "@/components/custom/misc";
import { IconPackageOff } from "@tabler/icons-react";
import TrackingForm from "../form";
import { Button } from "@/components/ui/button";
import OrderTimeline from "./timeline";
import { Transaction } from "@/shared/components/history-card";
import ReviewItem from "@/pages/checkout/review-item";

const transaction: Transaction = {
  reference: "WED328S82",
  amount: 150.00,
  data: "[]",
  paid_at: "2025-01-24 11:32:11",
  tracking_details: {
    cleared_on: "",
    delivered_on: "",
    eta: "2025/02/24 11:32:11",
    shipped_on: ""
  }
}

export default function TrackingDetails() {
  const [showForm, setShowForm] = useState(false)

  const toggleForm = () => setShowForm(!showForm)
  // const products = useMemo(() => JSON.parse(transaction.data), [transaction])

  if (!transaction) return (
    <Container className="flex items-center justify-center h-[80dvh]">
      <div className="w-2/6 space-y-10">
        {
          showForm
            ? (
              <TrackingForm className="lg:w-full" />
            )
            : (
              <>
                <div className="flex items-center flex-col">
                  <IconPackageOff className="w-28 h-28" />
                  <Typography>Item not found. Did you enter the correct tracking ID?</Typography>
                </div>

                <Button className="w-full" onClick={toggleForm}>Track package</Button>
              </>
            )
        }

      </div>
    </Container>
  )

  return (
    <Container className="pt-16">
      <div className="grid lg:grid-cols-2">
        <OrderTimeline transaction={transaction} />

        <div className="mt-10 lg:mt-0 space-y-4 lg:space-y-0">
          <TypographyH6>Your Package</TypographyH6>

          <div className="">
            <div className="lg:w-4/5 min-h-96">
              {/* {
                products?.map((product: CartItem, index: number) => (
                  <Card
                    data={product}
                    key={index.toString()}
                  />
                ))
              } */}
              <ReviewItem />
              <ReviewItem />
              <ReviewItem />
              <ReviewItem />
              <ReviewItem />
              <ReviewItem />
            </div>

            <div className="flex justify-between space-x-3 py-5">
              <TypographyLead className="font-semibold">Total</TypographyLead>
              <TypographyLead>GH¢ {transaction.amount}</TypographyLead>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

// const Card = ({ data, className }: { data: CartItem, className?: string }) => {

//   return (
//     <div
//       className={`flex items-center ${className ?? "md:py-5"
//         } gap-2 lg:gap-5 relative`}
//     >
//       <div className="w-20 md:w-28 flex items-center">
//         <img src={data?.image} alt="" className="w-full" />
//       </div>

//       <div className="w-full">
//         <div className="flex items-center">
//           <p className="block lg:hidden w-full font-semibold text-sm md:text-lg lowercase truncate">
//             {data?.name}
//           </p>
//           <p className="hidden lg:block w-full font-semibold text-sm md:text-lg lowercase">
//             {data?.name}
//           </p>
//         </div>

//         <div className="flex items-center space-x-2 text-sm font-medium">
//           <p className="">
//             GH¢ {+data.price.toFixed(2)}
//           </p>

//           <span>x</span>

//           <span className="">{data?.quantity}</span>
//         </div>
//       </div>
//     </div>
//   );
// };
