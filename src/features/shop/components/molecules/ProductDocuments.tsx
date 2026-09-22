import { ArrowUpRight, FileText } from "lucide-react";
import { Text } from "@/common/text/components/Text";
import type { ProductDocumentsProps } from "@/features/shop/types";

/* manufacturer PDFs, ruled like the spec sheet rows */
export const ProductDocuments = ({ items, newTabLabel }: ProductDocumentsProps) => (
  <ul className="grid">
    {items.map(({ key, label, href }) => (
      <li key={key} className="border-b border-line">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="group grid grid-cols-[auto_1fr_auto] items-center gap-3 py-3"
        >
          <FileText aria-hidden className="size-4.5 text-primary" />
          <Text as="span" size="caption" weight="semibold" text={label} />
          <ArrowUpRight
            aria-hidden
            className="size-4 text-foreground-muted transition-colors group-hover:text-primary"
          />
          <span className="sr-only">{`(${newTabLabel})`}</span>
        </a>
      </li>
    ))}
  </ul>
);
