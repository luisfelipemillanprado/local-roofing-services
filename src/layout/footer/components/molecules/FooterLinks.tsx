import { ArrowUpRight } from "lucide-react";
import { Text } from "@/common/text/components/Text";
import { Title } from "@/common/title/components/Title";
import { Link } from "@/i18n/navigation";
import type { FooterLinksProps } from "@/layout/footer/types";

/* one footer link column: micro title + hover-arrow links */
export const FooterLinks = ({ title, links }: FooterLinksProps) => (
  <div className="grid content-start justify-items-center gap-5 lg:justify-items-start">
    <Title as="h4" size="micro" weight="bold" tracking text={title} />
    <ul className="grid w-full gap-3">
      {links.map((link) => (
        <li key={link.key}>
          {/* minmax(0,auto) lets the label truncate on one line */}
          <Link
            href={link.href}
            className="group grid grid-cols-[minmax(0,auto)_auto] items-center justify-center gap-1.5 lg:justify-start"
          >
            <Text as="span" size="body" tone="muted" truncate text={link.label} />
            {/* hover affordance: pointless on touch, so it frees label width below lg */}
            <ArrowUpRight className="hidden size-3.5 text-foreground-muted opacity-0 transition-opacity group-hover:opacity-100 lg:block" />
          </Link>
        </li>
      ))}
    </ul>
  </div>
);
