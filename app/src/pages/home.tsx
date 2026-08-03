import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { Section } from "@/components/marketing/section";
import { SectionHeading } from "@/components/marketing/section-heading";
import { Hero } from "@/components/marketing/hero";
import { Carousel } from "@/components/marketing/carousel";
import { ExperienceCard } from "@/components/marketing/experience-card";
import { StayCard } from "@/components/marketing/stay-card";
import { TourCard } from "@/components/marketing/tour-card";
import { TestimonialCard } from "@/components/marketing/testimonial-card";
import { StatRow } from "@/components/marketing/stat-row";
import { PromoBanner } from "@/components/marketing/promo-banner";
import { ChatWidget } from "@/components/marketing/chat-widget";
import { Button } from "@/components/ui/button";
import {
  EXPERIENCES,
  STATS,
  STAYS,
  TESTIMONIALS,
  TOURS,
} from "@/lib/content";

const PLANNER_MESSAGES = [
  {
    from: "assistant" as const,
    text: "Mwaramutse! Tell me your dream Rwanda trip and I'll build the perfect itinerary.",
  },
  {
    from: "user" as const,
    text: "5 days, gorilla trekking + Lake Kivu, luxury stays for 2.",
  },
  {
    from: "assistant" as const,
    text: "Perfect! I suggest 2 nights in Musanze (gorilla trek), 1 night Kigali, 2 nights Lake Kivu. Shall I build the full itinerary with all bookings?",
  },
  { from: "user" as const, text: "Yes please, include airport pickup!" },
];

const PLANNER_FEATURES = [
  "Day-by-day personalized itinerary",
  "Bundle adventures + stay + airport",
  "Offline itinerary & packing checklist",
  "Safety briefings & multilingual support",
];

export default function HomePage() {
  return (
    <AppShell overHero>
      <Hero />

      {/* Stats */}
      <Section tone="cream" padded={false} className="pb-16 pt-4 md:pb-24">
        <StatRow stats={STATS} />
      </Section>

      {/* Upcoming adventures */}
      <Section tone="cream" padded={false} className="pb-16 md:pb-24">
        <SectionHeading
          eyebrow="This Week"
          title="Upcoming"
          accent="Adventures"
          description="Limited slots — book before they're gone."
          action={{ label: "View all", to: "/adventures" }}
        />
        <div className="mt-10">
          <Carousel>
            {EXPERIENCES.map((item) => (
              <ExperienceCard key={item.id} item={item} />
            ))}
          </Carousel>
        </div>
      </Section>

      {/* Featured stays */}
      <Section tone="cream" padded={false} className="pb-16 md:pb-24">
        <SectionHeading
          eyebrow="Where to Stay"
          title="Featured"
          accent="Apartments"
          description="Verified hosts, stunning locations."
          action={{ label: "View all", to: "/stay" }}
        />
        <div className="mt-10">
          <Carousel>
            {STAYS.map((item) => (
              <StayCard key={item.id} item={item} />
            ))}
          </Carousel>
        </div>
      </Section>

      {/* City tours — dark forest contrast band */}
      <Section tone="forest" className="section-y">
        <SectionHeading
          tone="dark"
          eyebrow="Discover Kigali"
          title="City"
          accent="Tours"
          description="Guided by locals who know every story."
          action={{ label: "View all", to: "/city-tours" }}
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TOURS.map((item) => (
            <TourCard key={item.id} item={item} />
          ))}
        </div>
      </Section>

      {/* Promo banner */}
      <Section tone="cream" className="section-y">
        <PromoBanner />
      </Section>

      {/* AI planner signature moment */}
      <Section tone="cream" padded={false} className="pb-16 md:pb-24">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="eyebrow">Powered by AI</p>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl md:text-[2.75rem]">
              Let AI Plan Your{" "}
              <span className="font-display italic text-brand">
                Perfect Rwanda Trip
              </span>
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-ink/60 md:text-lg">
              Tell our AI your travel style, budget, and interests. It builds a
              complete day-by-day itinerary with adventures, stays, and
              transfers — bundled and ready to book in one click.
            </p>
            <ul className="mt-6 space-y-3">
              {PLANNER_FEATURES.map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-sm text-ink/75">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
            <Button asChild variant="primary" size="lg" className="mt-8">
              <Link to="/ai-planner">
                Plan My Trip with AI
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          <ChatWidget messages={PLANNER_MESSAGES} typing />
        </div>
      </Section>

      {/* Testimonials */}
      <Section tone="cream" padded={false} className="pb-16 md:pb-24">
        <SectionHeading
          eyebrow="Real Stories"
          title="Real Travelers,"
          accent="Real Stories"
          description="Join thousands sharing their Rwanda journeys."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((item) => (
            <TestimonialCard key={item.id} item={item} />
          ))}
        </div>
      </Section>

      {/* Closing CTA */}
      <Section tone="cream" className="pb-20 md:pb-28">
        <div className="rounded-3xl bg-forest px-8 py-14 text-center text-white md:px-16 md:py-20">
          <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold leading-tight md:text-4xl">
            Your Rwanda story starts with{" "}
            <span className="italic text-gold">one click</span>.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-white/70">
            Gorillas, culture, lake vistas, and the warmth of a thousand hills —
            all in one place.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild variant="primary" size="lg">
              <Link to="/get-started">Start planning free</Link>
            </Button>
            <Button asChild variant="ghost-light" size="lg">
              <Link to="/adventures">Browse adventures</Link>
            </Button>
          </div>
        </div>
      </Section>
    </AppShell>
  );
}
