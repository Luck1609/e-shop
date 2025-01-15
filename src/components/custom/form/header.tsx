import { Button } from '@/components/ui/button'
import { IconArrowLeft } from '@tabler/icons-react'
import { TypographyH5, TypographySm } from '../misc'
import { cn } from '@/shared/lib/utils'

export default function FormHeader({ title, description, showBackButton = true, className }: { title: string, description?: string, showBackButton?: boolean, className?: string}) {

  const goBack = () => window.history.back()

  return (
    <div className={cn("flex items-start space-x-3 mb-8", className)}>
      {
        showBackButton && (
          <Button
            className="w-24 p-2 flex items-center space-x-1 text-sm "
            onClick={goBack}
          >
            <IconArrowLeft size={16} /> <span className="">Back</span>
          </Button>
        )
      }


      <div className="">
        <TypographyH5>{title}</TypographyH5>
        <TypographySm className="text-default">
          {description}
        </TypographySm>
      </div>
    </div>
  )
}
