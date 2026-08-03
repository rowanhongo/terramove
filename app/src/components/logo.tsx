import { cn } from "@/lib/utils";

interface LogoProps {
  /** Use the light wordmark for dark backgrounds (footer / dark hero). */
  tone?: "dark" | "light";
  className?: string;
}

/** TerraMove logo: mountain glyph in a warm gradient tile + stacked wordmark. */
export function Logo({ tone = "dark", className }: LogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <span
        aria-hidden
        className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-gold via-brand to-brand-dark shadow-pill"
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 46 L27 21 L35 34 L40 26 L52 46 Z"
            fill="#FFFFFF"
            stroke="#FFFFFF"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          <circle cx="27" cy="21" r="2.6" fill="#16261C" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-lg font-extrabold tracking-tight",
            tone === "light" ? "text-white" : "text-ink"
          )}
        >
          TerraMove<span className="text-brand">.</span>
        </span>
        <span
          className={cn(
            "text-[10px] font-semibold uppercase tracking-[0.22em]",
            tone === "light" ? "text-white/60" : "text-ink/50"
          )}
        >
          Tours Rwanda
        </span>
      </span>
    </span>
  );
}
