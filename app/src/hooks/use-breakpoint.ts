import { useEffect, useState } from "react";

export type Breakpoint = "mobile" | "tablet" | "desktop";

// Aligned with Tailwind's md (768) / lg (1024) so structural switches and
// utility classes agree about where layouts change.
const TABLET_MIN = 768;
const DESKTOP_MIN = 1024;

function resolve(width: number): Breakpoint {
  if (width >= DESKTOP_MIN) return "desktop";
  if (width >= TABLET_MIN) return "tablet";
  return "mobile";
}

/**
 * Structural breakpoint hook — use ONLY for navigation/layout switching
 * (bottom tab bar vs sidebar, single vs multi-column chrome). For visual
 * reflow (spacing, font size, grid columns) use Tailwind sm:/md:/lg: instead.
 */
export function useBreakpoint(): Breakpoint {
  const [bp, setBp] = useState<Breakpoint>(() =>
    typeof window === "undefined" ? "desktop" : resolve(window.innerWidth)
  );

  useEffect(() => {
    let frame = 0;
    const onResize = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => setBp(resolve(window.innerWidth)));
    };
    window.addEventListener("resize", onResize);
    onResize();
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return bp;
}
