import { InputHTMLAttributes } from "react";
import { Variant, Variants, VariantType } from "../types/variants.type";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  variant?: Variant;
};

export const Input = ({
  variant = VariantType.DEFAULT,
  ...props
}: InputProps) => {
  const variants: Variants = {
    primary: "input-primary",
    secondary: "input-secondary",
    default: "input-default",
    outline: "",
    destructive: "",
    contained: "",
  };

  return <input className={variants[variant]} {...props} />;
};
