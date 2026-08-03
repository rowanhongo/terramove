import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1 rounded-full font-semibold leading-none",
  {
    variants: {
      variant: {
        dark: "bg-forest/85 text-white backdrop-blur-sm",
        brand: "bg-brand text-white",
        gold: "bg-gold text-forest",
        light: "bg-white/90 text-ink backdrop-blur-sm",
        easy: "bg-emerald-500 text-white",
        moderate: "bg-amber-100 text-amber-800",
        outline: "border border-white/70 text-white",
      },
      size: {
        sm: "px-2.5 py-1 text-[11px]",
        md: "px-3 py-1.5 text-xs",
      },
    },
    defaultVariants: {
      variant: "dark",
      size: "sm",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, size, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant, size }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
