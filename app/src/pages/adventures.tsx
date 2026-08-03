import { AppShell } from "@/components/app-shell";
import { PageHero } from "@/components/marketing/page-hero";
import { Section } from "@/components/marketing/section";
import { StatRow } from "@/components/marketing/stat-row";
import { ExperienceCard } from "@/components/marketing/experience-card";
import { Badge } from "@/components/ui/badge";
import { EXPERIENCES, STATS } from "@/lib/content";

const FILTERS = ["All", "Wildlife", "Water", "Nature", "Culture"];

export default function AdventuresPage() {
  return (
    <AppShell>
      <PageHero
        eyebrow="Explore Rwanda"
        title="Unforgettable"
        accent="Adventures"
        description="From gorilla families in misty volcanoes to sunset paddles on Lake Kivu — every experience is led by verified local guides."
      />

      {/* Filter chips */}
      <Section tone="cream" padded={false} className="pb-10">
        <div className="flex flex-wrap gap-2">
          {FILTERS.map((filter, i) => (
            <Badge
              key={filter}
              variant={i === 0 ? "brand" : "light"}
              size="md"
              className={
                i === 0
                  ? "cursor-pointer"
                  : "cursor-pointer border border-ink/10 !bg-white text-ink/70 hover:text-brand"
              }
            >
              {filter}
            </Badge>
          ))}
        </div>
      </Section>

      {/* Grid */}
      <Section tone="cream" padded={false} className="pb-16 md:pb-24">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {EXPERIENCES.map((item) => (
            <ExperienceCard key={item.id} item={item} />
          ))}
        </div>
      </Section>

      {/* Stats band */}
      <Section tone="forest" className="section-y">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow-gold">By the Numbers</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
            Adventures that <span className="italic text-gold">deliver</span>.
          </h2>
        </div>
        <div className="mt-10">
          <StatRow stats={STATS} />
        </div>
      </Section>
    </AppShell>
  );
}
