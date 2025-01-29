import { Typography, TypographyH6, TypographySm } from "@/components/custom/misc";


export default function ReviewItem() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <div className="bg-slate-200 w-24 h-24 rounded-lg mb-2">
          <img src="" alt="" className="" />
        </div>

        <div className="">
          <Typography className="font-medium leading-0">Product name here</Typography>
          <TypographySm className="">Quantity: 2</TypographySm>
        </div>
      </div>

      <div className="space-y-1 px-2">
        <Typography>$100.00</Typography>
      </div>
    </div>
  )
}
