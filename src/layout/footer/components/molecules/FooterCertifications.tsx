import Image from "next/image";
import { blurs } from "@/data/blurs";
import type { FooterCertificationsProps } from "@/layout/footer/types";

/* trust badge row: certification logos, image only and non-interactive */
export const FooterCertifications = ({ items }: FooterCertificationsProps) => (
  <div className="grid grid-flow-col justify-start gap-3">
    {items.map(({ key, label, image }) => (
      <span key={key} className="relative size-15">
        <Image
          src={image}
          alt={label}
          fill
          sizes="60px"
          placeholder="blur"
          blurDataURL={blurs.logo}
          className="object-contain"
        />
      </span>
    ))}
  </div>
);
