"use client";

import { MapPin, Mail, Phone, ArrowUpRight } from "lucide-react";
import { Logo } from "@/common/logo/components/atoms/Logo";
import { Socials } from "@/common/social/components/molecules/Socials";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { company } from "@/data/site";

type FooterLink = { label: string; href: string };
type Hours = { day: string; time: string };

export const Footer = () => {
  const t = useTranslations("footer");
  const topLinks = t.raw("topLinks") as FooterLink[];
  const services = t.raw("services") as FooterLink[];
  const hours = t.raw("hours") as Hours[];

  return (
    <footer className="bg-footer text-footer-fg">
      <div className="container-x py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-footer-fg/65">
              {t("tagline", { name: company.name })}
            </p>
            <Socials className="mt-6" />
          </div>

          {/* Top links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-footer-fg/90">
              {t("topLinksTitle")}
            </h4>
            <ul className="mt-5 space-y-3">
              {topLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1.5 text-sm text-footer-fg/65 transition-colors hover:text-footer-fg"
                  >
                    {link.label}
                    <ArrowUpRight className="size-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-footer-fg/90">
              {t("servicesTitle")}
            </h4>
            <ul className="mt-5 space-y-3">
              {services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1.5 text-sm text-footer-fg/65 transition-colors hover:text-footer-fg"
                  >
                    {link.label}
                    <ArrowUpRight className="size-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + hours */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-footer-fg/90">
              {t("getInTouch")}
            </h4>
            <ul className="mt-5 space-y-4 text-sm text-footer-fg/65">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-footer-accent" />
                {company.address}
              </li>
              <li className="flex items-center gap-3">
                <Phone className="size-4 shrink-0 text-footer-accent" />
                <a href={company.phoneHref} className="hover:text-footer-fg">
                  {company.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="size-4 shrink-0 text-footer-accent" />
                <a href={`mailto:${company.email}`} className="hover:text-footer-fg">
                  {company.email}
                </a>
              </li>
            </ul>

            <div className="mt-6 space-y-2 border-t border-footer-line pt-5">
              {hours.map((row) => (
                <div key={row.day} className="flex justify-between text-sm">
                  <span className="text-footer-fg/65">{row.day}</span>
                  <span className="font-medium text-footer-fg/90">{row.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-footer-line">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-sm text-footer-fg/50 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {company.name}. {t("rights")}
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-footer-fg">
              {t("privacy")}
            </a>
            <a href="#" className="hover:text-footer-fg">
              {t("terms")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
