import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { useFormRequest } from "@/hooks/use-router"
import { useDispatch, useSelector } from "@/shared/feature/hooks"
import { Notice, toggleNoticeModal } from "@/shared/feature/reducers/misc"

export function NoticeModal() {
  const { notice  } = useSelector(state => state.misc)
  const dispatch = useDispatch()
  const { submit } = useFormRequest()

  const cancel = () => dispatch(toggleNoticeModal())
  const handleAction = () => submit({
    url: notice.url,
    method: notice.method!,
    data: notice?.data
  })

  return (
    <AlertDialog open={notice.title !== ""}>
      <AlertDialogContent className="bg-theme">
        <AlertDialogHeader>
          <AlertDialogTitle>{notice.title}</AlertDialogTitle>
          <AlertDialogDescription>
            {notice.message}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={cancel}>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleAction}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
