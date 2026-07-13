export interface FooterBrandProps {
  description: string;
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
