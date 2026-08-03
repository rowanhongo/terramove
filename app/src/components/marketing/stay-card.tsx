import { Heart, MapPin, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Img } from "@/components/marketing/img";
import type { Stay } from "@/lib/content";

export function StayCard({ item }: { item: Stay }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Img
          src={item.image}
          alt={item.title}
          className="h-full w-full transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute left-3 top-3">
          <Badge variant="dark">{item.type}</Badge>
        </div>
        <div className="absolute right-3 top-3 flex items-center gap-2">
          {item.superhost && (
            <Badge variant="gold">
              <Star className="h-3 w-3 fill-forest" />
              Superhost
            </Badge>
          )}
          <button
            type="button"
            aria-label="Save to wishlist"
            className="flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-ink/70 backdrop-blur-sm transition-colors hover:text-brand"
          >
            <Heart className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="flex flex-1 items-start justify-between gap-3 p-5">
        <div>
          <h3 className="font-display text-lg font-bold leading-snug text-ink">
            {item.title}
          </h3>
          <p className="mt-1 inline-flex items-center gap-1.5 text-sm text-ink/55">
            <MapPin className="h-3.5 w-3.5 text-brand" />
            {item.location}
          </p>
        </div>
        <div className="shrink-0 text-right">
          <p className="font-display text-xl font-bold text-brand">${item.price}</p>
          <p className="text-[11px] text-ink/45">/ night</p>
        </div>
      </div>
    </article>
  );
}
