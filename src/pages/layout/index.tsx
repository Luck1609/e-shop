import { Outlet } from "react-router-dom";
import Nav from "./nav";
import Footer from "./footer";


export default function AppLayout() {
  return (
    <>
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
