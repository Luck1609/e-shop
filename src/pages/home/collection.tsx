import { Container, TypographyH3, TypographySm } from "@/components/custom/misc";
import shoes from "@/assets/categories/shoes.jpg"
import dress from "@/assets/categories/access-img-3.jpg"
import fashion from "@/assets/categories/access-img-6.jpg"
import bag from "@/assets/categories/bag.jpg"
import accesories from "@/assets/categories/accesories.jpg"


export default function ProductCollection() {
  return (
    
    <Container className="grid lg:grid-cols-3 gap-5 py-14">
      <div className="lg:w-2/5 lg:col-span-3">
        <TypographyH3>Our Collections</TypographyH3>
        <TypographySm className="text-slate-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit asperiores magnam nesciunt repellendus minima earum.</TypographySm>
      </div>
      <article className="h-[280px] rounded-md overflow-hidden group">
        <img src={shoes} alt="" className="w-full group-hover:scale-105 duration-300 ease-linear" />
      </article>

      <article className="h-[280px] rounded-md overflow-hidden group">
        <img src={dress} alt="" className="w-full group-hover:scale-105 duration-300 ease-linear" />
      </article>

      <article className="h-[280px] rounded-md overflow-hidden group">
        <img src={bag} alt="" className="w-full group-hover:scale-105 duration-300 ease-linear" />
      </article>

      <article className="h-[280px] rounded-md overflow-hidden group">
        <img src={fashion} alt="" className="w-full group-hover:scale-105 duration-300 ease-linear" />
      </article>

      <article className="h-[280px] rounded-md overflow-hidden group">
        <img src={accesories} alt="" className="w-full group-hover:scale-105 duration-300 ease-linear" />
      </article>
    </Container>
  )
}
