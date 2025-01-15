import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { FormField } from "@/components/ui/form"
import { useFormContext } from "react-hook-form"
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import { cn } from "@/shared/lib/utils"
import { format } from "date-fns"
import { IconCalendarMonth } from "@tabler/icons-react"
import { ReactNode } from "react"

export function Datepicker({ name, className, label }: { name: string, className?: string, label: ReactNode }) {
  const { control } = useFormContext()

  return (
    <FormField
      control={control}
      name={name}
      render={({ field: { value, onChange } }) => {
        return (
          <Popover>
            <PopoverTrigger asChild>
              <Button
                // variant="default-outline"
                className={cn(
                  "w-[280px] justify-start text-left font-normal",
                  !value && "text-muted-foreground", className
                )}
              >
                <IconCalendarMonth className="mr-2 h-4 w-4" />
                {value ? format(value, "PPP") : <span>Pick a value</span>}
              </Button>
            </PopoverTrigger>

            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={value}
                onSelect={onChange}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        )
      }}
    />
  )
}
