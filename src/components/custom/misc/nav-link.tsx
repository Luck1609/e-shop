import usePathname from "@/hooks/use-location"
import { cn } from "@/shared/lib/utils"
import { InertiaLinkProps, Link } from "@inertiajs/react"

export function NavLink({
  className = "",
  children,
  ...props
}: InertiaLinkProps) {
  const isActive = usePathname().pathname.startsWith(props.href)

  return (
    <Link
      {...props}
      className={cn(
        "inline-flex items-center p-3 rounded-lg leading-5 transition duration-150 ease-in-out focus:outline-none no-underline",
        isActive
          ? "bg-secondary bg-opacity-15 text-secondary font-medium"
          : "text-light-text dark:text-dark-text hover:bg-secondary hover:bg-opacity-10 hover:text-secondary hover:text-opacity-80",
        className
      )}
    >
      {children}
    </Link>
  )
}
