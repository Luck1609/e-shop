import { cn } from "@/shared/lib/utils"
import { Children } from "@/vite-env"
import { NavLink as Link } from "react-router-dom"

export function NavLink({
  className,
  to,
  children,
  ...props
}: Children<{ className?: string, to: string }>) {

  return (
    <Link
      to={to}
      className={ ({ isActive }) => cn(
        "inline-flex items-center p-3 rounded-lg leading-5 transition duration-150 ease-in-out focus:outline-none no-underline",
        isActive
          ? "bg-secondary bg-opacity-15 text-secondary font-medium"
          : "text-light-text dark:text-dark-text hover:bg-secondary hover:bg-opacity-10 hover:text-secondary hover:text-opacity-80",
        className
      )}
      {...props}
    >
      {children}
    </Link>
  )
}
