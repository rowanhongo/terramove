import { AppShell } from "@/components/app-shell";
import { PageHero } from "@/components/marketing/page-hero";
import { Section } from "@/components/marketing/section";
import { StayCard } from "@/components/marketing/stay-card";
import { Badge } from "@/components/ui/badge";
import { STAYS } from "@/lib/content";

const TYPES = ["All stays", "Penthouse", "Villa", "Cottage", "Lodge"];

export default function StayPage() {
  return (
    <AppShell>
      <PageHero
        eyebrow="Where to Stay"
        title="Stays With a"
        accent="View"
        description="Verified hosts, honest prices, and locations that put you right where the magic happens — from Kigali rooftops to Lake Kivu shorelines."
      />

      <Section tone="cream" padded={false} className="pb-10">
        <div className="flex flex-wrap gap-2">
          {TYPES.map((type, i) => (
            <Badge
              key={type}
              variant={i === 0 ? "brand" : "light"}
              size="md"
              className={
                i === 0
                  ? "cursor-pointer"
                  : "cursor-pointer border border-ink/10 !bg-white text-ink/70 hover:text-brand"
              }
            >
              {type}
            </Badge>
          ))}
        </div>
      </Section>

      <Section tone="cream" padded={false} className="pb-16 md:pb-24">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {STAYS.map((item) => (
            <StayCard key={item.id} item={item} />
          ))}
        </div>
      </Section>
    </AppShell>
  );
}
