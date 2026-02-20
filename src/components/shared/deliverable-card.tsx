import { GlassCard } from "./glass-card";
import { AgentBadge } from "./agent-badge";
import { StatusBadge } from "./status-badge";
import type { Deliverable } from "@/types/saas";
import { SOSTAC_PHASES } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface DeliverableCardProps {
  deliverable: Deliverable;
  className?: string;
}

const FORMAT_ICONS: Record<Deliverable["format"], string> = {
  pdf: "📄",
  doc: "📝",
  sheet: "📊",
  link: "🔗",
};

export function DeliverableCard({ deliverable, className }: DeliverableCardProps) {
  const phase = SOSTAC_PHASES.find((p) => p.letter === deliverable.phase);
  const formattedDate = new Date(deliverable.updatedAt).toLocaleDateString("es-ES", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <GlassCard hover className={cn("p-4", className)}>
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-base">{FORMAT_ICONS[deliverable.format]}</span>
            <h3 className="text-sm font-semibold text-white truncate">{deliverable.name}</h3>
          </div>
          <div className="flex flex-wrap items-center gap-2 mt-2">
            {phase && (
              <span
                className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium"
                style={{
                  backgroundColor: `${phase.color}20`,
                  color: phase.color,
                  border: `1px solid ${phase.color}40`,
                }}
              >
                {phase.letter} · {phase.name}
              </span>
            )}
            <AgentBadge agentId={deliverable.agentId} size="sm" />
            <StatusBadge status={deliverable.status} />
          </div>
        </div>
        <div className="text-right flex-shrink-0">
          <p className="text-xs text-[#6B7280]">v{deliverable.version}</p>
          <p className="text-xs text-[#6B7280] mt-0.5">{formattedDate}</p>
        </div>
      </div>
    </GlassCard>
  );
}
