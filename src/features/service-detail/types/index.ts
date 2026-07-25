import type { servicesData } from "@/data/sections/services";

type SectionTone = "base" | "muted" /* section surface; keeps page section alternation correct */;

/* every service slug key */
export type ServiceDetailKey = (typeof servicesData.items)[number]["key"];

/* what's included + ideal for: two checklist panels */
export interface ServiceIncludedProps {
  serviceKey: ServiceDetailKey;
  tone?: SectionTone;
}

/* numbered process: heading + shared four steps */
export interface ServiceProcessProps {
  serviceKey: ServiceDetailKey;
  tone?: SectionTone;
}

/* resolved checklist panel: title + text items */
export interface IncludedPanelProps {
  title: string;
  items: string[];
}
