import { Typography, TypographyH6, TypographySm } from "@/components/custom/misc";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/shared/lib/utils";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import { useState } from "react";


export default function CartCard({ className }: {className?: string}) {
  return (
    <div className={cn("", className)}>
      <div className="bg-slate-200 h-24 w-16"></div>

      <div className="">
        <div className="">
          <TypographyH6>Product name</TypographyH6>
          <TypographySm>Color: Teal</TypographySm>
        </div>

        <Typography>$92</Typography>

      </div>
    </div>
  )
}


export const Counter = ({ itemQuantity = 1, className }: { itemQuantity?: number, className?: string }) => {
  const [quantity, setQuantity] = useState(itemQuantity)

  const increment = () => setQuantity(quantity + 1)
  const decrement = () => setQuantity(quantity === 1 ? quantity : quantity - 1)

  return (
    <div className={cn("flex relative", className)}>
      <Input value={quantity} className="rounded-none rounded-l" />

      <div className="flex flex-col absolute right-0 divide-y border-l rounded overflow-hidden">
        <Button variant="ghost" className="w-3 h-5" onClick={increment}>
          <IconChevronUp className="h-5" />
        </Button>
        <Button variant="ghost" className="w-3 h-5" onClick={decrement}>
          <IconChevronDown className="h-5" />
        </Button>
      </div>
    </div>
  )
}