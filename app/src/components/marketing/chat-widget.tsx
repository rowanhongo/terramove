import { Bot } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ChatMessage {
  from: "assistant" | "user";
  text: string;
}

interface ChatWidgetProps {
  title?: string;
  subtitle?: string;
  messages: ChatMessage[];
  /** Show the animated "typing…" bubble at the end of the thread. */
  typing?: boolean;
  className?: string;
}

/**
 * Signature dark chat panel with an AI avatar + live status dot and
 * alternating bubbles — assistant in the deep forest tone, user in brand
 * orange. Static thread (UI-only), optional typing indicator.
 */
export function ChatWidget({
  title = "TerraAI",
  subtitle,
  messages,
  typing = false,
  className,
}: ChatWidgetProps) {
  return (
    <div
      className={cn(
        "flex flex-col overflow-hidden rounded-3xl bg-forest shadow-glass ring-1 ring-white/10",
        className
      )}
    >
      {/* Header */}
      <div className="flex items-center gap-3 border-b border-white/10 px-5 py-4">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-gold to-brand text-forest">
          <Bot className="h-5 w-5" />
        </span>
        <div className="min-w-0">
          <p className="flex items-center gap-2 text-sm font-semibold text-white">
            {title}
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-pulse-dot rounded-full bg-emerald-400" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
          </p>
          {subtitle && (
            <p className="truncate text-xs text-white/50">{subtitle}</p>
          )}
        </div>
      </div>

      {/* Thread */}
      <div className="flex flex-1 flex-col gap-3 p-5">
        {messages.map((msg, i) => (
          <Bubble key={i} from={msg.from}>
            {msg.text}
          </Bubble>
        ))}
        {typing && (
          <div className="max-w-[85%] self-start rounded-2xl rounded-tl-sm bg-white/10 px-4 py-3">
            <span className="flex items-center gap-1.5">
              <Dot delay="0ms" />
              <Dot delay="180ms" />
              <Dot delay="360ms" />
              <span className="ml-1 text-xs text-white/60">
                Building your itinerary…
              </span>
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

function Bubble({
  from,
  children,
}: {
  from: "assistant" | "user";
  children: React.ReactNode;
}) {
  const isUser = from === "user";
  return (
    <div
      className={cn(
        "max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed",
        isUser
          ? "self-end rounded-tr-sm bg-brand text-white"
          : "self-start rounded-tl-sm bg-white/10 text-white/90"
      )}
    >
      {children}
    </div>
  );
}

function Dot({ delay }: { delay: string }) {
  return (
    <span
      className="h-2 w-2 animate-pulse-dot rounded-full bg-white/70"
      style={{ animationDelay: delay }}
    />
  );
}
