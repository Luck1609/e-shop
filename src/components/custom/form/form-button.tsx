import { ReactNode, useRef } from "react";
import { useFormContext } from "react-hook-form";
import { useSelector } from "@/shared/feature/hooks";
import { cn } from "@/shared/lib/utils";
import { Button } from "@/components/ui/button";

export function FormButton({
  children,
  loadingText = "Submitting...",
  className = "",
  id,
}: {
  children: ReactNode;
  loadingText?: string;
  className?: string;
  id: string;
}) {
  const { formState: { isValid, isDirty }, getValues, trigger } = useFormContext();
  const { isSubmitting } = useSelector(state => state.misc)
  const ref = useRef<HTMLButtonElement>(null)
  const handleTrigger = () => {
    // console.log("Trigger fired", e)
    const values = getValues()
    trigger(Object.keys(values))
  }

  return (
    <Button
      className={cn("flex h-12 items-center justify-center space-x-2 bg-black dark:bg-dark-border rounded-md text-center text-white", className, (!isValid || !isDirty) ? "opacity-50 cursor-default" : "")}
      aria-disabled={!isValid || !isDirty}
      type={(!isValid || !isDirty) ? "button" : "submit"}
      onClick={handleTrigger}
      id={id}
      ref={ref}
    >
      {
        isSubmitting && (ref.current?.id === id)
          ? <Loading text={loadingText} />
          : children
      }

      <span aria-live="assertive" className="js-loadingMsg sr-only">
        {/* <!-- Use JavaScript to inject the the loading message --> */}
        <span>Form is submitting</span>
      </span>
    </Button>
  );
}

export const Loading = ({ text = "" }) => {
  return (
    <div className="flex items-center justify-center text-light-color dark:text-dark-default">
      <div className={text ? "mr-2" : ""}>
        <svg
          className="animate-spin h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx={12}
            cy={12}
            r={10}
            stroke="currentColor"
            strokeWidth={4}
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      </div>

      <span className="">{text}</span>
    </div>
  );
};
