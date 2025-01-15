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
import { useState } from "react";
import { IconEye, IconEyeOff } from "@tabler/icons-react";

export function Password({
  name,
  className,
  label,
  placeholder,
  disabled = false,
}: {
  name: string;
  className?: string;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
}) {
  const { control } = useFormContext(),
    [show, setShow] = useState(false),
    toggle = () => setShow(!show);

  return (
    <FormField
      control={control}
      name={name}
      render={({ field: {onChange, onBlur, value}, fieldState: { error } }) => (
        <FormItem className={cn("w-full space-y-0 form-field", error ? 'error' : '')}>

          <FormLabel>{label}</FormLabel>

          <FormControl className="relative">
            <div className="relative">
              <FormInput
                placeholder={placeholder}
                type={show ? "text" : "password"}
                className={cn("input", className)}
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                disabled={disabled}
                id={name}
              />
              {show ? (
                <IconEyeOff
                  size={20}
                  className="absolute right-4 bottom-4"
                  onClick={toggle}
                />
              ) : (
                <IconEye
                  size={20}
                  className="absolute right-4 bottom-4"
                  onClick={toggle}
                />
              )}
            </div>
          </FormControl>
          
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
