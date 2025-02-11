import { NavLink } from "@/components/custom/misc";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { SheetClose, SheetFooter } from "@/components/ui/sheet";
import { useNavigate } from "react-router-dom";
import { links } from "./data";



export default function Sidenav() {
  const navigate = useNavigate()

  const goto = (url: string) => () => navigate(url)

  return (
    <>
      <ScrollArea className="h-[calc(100dvh-105px)] pt-4">
        <div className="space-y-5">
          <ul className="flex flex-col items-center">
            {
              links.map(({ url, name }) => (
                <li className="w-full text-center" key={url}>
                  <NavLink to={url} className="w-4/5 inline-block text-center">{name}</NavLink>
                </li>
              ))
            }
          </ul>
        </div>
      </ScrollArea>

      <div className="py-2">
        <SheetFooter className="flex flex-row space-x-2 lg:space-x-2">
          <SheetClose className="w-2/4 lg:w-full">
            <Button onClick={goto("/login")} variant="ghost" className="w-full h-12 block p-3 border border-secondary text-secondary rounded-md hover:text-secondary">Login</Button>
          </SheetClose>

          <SheetClose className="w-2/4 lg:w-full">
            <Button onClick={goto("/register")} className="w-full h-12 block p-3 bg-secondary text-white rounded-md hover:bg-secondary hover:bg-opacity-85">Register</Button>
          </SheetClose>
        </SheetFooter>
      </div>
    </>
  )
}
