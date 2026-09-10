'use client';

import React from 'react';
import { Navbar } from '@/components/portfolio/navbar';
import { Hero } from '@/components/portfolio/hero';
import { PORTFOLIO_DATA } from '@/data/portfolio-data';

export default function Home() {
  const { personal } = PORTFOLIO_DATA;

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1A1817] selection:bg-[#F8E7DF] selection:text-[#83351E] relative flex flex-col justify-between animate-page-entrance">

      {/* Subtle Geometric Linen Grid Background */}
      <div
        className="hero-grid-bg fixed inset-0 opacity-70 pointer-events-none z-0"
        aria-hidden="true"
      />

      {/* Persistent Top Capsule Navigation */}
      <Navbar />

      {/* Focused Home Intro: Portrait, Positioning & Interactive Radial Navigation Hub */}
      <main className="relative z-10 flex-1 flex flex-col justify-center">
        <Hero />
      </main>

      {/* Clean Minimalist Editorial Colophon */}
      <footer className="relative z-10 w-full py-6 px-4 sm:px-6 border-t border-[#E6E2DA] bg-[#FAF8F5]/80 backdrop-blur-xs">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-mono text-[#736E67]">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#9C4328]" />
            <span className="font-semibold text-[#1A1817] uppercase tracking-wider">MUSKAN SHARMA</span>
            <span>&bull;</span>
            <span>PRODUCT CONSULTANT</span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={personal.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#9C4328] hover:underline font-semibold"
              data-cursor="interactive"
            >
              LinkedIn Profile &#8599;
            </a>
            <span>&bull;</span>
            <a
              href={`mailto:${personal.email}`}
              className="hover:text-[#1A1817] transition-colors"
              data-cursor="interactive"
            >
              Email Muskan &#8599;
            </a>
            <span>&bull;</span>
            <span className="text-[#736E67]">{personal.location}</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
