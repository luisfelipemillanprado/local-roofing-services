export type IconBadgeKey =
  | "wrench"
  | "clipboard"
  | "document"
  | "notebookPen"
  | "listTodo"
  | "hammer"
  | "shield"
  | "award"
  | "hardhat"
  | "handshake"
  | "thumbsUp"
  | "users"
  | "phone"
  | "star"
  | "alert"
  | "target"
  | "calendar"
  | "clockRotate"
  | "check"
  | "badgeCheck"
  | "banknote"
  | "layers"
  | "gem"
  | "dollar";

export type IconBadgeSize = "stat" | "feature";
export type IconBadgeTone = "muted" | "panel";

export interface IconBadgeProps {
  icon: IconBadgeKey;
  size: IconBadgeSize;
  tone: IconBadgeTone;
}
