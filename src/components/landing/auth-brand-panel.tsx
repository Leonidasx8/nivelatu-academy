import { Zap } from "lucide-react";
import { SOSTAC_PHASES } from "@/lib/constants";
import { EnergyCables } from "./energy-cables";

interface AuthBrandPanelProps {
  variant: "login" | "register";
}

const PANEL_CONFIG = {
  login: {
    agentEmoji: "🦉",
    agentName: "Orlando",
    agentColor: "#F59E0B",
    agentRole: "Objetivos SMART",
    progressLabel: "Definiendo objetivos SMART",
    progressValue: 68,
    planStage: "Fase O — Objetivos",
  },
  register: {
    agentEmoji: "🐬",
    agentName: "Delfino",
    agentColor: "#06B6D4",
    agentRole: "Brief Express",
    progressLabel: "Capturando tu visión",
    progressValue: 42,
    planStage: "Fase S — Situación",
  },
};

export function AuthBrandPanel({ variant }: AuthBrandPanelProps) {
  const config = PANEL_CONFIG[variant];

  return (
    <div className="relative h-full min-h-screen bg-bg-deep overflow-hidden flex flex-col">
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(255,107,0,0.08) 0%, transparent 70%)",
        }}
      />

      {/* Energy cables */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <EnergyCables className="w-full h-full" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full p-10">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Zap className="w-5 h-5 text-accent" fill="currentColor" />
          <span className="font-sans font-bold text-base text-text-primary">
            NivelatuAcademy
          </span>
        </div>

        {/* Center card */}
        <div className="flex-1 flex items-center justify-center">
          <div className="glass-card-strong rounded-2xl p-6 w-full max-w-[300px]">
            {/* Stage label */}
            <p className="text-xs font-body text-text-secondary mb-3">
              {config.planStage}
            </p>

            {/* Progress label */}
            <p className="text-text-primary font-sans font-semibold text-sm mb-3">
              {config.progressLabel}
            </p>

            {/* Progress bar */}
            <div className="h-1.5 bg-glass-border rounded-full overflow-hidden mb-4">
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{
                  width: `${config.progressValue}%`,
                  background: `linear-gradient(90deg, ${config.agentColor}, ${config.agentColor}cc)`,
                  boxShadow: `0 0 8px ${config.agentColor}60`,
                }}
              />
            </div>

            {/* Agent badge */}
            <div className="flex items-center gap-3 p-3 rounded-xl bg-glass-bg border border-glass-border">
              <span className="text-2xl" role="img" aria-label={config.agentName}>
                {config.agentEmoji}
              </span>
              <div>
                <p
                  className="font-sans font-semibold text-sm"
                  style={{ color: config.agentColor }}
                >
                  {config.agentName}
                </p>
                <p className="text-text-disabled text-xs font-body">
                  {config.agentRole}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom SOSTAC pills */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2 flex-wrap">
            <Zap className="w-4 h-4 text-accent" fill="currentColor" />
            <span className="text-text-secondary text-xs font-body">
              Metodología
            </span>
            {SOSTAC_PHASES.map((phase) => (
              <span
                key={phase.letter}
                className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-sans font-bold"
                style={{
                  backgroundColor: `${phase.color}18`,
                  color: phase.color,
                  border: `1px solid ${phase.color}30`,
                }}
              >
                {phase.letter}
              </span>
            ))}
          </div>
          <p className="text-text-disabled text-xs font-body">
            Planificación estratégica guiada por IA para academias online
          </p>
        </div>
      </div>
    </div>
  );
}
