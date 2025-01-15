import { cn } from "@/shared/lib/utils"
import AddButton, { AddButtonProps } from "./add-button"
import SearchComponent, { SearchComponentProps } from "./search-component"
import StatusFilter, { StatusFilterProps } from "./status-filter"

type BaseHeaderProps = {
  statusFilterProps: StatusFilterProps
  searchComponentProps: SearchComponentProps
  addButtonProps: AddButtonProps
}

export default function BaseTableHeader({
  statusFilterProps,
  searchComponentProps,
  addButtonProps,
}: Partial<BaseHeaderProps>) {
  return (
    <div className={cn("w-full grid lg:grid-cols-8 lg:mb-5 py-5 px-3 lg:p-0")}>
      <div className="col-span-3 lg:col-span-5">
        <StatusFilter {...statusFilterProps} />
      </div>

      <div
        className={cn(
          "col-span-8 lg:col-span-2 order-2 lg:order-1 mt-3 lg:mt-0"
        )}
      >
        <SearchComponent {...searchComponentProps} />
      </div>

      <div className="col-span-5 order-1 lg:order-2 lg:col-span-1 justify-self-end">
        {addButtonProps?.show ? (
          <AddButton {...addButtonProps} />
        ) : (
          addButtonProps?.component && addButtonProps.component
        )}
      </div>
    </div>
  )
}
