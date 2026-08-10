import { Link } from "react-router-dom";
import { AppShell } from "@/components/app-shell";
import { Section } from "@/components/marketing/section";
import { Hero } from "@/components/marketing/hero";
import { DiscoverTabs } from "@/components/marketing/discover-tabs";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <AppShell overHero>
      <Hero />

      {/* Adventures + Stays, one switchable section instead of two */}
      <Section tone="white" className="section-y">
        <DiscoverTabs />
      </Section>

      {/* Closing CTA — light band with a soft warm glow instead of a solid
          dark fill, so it doesn't stack into one giant dark block with the
          footer right below it. */}
      <Section tone="cream" className="section-y">
        <div className="relative text-center">
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-brand/25 via-gold/20 to-transparent blur-3xl"
          />
          <p className="eyebrow relative">Ready When You Are</p>
          <h2 className="relative mx-auto mt-3 max-w-2xl font-display text-3xl font-bold leading-tight text-ink md:text-4xl">
            Your Rwanda story starts with{" "}
            <span className="text-brand">one click</span>.
          </h2>
          <div className="relative mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild variant="primary" size="lg">
              <Link to="/get-started">Start planning free</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/adventures">Browse adventures</Link>
            </Button>
          </div>
        </div>
      </Section>
    </AppShell>
  );
}
