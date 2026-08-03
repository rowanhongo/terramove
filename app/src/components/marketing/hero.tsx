import { Sparkles } from "lucide-react";
import { Img } from "@/components/marketing/img";
import { SearchCard } from "@/components/marketing/search-card";
import { TrustRow } from "@/components/marketing/trust-row";

const HERO_IMG =
  "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1920&h=1280&q=80";

/**
 * Home hero: full-bleed image + dark gradient overlay, pill badge, serif
 * headline (roman + italic accent), one supporting line, then the floating
 * search card overlapping the bottom edge with a trust-signal row beneath.
 */
export function Hero() {
  return (
    <section className="relative">
      {/* Full-bleed background */}
      <div className="absolute inset-0 overflow-hidden">
        <Img
          src={HERO_IMG}
          alt="Savannah at sunset in Rwanda, the land of a thousand hills"
          loading="eager"
          className="h-full w-full"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest/70 via-forest/45 to-forest/85" />
        <div className="absolute inset-0 bg-gradient-to-t from-cream via-transparent to-transparent" />
      </div>

      {/* Foreground */}
      <div className="container relative flex flex-col items-center pt-28 text-center md:pt-36">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
          <Sparkles className="h-4 w-4 text-gold" />
          Explore Rwanda Differently
          <Sparkles className="h-4 w-4 text-gold" />
        </span>

        <h1 className="mt-7 max-w-4xl font-display text-5xl font-bold leading-[0.95] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[5.5rem]">
          The Land of a{" "}
          <span className="mt-1 block font-display italic text-gold">
            Thousand Hills
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/85 md:text-lg">
          Gorilla treks, city tours, luxury stays, and seamless airport
          transfers — crafted by people who call Rwanda home.
        </p>

        {/* Floating card overlapping the section's lower edge */}
        <div className="mt-12 w-full max-w-4xl md:mt-14">
          <SearchCard />
        </div>

        <div className="mt-8 w-full max-w-3xl pb-16 md:pb-20">
          <TrustRow tone="dark" />
        </div>
      </div>
    </section>
  );
}
