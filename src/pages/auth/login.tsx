import { Input, Password } from "@/components/custom/form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import image from "@/assets/svg/login.svg"
import { TooltipButton, Typography, TypographyH5, TypographySm } from "@/components/custom/misc";
import { Link } from "react-router-dom";
import { IconBrandFacebook, IconBrandGoogle, IconBrandX } from "@tabler/icons-react";

const LoginValidationSchema = z.object({
  email: z.string().email().nonempty(),
  password: z.string().min(3).nonempty()
})

export default function Login() {
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
      <form action="" className="w-[350px] p-5 space-y-3.5 bg-white rounded shadow relative z-[1]">
        <div className="bg-background py-3">
          <img src={image} alt="" className="w-44 mx-auto" />
        </div>

        <TypographyH5 className="text-center">Login</TypographyH5>
        <Input name="email" label="Email address" placeholder="Type your email address" />
        <Password name="password" label="Password" placeholder="Type in your password" />

        <div className="space-x-2">
          <TypographySm>Forgot your password?</TypographySm>
          <Link to="/forgot-password" className="font-medium text-secondary">
            <TypographySm>reset here</TypographySm>
          </Link>
        </div>

        <div className="">
          <Button className="w-full h-12" type="submit">
            Login
          </Button>

          <div className="mt-1 space-x-2">
            <TypographySm>Don't you have an account?</TypographySm>
            <Link to="/register" className="font-medium text-secondary">
              <TypographySm>create one</TypographySm>
            </Link>
          </div>
        </div>

        <div className="flex space-x-3 justify-center">
          <TooltipButton label="Login with Facebook">
            <Button size="icon">
              <IconBrandFacebook className="h-5 w-5" />
            </Button>
          </TooltipButton>

          <TooltipButton label="Login with Google">
            <Button size="icon">
              <IconBrandGoogle className="h-5 w-5" />
            </Button>
          </TooltipButton>

          <TooltipButton label="Login with X">
            <Button size="icon">
              <IconBrandX className="h-5 w-5" />
            </Button>
          </TooltipButton>
        </div>
      </form>
    </Form>
  )
}
