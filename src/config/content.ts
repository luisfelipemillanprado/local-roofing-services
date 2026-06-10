/**
 * Locale-independent presentation data for the Roofpro landing page.
 *
 * All translatable copy lives in `messages/{locale}.json` and is read through
 * next-intl. The non-serialisable bits — Lucide icon components, image URLs and
 * structural flags — stay here in code and are merged by index with the
 * translated lists at render time.
 */
import type { LucideIcon } from "lucide-react";
import {
  ShieldCheck,
  Zap,
  Layers,
  PhoneCall,
  Lightbulb,
  Award,
  Hammer,
  Wrench,
  Home,
  Building2,
  Droplets,
  CloudRain,
  ClipboardCheck,
  FileText,
  HardHat,
  Handshake,
  Users,
  Star,
} from "lucide-react";

/* Shared, locale-independent image URLs */
export const IMG = {
  hero: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=2000&q=80",
  about: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80",
  cta: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2000&q=80",
  serviceGutter: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=900&q=80",
  serviceEnergy: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=900&q=80",
  serviceFlat: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80",
  project1: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1000&q=80",
  projectWide: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?auto=format&fit=crop&w=1400&q=80",
  project2: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1000&q=80",
  project3: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1000&q=80",
  team1: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&crop=faces&w=600&q=80",
  team2: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&crop=faces&w=600&q=80",
  team3: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&crop=faces&w=600&q=80",
  avatar1: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&crop=faces&w=150&q=80",
  avatar2: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&crop=faces&w=150&q=80",
  avatar3: "https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&crop=faces&w=150&q=80",
  blog1: "https://images.unsplash.com/photo-1635424710928-0544e8512eae?auto=format&fit=crop&w=800&q=80",
  blog2: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80",
} as const;

/* Metadata aligned by index with the translated lists in messages/*.json */

export const serviceMeta: { icon: LucideIcon; image: string }[] = [
  { icon: Droplets, image: IMG.serviceGutter },
  { icon: Zap, image: IMG.serviceEnergy },
  { icon: Layers, image: IMG.serviceFlat },
];

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

export const projectMeta: { image: string }[] = [
  { image: IMG.project1 },
  { image: IMG.projectWide },
  { image: IMG.project2 },
  { image: IMG.project3 },
];

export const teamMeta: { image: string }[] = [
  { image: IMG.team1 },
  { image: IMG.team2 },
  { image: IMG.team3 },
];

export const testimonialMeta: { avatar: string; rating: number }[] = [
  { avatar: IMG.avatar1, rating: 5 },
  { avatar: IMG.avatar2, rating: 5 },
  { avatar: IMG.avatar3, rating: 5 },
];

export const couponMeta: { highlighted?: boolean }[] = [
  {},
  { highlighted: true },
  {},
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
