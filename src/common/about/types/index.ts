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
