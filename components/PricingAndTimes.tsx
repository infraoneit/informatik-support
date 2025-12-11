"use client";

import { useLanguage } from "./LanguageContext";
import ScrollReveal from "./ScrollReveal";
import { Phone, MousePointer2, AlertCircle } from "lucide-react";

type PricingAndTimesProps = {
    isDark: boolean;
};

export default function PricingAndTimes({ isDark }: PricingAndTimesProps) {
    const { t } = useLanguage() as any;

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "InfraOne IT Solutions GmbH",
        "image": "https://informatik-support.ch/infraone-logo-weiss.svg",
        "telephone": "0522221818",
        "priceRange": "CHF 130 - CHF 200",
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "08:00",
                "closes": "17:00"
            }
        ],
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+41765875055",
            "contactType": "emergency",
            "availableLanguage": ["German", "English"]
        },
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "IT Support Services",
            "itemListElement": t?.pricing?.rates?.map((rate: any) => ({
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": rate.title
                },
                "price": rate.price.replace("CHF ", "").replace(".– / h", ""),
                "priceCurrency": "CHF"
            }))
        }
    };

    return (
        <section id="prices" className={"py-24 border-t " + (isDark ? "bg-[#0F0F0F] border-white/5" : "bg-white border-black/5")}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <div className="max-w-[1440px] mx-auto px-8">
                <ScrollReveal>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-16 text-center">
                        {t?.pricing?.title}
                    </h2>
                </ScrollReveal>

                {/* 1. Rates Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {t?.pricing?.rates?.map((rate: any, index: number) => (
                        <ScrollReveal key={index} delay={index * 100} className="h-full">
                            <div
                                className={"h-full p-8 rounded-2xl flex flex-col justify-between border transition hover:border-[#3C9646] " +
                                    (isDark ? "bg-[#151515] border-white/10" : "bg-gray-50 border-black/10")}
                            >
                                <div>
                                    <h3 className={"text-lg font-medium mb-4 " + (isDark ? "text-white/70" : "text-black/70")}>{rate.title}</h3>
                                    <div className="text-3xl font-bold text-[#3C9646] mb-4">{rate.price}</div>
                                </div>
                                <div className={"text-sm font-medium border-t pt-4 " + (isDark ? "border-white/10 text-white/50" : "border-black/10 text-black/50")}>
                                    {rate.billing}
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>

                {/* 2. Times & Surcharges + Emergency Grid */}
                <div className="grid lg:grid-cols-2 gap-8 mb-16">

                    {/* Times Block */}
                    <ScrollReveal delay={200} className="h-full">
                        <div className={"p-8 rounded-2xl border h-full " + (isDark ? "bg-[#111] border-white/10" : "bg-white border-black/10")}>
                            <h3 className="text-2xl font-bold mb-6">{t?.pricing?.surcharges?.title}</h3>
                            <div className="space-y-4 mb-8">
                                {t?.pricing?.surcharges?.items?.map((item: any, i: number) => {
                                    let itemStyle = "border-gray-700/30";
                                    if (i === 1 || i === 2) itemStyle = "border-yellow-500/50 bg-yellow-500/5 rounded px-2"; // Evening/Weekend
                                    if (i === 3) itemStyle = "border-red-500/50 bg-red-500/10 rounded px-2"; // Night/SLA

                                    return (
                                        <div key={i} className={`flex justify-between items-center border-b pb-2 ${itemStyle} ${i === 0 ? "border-dashed border-gray-700/30" : "mb-2 border-solid"}`}>
                                            <span className="font-mono font-medium">{item.time}</span>
                                            <span className={i > 0 ? (i === 3 ? "text-red-500 font-bold" : "text-yellow-600 font-bold") : (isDark ? "text-white/70" : "text-black/70")}>
                                                {item.text}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                            <div className="flex gap-3 p-4 rounded bg-[#3C9646]/10 border border-[#3C9646]/20">
                                <AlertCircle className="w-6 h-6 text-[#3C9646] flex-shrink-0 mt-0.5" />
                                <p className={"text-sm leading-relaxed whitespace-pre-line " + (isDark ? "text-white/80" : "text-black/80")}>
                                    {t?.pricing?.surcharges?.note}
                                </p>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Emergency & Travel Block */}
                    <ScrollReveal delay={300} className="h-full">
                        <div className="flex flex-col gap-8 h-full">

                            {/* Emergency Box */}
                            <div className="flex-1 p-8 rounded-2xl bg-[#3C9646] text-white shadow-xl flex flex-col justify-center items-center text-center relative overflow-hidden group">
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition"></div>
                                <div className="relative z-10">
                                    <h3 className="text-xl font-bold mb-2 uppercase tracking-wide">{t?.pricing?.emergency?.text}</h3>
                                    <a href="tel:0765875055" className="block text-4xl md:text-5xl font-black my-4 hover:scale-105 transition-transform">
                                        {t?.pricing?.emergency?.number}
                                    </a>
                                    <a href="https://wa.me/41765875055" target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-[#3C9646] px-4 py-1 rounded-full text-sm font-bold mb-4 hover:bg-gray-100">
                                        WhatsApp
                                    </a>
                                    <p className="text-white/90 font-medium">{t?.pricing?.emergency?.subtext}</p>
                                </div>
                            </div>

                            {/* Travel Costs */}
                            <div className={"p-8 rounded-2xl border flex-1 flex flex-col justify-center " + (isDark ? "bg-[#111] border-white/10" : "bg-white border-black/10")}>
                                <h3 className="text-xl font-bold mb-4">Anfahrtskosten</h3>
                                <ul className="space-y-2 mb-4">
                                    <li className="flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#3C9646]"></span>
                                        <span className={isDark ? "text-white/80" : "text-black/80"}>{t?.pricing?.travel?.free}</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#3C9646]"></span>
                                        <span className={isDark ? "text-white/80" : "text-black/80"}>{t?.pricing?.travel?.paid}</span>
                                    </li>
                                </ul>
                                <p className={"text-sm " + (isDark ? "text-white/50" : "text-black/50")}>{t?.pricing?.travel?.note}</p>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>

                {/* 3. Action Buttons & SEO Text */}
                <div className="flex flex-col items-center">
                    <div className="flex flex-col sm:flex-row gap-4 mb-12">
                        <a
                            href="tel:0522221818"
                            className="flex items-center justify-center gap-3 px-8 py-4 bg-[#3C9646] text-white rounded-lg font-bold text-lg hover:bg-[#2d7e36] transition shadow-lg w-full sm:w-auto"
                        >
                            <Phone className="w-6 h-6" />
                            {t?.pricing?.ctaCall}
                        </a>

                        <a
                            href="https://anydesk.com/de/downloads/thank-you?dv=win_exe"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={"flex items-center justify-center gap-3 px-8 py-4 rounded-lg font-bold text-lg border-2 transition w-full sm:w-auto " +
                                (isDark ? "border-white/20 hover:border-white hover:bg-white/5 text-white" : "border-black/20 hover:border-black hover:bg-black/5 text-black")}
                        >
                            <MousePointer2 className="w-6 h-6" />
                            {t?.pricing?.ctaRemote}
                        </a>
                    </div>

                    {/* Invisible SEO Text */}
                    <p className="opacity-0 h-0 w-0 overflow-hidden text-[0px]">
                        {t?.pricing?.seoText}
                    </p>
                </div>

            </div>
        </section>
    );
}
