"use client";

import { cn } from "@/lib/utils";
import { SOSTAC_PHASES } from "@/lib/constants";
import type { SOSTACProgress } from "@/types/saas";
import { ProgressBar } from "../progress-bar";

interface BottomBarProps {
  progress: SOSTACProgress[];
  currentEpisode?: string;
  totalProgress?: number;
  className?: string;
}

export function BottomBar({ progress, currentEpisode, totalProgress, className }: BottomBarProps) {
  const overall =
    totalProgress ??
    (progress.length > 0
      ? Math.round(progress.reduce((acc, p) => acc + p.percentage, 0) / progress.length)
      : 0);

  return (
    <div
      className={cn("flex items-center gap-4 px-4 flex-shrink-0", className)}
      style={{
        height: "56px",
        backgroundColor: "#141418",
        borderTop: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div className="flex items-center gap-1.5 flex-shrink-0">
        {SOSTAC_PHASES.map((phase) => {
          const phaseProgress = progress.find((p) => p.phase === phase.letter);
          const status = phaseProgress?.status ?? "locked";
          const isCompleted = status === "completed";
          const isActive = status === "in_progress" || status === "available";
          const isLocked = status === "locked";

          return (
            <div
              key={phase.letter}
              className="flex items-center justify-center rounded-full text-[10px] font-bold transition-all duration-150"
              style={{
                width: "20px",
                height: "20px",
                backgroundColor: isCompleted || isActive ? `${phase.color}20` : "rgba(255,255,255,0.05)",
                color: isCompleted || isActive ? phase.color : "#6B7280",
                border: `1px solid ${isCompleted || isActive ? `${phase.color}40` : "rgba(255,255,255,0.10)"}`,
                opacity: isLocked ? 0.5 : 1,
              }}
              title={phase.name}
            >
              {phase.letter}
            </div>
          );
        })}
      </div>

      <div className="flex-1 min-w-0">
        <ProgressBar value={overall} showPercent />
      </div>

      {currentEpisode && (
        <div className="flex items-center gap-2 flex-shrink-0">
          <span className="text-base">🎧</span>
          <span className="text-xs text-[#9CA3AF] max-w-[120px] truncate">{currentEpisode}</span>
        </div>
      )}
    </div>
  );
}
