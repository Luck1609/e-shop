import { TypographyH6 } from "@/components/custom/misc";
import { Avatar } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/shared/lib/utils";
import { IconBasketCheck, IconCheckupList, IconCircleCheck, IconShip, IconTruckDelivery } from "@tabler/icons-react";
import { addDays, isAfter } from "date-fns";


export type TrackingDetails = {
  delivered_on: string
  cleared_on: string
  shipped_on: string
  eta: string
}

export const timelineSteps = (paidAt: string, details: TrackingDetails) => {

  const { cleared_on, delivered_on, shipped_on } = details

  const orderDate = new Date(paidAt)
  const today = new Date()
  const eta = new Date(details.eta)

  const isShippedOut = isAfter(today, shipped_on
    ? new Date(shipped_on)
    : addDays(orderDate, 14))

  const isCleared = isAfter(today, cleared_on
    ? new Date(cleared_on)
    : addDays(orderDate, 21))

  const isCompleted = isAfter(today, delivered_on
    ? new Date(delivered_on) : eta)

  return ([
    {
      icon: (
        <>
          <span className="inline-flex items-center justify-center border rounded-full h-14 w-14 text-emerald-500 bg-emerald-50 border-emerald-500">
            <IconCheckupList />
          </span>
          <Separator
            orientation="vertical"
            className={cn("w-[1px] h-16 border ", isShippedOut ? "border-emerald-500" : "border-amber-500")}
          />
        </>
      ),
      content: (
        <div className="col-span-8" >
          <div className="flex items-center justify-between">
            <TypographyH6 className={cn("font-bold text-base")}>Processed</TypographyH6>

            <IconCircleCheck className="text-emerald-500" />

          </div>
          <p className="text-slate-600">Your order is currently being processed by our manufacturers.</p>
        </div>
      )
    },
    {
      icon: (
        <>
          <span className={
            cn(
              "inline-flex items-center justify-center border rounded-full h-14 w-14",
              isShippedOut
                ? "text-emerald-500 bg-emerald-50 border-emerald-500"
                : "text-amber-500 bg-amber-50 border-amber-500"
            )}
          >
            <IconShip />
          </span>

          <Separator orientation="vertical" className={cn("w-[1px] h-16 border ", isCleared ? "border-emerald-500" : "border-amber-500")} />
        </>
      ),
      content: (
        <div className="col-span-8" >
          <div className="flex items-center justify-between">
            <TypographyH6 className={cn("font-bold text-base")}>Shipped out</TypographyH6>

            {
              isShippedOut && <IconCircleCheck className="text-emerald-500" />
            }

          </div>
          <p className="text-slate-600">Your packaged is on it's way. Order dispatched from manufacture's warehouse.</p>
        </div>
      )
    },
    {
      icon: (
        <>
          <Avatar className={
            cn(
              "inline-flex items-center justify-center border rounded-full h-14 w-14",
              isCleared
                ? "text-emerald-500 bg-emerald-50 border-emerald-500"
                : "text-amber-500 bg-amber-50 border-amber-500"
            )}
          >
            <IconTruckDelivery />
          </Avatar>

          <Separator orientation="vertical" className={cn("h-16 w-[1px] border", isCompleted ? "border-emerald-500" : "border-amber-500")} />
        </>
      ),
      content: (
        <div className="col-span-8" >
          <div className="flex items-center justify-between">
            <TypographyH6 className={cn("font-bold text-base")}>Clearing</TypographyH6>

            {
              isCleared && <IconCircleCheck className="text-emerald-500" />
            }

          </div>
          <p className="text-slate-600">Package has reached our clearing point, pending clearance to be sent to our warehouse.</p>
        </div>
      )
    },
    {
      icon: (
        <Avatar className={
          cn(
            "inline-flex items-center justify-center border rounded-full h-14 w-14",
            isCompleted
              ? "text-emerald-500 bg-emerald-50 border-emerald-500"
              : "text-amber-500 bg-amber-50 border-amber-500"
          )}
        >
          <IconBasketCheck />
        </Avatar>
      ),
      content: (
        <div className="col-span-8" >
          <div className="flex items-center justify-between">
            <TypographyH6 className={cn("font-bold text-base")}>Collection & package delivery</TypographyH6>

            {
              isCompleted && <IconCircleCheck className="text-emerald-500" />
            }

          </div>
          <p className="text-slate-600">Your order is ready for collection. You should receive a call from our service agents by now.</p>
        </div>
      )
    }
  ])
}