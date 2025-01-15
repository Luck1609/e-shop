import { Link } from "@inertiajs/react";
import { TypographyH4, TypographySm } from "./typography";
import { cn } from "@/shared/lib/utils";

export function Logo({className}: {className?: string}) {
  return (
    <Link href="/" className={cn("text-center", className)}>
      <TypographyH4 className="font-['Roboto']">
        Getstart
      </TypographyH4>
      <TypographySm className="uppercase text-secondary text-[12px] block">Research Store</TypographySm>
    </Link>
  )
}
