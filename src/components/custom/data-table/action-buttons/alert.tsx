import { ReactNode } from "react"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog"


type AlertProps = {
  triggerComponent: ReactNode
  title: string
  description: string
  action?: () => void
}

const TableActionAlert = ({ triggerComponent, title, description, action }: AlertProps) => (
  <AlertDialog>
    <AlertDialogTrigger>
      {triggerComponent}
    </AlertDialogTrigger>
    <AlertDialogContent className="bg-theme">
      <AlertDialogHeader>
        <AlertDialogTitle>{title}</AlertDialogTitle>
        <AlertDialogDescription>{description}</AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction onClick={action}>Continue</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
)

export default TableActionAlert