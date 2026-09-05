import {
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
  Star,
  AlertTriangle,
  Target,
  CalendarPlus,
  RotateCwFadingClock,
  CircleCheck,
  BadgeCheck,
  BanknoteCheck,
  Gem,
  BadgeDollarSign,
  type LucideIcon,
} from "lucide-react";
import type { IconBadgeKey, IconBadgeProps, IconBadgeSize, IconBadgeTone } from "@/common/icon-badge/types";

/* semantic key → icon component */
const ICONS: Record<IconBadgeKey, LucideIcon> = {
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
  star: Star,
  alert: AlertTriangle,
  target: Target,
  calendar: CalendarPlus,
  clockRotate: RotateCwFadingClock,
  check: CircleCheck,
  badgeCheck: BadgeCheck,
  banknote: BanknoteCheck,
  gem: Gem,
  dollar: BadgeDollarSign,
};

/* chip box size per tier */
const chips: Record<IconBadgeSize, string> = {
  stat: "size-12" /* 48px — why-choose stats */,
  feature: "size-14" /* 56px — process, values, why-choose, case study */,
};

/* inner icon size per tier */
const iconSizes: Record<IconBadgeSize, string> = {
  stat: "size-5",
  feature: "size-7",
};

/* chip background per tone */
const tones: Record<IconBadgeTone, string> = {
  muted: "bg-surface-muted" /* default on light cards */,
  panel: "bg-surface-panel" /* stat rows */,
};

export const IconBadge = ({ icon, size, tone }: IconBadgeProps) => {
  const Icon = ICONS[icon];
  return (
    <span className={`grid place-items-center rounded-badge ${chips[size]} ${tones[tone]}`}>
      <Icon className={`${iconSizes[size]} text-primary`} />
    </span>
  );
};
