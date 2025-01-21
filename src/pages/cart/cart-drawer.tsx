import { Typography, TypographyLead, TypographySm, TypographyXs } from "@/components/custom/misc";
import { ScrollArea } from "@/components/ui/scroll-area";
import { SheetClose, SheetFooter } from "@/components/ui/sheet";
import { Link, useNavigate } from "react-router-dom";
import { Counter } from "./card";
import { Button } from "@/components/ui/button";
import { IconTrash } from "@tabler/icons-react";


export default function CartDrawer() {
  const navigate = useNavigate()
  
  const goto = (url: string) => () => navigate(url)

  return (
    <>
      <ScrollArea className="h-[calc(100dvh-152px)] pt-4">
        <div className="space-y-5">
          {
            Array.from(Array(10).keys()).map((index: number) => (<CartCard key={index.toString()} />))
          }
          
        </div>
      </ScrollArea>

      <div className="h-28 py-2">
        <div className="w-full flex justify-between mb-5">
          <TypographyLead className="font-medium">Subtotal</TypographyLead>
          <TypographyLead className="font-medium">$230.00</TypographyLead>
        </div>

        <SheetFooter className="space-x-2">
          <SheetClose className="w-full">
            <Button onClick={goto("/checkout")} className="w-full h-12 block p-3 bg-secondary text-white rounded-md hover:bg-secondary hover:bg-opacity-85">Checkout</Button>
          </SheetClose>
          
          <SheetClose className="w-full">
            <Button onClick={goto("/cart")} variant="ghost" className="w-full h-12 block p-3 border border-secondary text-secondary rounded-md hover:text-secondary">View cart</Button>
          </SheetClose>
        </SheetFooter>
      </div>
    </>
  )
}


export const CartCard = () => {
  return (
    <div className="w-full grid grid-cols-8 md:grid-cols-6 items-center md:px-2 md:p-1 rounded">
      <div className="w-full h-full flex items-center gap-2 col-span-3 md:col-span-1">
        <Button size="icon" variant="ghost" className="hover:text-red-500 h-7 md:w-10 md:h-10">
          <IconTrash className="h-4 w-4 md:w-5 md:h-5" />
        </Button>

        <div className="bg-slate-200 rounded w-full md:w-9/12 h-28"></div>
      </div>

      <div className="col-span-5 grid md:grid-cols-5">
        <div className="md:space-y-1 md:col-span-2 pl-3 md:pl-5">
          <Typography>Product name here</Typography>

          <TypographySm className="block mb-2 font-normal">
            <span className="">Color: </span>
            <span className="">Teal</span>
          </TypographySm>
        </div>

        <Typography className="self-center block md:text-center pl-3 md:pl-0">$27</Typography>

        <div className="w-full flex md:justify-center pl-3 md:pl-0">
          <Counter className="w-24 rounded overflow-hidden border" />
        </div>

        <Typography className="hidden self-center md:block md:text-center pl-3 md:pl-0">$27</Typography>
      </div>
    </div>
  )
}


// export const CartCard = () => {
//   return (
//     <div className="w-full grid grid-cols-8 gap-x-3">
//       <div className="w-full h-full flex items-center col-span-3 gap-2">
//         <Button size="icon" variant="ghost" className="hover:text-red-500 h-7">
//           <IconTrash className="h-4 w-4" />
//         </Button>

//         <div className="bg-slate-200 rounded w-full h-full"></div>
//       </div>

//       <div className="col-span-5 space-y-1">
//         <Typography>Product name here</Typography>
//         <TypographySm className="block mb-2 font-normal">
//           <span className="">Color: </span>
//           <span className="">Teal</span>
//         </TypographySm>

//         <div className="w-full flex items-center space-x-10">
//           <Typography className="block">$27</Typography>
//           <Counter className="w-20 rounded overflow-hidden border" />
//         </div>
//       </div>
//     </div>
//   )
// }