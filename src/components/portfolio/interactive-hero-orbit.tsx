'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface NavSectionOption {
  id: string;
  number: string;
  label: string;
  tag: string;
  title: string;
  highlight: string;
  summary: string;
  href: string;
  angleDeg: number;
}

const SECTIONS: NavSectionOption[] = [
  {
    id: "work",
    number: "01",
    label: "WORK",
    tag: "PRODUCTION SYSTEMS",
    title: "Selected Work & Impact",
    highlight: "3 CASE STUDIES • 9 METRICS",
    summary: "GenAI Chatbot, Voice AI Assistant & AutoSphere 3D Discovery.",
    href: "/work",
    angleDeg: -90, // Top
  },
  {
    id: "experience",
    number: "02",
    label: "EXPERIENCE",
    tag: "CAREER STORY",
    title: "Career Evolution",
    highlight: "4-YEAR ENTERPRISE TRAJECTORY",
    summary: "From Software Engineering & BA to Enterprise AI Product Consulting.",
    href: "/experience",
    angleDeg: -30, // Top-Right
  },
  {
    id: "capabilities",
    number: "03",
    label: "CAPABILITIES",
    tag: "CORE TOOLKIT",
    title: "What I Work On",
    highlight: "PRODUCT • AI • TOOLS",
    summary: "PRDs, GenAI architectures, RESTful APIs, SQL, Figma & CleverTap.",
    href: "/capabilities",
    angleDeg: 30, // Bottom-Right
  },
  {
    id: "achievements",
    number: "04",
    label: "HONORS",
    tag: "AWARDS & ACADEMICS",
    title: "Honors & Academic",
    highlight: "MANOJ KOHLI SCHOLAR • TCS EXCELLENCE",
    summary: "Scholarship winner, TCS Excellence Award, DaveAI Top Performer & RTU 9.11 CGPA Honours.",
    href: "/achievements",
    angleDeg: 90, // Bottom
  },
  {
    id: "extracurricular",
    number: "05",
    label: "LEADERSHIP",
    tag: "STEWARDSHIP & INITIATIVE",
    title: "Leadership & Impact",
    highlight: "TOASTMASTERS • PLACEMENT LEAD",
    summary: "Speech finalist, 1000+ student placement coordinator, hackathons & corporate emcee.",
    href: "/extracurricular",
    angleDeg: 150, // Bottom-Left
  },
  {
    id: "contact",
    number: "06",
    label: "CONTACT",
    tag: "GET IN TOUCH",
    title: "Let's Connect",
    highlight: "EMAIL • LINKEDIN PROFILE",
    summary: "Reach out via verified LinkedIn profile or direct email.",
    href: "/contact",
    angleDeg: 210, // Top-Left
  },
];

export function InteractiveHeroOrbit() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const activeSection = SECTIONS[activeIndex];

  return (
    <div className="w-full max-w-5xl mx-auto my-8 sm:my-12 relative flex flex-col items-center select-none">
      {/* Eyebrow / Label */}
      <div className="flex items-center gap-2 text-[11px] font-mono tracking-widest text-[#736E67] uppercase mb-4 sm:mb-6">
        <span className="w-2 h-2 rounded-full bg-[#9C4328] animate-pulse" />
        <span>EXPLORE PORTFOLIO PAGES // CLICK ANY NODE OR CENTER BUTTON</span>
      </div>

      {/* Main Interactive Circular Navigation Figure */}
      <div className="relative w-[340px] h-[340px] sm:w-[480px] sm:h-[480px] md:w-[530px] md:h-[530px] flex items-center justify-center">
        {/* Ambient Warm Radial Glow */}
        <div
          className="absolute inset-0 rounded-full bg-[#9C4328]/[0.05] blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        {/* Concentric Rotating Precision Geometric Rings */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 530 530"
          fill="none"
        >
          {/* Outermost Dashed Editorial Track */}
          <circle
            cx="265"
            cy="265"
            r="245"
            stroke="#E6E2DA"
            strokeWidth="1.5"
            strokeDasharray="4 8"
            className="origin-center animate-[spin_100s_linear_infinite]"
          />
          {/* Terracotta Precision Orbit Track */}
          <circle
            cx="265"
            cy="265"
            r="195"
            stroke="#9C4328"
            strokeOpacity="0.3"
            strokeWidth="1.5"
            strokeDasharray="6 14"
            className="origin-center animate-[spin_60s_linear_infinite_reverse]"
          />
          {/* Inner Guidance Track */}
          <circle
            cx="265"
            cy="265"
            r="145"
            stroke="#E6E2DA"
            strokeWidth="1"
          />
          {/* Radar Axes Crosshairs */}
          <line x1="265" y1="20" x2="265" y2="510" stroke="#E6E2DA" strokeWidth="1" strokeDasharray="3 6" />
          <line x1="20" y1="265" x2="510" y2="265" stroke="#E6E2DA" strokeWidth="1" strokeDasharray="3 6" />
        </svg>

        {/* 6 Circular Navigation Node Buttons Placed Radially Around the Circle */}
        {SECTIONS.map((sec, idx) => {
          const rad = (sec.angleDeg * Math.PI) / 180;
          const isSelected = activeIndex === idx;

          return (
            <div
              key={sec.id}
              className="absolute z-20 -translate-x-1/2 -translate-y-1/2 transition-transform duration-300"
              style={{
                left: `calc(50% + ${Math.cos(rad) * 40}%)`,
                top: `calc(50% + ${Math.sin(rad) * 40}%)`,
              }}
              onMouseEnter={() => setActiveIndex(idx)}
            >
              <Link
                href={sec.href}
                onClick={() => setActiveIndex(idx)}
                className={`group flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border transition-all duration-300 font-mono text-[10px] sm:text-xs tracking-wider uppercase backdrop-blur-md shadow-xs ${
                  isSelected
                    ? "bg-[#1A1817] text-white border-[#1A1817] font-bold shadow-lg scale-110"
                    : "bg-white/95 text-[#1A1817] border-[#E6E2DA] hover:border-[#9C4328] hover:text-[#9C4328] hover:scale-105"
                }`}
                data-cursor="interactive"
                title={`Open ${sec.title}`}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? "bg-[#9C4328]" : "bg-[#736E67] group-hover:bg-[#9C4328]"}`} />
                <span className={isSelected ? "text-[#E6E2DA]" : "text-[#736E67]"}>{sec.number}</span>
                <span>{sec.label}</span>
              </Link>
            </div>
          );
        })}

        {/* Center Display: Interactive Section Telemetry & 1-Click Page Jump */}
        <div className="z-10 w-[220px] h-[220px] sm:w-[260px] sm:h-[260px] rounded-full bg-white border border-[#E6E2DA] p-5 sm:p-6 flex flex-col justify-center items-center text-center shadow-xl relative overflow-hidden backdrop-blur-xl group">
          {/* Subtle Inner Warm Accent Ring */}
          <div className="absolute inset-0 rounded-full border border-[#9C4328]/15 pointer-events-none" />

          {/* Section Tag */}
          <div className="font-mono text-[9px] sm:text-[10px] text-[#9C4328] tracking-widest uppercase mb-1 flex items-center gap-1.5 font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#9C4328] animate-pulse" />
            {activeSection.tag}
          </div>

          {/* Section Name */}
          <h3 className="text-sm sm:text-base md:text-lg font-extrabold text-[#1A1817] tracking-tight uppercase leading-tight mt-1">
            {activeSection.title}
          </h3>

          {/* Key Highlight Pill */}
          <div className="inline-block px-2.5 py-0.5 my-1.5 rounded-full bg-[#F3EFEA] border border-[#E6E2DA] text-[9px] sm:text-[10px] font-mono font-bold text-[#9C4328]">
            {activeSection.highlight}
          </div>

          {/* Summary Preview */}
          <p className="text-[10px] sm:text-[11px] text-[#4A4642] font-normal leading-snug line-clamp-2 max-w-[190px] mb-3">
            {activeSection.summary}
          </p>

          {/* Direct Navigation Button to Dedicated Subpage */}
          <Link
            href={activeSection.href}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#1A1817] text-white text-[10px] sm:text-[11px] font-mono font-semibold uppercase tracking-wider hover:bg-[#9C4328] hover:shadow-md transition-all duration-200"
            data-cursor="interactive"
          >
            <span>Open Page</span>
            <span>&#8594;</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
