import { Link } from "react-router-dom";
import { Compass, Heart, Leaf, Users } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { PageHero } from "@/components/marketing/page-hero";
import { Section } from "@/components/marketing/section";
import { StatRow } from "@/components/marketing/stat-row";
import { Button } from "@/components/ui/button";
import { STATS } from "@/lib/content";

const HERO_IMG =
  "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1920&h=1080&q=80";

const VALUES = [
  {
    Icon: Users,
    title: "Local at heart",
    body: "Every guide, host, and driver is Rwandan — sharing their home, not performing it.",
  },
  {
    Icon: Leaf,
    title: "Tread lightly",
    body: "We cap group sizes and reinvest in conservation so the hills stay unspoiled.",
  },
  {
    Icon: Compass,
    title: "Beyond the checkbox",
    body: "There's more to Rwanda than a single trek. We show you all of it.",
  },
  {
    Icon: Heart,
    title: "Radically honest",
    body: "Flat pricing, no hidden fees, and free cancellation. The price you see is what you pay.",
  },
];

export default function AboutPage() {
  return (
    <AppShell overHero>
      <PageHero
        variant="image"
        image={HERO_IMG}
        eyebrow="Our Story"
        title="Rwanda Deserves"
        accent="Better Storytelling"
        description="TerraMove was founded in 2021 by Rwandans who were tired of watching their country undersold to the world. We knew there was infinitely more to Rwanda than a single checkbox experience — and we set out to prove it."
      />

      {/* Mission */}
      <Section tone="cream" className="section-y">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="eyebrow">The mission</p>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-ink sm:text-4xl">
              We help the world meet the{" "}
              <span className="text-brand">real Rwanda</span>.
            </h2>
            <p className="mt-5 leading-relaxed text-ink/65">
              From the misty volcanoes of the north to the shimmering shores of
              Lake Kivu, from Kigali's clean, buzzing streets to the ancient
              canopy of Nyungwe — we curate experiences that go far beyond the
              guidebook, powered by the people who know these hills best.
            </p>
            <p className="mt-4 leading-relaxed text-ink/65">
              Every booking supports local guides, hosts, and conservation
              efforts — so travel here gives back as much as it gives you.
            </p>
            <Button asChild variant="primary" size="lg" className="mt-8">
              <Link to="/adventures">Explore our experiences</Link>
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {VALUES.map(({ Icon, title, body }) => (
              <div
                key={title}
                className="rounded-2xl bg-white p-6 shadow-card"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft text-brand">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-lg font-bold text-ink">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/55">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Numbers on forest band */}
      <Section tone="forest" className="section-y">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow-gold">Since 2021</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
            A journey worth <span className="text-gold">sharing</span>.
          </h2>
        </div>
        <div className="mt-10">
          <StatRow stats={STATS} />
        </div>
      </Section>
    </AppShell>
  );
}
