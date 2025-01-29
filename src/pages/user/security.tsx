import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { IconEdit, IconX } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import { FormButton, Password } from "@/components/custom/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";



const PasswordValidationSchema = z.object({
  old_password: z.string().nonempty(),
  password: z.string().nonempty(),
  password_confirmation: z.string().nonempty(),
});

export default function SecurityDetails() {
  const [toggleForm, setToggleForm] = useState(false)
  const form = useForm({
    mode: "onSubmit",
    defaultValues: {
      old_password: "",
      password: "",
      password_confirmation: "",
    },
    resolver: zodResolver(PasswordValidationSchema)
  })

  const toggler = () => {
    form.clearErrors()
    setToggleForm(!toggleForm)
  }


  const onSubmit = (data: z.infer<typeof PasswordValidationSchema>) => {
    console.log("Data to submit", data)
  }

  return (
    <FormProvider {...form}>
      <form className="" onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex justify-between items-end mt-5 mb-3">
          <div className="">
            <label className="font-bold text-md block">Password</label>
            <span className="text-default">
              This is used when logging in and securing your account Information
            </span>
          </div>

          <Button
            className={("flex items-center w-24 text-sm")}
            onClick={toggler}
            type="button"
            variant={toggleForm ? "destructive" : "default"}
          >
            {toggleForm ? (
              <>
                <IconX fontSize="small" className="mr-1" />
                Close
              </>
            ) : (
              <>
                <IconEdit size={18} className="mr-2" />
                Edit
              </>
            )}
          </Button>
        </div>

        <div className="w-full lg:w-2/4 space-y-5 relative">
          <Password
            className="w-full border-b border-black p-2 "
            name="old_password"
            label="Current password"
            placeholder="***************"
            disabled={!toggleForm}
          />

          <Password
            className="w-full border-b border-black p-2 "
            name="password"
            placeholder="***************"
            label="New password"
            disabled={!toggleForm}
          />

          <Password
            className="w-full border-b border-black p-2 "
            name="passwordConfirmation"
            placeholder="***************"
            label="New password confirmation"
            disabled={!toggleForm}
          />

          <div className="flex justify-end w-full">
            <FormButton
              className="btn-black p-2 w-44 hover:border"
              id="password_change"
            >
              Save
            </FormButton>
          </div>
        </div>
      </form>
    </FormProvider>
  );
}
