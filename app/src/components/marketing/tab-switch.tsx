import { cn } from "@/lib/utils";

interface TabSwitchProps<T extends string> {
  tabs: { id: T; label: string }[];
  value: T;
  onChange: (id: T) => void;
  className?: string;
}

/** Small segmented pill toggle — used to switch a section's content in place. */
export function TabSwitch<T extends string>({
  tabs,
  value,
  onChange,
  className,
}: TabSwitchProps<T>) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-1 rounded-full bg-ink/5 p-1",
        className
      )}
    >
      {tabs.map((tab) => (
        <button
          key={tab.id}
          type="button"
          onClick={() => onChange(tab.id)}
          className={cn(
            "rounded-full px-4 py-2 text-sm font-semibold transition-colors",
            value === tab.id
              ? "bg-white text-brand shadow-card"
              : "text-ink/55 hover:text-ink"
          )}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
