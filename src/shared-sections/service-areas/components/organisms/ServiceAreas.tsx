import { getTranslations } from "next-intl/server";
import { SectionWrapper } from "@/common/section-wrapper/components/SectionWrapper";
import { SectionHeading } from "@/common/section-header/components/SectionHeading";
import { Button } from "@/common/call-to-actions/components/Button";
import { Container } from "@/common/container/components/Container";
import { Media } from "@/common/media/components/Media";
import { AreaList } from "@/shared-sections/service-areas/components/molecules/AreaList";
import { OfficeViewerGrid } from "@/shared-sections/service-areas/components/molecules/OfficeViewerGrid";
import { serviceAreasData } from "@/data/shared-sections/service-areas";
import { company } from "@/data/site";
import type { ServiceAreasProps } from "@/shared-sections/service-areas/types";

const { ctaHref, areas, officeImages, mapImage } = serviceAreasData;

export const ServiceAreas = async ({ tone = "base", variant = "coverage" }: ServiceAreasProps) => {
  const t = await getTranslations("service-area");
  /* office facts from company; name over address on the tile, photo linked by key */
  const officeCards = company.offices.map((office) => ({
    key: office.key,
    image: officeImages.find((item) => item.key === office.key)!.image,
    title: office.name,
    description: office.address,
  }));

  return (
    <SectionWrapper id="service-areas" tone={tone}>
      <Container>
        <div className="grid gap-13">
          <div className="grid justify-items-center gap-6 md:max-xl:mr-5 md:max-xl:grid-cols-[1fr_auto] md:max-xl:items-center md:max-xl:justify-items-stretch md:max-xl:gap-x-6">
            <SectionHeading
              align="center"
              flushFrom="md"
              eyebrow={t("eyebrow")}
              title={t("titleLead")}
              accent={t("titleAccent")}
              description={t("description")}
            />
            <div className="mt-2 md:max-xl:mt-0">
              <Button href={ctaHref.href} variant="secondary" pulse>
                {t(ctaHref.key)}
              </Button>
            </div>
          </div>

          {/* /areas only: branch offices + a locations map above the coverage list */}
          {variant === "full" && (
            <div className="grid gap-6">
              <OfficeViewerGrid
                cards={officeCards}
                actionLabel={t("action.viewImage")}
                closeLabel={t("action.close")}
                previousLabel={t("action.previous")}
                nextLabel={t("action.next")}
              />
              <div className="relative aspect-2/1 w-full overflow-hidden rounded-panel border border-line shadow-md">
                <Media src={mapImage} alt={t("mapAlt")} shape="fill" sizes="100vw" />
              </div>
            </div>
          )}

          <AreaList areas={areas} />
        </div>
      </Container>
    </SectionWrapper>
  );
};
