import { Link } from "react-router-dom";
import { Facebook, Heart, Instagram, Twitter, Youtube } from "lucide-react";
import { Logo } from "@/components/logo";
import { FOOTER_LINKS } from "@/lib/nav";

const SOCIALS = [
  { label: "Instagram", Icon: Instagram },
  { label: "Twitter", Icon: Twitter },
  { label: "Facebook", Icon: Facebook },
  { label: "YouTube", Icon: Youtube },
];

export function SiteFooter() {
  const columns = [FOOTER_LINKS.explore, FOOTER_LINKS.company, FOOTER_LINKS.support];

  return (
    <footer className="bg-forest text-white/70">
      <div className="container py-14 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Brand + blurb + social */}
          <div className="max-w-sm">
            <Logo tone="light" />
            <p className="mt-5 text-sm leading-relaxed text-white/60">
              The premium way to experience Rwanda — gorillas, culture, lake
              vistas, and the warmth of a thousand hills.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {SOCIALS.map(({ label, Icon }) => (
                <a
                  key={label}
                  href="#"
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
          <p className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-pulse-dot rounded-full bg-emerald-400" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            All systems operational
          </p>
        </div>
      </div>
    </footer>
  );
}
