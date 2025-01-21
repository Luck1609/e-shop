import { Input, Password } from "@/components/custom/form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import image from "@/assets/svg/login.svg"
import { TypographyH5 } from "@/components/custom/misc";

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
    // <Container className="grid lg:grid-cols-3 h-[70dvh] rounded-x shadow-md">
    //   <article className="lg:col-span-2"></article>
      <Form {...form}>
      <form action="" className="w-[350px] p-5 space-y-5 bg-white rounded shadow">
        <div className="bg-background py-3">
          <img src={image} alt="" className="w-44 mx-auto" />
        </div>
        
        <TypographyH5 className="text-center">Login</TypographyH5>
          <Input name="email" label="Email address" placeholder="Type your email address" />
          <Password name="password" label="Password" placeholder="Type in your password" />
          <Button className="w-full h-12" type="submit">
            Login
          </Button>
        </form>
      </Form>
    // </Container>
  )
}
