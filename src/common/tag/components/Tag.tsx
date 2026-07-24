import { Text } from "@/common/text/components/Text";
import type { TagProps, TagTone } from "@/common/tag/types";

/* pill label: rounded fill + tracked white text */
const tones: Record<TagTone, string> = {
  primary: "bg-primary",
  contrast: "bg-contrast",
};

export const Tag = ({ text, tone = "primary" }: TagProps) => (
  <span
    className={`inline-flex items-center justify-center rounded-xl py-1 ps-[0.876rem] pe-3 ${tones[tone]}`}
  >
    <Text as="span" size="label" tone="white" weight="semibold" tracking="wide" text={text} />
  </span>
);
