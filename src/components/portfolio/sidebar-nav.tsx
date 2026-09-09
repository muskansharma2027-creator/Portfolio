'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const NAV_ITEMS = [
  { id: "work", number: "01", label: "WORK" },
  { id: "impact", number: "02", label: "IMPACT" },
  { id: "experience", number: "03", label: "EXP" },
  { id: "capabilities", number: "04", label: "SKILLS" },
  { id: "achievements", number: "05", label: "AWARDS" },
  { id: "contact", number: "06", label: "CONTACT" },
];

export function SidebarNav() {
  const [activeSection, setActiveSection] = useState<string>("top");
  const [showDock, setShowDock] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      // Only show dock after scrolling past hero (scrollY > 400)
      setShowDock(window.scrollY > 400);

      const scrollPos = window.scrollY + 300;
      for (let i = NAV_ITEMS.length - 1; i >= 0; i--) {
        const item = NAV_ITEMS[i];
        const el = document.getElementById(item.id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(item.id);
          return;
        }
      }
      setActiveSection("top");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!showDock) return null;

  return (
    <nav
      className="fixed bottom-5 left-1/2 -translate-x-1/2 z-40 flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-full bg-[#08090C]/90 border border-white/15 backdrop-blur-2xl shadow-[0_10px_35px_rgba(0,0,0,0.8)] transition-all duration-300 animate-in fade-in slide-in-from-bottom-5 max-w-[95vw] overflow-x-auto no-scrollbar select-none"
      aria-label="Floating section dock"
    >
      {/* Quick Top Jump Indicator */}
      <a
        href="#top"
        className="px-2 py-1 text-[10px] font-mono font-bold text-zinc-500 hover:text-[#D4FF00] transition-colors shrink-0"
        title="Scroll to Top"
        data-cursor="interactive"
      >
        &#8593;
      </a>

      <span className="w-px h-3.5 bg-white/10 shrink-0" />

      {/* Navigation Items with Active Neon Indicator */}
      {NAV_ITEMS.map((item) => {
        const isActive = activeSection === item.id;
        return (
          <Link
            key={item.id}
            href={`#${item.id}`}
            className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full text-[11px] font-mono tracking-wider transition-all duration-200 shrink-0 whitespace-nowrap ${
              isActive
                ? "bg-[#D4FF00] text-[#08090C] font-bold shadow-[0_0_15px_rgba(212,255,0,0.5)] scale-105"
                : "text-zinc-400 hover:text-white hover:bg-white/5"
            }`}
            data-cursor="interactive"
          >
            <span className={`w-1.5 h-1.5 rounded-full ${isActive ? "bg-[#08090C]" : "bg-[#D4FF00]"}`} />
            <span className="opacity-70 text-[9px]">{item.number}</span>
            <span>{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
