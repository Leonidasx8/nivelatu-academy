"use client";

import type { MapCable } from "@/types/sostac";

interface Point {
  x: number;
  y: number;
}

interface MapCableProps {
  cable: MapCable;
  from: Point;
  to: Point;
  agentColor?: string;
}

export function MapCableComponent({ cable, from, to, agentColor }: MapCableProps) {
  const isFlowing = cable.status === "flowing";
  const isCompleted = cable.status === "completed";
  const isInactive = cable.status === "inactive";

  const midX = (from.x + to.x) / 2;
  const midY = (from.y + to.y) / 2;

  const pathD = `M ${from.x} ${from.y} C ${from.x} ${midY}, ${to.x} ${midY}, ${to.x} ${to.y}`;

  return (
    <path
      d={pathD}
      fill="none"
      stroke={
        isInactive
          ? "#2A2A30"
          : agentColor ?? "var(--agent-color, #FF6B00)"
      }
      strokeWidth={isCompleted ? 2.5 : 2}
      strokeDasharray={isFlowing ? "10 5" : undefined}
      opacity={isInactive ? 0.4 : 1}
      style={
        isFlowing
          ? {
              animation: "cableFlow 6s linear infinite",
            }
          : undefined
      }
    />
  );
}
