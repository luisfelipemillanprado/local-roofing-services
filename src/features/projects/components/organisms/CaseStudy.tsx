import { getTranslations } from "next-intl/server";
import { SectionHeading } from "@/common/section-header/components/SectionHeading";
import { SectionWrapper } from "@/common/section-wrapper/components/SectionWrapper";
import { Button } from "@/common/call-to-actions/components/Button";
import { BeforeAfterSlider } from "@/features/projects/components/molecules/BeforeAfterSlider";
import { CaseStudyCardList } from "@/features/projects/components/molecules/CaseStudyCardList";
import { caseStudyData } from "@/data/pages/projects";
import { Container } from "@/common/container/components/Container";
import type { CaseStudyProps } from "@/features/projects/types";

const { images, ctaHref, cards } = caseStudyData;

export const CaseStudy = async ({ tone = "base" }: CaseStudyProps) => {
  const t = await getTranslations("projects-page.caseStudy");

  /* before/after: src + key from data, label + alt by key */
  const [before, after] = images.map((image) => ({
    src: image.src,
    label: t(`images.${image.key}.label`),
    alt: t(`images.${image.key}.alt`),
  }));

  /* cards: icon from data, text by key, stagger delay */
  const cardItems = cards.map((card, i) => ({
    key: card.key,
    icon: card.icon,
    title: t(`cards.${card.key}.title`),
    description: t(`cards.${card.key}.description`),
    delay: i * 0.08,
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
          <div className="grid gap-13">
            <BeforeAfterSlider before={before} after={after} compareLabel={t("compareLabel")} />
            <CaseStudyCardList cards={cardItems} />
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
};
