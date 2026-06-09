import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

const siteUrl = "https://roofpro.example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Roofpro — Durable, Quality & Reliable Roofing Services",
    template: "%s | Roofpro",
  },
  description:
    "Roofpro delivers durable, energy-efficient and reliable roofing services for residential and commercial properties. 25+ years of experience, 1500+ projects completed.",
  keywords: [
    "roofing",
    "roof repair",
    "roof installation",
    "commercial roofing",
    "residential roofing",
    "energy efficient roofing",
  ],
  authors: [{ name: "Roofpro" }],
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Roofpro — Durable, Quality & Reliable Roofing Services",
    description:
      "Crafting roofs with precision and care. 25+ years of experience protecting homes and businesses.",
    siteName: "Roofpro",
  },
  twitter: {
    card: "summary_large_image",
    title: "Roofpro — Durable, Quality & Reliable Roofing Services",
    description:
      "Crafting roofs with precision and care. 25+ years of experience protecting homes and businesses.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
