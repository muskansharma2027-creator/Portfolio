'use client';

import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/portfolio/navbar';
import { ContactFooter } from '@/components/portfolio/contact-footer';

export default function ContactPage() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1A1817] selection:bg-[#F8E7DF] selection:text-[#83351E] relative flex flex-col justify-between">
      <div className="hero-grid-bg fixed inset-0 opacity-70 pointer-events-none z-0" aria-hidden="true" />
      <Navbar />

      <main className="relative z-10 pt-28 pb-6 flex-1 animate-page-entrance">
        {/* Page Hero Header */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-4">
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
            <span className="text-[#1A1817] font-semibold">06 CONTACT</span>
          </div>
        </div>

        {/* Dedicated Contact Channels */}
        <ContactFooter />
      </main>
    </div>
  );
}
