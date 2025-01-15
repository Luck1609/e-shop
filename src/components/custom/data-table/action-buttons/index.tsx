import { Fragment, ReactNode } from "react"
import DefaultActions, { CustomProps, DefaultProps, DeleteProps } from "./default-actions"


type Options = {
  options: {
    view: CustomProps | DefaultProps & {show?: true},
    edit: CustomProps | DefaultProps & {show?: true},
    publish: CustomProps | DeleteProps & {show?: true},
    delete: CustomProps | DeleteProps & {show?: true}
  }
}

export function DynamicActionButtons({
  options
}: Options) {

  return (
    <ul className="flex items-center justify-center">
      {
        Object.entries(options).map(([key, value], index: number) => {

          if (value?.show === false) return (
            <Fragment key={index.toString()}>
              { value?.component as ReactNode ?? <></> }
            </Fragment>
          )
          else {
            // console.log("Fragement data", value)
            return (
              <Fragment key={index.toString()}>
                <DefaultActions {...{[key]: value}} />
              </Fragment>
            )
          }
        })
      }
    </ul>
  )
}
