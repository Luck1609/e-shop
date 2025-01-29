import visa from "@/assets/visa.webp"
import mastercard from "@/assets/mastercard.webp"
import paypal from "@/assets/paypal.webp"
import { Form } from "@/components/ui/form"
import { useForm } from "react-hook-form"
import { Typography } from "@/components/custom/misc"
import { RadioButtons } from "@/components/custom/form"

const methods = [
  {
    label: (
      <div className="flex items-center space-x-2 p-3">
        <img src={visa} alt="visa card" title="Visa" className="h-5" />
        <Typography>Visa card</Typography>
      </div>
    ),
    value: "visa"
  },
  {
    label: (
      <div className="flex items-center space-x-2 p-3">
        <img src={mastercard} alt="Mastercard" title="Mastercard" className="h-5" />
        <Typography>Mastercard</Typography>
      </div>
    ),
    value: "mastercard"
  },
  {
    label: (
      <div className="flex items-center space-x-2 p-3 py-5">
        <img src={paypal} alt="Paypal" title="Paypal" className="h-5" />
        <Typography>Paypal</Typography>
      </div>
    ),
    value: "paypal"
  },
]

export default function PaymentOptions() {
  const form = useForm()

  return (
    <Form {...form}>
      <RadioButtons
        name="gateway"
        className="grid md:grid-cols-3 gap-x-3"
        itemClassName="flex items-center border rounded-lg px-3 hover:bg-black/5 cursor-pointer h-16 mg:h-auto"
        options={methods}
      />
    </Form>
  )
}
