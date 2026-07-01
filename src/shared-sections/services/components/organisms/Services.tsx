import { SectionHeading } from "@/common/section-header/components/SectionHeading";
import { Section } from "@/common/section/components/Section";
import { Button } from "@/common/call-to-actions/components/Button";
import { ServiceList } from "@/shared-sections/services/components/molecules/ServiceList";
import { getTranslations } from "next-intl/server";
import { servicesSection } from "@/data/sections/services";
import type { ServicesProps } from "@/shared-sections/services/types";

export const Services = async ({ exploreHref, limit }: ServicesProps = {}) => {
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

  return (
    <Section id="services" tone="muted">
      <div className="container-x">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <SectionHeading
            eyebrow={t("eyebrow")}
            title={t("titleLead")}
            accent={t("titleAccent")}
            description={t("description")}
          />
          {exploreHref && (
            <Button href={exploreHref} variant="secondary" pulse>
              {t("viewAll")}
            </Button>
          )}
        </div>

        <ServiceList cards={cards} learnMore={t("learnMore")} />
      </div>
    </Section>
  );
};
