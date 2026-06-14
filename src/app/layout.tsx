import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { Providers } from "@/app/Providers";
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // lang="en" by default in (static) SSR; SyncLocale switches it to "es" on
    // the client for /es. suppressHydrationWarning covers that and next-themes.
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${jakarta.variable}`}
    >
      <body className="antialiased">
        <Providers
          themeProps={{
            attribute: "class",
            defaultTheme: "dark",
            enableSystem: false,
            disableTransitionOnChange: true,
          }}
        >
          {children}
        </Providers>
      </body>
    </html>
  );
}
