import { Link } from "@/i18n/navigation";
import { Text } from "@/common/text/components/Text";
import type { DesktopNavProps } from "@/layout/navbar/types";

/* desktop navigation: plain links */
export const DesktopNav = ({ navLinks }: DesktopNavProps) => (
  <nav className="hidden items-center gap-1 lg:grid lg:grid-flow-col">
    {navLinks.map((link) => (
      <Link key={link.key} href={link.href} className="rounded-full px-3.5 py-2">
        <Text as="span" size="body" tone="muted" weight="medium" text={link.label} />
      </Link>
    ))}
  </nav>
);
