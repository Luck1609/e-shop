import { statusColors } from "@/components/ui/toaster";
import { toast } from "@/hooks/use-toast";
import { PageProps } from "@/types";
import { usePage } from "@inertiajs/react";
import { useEffect } from "react";


export default function SessionMessage() {
  const { flash } = usePage<PageProps & { flash: { message: string, status: keyof typeof statusColors } }>().props;

  useEffect(() => {
    if (flash) {
      toast(flash)
    }
  }, [flash]);

  return <></>
}
