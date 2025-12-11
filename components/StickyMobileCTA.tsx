"use client";

import { Phone, MousePointer2, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";

export default function StickyMobileCTA() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show after scrolling down 200px
            if (window.scrollY > 200) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Only visible on mobile/tablet (hidden on lg)
    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-[#0A0A0A] border-t border-white/10 lg:hidden animate-slide-up shadow-2xl">
            <div className="grid grid-cols-2 gap-3">
                <a
                    href="tel:0522221818"
                    className="flex flex-col items-center justify-center p-3 rounded bg-[#3C9646] text-white font-bold text-center active:scale-95 transition"
                >
                    <Phone className="w-5 h-5 mb-1" />
                    <span className="text-sm">Anrufen</span>
                </a>
                <a
                    href="tel:0765875055"
                    className="flex flex-col items-center justify-center p-3 rounded bg-red-600 text-white font-bold text-center active:scale-95 transition border border-red-700 shadow-sm"
                >
                    <Phone className="w-5 h-5 mb-1" />
                    <span className="text-sm">Notfall (7x24)</span>
                </a>
            </div>
        </div>
    );
}
