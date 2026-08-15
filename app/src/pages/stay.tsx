import { AppShell } from "@/components/app-shell";
import { PageHero } from "@/components/marketing/page-hero";
import { Section } from "@/components/marketing/section";
import { StayCard } from "@/components/marketing/stay-card";
import { cn } from "@/lib/utils";
import { STAYS } from "@/lib/content";

const TYPES = ["All stays", "Penthouse", "Villa", "Cottage", "Lodge"];

export default function StayPage() {
  return (
    <AppShell>
      <PageHero
        eyebrow="Beds, Booked Directly"
        title="Skip the resort."
        accent="Stay with someone who lives here."
        description="Rooftop apartments in Kigali, lakeside cottages in Rubavu, a canopy lodge in Nyungwe — all run by hosts you can actually message."
      />

      {/* Plain underlined tabs instead of pill filters — deliberately a
          different control shape than Adventures' filter chips. */}
      <Section tone="cream" padded={false} className="pb-10">
        <div className="flex flex-wrap gap-6 border-b border-ink/10">
          {TYPES.map((type, i) => (
            <button
              key={type}
              type="button"
              className={cn(
                "-mb-px border-b-2 pb-3 text-sm font-medium transition-colors",
                i === 0
                  ? "border-brand text-brand"
                  : "border-transparent text-ink/55 hover:text-ink"
              )}
            >
              {type}
            </button>
          ))}
        </div>
      </Section>

      {/* First stay runs wide as a featured pick, rest fall into a 2-up grid. */}
      <Section tone="cream" padded={false} className="pb-16 md:pb-24">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {STAYS.map((item, i) => (
            <div key={item.id} className={i === 0 ? "sm:col-span-2" : undefined}>
              <StayCard item={item} />
            </div>
          ))}
        </div>
      </Section>
    </AppShell>
  );
}
