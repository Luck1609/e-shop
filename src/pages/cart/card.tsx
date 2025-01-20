import { Typography, TypographyH6, TypographySm } from "@/components/custom/misc";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";


export default function CartCard() {
  return (
    <>
      <div className="bg-slate-200 h-24 w-16"></div>

      <div className="">
        <TypographyH6>Product name</TypographyH6>
        <TypographySm>Color: Teal</TypographySm>
      </div>

      <Typography>$92</Typography>

      <div className="">
        <Input />
        <div className="flex flex-col">
          <Button>
            <IconChevronUp />
          </Button>
          <Button>
            <IconChevronDown />
          </Button>
        </div>
      </div>
    </>
  )
}
