import { useMemo } from "react";
import { Container, Title, Pagination } from "@/components/custom/misc";
import ProductCard from "./card";
import { useParams, useSearchParams } from "react-router-dom";
import { capitalize } from "lodash";
import { products } from "@/shared/products"

export default function ProductListing() {
  const { collection } = useParams()
  const [params] = useSearchParams()
  const page = Number.parseInt(params.get("page") ?? "1")
  const perPage = 12


  const title = useMemo(() => {
    if (collection) {
      const titleArray = collection.split("-")

      return titleArray.reduce((allTitles: string[], titleText: string) => [...allTitles, capitalize(titleText)], []).join(' ').trim()
    }
  }, [collection])


  const paginatedProducts = useMemo(() => {
    const startIndex = (page - 1) * perPage

    const paginated = products.slice(startIndex, startIndex + perPage)
    
    console.log("Paginate3d data", paginated, startIndex, startIndex + perPage, page)
    return paginated
  }, [page])


  return (
    <div>
      <Container className="grid lg:grid-cols-4 gap-x-4">
        <Title
          className="lg:col-span-4"
          title={title ?? "All Products"}
        />

        <section className="">
        </section>
        <section className="lg:col-span-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-8">
          {
            paginatedProducts.map((product, index: number) => <ProductCard data={product} key={index.toString()} />)
          }

        </section>
          <div className="w-full flex justify-center lg:col-span-4 py-5">
            <Pagination
              page={page}
              perPage={12}
              total={products.length}
            />
          </div>
      </Container>
    </div>
  )
}
