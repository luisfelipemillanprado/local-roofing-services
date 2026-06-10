"use client";

import { MapPin, Mail, Phone, ArrowUpRight } from "lucide-react";
import Logo from "@/components/ui/Logo";
import Socials from "@/components/ui/Socials";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { company } from "@/data/site";

type FooterLink = { label: string; href: string };
type Hours = { day: string; time: string };

export default function Footer() {
  const t = useTranslations("Footer");
  const topLinks = t.raw("topLinks") as FooterLink[];
  const services = t.raw("services") as FooterLink[];
  const hours = t.raw("hours") as Hours[];

  return (
    <footer className="bg-[var(--color-ink)] text-white">
      <div className="container-x py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <Logo theme="dark" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
              {t("tagline", { name: company.name })}
            </p>
            <Socials theme="dark" className="mt-6" />
          </div>

          {/* Top links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white/90">
              {t("topLinksTitle")}
            </h4>
            <ul className="mt-5 space-y-3">
              {topLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1.5 text-sm text-white/60 transition-colors hover:text-white"
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
            <h4 className="text-sm font-bold uppercase tracking-widest text-white/90">
              {t("servicesTitle")}
            </h4>
            <ul className="mt-5 space-y-3">
              {services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1.5 text-sm text-white/60 transition-colors hover:text-white"
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
            <h4 className="text-sm font-bold uppercase tracking-widest text-white/90">
              {t("getInTouch")}
            </h4>
            <ul className="mt-5 space-y-4 text-sm text-white/60">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-[var(--color-primary-light)]" />
                {company.address}
              </li>
              <li className="flex items-center gap-3">
                <Phone className="size-4 shrink-0 text-[var(--color-primary-light)]" />
                <a href={company.phoneHref} className="hover:text-white">
                  {company.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="size-4 shrink-0 text-[var(--color-primary-light)]" />
                <a href={`mailto:${company.email}`} className="hover:text-white">
                  {company.email}
                </a>
              </li>
            </ul>

            <div className="mt-6 space-y-2 border-t border-white/10 pt-5">
              {hours.map((row) => (
                <div key={row.day} className="flex justify-between text-sm">
                  <span className="text-white/60">{row.day}</span>
                  <span className="font-medium text-white/90">{row.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-sm text-white/50 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {company.name}. {t("rights")}
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">
              {t("privacy")}
            </a>
            <a href="#" className="hover:text-white">
              {t("terms")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
