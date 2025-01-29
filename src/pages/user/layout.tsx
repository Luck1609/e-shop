import { Container, NavLink, Typography } from "@/components/custom/misc";
import { IconLocation, IconSettings, IconShieldCheck, IconShoppingBag, IconUser } from "@tabler/icons-react";
import { Outlet } from "react-router-dom";



export default function UserLayout() {
  return (
    <Container className="grid lg:grid-cols-5 gap-5 py-5 lg:py-10">
      <div className="p-5 rounded-lg bg-slate-50">
        {
          authLinks.map(({ label, icon, url }) => (
            <NavLink to={url} className="w-full space-x-2">
              { icon }
              <Typography>{label}</Typography>
            </NavLink>
          ))
        }
      </div>

      <div className="lg:col-span-4 p-5">
        <Outlet />
      </div>
    </Container>
  )
}


export const authLinks = [
  {
    label: "Account details",
    description: "Manage your profile and account details",
    icon: <IconUser />,
    url: "profile",
  },
  {
    label: "Purchase history",
    description: "Track all your product purchases",
    icon: <IconShoppingBag />,
    url: "purchase-history",
  },
  {
    label: "Contact details",
    description: "Add delivery address and contact details",
    icon: <IconLocation />,
    url: "contact-details",
  },
  {
    label: "Security",
    description: "Manage login and security details",
    icon: <IconShieldCheck />,
    url: "security",
  },
  {
    label: "Settings",
    description: "Modify your app useage preference",
    icon: <IconSettings />,
    url: "settings",
  },
];