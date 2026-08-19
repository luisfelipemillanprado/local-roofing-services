import { SectionHeading } from "@/common/section-header/components/SectionHeading";
import { SectionWrapper } from "@/common/section-wrapper/components/SectionWrapper";
import { Button } from "@/common/call-to-actions/components/Button";
import { RatingBadge } from "@/shared-sections/testimonials/components/molecules/RatingBadge";
import { TestimonialList } from "@/shared-sections/testimonials/components/molecules/TestimonialList";
import { getTranslations } from "next-intl/server";
import { testimonialsData } from "@/data/sections/testimonials";
import type { TestimonialsProps } from "@/shared-sections/testimonials/types";
import { Container } from "@/common/container/components/Container";

const { heading, ctaHref, rating, google, items } = testimonialsData;
/* about's curated pick set (widened for includes) */
const aboutPicks: readonly string[] = testimonialsData.aboutPicks;

export const Testimonials = async ({ variant, tone = "muted", limit, curated }: TestimonialsProps) => {
  const t = await getTranslations("testimonial");
  /* data: order + avatar; text by key */
  /* curated: about's aboutPicks set; else leading slice by limit */
  const source = curated ? items.filter((item) => aboutPicks.includes(item.key)) : items.slice(0, limit);
  const cards = source.map((testimonial) => ({
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
          <div className="grid justify-items-center gap-6">
            <SectionHeading
              align="center"
              eyebrow={t(heading.eyebrow)}
              title={t(heading.titleLead)}
              accent={t(heading.titleAccent)}
              description={t(heading.description)}
            />
            <div className="mt-2 grid justify-items-center gap-6">
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
