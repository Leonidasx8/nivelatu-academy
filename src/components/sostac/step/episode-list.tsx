import { EpisodeCard } from "@/components/shared/episode-card";
import type { Episode } from "@/types/sostac";

interface EpisodeListProps {
  episodes: Episode[];
}

export function EpisodeList({ episodes }: EpisodeListProps) {
  return (
    <div
      className="flex-1 overflow-y-auto flex flex-col gap-1 px-2 py-2"
      style={{ minHeight: 0 }}
    >
      {episodes.map((episode) => (
        <EpisodeCard key={episode.id} episode={episode} agentColor />
      ))}
    </div>
  );
}
