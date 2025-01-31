import clsx from "clsx";
import { HTMLAttributes } from "react";

type FormRootProps = HTMLAttributes<HTMLFormElement>;

export const FormRoot = ({ className, children, ...props }: FormRootProps) => {
  return (
    <form className={clsx("gap-2", className)} {...props}>
      {children}
    </form>
  );
};
