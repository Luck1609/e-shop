import { ReactNode } from "react"
import { ColumnDef, Table, TableMeta } from "@tanstack/react-table"

export interface DataTablePaginationProps<TData> {
  table: Table<TData>
  meta?: TableMeta<PaginatedData>
}

export type PaginatedData = {
  current_page: number
  total: number
  links: { url: string, active: boolean, label: string }[]
  per_page: number
}

export interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
  components?: {
    header?: (table: Table<TData>) => ReactNode,
    batchAction?: (table: Table<TData>) => ReactNode,
  }
}

export type DialogAlert = {
  title: string;
  description: string;
  url: string;
}