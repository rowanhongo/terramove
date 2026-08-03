import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { PageHero } from "@/components/marketing/page-hero";
import { Section } from "@/components/marketing/section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const DETAILS = [
  { Icon: MapPin, label: "Visit us", value: "KG 7 Ave, Kigali, Rwanda" },
  { Icon: Mail, label: "Email", value: "hello@terramove.rw" },
  { Icon: Phone, label: "Call", value: "+250 788 000 000" },
  { Icon: Clock, label: "Hours", value: "Mon–Sun · 24/7 support" },
];

export default function ContactPage() {
  return (
    <AppShell>
      <PageHero
        eyebrow="Say Muraho"
        title="Let's Plan"
        accent="Together"
        description="Questions about a trip, a booking, or a bespoke itinerary? Our Kigali team replies within a few hours — in five languages."
      />

      <Section tone="cream" padded={false} className="pb-16 md:pb-24">
        <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr] lg:gap-8">
          {/* Info column */}
          <div className="flex flex-col gap-4">
            {DETAILS.map(({ Icon, label, value }) => (
              <div
                key={label}
                className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-card"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-brand">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-ink/45">
                    {label}
                  </p>
                  <p className="font-medium text-ink">{value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="rounded-2xl bg-white p-6 shadow-card md:p-8">
            <h2 className="font-display text-xl font-bold text-ink">
              Send us a message
            </h2>
            <div className="mt-6 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Full name">
                  <Input placeholder="Your name" />
                </Field>
                <Field label="Email">
                  <Input type="email" placeholder="you@example.com" />
                </Field>
              </div>
              <Field label="Subject">
                <Input placeholder="What's this about?" />
              </Field>
              <Field label="Message">
                <textarea
                  rows={5}
                  placeholder="Tell us about your dream trip…"
                  className="flex w-full resize-none rounded-xl border border-input bg-white px-4 py-3 text-sm text-ink shadow-sm outline-none transition-colors placeholder:text-ink/40 focus-visible:border-brand focus-visible:ring-2 focus-visible:ring-brand/25"
                />
              </Field>
              <Button variant="primary" size="lg" className="w-full">
                <Send className="h-4 w-4" />
                Send message
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </AppShell>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-ink/50">
        {label}
      </label>
      {children}
    </div>
  );
}
