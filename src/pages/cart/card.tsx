import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/shared/lib/utils";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import { useState } from "react";



export const Counter = ({ itemQuantity = 1, className }: { itemQuantity?: number, className?: string }) => {
  const [quantity, setQuantity] = useState(itemQuantity)

  const increment = () => setQuantity(quantity + 1)
  const decrement = () => setQuantity(quantity === 1 ? quantity : quantity - 1)

  return (
    <div className={cn("flex relative", className)}>
      <Input value={quantity} className="rounded-none border-none" />

      <div className="flex flex-col absolute right-0 divide-y border-l">
        <Button variant="ghost" className="w-3 h-5 rounded-none" onClick={increment}>
          <IconChevronUp className="h-5" />
        </Button>

        <Button variant="ghost" className="w-3 h-5 rounded-none" onClick={decrement}>
          <IconChevronDown className="h-5" />
        </Button>
      </div>
    </div>
  )
}