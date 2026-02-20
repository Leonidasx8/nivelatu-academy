import { cn } from "@/lib/utils";

interface ProgressBarProps {
  value: number;
  agentColor?: boolean;
  showPercent?: boolean;
  className?: string;
}

export function ProgressBar({ value, agentColor = false, showPercent = false, className }: ProgressBarProps) {
  const clamped = Math.min(100, Math.max(0, value));

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div
        className="flex-1 rounded-full overflow-hidden"
        style={{ height: "6px", backgroundColor: "#1A1A20" }}
      >
        <div
          className="h-full rounded-full transition-all duration-200 ease-out"
          style={{
            width: `${clamped}%`,
            backgroundColor: agentColor ? "var(--agent-color, #FF6B00)" : "#FF6B00",
          }}
        />
      </div>
      {showPercent && (
        <span className="text-xs font-medium text-[#9CA3AF] flex-shrink-0 w-8 text-right">
          {clamped}%
        </span>
      )}
    </div>
  );
}
