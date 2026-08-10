import { Link } from "react-router-dom";
import { ArrowLeft, Check } from "lucide-react";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Img } from "@/components/marketing/img";

const AUTH_IMG =
  "https://images.unsplash.com/photo-1547970810-dc1eac37d174?auto=format&fit=crop&w=1200&h=1600&q=80";

const PERKS = [
  "Free cancellation up to 48h",
  "Gorilla permits handled for you",
  "24/7 multilingual local support",
];

interface AuthPageProps {
  mode: "signin" | "signup";
}

/** Shared split-screen auth layout. Reuses brand tokens + shadcn primitives. */
export function AuthPage({ mode }: AuthPageProps) {
  const isSignup = mode === "signup";

  return (
    <div className="flex min-h-svh flex-col bg-cream lg:flex-row">
      {/* Visual side (desktop only) */}
      <aside className="relative hidden w-1/2 overflow-hidden lg:block">
        <Img src={AUTH_IMG} alt="" loading="eager" className="h-full w-full" />
        <div className="absolute inset-0 bg-gradient-to-b from-forest/60 via-forest/40 to-forest/85" />
        <div className="absolute inset-0 flex flex-col justify-between p-10 text-white">
          <Link to="/">
            <Logo tone="light" />
          </Link>
          <div>
            <h2 className="max-w-sm font-display text-4xl font-bold leading-tight">
              The Land of a{" "}
              <span className="text-gold">Thousand Hills</span> awaits.
            </h2>
            <ul className="mt-6 space-y-2.5">
              {PERKS.map((perk) => (
                <li key={perk} className="flex items-center gap-2.5 text-white/85">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand text-white">
                    <Check className="h-3 w-3" />
                  </span>
                  {perk}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </aside>

      {/* Form side */}
      <main className="flex flex-1 flex-col px-6 py-8 sm:px-10">
        <div className="flex items-center justify-between">
          <Link to="/" className="lg:hidden">
            <Logo />
          </Link>
          <Link
            to="/"
            className="ml-auto inline-flex items-center gap-1.5 text-sm font-medium text-ink/60 transition-colors hover:text-brand"
          >
            <ArrowLeft className="h-4 w-4" />
            Back home
          </Link>
        </div>

        <div className="mx-auto flex w-full max-w-md flex-1 flex-col justify-center py-10">
          <p className="eyebrow">{isSignup ? "Get Started" : "Welcome Back"}</p>
          <h1 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            {isSignup ? (
              <>
                Start your <span className="text-brand">Rwanda story</span>
              </>
            ) : (
              <>
                Sign in to <span className="text-brand">TerraMove</span>
              </>
            )}
          </h1>
          <p className="mt-3 text-sm text-ink/55">
            {isSignup
              ? "Create a free account to save trips, book faster, and unlock bundle deals."
              : "Pick up where you left off — your saved trips are waiting."}
          </p>

          <form className="mt-8 space-y-4" onSubmit={(e) => e.preventDefault()}>
            {isSignup && (
              <Field label="Full name">
                <Input placeholder="Your name" autoComplete="name" />
              </Field>
            )}
            <Field label="Email">
              <Input type="email" placeholder="you@example.com" autoComplete="email" />
            </Field>
            <Field label="Password">
              <Input
                type="password"
                placeholder="••••••••"
                autoComplete={isSignup ? "new-password" : "current-password"}
              />
            </Field>

            {!isSignup && (
              <div className="flex justify-end">
                <button
                  type="button"
                  className="text-sm font-medium text-brand hover:text-brand-dark"
                >
                  Forgot password?
                </button>
              </div>
            )}

            <Button type="submit" variant="primary" size="lg" className="w-full">
              {isSignup ? "Create free account" : "Sign in"}
            </Button>
          </form>

          <div className="my-6 flex items-center gap-4">
            <span className="h-px flex-1 bg-ink/10" />
            <span className="text-xs uppercase tracking-wide text-ink/40">or</span>
            <span className="h-px flex-1 bg-ink/10" />
          </div>

          <Button variant="outline" size="lg" className="w-full">
            Continue with Google
          </Button>

          <p className="mt-8 text-center text-sm text-ink/55">
            {isSignup ? (
              <>
                Already have an account?{" "}
                <Link to="/signin" className="font-semibold text-brand hover:text-brand-dark">
                  Sign in
                </Link>
              </>
            ) : (
              <>
                New to TerraMove?{" "}
                <Link
                  to="/get-started"
                  className="font-semibold text-brand hover:text-brand-dark"
                >
                  Create an account
                </Link>
              </>
            )}
          </p>
        </div>
      </main>
    </div>
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
