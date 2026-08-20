import { ChevronDown } from "lucide-react";
import { Text } from "@/common/text/components/Text";
import type { FaqCardProps } from "@/shared-sections/faq/types";

/* one FAQ entry as a native details accordion */
export const FaqCard = ({ question, answer }: FaqCardProps) => (
  <details className="faq-accordion group rounded-2xl border border-line bg-surface-panel p-6">
    <summary className="grid cursor-pointer list-none grid-cols-[1fr_auto] items-center gap-4">
      <Text as="span" size="body" weight="bold" text={question} />
      <ChevronDown className="size-5 text-primary transition-transform duration-300 group-open:rotate-180" />
    </summary>
    <div className="mt-4">
      <Text size="body" tone="muted" text={answer} />
    </div>
  </details>
);
