import { Variant, Variants, VariantType } from "@/examples/types/variants.type";
import { LabelHTMLAttributes } from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

type LabelProps = LabelHTMLAttributes<HTMLLabelElement> & {
  text: string;
  variant?: Variant;
};

export const Label = ({
  variant = VariantType.DEFAULT,
  className,
  text,
  ...props
}: LabelProps) => {
  const baseStyle = "text-sm font-semibold";
  
  const variantStyle: Variants = {
    primary: "text-blue-500",
    secondary: "text-gray-500",
    outline: "text-white",
    default: "text-black",
    contained: "text-white",
    danger: "text-red-500",
    success: "text-green-500",
  };

  return (
    <label
      className={clsx(twMerge(baseStyle, variantStyle[variant]), className)}
      {...props}
    >
      {text}
    </label>
  );
};
