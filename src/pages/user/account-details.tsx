import { Container, Typography, TypographyH6 } from "@/components/custom/misc";

const user = {
  firstname: "Nathan",
  lastname: "Luck",
  email: "lucknathan5@gmail.com",
  phone: "+233503894555",
}

export default function AccountDetails() {


  return (
    <Container>
      <TypographyH6 className="mb-2">Account details</TypographyH6>
      <Typography className="text-default">
        Manage your profile and account details, this helps us to know you and
        protect your identity.
      </Typography>

      <div className="lg:w-3/5 mt-10 space-y-5 relative">
        <div className="grid lg:grid-cols-2 lg:gap-5">
          <div className="w-full">
            <label className="text-sm text-color">Firstname</label>
            <span className="block p-2 border-b border-default text-default">
              {user?.firstname}
            </span>
          </div>

          <div className="w-full">
            <label className="text-sm text-color">Lastname</label>
            <span className="block p-2 border-b border-default text-default">
              {user?.lastname}
            </span>
          </div>
        </div>
        <div className="w-full">
          <label className="text-sm text-color">Lastname</label>
          <span className="block p-2 border-b border-default text-default">
            {user?.email}
          </span>
        </div>

        {/* <Input
            name="email"
            className="border-b border-black p-2"
            label="Email"
            placeholder="Type in your email address"
          />

          <div className="flex justify-end">
            <Btn className="btn-black p-2 w-24" type="submit">
              Save
            </Btn>
          </div> */}
      </div>
    </Container>
  );
}
