import type { IconBadgeKey } from "@/common/icon-badge/types";
import type { servicesData } from "@/data/shared-sections/services";

type SectionTone = "base" | "muted" /* section surface; keeps page section alternation correct */;

/* every service slug key */
type ServiceDetailKey = (typeof servicesData.items)[number]["key"];

/* resolved checklist panel: icon + title + description over text items */
export interface IncludedPanelProps {
  icon: IconBadgeKey;
  title: string;
  description: string;
  items: string[];
}

/* numbered process: heading + shared four steps */
export interface ServiceProcessProps {
  serviceKey: ServiceDetailKey;
  tone?: SectionTone;
}

/* service overview: per-service image + checklist, heading/stats/chrome from about */
export interface ServiceOverviewProps {
  serviceKey: ServiceDetailKey;
  tone?: SectionTone;
}
