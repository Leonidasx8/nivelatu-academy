import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  accent?: string;
}

export function GlassCard({ children, className, hover = false, accent }: GlassCardProps) {
  return (
    <div
      className={cn(
        "glass-card rounded-lg",
        hover && "glass-card-hover transition-all duration-150 cursor-pointer",
        className
      )}
      style={accent ? { borderColor: accent } : undefined}
    >
      {children}
    </div>
  );
}
