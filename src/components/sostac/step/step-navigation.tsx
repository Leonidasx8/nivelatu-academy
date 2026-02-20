"use client";

import { ChevronLeft, ChevronRight, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface StepNavigationProps {
  onPrevious: () => void;
  onNext: () => void;
  canGoNext: boolean;
  isFirst: boolean;
  isLast: boolean;
}

export function StepNavigation({
  onPrevious,
  onNext,
  canGoNext,
  isFirst,
  isLast,
}: StepNavigationProps) {
  return (
    <div className="flex items-center justify-between gap-4 pt-6 mt-6 border-t border-[rgba(255,255,255,0.08)]">
      {/* Previous */}
      {!isFirst ? (
        <button
          type="button"
          onClick={onPrevious}
          className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium text-[#E5E5E5] transition-all duration-150"
          style={{
            border: "1px solid rgba(255,255,255,0.12)",
            backgroundColor: "rgba(255,255,255,0.03)",
          }}
        >
          <ChevronLeft size={16} />
          Anterior
        </button>
      ) : (
        <div />
      )}

      {/* Next / Finish */}
      <button
        type="button"
        onClick={onNext}
        disabled={!canGoNext}
        className={cn(
          "flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white transition-all duration-150",
          "disabled:opacity-40 disabled:cursor-not-allowed"
        )}
        style={{
          backgroundColor: canGoNext ? "var(--agent-color, #FF6B00)" : "#2A2A30",
          boxShadow: canGoNext ? "0 4px 16px var(--agent-color-30, rgba(255,107,0,0.30))" : undefined,
        }}
      >
        {isLast ? (
          <>
            <CheckCircle size={16} />
            Finalizar módulo
          </>
        ) : (
          <>
            Siguiente
            <ChevronRight size={16} />
          </>
        )}
      </button>
    </div>
  );
}
