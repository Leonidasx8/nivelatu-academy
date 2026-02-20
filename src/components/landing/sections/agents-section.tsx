import { agents } from "@/data/agents";
import { AgentCard } from "../agent-card";

// Use the 7 main public-facing agents (delfino, forge, orlando, fernando, tavo, carla, ivan)
const MAIN_AGENTS = ["delfino", "forge", "orlando", "fernando", "tavo", "carla", "ivan"];

export function AgentsSection() {
  const displayAgents = agents.filter((a) => MAIN_AGENTS.includes(a.id));
  const firstRow = displayAgents.slice(0, 4);
  const secondRow = displayAgents.slice(4);

  return (
    <section id="agentes" className="py-24 bg-bg-primary">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-sans font-black text-text-primary mb-4">
            Conoce a tus agentes de IA
          </h2>
          <p className="text-text-secondary font-body text-lg max-w-2xl mx-auto">
            Cada agente está especializado en una fase de la metodología SOSTAC.
            Juntos, cubren todo el proceso estratégico de lanzamiento.
          </p>
        </div>

        {/* First row — 4 agents */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
          {firstRow.map((agent) => (
            <AgentCard key={agent.id} agent={agent} />
          ))}
        </div>

        {/* Second row — 3 agents centered */}
        <div className="flex justify-center gap-4">
          {secondRow.map((agent) => (
            <div key={agent.id} className="w-full max-w-[calc(25%-12px)]">
              <AgentCard agent={agent} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
