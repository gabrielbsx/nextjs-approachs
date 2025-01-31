export type Variant =
  | "primary"
  | "secondary"
  | "outline"
  | "default"
  | "destructive"
  | "contained";

export type Variants = Record<Variant, string>;

export const VariantType: Record<Uppercase<Variant>, Variant> = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
  OUTLINE: "outline",
  DEFAULT: "default",
  DESTRUCTIVE: "destructive",
  CONTAINED: "contained",
};
