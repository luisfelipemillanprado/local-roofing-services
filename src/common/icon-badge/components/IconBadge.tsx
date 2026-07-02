import {
  Droplets,
  Zap,
  Layers,
  Home,
  Sun,
  Wrench,
  ClipboardCheck,
  FileText,
  Hammer,
  ShieldCheck,
  Award,
  HardHat,
  Handshake,
  Users,
  PhoneCall,
  Lightbulb,
  Star,
  Building2,
  Factory,
  type LucideIcon,
} from "lucide-react";
import type { IconBadgeKey, IconBadgeProps, IconBadgeSize, IconBadgeTone } from "@/common/icon-badge/types";

/* Semantic key → icon component (same pattern as the navbar). */
const ICONS: Record<IconBadgeKey, LucideIcon> = {
  droplets: Droplets,
  energy: Zap,
  layers: Layers,
  home: Home,
  sun: Sun,
  wrench: Wrench,
  clipboard: ClipboardCheck,
  document: FileText,
  hammer: Hammer,
  shield: ShieldCheck,
  award: Award,
  hardhat: HardHat,
  handshake: Handshake,
  users: Users,
  phone: PhoneCall,
  idea: Lightbulb,
  star: Star,
  building: Building2,
  factory: Factory,
};

/* Chip box + radius per tier. */
const chips: Record<IconBadgeSize, string> = {
  stat: "size-11 rounded-xl" /* 44px — why-choose stats */,
  card: "size-12 rounded-2xl" /* 48px — service cards */,
  feature: "size-14 rounded-2xl" /* 56px — process, values, stats, why-choose, pricing */,
};

/* Inner icon size per tier. */
const iconSizes: Record<IconBadgeSize, string> = {
  stat: "size-5",
  card: "size-6",
  feature: "size-7",
};

/* Background + foreground pairs. */
const tones: Record<IconBadgeTone, string> = {
  muted: "bg-surface-muted text-primary" /* default on light cards */,
  solid: "bg-primary text-white" /* emphasis / highlighted */,
  panel: "bg-surface-panel text-primary" /* resting state of group cards */,
};

/* Card-hover color shift (badge sits inside a group card). */
const hoverClass = "transition-colors group-hover:bg-primary group-hover:text-white";

/* Optional drop shadow (badge floats over imagery). */
const shadowClass = "shadow-lg";

export const IconBadge = ({ icon, size, tone, hover = false, shadow = false }: IconBadgeProps) => {
  const Icon = ICONS[icon];
  return (
    <span
      className={`grid place-items-center ${chips[size]} ${tones[tone]}${hover ? ` ${hoverClass}` : ""}${shadow ? ` ${shadowClass}` : ""}`}
    >
      <Icon className={iconSizes[size]} />
    </span>
  );
};
