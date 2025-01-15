import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { ChildProps } from "@/types"
import { Typography } from "./typography"

export function TooltipButton({
  children,
  label,
  className
}: ChildProps & {
  label: string
  className?: string
}) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild className={className}>{children}</TooltipTrigger>
        <TooltipContent>
          <Typography>{label}</Typography>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
1
