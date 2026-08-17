import { getTranslations } from "next-intl/server";
import { SectionWrapper } from "@/common/section-wrapper/components/SectionWrapper";
import { Media } from "@/common/media/components/Media";
import { YearsBadge } from "@/shared-sections/about/components/molecules/YearsBadge";
import { ContactCard } from "@/shared-sections/about/components/molecules/ContactCard";
import { IncludedPanel } from "@/features/service-detail/components/molecules/IncludedPanel";
import { aboutData } from "@/data/sections/about";
import { servicesData } from "@/data/sections/services";
import { Container } from "@/common/container/components/Container";
import type { ServiceOverviewProps } from "@/features/service-detail/types";

/* brand chrome borrowed from about (single source) */
const { years, call } = aboutData;

export const ServiceOverview = async ({ serviceKey, tone = "base" }: ServiceOverviewProps) => {
  const item = servicesData.items.find((entry) => entry.key === serviceKey);
  if (!item) return null;

  const t = await getTranslations("service-detail");
  const ts = await getTranslations("service");
  const ta = await getTranslations("about");
  /* per-service checklists */
  const included = t.raw(`items.${item.key}.included`) as string[];
  const ideal = t.raw(`items.${item.key}.ideal`) as string[];

  return (
    <SectionWrapper id="service-detail" tone={tone}>
      <Container>
        <div className="grid gap-19">
          {/* Image side with badge + contact overlays */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <Media
                src={item.image}
                alt={ts(`items.${item.key}.title`)}
                shape="feature"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* badge overhangs the top-right corner */}
            <div className="absolute top-7 -right-3">
              <YearsBadge
                value={years.value}
                line1={ta(`years.${years.key}.line1`)}
                line2={ta(`years.${years.key}.line2`)}
              />
            </div>

            {/* card straddles the image's bottom edge */}
            <div className="absolute bottom-0 left-6 translate-y-1/2">
              <ContactCard label={ta(call.key)} phone={call.number} />
            </div>
          </div>

          {/* Two panels side by side: what's included, then ideal for */}
          <div className="grid gap-6 lg:grid-cols-2">
            <IncludedPanel
              icon="hammer"
              title={t("includedTitle")}
              description={t("includedDescription")}
              items={included}
            />
            <IncludedPanel
              icon="target"
              title={t("idealTitle")}
              description={t("idealDescription")}
              items={ideal}
            />
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
};
