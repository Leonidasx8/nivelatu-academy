"use client";

import { FileText, Bot, Video, ChevronRight, ChevronLeft } from "lucide-react";

type PanelMode = "expanded" | "minimized" | "hidden";

interface ToggleColumnProps {
  chatMode: PanelMode;
  videoMode: PanelMode;
  onToggleChat: () => void;
  onToggleVideo: () => void;
}

const STYLES: Record<PanelMode, { bg: string; border: string; color: string }> = {
  expanded:  { bg: "rgba(34,197,94,0.12)",  border: "#22C55E", color: "#22C55E" },
  minimized: { bg: "rgba(249,115,22,0.12)", border: "#F97316", color: "#F97316" },
  hidden:    { bg: "#1A1A1A",               border: "#2A2A2A", color: "#666666" },
};

function TogglePill({
  icon: Icon,
  mode,
  onClick,
  label,
}: {
  icon: React.ElementType;
  mode: PanelMode;
  onClick: () => void;
  label: string;
}) {
  const s = STYLES[mode];
  const Chevron = mode === "expanded" ? ChevronLeft : ChevronRight;

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="flex flex-col items-center justify-center gap-1 rounded-lg transition-colors duration-200"
      style={{
        width: "36px",
        height: "52px",
        backgroundColor: s.bg,
        border: `1px solid ${s.border}`,
      }}
    >
      <Icon size={14} style={{ color: s.color }} />
      <Chevron size={10} style={{ color: s.color }} />
    </button>
  );
}

export function ToggleColumn({
  chatMode,
  videoMode,
  onToggleChat,
  onToggleVideo,
}: ToggleColumnProps) {
  return (
    <div
      className="flex flex-col items-center justify-center gap-2 shrink-0"
      style={{
        width: "48px",
        backgroundColor: "#0A0A0A",
        borderRight: "1px solid #2A2A2A",
      }}
    >
      <TogglePill
        icon={FileText}
        mode="expanded"
        onClick={() => {}}
        label="Formulario siempre visible"
      />
      <TogglePill
        icon={Bot}
        mode={chatMode}
        onClick={onToggleChat}
        label="Toggle chat"
      />
      <TogglePill
        icon={Video}
        mode={videoMode}
        onClick={onToggleVideo}
        label="Toggle video"
      />
    </div>
  );
}
