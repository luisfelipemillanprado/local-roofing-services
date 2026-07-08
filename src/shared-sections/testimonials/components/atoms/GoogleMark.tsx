import Image from "next/image";
import { blurs } from "@/data/blurs";
import { testimonialsData } from "@/data/sections/testimonials";

const { google } = testimonialsData;

/* Google logo for the rating badge and card footer */
export const GoogleMark = () => (
  <span className="relative size-6">
    <Image
      src={google}
      alt=""
      fill
      sizes="24px"
      placeholder="blur"
      blurDataURL={blurs.logo}
      className="object-contain"
    />
  </span>
);
