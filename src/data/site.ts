/**
 * Central content source for the Roofpro landing page.
 * Keeping copy + data here makes the site easy to hand off and maintain.
 */
import type { LucideIcon } from "lucide-react";
import {
  ShieldCheck,
  Zap,
  Layers,
  PhoneCall,
  Lightbulb,
  Award,
  Hammer,
  Wrench,
  Home,
  Building2,
  Droplets,
  CloudRain,
} from "lucide-react";

export const company = {
  name: "Roofpro",
  phone: "+123 456 7890",
  phoneHref: "tel:+1234567890",
  email: "hello@roofpro.com",
  address: "1200 Cedar Ridge Ave, Denver, CO",
  yearsExperience: 25,
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Pricing", href: "#pricing" },
  { label: "Blog", href: "#blog" },
  { label: "Contact Us", href: "#contact" },
];

export const heroStats = [
  { value: "1500+", label: "Projects Completed" },
  { value: "800+", label: "Happy Customers" },
  { value: "98%", label: "Satisfied Customers" },
];

export type Service = {
  title: string;
  description: string;
  image: string;
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    title: "Gutter & Flashing",
    description:
      "Seamless gutter installation and precision flashing that channels water away and protects every edge of your roof.",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=900&q=80",
    icon: Droplets,
  },
  {
    title: "Energy-Efficient Roofing",
    description:
      "Cool-roof systems and reflective membranes that lower your bills while keeping interiors comfortable year-round.",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=900&q=80",
    icon: Zap,
  },
  {
    title: "Flat & Low-Slope Roofing",
    description:
      "Durable TPO, EPDM and modified-bitumen systems engineered for commercial and modern low-slope structures.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80",
    icon: Layers,
  },
];

export type Feature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const features: Feature[] = [
  {
    title: "Emergency Services",
    description:
      "An always-on rapid-response crew for storm damage, leaks and urgent repairs across our community.",
    icon: PhoneCall,
  },
  {
    title: "Proactive Approach",
    description:
      "Scheduled inspections and preventative maintenance that catch issues long before they become costly.",
    icon: Lightbulb,
  },
  {
    title: "Reliably Focused",
    description:
      "Licensed, insured and certified roofers using premium materials backed by industry-leading warranties.",
    icon: ShieldCheck,
  },
  {
    title: "Experience Focused",
    description:
      "A quarter-century of craftsmanship on thousands of roofs, from heritage homes to commercial builds.",
    icon: Award,
  },
];

export const whyStats = [
  { value: "25+", label: "Years of Experience", icon: Award },
  { value: "1.5k", label: "Projects Delivered", icon: Hammer },
  { value: "40+", label: "Expert Roofers", icon: Wrench },
];

export type Project = {
  title: string;
  category: string;
  image: string;
};

export const projects: Project[] = [
  {
    title: "Cedar Heights Residence",
    category: "Residential Re-Roof",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Summit Commercial Plaza",
    category: "Flat Roof System",
    image: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Lakeview Family Home",
    category: "Shingle Replacement",
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Northgate Office Park",
    category: "Metal Roofing",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1000&q=80",
  },
];

export type TeamMember = {
  name: string;
  role: string;
  image: string;
};

export const team: TeamMember[] = [
  { name: "Rodger Struck", role: "Lead Roofing Contractor", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&crop=faces&w=600&q=80" },
  { name: "Marcus Hale", role: "Project Superintendent", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&crop=faces&w=600&q=80" },
  { name: "Devin Cole", role: "Inspection Specialist", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&crop=faces&w=600&q=80" },
];

export type Testimonial = {
  quote: string;
  name: string;
  location: string;
  rating: number;
  avatar: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Roofpro replaced our entire roof after a hailstorm and handled the insurance paperwork end to end. The crew was punctual, tidy and genuinely cared about the result.",
    name: "Dennis Collis",
    location: "Boulder, CO",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&crop=faces&w=150&q=80",
  },
  {
    quote:
      "From the first inspection to the final cleanup the team was professional and transparent. Our new energy-efficient roof already cut our cooling costs noticeably.",
    name: "Paula Moss",
    location: "Aurora, CO",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&crop=faces&w=150&q=80",
  },
  {
    quote:
      "Fast emergency response when a storm tore off shingles overnight. They tarped it within hours and had it fully repaired by the weekend. Highly recommend.",
    name: "Howard Tanner",
    location: "Denver, CO",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&crop=faces&w=150&q=80",
  },
];

export type Coupon = {
  title: string;
  amount: string;
  description: string;
  highlighted?: boolean;
};

export const coupons: Coupon[] = [
  {
    title: "Full Roof Replacement",
    amount: "$1000 OFF",
    description: "Unlock huge savings on a complete roofing system installed by certified pros.",
  },
  {
    title: "Roof Repair Package",
    amount: "$500 OFF",
    description: "Limited-time deals built for every storm-season repair and restoration job.",
    highlighted: true,
  },
  {
    title: "Gutter & Maintenance",
    amount: "$400 OFF",
    description: "Affordable upkeep starts here with these exclusive seasonal service offers.",
  },
];

export type PricingPlan = {
  name: string;
  price: string;
  period: string;
  blurb: string;
  features: string[];
  highlighted?: boolean;
  icon: LucideIcon;
};

export const pricingPlans: PricingPlan[] = [
  {
    name: "Residential",
    price: "$5,999",
    period: "starting at",
    blurb: "Ideal for single-family homes needing a full, reliable roofing solution.",
    icon: Home,
    features: [
      "Premium shingle installation",
      "Full tear-off & disposal",
      "Underlayment & ice-shield",
      "Workmanship warranty",
      "Free post-install inspection",
    ],
  },
  {
    name: "Commercial",
    price: "$599",
    period: "per visit",
    blurb: "Flat & low-slope maintenance plans built for businesses and property managers.",
    icon: Building2,
    highlighted: true,
    features: [
      "TPO / EPDM membrane care",
      "Quarterly inspections",
      "Priority leak response",
      "Drainage & flashing checks",
      "Detailed condition reports",
    ],
  },
];

export type Post = {
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
  category: string;
};

export const posts: Post[] = [
  {
    title: "The 3-Layer Defense System For Roofs That Outlast Mortgages",
    excerpt:
      "How underlayment, ventilation and quality shingles work together to add decades to your roof's lifespan.",
    date: "Apr 11, 2026",
    author: "Rodger Struck",
    category: "Maintenance",
    image: "https://images.unsplash.com/photo-1635424710928-0544e8512eae?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Your Roof Is Under Attack Right Now — And You're Losing Money",
    excerpt:
      "The silent ways weather, debris and neglect drain your home's value, and the simple checks that stop it.",
    date: "Mar 27, 2026",
    author: "Paula Moss",
    category: "Energy Savings",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80",
  },
];

export const footerLinks = {
  topLinks: [
    { label: "About Us", href: "#about" },
    { label: "Our Services", href: "#services" },
    { label: "Recent Projects", href: "#projects" },
    { label: "Pricing Plans", href: "#pricing" },
    { label: "Contact Us", href: "#contact" },
  ],
  services: [
    { label: "Storm Damage Repair", href: "#services" },
    { label: "Roof Installation", href: "#services" },
    { label: "Emergency Repairs", href: "#services" },
    { label: "Roof Replacement", href: "#services" },
    { label: "Gutter Installation", href: "#services" },
  ],
  hours: [
    { day: "Mon – Fri", time: "8:00 AM – 7:00 PM" },
    { day: "Saturday", time: "9:00 AM – 4:00 PM" },
    { day: "Sunday", time: "Closed" },
  ],
};

export const featureRotator = [
  { icon: CloudRain, label: "Storm Ready" },
  { icon: ShieldCheck, label: "Licensed & Insured" },
  { icon: Award, label: "25+ Years" },
  { icon: Hammer, label: "Built Strong" },
  { icon: Wrench, label: "Full Service" },
];
