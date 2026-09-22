import { ChevronRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Text } from "@/common/text/components/Text";
import type { BreadcrumbProps } from "@/common/breadcrumb/types";

/* trail to the current page; the last crumb is the page itself and never links */
export const Breadcrumb = ({ items, label }: BreadcrumbProps) => (
  <nav aria-label={label}>
    {/* flex wraps on phones, where a long product name would overflow one row */}
    <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
      {items.map(({ key, label: crumb, href }, index) => (
        <li key={key} className="inline-grid grid-flow-col items-center gap-2">
          {href ? (
            <Link href={href}>
              <Text as="span" size="caption" tone="muted" text={crumb} />
            </Link>
          ) : (
            <Text
              as="span"
              size="caption"
              tone={index === items.length - 1 ? "default" : "muted"}
              text={crumb}
            />
          )}
          {index < items.length - 1 && (
            <ChevronRight aria-hidden className="size-3.5 text-foreground-muted" />
          )}
        </li>
      ))}
    </ol>
  </nav>
);
