
import { Typography, TypographyH3, TypographyH4, TypographyLead } from "@/components/custom/misc/typography";
import { Container } from "@/components/custom/misc";
import { Avatar } from "@/components/ui/avatar";
import { IconBrandFacebook, IconBrandLinkedin, IconBrandX } from "@tabler/icons-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import info from "@/assets/svg/information.svg"


const about = [
  {
    title: "Our Vision",
    content: <Typography>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam dolor possimus consectetur aut necessitatibus est delectus officia iure voluptates harum! Unde odio hic dignissimos at similique necessitatibus veniam consectetur sapiente.</Typography>
  },
  {
    title: "Our Mission",
    content: <Typography>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam dolor possimus consectetur aut necessitatibus est delectus officia iure voluptates harum! Unde odio hic dignissimos at similique necessitatibus veniam consectetur sapiente.</Typography>
  },
  {
    title: "Our Purpose",
    content: <Typography>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam dolor possimus consectetur aut necessitatibus est delectus officia iure voluptates harum! Unde odio hic dignissimos at similique necessitatibus veniam consectetur sapiente.</Typography>
  },
]

export default function About() {

  return (
    <Container className="w-full grid lg:grid-cols-3 lg:gap-x-8 my-8 lg:my-16 space-y-16">

      <div className="w-full relative lg:col-span-3 grid lg:grid-cols-2">
        <div className="flex items-center">
          <img src={info} alt="" className="w-10/12" />
        </div>
        <article className="lg:w-full">
          <TypographyH4 className="block my-4 lg:mb-8">
            A Brief History of the Virtual City Mall
          </TypographyH4>

          <div className="leading-8 space-y-3">
            <Typography className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores culpa exercitationem laudantium rerum ipsam consequuntur provident ex. Dolor, impedit voluptas nemo necessitatibus voluptatibus iusto assumenda, rem sequi nesciunt dolorem autem.</Typography>
            <Typography className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores culpa exercitationem laudantium rerum ipsam consequuntur provident ex. Dolor, impedit voluptas nemo necessitatibus voluptatibus iusto assumenda, rem sequi nesciunt dolorem autem.</Typography>

            <div className="mt-8 space-y-5">
              <Accordion type="single" collapsible className="w-full divide-y-0 space-y-3">
                {
                  about.map(({ title, content }, index: number) => (
                    <AccordionItem value={`item-${index} border-b-none`}>
                      <AccordionTrigger className="no-underline hover:no-underline py-1 font-bold text-xl">
                        {title}
                      </AccordionTrigger>
                      <AccordionContent className="bg-slate-100 rounded-lg p-5">
                        {content}
                      </AccordionContent>
                    </AccordionItem>
                  ))
                }
              </Accordion>
            </div>
          </div>
        </article>
      </div>

      <div className="lg:col-span-3 py-8">
        <TypographyH3 className="text-center mb-10">Our Team</TypographyH3>

        <article className="grid lg:grid-cols-5 gap-x-5 gap-y-16">
          {
            Array.from(Array(5).keys()).map((id: number) => <TeamCard key={id.toString()} />)
          }
        </article>
      </div>

    </Container>
  );
}

const TeamCard = () => {
  return (
    <div className="flex flex-col justify-center items-center dark:bg-dark-card py-5 rounded-lg">
      <Avatar className="h-44 w-44 bg-teal-500 mb-4" />

      <div className="text-center">
        <TypographyLead>Members Name</TypographyLead>
        <Typography>Member position</Typography>

        <div className="flex space-x-4 mt-4 items-center justify-center">
          <a href="#" className="">
            <IconBrandFacebook />
          </a>
          <a href="#" className="">
            <IconBrandLinkedin />
          </a>
          <a href="#" className="">
            <IconBrandX />
          </a>
        </div>
      </div>
    </div>
  )
}