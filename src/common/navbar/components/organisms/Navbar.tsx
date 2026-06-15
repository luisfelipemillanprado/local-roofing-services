"use client";

import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { company } from "@/data/site";
import { Logo } from "@/common/logo/components/atoms/Logo";
import { Button } from "@/common/button/components/atoms/Button";
import { ThemeToggle } from "@/common/navbar/components/atoms/ThemeToggle";
import { LanguageSwitch } from "@/common/navbar/components/atoms/LanguageSwitch";

type NavLink = { label: string; href: string };

export function Navbar() {
  const t = useTranslations("navbar");
  const navLinks = t.raw("links") as NavLink[];
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-surface/90 shadow-[0_0.625rem_2.5rem_-1.5rem_rgba(15,23,34,0.45)] backdrop-blur-md">
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
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={t("toggleMenu")}
            aria-expanded={open}
            className="grid size-11 place-items-center rounded-xl bg-ink text-white"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu: animated open/close with a pure-CSS grid-rows height transition. */}
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-out lg:hidden ${
          open
            ? "grid-rows-[1fr] opacity-100"
            : "pointer-events-none grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="min-h-0">
          <div className="container-x pb-6">
            <div className="rounded-2xl border border-line bg-surface p-4 shadow-soft">
              <nav className="flex flex-col">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-4 py-3 text-base font-medium text-fg transition-colors hover:bg-surface-2 hover:text-primary"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-4 flex flex-col gap-3 border-t border-line pt-4">
                <a
                  href={company.phoneHref}
                  className="flex items-center gap-2 px-1 text-sm font-semibold text-fg"
                >
                  <Phone className="size-4 text-primary" />
                  {company.phone}
                </a>
                <Button href="#contact" variant="primary" className="w-full">
                  {t("getQuote")}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
