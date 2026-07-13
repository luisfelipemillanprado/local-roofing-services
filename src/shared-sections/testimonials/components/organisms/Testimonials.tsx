import { SectionHeading } from "@/common/section-header/components/SectionHeading";
import { SectionWrapper } from "@/common/section-wrapper/components/SectionWrapper";
import { Button } from "@/common/call-to-actions/components/Button";
import { RatingBadge } from "@/shared-sections/testimonials/components/molecules/RatingBadge";
import { TestimonialList } from "@/shared-sections/testimonials/components/molecules/TestimonialList";
import { getTranslations } from "next-intl/server";
import { testimonialsData } from "@/data/sections/testimonials";
import type { TestimonialsProps } from "@/shared-sections/testimonials/types";
import { Container } from "@/common/container/components/Container";

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
    <SectionWrapper id="testimonials" tone="muted">
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
            <div className="mt-2 grid justify-items-center gap-6">
              <Button href={ctaHref[variant].href} variant="secondary" pulse>
                {t(ctaHref[variant].key)}
              </Button>
              <RatingBadge score={rating.score} count={rating.count} reviews={t("reviews")} />
            </div>
          </div>

          <TestimonialList cards={cards} collapseBelowLg={variant === "viewAll"} />
        </div>
      </Container>
    </SectionWrapper>
  );
};
