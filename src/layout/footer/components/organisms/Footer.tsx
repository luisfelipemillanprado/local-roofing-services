import { getTranslations } from "next-intl/server";
import { Logo } from "@/common/logo/components/Logo";
import { Socials } from "@/common/social/components/Socials";
import { Text } from "@/common/text/components/Text";
import { Title } from "@/common/title/components/Title";
import { Container } from "@/common/container/components/Container";
import { FooterLinks } from "@/layout/footer/components/molecules/FooterLinks";
import { FooterContact } from "@/layout/footer/components/molecules/FooterContact";
import { FooterHours } from "@/layout/footer/components/molecules/FooterHours";
import { layoutData } from "@/data/global/layout";
import { servicesData } from "@/data/sections/services";
import { company } from "@/data/site";

const { topLinks, services, contact, legal } = layoutData.footer;
const { name, address, phone, phoneHref, email, emailHref, hours, builder } = company;

export const Footer = async () => {
  const t = await getTranslations("footer");
  const tService = await getTranslations("service");

  const topLinkItems = topLinks.items.map((link) => ({ ...link, label: t(`topLinks.${link.key}`) }));
  /* services column: first five real services (title + slug route), matching the top links count */
  const serviceItems = servicesData.items.slice(0, 5).map((service) => ({
    key: service.key,
    href: `/services/${service.slug}`,
    label: tService(`items.${service.key}.title`),
  }));
  /* hours: day label by key; a null time means closed */
  const hourItems = hours.map((row) => ({
    key: row.key,
    day: t(`hours.${row.key}`),
    time: row.time ?? t(contact.closedKey),
  }));

  return (
    <footer className="theme-dark bg-surface-muted text-foreground">
      <Container>
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 py-16 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] lg:gap-12 lg:py-20">
          {/* Brand */}
          <div className="col-span-2 grid content-start justify-items-center gap-5 text-center lg:col-span-1 lg:justify-items-start lg:text-left">
            <Logo />
            <div className="max-w-xs">
              <Text size="lead" tone="muted" text={t("description", { name })} />
            </div>
            <div className="mt-1">
              <Socials />
            </div>
          </div>

          <FooterLinks title={t(topLinks.titleKey)} links={topLinkItems} />
          <FooterLinks title={t(services.titleKey)} links={serviceItems} />

          {/* Contact + hours */}
          <div className="col-span-2 grid content-start justify-items-center gap-5 lg:col-span-1 lg:justify-items-start">
            <Title as="h4" size="micro" weight="bold" tracking text={t(contact.titleKey)} />
            <FooterContact
              address={address}
              phone={phone}
              phoneHref={phoneHref}
              email={email}
              emailHref={emailHref}
            />
            <div className="mt-1 w-full border-t border-line pt-5">
              <FooterHours rows={hourItems} />
            </div>
          </div>
        </div>
      </Container>

      <div className="border-t border-line">
        <Container>
          <div className="grid justify-items-center gap-3 py-6 lg:grid-flow-col lg:justify-between">
            {/* stacked on mobile; one continued line from lg */}
            <div className="grid justify-items-center gap-1 lg:grid-flow-col lg:items-center lg:justify-start lg:gap-1.5">
              <Text
                as="span"
                size="body"
                tone="muted"
                text={t("copyright", { year: new Date().getFullYear(), name })}
              />
              {/* builder credit: brand + href live in data */}
              <div className="grid grid-flow-col items-center justify-start gap-1.5">
                <Text as="span" size="body" tone="muted" text={t(builder.key)} />
                <a href={builder.href}>
                  <Text as="span" size="body" tone="muted" weight="medium" text={builder.name} />
                </a>
              </div>
            </div>
            <div className="grid grid-flow-col gap-6">
              <a href={legal.privacy.href}>
                <Text as="span" size="body" tone="muted" text={t(legal.privacy.key)} />
              </a>
              <a href={legal.terms.href}>
                <Text as="span" size="body" tone="muted" text={t(legal.terms.key)} />
              </a>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
};
