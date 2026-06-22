import { Text } from "@/common/text/components/Text";
import type { EyebrowProps } from "@/common/eyebrow/types";

/* Section eyebrow: a primary dash followed by an uppercase tracked label. */
export const Eyebrow = ({ text }: EyebrowProps) => (
  <span className="inline-flex items-center gap-2">
    <span className="h-0.5 w-6 bg-primary" />
    <Text as="span" size="label" tone="primary" weight="bold" tracking="wide" text={text} />
  </span>
);
