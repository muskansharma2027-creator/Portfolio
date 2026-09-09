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
  }>({ hovered: false, label: null });

  useEffect(() => {
    // Disable on touch / mobile devices
    const isTouch = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
    if (isTouch) return;

    // Reduced motion check
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let isMoving = false;
    let animId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isMoving) {
        isMoving = true;
        setVisible(true);
      }

      // Check target for custom cursor state
      const target = e.target as HTMLElement | null;
      if (target) {
        const interactiveEl = target.closest('a, button, [data-cursor]');
        if (interactiveEl) {
          const cursorAttr = interactiveEl.getAttribute('data-cursor');
          if (cursorAttr && cursorAttr !== 'interactive') {
            setCursorState({ hovered: true, label: cursorAttr.toUpperCase() });
          } else {
            setCursorState({ hovered: true, label: null });
          }
        } else {
          setCursorState({ hovered: false, label: null });
        }
      }
    };

    const onMouseLeave = () => {
      setVisible(false);
    };

    const onMouseEnter = () => {
      setVisible(true);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    const lerp = (start: number, end: number, factor: number) => start + (end - start) * factor;

    const render = () => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }

      if (ringRef.current) {
        if (prefersReducedMotion) {
          ringX = mouseX;
          ringY = mouseY;
        } else {
          ringX = lerp(ringX, mouseX, 0.18);
          ringY = lerp(ringY, mouseY, 0.18);
        }
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      cancelAnimationFrame(animId);
    };
  }, []);

  if (!visible) return null;

  const hasLabel = Boolean(cursorState.label);

  return (
    <div className="fixed inset-0 pointer-events-none z-[99999] overflow-hidden" aria-hidden="true">
      {/* Central Solid High-Visibility Precision Dot */}
      <div
        ref={cursorRef}
        className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#1A1817] transition-all duration-150 shadow-[0_0_8px_rgba(156,67,40,0.45)]"
        style={{
          opacity: hasLabel ? 0 : 1,
        }}
      />

      {/* Outer High-Visibility Fluid Follower Ring */}
      <div
        ref={ringRef}
        className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center transition-[width,height,border-radius,background-color,border-color,box-shadow] duration-200 ease-out"
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
