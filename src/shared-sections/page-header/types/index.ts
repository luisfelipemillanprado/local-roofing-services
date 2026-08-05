export interface PageHeaderProps {
  titleLead: string;
  titleAccent: string;
  description: string;
  /* rotating ghost CTA target per page */
  secondaryCta: "services" | "projects" | "team" | "shop" | "work";
  /* background variant (paired src + alt); defaults to the shared image */
  image?: "default" | "home" | "shop";
  id?: string;
}
