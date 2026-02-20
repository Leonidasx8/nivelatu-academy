"use client";

import { mapNodes, mapCables } from "@/data/mock-sostac";
import { SOSTAC_PHASES } from "@/lib/constants";
import { MapNodeComponent } from "./map-node";
import { MapPhaseGroup } from "./map-phase-group";
import { ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";

// Group nodes by phase in order
const sNodes = mapNodes.filter((n) => n.phase === "S" && n.agentId !== "delfino");
const delfinoNode = mapNodes.find((n) => n.agentId === "delfino")!;
const orlandoNode = mapNodes.find((n) => n.agentId === "orlando")!;
const fernandoNode = mapNodes.find((n) => n.agentId === "fernando")!;
const tavoNode = mapNodes.find((n) => n.agentId === "tavo")!;
const carlaNode = mapNodes.find((n) => n.agentId === "carla")!;
const ivanNode = mapNodes.find((n) => n.agentId === "ivan")!;

const phaseColors: Record<string, string> = {};
SOSTAC_PHASES.forEach((p) => {
  phaseColors[p.letter] = p.color;
});

function ConnectorArrow({ status }: { status: string }) {
  const isActive = status === "flowing" || status === "completed";
  return (
    <div className="flex justify-center py-1">
      <ArrowDown
        size={18}
        className={cn("transition-colors duration-200")}
        style={{ color: isActive ? "var(--agent-color, #FF6B00)" : "#2A2A30" }}
      />
    </div>
  );
}

function getCableStatus(fromId: string, toId: string) {
  const cable = mapCables.find((c) => c.fromId === fromId && c.toId === toId);
  return cable?.status ?? "inactive";
}

export function SostacMap() {
  // Determine cable status between delfino → S-phase group
  const delfinoToForgeStatus = getCableStatus("node-delfino", "node-forge");
  const orlandoToFernandoStatus = getCableStatus("node-orlando", "node-fernando");
  const fernandoToTavoStatus = getCableStatus("node-fernando", "node-tavo");
  const tavoToCarlaStatus = getCableStatus("node-tavo", "node-carla");
  const carlaToIvanStatus = getCableStatus("node-carla", "node-ivan");

  // Determine the first active/in-progress node for data-agent
  const firstActive = mapNodes.find(
    (n) => n.status === "in_progress" || n.status === "available"
  );
  const dataAgent = firstActive?.agentId ?? "forge";

  return (
    <div
      data-agent={dataAgent}
      className="min-h-[calc(100vh-156px)] flex flex-col items-center py-8 px-4"
    >
      <div className="w-full max-w-3xl flex flex-col items-center gap-2">

        {/* Delfino — standalone */}
        <div className="flex flex-col items-center gap-2">
          <MapNodeComponent node={delfinoNode} />
        </div>

        <ConnectorArrow status={delfinoToForgeStatus} />

        {/* S Phase — horizontal row for sub-agents */}
        <MapPhaseGroup
          phaseLetter="S"
          phaseColor={phaseColors["S"]}
          horizontal
          className="w-full max-w-xl"
        >
          {sNodes.map((node) => (
            <MapNodeComponent key={node.id} node={node} />
          ))}
        </MapPhaseGroup>

        <ConnectorArrow status={getCableStatus("node-pulse", "node-orlando")} />

        {/* O Phase */}
        <MapPhaseGroup
          phaseLetter="O"
          phaseColor={phaseColors["O"]}
          className="w-full max-w-xs"
        >
          <MapNodeComponent node={orlandoNode} />
        </MapPhaseGroup>

        <ConnectorArrow status={orlandoToFernandoStatus} />

        {/* ST Phase */}
        <MapPhaseGroup
          phaseLetter="ST"
          phaseColor={phaseColors["ST"]}
          className="w-full max-w-xs"
        >
          <MapNodeComponent node={fernandoNode} />
        </MapPhaseGroup>

        <ConnectorArrow status={fernandoToTavoStatus} />

        {/* T Phase */}
        <MapPhaseGroup
          phaseLetter="T"
          phaseColor={phaseColors["T"]}
          className="w-full max-w-xs"
        >
          <MapNodeComponent node={tavoNode} />
        </MapPhaseGroup>

        <ConnectorArrow status={tavoToCarlaStatus} />

        {/* A Phase */}
        <MapPhaseGroup
          phaseLetter="A"
          phaseColor={phaseColors["A"]}
          className="w-full max-w-xs"
        >
          <MapNodeComponent node={carlaNode} />
        </MapPhaseGroup>

        <ConnectorArrow status={carlaToIvanStatus} />

        {/* C Phase */}
        <MapPhaseGroup
          phaseLetter="C"
          phaseColor={phaseColors["C"]}
          className="w-full max-w-xs"
        >
          <MapNodeComponent node={ivanNode} />
        </MapPhaseGroup>
      </div>
    </div>
  );
}
