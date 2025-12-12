import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageContext";
import CookieBanner from "@/components/CookieBanner";
import StructuredData from "@/components/StructuredData";
import WhatsAppButton from "@/components/WhatsAppButton";

import Script from "next/script";

export const metadata: Metadata = {
  title: {
    default: "Informatik Support Winterthur | InfraOne IT Solutions",
    template: "%s | InfraOne IT Solutions",
  },
  description:
    "IT Support Zürich – Informatik-Support & IT-Partner für KMU & Private. PC Support, Hilfe bei Internet-, Telefonie- & Computer-Störungen, schnell & zuverlässig.",
  metadataBase: new URL("https://www.informatik-support.ch"),
  keywords: ["Informatik Support", "IT Support Winterthur", "IT Dienstleistung", "InfraOne", "Microsoft 365 Partner", "Server Support", "Firewall", "Cloud Lösungen"],
  openGraph: {
    title: "Informatik Support Winterthur | InfraOne IT Solutions",
    description: "IT Support Zürich – Informatik-Support & IT-Partner für KMU & Private. PC Support, Hilfe bei Internet-, Telefonie- & Computer-Störungen, schnell & zuverlässig.",
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
    description: "IT Support Zürich – Informatik-Support & IT-Partner für KMU & Private. PC Support, Hilfe bei Internet-, Telefonie- & Computer-Störungen, schnell & zuverlässig.",
    images: ["/teampicture.jpg"],
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  alternates: {
    canonical: "https://www.informatik-support.ch",
    languages: {
      "de-CH": "https://www.informatik-support.ch",
      "en-US": "https://www.informatik-support.ch/?lang=en",
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
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XG7WSTVB1F"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-XG7WSTVB1F');
          `}
        </Script>
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
