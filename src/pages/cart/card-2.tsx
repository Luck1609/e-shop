import Counter from "./counter";
import { CartItem } from ".";
import { TypographyLead } from "@/components/custom/misc";
import { cn, extractCheckedItems, sanitizeHtml } from "@/shared/lib/utils";
import { IconTrash } from "@tabler/icons-react";
import { useDispatch, useSelector } from "@/shared/feature/hooks";
import { Link } from "@inertiajs/react";
import { removeCheckedItems } from "@/shared/feature/reducers/checkout";
import { Button } from "@/components/ui/button";

export type CartCardProps = {
  className?: string
  data: CartItem
  index?: number
  counter?: (action: string) => void
  showCounter?: boolean
}

export default function CartCard({
  data,
  index,
  className,
  showCounter = true
}: CartCardProps) {
  const { cart } = useSelector(state => state.checkout)
  const checkedItems = extractCheckedItems(cart)
  const dispatch = useDispatch()

  const clearCheckedItems = () => dispatch(removeCheckedItems())

  return (
    <div
      className={`flex items-center ${className ?? "md:py-5"
        } gap-2 lg:gap-5 relative group`}
    >
      <div className="w-[55px] h-[56px] lg:w-[88px] lg:h-[91px]">
        <img src={data.image} alt={data.name} className="w-full h-full" />
      </div>

      <div className="w-full lg:w-[85%] space-y-3">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
          <TypographyLead className="block">
            {data?.name}
          </TypographyLead>

          <div className={cn("flex items-center mt-1 lg:mt-0 ", checkedItems.length === 0 ? "lg:space-x-3" : "")}>
            <TypographyLead className="">
              GH¢ {data?.price}
            </TypographyLead>

            {
              checkedItems.length === 0 && (
                <Button
                  className="p-2 bg-light-text dark:bg-dark-border hover:!bg-danger hover:text-white text-danger rounded"
                >
                  <IconTrash size={20} />
                </Button>
              )
            }
          </div>
        </div>

        <div className="flex items-center justify-between w-full">
          <span className="text-sm lg:text-base text-color block md:inline text-left">
            Quantity added: {data?.quantity}
          </span>

          {
            showCounter && <Counter data={data} index={index} />
          }
        </div>
      </div>
    </div>
  );
}
