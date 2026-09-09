import { HeroMaterialCard } from "@/shared-sections/page-header/components/molecules/HeroMaterialCard";
import type { HeroMaterialCardsProps } from "@/shared-sections/page-header/types";

/* right aligned overlapping fan; cards reveal by breakpoint so the row auto sizes */
export const HeroMaterialCards = ({ items, href, linkAria }: HeroMaterialCardsProps) => (
  <div className="flex items-start justify-end">
    {items.map((item, position) => (
      <HeroMaterialCard key={item.key} item={item} position={position} href={href} linkAria={linkAria} />
    ))}
  </div>
);
