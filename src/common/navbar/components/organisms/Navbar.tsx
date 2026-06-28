import { Phone } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { company } from "@/data/site";
import { Logo } from "@/common/logo/components/Logo";
import { Button } from "@/common/call-to-actions/components/Button";
import { Text } from "@/common/text/components/Text";
import { ThemeToggle } from "@/common/navbar/components/atoms/ThemeToggle";
import { LanguageSwitch } from "@/common/navbar/components/atoms/LanguageSwitch";
import { NavDropdown } from "@/common/navbar/components/molecules/NavDropdown";
import { MobileMenu } from "@/common/navbar/components/molecules/MobileMenu";
import { layoutData } from "@/data/global/layout";
import {
  isNavGroup,
  isNavGroupData,
  type NavLeaf,
  type NavLink,
  type NavLinkKey,
} from "@/common/navbar/types";

const { navbar } = layoutData;

export const Navbar = async () => {
  const t = await getTranslations("navbar");

  /* Attach the translated label to a link by its key. */
  const withLabel = <T extends { key: NavLinkKey }>(link: T) => ({
    ...link,
    label: t(`links.${link.key}`),
  });

  /* Desktop keeps the group; mobile flattens it into plain links. */
  const navLinks: NavLink[] = navbar.links.map((link) =>
    isNavGroupData(link) ? { ...withLabel(link), children: link.children.map(withLabel) } : withLabel(link),
  );
  const mobileLinks: NavLeaf[] = navLinks.flatMap((link) => (isNavGroup(link) ? link.children : [link]));

  return (
    <header className="theme-dark fixed inset-x-0 top-0 z-50 text-foreground shadow-xs shadow-shade/30">
      {/* Blur as a sibling layer so the menu's own backdrop-blur isn't trapped. */}
      <div className="absolute inset-0 -z-10 bg-surface-panel/90 backdrop-blur-md" />
      <div className="container-x grid h-header grid-flow-col items-center justify-between py-3">
        <Logo />

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

        <div className="grid grid-flow-col items-center gap-2 lg:gap-3">
          {/* Phone — desktop only */}
          <div className="hidden items-center gap-2 lg:grid lg:grid-flow-col">
            <span className="grid size-9 place-items-center rounded-full bg-surface-muted">
              <Phone className="size-4 text-primary" />
            </span>
            <Text as="span" size="body" tone="default" weight="semibold" text={company.phone} />
          </div>

          {/* Lang + theme — shared, always visible */}
          <LanguageSwitch />
          <ThemeToggle />

          {/* Desktop only; the wrapper owns visibility so the link keeps its own display */}
          <div className="max-lg:hidden">
            <Button href={navbar.getFreeQuoteHref} variant="primary">
              {t("getFreeQuote")}
            </Button>
          </div>

          {/* Hamburger — mobile only (lg:hidden lives on its trigger) */}
          <MobileMenu navLinks={mobileLinks} menuId={navbar.menuId} toggleMenuLabel={t("toggleMenu")} />
        </div>
      </div>
    </header>
  );
};
