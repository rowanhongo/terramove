import { AppShell } from "@/components/app-shell";
import { PageHero } from "@/components/marketing/page-hero";
import { Section } from "@/components/marketing/section";
import { ExperienceCard } from "@/components/marketing/experience-card";
import { Badge } from "@/components/ui/badge";
import { EXPERIENCES } from "@/lib/content";

const FILTERS = ["All", "Wildlife", "Water", "Nature", "Culture"];

export default function AdventuresPage() {
  return (
    <AppShell>
      <PageHero
        eyebrow="Five Categories, One Country"
        title="Gorillas get the headlines."
        accent="These don't."
        description="Sunset paddles on Lake Kivu, coffee-farm treks in the south, gorilla families in the misty north — every experience is led by verified local guides."
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
    </AppShell>
  );
}
