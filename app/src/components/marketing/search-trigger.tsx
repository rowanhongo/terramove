import { useEffect, useRef, useState } from "react";
import {
  CalendarDays,
  ChevronDown,
  MapPin,
  Minus,
  Plus,
  Search,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Category = "adventures" | "stay" | "tours";

const CATEGORIES: { id: Category; label: string }[] = [
  { id: "adventures", label: "Adventures" },
  { id: "stay", label: "Stay" },
  { id: "tours", label: "City Tours" },
];

/**
 * Replaces the old always-visible search card with a single "Where in
 * Rwanda" button. Click reveals a compact popover to pick what you're
 * looking for, a date, and a headcount — closes on outside click / Escape.
 */
export function SearchTrigger() {
  const [open, setOpen] = useState(false);
  const [category, setCategory] = useState<Category>("adventures");
  const [guests, setGuests] = useState(2);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="inline-flex items-center gap-2.5 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-ink shadow-card transition-shadow hover:shadow-card-hover"
      >
        <MapPin className="h-4 w-4 text-brand" />
        Where in Rwanda
        <ChevronDown
          className={cn(
            "h-4 w-4 text-ink/40 transition-transform",
            open && "rotate-180"
          )}
        />
      </button>

      {open && (
        <div className="absolute right-0 top-full z-20 mt-3 w-[min(92vw,380px)] rounded-3xl bg-white p-5 text-left shadow-glass">
          <p className="text-xs font-semibold uppercase tracking-wide text-ink/40">
            What are you looking for?
          </p>
          <div className="mt-2 flex items-center gap-1 rounded-full bg-ink/5 p-1">
            {CATEGORIES.map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => setCategory(c.id)}
                className={cn(
                  "flex-1 whitespace-nowrap rounded-full px-2 py-2 text-xs font-semibold transition-colors sm:text-sm",
                  category === c.id
                    ? "bg-white text-brand shadow-card"
                    : "text-ink/55 hover:text-ink"
                )}
              >
                {c.label}
              </button>
            ))}
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3">
            <label className="flex flex-col gap-1.5">
              <span className="text-xs font-semibold uppercase tracking-wide text-ink/40">
                Date
              </span>
              <span className="flex items-center gap-2 rounded-xl border border-input bg-white px-3 py-2.5">
                <CalendarDays className="h-4 w-4 shrink-0 text-brand" />
                <input
                  type="date"
                  className="w-full bg-transparent text-sm text-ink outline-none"
                />
              </span>
            </label>

            <div className="flex flex-col gap-1.5">
              <span className="text-xs font-semibold uppercase tracking-wide text-ink/40">
                Guests
              </span>
              <div className="flex items-center justify-between rounded-xl border border-input bg-white px-2 py-1.5">
                <button
                  type="button"
                  aria-label="Fewer guests"
                  onClick={() => setGuests((n) => Math.max(1, n - 1))}
                  className="flex h-8 w-8 items-center justify-center rounded-lg text-ink/70 transition-colors hover:bg-ink/5"
                >
                  <Minus className="h-3.5 w-3.5" />
                </button>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink">
                  <Users className="h-4 w-4 text-brand" />
                  {guests}
                </span>
                <button
                  type="button"
                  aria-label="More guests"
                  onClick={() => setGuests((n) => Math.min(12, n + 1))}
                  className="flex h-8 w-8 items-center justify-center rounded-lg text-ink/70 transition-colors hover:bg-ink/5"
                >
                  <Plus className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </div>

          <Button
            variant="primary"
            size="lg"
            className="mt-5 w-full"
            onClick={() => setOpen(false)}
          >
            <Search className="h-4 w-4" />
            Search
          </Button>
        </div>
      )}
    </div>
  );
}
