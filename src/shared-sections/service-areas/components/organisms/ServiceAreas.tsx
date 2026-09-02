import { getTranslations } from "next-intl/server";
import { SectionWrapper } from "@/common/section-wrapper/components/SectionWrapper";
import { SectionHeading } from "@/common/section-header/components/SectionHeading";
import { Button } from "@/common/call-to-actions/components/Button";
import { Container } from "@/common/container/components/Container";
import { AreaList } from "@/shared-sections/service-areas/components/molecules/AreaList";
import { serviceAreasData } from "@/data/shared-sections/service-areas";
import type { ServiceAreasProps } from "@/shared-sections/service-areas/types";

const { ctaHref, areas } = serviceAreasData;

export const ServiceAreas = async ({ tone = "base" }: ServiceAreasProps) => {
  const t = await getTranslations("service-area");

  return (
    <SectionWrapper id="service-areas" tone={tone}>
      <Container>
        <div className="grid gap-13">
          <div className="grid justify-items-center gap-6 md:mr-5 md:grid-cols-[1fr_auto] md:items-center md:justify-items-stretch md:gap-x-6">
            <SectionHeading
              align="center"
              flushFrom="md"
              eyebrow={t("eyebrow")}
              title={t("titleLead")}
              accent={t("titleAccent")}
              description={t("description")}
            />
            <div className="mt-2 md:mt-0">
              <Button href={ctaHref.href} variant="secondary" pulse>
                {t(ctaHref.key)}
              </Button>
            </div>
          </div>

          <AreaList areas={areas} />
        </div>
      </Container>
    </SectionWrapper>
  );
};
