import { SectionHeading } from "@/common/section-header/components/SectionHeading";
import { SectionWrapper } from "@/common/section-wrapper/components/SectionWrapper";
import { Button } from "@/common/call-to-actions/components/Button";
import { FaqList } from "@/shared-sections/faq/components/molecules/FaqList";
import { getTranslations } from "next-intl/server";
import { faqData } from "@/data/shared-sections/faq";
import type { FaqProps } from "@/shared-sections/faq/types";
import { Container } from "@/common/container/components/Container";

const { heading, ctaHref } = faqData;

export const Faq = async ({ variant, tone = "muted" }: FaqProps) => {
  const t = await getTranslations("faq");
  /* data: per-variant items; text by full key */
  const cards = faqData[variant].items.map((item) => ({
    key: item.key,
    question: t(`${item.key}.q`),
    answer: t(`${item.key}.a`),
  }));

  return (
    <SectionWrapper id="faq" tone={tone}>
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
              <Button href={ctaHref.href} variant="secondary" pulse>
                {t(ctaHref.key)}
              </Button>
            </div>
          </div>

          <div className="mx-auto w-full max-w-3xl">
            <FaqList cards={cards} />
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
};
