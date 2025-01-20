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
      <Container className="rounded-lg bg-dark text-default">
        <div className="w-full lg:w-10/12 grid lg:grid-cols-2 gap-10 p-5 lg:p-10 mx-auto lg:h-80 items-center">
          <article className="">
            <TypographyLead className="leading-loose">We always stay with our clients and respect their business. We deliver 100% and provide instant response to help them succeed in constantly changing and challenging business world.</TypographyLead>
          </article>

          <Form {...form}>
            <form className="">
              <TypographyLead>Subscribe to our newsletter</TypographyLead>
              <div className="flex items-end space-x-1">
                <Input name="email" placeholder="Email address" className="h-auto p-4 border-none bg-slate-800" />
                <Button variant="default" className="bg-slate-700 text-default h-auto p-4">Subscribe</Button>
              </div>
            </form>
          </Form>
        </div>
      </Container>
    </div>
  )
}
