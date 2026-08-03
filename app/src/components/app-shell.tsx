import { useRef } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { useBreakpoint } from "@/hooks/use-breakpoint";

interface AppShellProps {
  children: React.ReactNode;
  /** Pages with a dark full-bleed hero float the nav transparently on top. */
  overHero?: boolean;
}

/**
 * The single layout every page renders through. Switches page structure by
 * breakpoint: mobile pins a fixed header over an inner scroll region (native
 * app feel), desktop uses a normal document flow with a sticky header.
 */
export function AppShell({ children, overHero = false }: AppShellProps) {
  const bp = useBreakpoint();
  const isMobile = bp === "mobile";
  const scrollRef = useRef<HTMLDivElement>(null);

  if (isMobile) {
    return (
      <div className="flex h-svh flex-col overflow-hidden bg-cream">
        <div className="flex-shrink-0">
          <SiteHeader overHero={overHero} scrollRef={scrollRef} />
        </div>
        <main
          ref={scrollRef}
          className="flex-1 overflow-y-auto scrollbar-none"
        >
          {/* Pull content up under the transparent header on hero pages */}
          <div className={overHero ? "-mt-16" : undefined}>{children}</div>
          <SiteFooter />
        </main>
      </div>
    );
  }

  return (
    <div className="flex min-h-svh flex-col bg-cream">
      <SiteHeader overHero={overHero} />
      <main className={overHero ? "-mt-20 flex-1" : "flex-1"}>{children}</main>
      <SiteFooter />
    </div>
  );
}
