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

      {/* Closing CTA — light band, plain text, no decoration. */}
      <Section tone="cream" className="section-y">
        <div className="text-center">
          <p className="eyebrow">Next Departure: This Saturday</p>
          <h2 className="mx-auto mt-3 max-w-2xl font-display text-3xl font-bold leading-tight text-ink md:text-4xl">
            Most trips start with three questions: when, how many, how far.
            Let's start there.
          </h2>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild variant="primary" size="lg">
              <Link to="/get-started">Plan my trip</Link>
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
