import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { Navbar } from "@/layout/navbar/components/organisms/Navbar";
import { Footer } from "@/layout/footer/components/organisms/Footer";
import { PageHeader } from "@/shared-sections/page-header/components/PageHeader";
import { Marquee } from "@/shared-sections/marquee/components/organisms/Marquee";
import { SectionWrapper } from "@/common/section-wrapper/components/SectionWrapper";
import { Media } from "@/common/media/components/Media";
import { ServiceIncluded } from "@/features/service-detail/components/organisms/ServiceIncluded";
import { ServiceProcess } from "@/features/service-detail/components/organisms/ServiceProcess";
import { Faq } from "@/shared-sections/faq/components/organisms/Faq";
import { Products } from "@/shared-sections/products/components/organisms/Products";
import { Contact } from "@/shared-sections/contact/components/organisms/Contact";
import { servicesData } from "@/data/sections/services";
import { Container } from "@/common/container/components/Container";

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

  /* name from the shared section, detail copy from the page namespace */
  const t = await getTranslations("service");
  const td = await getTranslations("service-detail");
  const title = t(`items.${service.key}.title`);
  /* first word leads white, the rest carries the faint accent */
  const [titleLead, ...accentWords] = title.split(" ");

  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          titleLead={titleLead}
          titleAccent={accentWords.join(" ")}
          secondaryCta="services"
          description={td(`items.${service.key}.intro`)}
        />
        <Marquee />
        {/* service showcase: framed image only, like the case study */}
        <SectionWrapper id="service-detail" tone="muted">
          <Container>
            <Media
              src={service.image}
              alt={title}
              shape="showcase"
              sizes="(max-width: 1024px) 100vw, 1024px"
            />
          </Container>
        </SectionWrapper>
        <ServiceIncluded serviceKey={service.key} tone="base" />
        <ServiceProcess serviceKey={service.key} tone="muted" />
        <Faq variant={service.key} tone="base" />
        <Products tone="muted" limit={6} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
