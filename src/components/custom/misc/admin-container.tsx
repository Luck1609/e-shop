import { ReactNode } from "react"
import { cn } from "@/shared/lib/utils"

export function AdminContainer({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return <div className={cn("px-5", className)}>{children}</div>
}
