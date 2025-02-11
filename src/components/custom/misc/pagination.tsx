import {
  Pagination as PaginationContainer,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination"
import { cn } from "@/shared/lib/utils";
import { PaginatedData } from "@/vite-env";
import { Link } from "react-router-dom";


export function Pagination({ page, total, perPage }: PaginatedData) {
  const totalPages = Math.ceil(total / perPage)

  console.log("TOTAL PAGES", total)


  return (
    <PaginationContainer>
      <PaginationContent>
        {
          Array.from(Array(totalPages).keys()).map((id) => {
            const pageNumber = id + 1

            return (
              <PaginationItem key={id.toString()}>
                <Link to={`/products?page=${pageNumber}`} className={cn("inline-flex items-center justify-center rounded-lg  w-8 lg:w-10 lg:h-10 bg-transparent", page === pageNumber ? "bg-secondary text-white" : "")}>{pageNumber}</Link>
              </PaginationItem>
            )
          })
        }
      </PaginationContent>
    </PaginationContainer>
  )
}
