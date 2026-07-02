import type { ComponentType, SVGProps } from "react";
import { Phone } from "lucide-react";
import { SiWhatsapp } from "@icons-pack/react-simple-icons";
import clsx from "clsx";
import { getTranslations } from "next-intl/server";
import { layoutData } from "@/data/global/layout";
import { PulseRing } from "@/common/animations/components/PulseRing";
import type { FloatingActionKey } from "@/layout/floating-contact/types";

/* semantic key → icon component */
const ICONS: Record<FloatingActionKey, ComponentType<SVGProps<SVGSVGElement>>> = {
  whatsapp: SiWhatsapp,
  call: Phone,
};

const { name, actions } = layoutData.floatingContact;

export const FloatingContact = async () => {
  const t = await getTranslations("floating-contact");

  /* localized whatsapp message for its href */
  const message = t("whatsappMessage", { name });

  return (
    <div className="fixed right-5 bottom-5 z-50 grid animate-float-y gap-4">
      {actions.map(({ key, href, external }) => {
        const Icon = ICONS[key];
        /* color/bg inline by key — two fixed actions, a Record is overkill */
        return (
          <a
            key={key}
            href={key === "whatsapp" ? `${href}?text=${encodeURIComponent(message)}` : href}
            aria-label={t(key)}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            className={clsx(
              "relative isolate grid size-14 place-items-center rounded-2xl shadow-sm",
              key === "whatsapp" ? "bg-malachite" : "bg-primary",
            )}
          >
            <PulseRing color={key === "whatsapp" ? "malachite" : "primary"} />
            <Icon className="size-7 text-primary-foreground" aria-hidden />
          </a>
        );
      })}
    </div>
  );
};
