import { ReactNode, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { cn } from "@/shared/lib/utils";
import Input, { isValidPhoneNumber } from "react-phone-number-input/input";

type InputType = {
  name: string;
  className?: string;
  label?: ReactNode;
  placeholder?: string;
}

export function PhoneNumberInput({
  name,
  className,
  label,
  placeholder,
}: InputType) {
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="w-full space-y-0 form-field">
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input placeholder={placeholder} className={cn("input flex w-full border-none rounded-md bg-white px-3 py-2 text-base ring-offset-white placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:bg-dark-input dark:ring-offset-slate-950  dark:placeholder:text-dark-default dark:focus-visible:ring-slate-300", className)} {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
