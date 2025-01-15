import _ from "lodash"

export type SearchComponentProps = {
  show?: boolean
  updateQuery?: ({ name, value }: { name: string; value: string }) => void
}

export default function SearchComponent(props: SearchComponentProps) {
  // const { setValue } = usePagination()
  const handleChange = _.debounce((value: string) => {
    if (props.updateQuery) props.updateQuery({ name: "search", value }), 300
  })

  return props?.show ? (
    <form
      action=""
      className="form-field"
      onSubmit={(event) => event.preventDefault()}
    >
      <input
        type="text"
        className="w-full p-2  border dark:bg-transparent dark:border-dark-border rounded-lg"
        placeholder="Search..."
        onChange={(event) => handleChange(event.target.value)}
      />
    </form>
  ) : (
    <></>
  )
}
