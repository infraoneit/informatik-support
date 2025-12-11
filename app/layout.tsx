import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageContext";
import CookieBanner from "@/components/CookieBanner";
import StructuredData from "@/components/StructuredData";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: {
    default: "Informatik Support Winterthur | InfraOne IT Solutions",
    template: "%s | InfraOne IT Solutions",
  },
  description:
    "Professioneller Informatik-Support für KMU in Winterthur und Umgebung. IT Support, Server, Microsoft 365, Firewalls, Backup & Cloud – schnelle Unterstützung durch InfraOne IT Solutions.",
  metadataBase: new URL("https://www.informatik-support.ch"),
  keywords: ["Informatik Support", "IT Support Winterthur", "IT Dienstleistung", "InfraOne", "Microsoft 365 Partner", "Server Support", "Firewall", "Cloud Lösungen"],
  openGraph: {
    title: "Informatik Support Winterthur | InfraOne IT Solutions",
    description: "Professioneller Informatik-Support für KMU in Winterthur und Umgebung.",
    url: "https://www.informatik-support.ch",
    siteName: "InfraOne IT Solutions",
    locale: "de_CH",
    type: "website",
    images: [
      {
        url: "/teampicture.jpg",
        width: 1200,
        height: 630,
        alt: "InfraOne Team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Informatik Support Winterthur | InfraOne IT Solutions",
    description: "Professioneller Informatik-Support für KMU in Winterthur und Umgebung.",
    images: ["/teampicture.jpg"],
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  alternates: {
    canonical: "/",
    languages: {
      "de-CH": "/",
      "en-US": "/?lang=en",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de-CH">
      <body className="bg-slate-950 text-slate-50 antialiased">
        <LanguageProvider>
          <StructuredData />
          {children}
          <CookieBanner />
          <WhatsAppButton />
        </LanguageProvider>
      </body>
    </html>
  );
}
