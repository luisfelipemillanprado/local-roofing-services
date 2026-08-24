import { SectionHeading } from "@/common/section-header/components/SectionHeading";
import { SectionWrapper } from "@/common/section-wrapper/components/SectionWrapper";
import { Button } from "@/common/call-to-actions/components/Button";
import { ServiceList } from "@/shared-sections/services/components/molecules/ServiceList";
import { getTranslations } from "next-intl/server";
import { servicesData } from "@/data/shared-sections/services";
import type { ServicesProps } from "@/shared-sections/services/types";
import { Container } from "@/common/container/components/Container";

const { heading, ctaHref, items } = servicesData;

export const Services = async ({ variant, tone = "muted", limit }: ServicesProps) => {
  const t = await getTranslations("service");
  /* data: order + image; text by key */
  /* limit: home summary, full on /services */
  const cards = items.slice(0, limit).map((service) => ({
    key: service.key,
    image: service.image,
    href: `/services/${service.slug}`,
    title: t(`items.${service.key}.title`),
    description: t(`items.${service.key}.description`),
  }));

  return (
    <SectionWrapper id="services" tone={tone}>
      <Container>
        <div className="grid gap-13">
          <div className="grid justify-items-center gap-6">
            <SectionHeading
              align="center"
              eyebrow={t(heading.eyebrow)}
              title={t(heading.titleLead)}
              accent={t(heading.titleAccent)}
              description={t(heading.description)}
            />
            <div className="mt-2">
              <Button href={ctaHref[variant].href} variant="secondary" pulse>
                {t(ctaHref[variant].key)}
              </Button>
            </div>
          </div>

          <ServiceList cards={cards} viewDetails={t("action.viewDetails")} />
        </div>
      </Container>
    </SectionWrapper>
  );
};
