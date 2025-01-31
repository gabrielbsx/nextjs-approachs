import { HTMLAttributes } from "react";

type FormGroupProps = HTMLAttributes<HTMLDivElement>;

export const FormGroup = ({ children, ...props }: FormGroupProps) => {
  return (
    <div className="flex flex-col gap-2" {...props}>
      {children}
    </div>
  );
};
