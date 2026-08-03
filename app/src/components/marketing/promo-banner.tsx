import { Link } from "react-router-dom";
import { ArrowRight, Check, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";

const COUNTDOWN = [
  { value: "02", unit: "Days" },
  { value: "14", unit: "Hours" },
  { value: "32", unit: "Mins" },
];

const INCLUDES = ["Adventure", "Stay", "Airport Pickup"];

/** Gradient urgency banner with countdown chips + single strong CTA. */
export function PromoBanner() {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand via-brand to-brand-dark p-8 text-white shadow-pill md:p-12">
      {/* Decorative dotted texture */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:22px_22px] opacity-40" />

      <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-xl">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1.5 text-xs font-semibold backdrop-blur-sm">
            <Flame className="h-3.5 w-3.5" />
            Limited — Ends in 2d 14h 32m
          </span>
          <h2 className="mt-5 font-display text-3xl font-bold leading-tight md:text-4xl">
            Bundle &amp; Save 25%
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-white/85 md:text-base">
            Book any adventure + apartment + airport pickup together. No hidden
            fees — the price you see is the price you pay.
          </p>
          <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
            {INCLUDES.map((label) => (
              <li key={label} className="inline-flex items-center gap-1.5 text-sm font-semibold">
                <Check className="h-4 w-4" />
                {label}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col items-start gap-5 lg:items-end">
          <div className="flex gap-3">
            {COUNTDOWN.map((c) => (
              <div
                key={c.unit}
                className="flex min-w-[68px] flex-col items-center rounded-2xl bg-forest/25 px-3 py-3 backdrop-blur-sm"
              >
                <span className="font-display text-2xl font-bold">{c.value}</span>
                <span className="text-[10px] font-semibold uppercase tracking-widest text-white/70">
                  {c.unit}
                </span>
              </div>
            ))}
          </div>
          <Button asChild variant="secondary" size="lg" className="w-full lg:w-auto">
            <Link to="/get-started">
              Claim Bundle Deal
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
