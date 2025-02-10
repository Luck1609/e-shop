import { FC } from 'react'
import { useFieldArray, useFormContext } from 'react-hook-form'
import { TypographySm } from '../../misc'
import { useRef } from "react"
import { ReactNode } from "react"
import Renderer from './renderer'
import { cn } from '@/shared/lib/utils'
import { Image } from '@/vite-env'

export type UploaderProps = {
  name: string
  label: ReactNode
  className?: string
  addButton: ({trigger}: {trigger: () => void} ) => ReactNode
  max?: number
  type?: "single" | "multiple"
}





export const FileUploader: FC<UploaderProps> = ({ name, label, type = "single", addButton, max = 1, className }) => {
  const { insert } = useFieldArray({
    name
  })
  const { watch, formState: { errors } } = useFormContext()

  const ref = useRef<HTMLInputElement | null>(null)
  const value = watch(name)

  const triggerInput = () => {
    if (ref.current) {
      ref.current.click()
    }
  }

  const AddImageButton = addButton

  const handleChange = () => {
    // current index
    const index = value?.length

    const file = ref.current?.files as FileList

    insert(index, file[0])
  }

  return (
    <div className="w-full">
      <label className="mb-2 block text-sm font-semibold">
        {label}
        {type === "multiple" && (
          <span className="text-danger"> (Maximum {max})</span>
        )}
      </label>


      <div className={cn("grid mb-5", type === "multiple" ? "lg:grid-cols-3 gap-5" : "")}>
        {
          value?.map((field: File, index: number) => {
            return (
              <Renderer
                file={field as Image | File}
                name={name}
                index={index}
                className={className}
                key={index.toString()}
              />
            )
          })
        }

        {
          value?.length < max && <AddImageButton trigger={triggerInput} />
        }
      </div>

      <input
        ref={ref}
        type="file"
        className="hidden"
        onChange={handleChange}
      />

      {
        errors[name] && <TypographySm className="text-red-500 mt-1">
          {errors[name]?.message as string}
        </TypographySm>
      }
    </div>
  )
}
