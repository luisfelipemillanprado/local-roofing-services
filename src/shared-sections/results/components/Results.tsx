import { getTranslations } from "next-intl/server";
import { SectionHeading } from "@/common/section-header/components/SectionHeading";
import { SectionWrapper } from "@/common/section-wrapper/components/SectionWrapper";
import { Container } from "@/common/container/components/Container";
import { Button } from "@/common/call-to-actions/components/Button";
import { MosaicViewerGrid } from "@/common/mosaic/components/MosaicViewerGrid";
import { resultsData } from "@/data/shared-sections/results";
import type { ResultsProps } from "@/shared-sections/results/types";

const { heading, ctaHref, items, viewer } = resultsData;

/* finished jobs that show how one material looks once installed */
export const Results = async ({ category, tone = "base", limit }: ResultsProps) => {
  const t = await getTranslations("result");
  const pool = items.filter((item) => item.categories.some((material) => material === category));
  /* data: order + image; text by key */
  const cards = pool.slice(0, limit).map((item) => ({
    key: item.key,
    image: item.image,
    title: t(`items.${item.key}.title`),
    description: t(`items.${item.key}.description`),
  }));

  return (
    <SectionWrapper id="results" tone={tone}>
      <Container>
        <div className="grid gap-13">
          <div className="grid justify-items-center gap-6 md:max-xl:mr-5 md:max-xl:grid-cols-[1fr_auto] md:max-xl:items-center md:max-xl:justify-items-stretch md:max-xl:gap-x-6">
            <SectionHeading
              align="center"
              flushFrom="md"
              eyebrow={t(heading.eyebrow)}
              title={t(heading.titleLead)}
              accent={t(heading.titleAccent)}
              description={t(heading.description)}
            />
            <div className="mt-2 md:max-xl:mt-0">
              <Button href={ctaHref.href} variant="secondary" pulse>
                {t(ctaHref.key)}
              </Button>
            </div>
          </div>

          <MosaicViewerGrid
            cards={cards}
            actionLabel={t("action.viewImage")}
            closeLabel={t(viewer.close)}
            previousLabel={t(viewer.previous)}
            nextLabel={t(viewer.next)}
          />
        </div>
      </Container>
    </SectionWrapper>
  );
};
