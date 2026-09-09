'use client';

import React from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolio-data';

export function EducationAchievements() {
  const { education, achievements, research } = PORTFOLIO_DATA;

  return (
    <section id="achievements" className="py-16 sm:py-24 px-4 sm:px-6 border-b border-[#E6E2DA] bg-[#FAF8F5]">
      <div className="max-w-6xl mx-auto">
        {/* Achievements / Credibility Markers */}
        <div className="mb-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14 pb-6 border-b border-[#E6E2DA]">
            <div>
              <div className="flex items-center gap-2 mb-2 font-mono text-xs text-[#9C4328] tracking-widest uppercase font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#9C4328]" />
                CREDIBILITY &amp; PERFORMANCE RECOGNITIONS
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1A1817] uppercase">
                Achievements &amp; Honors
              </h2>
            </div>
            <p className="font-mono text-xs text-[#4A4642] max-w-sm">
              Recognition awarded for enterprise client delivery, stakeholder management, delivery excellence, and academic distinction.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((item) => (
              <div
                key={item.id}
                className="p-6 rounded-2xl bg-white border border-[#E6E2DA] hover:border-[#9C4328]/40 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
                data-cursor="interactive"
              >
                <div>
                  <div className="flex items-center justify-between text-[10px] font-mono mb-3">
                    <span className="text-[#9C4328] font-bold tracking-widest uppercase">{item.badge}</span>
                    <span className="text-[#736E67]">{item.year}</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#1A1817] group-hover:text-[#9C4328] transition-colors mb-1">
                    {item.award}
                  </h3>
                  <div className="text-xs font-mono text-[#736E67] mb-4">
                    {item.organization}
                  </div>
                </div>
                <p className="text-xs text-[#4A4642] leading-relaxed pt-4 border-t border-[#E6E2DA]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Education: Reinforcing Product & Business Leadership */}
        <div className="mb-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14 pb-6 border-b border-[#E6E2DA]">
            <div>
              <div className="flex items-center gap-2 mb-2 font-mono text-xs text-[#9C4328] tracking-widest uppercase font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#9C4328]" />
                ACADEMIC FOUNDATION &amp; BUSINESS LEADERSHIP
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1A1817] uppercase">
                Education
              </h2>
            </div>
            <p className="font-mono text-xs text-[#4A4642] max-w-sm">
              Combining 9.11 CGPA computer science engineering fundamentals with executive product management and business strategy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {education.map((edu, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-white border border-[#E6E2DA] shadow-xs hover:shadow-md hover:border-[#9C4328]/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between font-mono text-xs text-[#736E67] mb-3">
                    <span>{edu.location}</span>
                    <span className="text-[#9C4328] font-semibold">{edu.period}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#1A1817] mb-1">
                    {edu.institution}
                  </h3>
                  <div className="text-base text-[#1A1817] font-semibold mb-2">
                    {edu.degree}
                  </div>
                  <p className="text-xs text-[#736E67] font-mono mb-6">
                    {edu.field}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E6E2DA] text-xs text-[#83351E] bg-[#F8E7DF]/60 p-3 rounded-xl border border-[#9C4328]/30 font-mono flex items-center gap-2 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#9C4328]" />
                  <span>{edu.highlight}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Academic Research & Publication (From CV) */}
        {research && (
          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#E6E2DA] shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
              <span className="text-[10px] font-mono text-[#9C4328] tracking-widest uppercase font-semibold">
                PEER-REVIEWED AI RESEARCH &amp; PUBLICATION
              </span>
              <span className="text-xs font-mono text-[#736E67]">{research.year}</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-[#1A1817] mb-2">
              &ldquo;{research.title}&rdquo;
            </h3>
            <div className="text-xs font-mono text-[#736E67] mb-3">
              Published at: {research.conference} &bull; {research.institution}
            </div>
            <p className="text-xs text-[#4A4642] leading-relaxed max-w-4xl">
              {research.summary}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
