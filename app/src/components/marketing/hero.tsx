import { Instagram, Linkedin, Map, PawPrint, Tent, Users } from "lucide-react";
import { VideoMontage } from "@/components/marketing/video-montage";
import { SearchTrigger } from "@/components/marketing/search-trigger";
import { TikTokIcon } from "@/components/icons/tiktok";
import { WhatsAppIcon } from "@/components/icons/whatsapp";

const HERO_IMG =
  "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1920&h=1280&q=80";

// One clip per adventure category, cross-fading on a loop so the hero
// reads as a highlight reel of Rwanda's range instead of one scene.
const HERO_CLIPS = [
  { src: "https://assets.mixkit.co/videos/11146/11146-720.mp4", poster: HERO_IMG }, // wildlife
  { src: "https://assets.mixkit.co/videos/102/102-720.mp4" }, // night market / city
  { src: "https://assets.mixkit.co/videos/10990/10990-720.mp4" }, // waterfall / nature stay
  { src: "https://assets.mixkit.co/videos/4028/4028-720.mp4" }, // rolling hills / group trek
];

const SERVICES = [
  { label: "Gorilla Treks", Icon: PawPrint },
  { label: "City Tours", Icon: Map },
  { label: "Luxury Stays", Icon: Tent },
  { label: "Group Trips", Icon: Users },
];

const SOCIALS = [
  { label: "Instagram", href: "#", Icon: Instagram },
  { label: "LinkedIn", href: "#", Icon: Linkedin },
  { label: "TikTok", href: "#", Icon: TikTokIcon },
  { label: "WhatsApp", href: "https://wa.me/250788000000", Icon: WhatsAppIcon },
];

/**
 * Home hero: full-bleed crossfading video montage + dark gradient overlay,
 * plain eyebrow label, serif headline. The "Where in Rwanda" trigger
 * breaks from the centered text to float off to the side — an asymmetric
 * beat that keeps the hero from reading as flatly symmetric.
 */
export function Hero() {
  return (
    <section className="relative flex min-h-svh flex-col overflow-hidden">
      {/* Full-bleed background */}
      <div className="absolute inset-0 overflow-hidden">
        <VideoMontage clips={HERO_CLIPS} className="pointer-events-none" />
        <div className="absolute inset-0 scrim-t" />
      </div>

      {/* Social rail: pinned to the right edge, vertically centered */}
      <div className="absolute right-6 top-1/2 z-10 hidden -translate-y-1/2 flex-col items-center gap-4 lg:right-10 md:flex">
        <span className="h-10 w-px bg-white/25" />
        {SOCIALS.map(({ label, href, Icon }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white/85 transition-colors hover:bg-white/20 hover:text-white"
          >
            <Icon className="h-[18px] w-[18px]" />
          </a>
        ))}
        <span className="h-10 w-px bg-white/25" />
      </div>

      {/* Foreground */}
      <div className="container relative flex flex-1 flex-col items-center justify-center pb-20 pt-28 text-center md:pb-28 md:pt-36">
        <p className="eyebrow-gold">Rwanda Tours, Since 2021</p>

        <h1 className="mt-5 max-w-4xl font-display text-5xl font-bold leading-[0.95] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[4.75rem]">
          Rwanda, off the checklist.
        </h1>

        {/* Services as a plain editorial line instead of boxed chips */}
        <p className="mt-6 flex flex-wrap items-center justify-center gap-x-2 gap-y-2 text-sm font-medium text-white/80 sm:text-base">
          {SERVICES.map(({ label, Icon }, i) => (
            <span key={label} className="inline-flex items-center gap-1.5">
              {i > 0 && <span className="text-white/30">·</span>}
              <Icon className="h-4 w-4 text-gold" />
              {label}
            </span>
          ))}
        </p>

        {/* Search trigger floats right, off-center from the text above */}
        <div className="mt-12 flex w-full justify-center md:mt-14 md:justify-end">
          <SearchTrigger />
        </div>
      </div>
    </section>
  );
}
