import { ReactNode } from 'react'
import { TypographyH5 } from '@/components/custom/misc/typography';
import { FormProvider, useForm } from 'react-hook-form';
import { cn } from '@/shared/lib/utils';
import { FormButton, Input, Textarea } from '@/components/custom/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';


type ContactFormProps = {
  title?: string
  btnText?: string
  className?: string
  component?: ReactNode
}

const defaultValues = { name: "", email: "", subject: "", message: "", token: "", type: "contact" }

const ContactFormSchema = z.object({
  name: z.string().nonempty(),
  email: z.string().email().nonempty(),
  subject: z.string().nonempty(),
  message: z.string().nonempty(),
  token: z.string().optional(),
  type: z.string().nonempty()
})

export const ContactForm = ({ title, btnText, className, component }: ContactFormProps) => {
  const form = useForm({
    defaultValues,
    resolver: zodResolver(ContactFormSchema)
  })


  const formhandler = (data: z.infer<typeof ContactFormSchema>) => {
    console.log("data to submit", data)
  }

  return (
    <FormProvider {...form}>
      <form
        className={cn("w-full lg:w-4/5 m-auto space-y-6 px-5 md:pt-0 lg:pt-44", className)}
        onSubmit={form.handleSubmit(formhandler)}
      >
        <div className="">
          <TypographyH5>{title ?? "What is your question ?"}</TypographyH5>
          {component ?? null}
        </div>
        <Input
          name="name"
          className="border p-3 rounded border-default"
          placeholder="Type in your name (optional)"
          label="Name"
        />

        <div className="grid lg:grid-cols-2 gap-3">
          <Input
            name="subject"
            className="border p-3 rounded border-default"
            placeholder="Type in subject"
            label="Subject"
          />

          <Input
            name="email"
            className="border p-3 rounded border-default"
            placeholder="Type in your email address"
            label="Email"
          />
        </div>
        <Textarea
          name="message"
          className="border p-3 rounded border-default"
          rows={7}
          label="Message"
          placeholder="Type in your message"
        />

        <input type="hidden" name="token" />
        <FormButton
          className="w-3/5 mx-auto p-3 btn-black h-14"
          id="contact-form"
        >
          {btnText ?? "Ask Question"}
        </FormButton>
      </form>
    </FormProvider>
  )
}