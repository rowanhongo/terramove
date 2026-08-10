import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  /** Roman (bold) portion of the display headline. */
  title: string;
  /** Italic accent-colored portion, rendered after the title on the same line. */
  accent?: string;
  description?: string;
  /** Optional "View all →" style link on the right (desktop) / below (mobile). */
  action?: { label: string; to: string };
  /** Dark sections flip text + eyebrow colors. */
  tone?: "dark" | "light";
  align?: "left" | "center";
  className?: string;
}

/**
 * Signature section header: letter-spaced eyebrow + high-contrast serif title
 * where the emotional word is set in a contrasting accent color.
 */
export function SectionHeading({
  eyebrow,
  title,
  accent,
  description,
  action,
  tone = "light",
  align = "left",
  className,
}: SectionHeadingProps) {
  const dark = tone === "dark";
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center"
          ? "items-center text-center"
          : "sm:flex-row sm:items-end sm:justify-between",
        className
      )}
    >
      <div className={cn(align === "center" && "max-w-2xl")}>
        {eyebrow && (
          <p className={dark ? "eyebrow-gold" : "eyebrow"}>{eyebrow}</p>
        )}
        <h2
          className={cn(
            "mt-3 font-display text-3xl font-bold leading-[1.05] tracking-tight sm:text-4xl md:text-[2.75rem]",
            dark ? "text-white" : "text-ink"
          )}
        >
          {title}
          {accent && (
            <>
              {" "}
              <span className="font-display text-brand">{accent}</span>
            </>
          )}
        </h2>
        {description && (
          <p
            className={cn(
              "mt-4 max-w-xl text-base leading-relaxed md:text-lg",
              dark ? "text-white/70" : "text-ink/60",
              align === "center" && "mx-auto"
            )}
          >
            {description}
          </p>
        )}
      </div>

      {action && (
        <Link
          to={action.to}
          className={cn(
            "group inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold transition-colors",
            dark ? "text-gold hover:text-white" : "text-brand hover:text-brand-dark"
          )}
        >
          {action.label}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      )}
    </div>
  );
}
