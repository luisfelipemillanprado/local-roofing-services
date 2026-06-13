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
  Sun,
} from "lucide-react";

/* Shared, locale-independent image URLs (remote sections still on Unsplash) */
export const IMG = {
  blog1: "https://images.unsplash.com/photo-1635424710928-0544e8512eae?auto=format&fit=crop&w=800&q=80",
  blog2: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80",
} as const;

/* Metadata aligned by index with the translated lists in messages/*.json */

export const serviceMeta: { icon: LucideIcon; image: string }[] = [
  { icon: Droplets, image: "/images/services/service1.webp" },
  { icon: Zap, image: "/images/services/service2.webp" },
  { icon: Layers, image: "/images/services/service3.webp" },
  { icon: Home, image: "/images/services/service4.webp" },
  { icon: Sun, image: "/images/services/service5.webp" },
  { icon: Wrench, image: "/images/services/service6.webp" },
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
  { image: "/images/projects/project1.webp" },
  { image: "/images/projects/project2.webp" },
  { image: "/images/projects/project3.webp" },
  { image: "/images/projects/project4.webp" },
  { image: "/images/projects/project5.webp" },
  { image: "/images/projects/project6.webp" },
  { image: "/images/projects/project7.webp" },
  { image: "/images/projects/project8.webp" },
  { image: "/images/projects/project9.webp" },
];

export const teamMeta: { image: string }[] = [
  { image: "/images/team/team1.webp" },
  { image: "/images/team/team2.webp" },
  { image: "/images/team/team3.webp" },
  { image: "/images/team/team4.webp" },
  { image: "/images/team/team5.webp" },
  { image: "/images/team/team6.webp" },
];

export const testimonialMeta: { avatar: string; rating: number }[] = [
  { avatar: "/images/avatars/avatar1.webp", rating: 5 },
  { avatar: "/images/avatars/avatar2.webp", rating: 5 },
  { avatar: "/images/avatars/avatar3.webp", rating: 5 },
  { avatar: "/images/avatars/avatar4.webp", rating: 5 },
  { avatar: "/images/avatars/avatar5.webp", rating: 5 },
  { avatar: "/images/avatars/avatar6.webp", rating: 5 },
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
