'use client';

import React from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolio-data';

export function Capabilities() {
  const { capabilities } = PORTFOLIO_DATA;

  return (
    <section id="capabilities" className="py-16 sm:py-24 px-4 sm:px-6 bg-white border-b border-[#E6E2DA]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16 pb-6 border-b border-[#E6E2DA]">
          <div>
            <div className="flex items-center gap-2 mb-2 font-mono text-xs text-[#9C4328] tracking-widest uppercase font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#9C4328]" />
              CORE COMPETENCIES &amp; TOOLKIT
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1A1817] uppercase">
              What I Work On
            </h2>
          </div>
          <p className="font-mono text-xs text-[#4A4642] max-w-sm">
            Operating at the intersection of Product Strategy, Enterprise AI Architecture, and Data-Driven Execution.
          </p>
        </div>

        {/* 3 Discipline Columns: Product, Enterprise AI, Tooling */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Product Strategy & Execution */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#FAF8F5] border border-[#E6E2DA] shadow-xs flex flex-col justify-between hover:shadow-md hover:border-[#9C4328]/40 transition-all">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#E6E2DA] mb-6">
                <span className="font-mono text-xs text-[#9C4328] tracking-widest uppercase font-semibold">01 // PRODUCT STRATEGY</span>
                <span className="w-2 h-2 rounded-full bg-[#9C4328]" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#1A1817] uppercase mb-6">
                Product &amp; Business
              </h3>
              <div className="space-y-4">
                {capabilities.product.map((item, idx) => (
                  <div key={idx} className="group">
                    <div className="text-sm font-semibold text-[#1A1817] group-hover:text-[#9C4328] transition-colors">
                      {item.name}
                    </div>
                    <div className="text-xs text-[#4A4642] mt-1 leading-relaxed">
                      {item.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Enterprise AI & Systems */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#FAF8F5] border border-[#E6E2DA] shadow-xs flex flex-col justify-between hover:shadow-md hover:border-[#9C4328]/40 transition-all">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#E6E2DA] mb-6">
                <span className="font-mono text-xs text-[#9C4328] tracking-widest uppercase font-semibold">02 // ENTERPRISE AI</span>
                <span className="w-2 h-2 rounded-full bg-[#9C4328]" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#1A1817] uppercase mb-6">
                AI &amp; Engineering
              </h3>
              <div className="space-y-4">
                {capabilities.aiTech.map((item, idx) => (
                  <div key={idx} className="group">
                    <div className="text-sm font-semibold text-[#1A1817] group-hover:text-[#9C4328] transition-colors">
                      {item.name}
                    </div>
                    <div className="text-xs text-[#4A4642] mt-1 leading-relaxed">
                      {item.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Column 3: Analytics & Tooling */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#FAF8F5] border border-[#E6E2DA] shadow-xs flex flex-col justify-between hover:shadow-md hover:border-[#9C4328]/40 transition-all">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#E6E2DA] mb-6">
                <span className="font-mono text-xs text-[#9C4328] tracking-widest uppercase font-semibold">03 // TOOLING &amp; DATA</span>
                <span className="w-2 h-2 rounded-full bg-[#9C4328]" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#1A1817] uppercase mb-6">
                Tools &amp; Analytics
              </h3>
              <div className="space-y-4">
                {capabilities.tools.map((item, idx) => (
                  <div key={idx} className="group">
                    <div className="text-sm font-semibold text-[#1A1817] group-hover:text-[#9C4328] transition-colors">
                      {item.name}
                    </div>
                    <div className="text-xs text-[#4A4642] mt-1 leading-relaxed">
                      {item.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
