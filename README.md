This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


📘 README — informatik-support.ch

Modern Swiss Clean Next.js Landingpage — InfraOne IT Solutions GmbH
Architektur, Komponenten, SEO, Styling & Entwicklungsrichtlinien

🧱 1. Projektüberblick

Diese Website ist eine moderne, minimalistische und hochperformante Landingpage, basierend auf:

Next.js App Router (v13+ / v14)

TypeScript

TailwindCSS

Komponentenstruktur nach Schweizer UX-/Agentur-Standards

Dark/Light Theme Toggle (Client-Only, lokale Persistenz)

Sauber getrennte Layout-Logik & Content-Konstanten

Liip.ch-inspiriertes Design (Swiss Clean, viel Weissraum, klare Typografie)

SEO-optimiert für „Informatik Support“, „IT Support Winterthur“ etc.

JSON-LD LocalBusiness Schema

Mehrere Standorte → Footer & SEO integriert

Ziel: Eine seriöse, hochwertige, vertrauenswürdige Landingpage für Firmenkunden & Suchmaschinen.

📁 2. Projektstruktur
app/
 └ page.tsx               # Root-Seite, orchestriert alle Komponenten
components/
   Header.tsx            # Header inkl. Navigation & Theme Toggle
   Hero.tsx              # Hero mit Titel, Claim & CTA
   Leistungen.tsx        # Leistungsübersicht (IT Support, Netzwerk etc.)
   About.tsx             # Über-uns Bereich
   FAQ.tsx               # Häufige Fragen (FAQ)
   Footer.tsx            # Footer mit Standorten, Links & Kontakten
lib/
   constants.ts          # CTA-URL, Telefonnummer, Mail
   locations.ts          # Standorte (Winterthur, SH, TG, Andelfingen)
public/
   # (optional: statische Assets)

🎨 3. Designsystem & Branding
Farben
Name	Hex	Verwendung
InfraOne-Grün	#3C9646	CTAs, Akzente, Hover
Schwarz (Dark)	#0A0A0A	Header, Dark-Mode Hintergrund
Weiss	#FFFFFF	Light-Mode Hintergrund
Hellgrau	rgba(255,255,255,0.7)	Text im Dark Mode
Typografie

Inter (Google Font)

Headline-Schriftgrössen: 48–64px

Body-Text: 18px / 20px (größer & lesbarer wie bei liip.ch)

Sehr viel Weissraum → Swiss UX Style

Komponenten-Philosophie

Jede Komponente ist rein visuell → keine Business-Logik

Theme kommt als Prop (isDark) herein

Footer hat immer Schwarz, unabhängig vom Theme

🌓 4. Theme-System (Dark/Light)

Client-only ("use client")

State:

const [theme, setTheme] = useState<"dark" | "light">("dark")


Speicherung in localStorage

Persistenter Reload

Schaltet Klassen auf <main> um:

isDark ? "bg-[#0A0A0A] text-white" : "bg-white text-black"


Header bleibt im Dark-Stil (Marke stabil)

Footer NIE vom Theme beeinflusst

🗂 5. Daten & Contentquellen
Standorte

Liegt zentral in:

lib/locations.ts


Wird verwendet in:

Footer

JSON-LD Schema

ggf. für automatische Standortlisten

Meta-Daten / Kontakt
lib/constants.ts


Beinhaltet:

CTA URL

Telefonnummer

E-Mail

Vorteile:

Content kann an einem Ort gepflegt werden

Keine Hardcodings in Komponenten

🔍 6. SEO & JSON-LD
Suchbegriffe:

„Informatik Support“

„IT Support Winterthur“

„Informatik-Support.ch“

„IT Dienstleister Winterthur / Zürich“

„KMU IT Support Schweiz“

„Computer Support Winterthur“

JSON-LD Schema (LocalBusiness)

Wird in page.tsx injected:

Firmenname

Standorte (alle 4)

Telefonnummer

E-Mail

Logo

Beschreibung

Zielregion Schweiz

Grundsätze:

Keine Textwiederholungen

Keine Keyword-Stuffing

Natürliches Schweizer Deutsch

Hohe Lesbarkeit für Menschen & Google

🧩 7. Komponentenerläuterung
Header.tsx

Schwarzer Header

InfraOne Logo (größer, prägnant)

Navigation (smooth-hover in Grün)

CTA immer sichtbar

Theme Toggle rechts

Hero.tsx

Markenstarker Einstieg

Claim strukturiert wie liip.ch:

1 Zeile fett + 1 Zeile weich

XXL Typografie

Subline mit Lesetiefe

CTA + Kontaktinfos

Leistungen.tsx

Raster 2–3 Spalten

Jede Dienstleistung in einer Card

Icons: lucide-react (clean)

Perfektes Spacing wie Swiss UX

About.tsx

Zweispaltig

Erklärt Firmenwert & Kompetenzen

Betonung auf regional & schweizweit

FAQ.tsx

Vier Fragen

Helle Boxen (Clean Swiss)

CTA darunter

Footer.tsx

Schwarz, niemals Theme-beeinflusst

3 Spalten:

Unternehmen

Standorte

Links zu InfraOne Domains

Copyright automatisch

🚀 8. Deployment (Netlify)

Einfach:

git add .
git commit -m "new landingpage"
git push


Netlify baut automatisch:

Next.js App Router

SSR

Tailwind

TypeScript

Wenn Bilder von Fremddomains kommen → next.config.ts hat bereits remotePatterns.

🧪 9. Entwicklungsregeln für Zukunft / KI
Wenn eine neue Komponente erstellt wird:

immer in components/

nie Logik in die Komponente setzen

Props wie isDark oder theme immer übergeben

Farben niemals hardcodieren außer im Designsystem oben

Footer bleibt immer tiefschwarz

KI-Hinweis:

Beim Erweitern:

niemals Text spammen oder SEO überladen

Swiss UX bleibt minimalistisch

Abstände gross lassen

Texte klar, sachlich, professionell

keine verspielten Elemente

Dark/Light muss mit theme und isDark arbeiten, nicht „magisch“

🎯 10. Weiterentwicklungsmöglichkeiten

Analytics via Plausible / Netlify Analytics

Animierte Sections (fade-in / slide-up)

Interne Verlinkungen zu InfraOne

Blog / News Sektion

Lead-Formular (Netlify Forms oder eigene API)