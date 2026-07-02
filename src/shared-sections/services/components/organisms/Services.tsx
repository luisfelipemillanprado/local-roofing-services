import { SectionHeading } from "@/common/section-header/components/SectionHeading";
import { Section } from "@/common/section/components/Section";
import { Button } from "@/common/call-to-actions/components/Button";
import { ServiceList } from "@/shared-sections/services/components/molecules/ServiceList";
import { getTranslations } from "next-intl/server";
import { servicesSection } from "@/data/sections/services";
import type { ServicesProps } from "@/shared-sections/services/types";

export const Services = async ({ variant, limit }: ServicesProps) => {
  const t = await getTranslations("service");
  /* data drives order + icon/image; text by key */
  /* limit: short summary on home, full list on /services */
  const cards = servicesSection.items.slice(0, limit).map((service, i) => ({
    key: service.key,
    icon: service.icon,
    image: service.image,
    title: t(`items.${service.key}.title`),
    description: t(`items.${service.key}.description`),
    delay: i * 0.08,
  }));

  const cta = servicesSection.ctaHref[variant];

  return (
    <Section id="services" tone="muted">
      <div className="container-x">
        <div className="grid items-center justify-items-center gap-6 md:grid-cols-[1fr_auto] md:justify-items-start">
          <SectionHeading
            eyebrow={t("eyebrow")}
            title={t("titleLead")}
            accent={t("titleAccent")}
            description={t("description")}
          />
          <Button href={cta.href} variant="secondary" pulse>
            {t(cta.key)}
          </Button>
        </div>

        <ServiceList cards={cards} learnMore={t("learnMore")} />
      </div>
    </Section>
  );
};
