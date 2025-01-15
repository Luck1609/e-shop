import { ReactNode } from "react"
import { TypographyH6 } from "./typography"
import { FormButton } from "../form"
import { extractFormFields } from "@/shared/lib/utils"
import { FormProvider, useForm } from "react-hook-form"
import { usePage } from "@inertiajs/react"
import { PageProps } from "@/types"
import { useFormRequest } from "@/hooks/use-router"
import { zodResolver } from "@hookform/resolvers/zod"

export type BaseFormProps = {
  initialData: Record<string, any>
  form: {
    component: ReactNode,
    submitHandler?: <T>(data: unknown) => FormData | T,
    validation: any
  }
}

export function BaseForm(props: BaseFormProps) {
  const { url, method } = usePage<PageProps & {url: string, method: "post" | "patch" | "put"}>().props
  const form = useForm({
    mode: "all",
    defaultValues: props.initialData,
    resolver: zodResolver(props.form.validation)
  })
  const { handleSubmit } = form
  const { title } = usePage<PageProps & { title: string }>().props
  const {submit} = useFormRequest()

  const formHandler = (payload: any) => {
    const data = props.form.submitHandler ? props.form.submitHandler(payload) : payload

    for (let pair of data.entries()) {
      // console.log('Key =>', pair[0], 'Value =>', pair[1] );
      console.log("Type of data upload =>", pair)
    }

    submit({ url, method, data })
  }


  return (
    <div className="w-full rounded-md bg-theme">
      <div className="p-4 border-b dark:border-dark-border">
        <TypographyH6>{title}</TypographyH6>
      </div>


      <FormProvider {...form}>
        <form className="space-y-5 p-8" onSubmit={handleSubmit(formHandler)}>
          {props?.form?.component}

          <div className="flex justify-end px-3.5 lg:px-7 pb-5">
            <FormButton
              className="w-56"
              loadingText="Submitting..."
              id="base-form"
            >
              Submit
            </FormButton>
          </div>
        </form>
      </FormProvider>
    </div>
  )
}
