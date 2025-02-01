import clsx from "clsx";
import { HTMLAttributes } from "react";

type FormRootProps = HTMLAttributes<HTMLFormElement>;

export const FormRoot = ({ className, children, ...props }: FormRootProps) => {
  return (
    <form className={clsx("flex flex-col gap-4", className)} {...props}>
      {children}
    </form>
  );
};
