"use client";

import { MapPin, Mail, Phone, ArrowUpRight } from "lucide-react";
import { Logo } from "@/common/logo/components/atoms/Logo";
import { Socials } from "@/common/social/components/molecules/Socials";
import { Text } from "@/common/text/components/Text";
import { Title } from "@/common/title/components/Title";
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
    <footer className="theme-dark bg-surface-muted text-foreground">
      <div className="container-x py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <Logo />
            <div className="mt-5 max-w-xs">
              <Text size="lead" tone="muted" text={t("tagline", { name: company.name })} />
            </div>
            <Socials className="mt-6" />
          </div>

          {/* Top links */}
          <div>
            <Title as="h4" size="micro" weight="bold" tracking text={t("topLinksTitle")} />
            <ul className="mt-5 space-y-3">
              {topLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="group inline-flex items-center gap-1.5">
                    <Text as="span" size="body" tone="muted" text={link.label} />
                    <ArrowUpRight className="size-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <Title as="h4" size="micro" weight="bold" tracking text={t("servicesTitle")} />
            <ul className="mt-5 space-y-3">
              {services.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="group inline-flex items-center gap-1.5">
                    <Text as="span" size="body" tone="muted" text={link.label} />
                    <ArrowUpRight className="size-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + hours */}
          <div>
            <Title as="h4" size="micro" weight="bold" tracking text={t("getInTouch")} />
            <ul className="mt-5 space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-primary-light" />
                <Text as="span" size="body" tone="muted" text={company.address} />
              </li>
              <li className="flex items-center gap-3">
                <Phone className="size-4 shrink-0 text-primary-light" />
                <a href={company.phoneHref}>
                  <Text as="span" size="body" tone="muted" text={company.phone} />
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="size-4 shrink-0 text-primary-light" />
                <a href={`mailto:${company.email}`}>
                  <Text as="span" size="body" tone="muted" text={company.email} />
                </a>
              </li>
            </ul>

            <div className="mt-6 space-y-2 border-t border-line pt-5">
              {hours.map((row) => (
                <div key={row.day} className="flex justify-between">
                  <Text as="span" size="body" tone="muted" text={row.day} />
                  <Text as="span" size="body" tone="muted" weight="medium" text={row.time} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 sm:flex-row">
          <Text
            as="span"
            size="body"
            tone="muted"
            text={`© ${new Date().getFullYear()} ${company.name}. ${t("rights")}`}
          />
          <div className="flex gap-6">
            <a href="#">
              <Text as="span" size="body" tone="muted" text={t("privacy")} />
            </a>
            <a href="#">
              <Text as="span" size="body" tone="muted" text={t("terms")} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
