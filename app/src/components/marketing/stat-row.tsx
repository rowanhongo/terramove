import { Globe, Mountain, Smile, Star } from "lucide-react";
import type { Stat } from "@/lib/content";

const ICONS = {
  smile: Smile,
  mountain: Mountain,
  star: Star,
  globe: Globe,
} as const;

/** 4 white rounded stat cards; 2×2 on mobile, single row on desktop. */
export function StatRow({ stats }: { stats: Stat[] }) {
  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
      {stats.map((stat) => {
        const Icon = ICONS[stat.icon];
        return (
          <div
            key={stat.label}
            className="flex flex-col items-center rounded-2xl bg-white p-5 text-center shadow-card md:p-6"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-soft text-brand">
              <Icon className="h-6 w-6" />
            </span>
            <p className="mt-4 font-display text-2xl font-bold text-ink md:text-3xl">
              {stat.value}
            </p>
            <p className="mt-1 text-xs font-medium text-ink/55 md:text-sm">
              {stat.label}
            </p>
          </div>
        );
      })}
    </div>
  );
}
