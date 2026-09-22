/* one crumb; drop href for a step that has no page of its own */
interface BreadcrumbItem {
  key: string;
  label: string;
  href?: string;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  label: string;
}
