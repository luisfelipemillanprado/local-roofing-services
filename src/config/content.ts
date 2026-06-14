/**
 * Locale-independent presentation data for the Roofpro landing page.
 *
 * All translatable copy lives in `messages/{locale}.json` and is read through
 * next-intl. The non-serialisable bits — Lucide icon components, image URLs and
 * structural flags — stay here in code and are merged by index with the
 * translated lists at render time.
 *
 * NOTE: Shared sections (services, projects, team, reviews) have migrated to
 * `src/data/sections/*` with semantic keys. What remains here are the
 * page-specific lists still pending that migration.
 */
import type { LucideIcon } from "lucide-react";
import {
  ShieldCheck,
  PhoneCall,
  Lightbulb,
  Award,
  Hammer,
  Wrench,
  Home,
  Building2,
  CloudRain,
  ClipboardCheck,
  FileText,
  HardHat,
  Handshake,
  Users,
  Star,
} from "lucide-react";

/* Shared, locale-independent image URLs (remote sections still on Unsplash) */
export const IMG = {
  blog1: "https://images.unsplash.com/photo-1635424710928-0544e8512eae?auto=format&fit=crop&w=800&q=80",
  blog2: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80",
} as const;

/* Metadata aligned by index with the translated lists in messages/*.json */

export const featureMeta: { icon: LucideIcon }[] = [
  { icon: PhoneCall },
  { icon: Lightbulb },
  { icon: ShieldCheck },
  { icon: Award },
];

export const whyStatMeta: { icon: LucideIcon }[] = [
  { icon: Award },
  { icon: Hammer },
  { icon: Wrench },
];

export const pricingMeta: { icon: LucideIcon; highlighted?: boolean }[] = [
  { icon: Home },
  { icon: Building2, highlighted: true },
];

export const postMeta: { image: string }[] = [
  { image: IMG.blog1 },
  { image: IMG.blog2 },
];

export const featureRotatorMeta: { icon: LucideIcon }[] = [
  { icon: CloudRain },
  { icon: ShieldCheck },
  { icon: Award },
  { icon: Hammer },
  { icon: Wrench },
];

/* Services page — "How we work" steps */
export const processMeta: { icon: LucideIcon }[] = [
  { icon: ClipboardCheck },
  { icon: FileText },
  { icon: Hammer },
  { icon: ShieldCheck },
];

/* About page — company values */
export const valuesMeta: { icon: LucideIcon }[] = [
  { icon: Award },
  { icon: HardHat },
  { icon: Handshake },
  { icon: Users },
];

/* Projects page — "by the numbers" band */
export const projectStatsMeta: { icon: LucideIcon }[] = [
  { icon: Hammer },
  { icon: Award },
  { icon: Star },
  { icon: Users },
];
