import { GlassCard } from "@/components/shared/glass-card";
import { Button } from "@/components/ui/button";
import type { PlanTier } from "@/types";
import { Zap, Calendar } from "lucide-react";

interface CurrentPlanCardProps {
  plan: PlanTier;
  price: number;
  nextBillingDate: string;
  onChangePlan: () => void;
  onCancel: () => void;
}

const PLAN_COLORS: Record<PlanTier, string> = {
  starter: "#6B7280",
  pro: "#FF6B00",
  enterprise: "#8B5CF6",
};

const PLAN_LABELS: Record<PlanTier, string> = {
  starter: "Starter",
  pro: "Pro",
  enterprise: "Enterprise",
};

export function CurrentPlanCard({ plan, price, nextBillingDate, onChangePlan, onCancel }: CurrentPlanCardProps) {
  const color = PLAN_COLORS[plan];

  const formattedDate = new Date(nextBillingDate).toLocaleDateString("es-ES", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <GlassCard className="p-5">
      <p className="text-xs font-medium text-[#9CA3AF] uppercase tracking-wide mb-3">Plan actual</p>

      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Zap className="w-5 h-5" style={{ color }} />
            <h2 className="text-2xl font-bold" style={{ color }}>
              {PLAN_LABELS[plan]}
            </h2>
          </div>
          <p className="text-3xl font-bold text-white">
            ${price}
            <span className="text-base font-normal text-[#9CA3AF]">/mes</span>
          </p>
        </div>

        <div
          className="px-3 py-1.5 rounded-full text-xs font-bold"
          style={{
            backgroundColor: `${color}15`,
            color: color,
            border: `1px solid ${color}30`,
          }}
        >
          Activo
        </div>
      </div>

      <div className="flex items-center gap-2 mb-5 text-xs text-[#9CA3AF]">
        <Calendar className="w-3.5 h-3.5" />
        <span>Próxima facturación: <span className="text-white font-medium">{formattedDate}</span></span>
      </div>

      <div className="flex flex-wrap gap-3">
        <Button
          onClick={onChangePlan}
          className="text-white font-semibold"
          style={{ backgroundColor: "#FF6B00" }}
          size="sm"
        >
          Cambiar plan
        </Button>
        <Button
          onClick={onCancel}
          variant="outline"
          size="sm"
          className="border-[#EF4444]/30 text-[#EF4444] hover:bg-[#EF4444]/10 hover:border-[#EF4444]/50 font-semibold"
        >
          Cancelar suscripción
        </Button>
      </div>
    </GlassCard>
  );
}
