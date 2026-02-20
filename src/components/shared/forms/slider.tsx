"use client";

import { cn } from "@/lib/utils";

interface CustomSliderProps {
  positions: string[];
  value: number;
  onChange: (value: number) => void;
  className?: string;
}

export function CustomSlider({ positions, value, onChange, className }: CustomSliderProps) {
  const total = positions.length - 1;
  const percent = total > 0 ? (value / total) * 100 : 0;

  return (
    <div className={cn("flex flex-col gap-3", className)}>
      <div className="flex justify-between">
        {positions.map((label, i) => (
          <span
            key={i}
            className={cn(
              "text-xs font-medium transition-all duration-150",
              i === value ? "text-white" : "text-[#6B7280]"
            )}
            style={i === value ? { color: "var(--agent-color, #FF6B00)" } : undefined}
          >
            {label}
          </span>
        ))}
      </div>
      <div className="relative" style={{ height: "24px", display: "flex", alignItems: "center" }}>
        <div
          className="relative w-full rounded-full"
          style={{ height: "6px", backgroundColor: "#1A1A20" }}
        >
          <div
            className="absolute left-0 top-0 h-full rounded-full transition-all duration-200"
            style={{
              width: `${percent}%`,
              backgroundColor: "var(--agent-color, #FF6B00)",
            }}
          />
          {positions.map((_, i) => {
            const stopPercent = total > 0 ? (i / total) * 100 : 0;
            return (
              <button
                key={i}
                type="button"
                onClick={() => onChange(i)}
                className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-3 h-3 rounded-full transition-all duration-150"
                style={{
                  left: `${stopPercent}%`,
                  backgroundColor: i <= value ? "var(--agent-color, #FF6B00)" : "#2A2A30",
                  border: i === value ? "2px solid white" : "2px solid transparent",
                  boxShadow:
                    i === value
                      ? "0 0 0 3px var(--agent-color-20, rgba(255,107,0,0.20)), 0 0 8px var(--agent-color-30, rgba(255,107,0,0.30))"
                      : "none",
                }}
              />
            );
          })}
        </div>
        <input
          type="range"
          min={0}
          max={total}
          step={1}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="absolute inset-0 w-full opacity-0 cursor-pointer"
          aria-label="Slider"
        />
      </div>
    </div>
  );
}
