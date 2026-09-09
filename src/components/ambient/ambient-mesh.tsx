"use client";

import React from "react";

export function AmbientMesh() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {/* Background base technical grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60" />

      {/* Radial soft gradient vignetting */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(16,185,129,0.12),rgba(255,255,255,0))]" />

      {/* Subtle floating ambient light orbs */}
      <div 
        className="absolute -top-[20%] left-[15%] w-[600px] h-[600px] rounded-full bg-emerald-500/10 blur-[130px] animate-pulse" 
        style={{ animationDuration: "8s" }}
      />
      <div 
        className="absolute top-[40%] -right-[10%] w-[550px] h-[550px] rounded-full bg-cyan-500/10 blur-[140px] animate-pulse" 
        style={{ animationDuration: "12s" }}
      />
      <div 
        className="absolute top-[80%] left-[5%] w-[650px] h-[650px] rounded-full bg-indigo-500/08 blur-[150px] animate-pulse" 
        style={{ animationDuration: "10s" }}
      />

      {/* Top fine line glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />
    </div>
  );
}
