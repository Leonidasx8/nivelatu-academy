"use client";

import Link from "next/link";
import { Lock, Check } from "lucide-react";
import { AGENTS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import type { MapNode } from "@/types/sostac";

interface MapNodeProps {
  node: MapNode;
}

export function MapNodeComponent({ node }: MapNodeProps) {
  const agent = AGENTS[node.agentId];
  const isLocked = node.status === "locked";
  const isAvailable = node.status === "available";
  const isInProgress = node.status === "in_progress";
  const isCompleted = node.status === "completed";

  const content = (
    <div
      className={cn(
        "relative flex flex-col items-center justify-center gap-1.5 rounded-xl transition-all duration-200",
        isLocked && "opacity-50 cursor-not-allowed",
        (isAvailable || isInProgress || isCompleted) && "cursor-pointer"
      )}
      style={{
        width: "120px",
        height: "80px",
        backgroundColor: isCompleted
          ? agent.color
          : isInProgress
          ? `${agent.color}20`
          : isAvailable
          ? "rgba(255,255,255,0.03)"
          : "#2A2A30",
        border: isLocked
          ? "2px solid #2A2A30"
          : isCompleted
          ? `2px solid ${agent.color}`
          : `2px solid ${agent.color}`,
        boxShadow:
          isInProgress
            ? `0 0 0 1px ${agent.color}40, 0 0 16px ${agent.color}30`
            : isAvailable
            ? `0 0 8px ${agent.color}20`
            : undefined,
        animation: isAvailable ? "nodeGlow 2s ease-in-out infinite" : undefined,
      }}
    >
      {isLocked ? (
        <Lock size={20} className="text-[#6B7280]" />
      ) : isCompleted ? (
        <>
          <span className="text-2xl">{agent.emoji}</span>
          <Check size={14} className="text-white absolute top-1.5 right-1.5" />
        </>
      ) : (
        <span className="text-2xl">{agent.emoji}</span>
      )}

      <span
        className={cn(
          "text-xs font-semibold truncate max-w-[100px] text-center px-1",
          isCompleted ? "text-white" : isLocked ? "text-[#6B7280]" : "text-[#E5E5E5]"
        )}
      >
        {agent.name}
      </span>

      {/* Phase badge */}
      <span
        className="absolute top-1.5 left-1.5 text-[9px] font-bold px-1 rounded"
        style={{
          backgroundColor: isLocked ? "#2A2A30" : `${agent.color}30`,
          color: isLocked ? "#6B7280" : agent.color,
        }}
      >
        {node.phase}
      </span>
    </div>
  );

  if (isLocked) {
    return (
      <div title={`Completa ${node.prerequisiteIds.join(", ")} primero`}>
        {content}
      </div>
    );
  }

  return (
    <Link href={`/academy/${node.agentId}`} className="block">
      {content}
    </Link>
  );
}
