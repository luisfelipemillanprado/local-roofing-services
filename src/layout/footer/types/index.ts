import type { SocialData } from "@/common/social/types";

/* certification trust badge from the data layer; label is the image alt */
export interface CertificationData {
  key: string;
  label: string;
  image: string;
}

export interface FooterBrandProps {
  description: string;
  socials: readonly SocialData[];
  certifications: readonly CertificationData[];
}

export interface FooterCertificationsProps {
  items: readonly CertificationData[];
}

/* resolved label + destination for the credits bar */
interface CreditLink {
  label: string;
  href: string;
}

export interface FooterCreditsProps {
  copyright: string;
  builtByLabel: string;
  builder: CreditLink;
  privacy: CreditLink;
  terms: CreditLink;
}

/* resolved link item for a footer column */
interface FooterLinkItem {
  key: string;
  label: string;
  href: string;
}

export interface FooterLinksProps {
  title: string;
  links: FooterLinkItem[];
}

export interface FooterContactProps {
  address: string;
  phone: string;
  phoneHref: string;
  email: string;
  emailHref: string;
}

/* resolved opening-hours row */
interface FooterHoursItem {
  key: string;
  day: string;
  time: string;
}

export interface FooterHoursProps {
  rows: FooterHoursItem[];
}
