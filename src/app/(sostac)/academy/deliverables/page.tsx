"use client";

import { useState, useMemo } from "react";
import { deliverables } from "@/data/mock-user";
import { DeliverableFilters } from "@/components/sostac/deliverables/deliverable-filters";
import { DeliverableList } from "@/components/sostac/deliverables/deliverable-list";
import { GlassCard } from "@/components/shared/glass-card";
import { FileCheck } from "lucide-react";
import type { SOSTACPhase, AgentId, DeliverableStatus } from "@/types";

export default function DeliverablesPage() {
  const [selectedPhases, setSelectedPhases] = useState<SOSTACPhase[]>([]);
  const [selectedAgents, setSelectedAgents] = useState<AgentId[]>([]);
  const [selectedStatuses, setSelectedStatuses] = useState<DeliverableStatus[]>([]);

  const togglePhase = (phase: SOSTACPhase) => {
    setSelectedPhases((prev) =>
      prev.includes(phase) ? prev.filter((p) => p !== phase) : [...prev, phase]
    );
  };

  const toggleAgent = (agentId: AgentId) => {
    setSelectedAgents((prev) =>
      prev.includes(agentId) ? prev.filter((a) => a !== agentId) : [...prev, agentId]
    );
  };

  const toggleStatus = (status: DeliverableStatus) => {
    setSelectedStatuses((prev) =>
      prev.includes(status) ? prev.filter((s) => s !== status) : [...prev, status]
    );
  };

  const clearAll = () => {
    setSelectedPhases([]);
    setSelectedAgents([]);
    setSelectedStatuses([]);
  };

  const filteredDeliverables = useMemo(() => {
    return deliverables.filter((d) => {
      const phaseMatch = selectedPhases.length === 0 || selectedPhases.includes(d.phase);
      const agentMatch = selectedAgents.length === 0 || selectedAgents.includes(d.agentId);
      const statusMatch = selectedStatuses.length === 0 || selectedStatuses.includes(d.status);
      return phaseMatch && agentMatch && statusMatch;
    });
  }, [selectedPhases, selectedAgents, selectedStatuses]);

  return (
    <div className="flex flex-col gap-6 p-6 max-w-5xl mx-auto">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div
          className="flex items-center justify-center rounded-xl flex-shrink-0"
          style={{
            width: "48px",
            height: "48px",
            backgroundColor: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.10)",
          }}
        >
          <FileCheck size={22} className="text-[#E5E5E5]" />
        </div>
        <div>
          <h1 className="text-xl font-bold text-white font-sans">Mis Entregables</h1>
          <p className="text-sm text-[#9CA3AF]">
            {deliverables.length} entregables en total · {filteredDeliverables.length} mostrados
          </p>
        </div>
      </div>

      {/* Filters */}
      <GlassCard className="p-4">
        <DeliverableFilters
          selectedPhases={selectedPhases}
          selectedAgents={selectedAgents}
          selectedStatuses={selectedStatuses}
          onPhaseToggle={togglePhase}
          onAgentToggle={toggleAgent}
          onStatusToggle={toggleStatus}
          onClearAll={clearAll}
        />
      </GlassCard>

      {/* List */}
      <DeliverableList deliverables={filteredDeliverables} />
    </div>
  );
}
