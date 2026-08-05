import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { Navbar } from "@/layout/navbar/components/organisms/Navbar";
import { Footer } from "@/layout/footer/components/organisms/Footer";
import { PageHeader } from "@/shared-sections/page-header/components/PageHeader";
import { Marquee } from "@/shared-sections/marquee/components/organisms/Marquee";
import { ServiceOverview } from "@/features/service-detail/components/organisms/ServiceOverview";
import { ServiceProcess } from "@/features/service-detail/components/organisms/ServiceProcess";
import { Faq } from "@/shared-sections/faq/components/organisms/Faq";
import { Products } from "@/shared-sections/products/components/organisms/Products";
import { ServiceAreas } from "@/shared-sections/service-areas/components/organisms/ServiceAreas";
import { Contact } from "@/shared-sections/contact/components/organisms/Contact";
import { servicesData } from "@/data/sections/services";

const { items } = servicesData;

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

  /* title split from the shared section, detail copy from the page namespace */
  const t = await getTranslations("service");
  const td = await getTranslations("service-detail");

  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          titleLead={t(`items.${service.key}.titleLead`)}
          titleAccent={t(`items.${service.key}.titleAccent`)}
          secondaryCta="services"
          description={td(`items.${service.key}.intro`)}
        />
        <Marquee />
        {/* service overview: per-service image + checklist, chrome shared from about */}
        <ServiceOverview serviceKey={service.key} tone="muted" />
        <ServiceProcess serviceKey={service.key} tone="base" />
        <Faq variant={service.key} tone="muted" />
        <ServiceAreas tone="base" />
        <Products tone="muted" limit={6} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
