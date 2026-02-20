import { SOSTAC_PHASES } from "@/lib/constants";
import { SOSTACOrbital } from "../sostac-orbital";

export function SOSTACSection() {
  return (
    <section id="sostac" className="py-24 bg-bg-deep">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: text content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-sans font-black text-text-primary mb-4">
              Metodología SOSTAC
            </h2>
            <p className="text-text-secondary font-body text-lg mb-10 leading-relaxed">
              El framework estratégico más completo para lanzar y escalar academias online.
              6 fases, cada una guiada por un agente de IA especializado.
            </p>

            <div className="flex flex-col gap-5">
              {SOSTAC_PHASES.map((phase) => (
                <div key={phase.letter} className="flex items-start gap-4">
                  {/* Colored dot + letter */}
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 font-sans font-black text-sm"
                    style={{
                      backgroundColor: `${phase.color}18`,
                      color: phase.color,
                      border: `1px solid ${phase.color}30`,
                    }}
                  >
                    {phase.letter}
                  </div>
                  <div>
                    <p
                      className="font-sans font-semibold text-base"
                      style={{ color: phase.color }}
                    >
                      {phase.name}
                    </p>
                    <p className="text-text-secondary font-body text-sm leading-relaxed">
                      {phase.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: orbital visualization */}
          <div className="flex items-center justify-center">
            <div className="w-full max-w-[420px] aspect-square">
              <SOSTACOrbital className="w-full h-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
