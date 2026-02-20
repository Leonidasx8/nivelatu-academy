import { cn } from "@/lib/utils";

interface TypingIndicatorProps {
  className?: string;
}

export function TypingIndicator({ className }: TypingIndicatorProps) {
  return (
    <div className={cn("flex items-center gap-1 px-2 py-1", className)}>
      {[0, 0.2, 0.4].map((delay, i) => (
        <span
          key={i}
          className="rounded-full"
          style={{
            width: "6px",
            height: "6px",
            backgroundColor: "var(--agent-color, #FF6B00)",
            animation: "typingBounce 1.5s ease infinite",
            animationDelay: `${delay}s`,
            display: "inline-block",
          }}
        />
      ))}
    </div>
  );
}
