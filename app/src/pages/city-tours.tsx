import { AppShell } from "@/components/app-shell";
import { PageHero } from "@/components/marketing/page-hero";
import { Section } from "@/components/marketing/section";
import { TourCard } from "@/components/marketing/tour-card";
import { TOURS } from "@/lib/content";

const HERO_IMG =
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&h=1080&q=80";

export default function CityToursPage() {
  return (
    <AppShell overHero>
      <PageHero
        variant="image"
        image={HERO_IMG}
        eyebrow="Kigali & Beyond"
        title="City"
        accent="Tours"
        description="Immersive experiences led by local storytellers who bring Rwanda's history and innovation to life."
      />

      <Section tone="cream" padded={false} className="pb-16 pt-16 md:pb-24 md:pt-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TOURS.map((item) => (
            <TourCard key={item.id} item={item} />
          ))}
        </div>
      </Section>

      {/* Local-guide highlight */}
      <Section tone="forest" className="section-y">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="eyebrow-gold">Guided by locals</p>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
              Every guide has a{" "}
              <span className="italic text-gold">story worth hearing</span>.
            </h2>
            <p className="mt-4 max-w-lg leading-relaxed text-white/70">
              Our storytellers are born-and-raised Kigali locals — historians,
              chefs, and creatives who show you the Rwanda guidebooks miss.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: "4.8★", label: "Average tour rating" },
              { value: "18", label: "Certified local guides" },
              { value: "3", label: "Languages per tour" },
              { value: "100%", label: "Small-group experiences" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10"
              >
                <p className="font-display text-2xl font-bold text-gold">
                  {item.value}
                </p>
                <p className="mt-1 text-sm text-white/70">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </AppShell>
  );
}
