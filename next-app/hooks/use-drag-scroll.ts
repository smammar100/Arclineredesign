"use client";

import { useCallback, useRef } from "react";

/**
 * Horizontal drag-to-scroll for overflow-x containers.
 * Touch uses native overflow scrolling; mouse/pen use click-drag.
 */
export function useDragScroll() {
  const ref = useRef<HTMLDivElement>(null);
  const state = useRef({ active: false, startX: 0, scrollLeft: 0 });

  const onPointerDown = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === "touch") return;
    if (e.button !== 0) return;
    const el = ref.current;
    if (!el) return;
    state.current = {
      active: true,
      startX: e.clientX,
      scrollLeft: el.scrollLeft,
    };
    el.setPointerCapture(e.pointerId);
    el.style.cursor = "grabbing";
    el.style.userSelect = "none";
  }, []);

  const onPointerMove = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    if (!state.current.active) return;
    const el = ref.current;
    if (!el) return;
    const dx = e.clientX - state.current.startX;
    el.scrollLeft = state.current.scrollLeft - dx;
  }, []);

  const end = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    if (!state.current.active) return;
    state.current.active = false;
    const el = ref.current;
    if (el) {
      el.style.cursor = "";
      el.style.userSelect = "";
      try {
        el.releasePointerCapture(e.pointerId);
      } catch {
        /* released */
      }
    }
  }, []);

  return {
    ref,
    dragScrollProps: {
      onPointerDown,
      onPointerMove,
      onPointerUp: end,
      onPointerCancel: end,
      onLostPointerCapture: end,
    },
  };
}
