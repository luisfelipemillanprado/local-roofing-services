import Image from "next/image";
import { blurs } from "@/data/blurs";
import type { GoogleMarkProps } from "@/shared-sections/testimonials/types";

/* Google logo for the rating badge and card footer */
export const GoogleMark = ({ src }: GoogleMarkProps) => (
  <span className="relative size-6">
    <Image
      src={src}
      alt="Google"
      fill
      sizes="24px"
      placeholder="blur"
      blurDataURL={blurs.logo}
      className="object-contain"
    />
  </span>
);
