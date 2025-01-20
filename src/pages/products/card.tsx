import { Rate } from "@/components/custom/form/rating";
import { Typography, TypographyH6 } from "@/components/custom/misc";


export default function ProductCard() {
  return (
    <div className="">
      <div className="bg-slate-100 w-full h-44 lg:h-80 rounded-lg mb-2">
        <img src="" alt="" className="" />
      </div>

      <div className="space-y-1 px-2">
        <TypographyH6 className="font-medium leading-0">Product name here</TypographyH6>
        <Typography>$100.00</Typography>
        <Rate rate={0} className="h-3 w-3 space-x-0 fill-slate-300 stroke-slate-300" />
      </div>
    </div>
  )
}
