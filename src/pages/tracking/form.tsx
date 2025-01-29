import { TypographyH5 } from "@/components/custom/misc"
import { Input } from "@/components/ui/input"
import { cn } from "@/shared/lib/utils"
import { ChangeEvent, useState } from "react"
import { Link } from "react-router-dom"


export default function TrackingForm({ className }: { className?: string }) {
  const [token, setToken] = useState<string | null>(null)


  const handleSetId = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => setToken(value)

  return (
    <div className={cn("w-full lg:w-2/5 m-auto space-y-8", className)}>
      <div className="text-center">
        <TypographyH5 className="text-2xl font-bold pb-1">Tracking ID</TypographyH5>
        <p className="text-default">
          Enter tracking id to track your package.
        </p>
      </div>

      <Input
        className="w-full p-3 input rounded"
        name="trackingID"
        placeholder="Enter your tracking ID"
        onChange={handleSetId}
      />

      <Link to={`/track-package/${token}`} className="flex items-center justify-center w-4/5 mx-auto p-3 bg-black text-white h-14 rounded-lg" >
        Track package
      </Link>
    </div>
  )
}
