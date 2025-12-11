"use client";

import { CheckCircle2, ArrowRight } from "lucide-react";
import { useLanguage } from "./LanguageContext";

type TrustProps = {
    isDark: boolean;
};

export default function Trust({ isDark }: TrustProps) {
    const { t } = useLanguage();

    return (
        <section className={isDark ? "py-24 bg-[#0A0A0A]" : "py-24 bg-white"}>
            <div className="max-w-[1440px] mx-auto px-8">
                {/* Changed layout to simple stack or grid depending on length. Grid is good. */}
                <div className="grid lg:grid-cols-2 gap-16 items-start">

                    {/* Text Content */}
                    <div className="animate-fade-in">
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
                            {t.trust.title}
                        </h2>
                        <div className="mt-8">
                            <a
                                href="https://www.infraone.ch/unternehmen"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-[#3C9646] font-semibold hover:underline group"
                            >
                                {t.trust.linkText}
                                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </a>
                        </div>
                    </div>

                    {/* Benefits Grid - Vertical List or Grid? Map says items array. Grid is safer for key/values. */}
                    <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 animate-fade-in delay-100">
                        {t.trust.items.map((benefit) => (
                            <div
                                key={benefit}
                                className={
                                    "flex items-center gap-3 p-4 rounded-xl border transition hover:scale-[1.02] duration-300 text-lg " +
                                    (isDark
                                        ? "bg-[#0f0f0f] border-white/10 hover:border-[#3C9646]/50"
                                        : "bg-gray-50 border-black/5 hover:border-[#3C9646]/50")
                                }
                            >
                                <CheckCircle2 className="w-6 h-6 text-[#3C9646] flex-shrink-0" />
                                <span className="font-medium">{benefit}</span>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
