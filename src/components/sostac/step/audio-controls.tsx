"use client";

import { useState } from "react";
import { Play, Pause, SkipForward } from "lucide-react";

interface AudioControlsProps {
  duration?: string;
  currentTime?: string;
}

export function AudioControls({
  duration = "15:30",
  currentTime = "2:45",
}: AudioControlsProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  // Parse time strings to seconds for progress calculation
  const parseTime = (t: string) => {
    const parts = t.split(":").map(Number);
    return (parts[0] ?? 0) * 60 + (parts[1] ?? 0);
  };

  const currentSecs = parseTime(currentTime);
  const totalSecs = parseTime(duration);
  const progressPct = totalSecs > 0 ? (currentSecs / totalSecs) * 100 : 0;

  return (
    <div
      className="flex items-center gap-3 px-3"
      style={{ height: "44px" }}
    >
      {/* Play/Pause */}
      <button
        type="button"
        onClick={() => setIsPlaying((p) => !p)}
        className="flex-shrink-0 flex items-center justify-center rounded-full transition-all duration-150"
        style={{
          width: "32px",
          height: "32px",
          backgroundColor: "var(--agent-color, #FF6B00)",
        }}
      >
        {isPlaying ? (
          <Pause size={14} className="text-white" />
        ) : (
          <Play size={14} className="text-white ml-0.5" />
        )}
      </button>

      {/* Progress track */}
      <div className="flex-1 flex flex-col gap-0.5">
        <div
          className="relative w-full rounded-full overflow-hidden cursor-pointer"
          style={{ height: "4px", backgroundColor: "#1A1A20" }}
        >
          <div
            className="h-full rounded-full transition-all duration-200"
            style={{
              width: `${progressPct}%`,
              backgroundColor: "var(--agent-color, #FF6B00)",
            }}
          />
        </div>
        <div className="flex justify-between">
          <span className="text-[10px] text-[#6B7280]">{currentTime}</span>
          <span className="text-[10px] text-[#6B7280]">{duration}</span>
        </div>
      </div>

      {/* Skip forward */}
      <button
        type="button"
        className="flex-shrink-0 flex items-center justify-center rounded-full transition-all duration-150"
        style={{
          width: "28px",
          height: "28px",
          backgroundColor: "rgba(255,255,255,0.06)",
          border: "1px solid rgba(255,255,255,0.10)",
        }}
      >
        <SkipForward size={13} className="text-[#9CA3AF]" />
      </button>
    </div>
  );
}
