import Link from "next/link";
import { GlassCard } from "@/components/shared/glass-card";
import { ProgressBar } from "@/components/shared/progress-bar";
import { AGENTS } from "@/lib/constants";

export function CurrentStepCard() {
  const agent = AGENTS["forge"];

  return (
    <GlassCard className="p-5">
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-xs text-[#9CA3AF] font-medium uppercase tracking-wide mb-1">
            Paso actual
          </p>
          <div className="flex items-center gap-2">
            <span className="text-2xl">{agent.emoji}</span>
            <div>
              <h3 className="text-sm font-semibold text-white">
                {agent.name} — {agent.role}
              </h3>
              <p className="text-xs text-[#9CA3AF] mt-0.5">Misión → Paso 3 de 7</p>
            </div>
          </div>
        </div>
        <span
          className="text-xs font-bold px-2 py-1 rounded-full"
          style={{
            backgroundColor: `${agent.color}20`,
            color: agent.color,
            border: `1px solid ${agent.color}40`,
          }}
        >
          42%
        </span>
      </div>

      <div className="mb-4" data-agent="forge">
        <ProgressBar value={42} agentColor showPercent={false} />
      </div>

      <Link
        href="/academy/forge"
        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-white transition-all duration-150 hover:opacity-90 btn-glow"
        style={{ backgroundColor: "#FF6B00" }}
      >
        Continuar
        <span>→</span>
      </Link>
    </GlassCard>
  );
}
