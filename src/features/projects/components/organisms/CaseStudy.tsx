import { getTranslations } from "next-intl/server";
import { SectionHeading } from "@/common/section-header/components/SectionHeading";
import { SectionWrapper } from "@/common/section-wrapper/components/SectionWrapper";
import { Button } from "@/common/call-to-actions/components/Button";
import { BeforeAfterSlider } from "@/features/projects/components/molecules/BeforeAfterSlider";
import { CaseStudyList } from "@/features/projects/components/molecules/CaseStudyList";
import { caseStudyData } from "@/data/sections/case-study";
import { Container } from "@/common/container/components/Container";

const { images, ctaHref, cards } = caseStudyData;

export const CaseStudy = async () => {
  const t = await getTranslations("projects-page.caseStudy");

  /* before/after: src from data, label + alt from i18n */
  const before = { src: images.before, label: t("images.before.label"), alt: t("images.before.alt") };
  const after = { src: images.after, label: t("images.after.label"), alt: t("images.after.alt") };

  /* cards: icon from data, text by key */
  const cardItems = cards.map((card) => ({
    key: card.key,
    icon: card.icon,
    title: t(`cards.${card.key}.title`),
    description: t(`cards.${card.key}.description`),
  }));

  return (
    <SectionWrapper>
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

          <div className="grid items-stretch gap-9 lg:grid-cols-[1.4fr_1fr]">
            <BeforeAfterSlider before={before} after={after} compareLabel={t("compareLabel")} />
            <CaseStudyList cards={cardItems} />
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
};
