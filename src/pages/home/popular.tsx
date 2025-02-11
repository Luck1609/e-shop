import { Container, Typography, TypographyH3 } from "@/components/custom/misc";
import ProductCard from "../products/card";
import { products } from "@/shared/products";

const popular = products.filter(({ isPopular }) => isPopular)

export default function Popular() {
  
  console.log("Popular count", popular.length)

  return (
    <article className="bg-slate-200 py-20">
      <Container>
        <div className="mb-5">
          <TypographyH3 className="">Popular Products</TypographyH3>
          <Typography className="text-slate-500">Here is a curated collection of our best products.</Typography>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-8">
          {
            (popular.slice(0, 8)).map((product, id: number) => (
              <ProductCard data={product} key={id.toString()} />
            ))
          }
        </div>
      </Container>
    </article>
  )
}
