import { useFormContext } from "react-hook-form";
import {
  // Textarea as TextareaComponent,
  FormField,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { cn } from "@/shared/lib/utils";
import { Textarea as TextareaComponent } from "@/components/ui/textarea";
import { ReactNode } from "react";

export function Textarea({
  name,
  className,
  label,
  placeholder,
  rows,
  maxLength,
  ...props
}: {
  name: string;
  className?: string;
  label?: ReactNode;
  placeholder?: string;
  rows?: number
  maxLength?: number
}) {
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => (
        <div className="form-field">
          <FormLabel>{label}</FormLabel>
          <TextareaComponent
            placeholder={placeholder}
            className={cn("input", className)}
            onChange={onChange}
            value={value}
            rows={rows}
            {...props}
          />
          <FormMessage />
        </div>
      )}
    />
  );
}
