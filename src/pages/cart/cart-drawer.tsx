import { Typography, TypographyLead, TypographySm, TypographyXs } from "@/components/custom/misc";
import { ScrollArea } from "@/components/ui/scroll-area";
import { SheetClose, SheetFooter } from "@/components/ui/sheet";
import { Link } from "react-router-dom";
import { Counter } from "./card";


export default function CartDrawer() {
  return (
    <>
      <ScrollArea className="h-[80dvh] pt-5">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </ScrollArea>

      <SheetFooter className="flex space-x-2">
        <div className="w-full flex justify-between">
          <TypographyLead className="font-medium">Subtotal</TypographyLead>
          <TypographyLead className="font-medium">$230.00</TypographyLead>
        </div>
        {/* <SheetClose>
          <Link to="/" className="w-full h-10 block p-3">View cart</Link>
          <Link to="/" className="w-full h-10 block p-3">View cart</Link>
        </SheetClose>
        <SheetClose>
          <Link to="/" className="w-full h-10 block p-3">Checkout</Link>
        </SheetClose> */}
      </SheetFooter>
    </>
  )
}


const Card = () => {
  return (
    <div className="w-full grid grid-cols-4 gap-3 mb-3">
      <div className="w-full h-20 bg-slate-200 rounded"></div>
      <div className="col-span-3">
        <Typography>Product name here</Typography>
        <TypographyXs className="block mb-2">
          <span className="">Color: </span>
          <span className="">Teal</span>
        </TypographyXs>

        <div className="w-full flex items-center space-x-10">
          <TypographySm className="block">$27</TypographySm>
          <Counter className="w-20" />
        </div>
      </div>
    </div>
  )
}