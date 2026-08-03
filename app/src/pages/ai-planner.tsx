import { Send, Sparkles } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { Section } from "@/components/marketing/section";
import { ChatWidget } from "@/components/marketing/chat-widget";
import { Button } from "@/components/ui/button";

const SUGGESTIONS = [
  "5 days, wildlife & culture",
  "Budget under $2k for 2",
  "7-day luxury honeymoon",
  "Family trip with kids",
  "Solo adventure 10 days",
];

const INTRO = [
  {
    from: "assistant" as const,
    text: "Mwaramutse! I'm TerraAI, your personal Rwanda travel assistant. Tell me your dream trip — how many days, your budget, what excites you most. I'll build a complete day-by-day itinerary.",
  },
];

export default function AiPlannerPage() {
  return (
    <AppShell>
      <Section tone="cream" padded={false} className="pb-16 pt-28 md:pb-24 md:pt-36">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Powered by AI</p>
          <h1 className="mt-3 font-display text-4xl font-bold leading-tight tracking-tight text-ink sm:text-5xl">
            Your Rwanda Trip,{" "}
            <span className="italic text-brand">Planned in Seconds</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-ink/60 md:text-lg">
            Chat with TerraAI and watch a full day-by-day itinerary take shape —
            adventures, stays, and transfers, ready to book.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_1fr] lg:gap-8">
          {/* Itinerary preview panel */}
          <div className="order-2 flex min-h-[420px] flex-col items-center justify-center rounded-3xl bg-white p-8 text-center shadow-card lg:order-1">
            <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-soft text-brand">
              <Sparkles className="h-8 w-8" />
            </span>
            <h2 className="mt-6 font-display text-2xl font-bold text-ink">
              Your itinerary will appear here
            </h2>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink/55">
              Start the conversation on the right to generate a personalised
              day-by-day Rwanda plan.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  type="button"
                  className="rounded-full border border-ink/10 bg-cream px-4 py-2 text-sm font-medium text-ink/70 transition-colors hover:border-brand hover:text-brand"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Chat panel */}
          <div className="order-1 flex flex-col lg:order-2">
            <ChatWidget
              title="TerraAI Travel Planner"
              subtitle="Online · 5 languages · Plans in seconds"
              messages={INTRO}
              className="flex-1"
            />
            {/* Composer (visual only) */}
            <div className="mt-3 flex items-center gap-2 rounded-2xl bg-white p-2 shadow-card">
              <input
                type="text"
                placeholder="Describe your dream Rwanda trip…"
                className="w-full bg-transparent px-3 text-sm text-ink outline-none placeholder:text-ink/40"
              />
              <Button variant="primary" size="icon" aria-label="Send message">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </AppShell>
  );
}
