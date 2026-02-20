"use client";

import { cn } from "@/lib/utils";
import { AGENTS } from "@/lib/constants";
import type { SOSTACPhase, AgentId, DeliverableStatus } from "@/types";

const PHASES: { letter: SOSTACPhase; color: string }[] = [
  { letter: "S", color: "#3B82F6" },
  { letter: "O", color: "#F59E0B" },
  { letter: "ST", color: "#10B981" },
  { letter: "T", color: "#EF4444" },
  { letter: "A", color: "#8B5CF6" },
  { letter: "C", color: "#06B6D4" },
];

const STATUSES: { value: DeliverableStatus; label: string; color: string }[] = [
  { value: "borrador", label: "Borrador", color: "#F59E0B" },
  { value: "en_revision", label: "En revisión", color: "#3B82F6" },
  { value: "aprobado", label: "Aprobado", color: "#10B981" },
  { value: "rehacer", label: "Rehacer", color: "#EF4444" },
  { value: "pendiente", label: "Pendiente", color: "#6B7280" },
];

interface DeliverableFiltersProps {
  selectedPhases: SOSTACPhase[];
  selectedAgents: AgentId[];
  selectedStatuses: DeliverableStatus[];
  onPhaseToggle: (phase: SOSTACPhase) => void;
  onAgentToggle: (agentId: AgentId) => void;
  onStatusToggle: (status: DeliverableStatus) => void;
  onClearAll: () => void;
}

interface FilterChipProps {
  label: string;
  isSelected: boolean;
  onClick: () => void;
  color?: string;
}

function FilterChip({ label, isSelected, onClick, color }: FilterChipProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-150"
      style={{
        backgroundColor: isSelected
          ? color
            ? `${color}20`
            : "rgba(255,255,255,0.10)"
          : "rgba(255,255,255,0.04)",
        border: `1px solid ${
          isSelected ? (color ? `${color}50` : "rgba(255,255,255,0.30)") : "rgba(255,255,255,0.10)"
        }`,
        color: isSelected ? (color ?? "white") : "#9CA3AF",
      }}
    >
      {label}
    </button>
  );
}

export function DeliverableFilters({
  selectedPhases,
  selectedAgents,
  selectedStatuses,
  onPhaseToggle,
  onAgentToggle,
  onStatusToggle,
  onClearAll,
}: DeliverableFiltersProps) {
  const hasFilters =
    selectedPhases.length > 0 || selectedAgents.length > 0 || selectedStatuses.length > 0;

  return (
    <div className="flex flex-col gap-4">
      {/* Phases */}
      <div className="flex flex-col gap-2">
        <span className="text-xs text-[#6B7280] uppercase tracking-wider font-medium">Fase</span>
        <div className="flex flex-wrap gap-2">
          {PHASES.map((p) => (
            <FilterChip
              key={p.letter}
              label={p.letter}
              isSelected={selectedPhases.includes(p.letter)}
              onClick={() => onPhaseToggle(p.letter)}
              color={p.color}
            />
          ))}
        </div>
      </div>

      {/* Agents */}
      <div className="flex flex-col gap-2">
        <span className="text-xs text-[#6B7280] uppercase tracking-wider font-medium">Agente</span>
        <div className="flex flex-wrap gap-2">
          {Object.values(AGENTS).map((agent) => (
            <FilterChip
              key={agent.id}
              label={`${agent.emoji} ${agent.name}`}
              isSelected={selectedAgents.includes(agent.id)}
              onClick={() => onAgentToggle(agent.id)}
              color={agent.color}
            />
          ))}
        </div>
      </div>

      {/* Statuses */}
      <div className="flex flex-col gap-2">
        <span className="text-xs text-[#6B7280] uppercase tracking-wider font-medium">Estado</span>
        <div className="flex flex-wrap gap-2">
          {STATUSES.map((s) => (
            <FilterChip
              key={s.value}
              label={s.label}
              isSelected={selectedStatuses.includes(s.value)}
              onClick={() => onStatusToggle(s.value)}
              color={s.color}
            />
          ))}
        </div>
      </div>

      {/* Clear all */}
      {hasFilters && (
        <button
          type="button"
          onClick={onClearAll}
          className="self-start text-xs text-[#9CA3AF] underline underline-offset-2 hover:text-white transition-colors"
        >
          Limpiar filtros
        </button>
      )}
    </div>
  );
}
