import { cn } from "@/shared/lib/utils";
import { TypographyH3 } from "./typography";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"


export function Title({ className, title }: { className?: string, title: string }) {

  // const links = useMemo(() => {
  //   const pathnameSplit = pathname.split("/")
  //   return pathnameSplit.reduce((names: { label: string, url: string }[], name: string, index: number) => {
  //     let url
  //       // `${())
  //       // ? `${names[index - 1].url}/${name}`
  //       // : ""}`
      
  //     // if (index > 0 || (index + 1 === pathnameSplit.length)) url = 
  //     // const url = `${names[1]}${(index > 0 || (index + 1 === links.length)) ? "/" : ""}`

  //     console.log("Current url =>", url)
      
  //     return [
  //       ...names,
  //       {
  //         label: index === 0 ? "Home" : capitalize(name.split("-").join(" ")),
  //         url: `${names[index - 1]?.url}/${name}`
  //       }
  //     ]
  //   }, [])
  // }, [pathname])

  return (
    <section className={cn("py-5 lg:py-14", className)}>
      <TypographyH3>{title ?? "Title here"}</TypographyH3>

      <Breadcrumb className="py-1 lg:py-3">
        <BreadcrumbList>
          {
          }
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          {/* <BreadcrumbSeparator />
          <BreadcrumbItem>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1">
                <BreadcrumbEllipsis className="h-4 w-4" />
                <span className="sr-only">Toggle menu</span>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuItem>Documentation</DropdownMenuItem>
                <DropdownMenuItem>Themes</DropdownMenuItem>
                <DropdownMenuItem>GitHub</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </BreadcrumbItem> */}
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/docs/components">Components</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </section>
  )
}
