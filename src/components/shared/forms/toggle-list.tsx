"use client";

import { cn } from "@/lib/utils";

interface ToggleItem {
  id: string;
  label: string;
  description?: string;
}

interface ToggleListProps {
  items: ToggleItem[];
  values: Record<string, boolean>;
  onChange: (id: string, value: boolean) => void;
  className?: string;
}

export function ToggleList({ items, values, onChange, className }: ToggleListProps) {
  const onCount = items.filter((item) => values[item.id]).length;

  return (
    <div className={cn("flex flex-col gap-1", className)}>
      {items.map((item) => {
        const isOn = values[item.id] ?? false;
        return (
          <div
            key={item.id}
            className="flex items-center justify-between gap-3 px-3 py-2.5 rounded-md transition-all duration-150"
            style={{
              backgroundColor: isOn
                ? "var(--agent-color-10, rgba(255,107,0,0.10))"
                : "rgba(255,255,255,0.02)",
              border: `1px solid ${isOn ? "var(--agent-color-20, rgba(255,107,0,0.20))" : "rgba(255,255,255,0.08)"}`,
            }}
          >
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-white">{item.label}</p>
              {item.description && (
                <p className="text-xs text-[#9CA3AF] mt-0.5">{item.description}</p>
              )}
            </div>
            <button
              type="button"
              role="switch"
              aria-checked={isOn}
              onClick={() => onChange(item.id, !isOn)}
              className="relative flex-shrink-0 rounded-full transition-all duration-200 focus:outline-none focus-visible:ring-2"
              style={{
                width: "36px",
                height: "20px",
                backgroundColor: isOn ? "var(--agent-color, #FF6B00)" : "#2A2A30",
              }}
            >
              <span
                className="absolute top-0.5 rounded-full bg-white shadow-sm transition-all duration-200"
                style={{
                  width: "16px",
                  height: "16px",
                  left: isOn ? "18px" : "2px",
                }}
              />
            </button>
          </div>
        );
      })}
      <div
        className="flex items-center justify-between px-3 py-2 rounded-md mt-1"
        style={{ backgroundColor: "rgba(255,255,255,0.03)" }}
      >
        <span className="text-xs text-[#9CA3AF]">Seleccionados</span>
        <span className="text-xs font-semibold" style={{ color: "var(--agent-color, #FF6B00)" }}>
          {onCount} / {items.length}
        </span>
      </div>
    </div>
  );
}
