import { MapPin, Mail, Phone } from "lucide-react";
import { Text } from "@/common/text/components/Text";
import type { FooterContactProps } from "@/layout/footer/types";

/* address, phone and email rows with their icons */
export const FooterContact = ({ address, phone, phoneHref, email, emailHref }: FooterContactProps) => (
  <ul className="grid justify-items-center gap-4 lg:justify-items-start">
    <li className="grid grid-cols-[auto_1fr] items-start gap-3">
      <MapPin className="mt-0.5 size-4 text-primary" />
      <Text as="span" size="body" tone="muted" text={address} />
    </li>
    <li className="grid grid-cols-[auto_1fr] items-center gap-3">
      <Phone className="size-4 text-primary" />
      <a href={phoneHref} className="justify-self-start">
        <Text as="span" size="body" tone="muted" text={phone} />
      </a>
    </li>
    <li className="grid grid-cols-[auto_1fr] items-center gap-3">
      <Mail className="size-4 text-primary" />
      <a href={emailHref} className="justify-self-start">
        <Text as="span" size="body" tone="muted" text={email} />
      </a>
    </li>
  </ul>
);
