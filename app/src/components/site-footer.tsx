import { Link } from "react-router-dom";
import { Heart, Instagram, Linkedin } from "lucide-react";
import { Logo } from "@/components/logo";
import { Img } from "@/components/marketing/img";
import { FOOTER_LINKS } from "@/lib/nav";
import { img } from "@/lib/content";
import { TikTokIcon } from "@/components/icons/tiktok";
import { WhatsAppIcon } from "@/components/icons/whatsapp";

const SOCIALS = [
  { label: "Instagram", href: "#", Icon: Instagram },
  { label: "LinkedIn", href: "#", Icon: Linkedin },
  { label: "TikTok", href: "#", Icon: TikTokIcon },
  { label: "WhatsApp", href: "https://wa.me/250788000000", Icon: WhatsAppIcon },
];

// A glimpse of the range TerraMove covers, instead of a flat fill.
const BACKDROP = [
  { src: img("photo-1579518874869-1ad294d2596f", 700, 900), alt: "Kigali Convention Centre lit up at night" },
  { src: img("photo-1547970810-dc1eac37d174", 700, 900), alt: "Mountain gorilla in Volcanoes National Park" },
  { src: img("photo-1502680390469-be75c86b636f", 700, 900), alt: "Lake Kivu at sunset" },
];

export function SiteFooter() {
  const columns = [FOOTER_LINKS.explore, FOOTER_LINKS.company, FOOTER_LINKS.support];

  return (
    <footer className="relative overflow-hidden text-white/70">
      {/* Backdrop: convention centre / gorillas / Lake Kivu, dimmed under a tint */}
      <div className="absolute inset-0 grid grid-cols-3">
        {BACKDROP.map((item) => (
          <Img key={item.src} src={item.src} alt={item.alt} className="h-full w-full" />
        ))}
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-forest/80 via-forest/88 to-forest/95" />

      <div className="container relative py-14 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Brand + blurb + social */}
          <div className="max-w-sm">
            <Logo tone="light" />
            <p className="mt-5 text-sm leading-relaxed text-white/60">
              Founded in Kigali in 2021 by people who grew up here and got
              tired of watching it get flattened into a highlight reel.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {SOCIALS.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/80 transition-colors hover:bg-brand hover:text-white"
                >
                  <Icon className="h-[18px] w-[18px]" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-white/70 transition-colors hover:text-brand"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p className="flex items-center gap-1.5">
            © {new Date().getFullYear()} TerraMove Tours. All rights reserved. Made with
            <Heart className="h-3.5 w-3.5 fill-brand text-brand" /> in Kigali, Rwanda.
          </p>
          <p>EN · FR · RW — we reply in whichever you write in.</p>
        </div>
      </div>
    </footer>
  );
}
