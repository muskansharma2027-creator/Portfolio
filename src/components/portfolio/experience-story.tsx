'use client';

import React from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolio-data';

export function ExperienceStory() {
  const { careerEvolution, experience } = PORTFOLIO_DATA;

  return (
    <section id="experience" className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16 pb-6 border-b border-[#E6E2DA]">
          <div>
            <div className="flex items-center gap-2 mb-2 font-mono text-xs text-[#9C4328] tracking-widest uppercase font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#9C4328]" />
              CAREER TRAJECTORY &amp; EVOLUTION
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1A1817] uppercase">
              Career Evolution
            </h2>
          </div>
          <p className="font-mono text-xs text-[#4A4642] max-w-sm">
            Bridging technical software engineering feasibility with enterprise product discovery, statutory governance, and production AI consulting.
          </p>
        </div>

        {/* Visual Progression Ribbon */}
        <div className="mb-16 p-6 sm:p-8 rounded-2xl bg-white border border-[#E6E2DA] shadow-xs">
          <div className="text-[11px] font-mono text-[#736E67] uppercase tracking-widest mb-6 font-semibold">
            PROGRESSION OF RESPONSIBILITY &amp; PERSPECTIVE //
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {careerEvolution.map((step, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E6E2DA] hover:border-[#9C4328]/50 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between font-mono text-xs mb-2">
                    <span className="text-[#9C4328] font-bold">{step.step}</span>
                    <span className="text-[#736E67]">&rarr;</span>
                  </div>
                  <div className="font-bold font-mono text-sm sm:text-base text-[#1A1817] tracking-wide uppercase mb-1">
                    {step.title}
                  </div>
                </div>
                <div className="text-xs text-[#4A4642] font-mono mt-3">
                  {step.focus}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chronological Experience Narrative */}
        <div className="space-y-12">
          {experience.map((exp) => (
            <div
              key={exp.id}
              className="p-6 sm:p-10 rounded-2xl bg-white border border-[#E6E2DA] hover:border-[#9C4328]/40 transition-all duration-200 shadow-sm hover:shadow-md"
            >
              {/* Experience Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-6 border-b border-[#E6E2DA] mb-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-[#9C4328] uppercase tracking-wider mb-1 font-semibold">
                    <span>{exp.type}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#1A1817] tracking-tight">
                    {exp.company}
                  </h3>
                  <div className="text-sm sm:text-base text-[#4A4642] font-medium mt-0.5">
                    {exp.role}
                  </div>
                </div>

                <div className="text-left md:text-right font-mono text-xs text-[#4A4642]">
                  <div className="text-[#1A1817] font-semibold">{exp.period}</div>
                  <div className="text-[#736E67]">{exp.location}</div>
                </div>
              </div>

              {/* Progression Note */}
              {exp.progressionNote && (
                <div className="mb-6 px-4 py-2.5 rounded-lg bg-[#F8E7DF]/60 border border-[#9C4328]/30 font-mono text-xs text-[#83351E]">
                  <span className="text-[#9C4328] font-bold mr-2">&rarr;</span>
                  <span>{exp.progressionNote}</span>
                </div>
              )}

              {/* Subtracks for TCS or direct bullets */}
              {exp.subTracks ? (
                <div className="space-y-6">
                  {exp.subTracks.map((sub, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-5 rounded-xl bg-[#FAF8F5] border border-[#E6E2DA]"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-3">
                        <div className="font-bold text-[#1A1817] text-base">
                          {sub.trackName}
                        </div>
                        <div className="font-mono text-xs text-[#9C4328] uppercase font-semibold">
                          {sub.roleName}
                        </div>
                      </div>
                      <ul className="space-y-2.5">
                        {sub.bullets.map((b, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-3 text-sm text-[#4A4642] leading-relaxed">
                            <span className="text-[#9C4328] font-mono text-xs pt-1">&bull;</span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ) : (
                <ul className="space-y-2.5">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-3 text-sm sm:text-base text-[#4A4642] leading-relaxed">
                      <span className="text-[#9C4328] font-mono text-xs pt-1.5">&bull;</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
