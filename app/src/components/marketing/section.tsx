import { cn } from "@/lib/utils";

type Tone = "cream" | "forest" | "white";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  tone?: Tone;
  /** Adds the standard vertical rhythm padding. */
  padded?: boolean;
  containerClassName?: string;
  children: React.ReactNode;
}

const toneClasses: Record<Tone, string> = {
  cream: "bg-cream text-ink",
  forest: "bg-forest text-white",
  white: "bg-white text-ink",
};

/** Full-bleed background band with a centered max-width container inside. */
export function Section({
  tone = "cream",
  padded = true,
  className,
  containerClassName,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(toneClasses[tone], padded && "section-y", className)}
      {...props}
    >
      <div className={cn("container", containerClassName)}>{children}</div>
    </section>
  );
}
