"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { translations, Language } from "@/lib/i18n";

type LanguageContextType = {
    lang: Language;
    setLang: (lang: Language) => void;
    t: typeof translations.de;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [lang, setLangState] = useState<Language>("de");

    const setLang = (newLang: Language) => {
        setLangState(newLang);
        window.localStorage.setItem("lang", newLang);
        document.documentElement.lang = newLang === "de" ? "de-CH" : "en-US";
    };

    useEffect(() => {
        const stored = window.localStorage.getItem("lang") as Language;
        if (stored === "de" || stored === "en") {
            setLangState(stored);
            document.documentElement.lang = stored === "de" ? "de-CH" : "en-US";
        }
    }, []);

    return (
        <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}
