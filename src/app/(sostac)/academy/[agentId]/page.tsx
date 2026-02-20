import { AGENTS } from "@/lib/constants";
import { forgeModules, atlasModules } from "@/data/mock-sostac";
import { ModuleHub } from "@/components/sostac/module-hub";
import type { AgentId } from "@/types";
import type { Module } from "@/types/sostac";

interface ModuleHubPageProps {
  params: Promise<{ agentId: string }>;
}

function getModules(agentId: string): Module[] {
  switch (agentId) {
    case "forge":
      return forgeModules;
    case "atlas":
      return atlasModules;
    default:
      return [];
  }
}

export default async function ModuleHubPage({ params }: ModuleHubPageProps) {
  const { agentId } = await params;

  const agent = AGENTS[agentId as AgentId];
  if (!agent) {
    return (
      <div className="flex items-center justify-center h-64">
        <p className="text-[#9CA3AF]">Agente no encontrado.</p>
      </div>
    );
  }

  const modules = getModules(agentId);

  return <ModuleHub modules={modules} agentId={agentId as AgentId} />;
}
