import { Container, NavLink, Typography } from "@/components/custom/misc";
import { TableIcon } from "@/vite-env";
import { Outlet } from "react-router-dom";


type LinkProp = {
  label: string
  icon?: TableIcon
  url: string
}

export default function UserLayout({ links }: {links: LinkProp[]}) {
  return (
    <Container className="grid lg:grid-cols-5 gap-5 py-5 lg:py-10">
      <div className="p-5 rounded-lg bg-slate-50">
        {
          links.map(({ label, icon: Icon, url }) => (
            <NavLink to={url} className="w-full space-x-2">
              {
                Icon && <Icon />
              }
              
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

