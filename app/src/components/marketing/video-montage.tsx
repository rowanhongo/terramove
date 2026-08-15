import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface Clip {
  src: string;
  poster?: string;
}

interface VideoMontageProps {
  clips: Clip[];
  /** Seconds each clip stays on screen before crossfading to the next. */
  interval?: number;
  className?: string;
}

/**
 * Cycles through several background clips with a crossfade, so the hero
 * reads as one continuous highlight reel of different activities instead
 * of a single static scene. All clips stay mounted and looping — only
 * opacity changes — so the crossfade never shows a reload flash or a
 * black frame while the next clip buffers.
 */
export function VideoMontage({ clips, interval = 6, className }: VideoMontageProps) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % clips.length);
    }, interval * 1000);
    return () => window.clearInterval(id);
  }, [clips.length, interval]);

  return (
    <div className={cn("relative h-full w-full", className)}>
      {clips.map((clip, i) => (
        <video
          key={clip.src}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={clip.poster}
          className={cn(
            "absolute inset-0 h-full w-full animate-ken-burns object-cover transition-opacity duration-[1500ms] ease-in-out",
            i === active ? "opacity-100" : "opacity-0"
          )}
        >
          <source src={clip.src} type="video/mp4" />
        </video>
      ))}
    </div>
  );
}
