export type TextSize = "lead" | "body" | "caption" | "note" | "label";
export type TextTone = "default" | "muted" | "white" | "primary";
export type TextWeight = "medium" | "semibold";

export interface TextProps {
  as?: "p" | "span";
  size?: TextSize;
  tone?: TextTone;
  weight?: TextWeight;
  text: string;
}

export type TextNumberSize = "base" | "stat" | "headline" | "display";
export type TextNumberTone = "default" | "primary";

export interface TextNumberProps {
  as?: "p" | "span";
  size?: TextNumberSize;
  tone?: TextNumberTone;
  text: string;
}
