import { ChevronDown } from "lucide-react";
import { Text } from "@/common/text/components/Text";
import type { FaqListProps } from "@/shared-sections/faq/types";

/* accordion of native details items */
export const FaqList = ({ items }: FaqListProps) => (
  <div className="grid gap-4">
    {items.map(({ key, question, answer }) => (
      <details
        key={key}
        className="group rounded-card border border-line bg-surface-panel p-6 transition-colors open:border-primary/40"
      >
        <summary className="grid cursor-pointer list-none grid-cols-[1fr_auto] items-center gap-4">
          <Text as="span" size="body" weight="bold" text={question} />
          <ChevronDown className="size-5 shrink-0 text-primary transition-transform duration-300 group-open:rotate-180" />
        </summary>
        <div className="mt-4">
          <Text size="body" tone="muted" text={answer} />
        </div>
      </details>
    ))}
  </div>
);
