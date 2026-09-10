'use client';

import React, { useEffect, useRef, useState } from 'react';

export function GodCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  const [visible, setVisible] = useState(false);
  const [cursorState, setCursorState] = useState<{
    hovered: boolean;
    label: string | null;
    isInput: boolean;
  }>({ hovered: false, label: null, isInput: false });

  // Ref to track state changes and avoid triggering React re-renders on mousemove
  const stateRef = useRef({ hovered: false, label: null as string | null, isInput: false });

  useEffect(() => {
    // Disable on touch / mobile devices
    const isTouch = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
    if (isTouch) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let isMoving = false;
    let animId: number;

    const onMouseMove = (e: MouseEvent) => {
      const clientX = e.clientX;
      const clientY = e.clientY;

      mouseX = clientX;
      mouseY = clientY;

      // On first mouse move, sync ring immediately to prevent flying across screen from (-100, -100)
      if (!isMoving) {
        isMoving = true;
        ringX = clientX;
        ringY = clientY;
        document.documentElement.classList.add('has-custom-cursor');
        setVisible(true);
        if (ringRef.current) {
          ringRef.current.style.transform = `translate3d(${clientX}px, ${clientY}px, 0) translate(-50%, -50%)`;
        }
      }

      // Synchronously update precision dot with ZERO latency and hardware alignment
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${clientX}px, ${clientY}px, 0) translate(-50%, -50%)`;
      }

      // Check target for custom cursor state without creating new objects unless state changed
      const target = e.target as HTMLElement | null;
      if (target) {
        const isInput = Boolean(target.closest('input, textarea, select, [contenteditable="true"]'));
        const interactiveEl = target.closest('a, button, [data-cursor], [role="button"]');
        const cursorAttr = interactiveEl?.getAttribute('data-cursor');
        const nextLabel = cursorAttr && cursorAttr !== 'interactive' ? cursorAttr.toUpperCase() : null;
        const nextHovered = Boolean(interactiveEl) && !isInput;

        if (
          stateRef.current.hovered !== nextHovered ||
          stateRef.current.label !== nextLabel ||
          stateRef.current.isInput !== isInput
        ) {
          stateRef.current = { hovered: nextHovered, label: nextLabel, isInput };
          setCursorState({ hovered: nextHovered, label: nextLabel, isInput });
        }
      }
    };

    const onMouseLeave = () => {
      setVisible(false);
      document.documentElement.classList.remove('has-custom-cursor');
    };

    const onMouseEnter = () => {
      setVisible(true);
      document.documentElement.classList.add('has-custom-cursor');
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    const lerp = (start: number, end: number, factor: number) => start + (end - start) * factor;

    const render = () => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
      }

      if (ringRef.current) {
        if (prefersReducedMotion) {
          ringX = mouseX;
          ringY = mouseY;
        } else {
          // Snappy, elastic 0.35 lerp factor - responsive and tightly tethered
          ringX = lerp(ringX, mouseX, 0.35);
          ringY = lerp(ringY, mouseY, 0.35);
        }
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      document.documentElement.classList.remove('has-custom-cursor');
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      cancelAnimationFrame(animId);
    };
  }, []);

  const hasLabel = Boolean(cursorState.label);
  const isHidden = !visible || cursorState.isInput;

  return (
    <div
      className="fixed inset-0 pointer-events-none z-[99999] overflow-hidden transition-opacity duration-150"
      style={{ opacity: isHidden ? 0 : 1 }}
      aria-hidden="true"
    >
      {/* Central Solid High-Visibility Precision Dot (0ms latency, no transform transition) */}
      <div
        ref={cursorRef}
        className="absolute top-0 left-0 w-2 h-2 rounded-full bg-[#1A1817] shadow-[0_0_8px_rgba(156,67,40,0.45)]"
        style={{
          opacity: hasLabel ? 0 : 1,
          willChange: 'transform',
          transition: 'opacity 0.15s ease',
        }}
      />

      {/* Outer High-Visibility Fluid Follower Ring (transitions styling ONLY, never transform) */}
      <div
        ref={ringRef}
        className="absolute top-0 left-0 flex items-center justify-center pointer-events-none"
        style={{
          width: hasLabel ? '88px' : cursorState.hovered ? '52px' : '30px',
          height: hasLabel ? '32px' : cursorState.hovered ? '52px' : '30px',
          borderRadius: hasLabel ? '16px' : '9999px',
          backgroundColor: hasLabel
            ? '#1A1817'
            : cursorState.hovered
            ? 'rgba(156, 67, 40, 0.12)'
            : 'rgba(156, 67, 40, 0.05)',
          border: hasLabel
            ? '1.5px solid #9C4328'
            : cursorState.hovered
            ? '2px solid #9C4328'
            : '1.5px solid rgba(26, 24, 23, 0.7)',
          boxShadow: cursorState.hovered
            ? '0 0 20px rgba(156, 67, 40, 0.35), 0 4px 12px rgba(0, 0, 0, 0.08)'
            : '0 1px 4px rgba(0, 0, 0, 0.06)',
          willChange: 'transform',
          transition:
            'width 0.22s cubic-bezier(0.16, 1, 0.3, 1), height 0.22s cubic-bezier(0.16, 1, 0.3, 1), border-radius 0.22s ease, background-color 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease',
        }}
      >
        {hasLabel && (
          <span
            ref={labelRef}
            className="text-[10px] font-mono font-bold tracking-widest text-white uppercase select-none flex items-center gap-1 px-2"
          >
            <span>{cursorState.label}</span>
            <span className="text-[#E07A5F]">→</span>
          </span>
        )}
      </div>
    </div>
  );
}
