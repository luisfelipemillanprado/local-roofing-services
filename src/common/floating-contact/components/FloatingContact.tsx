import type { ComponentType, SVGProps } from "react";
import { Phone } from "lucide-react";
import { SiWhatsapp } from "@icons-pack/react-simple-icons";
import clsx from "clsx";
import { getTranslations } from "next-intl/server";
import { layoutData } from "@/data/global/layout";
import { PulseRing } from "@/common/animations/components/PulseRing";
import type { FloatingActionKey } from "@/common/floating-contact/types";

/* Semantic key → icon component. */
const ICONS: Record<FloatingActionKey, ComponentType<SVGProps<SVGSVGElement>>> = {
  whatsapp: SiWhatsapp,
  call: Phone,
};

const { name, whatsappHref, phoneHref, actions } = layoutData.floatingContact;

export const FloatingContact = async () => {
  const t = await getTranslations("floating-contact");

  /* localized message for whatsapp, plain tel for phone */
  const message = t("whatsappMessage", { name });
  const hrefs: Record<FloatingActionKey, string> = {
    whatsapp: `${whatsappHref}?text=${encodeURIComponent(message)}`,
    call: phoneHref,
  };

  return (
    <div className="fixed right-5 bottom-5 z-50 grid animate-float-y gap-4">
      {actions.map(({ key, external }) => {
        const Icon = ICONS[key];
        const color = key === "whatsapp" ? "bg-malachite" : "bg-primary";
        return (
          <PulseRing key={key} color={color}>
            <a
              href={hrefs[key]}
              aria-label={t(key)}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              className={clsx("grid size-14 place-items-center rounded-2xl shadow-sm", color)}
            >
              <Icon className="size-7 text-primary-foreground" aria-hidden />
            </a>
          </PulseRing>
        );
      })}
    </div>
  );
};
