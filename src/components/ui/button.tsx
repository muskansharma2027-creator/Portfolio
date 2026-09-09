"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  enableMagnetic?: boolean;
}

export function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  enableMagnetic = false,
  onClick,
  ...props
}: ButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!enableMagnetic || !ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * 0.2;
    const y = (clientY - (top + height / 2)) * 0.2;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const variants = {
    primary:
      "bg-slate-900 hover:bg-slate-800 text-white font-medium shadow-sm hover:shadow transition-all active:scale-[0.98]",
    secondary:
      "bg-white hover:bg-slate-50 text-slate-900 font-medium border border-slate-200 shadow-sm active:scale-[0.98]",
    outline:
      "border border-slate-300 hover:border-slate-400 bg-transparent text-slate-700 hover:text-slate-950 hover:bg-slate-100/50 active:scale-[0.98]",
    ghost:
      "bg-transparent text-slate-600 hover:text-slate-950 hover:bg-slate-100 active:scale-[0.98]",
  };

  const sizes = {
    sm: "px-3.5 py-1.5 text-xs rounded-lg gap-1.5",
    md: "px-5 py-2.5 text-sm rounded-xl gap-2",
    lg: "px-6 py-3 text-base rounded-xl gap-2.5",
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className={cn(
        "inline-flex items-center justify-center transition-colors cursor-pointer select-none font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600",
        variants[variant],
        sizes[size],
        className
      )}
      {...(props as React.ComponentPropsWithoutRef<typeof motion.button>)}
    >
      {children}
    </motion.button>
  );
}
