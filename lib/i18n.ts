export type Language = "de" | "en";

export const translations = {
    de: {
        header: {
            services: "Preise",
            about: "Über uns",
            faq: "FAQ",
            contact: "Kontakt",
            logoText: "informatik-support",
        },
        about: {
            header: "Über uns",
            text1: "InfraOne IT Solutions ist Ihr Partner für professionelle Informatik-Dienstleistungen in der Schweiz. Unser Fokus liegt auf schneller, unkomplizierter Hilfe für Privatpersonen und KMU.",
            text2: "Mit Standorten in Winterthur und der Ostschweiz sind wir regional verankert, bieten aber dank modernster Remote-Technologie schweizweit sofortigen Support. Unsere Techniker sind zertifiziert, freundlich und sprechen Ihre Sprache – kein Technik-Chinesisch."
        },
        hero: {
            tag: "Professioneller IT-Support für Privatkunden und KMU.",
            title: "IT Support & Computerhilfe – Sofort. Schweizweit.",
            subtitle: "Akute IT-Probleme bei Computer, Notebook, Server, Netzwerk, Microsoft 365 oder Internet. Wir lösen 90 % der Störungen per Remote-Support innerhalb weniger Minuten. Vor Ort in Zürich, Winterthur, Schaffhausen, Thurgau und St. Gallen.",
            ctaCall: "Jetzt anrufen: 052 222 18 18",
            ctaRemote: "Remote-Support starten",
            trustTrigger: "Schweizer Techniker • Keine Warteschleifen • Klare Stundensätze"
        },
        immediate: {
            tel: {
                title: "Telefonischer Support",
                desc: "Sofortige Problemlösung durch zertifizierte Techniker."
            },
            remote: {
                title: "Remote Support",
                desc: "Schnellste Methode. 90 % aller Probleme lösen wir innert Minuten."
            },
            onsite: {
                title: "Vor-Ort-Support",
                desc: "Region Zürich, Winterthur, Schaffhausen, Thurgau, St. Gallen. Seriös, klar, effizient."
            },
            kmu: {
                title: "KMU-IT-Support",
                desc: "Unterstützung für interne IT, SLA-Modelle, Stellvertretung, Netzwerk-Fehlerbehebung."
            }
        },
        problems: {
            title: "Häufige Probleme, die wir sofort lösen",
            items: [
                "PC startet nicht / schwarzer Bildschirm",
                "Outlook Fehler / E-Mails senden nicht",
                "Viren / Malware / Betrugswarnung",
                "Internet langsam / WLAN instabil",
                "Microsoft 365 Probleme",
                "Drucker funktioniert nicht",
                "Serverstörung / Freigaben weg",
                "Windows Update Fehler",
                "VPN funktioniert nicht",
                "Backup-Warnungen / Daten weg",
                "Netzwerkstörung in KMU",
                "Bluescreen / PC stürzt ab",
                "Kein Ton / Audio defekt"
            ]
        },
        regions: {
            title: "Support in Ihrer Region",
            items: [
                { title: "IT Support Zürich", text: "Vor-Ort-Einsätze im Grossraum Zürich meist am selben Tag möglich. Remote-Support jederzeit schweizweit. Auch für KMU mit mehreren Standorten im Grossraum Zürich." },
                { title: "IT Support Winterthur", text: "Hauptstandort. Vor Ort innert kurzer Zeit. Ihre lokale Computerhilfe." },
                { title: "IT Support Schaffhausen / Thurgau / St. Gallen", text: "Vor-Ort-Einsätze im Grossraum Ostschweiz meist am selben Tag möglich. Remote-Support jederzeit. Betreuung für Industrie, Gewerbe und Verwaltungen in der Ostschweiz." },
                { title: "Remote Support Deutschschweiz", text: "Sofortige Hilfe ohne Wartezeit. Egal wo Sie sind." }
            ]
        },
        trust: {
            title: "Warum InfraOne für Support?",
            items: [
                "Keine Warteschleife",
                "Reaktionszeit im Notfall: 1–2 Stunden",
                "Schweizer Techniker",
                "Transparente Preise",
                "Remote-Fixrate sehr hoch",
                "Erfahrung aus KMU- und Privatkunden-Support",
                "Keine Vertragsbindung für Privatkunden",
                "Keine Mindeststunden bei Notfalleinsätzen"
            ],
            linkText: "Mehr über InfraOne"
        },
        pricing: {
            title: "IT-Support Preise & Einsatzzeiten",
            rates: [
                { title: "Telefon- & Remote-Support", price: "CHF 130.– / h", billing: "Mindestverrechnung: 15 Minuten" },
                { title: "Vor-Ort-Support (Privatkunden)", price: "CHF 145.– / h", billing: "Mindestverrechnung: 30 Minuten" },
                { title: "Vor-Ort-Support (Firma / KMU)", price: "CHF 167.– / h", billing: "Mindestverrechnung: 30 Minuten" },
                { title: "Schulungen / Workshops / Beratung", price: "CHF 200.– / h", billing: "Nach Aufwand" }
            ],
            surcharges: {
                title: "Supportzeiten & Zuschläge",
                items: [
                    { time: "Mo–Fr 08:00–17:00", text: "regulärer Tarif" },
                    { time: "Mo–Fr 17:00–23:00", text: "+25 % Zuschlag" },
                    { time: "Samstag / Sonntag / Feiertage", text: "+50 % Zuschlag" },
                    { time: "23:00–08:00", text: "nur mit SLA, +100 % Zuschlag" }
                ],
                note: "Support bis 23:00 Uhr sowie an Wochenenden und Feiertagen ist verfügbar (mit Zuschlag, Best-Effort).\nOhne aktives SLA sind Einsätze zwischen 23:00 und 08:00 Uhr ausgeschlossen."
            },
            emergency: {
                text: "IT-Notfall – Telefon & WhatsApp",
                number: "076 587 50 55",
                subtext: "Sofort erreichbar bis 23:00 Uhr"
            },
            travel: {
                free: "Grossraum Winterthur & Andelfingen: keine Anfahrtskosten",
                paid: "Übrige Regionen: CHF 2.00 / km",
                note: "Pro gefahrenem Kilometer (Hin- und Rückweg kombiniert). Verrechnung ab Standort Winterthur."
            },
            seoText: "Unsere IT Support Preise sind transparent. Wir bieten faire Computerhilfe Kosten Schweiz und einen klaren Informatiker Stundensatz. Ihr Remote Support Schweiz für den IT Notfall.",
            ctaCall: "Jetzt anrufen",
            ctaRemote: "Remote-Support starten"
        },
        faq: {
            title: "Häufige Fragen",
            items: [
                { q: "Wie schnell erhalte ich IT Support im Notfall?", a: "Im Notfall (Pikett) reagieren wir sofort. Während den Bürozeiten haben Sie direkt einen Techniker am Apparat oder werden innert Kürze zurückgerufen." },
                { q: "Bieten Sie Support für Privatkunden?", a: "Ja. Wir unterstützen Privatpersonen genauso professionell wie Firmenkunden bei allen Computer- und Internetproblemen." },
                { q: "Können Sie Outlook- und E-Mail-Probleme sofort lösen?", a: "Ja. 90% dieser Probleme lösen wir direkt per Fernwartung, ohne dass jemand vorbeikommen muss." },
                { q: "Haben Sie Telefon-Support für die ganze Schweiz?", a: "Ja. Unser Remote-Support ist schweizweit verfügbar." },
                { q: "Lösen Sie Server- und Netzwerkprobleme für KMU?", a: "Absolut. Das ist unser Kerngeschäft. Wir betreuen ganze Server-Infrastrukturen und Firmennetzwerke." },
                { q: "Was kostet Remote-Support?", a: "Wir verrechnen transparent nach Zeitaufwand. Die aktuellen Ansätze finden Sie unter Preise." },
                { q: "Was mache ich, wenn mein Computer nicht startet?", a: "Rufen Sie an. Oft können wir per Telefon erste Tipps geben oder kommen vorbei, um die Hardware zu prüfen." },
                { q: "Wie wird die Fahrzeit verrechnet?", a: "Nur Kilometer, keine separate Fahrzeitpauschale." },
                { q: "Wie erfolgt die Abrechnung bei Abbruch?", a: "Verrechnung nur angefangene Intervalle gemäss Mindestverrechnung." },
                { q: "Gibt es eine Mindestdauer bei Notfalleinsätzen?", a: "Nein. Es gilt ausschliesslich die jeweilige Mindestverrechnung gemäss Einsatzart (Remote 15 Minuten, Vor Ort 30 Minuten)." }
            ],
            cta: "Frage stellen"
        },
        footer: {
            brand: "InfraOne IT Solutions GmbH",
            text: "Cloud-Telefonanlagen, IT-Netzwerke & Betrieb für KMU in der Schweiz. Aktiv in Winterthur, Schaffhausen, Thurgau & gesamter Deutschschweiz.",
            locations: "Regionen",
            links: "Websites",
            copyright: "Alle Rechte vorbehalten.",
            contact: "Kontakt",
            websites: "Websites & Projekte"
        },
        cookie: {
            text: "Wir verwenden Cookies für eine optimale Erfahrung.",
            acceptAll: "Alle akzeptieren",
            essential: "Nur Essenzielle"
        }
    },
    en: {
        header: {
            services: "Pricing",
            about: "About Us",
            faq: "FAQ",
            contact: "Contact",
            logoText: "informatik-support.ch",
        },
        about: {
            header: "About Us",
            text1: "InfraOne IT Solutions is your partner for professional IT services in Switzerland. Our focus is on fast, uncomplicated help for private individuals and SMEs.",
            text2: "With locations in Winterthur and Eastern Switzerland, we are regionally anchored, but thanks to state-of-the-art remote technology, we offer immediate support throughout Switzerland. Our technicians are certified, friendly and speak your language – no tech jargon."
        },
        hero: {
            tag: "Professional IT Support for Private Clients & SMEs.",
            title: "IT Support & Computer Help – Instant. Switzerland-wide.",
            subtitle: "Acute IT problems with computer, notebook, server, network, Microsoft 365 or Internet. We solve 90% of disruptions via remote support within a few minutes. On-site in Zurich, Winterthur, Schaffhausen, Thurgau and St. Gallen.",
            ctaCall: "Call now: 052 222 18 18",
            ctaRemote: "Start Remote Support",
            trustTrigger: "Swiss Technicians • No Waiting Loops • Clear Hourly Rates"
        },
        immediate: {
            tel: {
                title: "Telephone Support",
                desc: "Immediate problem solving by certified technicians."
            },
            remote: {
                title: "Remote Support",
                desc: "Fastest method. We solve 90% of all problems within minutes."
            },
            onsite: {
                title: "On-Site Support",
                desc: "Region Zurich, Winterthur, Schaffhausen, Thurgau, St. Gallen. Serious, clear, efficient."
            },
            kmu: {
                title: "SME IT Support",
                desc: "Support for internal IT, SLA models, substitution, network troubleshooting."
            }
        },
        problems: {
            title: "Common problems we solve immediately",
            items: [
                "PC won't start / black screen",
                "Outlook error / emails won't send",
                "Virus / Malware / Fraud warning",
                "Internet slow / WLAN unstable",
                "Microsoft 365 problems",
                "Printer not working",
                "Server disruption / shares gone",
                "Windows update error",
                "VPN not working",
                "Backup warnings / data lost",
                "Network disruption in SME",
                "Bluescreen / PC crashes",
                "No Sound / Audio defective"
            ]
        },
        regions: {
            title: "Support in your region",
            items: [
                { title: "IT Support Zurich", text: "On-site missions in the greater Zurich area usually possible on the same day. Remote support anytime Switzerland-wide." },
                { title: "IT Support Winterthur", text: "Main location. On-site within a short time. Your local computer help." },
                { title: "IT Support Schaffhausen / Thurgau / St. Gallen", text: "On-site missions in Eastern Switzerland usually possible on the same day. Remote support anytime." },
                { title: "Remote Support German Switzerland", text: "Immediate help without waiting time. Wherever you are." }
            ]
        },
        trust: {
            title: "Why InfraOne for Support?",
            items: [
                "No waiting loops",
                "Response time in emergency: 1–2 hours",
                "Swiss Technicians",
                "Transparent Prices",
                "Remote fix rate very high",
                "Experience from SME and private client support",
                "No strict contracts for private clients",
                "No minimum hours for emergency missions"
            ],
            linkText: "More about InfraOne"
        },
        pricing: {
            title: "IT Support Prices & Service Times",
            rates: [
                { title: "Phone & Remote Support", price: "CHF 130.– / h", billing: "Min. billing: 15 minutes" },
                { title: "On-Site Support (Private)", price: "CHF 145.– / h", billing: "Min. billing: 30 minutes" },
                { title: "On-Site Support (Company / SME)", price: "CHF 167.– / h", billing: "Min. billing: 30 minutes" },
                { title: "Training / Workshops / Consulting", price: "CHF 200.– / h", billing: "Based on effort" }
            ],
            surcharges: {
                title: "Service Times & Surcharges",
                items: [
                    { time: "Mon–Fri 08:00–17:00", text: "Regular rate" },
                    { time: "Mon–Fri 17:00–23:00", text: "+25 % Surcharge" },
                    { time: "Sat / Sun / Holidays", text: "+50 % Surcharge" },
                    { time: "23:00–08:00", text: "SLA only, +100 % Surcharge" }
                ],
                note: "Support until 23:00 as well as on weekends and holidays is available (with surcharge, Best-Effort).\nWithout active SLA, missions between 23:00 and 08:00 are excluded."
            },
            emergency: {
                text: "IT Emergency – Phone & WhatsApp",
                number: "076 587 50 55",
                subtext: "Immediately available until 23:00"
            },
            travel: {
                free: "Greater Winterthur & Andelfingen area: no travel costs",
                paid: "Other regions: CHF 2.00 / km",
                note: "Per driven km (return trip combined). Billing from location Winterthur."
            },
            seoText: "Our IT support prices are transparent. We offer fair computer help costs in Switzerland and a clear IT technician hourly rate. Your remote support Switzerland for IT emergencies.",
            ctaCall: "Call now",
            ctaRemote: "Start Remote Support"
        },
        faq: {
            title: "Frequently Asked Questions",
            items: [
                { q: "How quickly do I get IT support in an emergency?", a: "In an emergency, we react immediately. During office hours you have a technician on the line directly or will be called back shortly." },
                { q: "Do you offer support for private clients?", a: "Yes. We support private individuals just as professionally as corporate clients with all computer and internet problems." },
                { q: "Can you solve Outlook and email problems immediately?", a: "Yes. We solve 90% of these problems directly via remote maintenance without anyone needing to come by." },
                { q: "Do you have telephone support for the whole of Switzerland?", a: "Yes. Our remote support is available throughout Switzerland." },
                { q: "Do you solve server and network problems for SMEs?", a: "Absolutely. That is our core business. We manage entire server infrastructures and company networks." },
                { q: "What does remote support cost?", a: "We bill transparently based on time expenditure. You can find current rates under Prices." },
                { q: "What do I do if my computer won't start?", a: "Call us. Often we can give initial tips over the phone or come by to check the hardware." },
                { q: "How is travel time billed?", a: "Only kilometers, no separate travel time fee." },
                { q: "How is billing handled if cancelled?", a: "Billing of started intervals only according to minimum billing." },
                { q: "Is there a minimum duration for emergency missions?", a: "No. Only the respective minimum billing applies according to the type of mission (Remote 15 minutes, On-site 30 minutes)." }
            ],
            cta: "Ask a question"
        },
        footer: {
            brand: "InfraOne IT Solutions GmbH",
            text: "Cloud phone systems, IT networks & operations for SMEs in Switzerland. Active in Winterthur, Schaffhausen, Thurgau & all of German-speaking Switzerland.",
            locations: "Regions",
            links: "Websites",
            copyright: "All rights reserved.",
            contact: "Contact",
            websites: "Websites & Projects"
        },
        cookie: {
            text: "We use cookies for an optimal experience.",
            acceptAll: "Accept All",
            essential: "Essential Only"
        }
    }
};
