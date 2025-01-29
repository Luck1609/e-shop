import { Checkbox, Input, Select } from "@/components/custom/form"
import { Typography } from "@/components/custom/misc"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { useForm } from "react-hook-form"



export const AddressForm = () => {
  const form = useForm()

  return (
    <Form {...form}>
      <form className="w-4/5 p-3 space-y-4">
        <div className="grid lg:grid-cols-2 gap-3">
          <Input
            name="firstname"
            label="Firstname"
            placeholder="Enter your firstname"
          />
          
          <Input
            name="lastname"
            label="Lastname"
            placeholder="Enter your lastname"
          />
        </div>
        
        <Input
          name="email"
          label="Email address"
          placeholder="Enter your email address"
        />
      </form>
    </Form>
  )
}

export const DeliveryAddress = () => {
  const form = useForm()

  return (
    <Form {...form}>
      <form className="w-4/5 p-3 space-y-4">
        <Select
          name="country"
          label="Country"
          placeholder="Select your country"
          options={[
            {
              label: "Ghana",
              value: "gh"
            },
            {
              label: "Nigeria",
              value: "ng"
            },
            {
              label: "US",
              value: "us"
            }
          ]}
        />

        <Input
          name="apartment"
          label="Apartment address"
          placeholder="Apartment, suite, etc. (optional)"
        />

        <div className="grid lg:grid-cols-3 gap-3">
          <Select
            name="state"
            label="State"
            placeholder="Select your state"
            options={[
              {
                label: "Ghana",
                value: "gh"
              },
              {
                label: "Nigeria",
                value: "ng"
              },
              {
                label: "US",
                value: "us"
              }
            ]}
          />

          <Input
            name="city"
            label="City"
            placeholder="Enter your city"
          />

          <Input
            name="zip_code"
            label="Zip"
            placeholder="ZIP code"
          />
        </div>

        <Checkbox
          name="save"
          // label="Save this information for next time"
          options={[
            {
              label: "Save this information for next time",
              value: "save"
            }
          ]}
        />
      </form>
    </Form>
  )
}

export const DiscountForm = () => {
  const form = useForm()

  return (
    <article className="py-5">
      <Typography className="font-medium">Have a discount code? Apply here</Typography>
      <Form {...form}>
        <form className="w-full flex space-x-1">
          <Input
            name="dicsount_code"
            placeholder="Discount code"
          />

          <Button className="h-12">
            Apply
          </Button>
        </form>
      </Form>
    </article>
  )
}
