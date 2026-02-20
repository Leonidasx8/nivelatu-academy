"use client";

import { cn } from "@/lib/utils";

interface RadioOption {
  value: string;
  label: string;
  description?: string;
}

interface AgentRadioGroupProps {
  options: RadioOption[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

export function AgentRadioGroup({ options, value, onChange, className }: AgentRadioGroupProps) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      {options.map((option) => {
        const isSelected = option.value === value;
        return (
          <button
            key={option.value}
            type="button"
            onClick={() => onChange(option.value)}
            className="flex items-start gap-3 px-3 py-2.5 rounded-md text-left transition-all duration-150"
            style={{
              backgroundColor: isSelected
                ? "var(--agent-color-20, rgba(255,107,0,0.20))"
                : "rgba(255,255,255,0.02)",
              border: `1px solid ${isSelected ? "var(--agent-color, #FF6B00)" : "rgba(255,255,255,0.08)"}`,
            }}
          >
            <div
              className="flex-shrink-0 rounded-full flex items-center justify-center mt-0.5"
              style={{
                width: "20px",
                height: "20px",
                border: `2px solid ${isSelected ? "var(--agent-color, #FF6B00)" : "rgba(255,255,255,0.20)"}`,
                backgroundColor: isSelected ? "var(--agent-color-20, rgba(255,107,0,0.20))" : "transparent",
              }}
            >
              {isSelected && (
                <div
                  className="rounded-full"
                  style={{
                    width: "10px",
                    height: "10px",
                    backgroundColor: "var(--agent-color, #FF6B00)",
                  }}
                />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <p className={cn("text-sm font-medium", isSelected ? "text-white" : "text-[#E5E5E5]")}>
                {option.label}
              </p>
              {option.description && (
                <p className="text-xs text-[#9CA3AF] mt-0.5">{option.description}</p>
              )}
            </div>
          </button>
        );
      })}
    </div>
  );
}
