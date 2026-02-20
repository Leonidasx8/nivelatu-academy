"use client";

import { useRef, useEffect, useState } from "react";
import { Send } from "lucide-react";
import { AGENTS } from "@/lib/constants";
import type { AgentId } from "@/types";
import type { ChatMessage } from "@/types/sostac";
import { cn } from "@/lib/utils";
import { ChatBubble } from "./chat-bubble";
import { TypingIndicator } from "./typing-indicator";

interface ChatPanelProps {
  messages: ChatMessage[];
  agentId: AgentId;
  onSend: (msg: string) => void;
  isTyping?: boolean;
  className?: string;
}

export function ChatPanel({ messages, agentId, onSend, isTyping = false, className }: ChatPanelProps) {
  const agent = AGENTS[agentId];
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSend = () => {
    const trimmed = inputValue.trim();
    if (!trimmed) return;
    onSend(trimmed);
    setInputValue("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div
      className={cn("flex flex-col", className)}
      style={{
        width: "300px",
        backgroundColor: "#141418",
        borderLeft: "1px solid rgba(255,255,255,0.08)",
        height: "100%",
      }}
    >
      <div
        className="flex items-center gap-2.5 px-3 py-3 flex-shrink-0"
        style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
      >
        <div
          className="flex items-center justify-center rounded-full text-lg flex-shrink-0"
          style={{
            width: "36px",
            height: "36px",
            backgroundColor: "var(--agent-color-10, rgba(255,107,0,0.10))",
            border: "1px solid var(--agent-color-20, rgba(255,107,0,0.20))",
          }}
        >
          {agent.emoji}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-white">{agent.name}</p>
          {isTyping ? (
            <p className="text-xs" style={{ color: "var(--agent-color, #FF6B00)" }}>
              Analizando...
            </p>
          ) : (
            <div className="flex items-center gap-1.5">
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: "#10B981" }}
              />
              <span className="text-xs text-[#9CA3AF]">En línea</span>
            </div>
          )}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-3 py-3 flex flex-col gap-3 min-h-0">
        {messages.map((msg) => (
          <ChatBubble key={msg.id} message={msg} />
        ))}
        {isTyping && (
          <div className="flex items-end gap-2">
            <div
              className="flex-shrink-0 flex items-center justify-center rounded-full text-sm"
              style={{
                width: "28px",
                height: "28px",
                backgroundColor: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.10)",
              }}
            >
              {agent.emoji}
            </div>
            <div
              className="glass-card px-3 py-2.5"
              style={{ borderRadius: "2px 12px 12px 12px" }}
            >
              <TypingIndicator />
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div
        className="flex items-center gap-2 px-3 py-2.5 flex-shrink-0"
        style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
      >
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Escribe tu mensaje..."
          className="flex-1 glass-input glass-input-agent px-3 py-2 rounded-md text-sm text-white placeholder:text-[#6B7280] outline-none"
        />
        <button
          type="button"
          onClick={handleSend}
          disabled={!inputValue.trim()}
          className="flex-shrink-0 flex items-center justify-center rounded-md transition-all duration-150 disabled:opacity-40 disabled:cursor-not-allowed"
          style={{
            width: "36px",
            height: "36px",
            backgroundColor: "var(--agent-color, #FF6B00)",
          }}
        >
          <Send size={16} className="text-white" />
        </button>
      </div>
    </div>
  );
}
