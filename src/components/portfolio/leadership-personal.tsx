'use client';

import React from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolio-data';

export function LeadershipPersonal() {
  const { leadershipAndActivities } = PORTFOLIO_DATA;

  return (
    <section id="leadership" className="py-16 sm:py-24 px-4 sm:px-6 border-b border-[#E6E2DA] bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16 pb-6 border-b border-[#E6E2DA]">
          <div>
            <div className="flex items-center gap-2 mb-2 font-mono text-xs text-[#9C4328] tracking-widest uppercase font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#9C4328]" />
              INITIATIVE &amp; COMMUNICATION
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1A1817] uppercase">
              Leadership &amp; Initiative
            </h2>
          </div>
          <p className="font-mono text-xs text-[#4A4642] max-w-sm">
            Institutional leadership, executive communication coaching, event orchestration, and startup innovation competitions.
          </p>
        </div>

        {/* Leadership & Activities Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {leadershipAndActivities.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#E6E2DA] shadow-xs hover:shadow-md hover:border-[#9C4328]/40 transition-all flex flex-col justify-between"
              data-cursor="interactive"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-[#736E67] mb-2">
                  <span>{`0${idx + 1} // INITIATIVE`}</span>
                  <span className="text-[#9C4328] font-semibold">{item.period}</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#1A1817] mb-3 leading-snug">
                  {item.role}
                </h3>
              </div>
              <p className="text-xs text-[#4A4642] leading-relaxed pt-4 border-t border-[#E6E2DA]">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
