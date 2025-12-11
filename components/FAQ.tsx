import { CTA_URL } from "@/lib/constants";
import { useLanguage } from "./LanguageContext";
import ScrollReveal from "./ScrollReveal";

type FAQProps = {
  isDark: boolean;
};

export default function FAQ({ isDark }: FAQProps) {
  const { t } = useLanguage();
  const boxBase = "rounded-xl p-6 border";
  const boxTheme = isDark
    ? "border-white/10 bg-[#111]"
    : "border-black/10 bg-white";

  return (
    <section
      id="faq"
      className={
        "py-24 border-t " +
        (isDark ? "border-white/10 bg-[#0F0F0F]" : "border-black/10 bg-[#F8F8F8]")
      }
    >
      <div className="max-w-[1440px] mx-auto px-8">
        <ScrollReveal>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            {t.faq.title}
          </h2>
        </ScrollReveal>

        <div className="mt-12 grid gap-10 md:grid-cols-2">
          {t.faq.items.map((item, index) => (
            <ScrollReveal key={item.q} delay={index * 50}>
              <div className={`${boxBase} ${boxTheme} h-full`}>
                <h3 className="text-xl font-bold mb-3">{item.q}</h3>
                <p
                  className={
                    "mt-2 text-lg leading-relaxed " +
                    (isDark ? "text-white/60" : "text-black/70")
                  }
                >
                  {item.a}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={200}>
          <a
            href={CTA_URL}
            className="mt-12 inline-flex items-center px-7 py-4 text-base font-semibold rounded-md bg-[#3C9646] text-black hover:bg-[#2d7e36] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-green-500/20"
          >
            {t.faq.cta}
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
