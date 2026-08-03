import { cn } from "@/lib/utils";

interface CarouselProps {
  children: React.ReactNode;
  className?: string;
  /** Width applied to each direct child on mobile so cards peek at the edge. */
  itemClassName?: string;
}

/**
 * Horizontal scroll-snap rail — no JS carousel library. Each child is a
 * flex item that snaps to the start; the last item gets end padding via the
 * container so it can scroll fully into view.
 */
export function Carousel({ children, className, itemClassName }: CarouselProps) {
  return (
    <div
      className={cn(
        "-mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-px-5 scrollbar-none px-5 pb-2",
        className
      )}
    >
      {Array.isArray(children)
        ? children.map((child, i) => (
            <div
              key={i}
              className={cn(
                "snap-start shrink-0",
                itemClassName ?? "w-[80%] sm:w-[46%] lg:w-[31%]"
              )}
            >
              {child}
            </div>
          ))
        : children}
    </div>
  );
}
