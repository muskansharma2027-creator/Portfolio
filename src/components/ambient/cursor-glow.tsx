"use client";

import React, { useEffect, useSyncExternalStore } from "react";
import { motion, useSpring } from "framer-motion";

function subscribe(callback: () => void) {
  window.addEventListener("resize", callback);
  return () => window.removeEventListener("resize", callback);
}

function getSnapshot() {
  if (typeof window === "undefined") return true;
  return (
    window.matchMedia("(pointer: coarse)").matches || "ontouchstart" in window
  );
}

function getServerSnapshot() {
  return true;
}

export function CursorGlow() {
  const isTouchDevice = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );

  const springConfig = { damping: 28, stiffness: 200, mass: 0.5 };
  const mouseX = useSpring(-500, springConfig);
  const mouseY = useSpring(-500, springConfig);

  useEffect(() => {
    if (isTouchDevice) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isTouchDevice, mouseX, mouseY]);

  if (isTouchDevice) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="fixed pointer-events-none z-10 w-[450px] h-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full"
      style={{
        left: mouseX,
        top: mouseY,
        background:
          "radial-gradient(circle, rgba(16, 185, 129, 0.04) 0%, rgba(6, 182, 212, 0.02) 40%, transparent 70%)",
      }}
    />
  );
}
