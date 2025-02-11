import { Rate } from "@/components/custom/form/rating";
import { Typography, TypographyH6 } from "@/components/custom/misc";
import { generateProductImage } from "@/shared/lib/utils";
import { Link } from "react-router-dom";

export type ProductData = {
  name: string;
  category: string;
  price: number;
  currency: string;
  rating: number;
  isFeatured: number;
  isPopular: number;
  description: string;
  images: string[];
  slug: string;
  swatches: never[];
}

export default function ProductCard({ data }: { data?: ProductData }) {
  return (
    <Link to={`/products/${data?.category.toLowerCase()}/${data?.slug.replace(" ", "-")}`} className="">
      <div className="w-full h-[255px] md:h-[313px] lg:h-[400px] bg-[#ECEAE8] rounded-lg overflow-hidden mb-2">
        <img src={data ? generateProductImage(data) : ""} alt="" className="" />
      </div>

      <div className="space-y-1 lg:space-y-2.5 px-2">
        <Rate rate={data?.rating ?? 0} className="h-3.5 w-3.5 space-x-0 fill-slate-300 stroke-slate-300" />
        <TypographyH6 className="leading-0 text-ellipsis">{data?.name.replace("-", "") ?? "Product name"}</TypographyH6>
        <Typography>${data?.price ?? "30"}</Typography>
      </div>
    </Link>
  )
}
