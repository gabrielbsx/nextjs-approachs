import { InputHTMLAttributes } from "react";
import { Variant, Variants, VariantType } from "@/examples/types/variants.type";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  variant?: Variant;
};

export const Input = ({
  variant = VariantType.DEFAULT,
  className,
  ...props
}: InputProps) => {
  const variants: Variants = {
    primary: "input input-primary",
    secondary: "input input-secondary",
    default: "input input-default",
    outline: "input input-outline",
    contained: "input input-contained",
    danger: "input input-danger",
    success: "input input-success",
  };

  return (
    <input className={twMerge(clsx(variants[variant], className))} {...props} />
  );
};
