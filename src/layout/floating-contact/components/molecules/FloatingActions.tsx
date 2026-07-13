import type { ComponentType, SVGProps } from "react";
import { Phone } from "lucide-react";
import { SiWhatsapp } from "@icons-pack/react-simple-icons";
import { PulseRing } from "@/common/animations/components/PulseRing";
import type { FloatingActionKey, FloatingActionsProps } from "@/layout/floating-contact/types";

/* semantic key → icon component */
const ICONS: Record<FloatingActionKey, ComponentType<SVGProps<SVGSVGElement>>> = {
  whatsapp: SiWhatsapp,
  call: Phone,
};

export const FloatingActions = ({ actions }: FloatingActionsProps) => (
  <div className="grid gap-4">
    {actions.map(({ key, href, label, external }) => {
      const Icon = ICONS[key];
      /* color/bg inline by key — two fixed actions, a Record is overkill */
      return (
        <a
          key={key}
          href={href}
          aria-label={label}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          className={`relative isolate grid size-14 place-items-center rounded-2xl shadow-sm ${
            key === "whatsapp" ? "bg-malachite" : "bg-primary"
          }`}
        >
          <PulseRing color={key === "whatsapp" ? "malachite" : "primary"} />
          <Icon className="size-7 animate-tada text-primary-foreground" aria-hidden />
        </a>
      );
    })}
  </div>
);
