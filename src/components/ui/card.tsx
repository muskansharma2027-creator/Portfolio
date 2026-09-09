"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
}

export function Card({
  children,
  className,
  hoverable = true,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "relative rounded-2xl border border-slate-200/90 bg-white p-6 md:p-8 card-shadow-soft transition-all duration-300",
        hoverable && "hover:border-slate-300 hover:card-shadow-hover hover:-translate-y-0.5",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
