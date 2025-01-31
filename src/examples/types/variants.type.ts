export type Variant =
  | "primary"
  | "secondary"
  | "outline"
  | "default"
  | "contained"
  | "danger"
  | "success";

export type Variants = Record<Variant, string>;

export const VariantType: Record<Uppercase<Variant>, Variant> = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
  OUTLINE: "outline",
  DEFAULT: "default",
  CONTAINED: "contained",
  DANGER: "danger",
  SUCCESS: "success",
};
