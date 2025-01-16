import { Link } from "react-router-dom";
import { TypographyH2 } from "./typography";
import { cn } from "@/shared/lib/utils";

export function Logo({className}: {className?: string}) {
  return (
    <Link to="/" className={cn("text-center", className)}>
      <TypographyH2 className="font-['Roboto']">
        <span className="text-secondary z-[1] relative">VC</span>
        <span className="-ml-1 relative">MALL</span>
      </TypographyH2>
    </Link>
  )
}
