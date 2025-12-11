"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ImmediateHelp from "@/components/ImmediateHelp";
import PricingAndTimes from "@/components/PricingAndTimes";
import ProblemList from "@/components/ProblemList";
import RegionalSupport from "@/components/RegionalSupport";
import About from "@/components/About";
import Trust from "@/components/Trust";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import { useState, useEffect } from "react";

export default function Home() {
  const [isDark, setIsDark] = useState(true);

  // Prevent hydration mismatch
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className={"min-h-screen transition-colors duration-500 " + (isDark ? "bg-[#050505] text-white" : "bg-white text-black")}>

      <Header isDark={isDark} toggleTheme={() => setIsDark(!isDark)} />

      <main>
        <Hero isDark={isDark} />

        {/* 1. Sofort-Hilfe (Phone/Remote/OnSite) */}
        <ImmediateHelp isDark={isDark} />

        {/* 1.5. Pricing & Times (Mandatory Placement) */}
        <PricingAndTimes isDark={isDark} />

        {/* 2. SEO Block (Häufige Probleme) */}
        <ProblemList isDark={isDark} />

        {/* 3. Regions (Local SEO) */}
        <RegionalSupport isDark={isDark} />

        {/* 4. Trust (Why InfraOne - Fact based) */}
        <About isDark={isDark} />
        <Trust isDark={isDark} />

        {/* 5. FAQ (Intent Focused) */}
        <FAQ isDark={isDark} />
      </main>

      <Footer />
      <StickyMobileCTA />
    </div>
  );
}
