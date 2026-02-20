import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

const STEP_LABELS = ["Tu cuenta", "Tu perfil", "Tu plan"];

export function StepIndicator({ currentStep, totalSteps }: StepIndicatorProps) {
  return (
    <div className="flex items-center gap-0">
      {Array.from({ length: totalSteps }).map((_, i) => {
        const stepNum = i + 1;
        const isCompleted = stepNum < currentStep;
        const isActive = stepNum === currentStep;
        const isUpcoming = stepNum > currentStep;

        return (
          <div key={stepNum} className="flex items-center">
            {/* Step circle */}
            <div className="flex flex-col items-center gap-1.5">
              <div
                className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center text-xs font-sans font-bold transition-all duration-300",
                  isCompleted && "bg-green-500 text-white",
                  isActive && "bg-accent text-white shadow-[0_0_12px_rgba(255,107,0,0.4)]",
                  isUpcoming && "border-2 border-glass-border text-text-disabled bg-glass-bg"
                )}
              >
                {isCompleted ? (
                  <Check className="w-4 h-4" />
                ) : (
                  stepNum
                )}
              </div>
              <span
                className={cn(
                  "text-[10px] font-body whitespace-nowrap",
                  isActive ? "text-accent font-semibold" : "text-text-disabled"
                )}
              >
                {STEP_LABELS[i]}
              </span>
            </div>

            {/* Connector line */}
            {i < totalSteps - 1 && (
              <div
                className={cn(
                  "h-0.5 w-16 mx-2 mb-5 rounded-full transition-all duration-300",
                  isCompleted ? "bg-green-500" : "bg-glass-border"
                )}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
