"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: "default" | "success" | "warning" | "cyan" | "outline" | "mono";
  dot?: boolean;
}

export function Badge({
  children,
  className,
  variant = "default",
  dot = false,
  ...props
}: BadgeProps) {
  const variants = {
    default: "bg-slate-100 text-slate-700 border-slate-200",
    success: "bg-emerald-50 text-emerald-800 border-emerald-200",
    cyan: "bg-cyan-50 text-cyan-800 border-cyan-200",
    warning: "bg-amber-50 text-amber-800 border-amber-200",
    outline: "bg-white text-slate-600 border-slate-300",
    mono: "bg-slate-100 text-slate-800 font-mono border-slate-200 text-[11px]",
  };

  const dotColors = {
    default: "bg-slate-500",
    success: "bg-emerald-600",
    cyan: "bg-cyan-600",
    warning: "bg-amber-600",
    outline: "bg-slate-400",
    mono: "bg-emerald-600",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium border tracking-wide",
        variants[variant],
        className
      )}
      {...props}
    >
      {dot && (
        <span className="relative flex h-1.5 w-1.5">
          <span
            className={cn(
              "animate-ping absolute inline-flex h-full w-full rounded-full opacity-60",
              dotColors[variant]
            )}
          />
          <span
            className={cn("relative inline-flex rounded-full h-1.5 w-1.5", dotColors[variant])}
          />
        </span>
      )}
      {children}
    </div>
  );
}
