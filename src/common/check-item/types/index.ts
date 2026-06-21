import type { TextTone } from "@/common/text/types";

export interface CheckItemProps {
  text: string;
  tone: TextTone;
  as?: "li" | "div";
}
