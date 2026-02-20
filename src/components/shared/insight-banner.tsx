import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface InsightBannerProps {
  children: ReactNode;
  agentName?: string;
  className?: string;
}

export function InsightBanner({ children, agentName, className }: InsightBannerProps) {
  return (
    <div
      className={cn("rounded-md p-4", className)}
      style={{
        borderLeft: "3px solid var(--agent-color, #FF6B00)",
        backgroundColor: "var(--agent-color-10, rgba(255,107,0,0.10))",
      }}
    >
      <div className="flex items-center gap-2 mb-2">
        <span
          className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold"
          style={{
            backgroundColor: "var(--agent-color-20, rgba(255,107,0,0.20))",
            color: "var(--agent-color, #FF6B00)",
          }}
        >
          ⚡ INSIGHT
        </span>
        {agentName && (
          <span className="text-xs text-[#9CA3AF]">{agentName}</span>
        )}
      </div>
      <div className="text-sm text-[#E5E5E5]">{children}</div>
    </div>
  );
}
