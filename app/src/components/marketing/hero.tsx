import { Map, PawPrint, Sparkles, Tent, Users } from "lucide-react";
import { VideoBg } from "@/components/marketing/video-bg";
import { SearchTrigger } from "@/components/marketing/search-trigger";

const HERO_IMG =
  "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1920&h=1280&q=80";
const HERO_VIDEO = "https://assets.mixkit.co/videos/3876/3876-720.mp4";

const SERVICES = [
  { label: "Gorilla Treks", Icon: PawPrint },
  { label: "City Tours", Icon: Map },
  { label: "Luxury Stays", Icon: Tent },
  { label: "Group Trips", Icon: Users },
];

/**
 * Home hero: full-bleed looping video + dark gradient overlay, pill badge,
 * serif headline (roman + gold accent), one supporting line. The "Where
 * in Rwanda" trigger breaks from the centered text to float off to the
 * side — an asymmetric beat that keeps the hero from reading as flatly
 * symmetric.
 */
export function Hero() {
  return (
    <section className="relative">
      {/* Full-bleed background */}
      <div className="absolute inset-0 overflow-hidden">
        <VideoBg
          src={HERO_VIDEO}
          poster={HERO_IMG}
          className="pointer-events-none"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest/70 via-forest/45 to-forest/85" />
        <div className="absolute inset-0 bg-gradient-to-t from-cream via-transparent to-transparent" />
      </div>

      {/* Foreground */}
      <div className="container relative flex flex-col items-center pb-20 pt-28 text-center md:pb-28 md:pt-36">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-white/90 backdrop-blur-sm">
          <Sparkles className="h-3.5 w-3.5 text-gold" />
          Explore Rwanda Differently
        </span>

        <h1 className="mt-7 max-w-5xl font-display text-5xl font-bold leading-[0.95] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[4.75rem]">
          Welcome to{" "}
          <span className="mt-1 block font-display text-gold">
            Unforgettable Rwanda
          </span>
        </h1>

        {/* Services as small standalone cards instead of a sentence */}
        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          {SERVICES.map(({ label, Icon }) => (
            <span
              key={label}
              className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-4 py-2.5 text-sm font-medium text-white/90 backdrop-blur-sm"
            >
              <Icon className="h-4 w-4 text-gold" />
              {label}
            </span>
          ))}
        </div>

        {/* Search trigger floats right, off-center from the text above */}
        <div className="mt-12 flex w-full justify-center md:mt-14 md:justify-end">
          <SearchTrigger />
        </div>
      </div>
    </section>
  );
}
