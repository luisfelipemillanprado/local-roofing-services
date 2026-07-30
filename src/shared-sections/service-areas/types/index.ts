type SectionTone = "base" | "muted" /* section surface; keeps page section alternation correct */;

/* shared section: same area list on every page, only the surface tone varies */
export interface ServiceAreasProps {
  tone?: SectionTone;
}

/* one covered place: city over county, both literal data */
export interface AreaCardProps {
  name: string;
  county: string;
}

/* resolved list item: card fields plus the React key */
interface AreaItem extends AreaCardProps {
  key: string;
}

export interface AreaListProps {
  areas: readonly AreaItem[];
}
