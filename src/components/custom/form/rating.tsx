import { ReactNode, useState } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { cn } from '@/shared/lib/utils'
import { FormLabel, FormMessage } from '@/components/ui/form'
import { TypographySm } from '../misc'
import { IconStar } from '@tabler/icons-react'


type Props = { name: string, label: ReactNode, className?: string }

export default function Rating({ name, label, className }: Props) {
  const [hover, setHover] = useState(0)
  const { control, setValue } = useFormContext()

  const handleRating = (value: number) => () => setValue(name, value)
  const handleMouseEnter = (value: number) => setHover(value)
  const handleMouseLeave = () => setHover(0)

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value } }) => (
        <div className="">
          <FormLabel>
            <TypographySm>{label}</TypographySm>
            <div className="flex space-x-0.5">
              {
                Array.from(Array(5).keys()).map((id) => {
                  const starValue = id + 1
                  return (
                    // <span
                    //   key={id.toString()}
                    //   className={cn("hover:text-amber-500 text-4xl cursor-pointer", starValue <= (hover || value) ? "text-amber-500" : "", className)}
                    //   onMouseEnter={() => handleMouseEnter(starValue)}
                    //   onMouseLeave={handleMouseLeave}
                    //   onClick={handleRating(starValue)}
                    // >&#9733;</span>


                  <IconStar
                    key={id.toString()}
                    className={cn("h-5 w-5 cursor-pointer", starValue <= (hover || value) ? "fill-amber-500 stroke-amber-500" : "", className)}
                    onMouseEnter={() => handleMouseEnter(starValue)}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleRating(starValue)}
                  />
                  )
                }
                )
              }
            </div>
          </FormLabel>

          <FormMessage />
        </div>
      )}
    />
  )
}



export function Rate({ rate = 0, className }: {rate: number, className?: string}) {
  const [rating, setRating] = useState(rate)
  const [hover, setHover] = useState(0)

  const handleRating = (value: number) => setRating(value)
  const handleMouseEnter = (value: number) => setHover(value)
  const handleMouseLeave = () => setHover(0)

  return (
    <div className="flex space-x-0.5">
      {
        Array.from(Array(5).keys()).map((id) => {
          const value = id + 1
          return (
            <IconStar
              key={id.toString()}
              className={cn("h-5 w-5 cursor-pointer fill-slate-300 stroke-slate-300", value <= (hover || rating) ? "fill-amber-500 stroke-amber-500" : "", className)}
              onMouseEnter={() => handleMouseEnter(value)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleRating(value)}
            />
          )
        }
        )
      }
    </div>
  )
}
