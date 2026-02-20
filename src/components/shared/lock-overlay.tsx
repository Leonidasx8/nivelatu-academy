import { cn } from "@/lib/utils";

interface LockOverlayProps {
  message?: string;
  className?: string;
}

export function LockOverlay({ message, className }: LockOverlayProps) {
  return (
    <div
      className={cn(
        "absolute inset-0 flex flex-col items-center justify-center gap-2 rounded-lg",
        className
      )}
      style={{
        backgroundColor: "rgba(0,0,0,0.60)",
        backdropFilter: "blur(4px)",
        zIndex: 10,
      }}
    >
      <span className="text-2xl">🔒</span>
      {message && (
        <p className="text-sm text-[#9CA3AF] text-center max-w-[200px]">{message}</p>
      )}
    </div>
  );
}
