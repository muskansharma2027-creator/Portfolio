'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PORTFOLIO_DATA } from '@/data/portfolio-data';
import { InteractiveHeroOrbit } from './interactive-hero-orbit';

export function Hero() {
  const { personal } = PORTFOLIO_DATA;

  return (
    <section
      id="top"
      className="relative min-h-[90vh] flex flex-col justify-center items-center text-center px-4 sm:px-6 pt-20 sm:pt-24 pb-10 overflow-hidden"
    >
      {/* Subtle Central Warm Radial Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[850px] h-[350px] sm:h-[500px] bg-[#9C4328]/[0.04] rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-5xl w-full mx-auto flex flex-col items-center z-10">
        {/* Muskan Sharma Professional Portrait (Lifted a bit both in layout and within circle crop) */}
        <div className="relative -mt-2 sm:-mt-3 mb-5 group">
          <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full overflow-hidden border-2 border-[#9C4328]/40 shadow-xl shadow-[#1A1817]/8 relative p-1 bg-white">
            <div className="w-full h-full rounded-full overflow-hidden relative">
              <Image
                src="/images/muskan-sharma.png"
                alt="Muskan Sharma - Product Consultant"
                fill
                priority
                className="object-cover object-[center_15%] group-hover:scale-105 transition-transform duration-500 ease-out"
                sizes="(max-width: 768px) 144px, 160px"
              />
            </div>
          </div>
          {/* Active Status Badge */}
          <div
            className="absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-white border border-[#E6E2DA] shadow-xs text-[10px] font-mono text-[#1A1817]"
            title="Current Status"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#2D7A4F] animate-pulse" />
            <span className="font-semibold text-[#1A1817]">AI &amp; Product Consultant</span>
          </div>
        </div>

        {/* Positioning Pill */}
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#E6E2DA] text-xs font-mono text-[#4A4642] mb-3 shadow-2xs mt-1"
          data-cursor="interactive"
        >
          <span className="w-2 h-2 rounded-full bg-[#9C4328] shadow-[0_0_8px_rgba(156,67,40,0.5)]" />
          <span className="text-[#9C4328] font-semibold tracking-wider">PRODUCT CONSULTANT</span>
          <span className="text-[#E6E2DA]">•</span>
          <span className="text-[#1A1817]">~4 YEARS EXPERIENCE</span>
          <span className="text-[#E6E2DA] hidden sm:inline">•</span>
          <span className="text-[#736E67] hidden sm:inline">{personal.location}</span>
        </div>

        {/* Guaranteed ONE-LINER Name */}
        <h1 className="text-[clamp(2.4rem,7vw,5.5rem)] font-extrabold tracking-tight text-[#1A1817] mb-3 uppercase select-none leading-none whitespace-nowrap w-full">
          {personal.name}
        </h1>

        {/* Core Specialization */}
        <div className="flex flex-col items-center gap-1 mb-4">
          <div className="inline-block px-4 py-1 rounded-full bg-[#F3EFEA] border border-[#E6E2DA] text-[#9C4328] font-mono text-xs sm:text-sm font-semibold tracking-widest uppercase shadow-2xs">
            {personal.corePositioning}
          </div>
          <p className="font-mono text-xs sm:text-sm tracking-widest text-[#736E67] uppercase">
            {personal.subhead}
          </p>
        </div>

        {/* Supporting Statement - Strictly from Master CV */}
        <p className="text-base sm:text-lg md:text-xl text-[#4A4642] font-normal max-w-3xl leading-relaxed mb-6 text-balance">
          &ldquo;{personal.supportingStatement}&rdquo;
        </p>

        {/* Primary Direct CTAs: LinkedIn Profile & Email */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-2">
          <a
            href={personal.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 sm:py-3 rounded-full bg-[#1A1817] text-white font-mono text-xs sm:text-sm font-semibold tracking-wider uppercase hover:bg-[#9C4328] hover:shadow-md transition-all duration-200 flex items-center gap-2 shadow-xs"
            data-cursor="interactive"
          >
            <span>LinkedIn Profile</span>
            <span className="text-[#E6E2DA]">&#8599;</span>
          </a>

          <a
            href={`mailto:${personal.email}`}
            className="px-6 py-2.5 sm:py-3 rounded-full bg-white border border-[#E6E2DA] text-[#1A1817] font-mono text-xs sm:text-sm font-semibold tracking-wider uppercase hover:bg-[#F3EFEA] hover:border-[#9C4328] hover:text-[#9C4328] shadow-2xs transition-all duration-200 flex items-center gap-1.5"
            data-cursor="interactive"
          >
            <span>Email Muskan</span>
            <span className="text-[#9C4328]">&#8599;</span>
          </a>

          <Link
            href="/contact"
            className="px-5 py-2.5 sm:py-3 rounded-full bg-[#F3EFEA] border border-[#E6E2DA] text-[#4A4642] hover:text-[#1A1817] font-mono text-xs sm:text-sm font-semibold tracking-wider uppercase hover:border-[#1A1817] transition-all duration-200"
            data-cursor="interactive"
          >
            Contact &#8594;
          </Link>
        </div>

        {/* The Sole Radial Hub: Interactive Navigation Circle to All Subpages */}
        <InteractiveHeroOrbit />
      </div>
    </section>
  );
}
