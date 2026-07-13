import type { ComponentType, SVGProps } from "react";
import { SiFacebook, SiX, SiInstagram, SiYoutube } from "@icons-pack/react-simple-icons";
import { company } from "@/data/site";
import type { SocialKey } from "@/common/social/types";

/* semantic key → icon component */
const ICONS: Record<SocialKey, ComponentType<SVGProps<SVGSVGElement>>> = {
  facebook: SiFacebook,
  x: SiX,
  instagram: SiInstagram,
  youtube: SiYoutube,
};

const { socials } = company;

export const Socials = () => (
  <div className="grid grid-flow-col justify-start gap-2.5">
    {socials.map(({ key, label, href }) => {
      const Icon = ICONS[key];
      return (
        <a
          key={key}
          href={href}
          aria-label={label}
          className="group grid size-9 place-items-center rounded-full bg-current/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary"
        >
          <Icon className="size-4 text-foreground transition-colors group-hover:text-white" aria-hidden />
        </a>
      );
    })}
  </div>
);
