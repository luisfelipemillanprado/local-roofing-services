export interface PageHeaderProps {
  titleLead: string;
  titleAccent: string;
  description: string;
  /* rotating ghost CTA target per page */
  secondaryCta: "services" | "projects" | "team";
}
