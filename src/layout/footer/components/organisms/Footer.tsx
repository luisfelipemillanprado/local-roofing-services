import { getTranslations } from "next-intl/server";
import { Title } from "@/common/title/components/Title";
import { Container } from "@/common/container/components/Container";
import { FooterBrand } from "@/layout/footer/components/molecules/FooterBrand";
import { FooterLinks } from "@/layout/footer/components/molecules/FooterLinks";
import { FooterContact } from "@/layout/footer/components/molecules/FooterContact";
import { FooterHours } from "@/layout/footer/components/molecules/FooterHours";
import { FooterCredits } from "@/layout/footer/components/molecules/FooterCredits";
import { layoutData } from "@/data/global/layout";
import { company } from "@/data/site";

const { topLinks, services, contact, legal } = layoutData.footer;
const { name, address, phone, phoneHref, email, emailHref, hours, builder } = company;

export const Footer = async () => {
  const t = await getTranslations("footer");
  const tService = await getTranslations("service");

  /* top links: route from data, label by key */
  const topLinkItems = topLinks.items.map((link) => ({
    key: link.key,
    href: link.href,
    label: t(`topLinks.${link.key}`),
  }));
  /* services column: href from the footer data, label reused from the service namespace */
  const serviceItems = services.items.map((item) => ({
    key: item.key,
    href: item.href,
    label: tService(`items.${item.key}.title`),
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
          <div className="col-span-2 lg:col-span-1">
            <FooterBrand description={t("description", { name })} />
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
          <FooterCredits
            copyright={t("copyright", { year: new Date().getFullYear(), name })}
            builtByLabel={t(builder.key)}
            builder={{ label: builder.name, href: builder.href }}
            privacy={{ label: t(legal.privacy.key), href: legal.privacy.href }}
            terms={{ label: t(legal.terms.key), href: legal.terms.href }}
          />
        </Container>
      </div>
    </footer>
  );
};
