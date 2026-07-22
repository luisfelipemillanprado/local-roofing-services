import { SectionHeading } from "@/common/section-header/components/SectionHeading";
import { SectionWrapper } from "@/common/section-wrapper/components/SectionWrapper";
import { Button } from "@/common/call-to-actions/components/Button";
import { FaqList } from "@/shared-sections/faq/components/molecules/FaqList";
import { getTranslations } from "next-intl/server";
import { faqData } from "@/data/sections/faq";
import type { FaqProps } from "@/shared-sections/faq/types";
import { Container } from "@/common/container/components/Container";

const { ctaHref } = faqData;

export const Faq = async ({ variant, tone = "muted" }: FaqProps) => {
  const t = await getTranslations("faq");

  /* questions: per-variant items, text by full key */
  const faqItems = faqData[variant].items.map((item) => ({
    key: item.key,
    question: t(`${item.key}.q`),
    answer: t(`${item.key}.a`),
  }));

  return (
    <SectionWrapper tone={tone}>
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
              <Button href={ctaHref.href} variant="secondary" pulse>
                {t(ctaHref.key)}
              </Button>
            </div>
          </div>

          <div className="mx-auto w-full max-w-3xl">
            <FaqList items={faqItems} />
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
};
