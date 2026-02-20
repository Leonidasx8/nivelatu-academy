import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MapPhaseGroupProps {
  phaseLetter: string;
  phaseColor: string;
  children: ReactNode;
  horizontal?: boolean;
  className?: string;
}

export function MapPhaseGroup({
  phaseLetter,
  phaseColor,
  children,
  horizontal = false,
  className,
}: MapPhaseGroupProps) {
  return (
    <div
      className={cn("relative rounded-2xl p-4", className)}
      style={{
        border: `1px solid ${phaseColor}30`,
        backgroundColor: `${phaseColor}05`,
      }}
    >
      {/* Phase label */}
      <div
        className="absolute -top-3 left-4 flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-bold"
        style={{
          backgroundColor: `${phaseColor}20`,
          color: phaseColor,
          border: `1px solid ${phaseColor}40`,
        }}
      >
        <span>{phaseLetter}</span>
        <span>Fase</span>
      </div>

      <div
        className={cn(
          "flex gap-4",
          horizontal ? "flex-row flex-wrap justify-center" : "flex-col items-center"
        )}
      >
        {children}
      </div>
    </div>
  );
}
