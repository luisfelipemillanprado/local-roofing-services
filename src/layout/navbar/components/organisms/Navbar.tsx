import { Phone } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Logo } from "@/common/logo/components/Logo";
import { Button } from "@/common/call-to-actions/components/Button";
import { Text } from "@/common/text/components/Text";
import { ThemeToggle } from "@/layout/navbar/components/atoms/ThemeToggle";
import { LanguageSwitch } from "@/layout/navbar/components/atoms/LanguageSwitch";
import { DesktopNav } from "@/layout/navbar/components/molecules/DesktopNav";
import { MobileMenu } from "@/layout/navbar/components/molecules/MobileMenu";
import { Container } from "@/common/container/components/Container";
import { layoutData } from "@/data/global/layout";
import type { NavLink } from "@/layout/navbar/types";

const { navbar } = layoutData;

export const Navbar = async () => {
  const t = await getTranslations("navbar");

  /* attach the translated label to each link by its key */
  const navLinks: NavLink[] = navbar.links.map((link) => ({
    ...link,
    label: t(`links.${link.key}`),
  }));

  return (
    <header className="theme-dark fixed inset-x-0 top-0 z-50 shadow-sm">
      {/* blur as a sibling layer so the menu's own backdrop-blur isn't trapped */}
      <div className="absolute inset-0 -z-10 bg-surface-panel/90 backdrop-blur-md" />
      <Container>
        <div className="grid h-header grid-flow-col items-center justify-between py-3">
          <Logo />

          <DesktopNav navLinks={navLinks} />

          <div className="grid grid-flow-col items-center gap-2 sm:gap-2.5 lg:gap-3">
            {/* phone — xl only */}
            <div className="hidden items-center gap-2 xl:grid xl:grid-flow-col">
              <span className="grid size-9 place-items-center rounded-full bg-surface-muted">
                <Phone className="size-4 text-primary" />
              </span>
              <Text as="span" size="body" tone="default" weight="semibold" text={navbar.phone} />
            </div>

            {/* lang + theme — shared, always visible */}
            <LanguageSwitch />
            <ThemeToggle />

            {/* hamburger — mobile only (lg:hidden lives on its trigger) */}
            <MobileMenu navLinks={navLinks} menuId={navbar.menuId} toggleMenuLabel={t("toggleMenu")} />

            {/* from sm; wrapper owns visibility so the link keeps its own display */}
            <div className="max-sm:hidden">
              <Button href={navbar.ctaHref.href} variant="primary" pulse>
                {t(navbar.ctaHref.key)}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};
