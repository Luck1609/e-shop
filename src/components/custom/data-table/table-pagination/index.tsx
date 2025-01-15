import { Table, TableMeta } from "@tanstack/react-table"
import { TableSelection } from "./table-column-toggler"
import { TableRowsPerPage } from "./table-rows-per-page"
import { Button } from "@/components/ui/button"
import { IconChevronsLeft, IconChevronsRight } from "@tabler/icons-react"
import { pagination } from "./pagination"
import { TypographySm, TypographyXs } from "../../misc/typography"
import { cn } from "@/shared/lib/utils"
import { Fragment } from "react/jsx-runtime"
import { DataTableProps, PaginatedData } from "../types"
import { Link } from "@inertiajs/react"

export function TablePagination<TData>({
  table,
}: {table: Table<TData>}) {
  const meta = table.options.meta

  const paginationData = pagination(8, 100)
  const links = meta?.links ?? []

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between px-2 text-light-color dark:text-dark-default py-4 border-t dark:border-dark-border space-y-4 lg:space-y-0">
      <TableSelection table={table} />

      <div className="flex flex-col lg:flex-row items-center space-x-6 lg:space-x-8 space-y-4 lg:space-y-0">
        <TableRowsPerPage
          table={table}
          onPageChange={(pageNumber: number) => console.log("current page number", pageNumber)
          }
          pageSize={10}
        />

        <div className="flex w-[100px] items-center justify-center text-sm font-medium">
          Page 1 of {table.getPageCount()}
        </div>

        <div className="flex items-center space-x-2">
          {links.map(({ active, label, url }) => (
            <Fragment key={url}>
              {
                active ? (
                  <Button variant="secondary" className="w-8 h-8 p-0">{label}</Button>
                ) : (
                    !isNaN(parseInt(label)) ? (
                    <Link href={url} className={cn("flex items-center justify-center  rounded-md hover:bg-secondary border-secondary hover:bg-opacity-30 h-8 w-8", active ? "" : "")} key={url}>
                        <TypographySm>{label}</TypographySm>
                    </Link>
                  ) : <></>
                )
              }
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  )
}
