import { SectionHeading } from "@/common/section-header/components/SectionHeading";
import { SectionWrapper } from "@/common/section-wrapper/components/SectionWrapper";
import { Button } from "@/common/call-to-actions/components/Button";
import { ServiceList } from "@/shared-sections/services/components/molecules/ServiceList";
import { getTranslations } from "next-intl/server";
import { servicesData } from "@/data/sections/services";
import type { ServicesProps } from "@/shared-sections/services/types";
import { Container } from "@/common/container/components/Container";

const { items, ctaHref } = servicesData;

export const Services = async ({ variant, limit }: ServicesProps) => {
  const t = await getTranslations("service");
  /* data: order + icon/image; text by key */
  /* limit: home summary, full on /services */
  const cards = items.slice(0, limit).map((service, i) => ({
    key: service.key,
    icon: service.icon,
    image: service.image,
    href: `/services/${service.slug}`,
    title: t(`items.${service.key}.title`),
    description: t(`items.${service.key}.description`),
    delay: i * 0.08,
  }));

  return (
    <SectionWrapper id="services" tone="muted">
      <Container>
        <div className="grid gap-13">
          <div className="grid justify-items-center gap-6">
            <SectionHeading
              align="center"
              eyebrow={t("eyebrow")}
              title={t("titleLead")}
              accent={t("titleAccent")}
              description={t("description")}
            />
            <div className="mt-2">
              <Button href={ctaHref[variant].href} variant="secondary" pulse>
                {t(ctaHref[variant].key)}
              </Button>
            </div>
          </div>

          <ServiceList cards={cards} learnMore={t("learnMore")} collapseBelowLg={variant === "viewAll"} />
        </div>
      </Container>
    </SectionWrapper>
  );
};
