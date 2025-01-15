
import { TooltipButton } from "@/components/custom/misc"
import { IconEye, IconTrash } from "@tabler/icons-react"
import { Button } from "@/components/ui/button"
import TableActionAlert from "../action-buttons/alert"
import { router } from "@inertiajs/react"

export default function SelectedRowsActions({ ids, url }: { ids: string[], url: {publish: string, delete: string} }) {
  const bulkAction = (url: string) => () => {
    router.delete(url, {
      data: {ids}
    })
  }

  return (
    <div className="flex items-center space-x-3">
      <TableActionAlert
        triggerComponent={
          <TooltipButton label="Toggle publicity">
            <Button variant="ghost" className="flex items-center bg-slate-100 text-danger p-2 rounded-md text-sm">
              <IconEye size={18} />
              <span>Publish toggler</span>
            </Button>
          </TooltipButton>
        }
        title="Bulk publishing"
        description="This action will toggle the publishing status of the selected sliders. This means, the slider will be published if not and vice versa"
        action={bulkAction(url.publish)}
      />

      <TableActionAlert
        triggerComponent={
          <TooltipButton label="Permanently delete">
            <Button variant="ghost" className="flex items-center bg-danger p-2 rounded-md text-sm">
              <IconTrash size={18} />
              <span>Delete</span>
            </Button>
          </TooltipButton>
        }
        title="Bulk publishing"
        description="This action permanently deletes the selected sliders. Please use this action with caution!"
        action={bulkAction(url.delete)}
      />

    </div>
  )
}
