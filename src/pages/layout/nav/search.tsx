import { IconSearch } from "@tabler/icons-react";
import { TypographySm } from "@/components/custom/misc";


import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/custom/form";
import { useState } from "react";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";

export default function NavSearch() {
  const [open, setOpen] = useState(false)
  const form = useForm({
    mode: "all",
    defaultValues: {
      search: ""
    }
  })

  const toggleSearch = () => {
    setOpen(!open)
  }

  return (
    <Dialog open={open} onOpenChange={toggleSearch}>
      <DialogTrigger asChild>
        <Button className="border-none" variant="ghost" size="icon">
          <IconSearch className="w-5 h-5" />
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px] bg-white">
        <Form {...form}>
          <form className="space-y-4">
            <DialogHeader>
              <DialogTitle>Product search</DialogTitle>
              <DialogDescription>
                Can't find your needle in our haystack? Just search for it here
              </DialogDescription>
            </DialogHeader>

            <div className="">
              <Input
                name="search"
                className="!bg-transparent border dark:!bg-dark-body !h-12"
                placeholder="Search..."
                aria-label="Search..."
                type="search"
                label="Product search"
              />
            </div>

            <DialogFooter>
              <DialogClose>
                <Button type="submit" className="space-x-0.5">
                  <IconSearch className="w-4 h-4" />
                  <TypographySm className="font-normal">Search</TypographySm>
                </Button>
              </DialogClose>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
