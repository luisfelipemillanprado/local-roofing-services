/**
 * Internationalised content source for the Roofpro landing page.
 *
 * All translatable copy lives here, keyed by locale. Locale-independent assets
 * (icons, image URLs) are declared once and shared between locales so there is a
 * single source of truth for them.
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

export type Locale = "en" | "es";
export const locales: Locale[] = ["en", "es"];
export const defaultLocale: Locale = "en";

export const localeNames: Record<Locale, string> = {
  en: "English",
  es: "Español",
};

/* Shared, locale-independent image URLs */
const IMG = {
  hero: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=2000&q=80",
  about: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80",
  cta: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2000&q=80",
  serviceGutter: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=900&q=80",
  serviceEnergy: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=900&q=80",
  serviceFlat: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80",
  project1: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1000&q=80",
  projectWide: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?auto=format&fit=crop&w=1400&q=80",
  project2: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1000&q=80",
  project3: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1000&q=80",
  team1: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&crop=faces&w=600&q=80",
  team2: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&crop=faces&w=600&q=80",
  team3: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&crop=faces&w=600&q=80",
  avatar1: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&crop=faces&w=150&q=80",
  avatar2: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&crop=faces&w=150&q=80",
  avatar3: "https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&crop=faces&w=150&q=80",
  blog1: "https://images.unsplash.com/photo-1635424710928-0544e8512eae?auto=format&fit=crop&w=800&q=80",
  blog2: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80",
} as const;

export type NavLink = { label: string; href: string };
export type Stat = { value: string; label: string };
export type Service = { title: string; description: string; image: string; icon: LucideIcon };
export type Feature = { title: string; description: string; icon: LucideIcon };
export type StatIcon = { value: string; label: string; icon: LucideIcon };
export type Project = { title: string; category: string; image: string };
export type TeamMember = { name: string; role: string; image: string };
export type Testimonial = { quote: string; name: string; location: string; rating: number; avatar: string };
export type Coupon = { title: string; amount: string; description: string; highlighted?: boolean };
export type PricingPlan = {
  name: string;
  price: string;
  period: string;
  blurb: string;
  features: string[];
  highlighted?: boolean;
  icon: LucideIcon;
};
export type Post = { title: string; excerpt: string; date: string; author: string; image: string; category: string };
export type FooterLinks = {
  topLinks: NavLink[];
  services: NavLink[];
  hours: { day: string; time: string }[];
};
export type RotatorItem = { icon: LucideIcon; label: string };

export type Ui = {
  // chrome
  getQuote: string;
  toggleMenu: string;
  selectLanguage: string;
  toggleTheme: string;
  learnMore: string;
  // hero
  heroBadge: string;
  heroTitleLead: string;
  heroTitleAccent: string;
  heroSubtitle: string;
  heroCtaPrimary: string;
  heroCtaSecondary: string;
  heroCustomers: string;
  // about
  aboutEyebrow: string;
  aboutTitleLead: string;
  aboutTitleAccent: string;
  aboutBody: string;
  aboutPoints: string[];
  aboutYearsLine1: string;
  aboutYearsLine2: string;
  aboutCallAnytime: string;
  // services
  servicesEyebrow: string;
  servicesTitleLead: string;
  servicesTitleAccent: string;
  servicesExploreAll: string;
  // why choose
  whyEyebrow: string;
  whyTitleLead: string;
  whyTitleAccent: string;
  whyDescription: string;
  // projects
  projectsEyebrow: string;
  projectsTitleLead: string;
  projectsTitleAccent: string;
  projectsExplore: string;
  // team
  teamEyebrow: string;
  teamTitleLead: string;
  teamTitleAccent: string;
  teamExplore: string;
  // testimonials
  testimonialsEyebrow: string;
  testimonialsTitleLead: string;
  testimonialsTitleAccent: string;
  testimonialsReviews: string;
  testimonialsViewAll: string;
  // coupons
  couponsEyebrow: string;
  couponsTitleLead: string;
  couponsTitleAccent: string;
  couponsExplore: string;
  couponsClaim: string;
  // pricing
  pricingEyebrow: string;
  pricingTitleLead: string;
  pricingTitleAccent: string;
  pricingDescription: string;
  pricingPopular: string;
  pricingChoose: string;
  // blog
  blogEyebrow: string;
  blogTitleLead: string;
  blogTitleAccent: string;
  blogExplore: string;
  blogReadMore: string;
  // cta
  ctaEyebrow: string;
  ctaTitleLead: string;
  ctaTitleAccent: string;
  ctaBody: string;
  ctaEmailLabel: string;
  ctaEmailPlaceholder: string;
  ctaGetQuote: string;
  ctaSent: string;
  // footer
  footerTagline: string;
  footerTopLinks: string;
  footerServices: string;
  footerGetInTouch: string;
  footerCallUs: string;
  footerRights: string;
  footerPrivacy: string;
  footerTerms: string;
};

export type Content = {
  navLinks: NavLink[];
  heroStats: Stat[];
  services: Service[];
  features: Feature[];
  whyStats: StatIcon[];
  projects: Project[];
  team: TeamMember[];
  testimonials: Testimonial[];
  coupons: Coupon[];
  pricingPlans: PricingPlan[];
  posts: Post[];
  footerLinks: FooterLinks;
  featureRotator: RotatorItem[];
  ui: Ui;
};

const en: Content = {
  navLinks: [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Pricing", href: "#pricing" },
    { label: "Blog", href: "#blog" },
    { label: "Contact Us", href: "#contact" },
  ],
  heroStats: [
    { value: "1500+", label: "Projects Completed" },
    { value: "800+", label: "Happy Customers" },
    { value: "98%", label: "Satisfied Customers" },
  ],
  services: [
    {
      title: "Gutter & Flashing",
      description:
        "Seamless gutter installation and precision flashing that channels water away and protects every edge of your roof.",
      image: IMG.serviceGutter,
      icon: Droplets,
    },
    {
      title: "Energy-Efficient Roofing",
      description:
        "Cool-roof systems and reflective membranes that lower your bills while keeping interiors comfortable year-round.",
      image: IMG.serviceEnergy,
      icon: Zap,
    },
    {
      title: "Flat & Low-Slope Roofing",
      description:
        "Durable TPO, EPDM and modified-bitumen systems engineered for commercial and modern low-slope structures.",
      image: IMG.serviceFlat,
      icon: Layers,
    },
  ],
  features: [
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
  ],
  whyStats: [
    { value: "25+", label: "Years of Experience", icon: Award },
    { value: "1.5k", label: "Projects Delivered", icon: Hammer },
    { value: "40+", label: "Expert Roofers", icon: Wrench },
  ],
  projects: [
    { title: "Cedar Heights Residence", category: "Residential Re-Roof", image: IMG.project1 },
    { title: "Summit Commercial Plaza", category: "Flat Roof System", image: IMG.projectWide },
    { title: "Lakeview Family Home", category: "Shingle Replacement", image: IMG.project2 },
    { title: "Northgate Office Park", category: "Metal Roofing", image: IMG.project3 },
  ],
  team: [
    { name: "Rodger Struck", role: "Lead Roofing Contractor", image: IMG.team1 },
    { name: "Marcus Hale", role: "Project Superintendent", image: IMG.team2 },
    { name: "Devin Cole", role: "Inspection Specialist", image: IMG.team3 },
  ],
  testimonials: [
    {
      quote:
        "Roofpro replaced our entire roof after a hailstorm and handled the insurance paperwork end to end. The crew was punctual, tidy and genuinely cared about the result.",
      name: "Dennis Collis",
      location: "Boulder, CO",
      rating: 5,
      avatar: IMG.avatar1,
    },
    {
      quote:
        "From the first inspection to the final cleanup the team was professional and transparent. Our new energy-efficient roof already cut our cooling costs noticeably.",
      name: "Paula Moss",
      location: "Aurora, CO",
      rating: 5,
      avatar: IMG.avatar2,
    },
    {
      quote:
        "Fast emergency response when a storm tore off shingles overnight. They tarped it within hours and had it fully repaired by the weekend. Highly recommend.",
      name: "Howard Tanner",
      location: "Denver, CO",
      rating: 5,
      avatar: IMG.avatar3,
    },
  ],
  coupons: [
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
  ],
  pricingPlans: [
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
  ],
  posts: [
    {
      title: "The 3-Layer Defense System For Roofs That Outlast Mortgages",
      excerpt:
        "How underlayment, ventilation and quality shingles work together to add decades to your roof's lifespan.",
      date: "Apr 11, 2026",
      author: "Rodger Struck",
      category: "Maintenance",
      image: IMG.blog1,
    },
    {
      title: "Your Roof Is Under Attack Right Now — And You're Losing Money",
      excerpt:
        "The silent ways weather, debris and neglect drain your home's value, and the simple checks that stop it.",
      date: "Mar 27, 2026",
      author: "Paula Moss",
      category: "Energy Savings",
      image: IMG.blog2,
    },
  ],
  footerLinks: {
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
  },
  featureRotator: [
    { icon: CloudRain, label: "Storm Ready" },
    { icon: ShieldCheck, label: "Licensed & Insured" },
    { icon: Award, label: "25+ Years" },
    { icon: Hammer, label: "Built Strong" },
    { icon: Wrench, label: "Full Service" },
  ],
  ui: {
    getQuote: "Get a Quote",
    toggleMenu: "Toggle menu",
    selectLanguage: "Select language",
    toggleTheme: "Toggle theme",
    learnMore: "Learn More",
    heroBadge: "Licensed • Insured • Trusted",
    heroTitleLead: "Roofing",
    heroTitleAccent: "Services",
    heroSubtitle:
      "Your partner for durable, quality and reliable roofing. From storm repairs to full installations, {name} protects what matters most — for {years}+ years.",
    heroCtaPrimary: "Upgrade Your Roof",
    heroCtaSecondary: "View Our Work",
    heroCustomers: "1500+ Satisfied Customers",
    aboutEyebrow: "Our Company",
    aboutTitleLead: "Your Partner For Durable",
    aboutTitleAccent: "Quality-Reliable Roofing",
    aboutBody:
      "At {name} we are committed to providing top-notch roofing services with a focus on quality and reliability. Our seasoned crew delivers craftsmanship you can trust on residential and commercial roofs alike.",
    aboutPoints: [
      "Residential & commercial roofing experts",
      "Premium materials with extended warranties",
      "Transparent, upfront pricing — no surprises",
    ],
    aboutYearsLine1: "Years of",
    aboutYearsLine2: "Experience",
    aboutCallAnytime: "Call us anytime",
    servicesEyebrow: "Our Services",
    servicesTitleLead: "Crafting Roofs With",
    servicesTitleAccent: "Precision And Care",
    servicesExploreAll: "Explore All Services",
    whyEyebrow: "Why Choose Us",
    whyTitleLead: "Roofing You Can Rely",
    whyTitleAccent: "On Every Shingle Time",
    whyDescription:
      "With years of hands-on roofing experience and a team of licensed professionals, we bring proven, dependable workmanship to every project. When it comes to protecting your home or business, you deserve a roofing team you can count on.",
    projectsEyebrow: "Our Projects",
    projectsTitleLead: "Transformative Roofs",
    projectsTitleAccent: "Exceptional Results",
    projectsExplore: "Explore Our Projects",
    teamEyebrow: "Our Team",
    teamTitleLead: "Our Skilled Team Of",
    teamTitleAccent: "Roofing Professionals",
    teamExplore: "Explore Our Team",
    testimonialsEyebrow: "Testimonials",
    testimonialsTitleLead: "Client Stories From",
    testimonialsTitleAccent: "The Roofs We've Built",
    testimonialsReviews: "820+ reviews",
    testimonialsViewAll: "View All",
    couponsEyebrow: "Coupons",
    couponsTitleLead: "Save Big On Your",
    couponsTitleAccent: "Next Roofing Project",
    couponsExplore: "Explore Coupons",
    couponsClaim: "Claim Offer",
    pricingEyebrow: "Pricing",
    pricingTitleLead: "Transparent Pricing",
    pricingTitleAccent: "You Can Trust",
    pricingDescription:
      "Honest, upfront quotes with no hidden fees. Choose the plan that fits your property and budget — every job is backed by our workmanship guarantee.",
    pricingPopular: "Popular",
    pricingChoose: "Choose Plan",
    blogEyebrow: "Blog & News",
    blogTitleLead: "From The Experts",
    blogTitleAccent: "Roofing Tips & Stories",
    blogExplore: "Explore Our Blog",
    blogReadMore: "Read More",
    ctaEyebrow: "Get Started Today",
    ctaTitleLead: "Secure Your Home With",
    ctaTitleAccent: "A Strong Roof — Act Now",
    ctaBody:
      "Get a free, no-obligation inspection and quote. Drop your email and our team will reach out within one business day.",
    ctaEmailLabel: "Email address",
    ctaEmailPlaceholder: "Enter your email address",
    ctaGetQuote: "Get Free Quote",
    ctaSent: "Request Sent",
    footerTagline:
      "{name} is committed to providing high-quality, durable and reliable roofing solutions designed to protect and enhance your property.",
    footerTopLinks: "Top Links",
    footerServices: "Our Services",
    footerGetInTouch: "Get In Touch",
    footerCallUs: "Call us anytime",
    footerRights: "All rights reserved.",
    footerPrivacy: "Privacy Policy",
    footerTerms: "Terms of Service",
  },
};

const es: Content = {
  navLinks: [
    { label: "Inicio", href: "#home" },
    { label: "Nosotros", href: "#about" },
    { label: "Servicios", href: "#services" },
    { label: "Proyectos", href: "#projects" },
    { label: "Precios", href: "#pricing" },
    { label: "Blog", href: "#blog" },
    { label: "Contacto", href: "#contact" },
  ],
  heroStats: [
    { value: "1500+", label: "Proyectos Completados" },
    { value: "800+", label: "Clientes Felices" },
    { value: "98%", label: "Clientes Satisfechos" },
  ],
  services: [
    {
      title: "Canalones y Tapajuntas",
      description:
        "Instalación de canalones sin juntas y tapajuntas de precisión que desvían el agua y protegen cada borde de tu techo.",
      image: IMG.serviceGutter,
      icon: Droplets,
    },
    {
      title: "Techado Energéticamente Eficiente",
      description:
        "Sistemas de techo frío y membranas reflectantes que reducen tus facturas y mantienen interiores cómodos todo el año.",
      image: IMG.serviceEnergy,
      icon: Zap,
    },
    {
      title: "Techos Planos y de Baja Pendiente",
      description:
        "Sistemas duraderos de TPO, EPDM y betún modificado diseñados para estructuras comerciales y modernas de baja pendiente.",
      image: IMG.serviceFlat,
      icon: Layers,
    },
  ],
  features: [
    {
      title: "Servicios de Emergencia",
      description:
        "Una cuadrilla de respuesta rápida siempre disponible para daños por tormenta, goteras y reparaciones urgentes en nuestra comunidad.",
      icon: PhoneCall,
    },
    {
      title: "Enfoque Proactivo",
      description:
        "Inspecciones programadas y mantenimiento preventivo que detectan problemas mucho antes de que sean costosos.",
      icon: Lightbulb,
    },
    {
      title: "Confiabilidad Total",
      description:
        "Techadores licenciados, asegurados y certificados que usan materiales premium respaldados por garantías líderes del sector.",
      icon: ShieldCheck,
    },
    {
      title: "Experiencia Comprobada",
      description:
        "Un cuarto de siglo de oficio en miles de techos, desde casas tradicionales hasta construcciones comerciales.",
      icon: Award,
    },
  ],
  whyStats: [
    { value: "25+", label: "Años de Experiencia", icon: Award },
    { value: "1.5k", label: "Proyectos Entregados", icon: Hammer },
    { value: "40+", label: "Techadores Expertos", icon: Wrench },
  ],
  projects: [
    { title: "Residencia Cedar Heights", category: "Retecho Residencial", image: IMG.project1 },
    { title: "Plaza Comercial Summit", category: "Sistema de Techo Plano", image: IMG.projectWide },
    { title: "Casa Familiar Lakeview", category: "Reemplazo de Tejas", image: IMG.project2 },
    { title: "Parque de Oficinas Northgate", category: "Techo Metálico", image: IMG.project3 },
  ],
  team: [
    { name: "Rodger Struck", role: "Contratista Principal de Techado", image: IMG.team1 },
    { name: "Marcus Hale", role: "Superintendente de Proyecto", image: IMG.team2 },
    { name: "Devin Cole", role: "Especialista en Inspección", image: IMG.team3 },
  ],
  testimonials: [
    {
      quote:
        "Roofpro reemplazó todo nuestro techo tras una granizada y gestionó el papeleo del seguro de principio a fin. La cuadrilla fue puntual, ordenada y de verdad se preocupó por el resultado.",
      name: "Dennis Collis",
      location: "Boulder, CO",
      rating: 5,
      avatar: IMG.avatar1,
    },
    {
      quote:
        "Desde la primera inspección hasta la limpieza final, el equipo fue profesional y transparente. Nuestro nuevo techo eficiente ya redujo notablemente los costos de enfriamiento.",
      name: "Paula Moss",
      location: "Aurora, CO",
      rating: 5,
      avatar: IMG.avatar2,
    },
    {
      quote:
        "Respuesta de emergencia rápida cuando una tormenta arrancó las tejas de noche. Lo cubrieron con lona en horas y lo repararon por completo para el fin de semana. Muy recomendados.",
      name: "Howard Tanner",
      location: "Denver, CO",
      rating: 5,
      avatar: IMG.avatar3,
    },
  ],
  coupons: [
    {
      title: "Reemplazo Total de Techo",
      amount: "$1000 DCTO",
      description: "Aprovecha un ahorro enorme en un sistema de techo completo instalado por profesionales certificados.",
    },
    {
      title: "Paquete de Reparación",
      amount: "$500 DCTO",
      description: "Ofertas por tiempo limitado pensadas para cada reparación y restauración de temporada de tormentas.",
      highlighted: true,
    },
    {
      title: "Canalones y Mantenimiento",
      amount: "$400 DCTO",
      description: "El mantenimiento accesible empieza aquí con estas ofertas de servicio exclusivas de temporada.",
    },
  ],
  pricingPlans: [
    {
      name: "Residencial",
      price: "$5,999",
      period: "desde",
      blurb: "Ideal para casas unifamiliares que necesitan una solución de techado completa y confiable.",
      icon: Home,
      features: [
        "Instalación de tejas premium",
        "Retiro y desecho completo",
        "Membrana base y escudo de hielo",
        "Garantía de mano de obra",
        "Inspección gratuita tras la instalación",
      ],
    },
    {
      name: "Comercial",
      price: "$599",
      period: "por visita",
      blurb: "Planes de mantenimiento para techos planos y de baja pendiente, pensados para negocios y administradores.",
      icon: Building2,
      highlighted: true,
      features: [
        "Cuidado de membrana TPO / EPDM",
        "Inspecciones trimestrales",
        "Respuesta prioritaria a goteras",
        "Revisión de drenaje y tapajuntas",
        "Reportes detallados de condición",
      ],
    },
  ],
  posts: [
    {
      title: "El Sistema de Defensa de 3 Capas Para Techos Que Duran Más Que la Hipoteca",
      excerpt:
        "Cómo la membrana base, la ventilación y las tejas de calidad trabajan juntas para sumar décadas de vida a tu techo.",
      date: "11 Abr 2026",
      author: "Rodger Struck",
      category: "Mantenimiento",
      image: IMG.blog1,
    },
    {
      title: "Tu Techo Está Bajo Ataque Ahora Mismo — Y Estás Perdiendo Dinero",
      excerpt:
        "Las formas silenciosas en que el clima, los escombros y el descuido drenan el valor de tu hogar, y los chequeos simples que lo detienen.",
      date: "27 Mar 2026",
      author: "Paula Moss",
      category: "Ahorro Energético",
      image: IMG.blog2,
    },
  ],
  footerLinks: {
    topLinks: [
      { label: "Nosotros", href: "#about" },
      { label: "Nuestros Servicios", href: "#services" },
      { label: "Proyectos Recientes", href: "#projects" },
      { label: "Planes y Precios", href: "#pricing" },
      { label: "Contacto", href: "#contact" },
    ],
    services: [
      { label: "Reparación por Tormenta", href: "#services" },
      { label: "Instalación de Techo", href: "#services" },
      { label: "Reparaciones de Emergencia", href: "#services" },
      { label: "Reemplazo de Techo", href: "#services" },
      { label: "Instalación de Canalones", href: "#services" },
    ],
    hours: [
      { day: "Lun – Vie", time: "8:00 AM – 7:00 PM" },
      { day: "Sábado", time: "9:00 AM – 4:00 PM" },
      { day: "Domingo", time: "Cerrado" },
    ],
  },
  featureRotator: [
    { icon: CloudRain, label: "Listos Para Tormentas" },
    { icon: ShieldCheck, label: "Licenciados y Asegurados" },
    { icon: Award, label: "Más de 25 Años" },
    { icon: Hammer, label: "Construido Fuerte" },
    { icon: Wrench, label: "Servicio Completo" },
  ],
  ui: {
    getQuote: "Cotización",
    toggleMenu: "Abrir menú",
    selectLanguage: "Seleccionar idioma",
    toggleTheme: "Cambiar tema",
    learnMore: "Saber Más",
    heroBadge: "Licenciados • Asegurados • Confiables",
    heroTitleLead: "Servicios de",
    heroTitleAccent: "Techado",
    heroSubtitle:
      "Tu aliado para un techado duradero, de calidad y confiable. Desde reparaciones por tormenta hasta instalaciones completas, {name} protege lo que más importa — desde hace más de {years} años.",
    heroCtaPrimary: "Renueva Tu Techo",
    heroCtaSecondary: "Ver Nuestro Trabajo",
    heroCustomers: "+1500 Clientes Satisfechos",
    aboutEyebrow: "Nuestra Empresa",
    aboutTitleLead: "Tu Aliado Para Un Techado",
    aboutTitleAccent: "De Calidad y Confiable",
    aboutBody:
      "En {name} estamos comprometidos a ofrecer servicios de techado de primer nivel con un enfoque en la calidad y la confiabilidad. Nuestra cuadrilla experimentada entrega un oficio en el que puedes confiar, tanto en techos residenciales como comerciales.",
    aboutPoints: [
      "Expertos en techado residencial y comercial",
      "Materiales premium con garantías extendidas",
      "Precios transparentes y claros — sin sorpresas",
    ],
    aboutYearsLine1: "Años de",
    aboutYearsLine2: "Experiencia",
    aboutCallAnytime: "Llámanos cuando quieras",
    servicesEyebrow: "Nuestros Servicios",
    servicesTitleLead: "Creamos Techos Con",
    servicesTitleAccent: "Precisión y Cuidado",
    servicesExploreAll: "Ver Todos los Servicios",
    whyEyebrow: "Por Qué Elegirnos",
    whyTitleLead: "Un Techado En El Que",
    whyTitleAccent: "Confiar Siempre",
    whyDescription:
      "Con años de experiencia práctica en techado y un equipo de profesionales licenciados, aportamos un oficio probado y confiable a cada proyecto. Cuando se trata de proteger tu hogar o negocio, mereces un equipo de techado con el que puedas contar.",
    projectsEyebrow: "Nuestros Proyectos",
    projectsTitleLead: "Techos Que Transforman",
    projectsTitleAccent: "Resultados Excepcionales",
    projectsExplore: "Ver Nuestros Proyectos",
    teamEyebrow: "Nuestro Equipo",
    teamTitleLead: "Nuestro Equipo De",
    teamTitleAccent: "Profesionales Del Techado",
    teamExplore: "Conoce al Equipo",
    testimonialsEyebrow: "Testimonios",
    testimonialsTitleLead: "Historias de Clientes",
    testimonialsTitleAccent: "De Los Techos Que Construimos",
    testimonialsReviews: "+820 reseñas",
    testimonialsViewAll: "Ver Todos",
    couponsEyebrow: "Cupones",
    couponsTitleLead: "Ahorra En Tu",
    couponsTitleAccent: "Próximo Proyecto de Techado",
    couponsExplore: "Ver Cupones",
    couponsClaim: "Obtener Oferta",
    pricingEyebrow: "Precios",
    pricingTitleLead: "Precios Transparentes",
    pricingTitleAccent: "En Los Que Confiar",
    pricingDescription:
      "Cotizaciones honestas y claras, sin cargos ocultos. Elige el plan que se ajuste a tu propiedad y presupuesto — cada trabajo está respaldado por nuestra garantía de mano de obra.",
    pricingPopular: "Popular",
    pricingChoose: "Elegir Plan",
    blogEyebrow: "Blog y Noticias",
    blogTitleLead: "De Los Expertos",
    blogTitleAccent: "Consejos e Historias de Techado",
    blogExplore: "Ver Nuestro Blog",
    blogReadMore: "Leer Más",
    ctaEyebrow: "Comienza Hoy",
    ctaTitleLead: "Protege Tu Hogar Con",
    ctaTitleAccent: "Un Techo Resistente — Actúa Ya",
    ctaBody:
      "Obtén una inspección y cotización gratis, sin compromiso. Déjanos tu correo y nuestro equipo te contactará en un día hábil.",
    ctaEmailLabel: "Correo electrónico",
    ctaEmailPlaceholder: "Escribe tu correo electrónico",
    ctaGetQuote: "Cotización Gratis",
    ctaSent: "Solicitud Enviada",
    footerTagline:
      "{name} está comprometido a brindar soluciones de techado de alta calidad, duraderas y confiables, diseñadas para proteger y realzar tu propiedad.",
    footerTopLinks: "Enlaces",
    footerServices: "Nuestros Servicios",
    footerGetInTouch: "Contáctanos",
    footerCallUs: "Llámanos cuando quieras",
    footerRights: "Todos los derechos reservados.",
    footerPrivacy: "Política de Privacidad",
    footerTerms: "Términos de Servicio",
  },
};

export const content: Record<Locale, Content> = { en, es };

export function getContent(locale: Locale): Content {
  return content[locale] ?? content[defaultLocale];
}

/** Replace {name} / {years} style placeholders. */
export function interpolate(template: string, vars: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (_, key) => String(vars[key] ?? `{${key}}`));
}
