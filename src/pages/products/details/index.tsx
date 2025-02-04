import { Rate } from "@/components/custom/form";
import { Container, Typography, TypographyH3, TypographyH4 } from "@/components/custom/misc";
import ProductCard from "../card";


export default function ProductDetailsPage() {
  return (
    <Container>
      <div className="grid lg:grid-cols-7 mb-10 lg:mb-20">
        <div className="lg:col-span-3 flex">
          <ul className="w-[100px] flex flex-col gap-y-2 bg-teal-400 ">
            <li className="w-[80px] h-[80px] bg-slate-100"></li>
            <li className="w-[80px] h-[80px] bg-slate-100"></li>
            <li className="w-[80px] h-[80px] bg-slate-100"></li>
            <li className="w-[80px] h-[80px] bg-slate-100"></li>
            <li className="w-[80px] h-[80px] bg-slate-100"></li>
          </ul>

          <div className="w-full bg-slate-100 h-[400px]"></div>
        </div>

        <div className="lg:col-span-4 bg-amber-100 space-y-4">
          <div className="space-y-1">
            <TypographyH3 className="font-medium">Product Title Here</TypographyH3>
            <Typography>Category name here</Typography>
            <Rate rate={0} />
          </div>
          <TypographyH4 className="font-medium">$32.00</TypographyH4>

          
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
