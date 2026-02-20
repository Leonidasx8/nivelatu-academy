"use client";

import { useState } from "react";
import { ChevronRight, ChevronLeft, MessageSquare, Video } from "lucide-react";
import { cn } from "@/lib/utils";
import { TopBar } from "@/components/shared/nav/top-bar";
import { PillarNav } from "@/components/shared/nav/pillar-nav";
import { BottomBar } from "@/components/shared/nav/bottom-bar";
import type { AgentId } from "@/types";
import type { Module } from "@/types/sostac";
import type { SOSTACProgress } from "@/types/saas";

// ── Panel toggle ───────────────────────────────────────────────────────────────
function PanelToggle({
  onClick,
  label,
  icon: Icon,
  expanded,
}: {
  onClick: () => void;
  label: string;
  icon: React.ElementType;
  expanded: boolean;
}) {
  const Arrow = expanded ? ChevronRight : ChevronLeft;
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="absolute top-1/2 -translate-y-1/2 -left-3 z-10 flex flex-col items-center gap-1 p-1.5 rounded-[10px] transition-all duration-200"
      style={{
        backgroundColor: "#141418",
        border: "1px solid rgba(255,255,255,0.08)",
        color: "#9CA3AF",
      }}
    >
      <Icon className="w-3 h-3" />
      <Arrow className="w-3 h-3" />
    </button>
  );
}

// ── Default empty data for layout shell ───────────────────────────────────────
const EMPTY_MODULES: Module[] = [];
const EMPTY_PROGRESS: SOSTACProgress[] = [];

// ── Main Layout ───────────────────────────────────────────────────────────────
interface SostacLayoutProps {
  children: React.ReactNode;
  /** Agent context — sets data-agent on root for CSS color propagation */
  agentId?: AgentId;
  /** Live modules for PillarNav — pages inject via props or context */
  modules?: Module[];
  activeModuleId?: string;
  /** Progress data for BottomBar */
  progress?: SOSTACProgress[];
  totalProgress?: number;
  currentEpisode?: string;
  /** Breadcrumb for TopBar */
  breadcrumb?: { label: string; href: string }[];
  showBack?: boolean;
  topBarProgress?: number;
  className?: string;
}

export function SostacLayout({
  children,
  agentId,
  modules = EMPTY_MODULES,
  activeModuleId = "",
  progress = EMPTY_PROGRESS,
  totalProgress,
  currentEpisode,
  breadcrumb,
  showBack = false,
  topBarProgress,
  className,
}: SostacLayoutProps) {
  const [chatVisible, setChatVisible] = useState(true);
  const [videoVisible, setVideoVisible] = useState(true);

  const PANEL_WIDTH = 300;
  const COLLAPSED_WIDTH = 48;

  return (
    <div
      className={cn("flex flex-col h-screen overflow-hidden bg-[#0D0D0F]", className)}
      data-agent={agentId}
    >
      {/* ── TopBar ── */}
      <TopBar
        breadcrumb={breadcrumb}
        showBack={showBack}
        progress={topBarProgress}
      />

      {/* ── PillarNav ── */}
      {modules.length > 0 && agentId ? (
        <PillarNav
          modules={modules}
          activeModuleId={activeModuleId}
          agentId={agentId}
        />
      ) : (
        /* Placeholder bar when no modules are loaded yet */
        <div
          className="flex items-center px-4 flex-shrink-0"
          style={{
            height: "44px",
            backgroundColor: "#141418",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
          }}
        />
      )}

      {/* ── Three-panel main area ── */}
      <div className="flex flex-row flex-1 overflow-hidden">
        {/* Workspace */}
        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>

        {/* ── Chat Panel — hidden below xl (1280px) ── */}
        <div
          className="relative shrink-0 border-l hidden xl:block transition-all duration-300"
          style={{
            width: chatVisible ? PANEL_WIDTH : COLLAPSED_WIDTH,
            borderColor: "rgba(255,255,255,0.08)",
            backgroundColor: "#0A0A0E",
          }}
        >
          <PanelToggle
            onClick={() => setChatVisible((v) => !v)}
            label={chatVisible ? "Colapsar chat" : "Expandir chat"}
            icon={MessageSquare}
            expanded={chatVisible}
          />

          {chatVisible ? (
            <div className="h-full flex flex-col">
              <div
                className="flex items-center gap-2 px-4 py-3 flex-shrink-0"
                style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
              >
                <MessageSquare size={14} style={{ color: "#FF6B00" }} />
                <span className="text-xs font-medium text-white">Chat del Agente</span>
              </div>
              <div className="flex-1 flex items-center justify-center">
                <span
                  className="text-xs text-center px-4 font-mono"
                  style={{ color: "#6B7280" }}
                >
                  Chat panel
                </span>
              </div>
            </div>
          ) : (
            <div className="h-full flex flex-col items-center justify-center gap-3">
              <MessageSquare size={14} style={{ color: "#6B7280" }} />
              <span
                className="text-[10px] uppercase tracking-widest font-mono"
                style={{
                  color: "#6B7280",
                  writingMode: "vertical-rl",
                  transform: "rotate(180deg)",
                }}
              >
                Chat
              </span>
            </div>
          )}
        </div>

        {/* ── Video Panel — hidden below lg (1024px) ── */}
        <div
          className="relative shrink-0 border-l hidden lg:block transition-all duration-300"
          style={{
            width: videoVisible ? PANEL_WIDTH : COLLAPSED_WIDTH,
            borderColor: "rgba(255,255,255,0.08)",
            backgroundColor: "#0A0A0E",
          }}
        >
          <PanelToggle
            onClick={() => setVideoVisible((v) => !v)}
            label={videoVisible ? "Colapsar video" : "Expandir video"}
            icon={Video}
            expanded={videoVisible}
          />

          {videoVisible ? (
            <div className="h-full flex flex-col">
              <div
                className="flex items-center gap-2 px-4 py-3 flex-shrink-0"
                style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
              >
                <Video size={14} style={{ color: "#FF6B00" }} />
                <span className="text-xs font-medium text-white">Video del Agente</span>
              </div>
              <div className="flex-1 flex items-center justify-center">
                <span
                  className="text-xs text-center px-4 font-mono"
                  style={{ color: "#6B7280" }}
                >
                  Video panel
                </span>
              </div>
            </div>
          ) : (
            <div className="h-full flex flex-col items-center justify-center gap-3">
              <Video size={14} style={{ color: "#6B7280" }} />
              <span
                className="text-[10px] uppercase tracking-widest font-mono"
                style={{
                  color: "#6B7280",
                  writingMode: "vertical-rl",
                  transform: "rotate(180deg)",
                }}
              >
                Video
              </span>
            </div>
          )}
        </div>
      </div>

      {/* ── BottomBar ── */}
      <BottomBar
        progress={progress}
        totalProgress={totalProgress}
        currentEpisode={currentEpisode}
      />
    </div>
  );
}
