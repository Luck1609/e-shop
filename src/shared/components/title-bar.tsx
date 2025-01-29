import { TypographyH6, TypographySm } from '@/components/custom/misc'

export default function TitleBar({ title, description }: {title: string, description: string}) {
  return (
    <div>
      <TypographyH6 className="mb-2">{title}</TypographyH6>
      <TypographySm className="text-default">
        {description}
      </TypographySm>
    </div>
  )
}
