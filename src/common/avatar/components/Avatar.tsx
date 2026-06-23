import Image from "next/image";
import { blurs } from "@/data/blurs";
import type { AvatarProps } from "@/common/avatar/types";

/* Circular 44px avatar with blur (hero rating stack). */
export const Avatar = ({ src, alt, bordered = false }: AvatarProps) => (
  <span
    className={`relative size-11 shrink-0 overflow-hidden rounded-full ${bordered ? "border border-contrast" : ""}`}
  >
    <Image
      src={src}
      alt={alt}
      fill
      sizes="44px"
      placeholder="blur"
      blurDataURL={blurs.avatar}
      className="object-cover"
    />
  </span>
);
