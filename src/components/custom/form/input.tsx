import { useFormContext } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input as FormInput } from "@/components/ui/input";
import { cn } from "@/shared/lib/utils";
import { ReactNode } from "react";

export function Input({
  name,
  className,
  label,
  placeholder,
  disabled = false,
  type = "text"
}: {
  name: string;
  type?: string;
  className?: string;
  label?: ReactNode;
  placeholder?: string;
  disabled?: boolean;
}) {
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field: { onBlur, onChange, value }, fieldState: { error } }) => (
        <FormItem className={cn("w-full space-y-0 form-field", error ? 'error' : '')}>
          <FormLabel className="mb-1 inline-block">{label}</FormLabel>
          <FormControl className="relative">
            <>
              <FormInput
                placeholder={placeholder}
                className={cn("input", className)}
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                disabled={disabled}
                type={type}
                id={name}
              />
            </>
          </FormControl>

          <FormMessage />
        </FormItem>
      )}
    />
  );
}
