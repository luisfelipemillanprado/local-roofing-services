import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { EmailForm } from "@/shared-sections/contact/components/molecules/EmailForm";
import { SectionHeading } from "@/common/section-header/components/SectionHeading";
import { SectionWrapper } from "@/common/section-wrapper/components/SectionWrapper";
import { contactData } from "@/data/shared-sections/contact";
import { blurs } from "@/data/blurs";
import type { ContactProps } from "@/shared-sections/contact/types";
import { Container } from "@/common/container/components/Container";

const { heading, image, cta, input } = contactData;

export const Contact = async ({ tone = "base" }: ContactProps) => {
  const t = await getTranslations("contact");

  return (
    <SectionWrapper id="contact" tone={tone}>
      <Container>
        <div className="theme-dark relative isolate overflow-hidden rounded-card border border-line bg-contrast px-5 py-12 sm:p-10">
          {/* background: image + hero scrims (side + bottom) */}
          <div className="absolute inset-0 z-(--z-behind)">
            <Image
              src={image}
              alt={t("imageAlt")}
              fill
              sizes="100vw"
              placeholder="blur"
              blurDataURL={blurs.image}
              className="object-cover"
            />
            <div className="absolute inset-0 overlay-hero-side" />
            <div className="absolute inset-0 overlay-hero-bottom" />
          </div>

          <div className="grid max-w-2xl gap-8">
            <SectionHeading
              size="banner"
              align="left"
              eyebrow={t(heading.eyebrow)}
              title={t(heading.titleLead)}
              accent={t(heading.titleAccent)}
              description={t(heading.description)}
            />
            <EmailForm
              emailLabel={t(input.label)}
              emailPlaceholder={t(input.placeholder)}
              submitLabel={t(cta.key)}
              sendingLabel={t(cta.sendingKey)}
              sentLabel={t(cta.sentKey)}
              errorLabel={t(cta.errorKey)}
            />
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
};
