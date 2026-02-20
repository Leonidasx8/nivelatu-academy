"use client";

import { useState } from "react";
import { Check, Zap } from "lucide-react";
import { plans } from "@/data/plans";
import { cn } from "@/lib/utils";

interface StepPlanProps {
  onNext: () => void;
  onBack: () => void;
}

export function StepPlan({ onNext, onBack }: StepPlanProps) {
  const [selectedPlan, setSelectedPlan] = useState<string>("pro");

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-2xl font-sans font-black text-text-primary mb-1">
          Elige tu plan
        </h2>
        <p className="text-text-secondary font-body text-sm">
          Puedes cambiar en cualquier momento
        </p>
      </div>

      {/* Compact plan cards */}
      <div className="flex flex-col gap-3">
        {plans.map((plan) => {
          const isSelected = selectedPlan === plan.id;
          const isEnterprise = plan.id === "enterprise";
          return (
            <button
              key={plan.id}
              type="button"
              onClick={() => setSelectedPlan(plan.id)}
              className={cn(
                "w-full text-left rounded-xl p-4 border transition-all duration-200 flex items-center gap-4",
                isSelected
                  ? "border-accent bg-accent/10"
                  : "border-glass-border bg-glass-bg hover:border-glass-border-hover hover:bg-glass-bg-hover"
              )}
            >
              {/* Radio circle */}
              <div
                className={cn(
                  "w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all duration-200",
                  isSelected
                    ? "border-accent bg-accent"
                    : "border-glass-border-hover"
                )}
              >
                {isSelected && <div className="w-2 h-2 rounded-full bg-white" />}
              </div>

              {/* Plan info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-text-primary font-sans font-bold text-sm">
                    {plan.name}
                  </span>
                  {plan.badge && (
                    <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-accent/20 text-accent font-bold">
                      POPULAR
                    </span>
                  )}
                </div>
                <p className="text-text-disabled font-body text-xs mt-0.5 line-clamp-1">
                  {plan.description}
                </p>
              </div>

              {/* Price */}
              <div className="text-right flex-shrink-0">
                {isEnterprise ? (
                  <span className="text-text-secondary font-body text-xs">
                    A medida
                  </span>
                ) : (
                  <>
                    <span className="text-text-primary font-sans font-black text-lg">
                      ${plan.price}
                    </span>
                    <span className="text-text-disabled font-body text-xs">/mes</span>
                  </>
                )}
              </div>
            </button>
          );
        })}
      </div>

      {/* Features preview */}
      {selectedPlan && (
        <div className="glass-card rounded-xl p-4">
          <p className="text-text-secondary font-body text-xs mb-3">
            Incluido en {plans.find((p) => p.id === selectedPlan)?.name}:
          </p>
          <div className="grid grid-cols-2 gap-2">
            {plans
              .find((p) => p.id === selectedPlan)
              ?.features.slice(0, 4)
              .map((f) => (
                <div key={f} className="flex items-center gap-1.5">
                  <Check className="w-3 h-3 text-green-400 flex-shrink-0" />
                  <span className="text-text-body font-body text-xs truncate">{f}</span>
                </div>
              ))}
          </div>
        </div>
      )}

      {/* Actions */}
      <div className="flex gap-3">
        <button
          type="button"
          onClick={onBack}
          className="flex-1 py-3.5 rounded-xl border border-glass-border text-text-secondary hover:text-text-primary hover:bg-glass-bg-hover font-sans font-semibold text-sm transition-all duration-200"
        >
          ← Volver
        </button>
        <button
          type="button"
          onClick={onNext}
          className="flex-[2] flex items-center justify-center gap-2 bg-accent hover:bg-accent-light text-white font-sans font-semibold py-3.5 rounded-xl btn-glow transition-all duration-200 text-sm"
        >
          <Zap className="w-4 h-4" />
          Crear mi academia →
        </button>
      </div>
    </div>
  );
}
