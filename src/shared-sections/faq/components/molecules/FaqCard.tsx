import { ChevronDown } from "lucide-react";
import { Text } from "@/common/text/components/Text";
import type { FaqCardProps } from "@/shared-sections/faq/types";

/* one FAQ entry as a native details accordion */
export const FaqCard = ({ question, answer }: FaqCardProps) => (
  <details className="faq-accordion group rounded-card border border-line bg-surface-panel">
    <summary className="grid cursor-pointer list-none grid-cols-[1fr_auto] items-center gap-4 p-6">
      <Text as="span" size="subhead" weight="bold" text={question} />
      <ChevronDown className="size-5 text-primary transition-transform duration-300 group-open:rotate-180" />
    </summary>
    <div className="px-6 pb-6">
      <Text size="body" tone="muted" text={answer} />
    </div>
  </details>
);
