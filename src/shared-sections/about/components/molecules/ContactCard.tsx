import { Phone } from "lucide-react";
import { Text } from "@/common/text/components/Text";
import type { ContactCardProps } from "@/shared-sections/about/types";

/* About contact card: phone icon + label + number */
export const ContactCard = ({ label, phone }: ContactCardProps) => (
  <div className="theme-dark grid grid-flow-col items-center justify-start gap-3 rounded-card bg-contrast px-5 py-4 shadow-lg">
    <span className="grid size-11 place-items-center rounded-full bg-primary">
      <Phone className="size-5 text-white" aria-hidden />
    </span>
    <div className="grid gap-1.5">
      <Text as="p" size="caption" tone="muted" weight="semibold" tracking="subtle" text={label} />
      <Text as="p" size="body" tone="default" weight="bold" tracking="subtle" text={phone} />
    </div>
  </div>
);
