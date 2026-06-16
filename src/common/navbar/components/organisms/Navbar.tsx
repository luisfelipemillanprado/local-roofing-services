import { Phone } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { company } from "@/data/site";
import { Logo } from "@/common/logo/components/atoms/Logo";
import { Button } from "@/common/button/components/atoms/Button";
import { ThemeToggle } from "@/common/navbar/components/atoms/ThemeToggle";
import { LanguageSwitch } from "@/common/navbar/components/atoms/LanguageSwitch";
import { MobileMenu } from "@/common/navbar/components/molecules/MobileMenu";

type NavLink = { label: string; href: string };

export async function Navbar() {
  const t = await getTranslations("navbar");
  const navLinks = t.raw("links") as NavLink[];

  return (
    <header className="theme-dark fixed inset-x-0 top-0 z-50 bg-surface/90 text-fg shadow-[0_0.625rem_2.5rem_-1.5rem_rgba(15,23,34,0.45)] backdrop-blur-md">
      <div className="container-x flex h-18 items-center justify-between py-3">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-3.5 py-2 text-sm font-medium text-fg/80 transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={company.phoneHref}
            className="flex items-center gap-2 text-sm font-semibold text-fg"
          >
            <span className="grid size-9 place-items-center rounded-full bg-surface-2 text-primary">
              <Phone className="size-4" />
            </span>
            {company.phone}
          </a>
          <LanguageSwitch />
          <ThemeToggle />
          <Button href="#contact" variant="primary">
            {t("getQuote")}
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LanguageSwitch />
          <ThemeToggle />
          <MobileMenu
            navLinks={navLinks}
            toggleMenuLabel={t("toggleMenu")}
            getQuoteLabel={t("getQuote")}
          />
        </div>
      </div>
    </header>
  );
}
