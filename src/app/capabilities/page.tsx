'use client';

import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/portfolio/navbar';
import { Capabilities } from '@/components/portfolio/capabilities';
import { ContactFooter } from '@/components/portfolio/contact-footer';

export default function CapabilitiesPage() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1A1817] selection:bg-[#F8E7DF] selection:text-[#83351E] relative">
      <div className="hero-grid-bg fixed inset-0 opacity-70 pointer-events-none z-0" aria-hidden="true" />
      <Navbar />

      <main className="relative z-10 pt-28 pb-16 animate-page-entrance">
        {/* Page Hero Header */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-8">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2.5 text-xs font-mono text-[#736E67] mb-4">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F3EFEA] hover:bg-[#9C4328] text-[#9C4328] hover:text-white font-mono text-xs font-semibold tracking-wider transition-all shadow-2xs"
              data-cursor="interactive"
            >
              <span>&larr;</span>
              <span>Home</span>
            </Link>
            <span>/</span>
            <span className="text-[#1A1817] font-semibold">03 CAPABILITIES</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#E6E2DA]">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F3EFEA] border border-[#E6E2DA] text-[#9C4328] text-xs font-mono font-semibold tracking-wider uppercase mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#9C4328]" />
                CORE TOOLKIT &amp; PRACTICES
              </div>
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#1A1817] uppercase">
                What I Work On
              </h1>
            </div>
            <p className="font-mono text-xs sm:text-sm text-[#4A4642] max-w-md">
              A comprehensive view of competencies spanning Product Discovery &amp; PRD ownership, GenAI &amp; Conversational Architecture, and Analytics Instrumentation.
            </p>
          </div>
        </div>

        {/* Capabilities 3-Column Core Grid */}
        <Capabilities />

        {/* Next Section Pagination Ribbon */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-16 pt-8 border-t border-[#E6E2DA] flex items-center justify-between font-mono text-xs">
          <Link
            href="/experience"
            className="flex items-center gap-2 text-[#4A4642] hover:text-[#9C4328] transition-colors"
            data-cursor="interactive"
          >
            <span>&larr;</span>
            <span>PREVIOUS: CAREER EVOLUTION</span>
          </Link>
          <Link
            href="/achievements"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#1A1817] text-white hover:bg-[#9C4328] transition-colors"
            data-cursor="interactive"
          >
            <span>NEXT: HONORS &amp; ACADEMICS</span>
            <span>&rarr;</span>
          </Link>
        </div>
      </main>

      <ContactFooter />
    </div>
  );
}
