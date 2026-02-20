import { cn } from "@/lib/utils";
import type { Agent } from "@/types";

interface AgentCardProps {
  agent: Agent;
  className?: string;
}

export function AgentCard({ agent, className }: AgentCardProps) {
  return (
    <div
      className={cn(
        "glass-card glass-card-hover rounded-xl p-5 flex flex-col gap-3 transition-all duration-200 cursor-pointer",
        "w-full",
        className
      )}
      style={{ borderTop: `3px solid ${agent.color}` }}
    >
      {/* Emoji */}
      <span className="text-4xl leading-none" role="img" aria-label={agent.name}>
        {agent.emoji}
      </span>

      {/* Name */}
      <div>
        <p className="text-text-primary font-sans font-semibold text-base leading-tight">
          {agent.name}
        </p>
        <p
          className="text-xs font-body mt-0.5"
          style={{ color: agent.color }}
        >
          {agent.role}
        </p>
      </div>

      {/* SOSTAC phase pill */}
      <div className="flex items-center gap-2">
        <span
          className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold font-sans"
          style={{
            backgroundColor: `${agent.color}18`,
            color: agent.color,
            border: `1px solid ${agent.color}30`,
          }}
        >
          Fase {agent.phase}
        </span>
      </div>

      {/* Description */}
      <p className="text-text-secondary text-xs font-body leading-relaxed line-clamp-2">
        {agent.description}
      </p>
    </div>
  );
}
