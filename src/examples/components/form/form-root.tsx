import { HTMLAttributes } from "react";

type FormRootProps = HTMLAttributes<HTMLFormElement>;

export const FormRoot = ({ children, ...props }: FormRootProps) => {
  return (
    <form className="flex flex-col gap-2" {...props}>
      {children}
    </form>
  );
};
