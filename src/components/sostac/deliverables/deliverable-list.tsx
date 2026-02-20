import Link from "next/link";
import { FileText, FileSpreadsheet, Link as LinkIcon, FileCheck } from "lucide-react";
import { GlassCard } from "@/components/shared/glass-card";
import { AGENTS, STATUS_MAP } from "@/lib/constants";
import { cn } from "@/lib/utils";
import type { Deliverable } from "@/types/saas";

interface DeliverableListProps {
  deliverables: Deliverable[];
}

const FORMAT_ICONS = {
  pdf: FileText,
  doc: FileCheck,
  sheet: FileSpreadsheet,
  link: LinkIcon,
};

const PHASE_COLORS: Record<string, string> = {
  S: "#3B82F6",
  O: "#F59E0B",
  ST: "#10B981",
  T: "#EF4444",
  A: "#8B5CF6",
  C: "#06B6D4",
};

export function DeliverableList({ deliverables }: DeliverableListProps) {
  if (deliverables.length === 0) {
    return (
      <div className="flex items-center justify-center py-16">
        <p className="text-sm text-[#6B7280]">No hay entregables que coincidan con los filtros.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {deliverables.map((deliverable) => {
        const agent = AGENTS[deliverable.agentId];
        const statusInfo = STATUS_MAP[deliverable.status];
        const FormatIcon = FORMAT_ICONS[deliverable.format];
        const phaseColor = PHASE_COLORS[deliverable.phase] ?? "#6B7280";

        return (
          <Link key={deliverable.id} href={`/academy/deliverables/${deliverable.id}`}>
            <GlassCard className="p-4 flex flex-col gap-3 h-full" hover>
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-2 flex-1 min-w-0">
                  <FormatIcon size={16} className="flex-shrink-0 text-[#9CA3AF]" />
                  <p className="text-sm font-semibold text-white truncate">
                    {deliverable.name}
                  </p>
                </div>

                {/* Status badge */}
                <span
                  className="flex-shrink-0 px-2 py-0.5 rounded-full text-xs font-semibold"
                  style={{
                    backgroundColor: `${statusInfo.color}20`,
                    color: statusInfo.color,
                    border: `1px solid ${statusInfo.color}40`,
                  }}
                >
                  {statusInfo.label}
                </span>
              </div>

              <div className="flex items-center gap-2 flex-wrap">
                {/* Phase badge */}
                <span
                  className="px-2 py-0.5 rounded-full text-xs font-bold"
                  style={{
                    backgroundColor: `${phaseColor}20`,
                    color: phaseColor,
                    border: `1px solid ${phaseColor}30`,
                  }}
                >
                  {deliverable.phase}
                </span>

                {/* Agent badge */}
                <span
                  className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium"
                  style={{
                    backgroundColor: `${agent.color}15`,
                    color: agent.color,
                    border: `1px solid ${agent.color}30`,
                  }}
                >
                  {agent.emoji} {agent.name}
                </span>

                {/* Version */}
                <span className="text-xs text-[#6B7280]">v{deliverable.version}</span>
              </div>

              {/* Tags */}
              {deliverable.tags.length > 0 && (
                <div className="flex flex-wrap gap-1">
                  {deliverable.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-1.5 py-0.5 rounded text-[10px] text-[#9CA3AF]"
                      style={{ backgroundColor: "rgba(255,255,255,0.04)" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Updated date */}
              <p className="text-xs text-[#6B7280] mt-auto">
                Actualizado {new Date(deliverable.updatedAt).toLocaleDateString("es-MX", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </p>
            </GlassCard>
          </Link>
        );
      })}
    </div>
  );
}
