import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { FormField } from "@/components/ui/form";
import { useFormContext } from "react-hook-form";
import { SelectOption } from "@/vite-env";
import { TypographySm } from "../misc";
import { cn } from "@/shared/lib/utils";



export function RadioButtons({
  options,
  name,
  className,
  itemClassName,
}: {
  options: SelectOption[];
  name: string;
  className?: string;
  itemClassName?: string;
}) {
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field: { value = "", onChange } }) => (
        <div className="">
          <RadioGroup value={value} className={className}>
            {
              options.map(({ label, value: optionValue }, index: number) => (
                <label className={cn("", itemClassName)} key={index.toString()}>
                  <RadioGroupItem value={value} id={`${name}-${index}`} checked={value === optionValue} onSelect={onChange} />
                  <TypographySm>{label}</TypographySm>
                </label>
              ))
            }
          </RadioGroup>
        </div>
      )}
    />
  );
}
