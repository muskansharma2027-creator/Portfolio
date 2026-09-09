'use client';

import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolio-data';

export function ContactFooter() {
  const { personal } = PORTFOLIO_DATA;
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <footer id="contact" className="py-20 sm:py-24 px-4 sm:px-6 border-t border-[#E6E2DA] bg-[#FAF8F5] relative overflow-hidden">
      {/* Subtle Warm Glow Accent */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[220px] bg-[#9C4328]/[0.04] rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
        {/* Section Eyebrow */}
        <div className="text-[11px] font-mono text-[#9C4328] tracking-widest uppercase mb-4 flex items-center gap-2 font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-[#9C4328]" />
          <span>INITIATE ENGAGEMENT</span>
        </div>

        {/* Monolithic Heading */}
        <h2 className="text-6xl sm:text-8xl md:text-9xl font-extrabold tracking-tight text-[#1A1817] mb-6 uppercase select-none leading-none">
          LET&apos;S BUILD.
        </h2>

        {/* Supporting Statement strictly aligned to Muskan */}
        <p className="text-base sm:text-lg text-[#4A4642] max-w-2xl mb-12 font-normal leading-relaxed">
          Open to Product Consulting, Enterprise AI Strategy, and Solution Design roles combining software engineering foundations with enterprise product delivery.
        </p>

        {/* Primary Interactive Actions: LinkedIn & Email */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 mb-14">
          {/* LinkedIn Primary Action Button */}
          <a
            href={personal.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3.5 rounded-full bg-[#1A1817] text-white font-mono text-xs sm:text-sm font-semibold tracking-wider uppercase hover:bg-[#9C4328] hover:shadow-md transition-all duration-200 flex items-center gap-2 shadow-xs"
            data-cursor="interactive"
          >
            <span>LinkedIn Profile</span>
            <span className="text-[#E6E2DA]">&#8599;</span>
          </a>

          {/* Email Copy CTA */}
          <button
            type="button"
            onClick={copyEmail}
            className="px-6 py-3.5 rounded-full bg-white border border-[#E6E2DA] text-[#1A1817] font-mono text-xs sm:text-sm font-semibold tracking-wider uppercase hover:bg-[#F3EFEA] hover:border-[#9C4328] hover:text-[#9C4328] shadow-xs transition-all duration-200 flex items-center gap-2"
            data-cursor="interactive"
          >
            <span>{copiedEmail ? "EMAIL COPIED!" : "COPY EMAIL"}</span>
            <span className="text-[11px] text-[#736E67] hidden md:inline">({personal.email})</span>
          </button>

          {/* Direct Email Link Action */}
          <a
            href={`mailto:${personal.email}`}
            className="px-6 py-3.5 rounded-full bg-[#F3EFEA] border border-[#E6E2DA] text-[#1A1817] font-mono text-xs sm:text-sm tracking-wider uppercase hover:bg-[#E6E2DA] hover:text-[#9C4328] transition-all duration-200 font-semibold flex items-center gap-1.5"
            data-cursor="interactive"
          >
            <span>Email Muskan</span>
            <span>&#8599;</span>
          </a>
        </div>

        {/* Direct Coordinates Matrix */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-3xl pt-10 border-t border-[#E6E2DA] mb-14 text-left">
          {/* Professional Profile */}
          <div className="space-y-2">
            <div className="text-[10px] font-mono text-[#736E67] uppercase tracking-widest font-semibold">
              PROFESSIONAL NETWORK
            </div>
            <div className="flex flex-col gap-1.5 text-xs font-mono">
              <a
                href={personal.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1A1817] hover:text-[#9C4328] font-semibold transition-colors flex items-center gap-1"
                data-cursor="interactive"
              >
                <span>&#8599; Muskan Sharma on LinkedIn</span>
              </a>
              <span className="text-[#736E67] text-[11px] font-mono">
                Enterprise Experience &amp; Recommendations
              </span>
            </div>
          </div>

          {/* Direct Communications */}
          <div className="space-y-2">
            <div className="text-[10px] font-mono text-[#736E67] uppercase tracking-widest font-semibold">
              DIRECT EMAIL
            </div>
            <div className="flex flex-col gap-1.5 text-xs font-mono text-[#4A4642]">
              <div className="flex items-center gap-2">
                <a
                  href={`mailto:${personal.email}`}
                  className="text-[#1A1817] hover:text-[#9C4328] font-semibold underline underline-offset-4 transition-colors"
                  data-cursor="interactive"
                >
                  {personal.email}
                </a>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="px-2 py-0.5 rounded bg-[#F3EFEA] hover:bg-[#E6E2DA] text-[10px] text-[#1A1817] uppercase transition-colors"
                  data-cursor="interactive"
                >
                  {copiedEmail ? "COPIED" : "COPY"}
                </button>
              </div>
              <span className="text-[#736E67] text-[11px]">
                Direct inbox for opportunities &amp; consulting
              </span>
            </div>
          </div>

          {/* Location & Focus */}
          <div className="space-y-2">
            <div className="text-[10px] font-mono text-[#736E67] uppercase tracking-widest font-semibold">
              BASE &amp; DOMAIN FOCUS
            </div>
            <div className="flex flex-col gap-1.5 text-xs font-mono text-[#4A4642]">
              <span className="text-[#1A1817] font-semibold">{personal.location}</span>
              <span className="text-[#736E67] text-[11px]">
                Product Strategy • Enterprise AI Delivery
              </span>
            </div>
          </div>
        </div>

        {/* Clean Editorial Colophon with LinkedIn Link */}
        <div className="w-full pt-6 border-t border-[#E6E2DA] flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-mono text-[#736E67]">
          <div>
            &copy; {new Date().getFullYear()} MUSKAN SHARMA &bull; PRODUCT CONSULTANT
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
            <a href="#top" className="hover:text-[#1A1817] transition-colors" data-cursor="interactive">
              BACK TO TOP &#8593;
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
