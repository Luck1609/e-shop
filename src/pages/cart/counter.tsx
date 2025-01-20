import { Button } from "@/components/ui/button";
import { cn } from "@/shared/lib/utils";
import { IconMinus, IconPlus } from "@tabler/icons-react";
import { TypographySm } from "@/components/custom/misc";
// import { useDispatch } from "@/shared/feature/hooks";

type CartCardProps = {
  className?: string,
  data: {
    quantity: number
    id: string
  }
}

export default function Counter({ className, data }: CartCardProps) {
  // const dispatch = useDispatch()

  const updateCounter = (action: 'increment' | 'decrement') => () => {
    let quantity: number = data.quantity

    if (action === 'increment') quantity += 1
    else {
      if (quantity > 1) quantity -= 1
    }

    // addOrUpdateCartItem({ quantity, id: data.id })

  }

  return (
    <div className={cn("flex items-center justify-between max-w-24 lg:max-w-32", className)} >
      <Button
        className="h-10 w-10 flex items-center justify-center hover:border border-default"
        onClick={updateCounter('increment')}
      >
        <IconMinus className="h-4 w-4 md:h-6 md:w-6" />
      </Button>


      <TypographySm className="w-8 flex items-center justify-center">{data.quantity ?? 1}</TypographySm>

      <Button
        className="h-10 w-10 flex items-center justify-center hover:border border-default"
        onClick={updateCounter('decrement')}
      >
        <IconPlus className="h-4 w-4 md:h-6 md:w-6" />
      </Button>
    </div>
  )
}
