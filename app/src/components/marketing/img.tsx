import { cn } from "@/lib/utils";

type ImgProps = React.ImgHTMLAttributes<HTMLImageElement>;

/** Image with a warm placeholder tint + lazy loading, used across cards/heroes. */
export function Img({ className, alt = "", loading = "lazy", ...props }: ImgProps) {
  return (
    <img
      alt={alt}
      loading={loading}
      className={cn("bg-ink/5 object-cover", className)}
      {...props}
    />
  );
}
