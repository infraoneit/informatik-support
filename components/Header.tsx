"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  SunMedium,
  MoonStar,
  Menu,
  X,
  Phone
} from "lucide-react";
import { CTA_URL } from "@/lib/constants";
import { useLanguage } from "./LanguageContext";

type HeaderProps = {
  isDark: boolean;
  toggleTheme: () => void;
};

export default function Header({ isDark, toggleTheme }: HeaderProps) {
  const { t, lang, setLang } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleLang = () => {
    setLang(lang === "de" ? "en" : "de");
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-20 bg-[#0A0A0A]/90 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-[1440px] mx-auto px-8 py-5 flex items-center justify-between">
        {/* Logo + Name */}
        <div className="flex items-center gap-4">
          <Image
            src="/infraone-logo-weiss.svg"
            alt="InfraOne Logo"
            width={160}
            height={50}
            className="w-auto h-12"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
          <a href="#prices" className="hover:text-[#3C9646] transition">
            {t.header.services}
          </a>
          <a href="#about" className="hover:text-[#3C9646] transition">
            {t.header.about}
          </a>
          <a href="#faq" className="hover:text-[#3C9646] transition">
            {t.header.faq}
          </a>

          {/* Emergency Number (17-23h) */}
          <a href="tel:0765875055" className="flex items-center gap-2 text-red-500 font-bold hover:text-red-400 transition animate-pulse">
            <Phone className="w-4 h-4" />
            <span>076 587 50 55 (17-23h)</span>
          </a>

          {/* CTA */}
          <a
            href={CTA_URL}
            className="inline-flex items-center gap-1 bg-[#3C9646] text-black px-4 py-2 rounded-md font-semibold hover:bg-[#2d7e36] transition"
          >
            {t.header.contact}
            <ArrowRight className="w-4 h-4" />
          </a>

          {/* Language toggle */}
          <button
            type="button"
            onClick={toggleLang}
            className="ml-4 flex items-center justify-center w-9 h-9 rounded-full border border-white/20 hover:border-[#3C9646] transition text-white/80 font-medium text-xs"
            aria-label="Switch Language"
          >
            {lang.toUpperCase()}
          </button>

          {/* Theme toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            className="flex items-center justify-center w-9 h-9 rounded-full border border-white/20 hover:border-[#3C9646] transition"
            aria-label="Toggle Dark Mode"
          >
            {isDark ? (
              <SunMedium className="w-4 h-4 text-white" />
            ) : (
              <MoonStar className="w-4 h-4 text-white" />
            )}
          </button>
        </nav>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            type="button"
            onClick={toggleTheme}
            className="flex items-center justify-center w-9 h-9 rounded-full border border-white/20 hover:border-[#3C9646] transition"
            aria-label="Toggle Dark Mode"
          >
            {isDark ? (
              <SunMedium className="w-4 h-4 text-white" />
            ) : (
              <MoonStar className="w-4 h-4 text-white" />
            )}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white p-2"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#0A0A0A] border-b border-white/10 p-6 flex flex-col gap-6 shadow-2xl animate-fade-in-up">
          <nav className="flex flex-col gap-4 text-lg text-white/80">
            <a href="#prices" onClick={closeMenu} className="hover:text-[#3C9646]">
              {t.header.services}
            </a>
            <a href="#about" onClick={closeMenu} className="hover:text-[#3C9646]">
              {t.header.about}
            </a>
            <a href="#faq" onClick={closeMenu} className="hover:text-[#3C9646]">
              {t.header.faq}
            </a>
          </nav>

          <div className="flex items-center gap-4 mt-2">
            <button
              onClick={() => { toggleLang(); closeMenu(); }}
              className="px-4 py-2 rounded-md border border-white/20 text-white text-sm"
            >
              Language: {lang.toUpperCase()}
            </button>
            <a
              href={CTA_URL}
              onClick={closeMenu}
              className="inline-flex items-center gap-1 bg-[#3C9646] text-black px-4 py-2 rounded-md font-semibold"
            >
              {t.header.contact}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
