import { Container, TypographyH1, TypographyLead } from "@/components/custom/misc";
import { Link } from "react-router-dom";


export default function Hero() {
  return (
    <article className="w-full bg-gradient-to-t from-slate-200 to-slate-50 -mt-28">
      <Container className="grid lg:grid-cols-3 w-full h-[100dvh]">
        <div className="w-full h-full lg:col-span-2 flex items-center justify-center">
          <div className="w-full lg:w-4/5 space-y-5">
            <TypographyLead className="text-2xl">Men's collection</TypographyLead>
            <TypographyH1 className="!leading-snug">Simple, yet elegant. All of the best collections, just for you</TypographyH1>

            <Link to="" className="w-60 h-14 inline-flex items-center justify-center rounded-full bg-secondary text-white">Browse now</Link>
          </div>
        </div>
        <div className="w-full h-full hero"></div>
      </Container>
    </article>
  )
}
