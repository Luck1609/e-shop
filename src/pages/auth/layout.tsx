import { Outlet } from "react-router-dom";


export default function AuthLayout() {
  return (
    <div className="flex bg-slate-50">
      <section className="w-full h-[100dvh] flex items-center justify-center">
        <Outlet />
      </section>
    </div>
  )
}


