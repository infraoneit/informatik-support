"use client";

import { useLanguage } from "./LanguageContext";
import { CTA_URL, PHONE, EMAIL } from "@/lib/constants";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-black text-white py-20 mt-0 font-sans text-base">
      <div className="max-w-[1440px] mx-auto px-8 grid gap-8 md:grid-cols-3">

        {/* COLUMN 1: Brand & Desc & Locations */}
        <div>
          <h3 className="text-xl font-bold mb-6">InfraOne IT Solutions GmbH</h3>
          <p className="text-[#999999] leading-relaxed mb-8 max-w-md text-lg">
            Cloud-Telefonanlagen, IT-Netzwerke & Betrieb für KMU in der Schweiz.
            Aktiv in Winterthur, Schaffhausen, Thurgau & gesamter Deutschschweiz.
          </p>

          <div className="flex flex-col gap-2 text-lg">
            {[
              { name: "IT-Support Winterthur", url: "https://www.google.com/maps/search/?api=1&query=InfraOne+IT+Solutions+Winterthur" },
              { name: "IT-Support Schaffhausen", url: "https://www.google.com/maps/search/?api=1&query=InfraOne+IT+Solutions+Schaffhausen" },
              { name: "IT Support Thurgau", url: "https://www.google.com/maps/search/?api=1&query=InfraOne+IT+Solutions+Tägerwilen" },
              { name: "IT-Support Andelfingen", url: "https://www.google.com/maps/search/?api=1&query=InfraOne+IT+Solutions+Kleinandelfingen" }
            ].map(loc => (
              <a
                key={loc.name}
                href={loc.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#3C9646] hover:underline cursor-pointer transition-colors hover:text-[#4db85a]"
              >
                {loc.name}
              </a>
            ))}
          </div>
        </div>

        {/* COLUMN 2: Contact & Button */}
        <div>
          <h3 className="text-xl font-bold mb-6">Kontakt</h3>
          <div className="flex flex-col gap-1 text-[#999999] mb-8 text-lg">
            <span>Tel. {PHONE}</span>
            <a href={`mailto:${EMAIL}`} className="text-[#3C9646] hover:underline hover:text-[#4db85a]">
              {EMAIL}
            </a>
          </div>

          <a
            href={CTA_URL}
            className="inline-block px-6 py-3 bg-[#3C9646] text-black font-semibold rounded hover:bg-[#2d7e36] transition-colors text-lg"
          >
            Kontaktformular öffnen
          </a>
        </div>

        {/* COLUMN 3: Websites & Projects */}
        <div>
          <h3 className="text-xl font-bold mb-6">Websites & Projekte</h3>
          <div className="flex flex-col gap-3 text-lg">
            {[
              { text: "infraone.ch", url: "https://www.infraone.ch" },
              { text: "cloud-telefonanlagen.ch", url: "https://www.cloud-telefonanlagen.ch" },
              { text: "informatik-schweiz.ch", url: "https://www.informatik-schweiz.ch" },
              { text: "informatik-support.ch", url: "https://www.informatik-support.ch" },
              { text: "werbebildschirme.ch", url: "https://www.werbebildschirme.ch" }
            ].map(link => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#3C9646] hover:underline hover:text-[#4db85a]"
              >
                {link.text}
              </a>
            ))}
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="max-w-[1440px] mx-auto px-8 mt-20 pt-8 border-t border-[#222] flex flex-col md:flex-row justify-between text-base text-[#888] gap-4">
        <div>
          © {new Date().getFullYear()} – InfraOne IT Solutions GmbH
        </div>
        <div className="flex gap-6">
          <a href="https://www.infraone.ch/agb" target="_blank" className="hover:text-white">AGB</a>
          <a href="https://www.infraone.ch/datenschutz" target="_blank" className="hover:text-white">Datenschutz</a>
          <a href="https://www.infraone.ch/impressum" target="_blank" className="hover:text-white">Impressum</a>
        </div>
        <div>
          Webdesign & Realisation: InfraOne IT Solutions
        </div>
      </div>
    </footer>
  );
}
