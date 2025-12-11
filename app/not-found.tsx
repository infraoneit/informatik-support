"use client";

import { useLanguage } from "@/components/LanguageContext";
import { MoveLeft } from "lucide-react";

export default function NotFound() {
    // 404 page can be simpler, but nice to reuse theme.
    // Since it's server component by default in app dir if default export, but I used useLanguage which is client.
    // So "use client" is needed or I just hardcode text or use a client wrapper.
    // I'll make it client to use "t" if I wanted, but for 404 maybe just German/English static text is fine.
    // Requirement: "Ups, hier ist kein Kabel angeschlossen"

    return (
        <div className="min-h-screen bg-[#0A0A0A] text-white flex flex-col items-center justify-center p-8 text-center">
            <h1 className="text-9xl font-bold text-[#3C9646] tracking-tighter animate-pulse">404</h1>
            <h2 className="mt-8 text-3xl font-semibold tracking-tight">
                Ups, hier ist kein Kabel angeschlossen.
            </h2>
            <p className="mt-4 text-white/50 max-w-md">
                Die gesuchte Seite konnte nicht gefunden werden. Vielleicht wurde sie verschoben oder gelöscht.
            </p>

            <a
                href="/"
                className="mt-10 inline-flex items-center gap-2 px-6 py-3 rounded-md bg-white/10 hover:bg-white/20 transition text-sm font-semibold"
            >
                <MoveLeft className="w-4 h-4" />
                Zurück zur Startseite
            </a>
        </div>
    );
}
