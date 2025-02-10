import { Rate } from "@/components/custom/form/rating";
import { Typography, TypographyH6 } from "@/components/custom/misc";

export type ProductData = {
  name: string;
  category: string;
  price: string;
  currency: string;
  rating: number;
  description: string;
  images: string[];
  swatches: string[];
}

export default function ProductCard({ data }: {data?: ProductData}) {
  return (
    <div className="">
      <div className="w-full h-[400px] bg-slate-100 rounded-lg overflow-hidden mb-2">
        <img src={data?.images[0] ?? ""} alt="" className="" />
      </div>

      <div className="space-y-2.5 px-2">
        <Rate rate={data?.rating ?? 0} className="h-3.5 w-3.5 space-x-0 fill-slate-300 stroke-slate-300" />
        <TypographyH6 className="leading-0 text-ellipsis">{data?.name ?? "Product name"}</TypographyH6>
        <Typography>${data?.price ?? "30"}</Typography>
      </div>
    </div>
  )
}
