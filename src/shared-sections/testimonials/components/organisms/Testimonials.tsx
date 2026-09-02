import { SectionHeading } from "@/common/section-header/components/SectionHeading";
import { SectionWrapper } from "@/common/section-wrapper/components/SectionWrapper";
import { Button } from "@/common/call-to-actions/components/Button";
import { RatingBadge } from "@/shared-sections/testimonials/components/molecules/RatingBadge";
import { TestimonialList } from "@/shared-sections/testimonials/components/molecules/TestimonialList";
import { getTranslations } from "next-intl/server";
import { testimonialsData } from "@/data/shared-sections/testimonials";
import type { TestimonialsProps } from "@/shared-sections/testimonials/types";
import { Container } from "@/common/container/components/Container";

const { heading, ctaHref, rating, google, items } = testimonialsData;

export const Testimonials = async ({ variant, tone = "muted", group }: TestimonialsProps) => {
  const t = await getTranslations("testimonial");
  /* data: the page's group set (avatar + order); text by key */
  const cards = items[group].map((testimonial) => ({
    key: testimonial.key,
    avatar: testimonial.avatar,
    quote: t(`items.${testimonial.key}.quote`),
    name: t(`items.${testimonial.key}.name`),
    location: t(`items.${testimonial.key}.location`),
  }));

  return (
    <SectionWrapper id="testimonials" tone={tone}>
      <Container>
        <div className="grid gap-13">
          <div className="grid justify-items-center gap-6 md:mr-5 md:grid-cols-[1fr_auto] md:items-center md:justify-items-stretch md:gap-x-6">
            <SectionHeading
              align="center"
              flushFrom="md"
              eyebrow={t(heading.eyebrow)}
              title={t(heading.titleLead)}
              accent={t(heading.titleAccent)}
              description={t(heading.description)}
            />
            {/* below md sits under the heading (row badge|button); beside it from md stacks vertically */}
            <div className="mt-2 grid justify-items-center gap-6 sm:grid-flow-col sm:items-center sm:justify-center sm:*:first:order-2 sm:*:last:order-1 md:mt-0 md:grid-flow-row md:justify-items-start">
              <Button href={ctaHref[variant].href} variant="secondary" pulse>
                {t(ctaHref[variant].key)}
              </Button>
              <RatingBadge score={rating.score} count={rating.count} reviews={t("reviews")} logo={google} />
            </div>
          </div>

          <TestimonialList cards={cards} logo={google} />
        </div>
      </Container>
    </SectionWrapper>
  );
};
