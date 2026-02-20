import { GlassCard } from "@/components/shared/glass-card";
import { AGENTS } from "@/lib/constants";
import type { ActivityItem } from "@/types/saas";

interface RecentActivityProps {
  items: ActivityItem[];
}

const TYPE_ICONS: Record<ActivityItem["type"], string> = {
  step_completed: "✅",
  deliverable_submitted: "📤",
  deliverable_reviewed: "📋",
  agent_interaction: "💬",
  insight_generated: "💡",
};

function getRelativeTime(timestamp: string): string {
  const now = new Date("2026-02-19T12:00:00Z");
  const then = new Date(timestamp);
  const diffMs = now.getTime() - then.getTime();
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  const diffDays = Math.floor(diffHours / 24);

  if (diffHours < 1) return "hace un momento";
  if (diffHours === 1) return "hace 1h";
  if (diffHours < 24) return `hace ${diffHours}h`;
  if (diffDays === 1) return "ayer";
  if (diffDays < 7) return `hace ${diffDays} días`;
  return then.toLocaleDateString("es-ES", { day: "2-digit", month: "short" });
}

export function RecentActivity({ items }: RecentActivityProps) {
  return (
    <GlassCard className="p-5">
      <h2 className="text-base font-semibold text-white mb-4">Actividad Reciente</h2>

      <div className="flex flex-col">
        {items.map((item, index) => {
          const agent = item.agentId ? AGENTS[item.agentId] : null;
          const isLast = index === items.length - 1;

          return (
            <div key={item.id} className="flex gap-3">
              {/* Timeline line */}
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-base bg-white/[0.04] border border-white/[0.08] flex-shrink-0">
                  {TYPE_ICONS[item.type]}
                </div>
                {!isLast && (
                  <div className="w-px flex-1 my-1 bg-white/[0.06] min-h-[16px]" />
                )}
              </div>

              {/* Content */}
              <div className={`flex-1 min-w-0 ${!isLast ? "pb-4" : ""}`}>
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-white leading-tight">{item.title}</p>
                    <p className="text-xs text-[#9CA3AF] mt-0.5 leading-relaxed">{item.description}</p>
                    {agent && (
                      <span
                        className="inline-flex items-center gap-1 mt-1 text-[11px] font-medium"
                        style={{ color: agent.color }}
                      >
                        <span>{agent.emoji}</span>
                        {agent.name}
                      </span>
                    )}
                  </div>
                  <span className="text-[10px] text-[#6B7280] flex-shrink-0 mt-0.5 whitespace-nowrap">
                    {getRelativeTime(item.timestamp)}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </GlassCard>
  );
}
