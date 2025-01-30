import { Container } from "@/components/custom/misc";
import { Title } from "@/components/custom/misc";
import ProductCard from "../products/card";


export default function Wishlist() {
  return (
    <Container>
      <Title
        title="Wishlist"
      />

      <div className="grid lg:grid-cols-4 gap-5">
        {
          Array.from(Array(8).keys()).map((index: number) => (
            <ProductCard key={index.toString()} />
          ))
        }
      </div>
    </Container>
  )
}
