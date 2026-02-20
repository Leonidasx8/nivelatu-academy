import { Video } from "lucide-react";
import { EpisodePlayer } from "./episode-player";
import { EpisodeList } from "./episode-list";
import { AudioControls } from "./audio-controls";
import type { Episode } from "@/types/sostac";

interface VideoPodcastPanelProps {
  episodes: Episode[];
}

export function VideoPodcastPanel({ episodes }: VideoPodcastPanelProps) {
  const activeEpisode = episodes.find((e) => e.status === "active") ?? episodes[0];

  return (
    <div
      className="flex flex-col flex-shrink-0"
      style={{
        width: "300px",
        backgroundColor: "#141418",
        borderLeft: "1px solid rgba(255,255,255,0.08)",
        height: "100%",
      }}
    >
      {/* Header */}
      <div
        className="flex items-center gap-2 px-3 py-3 flex-shrink-0"
        style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
      >
        <Video size={16} style={{ color: "var(--agent-color, #FF6B00)" }} />
        <span className="text-sm font-semibold text-white">Video del Agente</span>
      </div>

      {/* Player */}
      {activeEpisode && (
        <div className="flex-shrink-0">
          <EpisodePlayer episode={activeEpisode} />
        </div>
      )}

      {/* Audio controls */}
      <div
        className="flex-shrink-0"
        style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
      >
        <AudioControls
          duration={activeEpisode?.duration ?? "0:00"}
          currentTime="0:00"
        />
      </div>

      {/* Episode list */}
      <div
        className="flex-shrink-0 px-3 py-2"
        style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
      >
        <span className="text-xs text-[#9CA3AF] uppercase tracking-wider font-medium">
          Episodios
        </span>
      </div>
      <EpisodeList episodes={episodes} />
    </div>
  );
}
