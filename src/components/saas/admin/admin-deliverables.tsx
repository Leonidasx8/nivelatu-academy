"use client";

import { useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { AgentBadge } from "@/components/shared/agent-badge";
import { StatusBadge } from "@/components/shared/status-badge";
import type { Deliverable } from "@/types/saas";
import type { SOSTACPhase } from "@/types";
import { cn } from "@/lib/utils";
import { SOSTAC_PHASES } from "@/lib/constants";
import { CheckCircle, RefreshCw } from "lucide-react";

interface AdminDeliverablesProps {
  deliverables: Deliverable[];
}

const PHASE_FILTERS: Array<{ value: SOSTACPhase | "all"; label: string }> = [
  { value: "all", label: "Todas las fases" },
  { value: "S", label: "S — Situacional" },
  { value: "O", label: "O — Objetivos" },
  { value: "ST", label: "ST — Estrategia" },
  { value: "T", label: "T — Tácticas" },
  { value: "A", label: "A — Acción" },
  { value: "C", label: "C — Control" },
];

export function AdminDeliverables({ deliverables }: AdminDeliverablesProps) {
  const [phaseFilter, setPhaseFilter] = useState<SOSTACPhase | "all">("all");

  const filtered = deliverables.filter(
    (d) => phaseFilter === "all" || d.phase === phaseFilter
  );

  return (
    <div className="flex flex-col gap-4">
      {/* Phase filter chips */}
      <div className="flex flex-wrap gap-2">
        {PHASE_FILTERS.map((filter) => {
          const phase = SOSTAC_PHASES.find((p) => p.letter === filter.value);
          const isActive = phaseFilter === filter.value;

          return (
            <button
              key={filter.value}
              onClick={() => setPhaseFilter(filter.value)}
              className={cn(
                "px-3 py-1.5 rounded-full text-xs font-medium border transition-all duration-150",
                isActive
                  ? "text-white"
                  : "border-white/[0.08] text-[#9CA3AF] hover:border-white/20 hover:text-white"
              )}
              style={
                isActive
                  ? {
                      backgroundColor: phase ? `${phase.color}15` : "rgba(255,107,0,0.15)",
                      borderColor: phase ? `${phase.color}50` : "rgba(255,107,0,0.50)",
                      color: phase ? phase.color : "#FF6B00",
                    }
                  : {}
              }
            >
              {filter.label}
            </button>
          );
        })}
      </div>

      {/* Table */}
      <div className="glass-card rounded-xl overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="border-white/[0.06] hover:bg-transparent">
              <TableHead className="text-[#6B7280] font-medium text-xs h-10 px-4">Entregable</TableHead>
              <TableHead className="text-[#6B7280] font-medium text-xs h-10 hidden sm:table-cell">Agente</TableHead>
              <TableHead className="text-[#6B7280] font-medium text-xs h-10">Estado</TableHead>
              <TableHead className="text-[#6B7280] font-medium text-xs h-10 hidden md:table-cell">Enviado</TableHead>
              <TableHead className="text-[#6B7280] font-medium text-xs h-10 text-right pr-4">Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filtered.map((deliverable) => {
              const phase = SOSTAC_PHASES.find((p) => p.letter === deliverable.phase);
              const formattedDate = new Date(deliverable.updatedAt).toLocaleDateString("es-ES", {
                day: "2-digit",
                month: "short",
              });

              return (
                <TableRow key={deliverable.id} className="border-white/[0.04] hover:bg-white/[0.02]">
                  <TableCell className="px-4 py-3">
                    <div>
                      <p className="text-sm font-medium text-white">{deliverable.name}</p>
                      {phase && (
                        <span
                          className="text-[10px] font-medium px-1.5 py-0.5 rounded-full mt-1 inline-block"
                          style={{
                            backgroundColor: `${phase.color}15`,
                            color: phase.color,
                            border: `1px solid ${phase.color}30`,
                          }}
                        >
                          {phase.letter} · {phase.name}
                        </span>
                      )}
                    </div>
                  </TableCell>
                  <TableCell className="py-3 hidden sm:table-cell">
                    <AgentBadge agentId={deliverable.agentId} size="sm" />
                  </TableCell>
                  <TableCell className="py-3">
                    <StatusBadge status={deliverable.status} />
                  </TableCell>
                  <TableCell className="py-3 text-xs text-[#6B7280] hidden md:table-cell">
                    {formattedDate}
                  </TableCell>
                  <TableCell className="py-3 text-right pr-4">
                    <div className="flex items-center justify-end gap-1.5">
                      <Button
                        size="xs"
                        className="text-[#10B981] border-[#10B981]/30 bg-[#10B981]/10 hover:bg-[#10B981]/20"
                        variant="outline"
                      >
                        <CheckCircle className="w-3 h-3 mr-1" />
                        Aprobar
                      </Button>
                      <Button
                        size="xs"
                        className="text-[#EF4444] border-[#EF4444]/30 bg-[#EF4444]/10 hover:bg-[#EF4444]/20"
                        variant="outline"
                      >
                        <RefreshCw className="w-3 h-3 mr-1" />
                        Rehacer
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>

        {filtered.length === 0 && (
          <div className="py-10 text-center text-sm text-[#6B7280]">
            No hay entregables para esta fase.
          </div>
        )}
      </div>
    </div>
  );
}
