import { Link } from "@/i18n/navigation";
import { Text } from "@/common/text/components/Text";
import { NavDropdown } from "@/common/navbar/components/molecules/NavDropdown";
import { isNavGroup, type DesktopNavProps } from "@/common/navbar/types";

/* Desktop navigation: dropdown groups + plain links. */
export const DesktopNav = ({ navLinks }: DesktopNavProps) => (
  <nav className="hidden items-center gap-1 lg:grid lg:grid-flow-col">
    {navLinks.map((link) =>
      isNavGroup(link) ? (
        <NavDropdown key={link.key} label={link.label} links={link.children} />
      ) : (
        <Link key={link.key} href={link.href} className="rounded-full px-3.5 py-2">
          <Text as="span" size="body" tone="muted" weight="medium" text={link.label} />
        </Link>
      ),
    )}
  </nav>
);
