import { useState } from "react";
import {
  Car,
  Check,
  MapPin,
  Minus,
  Plane,
  Plus,
  Truck,
} from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { PageHero } from "@/components/marketing/page-hero";
import { Section } from "@/components/marketing/section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { VEHICLES } from "@/lib/content";
import { cn } from "@/lib/utils";

const VEHICLE_ICONS = [Car, Truck, Truck];

export default function AirportPage() {
  const [selected, setSelected] = useState("suv");
  const [passengers, setPassengers] = useState(2);

  return (
    <AppShell>
      <PageHero
        eyebrow="Arrive with ease"
        title="Airport"
        accent="Pickup"
        description="Professional drivers, real-time tracking, flat-rate pricing — no surprises."
      />

      <Section tone="cream" padded={false} className="pb-16 md:pb-24">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          {/* Flight details form */}
          <div className="rounded-2xl bg-white p-6 shadow-card md:p-8">
            <h2 className="font-display text-xl font-bold text-ink">
              Flight Details
            </h2>

            <div className="mt-6 space-y-5">
              <Field label="Flight number">
                <Input placeholder="e.g. RW 101 or KQ 521" />
              </Field>

              <div className="grid grid-cols-2 gap-4">
                <Field label="Arrival date">
                  <Input type="date" />
                </Field>
                <Field label="Arrival time">
                  <Input type="time" />
                </Field>
              </div>

              <Field label="Passengers">
                <div className="flex h-12 items-center justify-between rounded-xl border border-input bg-white px-2">
                  <button
                    type="button"
                    aria-label="Fewer passengers"
                    onClick={() => setPassengers((n) => Math.max(1, n - 1))}
                    className="flex h-9 w-9 items-center justify-center rounded-lg text-ink/70 transition-colors hover:bg-ink/5"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="text-sm font-semibold text-ink">
                    {passengers} passenger{passengers > 1 ? "s" : ""}
                  </span>
                  <button
                    type="button"
                    aria-label="More passengers"
                    onClick={() => setPassengers((n) => Math.min(8, n + 1))}
                    className="flex h-9 w-9 items-center justify-center rounded-lg text-ink/70 transition-colors hover:bg-ink/5"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </Field>

              <Field label="Drop-off address">
                <div className="relative">
                  <MapPin className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-brand" />
                  <Input placeholder="Hotel or address in Kigali" className="pl-11" />
                </div>
              </Field>

              <Button variant="primary" size="lg" className="w-full">
                <Plane className="h-4 w-4" />
                Confirm pickup
              </Button>
            </div>
          </div>

          {/* Vehicle picker */}
          <div>
            <h2 className="font-display text-xl font-bold text-ink">
              Choose Your Vehicle
            </h2>
            <div className="mt-6 space-y-4">
              {VEHICLES.map((vehicle, i) => {
                const Icon = VEHICLE_ICONS[i] ?? Car;
                const active = selected === vehicle.id;
                return (
                  <button
                    key={vehicle.id}
                    type="button"
                    onClick={() => setSelected(vehicle.id)}
                    className={cn(
                      "flex w-full items-start gap-4 rounded-2xl border-2 bg-white p-5 text-left transition-all",
                      active
                        ? "border-brand shadow-card-hover"
                        : "border-transparent shadow-card hover:border-brand/30"
                    )}
                  >
                    <span
                      className={cn(
                        "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl",
                        active ? "bg-brand text-white" : "bg-brand-soft text-brand"
                      )}
                    >
                      <Icon className="h-5 w-5" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="font-semibold text-ink">{vehicle.name}</p>
                          <p className="text-sm text-ink/55">{vehicle.model}</p>
                        </div>
                        <div className="shrink-0 text-right">
                          <p className="font-display text-lg font-bold text-brand">
                            ${vehicle.price}
                          </p>
                          <p className="text-[11px] text-ink/45">flat rate</p>
                        </div>
                      </div>
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {vehicle.features.map((f) => (
                          <Badge
                            key={f}
                            variant="light"
                            className="border border-ink/10 !bg-cream text-ink/60"
                          >
                            {f}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    {active && (
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand text-white">
                        <Check className="h-3.5 w-3.5" />
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </Section>
    </AppShell>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-ink/50">
        {label}
      </label>
      {children}
    </div>
  );
}
