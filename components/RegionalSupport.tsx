"use client";

import { useLanguage } from "./LanguageContext";
import { MapPin } from "lucide-react";

type RegionalSupportProps = {
    isDark: boolean;
};

export default function RegionalSupport({ isDark }: RegionalSupportProps) {
    const { t } = useLanguage();

    return (
        <section className={"py-20 " + (isDark ? "bg-[#0A0A0A]" : "bg-[#F8F8F8]")}>
            <div className="max-w-[1440px] mx-auto px-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 tracking-tight">
                    {t.regions.title}
                </h2>

                <div className="grid gap-8 md:grid-cols-2">
                    {t.regions.items.map((item, index) => (
                        <div key={index} className="flex gap-4">
                            <div className="mt-1">
                                <MapPin className="w-6 h-6 text-[#3C9646]" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                <p className={"text-lg leading-relaxed " + (isDark ? "text-white/70" : "text-black/70")}>
                                    {item.text}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
