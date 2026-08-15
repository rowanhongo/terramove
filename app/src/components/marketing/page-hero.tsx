import { Img } from "@/components/marketing/img";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  accent?: string;
  description?: string;
  image?: string;
  /** Dark overlay hero (image bg) vs light cream hero. */
  variant?: "image" | "cream";
  children?: React.ReactNode;
}

/** Inner-page hero. Image variant = dark overlay; cream variant = light band. */
export function PageHero({
  eyebrow,
  title,
  accent,
  description,
  image,
  variant = "cream",
  children,
}: PageHeroProps) {
  const isImage = variant === "image";

  return (
    <section
      className={cn(
        "relative",
        isImage ? "text-white" : "bg-cream text-ink"
      )}
    >
      {isImage && image && (
        <div className="absolute inset-0 overflow-hidden">
          <Img src={image} alt="" loading="eager" className="h-full w-full" />
          <div className="absolute inset-0 scrim-b" />
        </div>
      )}

      <div
        className={cn(
          "container relative",
          isImage
            ? "flex flex-col items-center pb-16 pt-28 text-center md:pb-20 md:pt-40"
            : "pb-10 pt-28 md:pb-14 md:pt-36"
        )}
      >
        <p className={isImage ? "eyebrow-gold" : "eyebrow"}>{eyebrow}</p>
        <h1
          className={cn(
            "mt-3 font-display text-4xl font-bold leading-[1.02] tracking-tight sm:text-5xl md:text-6xl",
            isImage ? "max-w-3xl text-white" : "text-ink"
          )}
        >
          {title}
          {accent && (
            <>
              {" "}
              <span className="font-display text-brand">{accent}</span>
            </>
          )}
        </h1>
        {description && (
          <p
            className={cn(
              "mt-5 max-w-2xl text-base leading-relaxed md:text-lg",
              isImage ? "mx-auto text-white/80" : "text-ink/60"
            )}
          >
            {description}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
