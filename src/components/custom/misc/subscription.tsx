import { useForm } from 'react-hook-form'
import z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form } from '@/components/ui/form'
import { Container } from './container'
import { TypographyLead } from './typography'
import { Input } from '../form'
import { Button } from '@/components/ui/button'



const SubscriptionValidationSchema = z.object({
  email: z.string().nonempty().email()
})

export default function Subscription() {
  
  const form = useForm({
    mode: "all",
    defaultValues: { email: "" },
    resolver: zodResolver(SubscriptionValidationSchema)
  })

  return (
    <div className="py-16">
      <Container className="p-10 rounded-lg- bg-dark text-slate-100">
        <div className="w-10/12 grid lg:grid-cols-2 gap-10 mx-auto h-80 items-center">
          <article className="">
            <TypographyLead className="leading-loose">We always stay with our clients and respect their business. We deliver 100% and provide instant response to help them succeed in constantly changing and challenging business world.</TypographyLead>
          </article>

          <Form {...form}>
            <form className="">
              <TypographyLead>Subscribe to our newsletter</TypographyLead>
              <div className="flex items-center">
                <Input name="email" placeholder="Email address" />
                <Button>Subscribe</Button>
              </div>
            </form>
          </Form>
        </div>
      </Container>
    </div>
  )
}
