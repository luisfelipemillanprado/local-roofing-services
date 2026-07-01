import { Phone } from "lucide-react";
import { Text } from "@/common/text/components/Text";
import type { ContactCardProps } from "@/shared-sections/about/types";

/* About contact card: phone icon + label + number. */
export const ContactCard = ({ label, phone }: ContactCardProps) => (
  <div className="theme-dark grid grid-flow-col items-center gap-3 rounded-2xl bg-contrast px-5 py-4 shadow-lg">
    <span className="grid size-11 place-items-center rounded-full bg-primary">
      <Phone className="size-5 text-white" />
    </span>
    <div className="grid gap-1.5">
      <Text as="p" size="note" tone="muted" weight="semibold" text={label} />
      <Text as="p" size="caption" tone="default" weight="bold" text={phone} />
    </div>
  </div>
);
