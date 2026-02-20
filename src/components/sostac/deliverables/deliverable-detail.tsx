import { FileText, FileSpreadsheet, Link as LinkIcon, FileCheck, Calendar, Hash } from "lucide-react";
import { GlassCard } from "@/components/shared/glass-card";
import { AGENTS, STATUS_MAP } from "@/lib/constants";
import { ReviewPanel } from "./review-panel";
import type { Deliverable } from "@/types/saas";

interface DeliverableDetailProps {
  deliverable: Deliverable;
}

const FORMAT_ICONS = {
  pdf: FileText,
  doc: FileCheck,
  sheet: FileSpreadsheet,
  link: LinkIcon,
};

const FORMAT_LABELS = {
  pdf: "PDF",
  doc: "Documento",
  sheet: "Hoja de cálculo",
  link: "Enlace",
};

const PHASE_COLORS: Record<string, string> = {
  S: "#3B82F6",
  O: "#F59E0B",
  ST: "#10B981",
  T: "#EF4444",
  A: "#8B5CF6",
  C: "#06B6D4",
};

const PHASE_LABELS: Record<string, string> = {
  S: "Situacional",
  O: "Objetivos",
  ST: "Estrategia",
  T: "Tácticas",
  A: "Acción",
  C: "Control",
};

export function DeliverableDetail({ deliverable }: DeliverableDetailProps) {
  const agent = AGENTS[deliverable.agentId];
  const statusInfo = STATUS_MAP[deliverable.status];
  const FormatIcon = FORMAT_ICONS[deliverable.format];
  const phaseColor = PHASE_COLORS[deliverable.phase] ?? "#6B7280";

  return (
    <div className="flex flex-col gap-6 p-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex flex-col gap-3">
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-3">
            <div
              className="flex items-center justify-center rounded-xl flex-shrink-0"
              style={{
                width: "48px",
                height: "48px",
                backgroundColor: `${agent.color}15`,
                border: `1px solid ${agent.color}30`,
              }}
            >
              <FormatIcon size={22} style={{ color: agent.color }} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white font-sans">
                {deliverable.name}
              </h1>
              <p className="text-sm text-[#9CA3AF]">
                {FORMAT_LABELS[deliverable.format]}
              </p>
            </div>
          </div>

          {/* Status badge */}
          <span
            className="px-3 py-1 rounded-full text-sm font-semibold flex-shrink-0"
            style={{
              backgroundColor: `${statusInfo.color}20`,
              color: statusInfo.color,
              border: `1px solid ${statusInfo.color}40`,
            }}
          >
            {statusInfo.icon} {statusInfo.label}
          </span>
        </div>

        {/* Meta badges */}
        <div className="flex items-center gap-2 flex-wrap">
          <span
            className="px-2.5 py-1 rounded-full text-xs font-bold"
            style={{
              backgroundColor: `${phaseColor}20`,
              color: phaseColor,
              border: `1px solid ${phaseColor}30`,
            }}
          >
            Fase {deliverable.phase} — {PHASE_LABELS[deliverable.phase]}
          </span>

          <span
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium"
            style={{
              backgroundColor: `${agent.color}15`,
              color: agent.color,
              border: `1px solid ${agent.color}30`,
            }}
          >
            {agent.emoji} {agent.name}
          </span>

          <span className="flex items-center gap-1 text-xs text-[#9CA3AF]">
            <Hash size={12} />
            Versión {deliverable.version}
          </span>
        </div>
      </div>

      {/* Dates row */}
      <div className="grid grid-cols-2 gap-3">
        <GlassCard className="p-3">
          <div className="flex items-center gap-2">
            <Calendar size={14} className="text-[#9CA3AF] flex-shrink-0" />
            <div>
              <p className="text-[10px] text-[#6B7280] uppercase tracking-wide">Creado</p>
              <p className="text-xs font-medium text-[#E5E5E5]">
                {new Date(deliverable.createdAt).toLocaleDateString("es-MX", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </p>
            </div>
          </div>
        </GlassCard>
        <GlassCard className="p-3">
          <div className="flex items-center gap-2">
            <Calendar size={14} className="text-[#9CA3AF] flex-shrink-0" />
            <div>
              <p className="text-[10px] text-[#6B7280] uppercase tracking-wide">Actualizado</p>
              <p className="text-xs font-medium text-[#E5E5E5]">
                {new Date(deliverable.updatedAt).toLocaleDateString("es-MX", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </p>
            </div>
          </div>
        </GlassCard>
      </div>

      {/* Tags */}
      {deliverable.tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {deliverable.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-full text-xs text-[#9CA3AF]"
              style={{
                backgroundColor: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              #{tag}
            </span>
          ))}
        </div>
      )}

      {/* Content placeholder */}
      <GlassCard className="p-6">
        <div className="flex flex-col items-center justify-center gap-3 py-8">
          <FormatIcon size={40} className="text-[#2A2A30]" />
          <div className="text-center">
            <p className="text-sm font-medium text-[#9CA3AF]">
              Vista previa del contenido
            </p>
            <p className="text-xs text-[#6B7280] mt-1">
              El contenido del entregable estará disponible próximamente.
            </p>
          </div>
          <button
            type="button"
            className="mt-2 px-4 py-2 rounded-lg text-sm font-medium text-white transition-all duration-150"
            style={{
              backgroundColor: agent.color,
              boxShadow: `0 4px 16px ${agent.color}30`,
            }}
          >
            Descargar {FORMAT_LABELS[deliverable.format]}
          </button>
        </div>
      </GlassCard>

      {/* Review section */}
      <GlassCard className="p-5">
        <ReviewPanel deliverable={deliverable} />
      </GlassCard>
    </div>
  );
}
