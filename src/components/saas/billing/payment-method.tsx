import { GlassCard } from "@/components/shared/glass-card";
import { Button } from "@/components/ui/button";
import { CreditCard } from "lucide-react";

export function PaymentMethod() {
  return (
    <GlassCard className="p-5">
      <p className="text-xs font-medium text-[#9CA3AF] uppercase tracking-wide mb-3">Método de pago</p>

      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-[#1A1A20] border border-white/[0.08] flex items-center justify-center">
            <CreditCard className="w-5 h-5 text-[#3B82F6]" />
          </div>
          <div>
            <p className="text-sm font-semibold text-white">Visa terminada en 6411</p>
            <p className="text-xs text-[#6B7280] mt-0.5">Exp. 12/28</p>
          </div>
        </div>
        <span className="text-xs font-medium px-2 py-1 rounded-full bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/20">
          Principal
        </span>
      </div>

      <Button
        variant="outline"
        size="sm"
        className="border-white/10 text-[#9CA3AF] hover:text-white font-medium text-xs"
      >
        Actualizar tarjeta
      </Button>
    </GlassCard>
  );
}
