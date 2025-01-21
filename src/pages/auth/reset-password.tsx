import { Input, Password } from "@/components/custom/form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import image from "@/assets/svg/my-password.svg"
import { TypographyH5 } from "@/components/custom/misc";

const LoginValidationSchema = z.object({
  email: z.string().email().nonempty(),
  password: z.string().min(3).nonempty()
})

export default function ResetPassword() {
  const form = useForm({
    mode: "all",
    defaultValues: {
      email: "",
      password: ""
    },
    resolver: zodResolver(LoginValidationSchema)
  })

  return (
    <Form {...form}>
      <form action="" className="w-[350px] p-5 space-y-3.5 bg-white rounded shadow">
        <div className="bg-background py-3">
          <img src={image} alt="" className="w-44 mx-auto" />
        </div>

        <TypographyH5 className="text-center">Password Reset</TypographyH5>
        
        <Password name="password" label="Password" placeholder="Type in your password" />
        <Password name="password_confirmation" label="Password" placeholder="Type in your password" />
        <Button className="w-full h-12" type="submit">
          Reset password
        </Button>
      </form>
    </Form>
  )
}
