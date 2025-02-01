import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type FormGroupProps = HTMLAttributes<HTMLDivElement>;

export const FormGroup = ({
  className,
  children,
  ...props
}: FormGroupProps) => {
  return (
    <div
      className={twMerge("flex flex-col items-start gap-2", className)}
      {...props}
    >
      {children}
    </div>
  );
};
