import * as React from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface SheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  side?: "right" | "left";
  children: React.ReactNode;
  className?: string;
  /** Accessible label for the dialog, announced to screen readers. */
  label?: string;
}

/**
 * Lightweight slide-in sheet used for the mobile navigation drawer.
 * Portals to <body>, locks background scroll, closes on Escape / overlay click.
 */
export function Sheet({
  open,
  onOpenChange,
  side = "right",
  children,
  className,
  label = "Menu",
}: SheetProps) {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  React.useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onOpenChange(false);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onOpenChange]);

  if (!mounted || !open) return null;

  return createPortal(
    <div className="fixed inset-0 z-[100]" role="dialog" aria-modal="true" aria-label={label}>
      <div
        className="absolute inset-0 animate-fade-in bg-forest/60 backdrop-blur-sm"
        onClick={() => onOpenChange(false)}
      />
      <div
        className={cn(
          "absolute inset-y-0 flex w-[86%] max-w-sm animate-sheet-in flex-col bg-cream shadow-glass",
          side === "right" ? "right-0" : "left-0",
          className
        )}
      >
        <button
          type="button"
          aria-label="Close menu"
          onClick={() => onOpenChange(false)}
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full text-ink/70 transition-colors hover:bg-ink/5 hover:text-ink"
        >
          <X className="h-5 w-5" />
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
}
