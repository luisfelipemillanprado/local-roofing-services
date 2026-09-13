import { Media } from "@/common/media/components/Media";
import { Text } from "@/common/text/components/Text";
import { ArrowLink } from "@/common/call-to-actions/components/ArrowLink";
import type { HeroMaterialCardProps } from "@/shared-sections/page-header/types";

/* fan placement per card index: size, tilt, overlap and reveal breakpoint (central shows first) */
const positions: Record<number, string> = {
  0: "hidden xl:block h-68 w-64 -rotate-6 mt-6 -mr-14 z-10",
  1: "h-72 w-68 -rotate-3 mt-12 z-30",
  2: "hidden 2xl:block h-68 w-64 rotate-6 -ml-14 z-20",
};

/* full bleed image tile: badge on top, description on the bottom scrim; central card links out */
export const HeroMaterialCard = ({ item, position, href, linkAria }: HeroMaterialCardProps) => (
  <article
    className={`group relative shrink-0 overflow-hidden rounded-card border border-line shadow-md ${positions[position]}`}
  >
    <Media src={item.image} alt={item.imageAlt} shape="fill" sizes="272px" />
    <div className="pointer-events-none absolute inset-0 overlay-card-bottom" />
    <div className="absolute inset-x-0 top-0 p-3">
      <span className="inline-grid grid-flow-col items-center gap-2 rounded-badge border border-white/20 bg-contrast/70 px-2.5 py-1">
        <span className="size-1.5 rounded-full bg-primary" aria-hidden />
        <Text
          as="span"
          size="label"
          tone="white"
          weight="semibold"
          tracking="wide"
          truncate
          text={item.eyebrow}
        />
      </span>
    </div>
    <div className={`absolute inset-x-0 bottom-0 grid p-4 ${item.linked ? "pr-16" : ""}`}>
      <Text as="p" size="body" weight="semibold" tone="white" text={item.specs} />
    </div>
    {item.linked && (
      <div className="absolute right-4 bottom-4">
        <ArrowLink href={href} label={linkAria} pulse />
      </div>
    )}
  </article>
);
