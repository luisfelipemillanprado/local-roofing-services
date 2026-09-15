import { getTranslations } from "next-intl/server";
import { SectionWrapper } from "@/common/section-wrapper/components/SectionWrapper";
import { SectionHeading } from "@/common/section-header/components/SectionHeading";
import { Button } from "@/common/call-to-actions/components/Button";
import { Container } from "@/common/container/components/Container";
import { OfficeViewerGrid } from "@/shared-sections/service-areas/components/molecules/OfficeViewerGrid";
import { OfficeMap } from "@/shared-sections/service-areas/components/molecules/OfficeMap";
import { serviceAreasData } from "@/data/shared-sections/service-areas";
import { company } from "@/data/site";
import type { ServiceAreasProps } from "@/shared-sections/service-areas/types";

const { heading, ctaHref, viewer, officeImages, map } = serviceAreasData;

export const ServiceAreas = async ({ tone = "base" }: ServiceAreasProps) => {
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

          {/* branch offices bento with the interactive Miami map between its two groups */}
          <OfficeViewerGrid
            cards={officeCards}
            map={
              <OfficeMap
                styleUrl={map.styleUrl}
                view={map.view}
                limit={map.limit}
                offices={company.offices}
                labels={{
                  region: t(map.labels.region, { name: company.name }),
                  zoomIn: t(map.labels.zoomIn),
                  zoomOut: t(map.labels.zoomOut),
                  closePopup: t(map.labels.closePopup),
                  toggleAttribution: t(map.labels.toggleAttribution),
                }}
              />
            }
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
