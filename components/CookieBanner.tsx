"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "./LanguageContext";

export default function CookieBanner() {
    const { t } = useLanguage();
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const consent = window.localStorage.getItem("cookie_consent");
        if (!consent) {
            setVisible(true);
        }
    }, []);

    const handleAcceptAll = () => {
        window.localStorage.setItem("cookie_consent", "all");
        setVisible(false);
    };

    const handleEssential = () => {
        window.localStorage.setItem("cookie_consent", "essential");
        setVisible(false);
    };

    if (!visible) return null;

    return (
        <div className="fixed bottom-4 left-4 z-50 max-w-sm w-full animate-fade-in-up">
            <div className="mx-4 sm:mx-0 p-5 rounded-xl border border-white/10 bg-black/60 backdrop-blur-md shadow-2xl">
                <p className="text-sm text-white/90 mb-4 font-medium leading-relaxed">
                    {t.cookie.text}
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                    <button
                        onClick={handleAcceptAll}
                        className="flex-1 px-4 py-2.5 text-sm font-semibold rounded-lg bg-[#3C9646] text-white hover:bg-[#2d7e36] transition shadow-[0_0_15px_-3px_rgba(60,150,70,0.3)] hover:shadow-[0_0_20px_-3px_rgba(60,150,70,0.5)]"
                    >
                        {t.cookie.acceptAll}
                    </button>
                    <button
                        onClick={handleEssential}
                        className="flex-1 px-4 py-2.5 text-sm font-medium rounded-lg border border-white/20 text-white/80 hover:bg-white/5 transition"
                    >
                        {t.cookie.essential}
                    </button>
                </div>
            </div>
        </div>
    );
}
