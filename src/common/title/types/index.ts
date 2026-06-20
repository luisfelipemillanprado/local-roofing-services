export type TitleSize = "display" | "page" | "banner" | "section" | "feature" | "card" | "subtitle" | "micro";
export type TitleTone = "default" | "white";
export type TitleWeight = "bold" | "extrabold";
export type TitleAccentTone = "primary" | "faint";

export interface TitleProps {
  as?: "h1" | "h2" | "h3" | "h4";
  size?: TitleSize;
  tone?: TitleTone;
  weight?: TitleWeight;
  tracking?: boolean;
  text: string;
  accent?: string;
  accentTone?: TitleAccentTone;
}
