import { GlassCard } from "@/components/shared/glass-card";
import { AGENTS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import type { AgentId } from "@/types";

interface AgentEntry {
  id: AgentId;
  status: "active" | "completed" | "locked";
  context?: string;
  unlockCondition?: string;
}

const AGENT_STATUS: AgentEntry[] = [
  { id: "delfino", status: "completed" },
  { id: "forge", status: "active", context: "Módulo Misión — Paso 3 de 7" },
  { id: "atlas", status: "active", context: "Análisis de mercado en revisión" },
  { id: "pulse", status: "active", context: "Mapa de decisión en borrador" },
  { id: "vega", status: "active", context: "Arquitectura de oferta iniciada" },
  { id: "orlando", status: "locked", unlockCondition: "Completa la fase Situacional" },
  { id: "fernando", status: "locked", unlockCondition: "Completa Objetivos con Orlando" },
  { id: "tavo", status: "locked", unlockCondition: "Completa la Estrategia con Fernando" },
  { id: "carla", status: "locked", unlockCondition: "Completa Tácticas con Tavo" },
  { id: "ivan", status: "locked", unlockCondition: "Completa todas las fases anteriores" },
];

const STATUS_CONFIG = {
  active: { label: "Activo", dotColor: "#10B981", textColor: "#10B981" },
  completed: { label: "Completado", dotColor: "#6B7280", textColor: "#6B7280" },
  locked: { label: "Bloqueado", dotColor: "#374151", textColor: "#4B5563" },
};

export function AgentActivityPanel() {
  return (
    <GlassCard className="p-5">
      <h2 className="text-base font-semibold text-white mb-4">Agentes</h2>

      <div className="flex flex-col gap-1">
        {AGENT_STATUS.map((entry) => {
          const agent = AGENTS[entry.id];
          const config = STATUS_CONFIG[entry.status];
          const isLocked = entry.status === "locked";

          return (
            <div
              key={entry.id}
              className={cn(
                "flex items-start gap-3 p-2.5 rounded-lg transition-colors",
                !isLocked && "hover:bg-white/[0.03]",
                isLocked && "opacity-50"
              )}
            >
              {/* Emoji */}
              <span className={cn("text-lg flex-shrink-0 mt-0.5", isLocked && "grayscale")}>{agent.emoji}</span>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span
                    className="text-sm font-medium"
                    style={{ color: isLocked ? "#6B7280" : agent.color }}
                  >
                    {agent.name}
                  </span>
                  <span className="text-[10px] text-[#6B7280] truncate hidden sm:block">{agent.role}</span>
                </div>

                {entry.context && (
                  <p className="text-xs text-[#9CA3AF] mt-0.5 truncate">{entry.context}</p>
                )}
                {entry.unlockCondition && (
                  <p className="text-xs text-[#4B5563] mt-0.5 truncate">{entry.unlockCondition}</p>
                )}
              </div>

              {/* Status badge */}
              <div className="flex items-center gap-1.5 flex-shrink-0">
                <div
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: config.dotColor }}
                />
                <span className="text-[10px] font-medium" style={{ color: config.textColor }}>
                  {config.label}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </GlassCard>
  );
}
