import { cn } from "@/shared/lib/utils";
import { format, isAfter } from "date-fns";
import { timelineSteps } from "./steps";
import { Transaction } from "@/shared/components/history-card";



export default function OrderTimeline({
  transaction,
}: { transaction: Transaction }) {

  const { eta: completionDate } = transaction.tracking_details

  const today = new Date()
  const eta = new Date(completionDate)


  const steps = timelineSteps(transaction.paid_at, transaction.tracking_details)

  return (
    <div className="">
      <div className="flex space-x-5">
        <label className="text-default font-semibold">Tracking Number:</label>
        <span className="">{transaction.reference}</span>
      </div>

      <div className="flex space-x-5 text-sm mb-5">
        <label className="text-default font-bold">{isAfter(eta, today) ? "Estimated delivery time:" : "Package status:"}</label>
        <span className={cn("text-secondary", isAfter(eta, today) ? "text-secondary" : "text-emerald-500")}>
          {
            isAfter(eta, today) ? format(eta, "dd MMM, yyyy") : "Delivered"
          }
        </span>
      </div>

      {
        steps.map(({ icon, content }, index) => (
          <div className="w-full lg:w-4/5 flex flex-col items" key={index.toString()}>
            <div className="grid grid-cols-9 space-x-5 lg:space-x-4">
              <div className="flex flex-col items-center">
                {icon}
              </div>

              {content}
            </div>
          </div>
        ))
      }
    </div>
  );
}
