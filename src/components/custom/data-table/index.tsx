import {
  RowData,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { TablePagination } from "./table-pagination"
import { DataTableProps, PaginatedData } from "./types"
import { Typography } from "../misc/typography"
import { usePage } from "@inertiajs/react"
import { PageProps,  } from "@/types"

export function DataTable<TData, TValue>({
  columns,
  data,
  components
}: DataTableProps<TData, TValue>) {
  const { current_page, total, per_page, links } = usePage<PageProps & PaginatedData>().props

  const preload = (props: Record<string, string>) => console.log("Current page number", props)

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    meta: {
      current_page,
      total,
      per_page,
      links,
      preload
    },
  })

  return (
    <>
      {/* {
        components?.header && components.header(table)
      } */}

      {/* {table.getFilteredSelectedRowModel().rows.length > 0 && (
        <div className="w-full p-2 bg-dark-border bg-opacity-15 rounded-md theme-text flex items-center justify-between">
          <Typography>
            {table.getFilteredSelectedRowModel().rows.length} rows selected
          </Typography>

          {
            components?.batchAction && components.batchAction(table)
          }
        </div>
      )} */}

      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id} className="dark:border-dark-border">
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead
                    key={header.id}
                    className="dark:text-dark-text px-2 font-medium"
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                  </TableHead>
                )
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {
            table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
                className="dark:border-dark-border dark:text-dark-text px-5 hover:!bg-secondary hover:!bg-opacity-15"
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id} className="p-2">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      <TablePagination table={table} />
    </>
  )
}

declare module "@tanstack/table-core" {
  interface TableMeta<TData extends RowData> {
    current_page: number
    total: number
    links: { url: string, active: boolean, label: string }[]
    per_page: number
    preload?: (props: Record<string, string>) => void
  }
}
