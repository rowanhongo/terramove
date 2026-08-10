import { cn } from "@/lib/utils";

interface VideoBgProps {
  src: string;
  poster: string;
  className?: string;
}

/**
 * Full-bleed looping background video — muted/autoplay/inline so it plays
 * without a user gesture, with a slow Ken Burns drift for a cinematic feel.
 * Shows `poster` while the video loads (and as the fallback if it can't
 * play at all, e.g. data-saver mode).
 */
export function VideoBg({ src, poster, className }: VideoBgProps) {
  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      poster={poster}
      className={cn(
        "h-full w-full animate-ken-burns object-cover",
        className
      )}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
