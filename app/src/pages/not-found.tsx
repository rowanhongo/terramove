import { Link } from "react-router-dom";
import { AppShell } from "@/components/app-shell";
import { Section } from "@/components/marketing/section";
import { Button } from "@/components/ui/button";

export default function NotFoundPage() {
  return (
    <AppShell>
      <Section tone="cream" className="flex min-h-[70svh] items-center pt-28">
        <div className="mx-auto max-w-lg text-center">
          <p className="font-display text-7xl font-bold text-brand">404</p>
          <h1 className="mt-4 font-display text-3xl font-bold text-ink sm:text-4xl">
            This trail leads <span className="italic text-brand">nowhere</span>.
          </h1>
          <p className="mt-4 text-ink/60">
            The page you're looking for has wandered off into the hills. Let's
            get you back on track.
          </p>
          <Button asChild variant="primary" size="lg" className="mt-8">
            <Link to="/">Back to home</Link>
          </Button>
        </div>
      </Section>
    </AppShell>
  );
}
