import { ClipboardCheck, FileText, Hammer, ShieldCheck, type LucideIcon } from "lucide-react";

/** Keys map to `services-page.process.steps.<key>` (literal union → type-safe `t()`). */
export type ProcessStepKey = "inspection" | "quote" | "installation" | "warranty";

export const processSection: { steps: { key: ProcessStepKey; icon: LucideIcon }[] } = {
  steps: [
    { key: "inspection", icon: ClipboardCheck },
    { key: "quote", icon: FileText },
    { key: "installation", icon: Hammer },
    { key: "warranty", icon: ShieldCheck },
  ],
};
