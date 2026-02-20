"use client";

import { Mic, Maximize2 } from "lucide-react";
import { AGENTS } from "@/lib/constants";
import type { AgentId } from "@/types";

interface ChatMinimizedBarProps {
  agentId: AgentId;
  lastMessage?: string;
  unreadCount?: number;
  onExpand: () => void;
}

export function ChatMinimizedBar({
  agentId,
  lastMessage,
  unreadCount = 0,
  onExpand,
}: ChatMinimizedBarProps) {
  const agent = AGENTS[agentId];

  return (
    <div
      className="flex items-center justify-between shrink-0 px-5"
      style={{
        height: "44px",
        backgroundColor: "#0A0A0A",
        borderBottom: "1px solid #2A2A2A",
      }}
    >
      {/* Left: agent info + preview */}
      <div className="flex items-center gap-2.5 min-w-0 flex-1">
        <div
          className="flex items-center justify-center rounded-full text-sm shrink-0"
          style={{
            width: "28px",
            height: "28px",
            backgroundColor: "#2A2A2A",
          }}
        >
          {agent.emoji}
        </div>
        <span className="text-[13px] font-semibold text-white shrink-0">
          {agent.name}
        </span>
        <span
          className="w-1.5 h-1.5 rounded-full shrink-0"
          style={{ backgroundColor: "#22C55E" }}
        />
        <span className="text-xs text-[#666666] truncate min-w-0">
          {lastMessage ?? "En línea"}
        </span>
      </div>

      {/* Right: actions */}
      <div className="flex items-center gap-2 shrink-0">
        <button
          type="button"
          className="flex items-center justify-center rounded-md"
          style={{
            width: "28px",
            height: "28px",
            backgroundColor: "#1A1A1A",
            border: "1px solid #2A2A2A",
          }}
          aria-label="Conversación de voz"
        >
          <Mic size={13} style={{ color: "#F97316" }} />
        </button>

        {unreadCount > 0 && (
          <div
            className="flex items-center justify-center rounded-full text-[10px] font-bold text-white"
            style={{
              width: "20px",
              height: "20px",
              backgroundColor: "#F97316",
            }}
          >
            {unreadCount}
          </div>
        )}

        <button
          type="button"
          onClick={onExpand}
          className="flex items-center justify-center rounded-md"
          style={{
            width: "28px",
            height: "28px",
            backgroundColor: "#1A1A1A",
            border: "1px solid #2A2A2A",
          }}
          aria-label="Expandir chat"
        >
          <Maximize2 size={13} style={{ color: "#999999" }} />
        </button>
      </div>
    </div>
  );
}
