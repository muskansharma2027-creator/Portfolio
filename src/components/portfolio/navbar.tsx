'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { PORTFOLIO_DATA } from '@/data/portfolio-data';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { personal } = PORTFOLIO_DATA;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-3 sm:px-6 pt-3 sm:pt-5 pointer-events-none">
      <nav
        className={`pointer-events-auto flex items-center justify-between gap-3 px-4 sm:px-6 py-2.5 rounded-full border transition-all duration-300 max-w-5xl w-full ${
          scrolled
            ? "bg-[#FAF8F5]/95 border-[#E6E2DA] backdrop-blur-xl shadow-lg shadow-[#1A1817]/5"
            : "bg-[#FAF8F5]/85 border-[#E6E2DA]/80 backdrop-blur-md shadow-xs"
        }`}
        aria-label="Top navigation bar"
      >
        {/* Brand / Logo + Home Link */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          <Link
            href="/"
            className="flex items-center gap-2 group cursor-pointer focus:outline-none rounded-full px-1 py-0.5"
            data-cursor="interactive"
          >
            <span className="w-2 h-2 rounded-full bg-[#9C4328] shadow-[0_0_8px_rgba(156,67,40,0.5)] group-hover:scale-125 transition-transform duration-200" />
            <span className="font-mono text-xs sm:text-sm font-bold tracking-wider text-[#1A1817] group-hover:text-[#9C4328] transition-colors uppercase">
              MUSKAN SHARMA
            </span>
          </Link>
          <span className="text-[#E6E2DA] font-mono text-xs select-none">•</span>
          <Link
            href="/"
            className="px-2.5 py-0.5 rounded-full bg-[#F3EFEA] hover:bg-[#9C4328] text-[#736E67] hover:text-white text-[11px] font-mono font-medium tracking-wide transition-all shadow-2xs"
            data-cursor="interactive"
            title="Go to Home"
          >
            Home
          </Link>
        </div>

        {/* Right Side Actions: LinkedIn + Direct Contact */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          {/* LinkedIn Profile Quick Link */}
          <a
            href={personal.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 px-3.5 py-1 rounded-full bg-white border border-[#E6E2DA] hover:border-[#9C4328] text-[#1A1817] hover:text-[#9C4328] text-[11px] font-mono font-medium transition-all shadow-2xs"
            data-cursor="interactive"
            title="Muskan Sharma on LinkedIn"
          >
            <span>LinkedIn</span>
            <span className="text-[#9C4328]">&#8599;</span>
          </a>

          {/* Direct Contact Action */}
          <Link
            href="/contact"
            className="px-4 py-1 rounded-full bg-[#1A1817] hover:bg-[#9C4328] text-white text-[11px] font-mono tracking-wider uppercase font-semibold transition-all duration-200 shadow-xs"
            data-cursor="interactive"
          >
            Contact &#8594;
          </Link>
        </div>
      </nav>
    </header>
  );
}
