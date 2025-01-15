import {
  Select as SelectField,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useFormContext } from "react-hook-form";
import { FormField, FormLabel, FormMessage } from "@/components/ui/form";
import { cn } from "@/shared/lib/utils";
import { SelectOptions } from "@/types";



export function Select({
  name,
  options,
  label,
  placeholder,
  disabled
}: {
  name: string;
  options: SelectOptions[];
  label: string;
  placeholder?: string
  disabled?: boolean
}) {
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field: { onChange, value = "" }, fieldState: { error } }) => (
        <div className={cn("form-field", error ? 'error' : '')}>
          <FormLabel className="mb-1 inline-block">{label}</FormLabel>
          <SelectField onValueChange={onChange} value={value} disabled={disabled}>
            <SelectTrigger className="h-auto !py-4">
              <SelectValue placeholder={placeholder} className="" />
            </SelectTrigger>

            <SelectContent className="max-h-72 bg-white dark:!bg-input dark:text-dark-default">
              {options?.map(({ label: labelProp, value }, index) => (
                <SelectItem
                  key={`${value}_${index}`}
                  className="cursor-pointer p-3 dark:text-white pl-8 hover:!text-secondary hover:!bg-secondary hover:!bg-opacity-15"
                  value={value}
                >
                  {labelProp}
                </SelectItem>
              ))}
            </SelectContent>
          </SelectField>

          <FormMessage />
        </div>
      )}
    />
  );
}
