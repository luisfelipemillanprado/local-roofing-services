import { Logo } from "@/common/logo/components/Logo";
import { Socials } from "@/common/social/components/Socials";
import { Text } from "@/common/text/components/Text";
import { FooterCertifications } from "@/layout/footer/components/molecules/FooterCertifications";
import type { FooterBrandProps } from "@/layout/footer/types";

/* brand column: logo, description, social profiles and certification badges */
export const FooterBrand = ({ description, socials, certifications }: FooterBrandProps) => (
  <div className="grid content-start justify-items-center gap-5 text-center sm:justify-items-start sm:text-left">
    <Logo />
    <div className="max-w-xs">
      <Text size="lead" tone="muted" text={description} />
    </div>
    <div className="mt-1">
      <Socials items={socials} />
    </div>
    <FooterCertifications items={certifications} />
  </div>
);
