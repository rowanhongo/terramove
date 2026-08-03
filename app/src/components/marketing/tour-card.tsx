import { Clock, Star, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Img } from "@/components/marketing/img";
import type { Tour } from "@/lib/content";

export function TourCard({ item }: { item: Tour }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Img
          src={item.image}
          alt={item.title}
          className="h-full w-full transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute left-3 top-3">
          <Badge variant="dark">{item.category}</Badge>
        </div>
        {item.status && (
          <div className="absolute right-3 top-3">
            <Badge variant="brand">{item.status}</Badge>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="eyebrow">{item.category}</p>
        <h3 className="mt-2 font-display text-xl font-bold leading-snug text-ink">
          {item.title}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-ink/55">
          {item.description}
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-ink/55">
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5 text-brand" />
            {item.duration}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Users className="h-3.5 w-3.5 text-brand" />
            Max {item.maxGuests}
          </span>
        </div>

        <div className="mt-4 flex items-center justify-between border-t border-ink/5 pt-3">
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink">
            <Star className="h-4 w-4 fill-gold text-gold" />
            {item.rating.toFixed(1)}
          </span>
          <span className="font-display text-lg font-bold text-brand">
            From ${item.price}
          </span>
        </div>
      </div>
    </article>
  );
}
