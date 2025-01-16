import { IconAppWindow, IconLogout, IconUserScan } from "@tabler/icons-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Typography, TypographySm, TypographyXs } from "./typography"
import { cn } from "@/shared/lib/utils"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu"
import { Link } from "react-router-dom"

export function UserButton({
  className,
  showRole = true,
  avatarClassName,
}: {
  className?: string
  showRole?: boolean
  avatarClassName?: string
  }) {

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="w-full">
        <div
          className={cn(
            "w-full flex h-12 space-x-3 items-center rounded-none text-light-color bg-white hover:bg-dark-text  dark:text-dark-text dark:bg-dark-card hover:dark:bg-dark-border",
            className
          )}
        >
          <Avatar className={cn(avatarClassName)}>
            <AvatarImage src="" alt="" />
            <AvatarFallback className="text-sm">NL</AvatarFallback>
          </Avatar>
          <div className="text-left">
            <TypographySm className="block font-semibold">
              Nathaniel
            </TypographySm>

            {showRole && <TypographyXs>Web developer</TypographyXs>}
          </div>
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-full">
        <DropdownMenuItem>
          <Link to="/" className="flex space-x-2 items-center">
            <IconAppWindow />
            <Typography>Frontend</Typography>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link to="/" className="flex space-x-2 items-center">
            <IconUserScan />
            <Typography>Profile</Typography>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex space-x-2 items-center">
          {/* <Link to={route('logout')}> */}
            <IconLogout size={18} />
            <Typography>Logout</Typography>
          {/* </Link> */}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
