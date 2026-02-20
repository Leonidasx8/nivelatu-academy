import { AGENTS } from "@/lib/constants";
import type { AgentId } from "@/types";
import { cn } from "@/lib/utils";

interface AgentBadgeProps {
  agentId: AgentId;
  size?: "sm" | "md" | "lg";
  showStatus?: boolean;
}

const sizeClasses = {
  sm: { wrapper: "gap-1 text-xs", emoji: "text-sm", dot: "w-1.5 h-1.5" },
  md: { wrapper: "gap-1.5 text-sm", emoji: "text-base", dot: "w-2 h-2" },
  lg: { wrapper: "gap-2 text-base", emoji: "text-lg", dot: "w-2.5 h-2.5" },
};

export function AgentBadge({ agentId, size = "md", showStatus = false }: AgentBadgeProps) {
  const agent = AGENTS[agentId];
  const sizes = sizeClasses[size];

  return (
    <span className={cn("inline-flex items-center font-medium", sizes.wrapper)}>
      <span className={sizes.emoji}>{agent.emoji}</span>
      <span style={{ color: agent.color }}>{agent.name}</span>
      {showStatus && (
        <span
          className={cn("rounded-full flex-shrink-0", sizes.dot)}
          style={{ backgroundColor: agent.color }}
        />
      )}
    </span>
  );
}
