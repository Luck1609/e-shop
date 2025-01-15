import * as React from "react"
import { DropdownMenuItem } from "@/components/ui/dropdown-menu"
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  AlertDialogPortal,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { DELETE } from "@/shared/constants"
import { Button } from "@/components/ui/button"
import { Loading } from "@/components/custom/form"
import { DialogAlert } from "../types"
import { Icon } from "@/types"

type DialogItemType = {
  triggerChildren: {
    text: string
    Icon: Icon | null
  }
  onSelect: () => void
  data: DialogAlert
  onOpenChange: (open: boolean) => void
  mutation: string
}

const DialogItem = React.forwardRef(
  (props: DialogItemType, forwardedRef: React.Ref<HTMLDivElement>) => {
    const {
      triggerChildren: { Icon, text },
      data: { title, description, url },
      mutation,
      onSelect,
      onOpenChange,
      ...itemProps
    } = props
    const [submitted, setSubmitted] = React.useState(false)

    const triggerAlertAction = async () => {
      onOpenChange(false)
    }

    // const params = useParams()

    // console.log('url params', params)

    return (
      <AlertDialog onOpenChange={onOpenChange}>
        <AlertDialogTrigger asChild>
          <DropdownMenuItem
            {...itemProps}
            ref={forwardedRef}
            className="DropdownMenuItem cursor-pointer"
            onSelect={(event) => {
              console.log("Dropdonw selected")
              event.preventDefault()
              onSelect()
            }}
          >
            <span className="flex items-center space-x-2">
              {Icon && <Icon size={18} />}
              <span>{text}</span>
            </span>
          </DropdownMenuItem>
        </AlertDialogTrigger>

        <AlertDialogPortal>
          <AlertDialogOverlay className="DialogOverlay" />
          <AlertDialogContent className="bg-theme">
            <AlertDialogHeader>
              <AlertDialogTitle>{title}</AlertDialogTitle>
              <AlertDialogDescription>{description}</AlertDialogDescription>
            </AlertDialogHeader>

            <AlertDialogFooter>
              <AlertDialogCancel className="bg-danger">
                Cancel
              </AlertDialogCancel>
              <Button onClick={triggerAlertAction} disabled={submitted}>
                {!submitted ? "Continue" : <Loading text="Submitting..." />}
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogPortal>
      </AlertDialog>
    )
  }
)

DialogItem.displayName = "DialogItem"

export default DialogItem
