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
import { Label } from "@/components/ui/label";

export default function ColorInput({
  name,
  className,
  label,
  placeholder,
  disabled = false,
}: {
  name: string;
  type?: string;
  className?: string;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
}) {
  const { control, watch } = useFormContext();

  const background = watch(name)

  return (
    <FormField
      control={control}
      name={name}
      render={({ field: { onBlur, onChange, value }, fieldState: { error } }) => (
        <FormItem className={cn("w-full space-y-0 form-field", error ? 'error' : '')}>
          <Label>{label}</Label>
          <FormControl className="relative">
            <>
              <FormInput
                placeholder={placeholder}
                className={cn("!h-[54px] !border-none", className)}
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                disabled={disabled}
                type="color"
                style={{ background }}
              />
            </>
          </FormControl>

          <FormMessage />
        </FormItem>
      )}
    />
  );
}
