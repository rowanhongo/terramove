import {
  BadgeDollarSign,
  ShieldCheck,
  ShieldHalf,
  Ticket,
} from "lucide-react";
import { TRUST_SIGNALS } from "@/lib/content";

const ICONS = {
  ticket: Ticket,
  "shield-check": ShieldCheck,
  "badge-dollar": BadgeDollarSign,
  shield: ShieldHalf,
} as const;

/** Inline trust signals under the hero card; wraps to 2 columns on mobile. */
export function TrustRow({ tone = "light" }: { tone?: "light" | "dark" }) {
  const text = tone === "dark" ? "text-white/80" : "text-ink/65";
  const icon = tone === "dark" ? "text-gold" : "text-brand";
  return (
    <ul className="grid grid-cols-2 gap-x-6 gap-y-3 md:flex md:flex-wrap md:items-center md:justify-center md:gap-x-8">
      {TRUST_SIGNALS.map((signal) => {
        const Icon = ICONS[signal.icon];
        return (
          <li
            key={signal.label}
            className={`inline-flex items-center gap-2 text-sm font-medium ${text}`}
          >
            <Icon className={`h-4 w-4 shrink-0 ${icon}`} />
            {signal.label}
          </li>
        );
      })}
    </ul>
  );
}
