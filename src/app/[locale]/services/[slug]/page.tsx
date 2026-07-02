import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { Navbar } from "@/layout/navbar/components/organisms/Navbar";
import { Footer } from "@/layout/footer/components/Footer";
import { PageHeader } from "@/shared-sections/page-header/components/PageHeader";
import { Section } from "@/common/section/components/Section";
import { Media } from "@/common/media/components/Media";
import { Button } from "@/common/call-to-actions/components/Button";
import { servicesSection } from "@/data/sections/services";

const { items } = servicesSection;

type Props = { params: Promise<{ locale: string; slug: string }> };

/* fixed service set -> unknown slug 404s */
export const dynamicParams = false;

/* SSG: one page per service slug */
export function generateStaticParams() {
  return items.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const service = items.find((item) => item.slug === slug);
  if (!service) return {};
  const t = await getTranslations({ locale: locale as Locale, namespace: "service" });
  return {
    title: t(`items.${service.key}.title`),
    description: t(`items.${service.key}.description`),
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale as Locale);

  /* untrusted param -> resolve or 404 */
  const service = items.find((item) => item.slug === slug);
  if (!service) notFound();

  const t = await getTranslations("service");
  const title = t(`items.${service.key}.title`);

  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          eyebrow={t("eyebrow")}
          titleLead={title}
          titleAccent=""
          description={t(`items.${service.key}.description`)}
        />
        <Section id="service-detail" tone="base">
          <div className="container-x grid justify-items-start gap-10">
            <Media src={service.image} alt={title} shape="wide" sizes="100vw" />
            <Button href="/services" variant="secondary">
              {t("action.summary")}
            </Button>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
