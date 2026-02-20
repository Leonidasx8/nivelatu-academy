import { cn } from "@/lib/utils";
import type { Episode } from "@/types/sostac";

interface EpisodeCardProps {
  episode: Episode;
  agentColor?: boolean;
  className?: string;
}

export function EpisodeCard({ episode, agentColor = false, className }: EpisodeCardProps) {
  const isCompleted = episode.status === "completed";
  const isActive = episode.status === "active";
  const isLocked = episode.status === "locked";

  return (
    <div
      className={cn(
        "flex items-center gap-3 px-3 rounded-lg transition-all duration-150",
        isCompleted && "opacity-75",
        isActive && "glass-card",
        isLocked && "opacity-50",
        className
      )}
      style={{
        height: "52px",
        ...(isActive && agentColor
          ? {
              borderColor: "var(--agent-color, #FF6B00)",
              boxShadow: "0 0 0 1px var(--agent-color, #FF6B00), 0 0 12px var(--agent-color-10, rgba(255,107,0,0.10))",
            }
          : {}),
      }}
    >
      <span className="text-base flex-shrink-0">
        {isCompleted ? "✅" : isLocked ? "🔒" : "▶️"}
      </span>
      <div className="flex-1 min-w-0">
        <p
          className={cn(
            "text-sm truncate",
            isCompleted && "text-[#6B7280]",
            isActive && "font-semibold text-white",
            isLocked && "text-[#6B7280]"
          )}
        >
          {episode.title}
        </p>
        <p className="text-xs text-[#6B7280]">{episode.duration}</p>
      </div>
    </div>
  );
}
