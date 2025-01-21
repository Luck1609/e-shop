import { Input } from "@/components/custom/form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import image from "@/assets/svg/forgot-password.svg"
import { TypographyH5, TypographySm } from "@/components/custom/misc";
import { Link } from "react-router-dom";

const LoginValidationSchema = z.object({
  email: z.string().email().nonempty(),
})

export default function ForgotPassword() {
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

        <TypographyH5 className="text-center">Forgot Password</TypographyH5>
        <Input name="email" label="Email address" placeholder="Type your email address" />


        <div className="mt-1 space-x-2">
          <TypographySm>Remember your password?</TypographySm>
          <Link to="/login" className="font-medium text-secondary">
            <TypographySm>login</TypographySm>
          </Link>
        </div>

        <Button className="w-full h-12" type="submit">
          Request link
        </Button>
      </form>
    </Form>
  )
}
