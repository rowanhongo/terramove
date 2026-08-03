import { useState } from "react";
import {
  CalendarDays,
  Compass,
  Home,
  Map,
  Plane,
  Search,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const TABS = [
  { id: "adventures", label: "Adventures", Icon: Compass },
  { id: "stay", label: "Stay", Icon: Home },
  { id: "tours", label: "City Tours", Icon: Map },
  { id: "airport", label: "Airport", Icon: Plane },
] as const;

type TabId = (typeof TABS)[number]["id"];

const PLACEHOLDER: Record<TabId, string> = {
  adventures: "Where in Rwanda?",
  stay: "Search stays by city…",
  tours: "Pick a Kigali experience…",
  airport: "Drop-off address…",
};

/**
 * Floating glass conversion card that overlaps the hero's bottom edge.
 * Pill tab switcher across the top, inline quick-search row below.
 * Reflows to a stacked full-width card on mobile.
 */
export function SearchCard() {
  const [tab, setTab] = useState<TabId>("adventures");

  return (
    <div className="rounded-3xl border border-white/15 bg-forest/70 p-3 shadow-glass backdrop-blur-xl md:p-4">
      {/* Tab switcher */}
      <div className="flex gap-1.5 overflow-x-auto scrollbar-none rounded-2xl bg-black/20 p-1.5">
        {TABS.map(({ id, label, Icon }) => (
          <button
            key={id}
            type="button"
            onClick={() => setTab(id)}
            className={cn(
              "inline-flex flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-xl px-3 py-2.5 text-sm font-semibold transition-colors",
              tab === id
                ? "bg-white text-ink shadow-sm"
                : "text-white/75 hover:text-white"
            )}
          >
            <Icon className="h-4 w-4" />
            {label}
          </button>
        ))}
      </div>

      {/* Quick-search row */}
      <div className="mt-3 flex flex-col gap-2.5 md:flex-row md:items-stretch">
        <label className="flex flex-1 items-center gap-2.5 rounded-xl bg-white px-4 py-3">
          <Search className="h-4 w-4 shrink-0 text-brand" />
          <input
            type="text"
            placeholder={PLACEHOLDER[tab]}
            className="w-full bg-transparent text-sm text-ink outline-none placeholder:text-ink/40"
          />
        </label>

        <label className="flex items-center gap-2.5 rounded-xl bg-white px-4 py-3 md:w-44">
          <CalendarDays className="h-4 w-4 shrink-0 text-brand" />
          <input
            type="date"
            className="w-full bg-transparent text-sm text-ink/70 outline-none"
          />
        </label>

        <button
          type="button"
          className="flex items-center justify-center gap-2.5 rounded-xl bg-white px-4 py-3 text-sm text-ink/70 md:w-36"
        >
          <Users className="h-4 w-4 shrink-0 text-brand" />
          2 guests
        </button>

        <Button variant="primary" size="lg" className="md:px-7">
          <Search className="h-4 w-4" />
          Search
        </Button>
      </div>
    </div>
  );
}
