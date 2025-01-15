import { TypographySm } from "../misc/typography";
import { SelectOptions } from "@/types";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { FormField } from "@/components/ui/form";
import { useFormContext } from "react-hook-form";



export function RadioButtons({
  options,
  name,
  className
}: {
  options: { label: string, value: string }[];
  name: string;
  className?: string;
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
                <div className="flex items-center space-x-2" key={index.toString()}>
                  <RadioGroupItem value={value} id={`${name}-${index}`} checked={value === optionValue} onSelect={onChange} />
                  <Label htmlFor={`${name}-${index}`}>{label}</Label>
                </div>
              ))
            }
          </RadioGroup>
        </div>
      )}
    />
  );
}
