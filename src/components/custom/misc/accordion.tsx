import { Accordion as AccordionParent, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { cn } from '@/shared/lib/utils'
import { ShadcnAccordion } from '@/types'


type AccordionProps = {
  className?: string
  options: ShadcnAccordion[]
  titleClassName?: string
  contentClassName?: string
}


export default function Accordion({ className, options, titleClassName, contentClassName }: AccordionProps) {
  return (
    <AccordionParent type="single" collapsible className={cn("w-3/5 divide-y-0", className)}>
      {
        options.map(({ title, content }, index: number) => (
          <AccordionItem value={`item-${index}`} key={index.toString()}>
            <AccordionTrigger className={cn("no-underline hover:no-underline", titleClassName)}>
              {title}
            </AccordionTrigger>
            <AccordionContent className={cn("", contentClassName)}>{content}</AccordionContent>
          </AccordionItem>
        ))
      }
    </AccordionParent>
  )
}
