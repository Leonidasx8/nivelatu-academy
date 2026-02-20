import { Play } from "lucide-react";
import type { Episode } from "@/types/sostac";

interface EpisodePlayerProps {
  episode: Episode;
}

export function EpisodePlayer({ episode }: EpisodePlayerProps) {
  return (
    <div className="flex flex-col gap-3 p-3">
      {/* Video thumbnail area */}
      <div
        className="relative flex items-center justify-center rounded-lg overflow-hidden cursor-pointer"
        style={{
          width: "268px",
          height: "168px",
          backgroundColor: "#1A1A20",
          border: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        {/* Play button */}
        <div
          className="flex items-center justify-center rounded-full transition-all duration-200 hover:scale-110"
          style={{
            width: "52px",
            height: "52px",
            backgroundColor: "var(--agent-color, #FF6B00)",
            boxShadow: "0 4px 20px var(--agent-color-30, rgba(255,107,0,0.30))",
          }}
        >
          <Play size={22} className="text-white ml-1" />
        </div>
      </div>

      {/* Episode info */}
      <div className="flex flex-col gap-1 px-1">
        <p className="text-sm font-semibold text-white leading-tight line-clamp-2">
          {episode.title}
        </p>
        <p className="text-xs text-[#9CA3AF] leading-relaxed line-clamp-2">
          {episode.description}
        </p>
      </div>
    </div>
  );
}
