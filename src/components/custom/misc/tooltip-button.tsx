import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Typography } from "./typography"

export function TooltipButton({
  children,
  label,
  className
}: Children<{label: string, className?: string }>) {
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
