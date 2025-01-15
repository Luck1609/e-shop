import { useEffect } from "react";
import {
  Dialog,
  DialogDescription,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
} from "@/components/ui/dialog";
import { DialogContent } from "@radix-ui/react-dialog";
import { FormProvider, useForm } from "react-hook-form";
import { FormButton } from "@/components/custom/form";
import { useDispatch, useSelector } from "@/shared/feature/hooks";
import { useFormRequest } from "@/hooks/use-router";
import { ScrollArea } from "@/components/ui/scroll-area";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import modalFields from "@/shared/feature/form-fields";
import { cn } from "@/shared/lib/utils";
import { toggleModal } from "@/shared/feature/reducers/misc";
import { Button } from "@/components/ui/button";
import { IconX } from "@tabler/icons-react";

const Component = () => <></>

export function Modal() {
  const { modal } = useSelector(state => state.misc)
  const dispatch = useDispatch()

  const { form: FormComponent = Component, validation = z.object({}) } = modal?.form ? modalFields[modal.form as keyof typeof modalFields] : {}

  const method = useForm({
    mode: 'all',
    defaultValues: modal.defaultValues,
    resolver: zodResolver(validation)
  })

  useEffect(() => {
    method.reset(modal.defaultValues)
  }, [modal.defaultValues])

  const { submit } = useFormRequest()

  const onSubmit = (data: z.infer<typeof validation>) => submit({
    url: modal.url,
    method: modal.method,
    data
  })

  const closeModal = () => dispatch(toggleModal())

  return (
    <Dialog open={modal.title !== ""} onOpenChange={closeModal}>
      <DialogPortal>
        <DialogOverlay className="flex items-center justify-center">
          <DialogContent className={cn("max-w-5xl bg-theme p-5 rounded-lg", modal?.className)}>
            <DialogHeader className="relative">
              <DialogTitle className="text-xl font-bold text-center pb-3 border-b dark:border-dark-border mb-3">
                {modal.title}
              </DialogTitle>

              <Button variant="ghost" className="absolute -top-3 right-0" onClick={closeModal}>
                <IconX className="h-4 w-4" />
              </Button>
            </DialogHeader>

            <DialogDescription>
            </DialogDescription>

            <FormProvider {...method}>
              <form className="w-full" onSubmit={method.handleSubmit(onSubmit)}>
                <ScrollArea className="h-[65dvh] py-5">
                  <FormComponent />
                </ScrollArea>

                <div className="flex flex-col mt-4">
                  <FormButton className="w-3/5 btn-black p-3 mx-auto" id="modal-btn">
                    Submit
                  </FormButton>
                </div>
              </form>
            </FormProvider>
          </DialogContent>
        </DialogOverlay>
      </DialogPortal>
    </Dialog>
  );
}
