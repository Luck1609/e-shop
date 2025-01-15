import { ChangeEvent, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/shared/lib/utils"
import { TooltipButton } from "../../misc/tooltip-button"
import { Image } from "@/types"
import { FieldErrors, useFieldArray, useFormContext } from "react-hook-form"
import { IconFileTypeDoc, IconPhotoCheck, IconPhotoPlus, IconUpload, IconX } from "@tabler/icons-react"
import { TypographySm } from "../../misc"



const setThumbnail = (thumbnailIndex: number, images: File[]) => {
  const thumbnail = images[thumbnailIndex]
  const firstImage = images[0]


  // images.flatMap((image, index) => {
  //   if (index === 0) return thumbnail
  //   else if (index === thumbnailIndex)
  // })
  // images.splice()
}

type sds = {
  message: string
}

export default function Renderer({
  file,
  name,
  index,
  className,
}: {
  file: File | Image
  index: number
  name: string
  className?: string
}) {
  const { setValue, watch, clearErrors, trigger, formState: { errors },  } = useFormContext(),
    ref = useRef<HTMLInputElement | null>(null)

  const thumbnailId = watch("thumbnail_index")
  const { remove, update, } = useFieldArray({ name })

  // Replace image
  const handleChange = () => ref.current?.click()

  const removeImg = () => remove(index)

  const replaceImage = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const file = target.files as FileList

    update(index, file[0])
  }

  return (
    <div className="w-full">
      <div
        className={cn(
          "w-full relative theme-border rounded-lg group flex items-center"
        )}
      >
        <div className="absolute right-1 top-1 flex items-center space-x-2">
          <TooltipButton label="Replace image">
            <Button
              className="h-auto rounded-full !bg-green-500 p-1 !hover:bg-green-400"
              type="button"
              onClick={handleChange}
            >
              <IconUpload size={16} />
            </Button>
          </TooltipButton>

          <TooltipButton label="Remove image">
            <Button
              className="h-auto rounded-full !bg-danger p-1 !hover:bg-danger hover:bg-opacity-90"
              type="button"
              onClick={removeImg}
            >
              <IconX size={16} />
            </Button>
          </TooltipButton>

          <input
            type="file"
            ref={ref}
            id=""
            className="hidden"
            onChange={replaceImage}
          />
        </div>

        <div
          className={cn("relative rounded-l-md overflow-hidden mr-4", className)}
        >
          {file && (
            file?.type?.startsWith("image")
              ? (
                <img
                  src={
                    !(file instanceof File)
                      ? `${file.url}`
                      : URL.createObjectURL(file)
                  }
                  alt=""
                />
              ) : (
                <IconFileTypeDoc className={className} />
              )
          )}
        </div>

        {file && (
          <div className="text-sm">
            <div className="flex space-x-2">
              <label className="">Name:</label>
              <span className="inline-block text-ellipsis">{file?.name}</span>
            </div>
            <div className="flex space-x-2">
              <label className="">Size:</label>
              <span>
                {typeof file?.size === "string"
                  ? file.size
                  : `${(file.size / 1024).toFixed(1)}KB`}
              </span>
            </div>
            <div className="flex space-x-2">
              <label className="">Type:</label>
              <span>{file?.type}</span>
            </div>
          </div>
        )}


        {thumbnailId - 1 === index ? (
          <TooltipButton label="Default thumbnail">
            <Button
              variant="outline-secondary"
              className="inline-flex !py-0.5 px-2 text-xs absolute bottom-1 right-1 space-x-1"
              type="button"
            >
              <IconPhotoCheck className="w-5 h-5" />
            </Button>
          </TooltipButton>
        ) : (
          <TooltipButton label="Set as thumbnail">
            <Button
              className="hidden group-hover:inline-flex py-1 px-2.5 text-xs absolute bottom-1 right-1 space-x-1"
              onClick={() => setValue("thumbnail_index", index + 1)}
              type="button"
            >
              <IconPhotoPlus size={18} />
            </Button>
          </TooltipButton>
        )}
      </div>

      {
        errors[name] && (
          <TypographySm className={cn("text-danger")}>
            <>
              {
                (errors[name] as FieldErrors)[index]?.message
              }
            </>
          </TypographySm>
        )
      }
    </div>
  )
}
