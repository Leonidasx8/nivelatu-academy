"use client";

import Link from "next/link";
import { AGENTS } from "@/lib/constants";
import { GlassCard } from "@/components/shared/glass-card";
import { ProgressBar } from "@/components/shared/progress-bar";
import { LockOverlay } from "@/components/shared/lock-overlay";
import { cn } from "@/lib/utils";
import type { Module } from "@/types/sostac";
import type { AgentId } from "@/types";

interface ModuleHubProps {
  modules: Module[];
  agentId: AgentId;
}

export function ModuleHub({ modules, agentId }: ModuleHubProps) {
  const agent = AGENTS[agentId];

  return (
    <div data-agent={agentId} className="flex flex-col gap-6 p-6 max-w-4xl mx-auto">
      {/* Agent Header */}
      <div className="flex items-center gap-4">
        <div
          className="flex items-center justify-center rounded-2xl text-4xl flex-shrink-0"
          style={{
            width: "72px",
            height: "72px",
            backgroundColor: `${agent.color}15`,
            border: `2px solid ${agent.color}40`,
          }}
        >
          {agent.emoji}
        </div>
        <div>
          <div className="flex items-center gap-2 mb-1">
            <h1 className="text-2xl font-bold text-white font-sans">{agent.name}</h1>
            <span
              className="px-2 py-0.5 rounded-full text-xs font-semibold"
              style={{
                backgroundColor: `${agent.color}20`,
                color: agent.color,
                border: `1px solid ${agent.color}40`,
              }}
            >
              {agent.phase}
            </span>
          </div>
          <p className="text-sm text-[#9CA3AF]">{agent.role}</p>
          <p className="text-sm text-[#E5E5E5] mt-1 max-w-xl">{agent.description}</p>
        </div>
      </div>

      {/* Module Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {modules.map((module) => {
          const isLocked = module.status === "locked";
          const isCompleted = module.status === "completed";
          const progress =
            module.totalSteps > 0
              ? Math.round((module.completedSteps / module.totalSteps) * 100)
              : 0;

          const card = (
            <GlassCard
              className={cn(
                "relative p-4 flex flex-col gap-3 transition-all duration-200",
                !isLocked && "hover:border-[var(--agent-color,#FF6B00)]"
              )}
              hover={!isLocked}
            >
              {isLocked && <LockOverlay />}

              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{module.emoji}</span>
                  <div>
                    <p className="text-sm font-semibold text-white leading-tight">
                      {module.name}
                    </p>
                    <p className="text-xs text-[#9CA3AF] mt-0.5">
                      {module.completedSteps}/{module.totalSteps} pasos
                    </p>
                  </div>
                </div>

                {/* Status indicator */}
                <span
                  className={cn(
                    "flex-shrink-0 w-2 h-2 rounded-full mt-1",
                    isCompleted && "bg-[#10B981]",
                    module.status === "in_progress" && "bg-[var(--agent-color,#FF6B00)]",
                    module.status === "available" && "bg-[#6B7280]",
                    isLocked && "bg-[#2A2A30]"
                  )}
                  style={
                    module.status === "in_progress"
                      ? { backgroundColor: agent.color }
                      : undefined
                  }
                />
              </div>

              <ProgressBar
                value={progress}
                agentColor
                showPercent
                className="mt-auto"
              />
            </GlassCard>
          );

          if (isLocked) {
            return <div key={module.id}>{card}</div>;
          }

          return (
            <Link
              key={module.id}
              href={`/academy/${agentId}/${module.id}/paso-1`}
              className="block"
            >
              {card}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
