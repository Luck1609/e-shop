import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react"
import "swiper/css"
import { Autoplay } from "swiper/modules"
import { Rate } from "@/components/custom/form/rating"
import { Container, Typography, TypographyH4, TypographySm } from "@/components/custom/misc"
import { Avatar } from "@/components/ui/avatar"

const testimonies = [
  {
    name: "Sophia R.",
    message: "Shopping here was a breeze! The website is easy to navigate, and my order arrived earlier than expected. The quality exceeded my expectations. I’ll definitely be back!",
    subject: "Amazing experience!",
    rating: 5,
    avatar: ""
  },
  {
    name: "James L.",
    message: "I had a small issue with my order, but the support team resolved it quickly and professionally. You’ve gained a loyal customer for life!",
    subject: "Outstanding customer service!",
    rating: 3,
    avatar: ""
  },
  {
    name: "Emily T.",
    message: "This is my go-to e-commerce site for all my needs. The products are top-notch, and the discounts make it even better. Thank you for always delivering!",
    subject: "Highly recommend!",
    rating: 4,
    avatar: ""
  },
  {
    name: "Michael B.",
    message: "I was hesitant to order online, but this store proved me wrong. The product quality was outstanding, and the packaging was eco-friendly. I’m impressed!",
    subject: "Excellent quality!",
    rating: 4,
    avatar: ""
  },
  {
    name: "Olivia K.",
    message: "I ordered last week, and my package arrived in just two days! The prices are unbeatable, and the product was exactly as described.",
    subject: "Fast delivery and great prices!",
    rating: 5,
    avatar: ""
  },
  {
    name: "Isabella M.",
    message: "I’ve ordered multiple times, and they never disappoint. The variety is amazing, and the quality is consistent. I recommend it to all my friends.",
    subject: "Love this shop!",
    rating: 4,
    avatar: ""
  },
  {
    name: "Mia W.",
    message: "The prices are fair, and the quality is superb. I’m thrilled with my purchase and will definitely be shopping here again soon.",
    subject: "Great value for money!",
    rating: 4,
    avatar: ""
  },
  {
    name: "Daniel H.",
    message: "From start to finish, everything was perfect. Easy checkout, fast shipping, and the product was exactly what I needed. Keep up the great work!",
    subject: "Five stars all the way",
    rating: 5,
    avatar: ""
  },
]


export default function Testimony() {
  return (
    <article className="py-16">
      <Container className="">
        <div className="lg:col-span-3 mb-5">
          <TypographyH4>What our custmers are saying</TypographyH4> 
          <Typography className="text-slate-400">Here is an uncesored words from our cherished customers</Typography>
        </div>

        <Swiper
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          centeredSlides={true}
          className="grid lg:grid-cols-3 gap-5 space-x-10"
        >
          {
            testimonies.map((data, id: number) => (
              <SwiperSlide
                className="w-full flex bg-white rounded-md z-10 relative h-full max-h-80 lg:mx-3"
                key={id}
              >
                <Card key={id.toString()} data={data} />
              </SwiperSlide>
            ))
          }
        </Swiper>
      </Container>
    </article>
  )
}

type TestimonyProps = { data: { name: string, message: string, rating: number } }

const Card = ({ data: { name, message, rating = 0 } }: TestimonyProps) => {

  return (
    <div className="p-2 lg:p-3 h-[230px]">
      <div className="w-full flex items-start space-x-4">
        <Avatar className="h-14 w-14 bg-slate-200"></Avatar>

        <div className="flex flex-col space-y-1 avatar mb-2 lg:mb-0">
          <Typography className="font-medium">{name}</Typography>
          <Rate rate={rating} />
        </div>
      </div>

      <TypographySm className="flex justify-center items-center text-center h-[150px] overflow-hidden leading-6">{message}</TypographySm>
    </div>
  )
}