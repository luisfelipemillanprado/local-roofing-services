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
  AlertTriangle,
  type LucideIcon,
} from "lucide-react";
import type { IconBadgeKey, IconBadgeProps, IconBadgeSize, IconBadgeTone } from "@/common/icon-badge/types";

/* Semantic key → icon component */
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
  alert: AlertTriangle,
};

/* Chip box size per tier */
const chips: Record<IconBadgeSize, string> = {
  stat: "size-11.5" /* 46px — why-choose stats */,
  card: "size-12" /* 48px — service cards */,
  feature: "size-14" /* 56px — process, values, why-choose, pricing, case study */,
};

/* Inner icon size per tier. */
const iconSizes: Record<IconBadgeSize, string> = {
  stat: "size-5",
  card: "size-6",
  feature: "size-7",
};

/* Chip background + icon color per tone. */
const tones: Record<IconBadgeTone, { chip: string; icon: string }> = {
  muted: { chip: "bg-surface-muted", icon: "text-primary" } /* default on light cards */,
  solid: { chip: "bg-primary", icon: "text-white" } /* emphasis / highlighted */,
  panel: { chip: "bg-surface-panel", icon: "text-primary" } /* non-highlighted pricing plans */,
};

export const IconBadge = ({ icon, size, tone, shadow = false }: IconBadgeProps) => {
  const Icon = ICONS[icon];
  return (
    <span
      className={`grid place-items-center rounded-2xl ${chips[size]} ${tones[tone].chip} ${shadow ? "shadow-lg" : ""}`}
    >
      <Icon className={`${iconSizes[size]} ${tones[tone].icon}`} />
    </span>
  );
};
