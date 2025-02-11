import { Rate } from "@/components/custom/form";
import { Container, Typography, TypographyH3, TypographyH4 } from "@/components/custom/misc";
import ProductCard from "../card";
import { products } from "@/shared/products";
import { useParams } from "react-router-dom";
import { generateProductImage } from "@/shared/lib/utils";
import { useState } from "react";



export default function ProductDetailsPage() {
  const [preview, setPreview] = useState(0)
  const { slug: productSlug } = useParams()
  const product = products.filter(({ slug }) => slug === productSlug?.replace("-", " "))?.[0]

  console.log("Detail product", product, productSlug)

  const handlePreview = (index: number) => () => setPreview(index)

  return (
    <Container>
      <div className="grid lg:grid-cols-7 mb-10 lg:mb-20">
        <div className="lg:col-span-3 flex flex-col md:flex-row">
          <ul className="lg:w-[100px] flex md:flex-col justify-center md:justify-normal gap-x-2 gap-y-2 order-2 md:order-1">
            {
              product.images.map((_: string, index) => (
                <li className="w-[60px] lg:w-full lg:h-[80px] flex justify-start cursor-pointer" onClick={handlePreview(index)}>
                  <img src={generateProductImage(product, index)} alt="" className="h-full" />
                </li>
              ))
            }
          </ul>

          <div className="w-4/5 lg:w-full md:w-[350px] lg:h-[600px] mx-auto mb-4 lg:mb-0 bg-slate-100 order-1 md:order-2">
            <img src={generateProductImage(product, preview)} alt="" className="" />
          </div>
        </div>

        <div className="lg:col-span-4 bg-amber-100 space-y-4">
          <div className="space-y-1">
            <TypographyH3 className="font-medium">{ product.name }</TypographyH3>
            <Typography>{ product.category }</Typography>
            <Rate rate={0} />
          </div>
          <TypographyH4 className="font-medium">${product.price}</TypographyH4>

          
          {/* <Typography>Casual styling and precious details come together in this stretch cotton ribbed jersey top. The cropped silhouette pairs perfectly with the casual feel of ribbing, while the deep V-neck is enriched with an embroidery of fine rows of precious monili, completing the look of the top with a very feminine sparkling note.</Typography> */}
        </div>
      </div>


      {/* <div className="bg-theme xl:col-span-5 p-5 rounded-lg">
        <Tabs defaultValue="description" className="">
          <TabsList>
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="reviews">Customer Reviews</TabsTrigger>
            <TabsTrigger value="specifications">Specifications</TabsTrigger>
          </TabsList>
          <TabsContent value="reviews" className="py-5 px-2">
            <Reviews />
          </TabsContent>
          <TabsContent value="specifications" className="py-5 px-2">
            <Specifications />
          </TabsContent>
          <TabsContent value="description" className="py-5 px-2">
            <ProductDescription />
          </TabsContent>
        </Tabs>
      </div> */}

      <div className="my-10">
        <TypographyH4 className="mb-5">Similar Products</TypographyH4>
        <section className="grid grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-8">
          {
            Array.from(Array(8).keys()).map((id: number) => <ProductCard key={id.toString()} />)
          }
        </section>
      </div>
    </Container>
  );
}
