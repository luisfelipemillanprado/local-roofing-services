export interface AboutProps {
  variant: "learnMore" | "contact";
}

export interface YearsBadgeProps {
  value: string;
  line1: string;
  line2: string;
}

export interface ContactCardProps {
  label: string;
  phone: string;
}

export interface StatItem {
  key: string;
  value: string;
  label: string;
}

export interface StatsRowProps {
  items: StatItem[];
}

export interface SellingPointItem {
  key: string;
  text: string;
}

export interface SellingPointsProps {
  items: SellingPointItem[];
}
