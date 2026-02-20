import { STATUS_MAP } from "@/lib/constants";
import type { DeliverableStatus } from "@/types";
import { cn } from "@/lib/utils";

interface StatusBadgeProps {
  status: DeliverableStatus;
  className?: string;
}

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const statusInfo = STATUS_MAP[status];

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium",
        className
      )}
      style={{
        backgroundColor: `${statusInfo.color}20`,
        color: statusInfo.color,
        border: `1px solid ${statusInfo.color}40`,
      }}
    >
      <span>{statusInfo.icon}</span>
      {statusInfo.label}
    </span>
  );
}
