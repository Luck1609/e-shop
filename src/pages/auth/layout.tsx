

export default function AuthLayout({ children, image }: Children<{ image: string }>) {
  return (
    <div className="flex">
      <section className="w-full"></section>
      <section className="w-full">
        { children }
      </section>
    </div>
  )
}
