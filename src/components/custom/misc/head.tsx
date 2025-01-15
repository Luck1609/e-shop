import {Head as DocHead} from "@inertiajs/react"

export default function Head({ title, meta = [] }: { title: string, meta?: { name: string, content: string}[]}) {
  return (
    <DocHead>
      <title>{title}</title>
      {
        meta.length > 0 && (
          meta.map(({ name, content }) => <meta name={name} content={content} key={name} />)
        )
      }
    </DocHead>
  )
}
