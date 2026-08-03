import { Heart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Img } from "@/components/marketing/img";
import type { Testimonial } from "@/lib/content";

export function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-card">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Img src={item.image} alt="" className="h-full w-full" />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <Img
              src={item.avatar}
              alt={item.name}
              className="h-10 w-10 rounded-full"
            />
            <p className="text-sm font-semibold text-ink">
              {item.name}
              <span className="ml-1.5 text-xs font-medium uppercase tracking-wide text-ink/40">
                {item.country}
              </span>
            </p>
          </div>
          <Badge variant="gold" size="sm">
            {item.tag}
          </Badge>
        </div>

        <p className="mt-4 flex-1 text-sm leading-relaxed text-ink/70">
          “{item.quote}”
        </p>

        <div className="mt-5 flex items-center gap-1.5 border-t border-ink/5 pt-3 text-sm text-ink/50">
          <Heart className="h-4 w-4 fill-brand text-brand" />
          {item.likes} likes
        </div>
      </div>
    </article>
  );
}
