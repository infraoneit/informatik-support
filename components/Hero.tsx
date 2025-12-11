"use client";

import { useLanguage } from "./LanguageContext";
import ScrollReveal from "./ScrollReveal";
import { Phone, MousePointer2 } from "lucide-react";

type HeroProps = {
  isDark: boolean;
};

export default function Hero({ isDark }: HeroProps) {
  const { t } = useLanguage();

  return (
    <section className="max-w-[1440px] mx-auto px-8 pt-20 pb-20 md:pt-32 md:pb-24">
      <div className="flex flex-col items-start max-w-4xl">

        <ScrollReveal>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
            {t.hero.title}
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <p className={"text-lg md:text-2xl leading-relaxed mb-10 max-w-3xl " + (isDark ? "text-white/80" : "text-black/80")}>
            {t.hero.subtitle}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <a
              href="tel:0522221818"
              className="flex items-center justify-center gap-3 px-10 py-5 bg-[#3C9646] text-white rounded-lg font-bold text-xl hover:bg-[#2d7e36] transition shadow-lg w-full sm:w-auto transform hover:scale-105"
            >
              <Phone className="w-6 h-6" />
              {t.hero.ctaCall}
            </a>

            <a
              href="https://anydesk.com/de/downloads/thank-you?dv=win_exe"
              target="_blank"
              rel="noopener noreferrer"
              className={"flex items-center justify-center gap-3 px-8 py-4 rounded-lg font-bold text-lg border-2 transition w-full sm:w-auto " +
                (isDark ? "border-white/20 hover:border-white hover:bg-white/5 text-white" : "border-black/20 hover:border-black hover:bg-black/5 text-black")}
            >
              <MousePointer2 className="w-6 h-6" />
              {t.hero.ctaRemote}
            </a>
          </div>

          {/* Trust Trigger */}
          <p className={"text-xs md:text-sm font-medium tracking-wider uppercase opacity-70 mb-12 " + (isDark ? "text-gray-400" : "text-gray-600")}>
            {t.hero.trustTrigger}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <p className={"text-base font-medium " + (isDark ? "text-white/50" : "text-black/50")}>
            {t.hero.tag}
          </p>
        </ScrollReveal>

      </div>
    </section>
  );
}
