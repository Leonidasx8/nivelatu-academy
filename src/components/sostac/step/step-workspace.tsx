"use client";

import { useState } from "react";
import { WorkspacePanel } from "./workspace-panel";
import { ChatPanel } from "@/components/shared/chat/chat-panel";
import { VideoPodcastPanel } from "./video-podcast-panel";
import { ToggleColumn } from "./toggle-column";
import { ChatMinimizedBar } from "./chat-minimized-bar";
import { VideoPiP } from "./video-pip";
import { MobileTabBar } from "./mobile-tab-bar";
import type { AgentId } from "@/types";
import type { Module, Step, Episode, ChatMessage } from "@/types/sostac";

type PanelMode = "expanded" | "minimized" | "hidden";

interface StepWorkspaceProps {
  module: Module;
  step: Step;
  stepIndex: number;
  onPrevious: () => void;
  onNext: () => void;
  isFirst: boolean;
  isLast: boolean;
  chatMessages: ChatMessage[];
  agentId: AgentId;
  onSendMessage: (msg: string) => void;
  episodes: Episode[];
}

function cycleMode(prev: PanelMode): PanelMode {
  if (prev === "expanded") return "minimized";
  if (prev === "minimized") return "hidden";
  return "expanded";
}

export function StepWorkspace({
  module,
  step,
  stepIndex,
  onPrevious,
  onNext,
  isFirst,
  isLast,
  chatMessages,
  agentId,
  onSendMessage,
  episodes,
}: StepWorkspaceProps) {
  const [chatMode, setChatMode] = useState<PanelMode>("expanded");
  const [videoMode, setVideoMode] = useState<PanelMode>("expanded");
  const [mobileActivePanel, setMobileActivePanel] = useState<"form" | "chat" | "video">("form");

  const chatExpanded = chatMode === "expanded";
  const videoExpanded = videoMode === "expanded";
  const bothExpanded = chatExpanded && videoExpanded;

  // Form goes compact (sidebar 280px) when another panel is expanded alongside it
  const formCompact = chatExpanded || videoExpanded;

  // A panel takes flex-1 when it's the only expanded side panel
  const chatFlex = chatExpanded && !videoExpanded;
  const videoFlex = videoExpanded && !chatExpanded;

  // Last chat message for minimized bar
  const lastMessage = chatMessages.length > 0
    ? chatMessages[chatMessages.length - 1]?.content
    : undefined;

  // Active episode for PiP
  const activeEpisode = episodes.find((e) => e.status === "active") ?? episodes[0];

  return (
    <div data-agent={agentId} className="flex flex-col h-full overflow-hidden">
      {/* ═══ DESKTOP LAYOUT (lg+) ═══ */}
      <div className="hidden lg:flex flex-col flex-1 overflow-hidden">
        {/* Chat minimized bar — shown between top bar and main area */}
        {chatMode === "minimized" && (
          <ChatMinimizedBar
            agentId={agentId}
            lastMessage={lastMessage}
            onExpand={() => setChatMode("expanded")}
          />
        )}

        {/* Main panel area */}
        <div className="flex flex-row flex-1 overflow-hidden relative">
          {/* Toggle Column */}
          <ToggleColumn
            chatMode={chatMode}
            videoMode={videoMode}
            onToggleChat={() => setChatMode(cycleMode)}
            onToggleVideo={() => setVideoMode(cycleMode)}
          />

          {/* Form Panel — always visible */}
          <div
            className={
              formCompact
                ? "w-[280px] shrink-0 overflow-hidden"
                : "flex-1 overflow-hidden"
            }
            style={formCompact ? { borderRight: "1px solid #2A2A2A" } : undefined}
          >
            <WorkspacePanel
              module={module}
              step={step}
              stepIndex={stepIndex}
              onPrevious={onPrevious}
              onNext={onNext}
              isFirst={isFirst}
              isLast={isLast}
              mode={formCompact ? "compact" : "full"}
            />
          </div>

          {/* Chat Panel — only when expanded */}
          {chatExpanded && (
            <div
              className={chatFlex ? "flex-1 overflow-hidden" : "shrink-0 overflow-hidden"}
              style={bothExpanded ? { width: "380px" } : undefined}
            >
              <ChatPanel
                messages={chatMessages}
                agentId={agentId}
                onSend={onSendMessage}
              />
            </div>
          )}

          {/* Video Panel — only when expanded */}
          {videoExpanded && (
            <div
              className={videoFlex ? "flex-1 overflow-hidden" : "shrink-0 overflow-hidden"}
              style={bothExpanded ? { width: "340px" } : undefined}
            >
              <VideoPodcastPanel episodes={episodes} />
            </div>
          )}

          {/* Video PiP — floating overlay when minimized */}
          {videoMode === "minimized" && (
            <VideoPiP
              episode={activeEpisode}
              onClose={() => setVideoMode("hidden")}
              onExpand={() => setVideoMode("expanded")}
            />
          )}
        </div>
      </div>

      {/* ═══ MOBILE LAYOUT (<lg) ═══ */}
      <div className="flex lg:hidden flex-col flex-1 overflow-hidden">
        {/* Single active panel */}
        <div className="flex-1 overflow-hidden">
          {mobileActivePanel === "form" && (
            <WorkspacePanel
              module={module}
              step={step}
              stepIndex={stepIndex}
              onPrevious={onPrevious}
              onNext={onNext}
              isFirst={isFirst}
              isLast={isLast}
            />
          )}
          {mobileActivePanel === "chat" && (
            <ChatPanel
              messages={chatMessages}
              agentId={agentId}
              onSend={onSendMessage}
              className="border-l-0"
            />
          )}
          {mobileActivePanel === "video" && (
            <VideoPodcastPanel
              episodes={episodes}
              className="border-l-0"
            />
          )}
        </div>

        {/* Mobile Bottom Tab Bar */}
        <MobileTabBar
          activePanel={mobileActivePanel}
          onChangePanel={setMobileActivePanel}
          agentName={module.agentId === "forge" ? "Forge" : module.agentId === "atlas" ? "Atlas" : undefined}
        />
      </div>
    </div>
  );
}
