"use client";

import { useLanguage } from "./LanguageContext";
import { AlertTriangle } from "lucide-react";

type ProblemListProps = {
    isDark: boolean;
};

export default function ProblemList({ isDark }: ProblemListProps) {
    const { t } = useLanguage();

    return (
        <section className={"py-20 " + (isDark ? "bg-[#0F0F0F]" : "bg-white")}>
            <div className="max-w-[1440px] mx-auto px-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center tracking-tight">
                    {t.problems.title}
                </h2>

                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {t.problems.items.map((item, index) => (
                        <div
                            key={index}
                            className={"flex items-center gap-3 p-4 rounded-lg border transition-all hover:border-[#3C9646] " +
                                (isDark ? "bg-[#151515] border-white/5" : "bg-gray-50 border-black/5")}
                        >
                            <AlertTriangle className="w-5 h-5 text-[#3C9646] flex-shrink-0" />
                            <span className={"font-medium " + (isDark ? "text-white/90" : "text-black/90")}>
                                {item}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
