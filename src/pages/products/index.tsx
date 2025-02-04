import { useMemo } from "react";
import { Container, Title } from "@/components/custom/misc";
import ProductCard from "./card";
import { useParams } from "react-router-dom";
import { capitalize } from "lodash";

export default function ProductListing() {
  const { collection } = useParams()

  const title = useMemo(() => {
    if (collection) {
      const titleArray = collection.split("-")

      return titleArray.reduce((allTitles: string[], titleText: string) => [...allTitles, capitalize(titleText)], []).join(' ').trim()
    }
  }, [collection])

  return (
    <div>
      <Container className="grid lg:grid-cols-4 gap-x-4 gap-y-8">
        <Title
          className="lg:col-span-4"
          title={title ?? "All Products"}
        />

        <section className="">
        </section>
        <section className="lg:col-span-3 grid grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-8">
          
          {
            Array.from(Array(12).keys()).map((id: number) => <ProductCard key={id.toString()} />)
          }
        </section>
      </Container>
    </div>
  )
}
