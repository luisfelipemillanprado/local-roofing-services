import { SectionHeading } from "@/common/section-header/components/SectionHeading";
import { SectionWrapper } from "@/common/section-wrapper/components/SectionWrapper";
import { Button } from "@/common/call-to-actions/components/Button";
import { FaqList } from "@/shared-sections/faq/components/molecules/FaqList";
import { getTranslations } from "next-intl/server";
import { faqData } from "@/data/sections/faq";
import type { FaqProps } from "@/shared-sections/faq/types";
import { Container } from "@/common/container/components/Container";

const { ctaHref, items } = faqData;

export const Faq = async ({ tone = "muted" }: FaqProps) => {
  const t = await getTranslations("faq");

  /* questions: text by key */
  const faqItems = items.map((item) => ({
    key: item.key,
    question: t(`items.${item.key}.q`),
    answer: t(`items.${item.key}.a`),
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
