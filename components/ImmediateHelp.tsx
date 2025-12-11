"use client";

import { useLanguage } from "./LanguageContext";
import ScrollReveal from "./ScrollReveal";
import { Phone, MousePointer2, MapPin, Building2 } from "lucide-react";

type ImmediateHelpProps = {
    isDark: boolean;
};

export default function ImmediateHelp({ isDark }: ImmediateHelpProps) {
    const { t } = useLanguage();

    const cards = [
        {
            key: "tel",
            icon: <Phone className="w-8 h-8 text-white" />,
            title: t.immediate.tel.title,
            desc: t.immediate.tel.desc,
            bg: "bg-[#3C9646]", // Highlighted
            text: "text-white"
        },
        {
            key: "remote",
            icon: <MousePointer2 className="w-8 h-8 text-[#3C9646]" />,
            title: t.immediate.remote.title,
            desc: t.immediate.remote.desc,
            bg: isDark ? "bg-[#111]" : "bg-white",
            text: isDark ? "text-white" : "text-black"
        },
        {
            key: "onsite",
            icon: <MapPin className="w-8 h-8 text-[#3C9646]" />,
            title: t.immediate.onsite.title,
            desc: t.immediate.onsite.desc,
            bg: isDark ? "bg-[#111]" : "bg-white",
            text: isDark ? "text-white" : "text-black"
        },
        {
            key: "kmu",
            icon: <Building2 className="w-8 h-8 text-[#3C9646]" />,
            title: t.immediate.kmu.title,
            desc: t.immediate.kmu.desc,
            bg: isDark ? "bg-[#111]" : "bg-white",
            text: isDark ? "text-white" : "text-black"
        }
    ];

    return (
        <section className={"py-16 " + (isDark ? "bg-[#0A0A0A]" : "bg-[#F5F5F5]")}>
            <div className="max-w-[1440px] mx-auto px-8">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {cards.map((card, index) => (
                        <ScrollReveal key={card.key} delay={index * 100}>
                            <div className={`h-full p-6 rounded-2xl shadow-lg border ${card.bg} ${isDark ? "border-white/5" : "border-black/5"}`}>
                                <div className="mb-4">
                                    {card.icon}
                                </div>
                                <h3 className={`text-xl font-bold mb-3 ${card.text}`}>{card.title}</h3>
                                <p className={`text-base leading-relaxed ${card.key === 'tel' ? 'text-white/90' : (isDark ? 'text-white/70' : 'text-black/70')}`}>
                                    {card.desc}
                                </p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
