"use client";

import { useLanguage } from "./LanguageContext";
import ScrollReveal from "./ScrollReveal";
import Image from "next/image";

type AboutProps = {
    isDark: boolean;
};

export default function About({ isDark }: AboutProps) {
    const { t } = useLanguage();

    return (
        <section id="about" className={"py-20 " + (isDark ? "bg-[#0A0A0A]" : "bg-gray-50")}>
            <div className="max-w-[1440px] mx-auto px-8">
                <div className="grid md:grid-cols-2 gap-12 items-center">

                    <ScrollReveal>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                            {t.about.header}
                        </h2>
                        <p className={"text-lg leading-relaxed mb-6 " + (isDark ? "text-white/80" : "text-black/80")}>
                            {t.about.text1}
                        </p>
                        <p className={"text-lg leading-relaxed " + (isDark ? "text-white/80" : "text-black/80")}>
                            {t.about.text2}
                        </p>
                    </ScrollReveal>

                    <ScrollReveal delay={200}>
                        <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="/teampicture.jpg"
                                alt="computer support winterthur"
                                fill
                                className="object-cover object-right"
                                priority
                            />
                        </div>
                    </ScrollReveal>

                </div>
            </div>
        </section>
    );
}
