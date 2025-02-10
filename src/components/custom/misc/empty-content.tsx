import { Typography } from "@/components/custom/misc";
import { Icon } from "@tabler/icons-react";
import { ReactNode } from "react";


export default function EmptyContent({ message, icon: Icon }: { message: ReactNode, icon: Icon }) {
  return (
    <div className="flex items-center justify-center h-[50dvh]">
      <div className="flex flex-col items-center">
        <Icon className="h-10 w-10 mb-3" />
        <Typography>{ message }</Typography>
      </div>
    </div>
  )
}
