import { ReactNode } from "react"
import { cn } from "@/shared/lib/utils"

interface IProps {
  children: ReactNode
  className?: string
}

export function TypographyH1({ children, className }: IProps) {
  return (
    <h1
      className={cn(
        "text-4xl font-extrabold lg:text-6xl dark:text-dark-text",
        className
      )}
    >
      {children}
    </h1>
  )
}

export function TypographyH2({ children, className }: IProps) {
  return (
    <h2
      className={cn(
        "pb-2 text-34xl lg:text-4xl font-semibold first:mt-0 dark:text-dark-text",
        className
      )}
    >
      {children}
    </h2>
  )
}

export function TypographyH3({ children, className }: IProps) {
  return (
    <h3
      className={cn(
        "text-2xl lg:text-3xl font-semibold text-light-heading dark:text-dark-text",
        className
      )}
    >
      {children}
    </h3>
  )
}

export function TypographyH4({ children, className }: IProps) {
  return (
    <h4
      className={cn(
        "text-xl lg:text-2xl font-semibold text-light-heading dark:text-dark-text",
        className
      )}
    >
      {children}
    </h4>
  )
}

export function TypographyH5({ children, className }: IProps) {
  return (
    <h5
      className={cn(
        "text-lg lg:text-xl font-semibold text-light-heading dark:text-dark-text",
        className
      )}
    >
      {children}
    </h5>
  )
}

export function TypographyH6({ children, className }: IProps) {
  return (
    <h6
      className={cn(
        "text-base lg:text-lg font-semibold text-light-heading dark:text-dark-text",
        className
      )}
    >
      {children}
    </h6>
  )
}

export function TypographySm({ children, className }: IProps) {
  return (
    <small className={cn("text-sm leading-none", className)}>
      {children}
    </small>
  )
}

export function TypographyXs({ children, className }: IProps) {
  return (
    <small className={cn("text-xs leading-none", className)}>
      {children}
    </small>
  )
}
export function Typography({ children, className }: IProps) {
  return <p className={cn("leading-7 text-base", className)}>{children}</p>
}

export function TypographyMd({ children, className }: IProps) {
  return <p className={cn("leading-7 text-lg", className)}>{children}</p>
}

export function TypographyLead({ children, className }: IProps) {
  return (
    <p className={cn("text-xl text-muted-foreground", className)}>{children}</p>
  )
}
