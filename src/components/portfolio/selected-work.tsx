'use client';

import React from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolio-data';

export function SelectedWork() {
  const { selectedWork } = PORTFOLIO_DATA;

  return (
    <section id="work" className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16 pb-6 border-b border-[#E6E2DA]">
          <div>
            <div className="flex items-center gap-2 mb-2 font-mono text-xs text-[#9C4328] tracking-widest uppercase font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#9C4328]" />
              ENTERPRISE AI INITIATIVES
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1A1817] uppercase">
              Selected Work
            </h2>
          </div>
          <p className="font-mono text-xs text-[#4A4642] max-w-md">
            Delivering conversational agents, voice automation, and generative AI experiences deployed across high-volume enterprise customer journeys.
          </p>
        </div>

        {/* Vertical Editorial Presentation of Enterprise AI Initiatives */}
        <div className="space-y-16">
          {selectedWork.map((project) => (
            <article
              key={project.id}
              className="bg-white border border-[#E6E2DA] rounded-2xl overflow-hidden hover:border-[#9C4328]/50 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col"
              data-cursor="view"
            >
              {/* Card Header Strip */}
              <div className="p-6 sm:p-10 border-b border-[#E6E2DA] flex flex-col md:flex-row md:items-center justify-between gap-4 bg-[#FAF8F5]/80">
                <div>
                  <div className="flex items-center gap-3 font-mono text-xs text-[#9C4328] tracking-widest uppercase mb-2">
                    <span className="px-2.5 py-0.5 rounded bg-[#F3EFEA] border border-[#E6E2DA] font-bold text-[#9C4328]">
                      {project.number}
                    </span>
                    <span className="font-semibold">{project.badge}</span>
                  </div>
                  <h3 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#1A1817] tracking-tight uppercase">
                    {project.title}
                  </h3>
                </div>

                <div className="font-mono text-xs text-[#4A4642] text-left md:text-right">
                  <div className="text-[#1A1817] font-semibold">{project.company}</div>
                  <div className="text-[#736E67]">{project.role} &bull; {project.timeline}</div>
                </div>
              </div>

              {/* Card Body: Problem, What I Did, Product Thinking, Outcome & Architecture Diagram */}
              <div className="p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left Narrative Block */}
                <div className="lg:col-span-7 space-y-6">
                  {/* One-line Executive Summary */}
                  <div>
                    <h4 className="font-mono text-[10px] text-[#736E67] uppercase tracking-widest mb-1.5 font-semibold">
                      EXECUTIVE SUMMARY
                    </h4>
                    <p className="text-base sm:text-lg text-[#1A1817] font-medium leading-snug">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Problem Statement */}
                  <div>
                    <h4 className="font-mono text-[10px] text-[#9C4328] uppercase tracking-widest mb-1.5 flex items-center gap-1.5 font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#9C4328]" />
                      PROBLEM ADDRESSED
                    </h4>
                    <p className="text-sm text-[#4A4642] leading-relaxed bg-[#FAF8F5] p-3.5 rounded-xl border border-[#E6E2DA]">
                      {project.problem}
                    </p>
                  </div>

                  {/* What I Did */}
                  <div>
                    <h4 className="font-mono text-[10px] text-[#2D4B39] uppercase tracking-widest mb-1.5 flex items-center gap-1.5 font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2D4B39]" />
                      WHAT I DID &amp; OWNED
                    </h4>
                    <p className="text-sm text-[#4A4642] leading-relaxed">
                      {project.whatIDid}
                    </p>
                  </div>

                  {/* Product Thinking Involved */}
                  <div>
                    <h4 className="font-mono text-[10px] text-[#1A1817] uppercase tracking-widest mb-1.5 flex items-center gap-1.5 font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1A1817]" />
                      PRODUCT THINKING INVOLVED
                    </h4>
                    <p className="text-sm text-[#4A4642] leading-relaxed">
                      {project.productThinking}
                    </p>
                  </div>

                  {/* Relevant Outcome */}
                  <div>
                    <h4 className="font-mono text-[10px] text-[#2D7A4F] uppercase tracking-widest mb-1.5 flex items-center gap-1.5 font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2D7A4F]" />
                      RELEVANT OUTCOME &amp; SCALE
                    </h4>
                    <p className="text-sm text-[#1A1817] leading-relaxed font-medium">
                      {project.outcome}
                    </p>
                  </div>

                  {/* Tools & Tech Chips */}
                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {project.toolsTech.map((tool, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded bg-[#F3EFEA] border border-[#E6E2DA] text-[11px] font-mono text-[#1A1817] font-medium"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Visual / Architecture Presentation */}
                <div className="lg:col-span-5 bg-[#FAF8F5] border border-[#E6E2DA] rounded-xl p-6 flex flex-col justify-between min-h-[360px] relative overflow-hidden">
                  <div className="flex items-center justify-between text-[10px] font-mono text-[#736E67] uppercase tracking-widest pb-3 border-b border-[#E6E2DA]">
                    <span>SYSTEM TOPOLOGY</span>
                    <span className="text-[#9C4328] font-bold">ENTERPRISE TIER</span>
                  </div>

                  {/* Impact Metric Strip for this Initiative */}
                  <div className="grid grid-cols-3 gap-2 my-4">
                    {project.impactMetrics.map((m, mIdx) => (
                      <div
                        key={mIdx}
                        className="p-3 rounded-lg bg-white border border-[#E6E2DA] text-center flex flex-col justify-center shadow-xs"
                      >
                        <span className="text-base sm:text-lg font-bold font-mono text-[#9C4328]">
                          {m.value}
                        </span>
                        <span className="text-[9px] font-mono text-[#4A4642] uppercase tracking-wider mt-0.5 leading-tight">
                          {m.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Architectural Flow Diagram */}
                  {project.id === "genai-chatbot" && (
                    <div className="space-y-3 font-mono text-xs">
                      <div className="p-3 rounded-lg bg-white border border-[#E6E2DA] flex items-center justify-between text-[#1A1817] shadow-xs">
                        <span className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#1A1817]" />
                          Enterprise Touchpoints
                        </span>
                        <span className="text-[#736E67] text-[10px]">WhatsApp / Web</span>
                      </div>
                      <div className="text-center text-[#736E67] text-xs">&#8595;</div>
                      <div className="p-3.5 rounded-lg bg-[#F8E7DF]/60 border border-[#9C4328]/30 text-[#83351E] flex items-center justify-between shadow-xs">
                        <span className="flex items-center gap-2 font-bold text-[#83351E]">
                          <span className="w-2 h-2 rounded-full bg-[#9C4328] animate-pulse" />
                          Hybrid Intent &amp; Fallback
                        </span>
                        <span className="text-[#9C4328] font-semibold text-[10px]">~10% Accuracy Lift</span>
                      </div>
                      <div className="text-center text-[#736E67] text-xs">&#8595;</div>
                      <div className="p-3 rounded-lg bg-white border border-[#E6E2DA] flex items-center justify-between text-[#1A1817] shadow-xs">
                        <span className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#2D7A4F]" />
                          Automated Resolution
                        </span>
                        <span className="text-[#2D7A4F] font-bold text-[10px]">25%+ Deflection</span>
                      </div>
                    </div>
                  )}

                  {project.id === "voice-ai-assistant" && (
                    <div className="space-y-3 font-mono text-xs">
                      <div className="p-3 rounded-lg bg-white border border-[#E6E2DA] flex items-center justify-between text-[#1A1817] shadow-xs">
                        <span className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#9C4328]" />
                          Audio Waveform Stream
                        </span>
                        <span className="text-[#736E67] text-[10px]">Streaming VAD</span>
                      </div>
                      <div className="text-center text-[#736E67] text-xs">&#8595;</div>
                      <div className="p-3.5 rounded-lg bg-[#F8E7DF]/60 border border-[#9C4328]/30 text-[#83351E] flex items-center justify-between shadow-xs">
                        <span className="flex items-center gap-2 font-bold text-[#83351E]">
                          <span className="w-2 h-2 rounded-full bg-[#9C4328] animate-pulse" />
                          Sub-800ms Voice Pipeline
                        </span>
                        <span className="text-[#9C4328] font-semibold text-[10px]">Multilingual Dialects</span>
                      </div>
                      <div className="text-center text-[#736E67] text-xs">&#8595;</div>
                      <div className="p-3 rounded-lg bg-white border border-[#E6E2DA] flex items-center justify-between text-[#1A1817] shadow-xs">
                        <span className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#2D7A4F]" />
                          Enterprise CRM Webhook
                        </span>
                        <span className="text-[#2D7A4F] font-bold text-[10px]">Zero Agent Wait</span>
                      </div>
                    </div>
                  )}

                  {project.id === "autosphere" && (
                    <div className="space-y-3 font-mono text-xs">
                      <div className="p-3 rounded-lg bg-white border border-[#E6E2DA] flex items-center justify-between text-[#1A1817] shadow-xs">
                        <span className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#1A1817]" />
                          Buyer Lifestyle Query
                        </span>
                        <span className="text-[#736E67] text-[10px]">Natural Intent</span>
                      </div>
                      <div className="text-center text-[#736E67] text-xs">&#8595;</div>
                      <div className="p-3.5 rounded-lg bg-[#F8E7DF]/60 border border-[#9C4328]/30 text-[#83351E] flex items-center justify-between shadow-xs">
                        <span className="flex items-center gap-2 font-bold text-[#83351E]">
                          <span className="w-2 h-2 rounded-full bg-[#9C4328] animate-pulse" />
                          Personalized Discovery
                        </span>
                        <span className="text-[#9C4328] font-semibold text-[10px]">1L+ Users</span>
                      </div>
                      <div className="text-center text-[#736E67] text-xs">&#8595;</div>
                      <div className="p-3 rounded-lg bg-white border border-[#E6E2DA] flex items-center justify-between text-[#1A1817] shadow-xs">
                        <span className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#2D7A4F]" />
                          Showroom Test-Drive Lead
                        </span>
                        <span className="text-[#2D7A4F] font-bold text-[10px]">~8% Conversion Lift</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
