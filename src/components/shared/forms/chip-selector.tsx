"use client";

import { cn } from "@/lib/utils";

interface ChipOption {
  value: string;
  label: string;
}

interface ChipSelectorProps {
  options: ChipOption[];
  selected: string[];
  onChange: (selected: string[]) => void;
  max?: number;
  className?: string;
}

export function ChipSelector({ options, selected, onChange, max, className }: ChipSelectorProps) {
  const toggle = (value: string) => {
    if (selected.includes(value)) {
      onChange(selected.filter((v) => v !== value));
    } else {
      if (max && selected.length >= max) return;
      onChange([...selected, value]);
    }
  };

  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {options.map((option) => {
        const isSelected = selected.includes(option.value);
        const isDisabled = !isSelected && max !== undefined && selected.length >= max;
        return (
          <button
            key={option.value}
            type="button"
            onClick={() => toggle(option.value)}
            disabled={isDisabled}
            className={cn(
              "px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-150 focus:outline-none",
              isDisabled && "opacity-40 cursor-not-allowed"
            )}
            style={{
              backgroundColor: isSelected
                ? "var(--agent-color-15, rgba(255,107,0,0.15))"
                : "rgba(255,255,255,0.04)",
              border: `1px solid ${isSelected ? "var(--agent-color-40, rgba(255,107,0,0.40))" : "rgba(255,255,255,0.10)"}`,
              color: isSelected ? "var(--agent-color, #FF6B00)" : "#9CA3AF",
            }}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
