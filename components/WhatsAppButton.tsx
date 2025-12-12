"use client";

import { MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";

export default function WhatsAppButton() {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const innerHeight = window.innerHeight;
            const bodyHeight = document.body.offsetHeight;
            const bottomReached = innerHeight + scrollY >= bodyHeight - 100;

            if (scrollY < 100) {
                // Always visible at top
                setVisible(true);
            } else if (bottomReached) {
                // Visible at bottom
                setVisible(true);
            } else {
                // Fade out in between
                setVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <a
            href="https://wa.me/41765875055"
            target="_blank"
            rel="noopener noreferrer"
            className={`fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#3C9646] text-white shadow-lg transition-all duration-500 ease-in-out hover:scale-110 hover:shadow-green-500/40 group ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
                }`}
            aria-label="Chat on WhatsApp"
        >
            <MessageCircle className="w-8 h-8" />

            {/* Tooltip for Desktop */}
            <span className="absolute right-full mr-4 px-3 py-1.5 bg-black/80 backdrop-blur text-white text-sm rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden md:block border border-white/10">
                Jetzt chatten
            </span>
        </a>
    );
}
