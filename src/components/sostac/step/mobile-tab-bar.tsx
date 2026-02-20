"use client";

import { FileText, Bot, Video } from "lucide-react";

interface MobileTabBarProps {
  activePanel: "form" | "chat" | "video";
  onChangePanel: (panel: "form" | "chat" | "video") => void;
  agentName?: string;
}

const TABS = [
  { id: "form" as const, icon: FileText, label: "Formulario" },
  { id: "chat" as const, icon: Bot, label: "Forge AI" },
  { id: "video" as const, icon: Video, label: "Video" },
];

export function MobileTabBar({ activePanel, onChangePanel, agentName }: MobileTabBarProps) {
  return (
    <div
      className="flex items-center justify-around shrink-0"
      style={{
        height: "64px",
        backgroundColor: "#0A0A0A",
        borderTop: "1px solid #2A2A2A",
        padding: "0 16px",
      }}
    >
      {TABS.map((tab) => {
        const isActive = activePanel === tab.id;
        const color = isActive ? "#22C55E" : "#666666";
        const label = tab.id === "chat" && agentName ? `${agentName} AI` : tab.label;

        return (
          <button
            key={tab.id}
            type="button"
            onClick={() => onChangePanel(tab.id)}
            className="flex flex-col items-center gap-1"
          >
            <tab.icon size={22} style={{ color }} />
            <span
              className="text-[10px]"
              style={{
                color,
                fontWeight: isActive ? 600 : 500,
              }}
            >
              {label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
