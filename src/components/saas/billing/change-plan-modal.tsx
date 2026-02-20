"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import type { Plan } from "@/types";
import type { PlanTier } from "@/types";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

interface ChangePlanModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  currentPlan: PlanTier;
  plans: Plan[];
}

const PLAN_COLORS: Record<PlanTier, string> = {
  starter: "#6B7280",
  pro: "#FF6B00",
  enterprise: "#8B5CF6",
};

export function ChangePlanModal({ open, onOpenChange, currentPlan, plans }: ChangePlanModalProps) {
  const [selectedPlan, setSelectedPlan] = useState<PlanTier>(currentPlan);

  const isUpgrade = (planId: PlanTier) => {
    const tiers: PlanTier[] = ["starter", "pro", "enterprise"];
    return tiers.indexOf(planId) > tiers.indexOf(currentPlan);
  };

  const isDowngrade = (planId: PlanTier) => {
    const tiers: PlanTier[] = ["starter", "pro", "enterprise"];
    return tiers.indexOf(planId) < tiers.indexOf(currentPlan);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-[#141418] border-white/[0.10] max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-white text-lg">Cambiar plan</DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 py-2">
          {plans.map((plan) => {
            const isSelected = selectedPlan === plan.id;
            const isCurrent = currentPlan === plan.id;
            const color = PLAN_COLORS[plan.id];

            return (
              <button
                key={plan.id}
                onClick={() => setSelectedPlan(plan.id)}
                className={cn(
                  "relative flex flex-col p-4 rounded-xl border text-left transition-all duration-150",
                  isSelected
                    ? "border-opacity-60"
                    : "border-white/[0.08] hover:border-white/20"
                )}
                style={
                  isSelected
                    ? { borderColor: `${color}60`, backgroundColor: `${color}08` }
                    : {}
                }
              >
                {isCurrent && (
                  <span className="absolute top-2 right-2 text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-white/10 text-[#9CA3AF]">
                    Actual
                  </span>
                )}

                <div className="mb-2">
                  <p className="text-sm font-bold" style={{ color }}>
                    {plan.name}
                  </p>
                  <p className="text-xl font-bold text-white mt-0.5">
                    {plan.price === 0 ? "Contactar" : `$${plan.price}`}
                    {plan.price > 0 && <span className="text-xs font-normal text-[#6B7280]">/mes</span>}
                  </p>
                </div>

                <ul className="space-y-1.5 mb-3">
                  {plan.features.slice(0, 3).map((feature) => (
                    <li key={feature} className="flex items-center gap-1.5 text-xs text-[#9CA3AF]">
                      <Check className="w-3 h-3 flex-shrink-0" style={{ color }} />
                      <span className="truncate">{feature}</span>
                    </li>
                  ))}
                </ul>

                {isSelected && (
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center ml-auto"
                    style={{ backgroundColor: color }}
                  >
                    <Check className="w-3 h-3 text-white" />
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {selectedPlan !== currentPlan && (
          <div className="p-3 rounded-lg bg-white/[0.03] border border-white/[0.06] text-xs text-[#9CA3AF]">
            {isUpgrade(selectedPlan) ? (
              <span>
                Al subir a <strong className="text-white">{selectedPlan}</strong> se aplicará un cargo proporcional por los días restantes del ciclo actual.
              </span>
            ) : isDowngrade(selectedPlan) ? (
              <span>
                Al bajar a <strong className="text-white">{selectedPlan}</strong> el cambio se aplicará al inicio del próximo ciclo de facturación.
              </span>
            ) : null}
          </div>
        )}

        <DialogFooter className="gap-2">
          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
            className="border-white/10 text-[#9CA3AF] hover:text-white"
            size="sm"
          >
            Cancelar
          </Button>
          <Button
            disabled={selectedPlan === currentPlan}
            onClick={() => onOpenChange(false)}
            className="text-white font-semibold"
            style={{ backgroundColor: "#FF6B00" }}
            size="sm"
          >
            Confirmar cambio
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
