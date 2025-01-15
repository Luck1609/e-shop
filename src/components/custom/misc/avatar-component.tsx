import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function AvatarComponent({ img, alt }: { img: string; alt: string }) {
  return (
    <Avatar>
      <AvatarImage src={img} alt={alt} />
      <AvatarFallback>{alt}</AvatarFallback>
    </Avatar>
  )
}
