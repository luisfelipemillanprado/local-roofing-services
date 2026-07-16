export type TextSize = "lead" | "body" | "caption" | "note" | "label";
export type TextTone = "default" | "muted" | "white" | "primary";
export type TextWeight = "medium" | "semibold" | "bold";
export type TextTracking = "wide" | "subtle";

export interface TextProps {
  as?: "p" | "span";
  size?: TextSize;
  tone?: TextTone;
  weight?: TextWeight;
  tracking?: TextTracking;
  truncate?: boolean;
  text: string;
}

export type TextNumberSize = "base" | "price" | "stat" | "headline" | "display";
export type TextNumberTone = "default" | "primary";

export interface TextNumberProps {
  as?: "p" | "span";
  size?: TextNumberSize;
  tone?: TextNumberTone;
  text: string;
}
