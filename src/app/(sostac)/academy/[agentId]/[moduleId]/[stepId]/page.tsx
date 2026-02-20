"use client";

import { use, useState } from "react";
import { useRouter } from "next/navigation";
import { AGENTS } from "@/lib/constants";
import { forgeModules, atlasModules, sampleSteps, sampleEpisodes, sampleChatMessages } from "@/data/mock-sostac";
import { StepWorkspace } from "@/components/sostac/step/step-workspace";
import type { AgentId } from "@/types";
import type { Module, ChatMessage } from "@/types/sostac";

interface StepViewPageProps {
  params: Promise<{ agentId: string; moduleId: string; stepId: string }>;
}

function getModules(agentId: string): Module[] {
  switch (agentId) {
    case "forge":
      return forgeModules;
    case "atlas":
      return atlasModules;
    default:
      return [];
  }
}

export default function StepViewPage({ params }: StepViewPageProps) {
  const { agentId, moduleId, stepId } = use(params);
  const router = useRouter();
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>(sampleChatMessages);

  const agent = AGENTS[agentId as AgentId];
  const modules = getModules(agentId);
  const module = modules.find((m) => m.id === moduleId) ?? modules[0];

  // Resolve step order from stepId param
  const orderMatch = stepId.match(/paso-(\d+)/);
  const currentOrder = orderMatch ? parseInt(orderMatch[1], 10) : 1;

  const step = sampleSteps.find(
    (s) => s.moduleId === moduleId && s.order === currentOrder
  ) ?? sampleSteps.find((s) => s.moduleId === moduleId);

  const totalSteps = module?.totalSteps ?? 1;

  const handleSend = (msg: string) => {
    const newMsg: ChatMessage = {
      id: `msg-user-${Date.now()}`,
      role: "user",
      content: msg,
      timestamp: new Date().toISOString(),
    };
    setChatMessages((prev) => [...prev, newMsg]);
  };

  const handlePrevious = () => {
    if (currentOrder > 1) {
      router.push(`/academy/${agentId}/${moduleId}/paso-${currentOrder - 1}`);
    }
  };

  const handleNext = () => {
    if (currentOrder < totalSteps) {
      router.push(`/academy/${agentId}/${moduleId}/paso-${currentOrder + 1}`);
    } else {
      router.push(`/academy/${agentId}`);
    }
  };

  if (!agent || !module || !step) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-[#9CA3AF]">Paso no encontrado.</p>
      </div>
    );
  }

  return (
    <StepWorkspace
      module={module}
      step={step}
      stepIndex={currentOrder}
      onPrevious={handlePrevious}
      onNext={handleNext}
      isFirst={currentOrder === 1}
      isLast={currentOrder === totalSteps}
      chatMessages={chatMessages}
      agentId={agentId as AgentId}
      onSendMessage={handleSend}
      episodes={sampleEpisodes}
    />
  );
}
