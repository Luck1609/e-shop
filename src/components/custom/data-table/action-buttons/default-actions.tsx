import { ReactNode } from "react"
import { Link } from "@inertiajs/react"
import { TooltipButton } from "../../misc/tooltip-button"
import { IconEdit, IconEye, IconEyeCheck, IconEyeX, IconTrash } from "@tabler/icons-react"
import { cn } from "@/shared/lib/utils"
import TableActionAlert from "./alert"


export type CustomProps = {
  show: false
  component?: ReactNode
}

export type DefaultProps = { url: string }

export type DeleteProps = {
  name: string,
  status?: boolean,
  action: () => void,
  meta?: {
    title: string,
    description: string
  }
}


const DefaultActions = (props: Record<string, any>) => {
  // console.log("Default action props", props)

  const actions = (key: string, value: DefaultProps | DeleteProps) => {
    const { url } = value as DefaultProps
    const { action, name, meta, status } = value as DeleteProps

    switch (key) {
      case "view":
        return (
          <li className="">
            <TooltipButton label="View">
              <Link href={url} className="inline-block p-2 dark:hover:bg-teal-500 text-teal-500 hover:text-white rounded group">
                <IconEye className="w-5 h-5" />
              </Link>
            </TooltipButton>
          </li>
        )

      case "edit":
        return (
          <li className="">
            <TooltipButton label="Edit">
              <Link href={url} className="inline-block p-2 dark:hover:bg-blue-500 rounded group">
                <IconEdit className="w-5 h-5 text-blue-500 group-hover:text-white" />
              </Link>
            </TooltipButton>
          </li>
        )

      case "publish":
        return (
          <li className="">
            <TableActionAlert
              triggerComponent={
                <TooltipButton
                  label={status ? "Publish" : "Unpublish"}
                  className={cn("block h-auto w-auto !p-2 dark:hover:bg-slate-100 rounded", status ? "text-green-500" : "text-red-500")}
                >
                  {status ? <IconEyeCheck className="!w-9 !h-9" /> : <IconEyeX className="!w-9 !h-9" />}
                </TooltipButton>
              }
              title={`${status ? "Publish" : "Unpublish"} this ${name.toLowerCase()}`}
              description={`This action will ${status ? `show this ${name.toLowerCase()} on` : `hide this ${name.toLowerCase()} from`} public view. Do you wish to continue with this action?`}
              action={action}
            />
          </li>
        )

      case "delete":
        return (
          <li className="">
            <TableActionAlert
              triggerComponent={
                <TooltipButton label="Delete" className="block h-auto w-auto !p-2 dark:hover:bg-red-500 text-red-500 hover:text-white rounded">
                  <IconTrash className="!w-9 !h-9" />
                </TooltipButton>
              }
              title={`Permanently delete this ${name.toLowerCase()}`}
              description={`This action will permanently delete the ${name.toLowerCase()} from the database. Do you wish to continue with this action?`}
              action={action}
            />
          </li>
        )

      default:
        return <></>;
    }
  }

  const [key, value] = Object.entries(props)?.[0]


  return actions(key, value)
}

export default DefaultActions

