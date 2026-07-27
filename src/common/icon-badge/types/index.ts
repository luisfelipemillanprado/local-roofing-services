export type IconBadgeKey =
  | "droplets"
  | "energy"
  | "layers"
  | "home"
  | "sun"
  | "wrench"
  | "clipboard"
  | "document"
  | "hammer"
  | "shield"
  | "award"
  | "hardhat"
  | "handshake"
  | "users"
  | "phone"
  | "idea"
  | "star"
  | "building"
  | "factory"
  | "alert"
  | "target"
  | "square";

export type IconBadgeSize = "stat" | "card" | "feature";
export type IconBadgeTone = "muted" | "solid" | "panel";

export interface IconBadgeProps {
  icon: IconBadgeKey;
  size: IconBadgeSize;
  tone: IconBadgeTone;
  shadow?: boolean;
}
