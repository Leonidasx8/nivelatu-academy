"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { GlassCard } from "@/components/shared/glass-card";
import type { SOSTACProgress } from "@/types/saas";

interface SOSTACProgressWidgetProps {
  progress: SOSTACProgress[];
}

const STATUS_LABELS: Record<SOSTACProgress["status"], string> = {
  locked: "Bloqueado",
  available: "Disponible",
  in_progress: "En progreso",
  completed: "Completado",
};

export function SOSTACProgressWidget({ progress }: SOSTACProgressWidgetProps) {
  return (
    <GlassCard className="p-5">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-base font-semibold text-white">Progreso SOSTAC</h2>
        <Link
          href="/academy"
          className="text-xs text-[#FF6B00] hover:text-[#FF8C33] transition-colors font-medium"
        >
          Ver academia →
        </Link>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {progress.map((phase) => {
          const isActive = phase.status === "in_progress";
          const isLocked = phase.status === "locked";

          return (
            <Link
              key={phase.phase}
              href="/academy"
              className={cn(
                "flex flex-col items-center gap-2 p-3 rounded-xl border transition-all duration-150",
                isActive
                  ? "border-opacity-60"
                  : "border-white/5 hover:border-white/10",
                isLocked && "opacity-50 cursor-not-allowed pointer-events-none"
              )}
              style={
                isActive
                  ? {
                      borderColor: `${phase.color}60`,
                      backgroundColor: `${phase.color}08`,
                      boxShadow: `0 0 20px ${phase.color}15`,
                    }
                  : {}
              }
            >
              {/* Phase letter dot */}
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold"
                style={{
                  backgroundColor: `${phase.color}20`,
                  color: phase.color,
                  border: `1px solid ${phase.color}40`,
                  boxShadow: isActive ? `0 0 12px ${phase.color}30` : undefined,
                }}
              >
                {phase.phase}
              </div>

              {/* Label */}
              <span className="text-xs font-medium text-white text-center leading-tight">
                {phase.label}
              </span>

              {/* Percentage */}
              <span
                className="text-xs font-bold"
                style={{ color: phase.color }}
              >
                {phase.percentage}%
              </span>

              {/* Mini progress bar */}
              <div className="w-full rounded-full overflow-hidden" style={{ height: "4px", backgroundColor: "#1A1A20" }}>
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{
                    width: `${phase.percentage}%`,
                    backgroundColor: phase.color,
                  }}
                />
              </div>

              {/* Status label */}
              <span className="text-[10px] text-[#6B7280] text-center leading-tight">
                {STATUS_LABELS[phase.status]}
              </span>
            </Link>
          );
        })}
      </div>
    </GlassCard>
  );
}
