'use client';

import React from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolio-data';

export function ImpactStats() {
  const { impactMetrics } = PORTFOLIO_DATA;

  return (
    <section id="impact" className="py-16 sm:py-24 px-4 sm:px-6 border-b border-[#E6E2DA] bg-[#FAF8F5]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
          <div>
            <div className="flex items-center gap-2 mb-2 font-mono text-xs text-[#9C4328] tracking-widest uppercase font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#9C4328]" />
              MEASURABLE ENTERPRISE OUTCOMES
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1A1817] uppercase">
              Evidence &amp; Scale
            </h2>
          </div>
          <p className="font-mono text-xs text-[#4A4642] max-w-sm">
            Factual delivery metrics across enterprise conversational AI platforms, automotive customer discovery, and national GovTech portals.
          </p>
        </div>

        {/* 9-Metric Unified Editorial Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E6E2DA] rounded-2xl overflow-hidden border border-[#E6E2DA] shadow-xs">
          {impactMetrics.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 sm:p-8 flex flex-col justify-between hover:bg-[#FAF8F5] transition-colors duration-200 group"
              data-cursor="interactive"
            >
              <div className="flex items-center justify-between text-[11px] font-mono text-[#736E67] mb-6">
                <span>{`0${idx + 1} // SCALE`}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#E6E2DA] group-hover:bg-[#9C4328] transition-colors" />
              </div>

              <div>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1A1817] tracking-tight font-mono mb-2 group-hover:text-[#9C4328] transition-colors">
                  {item.value}
                </div>
                <div className="text-sm font-semibold text-[#1A1817] uppercase tracking-wider mb-1">
                  {item.label}
                </div>
                <div className="text-xs text-[#736E67] font-mono">
                  {item.sub}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
