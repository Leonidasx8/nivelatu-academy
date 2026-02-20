import { AGENTS } from "@/lib/constants";
import type { ChatMessage } from "@/types/sostac";
import { cn } from "@/lib/utils";

interface ChatBubbleProps {
  message: ChatMessage;
  className?: string;
}

function formatTime(timestamp: string) {
  return new Date(timestamp).toLocaleTimeString("es-ES", {
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function ChatBubble({ message, className }: ChatBubbleProps) {
  const isUser = message.role === "user";
  const isInsight = message.role === "insight";
  const isAgent = message.role === "agent";
  const agent = message.agentId ? AGENTS[message.agentId] : null;

  if (isInsight) {
    return (
      <div
        className={cn("px-3 py-2.5 rounded-md", className)}
        style={{
          borderLeft: "3px solid var(--agent-color, #FF6B00)",
          backgroundColor: "var(--agent-color-10, rgba(255,107,0,0.10))",
          maxWidth: "80%",
        }}
      >
        <div className="flex items-center gap-1.5 mb-1.5">
          <span
            className="inline-flex items-center px-1.5 py-0.5 rounded text-xs font-semibold"
            style={{
              backgroundColor: "var(--agent-color-20, rgba(255,107,0,0.20))",
              color: "var(--agent-color, #FF6B00)",
            }}
          >
            ⚡ INSIGHT
          </span>
        </div>
        <p className="text-xs text-[#E5E5E5] leading-relaxed">{message.content}</p>
        <p className="text-[10px] text-[#6B7280] mt-1.5">{formatTime(message.timestamp)}</p>
      </div>
    );
  }

  if (isUser) {
    return (
      <div className={cn("flex justify-end", className)}>
        <div
          className="px-3 py-2.5 rounded-lg"
          style={{
            maxWidth: "80%",
            backgroundColor: "var(--agent-color-15, rgba(255,107,0,0.15))",
            borderRadius: "12px 2px 12px 12px",
            border: "1px solid var(--agent-color-20, rgba(255,107,0,0.20))",
          }}
        >
          <p className="text-sm text-white leading-relaxed">{message.content}</p>
          <p className="text-[10px] text-[#6B7280] mt-1 text-right">{formatTime(message.timestamp)}</p>
        </div>
      </div>
    );
  }

  return (
    <div className={cn("flex items-end gap-2", className)}>
      {agent && (
        <div className="flex-shrink-0 flex items-center justify-center rounded-full text-sm"
          style={{
            width: "28px",
            height: "28px",
            backgroundColor: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.10)",
          }}
        >
          {agent.emoji}
        </div>
      )}
      <div
        className="glass-card px-3 py-2.5"
        style={{
          maxWidth: "80%",
          borderRadius: "2px 12px 12px 12px",
        }}
      >
        <p className="text-sm text-[#E5E5E5] leading-relaxed">{message.content}</p>
        <p className="text-[10px] text-[#6B7280] mt-1.5">{formatTime(message.timestamp)}</p>
      </div>
    </div>
  );
}
