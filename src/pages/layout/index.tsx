import { Outlet } from "react-router-dom";
import Nav from "./nav";
import Footer from "./footer";
import { Drawer } from "@/components/custom/misc";


export default function AppLayout() {
  return (
    <div className="flex flex-col h-full">
      <Nav />

      <main className="flex-grow">
        <Outlet />
        <Drawer />
      </main>

      <Footer />
    </div>
  )
}
