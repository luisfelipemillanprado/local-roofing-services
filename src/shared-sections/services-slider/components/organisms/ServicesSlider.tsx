import { getTranslations } from "next-intl/server";
import { SectionWrapper } from "@/common/section-wrapper/components/SectionWrapper";
import { SectionHeading } from "@/common/section-header/components/SectionHeading";
import { Button } from "@/common/call-to-actions/components/Button";
import { Container } from "@/common/container/components/Container";
import { ServicesSliderTrack } from "@/shared-sections/services-slider/components/molecules/ServicesSliderTrack";
import { servicesData } from "@/data/shared-sections/services";
import type { ServicesSliderProps } from "@/shared-sections/services-slider/types";

const { heading, ctaHref, items } = servicesData;

/* same header + CTA as the Services section, with a parallax slider instead of the grid */
export const ServicesSlider = async ({ variant, tone = "base", limit }: ServicesSliderProps) => {
  const t = await getTranslations("service");
  /* data: order + image; text by key */
  const cards = items.slice(0, limit).map((service) => ({
    key: service.key,
    image: service.image,
    href: `/services/${service.slug}`,
    name: t(`items.${service.key}.title`),
    description: t(`items.${service.key}.description`),
  }));

  return (
    <SectionWrapper id="services-featured" tone={tone}>
      <div className="grid gap-13">
        {/* header keeps the page gutter */}
        <Container>
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
        </Container>

        {/* track is full-bleed on mobile (no gutter), contained from md */}
        <Container bleed>
          <ServicesSliderTrack
            cards={cards}
            viewDetails={t("action.viewDetails")}
            contact={t("action.contact")}
            previous={t("controls.previous")}
            next={t("controls.next")}
          />
        </Container>
      </div>
    </SectionWrapper>
  );
};
