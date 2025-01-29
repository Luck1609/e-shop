import { Typography, TypographySm } from "@/components/custom/misc";


export default function ReviewItem() {
  return (
      <div className="grid grid-cols-4 lg:grid-cols-9 items-center">
      <div className="bg-slate-200 w-20 h-20 lg:w-24 lg:h-24 rounded-lg mb-2 lg:col-span-2">
          <img src="" alt="" className="" />
        </div>

        <div className="w-full col-span-3 lg:col-span-7 flex justify-between gap-x-1">
          <div className="">
            <Typography className="font-medium leading-0">Product name here</Typography>
            <TypographySm className="">Quantity: 2</TypographySm>
          </div>

          <div className="space-y-1 px-2">
            <Typography>$100.00</Typography>
          </div>
        </div>
      </div>
  )
}
