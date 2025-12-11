import Link from "next/link";

const CTA = "https://www.infraone.ch/kontakt";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-slate-50">
      {/* HERO */}
      <section className="px-6 pt-24 pb-20 max-w-6xl mx-auto">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Professioneller <span className="text-[#3C9646]">Informatik-Support</span> für KMU in Winterthur
          </h1>

          <p className="mt-5 text-lg text-slate-300 leading-relaxed">
            Moderne IT-Unterstützung für kleine & mittlere Unternehmen:
            Stabil, sicher, transparent – ohne Fachjargon. Wir sorgen dafür,
            dass Ihre IT läuft, bevor Probleme entstehen.
          </p>

          <a
            href={CTA}
            className="inline-block mt-8 bg-[#3C9646] hover:bg-[#37a03f] text-black font-semibold px-7 py-3 rounded-full shadow-lg"
          >
            Jetzt Informatik-Support anfragen
          </a>
        </div>
      </section>

      {/* USPs */}
      <section className="px-6 pb-14 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Schneller IT-Support",
              text: "Reaktionsschnell per Remote oder direkt vor Ort in Winterthur.",
            },
            {
              title: "KMU-spezialisierter Partner",
              text: "Klare Lösungen, verständlich erklärt – passend zu Ihrem Unternehmen.",
            },
            {
              title: "Cyber-Sicherheit inklusive",
              text: "Firewall, Antivirus, Monitoring & Backups – alles aus einer Hand.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-slate-800 bg-[#111] p-6"
            >
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* LEISTUNGEN */}
      <section className="px-6 py-16 border-t border-slate-800 bg-[#0F0F0F]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold">
            IT Support Winterthur – Unsere Leistungen
          </h2>
          <p className="mt-3 max-w-2xl text-slate-300">
            Ganzheitliche Informatik-Dienstleistungen für eine stabile, sichere
            und verlässliche IT-Umgebung.
          </p>

          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {[
              {
                title: "Microsoft 365 & Arbeitsplätze",
                text: "Einrichtung, Benutzerverwaltung, E-Mail, Teams, OneDrive & SharePoint.",
              },
              {
                title: "Server & Virtualisierung",
                text: "Windows Server, Linux, Proxmox, Backups, Monitoring & Security.",
              },
              {
                title: "Firewalls & Netzwerke",
                text: "FortiGate, Sophos, VLANs, WLAN, VPN, Standort-Vernetzung.",
              },
              {
                title: "Backup & Cyber-Security",
                text: "Ransomware-Schutz, Offsite-Backup, MFA, Patch-Management.",
              },
              {
                title: "IT Outsourcing & Betreuung",
                text: "Laufender Informatik-Support mit festen Ansprechpartnern.",
              },
              {
                title: "Projektbegleitung",
                text: "Hardware-Erneuerung, Cloud-Migration, Providerwechsel.",
              },
            ].map((i) => (
              <div
                key={i.title}
                className="rounded-xl p-5 border border-slate-800 bg-[#121212]"
              >
                <h3 className="font-semibold text-white">{i.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{i.text}</p>
              </div>
            ))}
          </div>

          <a
            href={CTA}
            className="inline-block mt-10 bg-[#3C9646] hover:bg-[#37a03f] text-black font-semibold px-7 py-3 rounded-full"
          >
            Offerte für IT Support anfordern
          </a>
        </div>
      </section>

      {/* KMU SECTION */}
      <section className="px-6 py-16 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold">
              massgeschneiderter Informatik-Support für KMU
            </h2>
            <p className="mt-4 text-slate-300 leading-relaxed">
              Wir begleiten Unternehmen mit 5 bis 150 Mitarbeitenden. Egal ob
              Handwerk, Industrie, Immobilien, Beratung oder Behörden –
              wir bringen Ordnung, Sicherheit und Transparenz in Ihre IT.
            </p>

            <ul className="mt-5 space-y-2 text-sm text-slate-300">
              <li>• Für KMU ohne eigene IT-Abteilung</li>
              <li>• Für schnell wachsende Unternehmen</li>
              <li>• Für Firmen mit Sicherheits- und Compliance-Anforderungen</li>
              <li>• Für Organisationen, die planbare IT-Kosten wollen</li>
            </ul>

            <a
              href={CTA}
              className="inline-block mt-6 border border-[#3C9646] text-[#3C9646] hover:bg-[#3C9646] hover:text-black px-6 py-3 rounded-full font-semibold"
            >
              Jetzt beraten lassen
            </a>
          </div>

          <div className="bg-[#111] border border-slate-800 rounded-2xl p-6">
            <h3 className="text-lg font-semibold">Typische Probleme, die wir lösen:</h3>
            <ul className="mt-4 text-sm text-slate-300 space-y-3">
              <li>• Unzuverlässige IT oder ständige Ausfälle</li>
              <li>• Keine Backups oder unsichere Datenhaltung</li>
              <li>• Langsame Computer und schlecht eingerichtete Netzwerke</li>
              <li>• Keine Security-Strategie oder fehlende Firewall</li>
              <li>• Unklare Zuständigkeiten oder wechselnde IT-Partner</li>
            </ul>
            <p className="mt-3 text-slate-400 text-sm">
              Mit InfraOne schaffen wir Stabilität – dauerhaft.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-16 border-t border-slate-800 bg-[#0F0F0F]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Häufig gestellte Fragen
          </h2>

          <div className="mt-8 grid md:grid-cols-2 gap-6">
            {[
              {
                q: "Bieten Sie Informatik-Support nur in Winterthur an?",
                a: "Schwerpunkt: Winterthur & Zürich. Remote-Support: ganze Schweiz.",
              },
              {
                q: "Gibt es lange Mindestlaufzeiten?",
                a: "Nein. Flexible Modelle von Stundenpaketen bis Full Managed Services.",
              },
              {
                q: "Können Sie unseren aktuellen IT-Partner ablösen?",
                a: "Ja – professionell, geordnet und ohne Unterbruch.",
              },
              {
                q: "Unterstützen Sie auch Microsoft 365 & Cloud?",
                a: "Ja. Wir kombinieren klassische IT mit moderner Cloud-Infrastruktur.",
              },
            ].map((item) => (
              <div key={item.q} className="bg-[#111] border border-slate-800 rounded-xl p-5">
                <h3 className="font-semibold">{item.q}</h3>
                <p className="mt-2 text-sm text-slate-300">{item.a}</p>
              </div>
            ))}
          </div>

          <a
            href={CTA}
            className="inline-block mt-10 bg-[#3C9646] hover:bg-[#37a03f] text-black font-semibold px-6 py-3 rounded-full"
          >
            Frage stellen / Rückruf anfordern
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-6 py-6 border-t border-slate-800 text-center text-xs text-slate-500">
        informatik-support.ch – betrieben von InfraOne IT Solutions GmbH, Winterthur
      </footer>
    </main>
  );
}
