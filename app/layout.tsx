import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageContext";
import CookieBanner from "@/components/CookieBanner";
import StructuredData from "@/components/StructuredData";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "informatik-support",
  description:
    "Professioneller Informatik-Support für KMU in Winterthur und Umgebung. IT Support, Server, Microsoft 365, Firewalls, Backup & Cloud – schnelle Unterstützung durch InfraOne IT Solutions.",
  metadataBase: new URL("https://www.informatik-support.ch"),
  icons: {
    icon: "/favicon.svg",
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
