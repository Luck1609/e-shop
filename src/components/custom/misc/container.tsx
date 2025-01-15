import { cn } from "@/shared/lib/utils"
import { ReactNode } from "react"

export function Container({
  children,
  className,
  id
}: {
  children: ReactNode
  className?: string
  id?: string
}) {
  return (
    <div className={cn("max-w-7xl w-full px-3 lg:px-0 mx-auto", className)} id={id ?? ""}>
      {children}
    </div>
  )
}
