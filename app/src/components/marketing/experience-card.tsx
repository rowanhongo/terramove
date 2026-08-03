import { Clock, Heart, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Img } from "@/components/marketing/img";
import type { Experience } from "@/lib/content";
import { cn } from "@/lib/utils";

const difficultyVariant = {
  Easy: "easy",
  Moderate: "moderate",
  Challenging: "moderate",
} as const;

export function ExperienceCard({ item }: { item: Experience }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Img
          src={item.image}
          alt={item.title}
          className="h-full w-full transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/10" />

        {/* Top badges */}
        <div className="absolute left-3 top-3 flex items-center gap-2">
          <Badge variant="dark">{item.category}</Badge>
          {item.status && <Badge variant="gold">{item.status}</Badge>}
        </div>
        <button
          type="button"
          aria-label="Save to wishlist"
          className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-ink/70 backdrop-blur-sm transition-colors hover:text-brand"
        >
          <Heart className="h-4 w-4" />
        </button>

        {/* Bottom pills */}
        <div className="absolute inset-x-3 bottom-3 flex items-center justify-between">
          <Badge variant={difficultyVariant[item.difficulty]}>
            {item.difficulty}
          </Badge>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-display text-lg font-bold leading-snug text-ink">
              {item.title}
            </h3>
            <p className="mt-0.5 text-sm text-ink/55">{item.location}</p>
          </div>
          <div className="shrink-0 text-right">
            <p className="font-display text-xl font-bold text-brand">
              ${item.price.toLocaleString()}
            </p>
            <p className="text-[11px] text-ink/45">/ person</p>
          </div>
        </div>

        <div className="mt-4 flex items-center gap-4 border-t border-ink/5 pt-3 text-xs text-ink/55">
          <span className="inline-flex items-center gap-1.5">
            <MapPin className={cn("h-3.5 w-3.5 text-brand")} />
            {item.province}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5 text-brand" />
            {item.duration}
          </span>
        </div>
      </div>
    </article>
  );
}
