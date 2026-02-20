"use client";

import { cn } from "@/lib/utils";
import type { AgentId } from "@/types";
import type { Module } from "@/types/sostac";

interface PillarNavProps {
  modules: Module[];
  activeModuleId: string;
  agentId: AgentId;
  onModuleChange?: (moduleId: string) => void;
  className?: string;
}

export function PillarNav({ modules, activeModuleId, agentId, onModuleChange, className }: PillarNavProps) {
  return (
    <nav
      className={cn("flex items-center px-3 gap-1 overflow-x-auto flex-shrink-0", className)}
      style={{
        height: "44px",
        backgroundColor: "#141418",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        scrollbarWidth: "none",
      }}
      aria-label="Módulos"
    >
      {modules.map((module) => {
        const isActive = module.id === activeModuleId;
        const isCompleted = module.status === "completed";
        const isLocked = module.status === "locked";

        return (
          <button
            key={module.id}
            type="button"
            onClick={() => !isLocked && onModuleChange?.(module.id)}
            disabled={isLocked}
            className={cn(
              "relative flex items-center gap-1.5 px-3 h-full text-xs font-medium whitespace-nowrap transition-all duration-150 flex-shrink-0",
              isActive && "text-white",
              isCompleted && !isActive && "text-[#6B7280]",
              isLocked && "text-[#6B7280] opacity-50 cursor-not-allowed",
              !isActive && !isLocked && "text-[#9CA3AF] hover:text-white"
            )}
            style={{
              backgroundColor: isActive ? "var(--agent-color-10, rgba(255,107,0,0.10))" : "transparent",
            }}
          >
            {isCompleted && !isActive ? (
              <span className="text-xs">✅</span>
            ) : (
              <span className="text-xs">{module.emoji}</span>
            )}
            <span>{module.name}</span>
            {isActive && (
              <span
                className="absolute bottom-0 left-0 right-0 h-0.5"
                style={{ backgroundColor: "var(--agent-color, #FF6B00)" }}
              />
            )}
          </button>
        );
      })}
    </nav>
  );
}
