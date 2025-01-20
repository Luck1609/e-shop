import { Container, Typography, TypographyH3 } from "@/components/custom/misc";
import ProductCard from "../products/card";


export default function Featured() {
  return (
    <article className="py-16">
      <Container>
        <div className="mb-5">
          <TypographyH3 className="">Best New Collection</TypographyH3>
          <Typography className="text-slate-500">Here is a curated collection of our best products.</Typography>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-8">
          {
            Array.from(Array(8).keys()).map((id: number) => (
              <ProductCard key={id.toString()} />
            ))
          }
        </div>
      </Container>
    </article>
  )
}
