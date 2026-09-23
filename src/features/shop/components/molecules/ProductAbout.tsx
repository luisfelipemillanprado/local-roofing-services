import { Text } from "@/common/text/components/Text";
import type { ProductAboutProps } from "@/features/shop/types";

/* long product write up, one block per paragraph */
export const ProductAbout = ({ paragraphs }: ProductAboutProps) => (
  <div className="grid gap-4">
    {paragraphs.map((paragraph) => (
      <Text key={paragraph} size="body" tone="muted" text={paragraph} />
    ))}
  </div>
);
