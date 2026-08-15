import { AppShell } from "@/components/app-shell";
import { PageHero } from "@/components/marketing/page-hero";
import { Section } from "@/components/marketing/section";
import { StatRow } from "@/components/marketing/stat-row";
import { TourCard } from "@/components/marketing/tour-card";
import { TOURS, type Stat } from "@/lib/content";

const HERO_IMG =
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&h=1080&q=80";

const TOUR_STATS: Stat[] = [
  { value: "4.8", label: "Average tour rating", icon: "star" },
  { value: "18", label: "Certified local guides", icon: "smile" },
  { value: "3", label: "Languages per tour", icon: "globe" },
  { value: "100%", label: "Small-group experiences", icon: "mountain" },
];

export default function CityToursPage() {
  return (
    <AppShell overHero>
      <PageHero
        variant="image"
        image={HERO_IMG}
        eyebrow="Kigali, on Foot"
        title="Three hours in Kigali will change"
        accent="what you think you know."
        description="Led by Kigali natives — a historian, a chef, and a startup founder among them — these are walking tours, not bus tours."
      />

      {/* Local-guide highlight, now leading the page instead of trailing it —
          the same content type as About's stat band, in a different order. */}
      <Section tone="forest" className="section-y">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="eyebrow-gold">Guided by locals</p>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
              We don't hire guides. We hire{" "}
              <span className="text-gold">Kigali</span>.
            </h2>
            <p className="mt-4 max-w-lg leading-relaxed text-white/70">
              Every storyteller passes a trial walk with our team before they
              lead a single guest — not a resume screen, an actual afternoon
              on the route.
            </p>
          </div>
          <StatRow stats={TOUR_STATS} className="lg:grid-cols-2" />
        </div>
      </Section>

      <Section tone="cream" padded={false} className="pb-16 md:pb-24">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TOURS.map((item) => (
            <TourCard key={item.id} item={item} />
          ))}
        </div>
      </Section>
    </AppShell>
  );
}
