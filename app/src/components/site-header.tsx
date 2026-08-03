import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Heart, Menu, Search, User } from "lucide-react";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Sheet } from "@/components/ui/sheet";
import { NAV_ITEMS } from "@/lib/nav";
import { useBreakpoint } from "@/hooks/use-breakpoint";
import { cn } from "@/lib/utils";

interface SiteHeaderProps {
  /** When true the header floats transparent over a dark hero until scrolled. */
  overHero?: boolean;
  /** Scroll container the header should watch (mobile scrolls an inner div). */
  scrollRef?: React.RefObject<HTMLElement>;
}

export function SiteHeader({ overHero = false, scrollRef }: SiteHeaderProps) {
  const bp = useBreakpoint();
  const isMobile = bp === "mobile";
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  // Close the mobile drawer whenever the route changes.
  useEffect(() => setMenuOpen(false), [pathname]);

  useEffect(() => {
    if (!overHero) {
      setScrolled(true);
      return;
    }
    const target: HTMLElement | Window = scrollRef?.current ?? window;
    const readScroll = () =>
      scrollRef?.current
        ? scrollRef.current.scrollTop
        : window.scrollY;
    const onScroll = () => setScrolled(readScroll() > 24);
    onScroll();
    target.addEventListener("scroll", onScroll, { passive: true });
    return () => target.removeEventListener("scroll", onScroll);
  }, [overHero, scrollRef]);

  const solid = scrolled || menuOpen;

  return (
    <header
      className={cn(
        "z-50 w-full transition-colors duration-300",
        overHero ? "absolute inset-x-0 top-0" : "sticky top-0",
        solid
          ? "border-b border-ink/5 bg-cream/90 backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <div className="container flex h-16 items-center justify-between gap-4 md:h-20">
        <Link to="/" aria-label="TerraMove home" className="shrink-0">
          <Logo tone={solid ? "dark" : "light"} />
        </Link>

        {/* Desktop / tablet: centered nav links with active pill */}
        {!isMobile && (
          <nav className="flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  cn(
                    "rounded-full px-3.5 py-2 text-sm font-medium transition-colors lg:px-4",
                    isActive
                      ? "bg-brand-soft text-brand"
                      : solid
                        ? "text-ink/70 hover:text-ink"
                        : "text-white/85 hover:text-white"
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        )}

        {/* Right cluster */}
        <div className="flex items-center gap-1.5 md:gap-2">
          {!isMobile && (
            <>
              <IconButton solid={solid} label="Search">
                <Search className="h-[18px] w-[18px]" />
              </IconButton>
              <IconButton solid={solid} label="Saved">
                <Heart className="h-[18px] w-[18px]" />
              </IconButton>
              <Button asChild variant="secondary" size="sm" className="ml-1">
                <Link to="/signin">
                  <User className="h-4 w-4" />
                  Sign in
                </Link>
              </Button>
            </>
          )}

          {isMobile && (
            <>
              <Button asChild variant="primary" size="sm">
                <Link to="/get-started">Get started</Link>
              </Button>
              <button
                type="button"
                aria-label="Open menu"
                onClick={() => setMenuOpen(true)}
                className={cn(
                  "flex h-10 w-10 items-center justify-center rounded-full transition-colors",
                  solid
                    ? "text-ink hover:bg-ink/5"
                    : "text-white hover:bg-white/10"
                )}
              >
                <Menu className="h-6 w-6" />
              </button>
            </>
          )}
        </div>
      </div>

      {/* Mobile slide-in menu */}
      <Sheet open={menuOpen} onOpenChange={setMenuOpen} label="Navigation menu">
        <div className="flex h-full flex-col px-6 pb-8 pt-7">
          <Logo />
          <nav className="mt-8 flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  cn(
                    "rounded-xl px-4 py-3 text-base font-medium transition-colors",
                    isActive
                      ? "bg-brand-soft text-brand"
                      : "text-ink/80 hover:bg-ink/5"
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <div className="mt-auto flex flex-col gap-3 pt-8">
            <Button asChild variant="outline" size="lg">
              <Link to="/signin">
                <User className="h-4 w-4" />
                Sign in
              </Link>
            </Button>
            <Button asChild variant="primary" size="lg">
              <Link to="/get-started">Get started free</Link>
            </Button>
          </div>
        </div>
      </Sheet>
    </header>
  );
}

function IconButton({
  children,
  label,
  solid,
}: {
  children: React.ReactNode;
  label: string;
  solid: boolean;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      className={cn(
        "flex h-10 w-10 items-center justify-center rounded-full transition-colors",
        solid ? "text-ink/70 hover:bg-ink/5 hover:text-ink" : "text-white/85 hover:bg-white/10"
      )}
    >
      {children}
    </button>
  );
}
