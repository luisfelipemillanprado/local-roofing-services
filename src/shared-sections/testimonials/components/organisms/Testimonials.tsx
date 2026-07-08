import { SectionHeading } from "@/common/section-header/components/SectionHeading";
import { Section } from "@/common/section/components/Section";
import { Button } from "@/common/call-to-actions/components/Button";
import { GoogleMark } from "@/shared-sections/testimonials/components/atoms/GoogleMark";
import { TestimonialList } from "@/shared-sections/testimonials/components/molecules/TestimonialList";
import { Stars } from "@/common/stars/components/Stars";
import { Text } from "@/common/text/components/Text";
import { TextNumber } from "@/common/text/components/TextNumber";
import { getTranslations } from "next-intl/server";
import { testimonialsData } from "@/data/sections/testimonials";
import type { TestimonialsProps } from "@/shared-sections/testimonials/types";

const { items, ctaHref, rating } = testimonialsData;

export const Testimonials = async ({ variant, limit }: TestimonialsProps) => {
  const t = await getTranslations("testimonial");
  /* data: order + avatar; text by key */
  /* limit: home summary, full on /about and /projects */
  const cards = items.slice(0, limit).map((testimonial, i) => ({
    key: testimonial.key,
    avatar: testimonial.avatar,
    quote: t(`items.${testimonial.key}.quote`),
    name: t(`items.${testimonial.key}.name`),
    location: t(`items.${testimonial.key}.location`),
    delay: i * 0.08,
  }));

  return (
    <Section id="testimonials" tone="muted">
      <div className="container-x grid gap-13">
        <div className="grid items-center justify-items-center gap-6 md:grid-cols-[1fr_auto] md:justify-items-start">
          <SectionHeading
            eyebrow={t("eyebrow")}
            title={t("titleLead")}
            accent={t("titleAccent")}
            description={t("description")}
          />
          <div className="mt-2 grid justify-items-center gap-4">
            <Button href={ctaHref[variant].href} variant="secondary" pulse>
              {t(ctaHref[variant].key)}
            </Button>
            <div className="grid grid-flow-col items-center gap-2 rounded-2xl border border-line bg-surface-panel px-4 py-3">
              <GoogleMark />
              <div>
                <div className="grid grid-flow-col items-center justify-start gap-1.5">
                  <TextNumber size="base" text={rating.score} />
                  <Stars />
                </div>
                <Text size="label" tone="muted" text={`${rating.count} ${t("reviews")}`} />
              </div>
            </div>
          </div>
        </div>

        <TestimonialList cards={cards} collapseBelowLg={variant === "viewAll"} />
      </div>
    </Section>
  );
};
