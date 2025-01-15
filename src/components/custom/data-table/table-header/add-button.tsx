import { ReactNode } from "react"
import { Button } from "@/components/ui/button"
import { Link } from "@inertiajs/react"
import { IconPlus } from "@tabler/icons-react"

export type AddButtonProps = {} & (
  | {
      show: true
      url: string
      label: string
    }
  | {
      show: false
      component?: ReactNode
    }
)

export default function AddButton(props: AddButtonProps) {
  return (
    props.show && (
      <Link href={props.url}>
        <Button className="space-x-1 px-1.5 lg:px-2">
          <IconPlus size={18} />
          <span className="">{props.label}</span>
        </Button>
      </Link>
    )
  )
}
