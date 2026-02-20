import { AGENTS } from "@/lib/constants";
import { ProgressBar } from "@/components/shared/progress-bar";
import { GlassCard } from "@/components/shared/glass-card";
import type { Module, Step } from "@/types/sostac";

interface WorkspaceHeaderProps {
  module: Module;
  step: Step;
  agentInstruction?: string;
  stepIndex: number;
}

export function WorkspaceHeader({ module, step, agentInstruction, stepIndex }: WorkspaceHeaderProps) {
  const agent = AGENTS[module.agentId];
  const progress = module.totalSteps > 0
    ? Math.round((stepIndex / module.totalSteps) * 100)
    : 0;

  return (
    <div className="flex flex-col gap-4 mb-6">
      {/* Pillar badge */}
      <div className="flex items-center gap-2">
        <span
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-semibold"
          style={{
            backgroundColor: `${agent.color}15`,
            color: agent.color,
            border: `1px solid ${agent.color}30`,
          }}
        >
          <span>{module.emoji}</span>
          <span>{module.name}</span>
        </span>
      </div>

      {/* Step title */}
      <h1 className="text-[22px] font-bold text-white font-sans leading-tight">
        {step.title}
      </h1>

      {/* Progress */}
      <div className="flex flex-col gap-1.5">
        <div className="flex items-center justify-between">
          <span className="text-xs text-[#9CA3AF]">
            Paso {stepIndex} de {module.totalSteps}
          </span>
          <span className="text-xs font-semibold" style={{ color: agent.color }}>
            {progress}%
          </span>
        </div>
        <ProgressBar value={progress} agentColor />
      </div>

      {/* Agent instruction card */}
      {agentInstruction && (
        <GlassCard className="p-4">
          <div className="flex items-start gap-3">
            <div
              className="flex-shrink-0 flex items-center justify-center rounded-full text-lg"
              style={{
                width: "40px",
                height: "40px",
                backgroundColor: `${agent.color}15`,
                border: `1px solid ${agent.color}30`,
              }}
            >
              {agent.emoji}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold mb-1" style={{ color: agent.color }}>
                {agent.name} dice:
              </p>
              <p className="text-sm text-[#E5E5E5] leading-relaxed">{agentInstruction}</p>
            </div>
          </div>
        </GlassCard>
      )}
    </div>
  );
}
