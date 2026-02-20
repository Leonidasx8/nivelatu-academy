import { GlassCard } from "@/components/shared/glass-card";
import { TrendingUp, TrendingDown } from "lucide-react";

interface BillingMetricProps {
  title: string;
  value: string;
  subtitle: string;
  trend?: number;
  color: string;
}

function BillingMetric({ title, value, subtitle, trend, color }: BillingMetricProps) {
  return (
    <GlassCard className="p-5">
      <p className="text-xs font-medium text-[#9CA3AF] uppercase tracking-wide mb-3">{title}</p>
      <p className="text-3xl font-bold text-white mb-1">{value}</p>
      <div className="flex items-center justify-between">
        <p className="text-xs text-[#9CA3AF]">{subtitle}</p>
        {trend !== undefined && (
          <div
            className="flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full"
            style={{
              backgroundColor: trend >= 0 ? "rgba(16,185,129,0.10)" : "rgba(239,68,68,0.10)",
              color: trend >= 0 ? "#10B981" : "#EF4444",
            }}
          >
            {trend >= 0 ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
            {trend >= 0 ? "+" : ""}{trend}%
          </div>
        )}
      </div>
    </GlassCard>
  );
}

export function AdminBilling() {
  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <BillingMetric
          title="MRR"
          value="$42,180"
          subtitle="Monthly Recurring Revenue"
          trend={15}
          color="#10B981"
        />
        <BillingMetric
          title="Suscripciones activas"
          value="847"
          subtitle="Usuarios con plan pagado"
          trend={8}
          color="#3B82F6"
        />
        <BillingMetric
          title="Churn Rate"
          value="2.4%"
          subtitle="Cancelaciones este mes"
          trend={-1}
          color="#EF4444"
        />
      </div>

      <GlassCard className="p-5">
        <p className="text-xs font-medium text-[#9CA3AF] uppercase tracking-wide mb-4">Distribución por plan</p>
        <div className="flex flex-col gap-3">
          {[
            { plan: "Starter", count: 412, price: 49, color: "#6B7280" },
            { plan: "Pro", count: 380, price: 129, color: "#FF6B00" },
            { plan: "Enterprise", count: 55, price: 499, color: "#8B5CF6" },
          ].map(({ plan, count, price, color }) => {
            const total = 412 + 380 + 55;
            const pct = Math.round((count / total) * 100);
            const mrr = count * price;

            return (
              <div key={plan} className="flex items-center gap-3">
                <div
                  className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                  style={{ backgroundColor: color }}
                />
                <span className="text-sm font-medium text-white w-20 flex-shrink-0">{plan}</span>
                <div className="flex-1 h-1.5 rounded-full bg-[#1A1A20] overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{ width: `${pct}%`, backgroundColor: color }}
                  />
                </div>
                <span className="text-xs text-[#9CA3AF] w-8 text-right flex-shrink-0">{count}</span>
                <span className="text-xs font-semibold text-white w-20 text-right flex-shrink-0">
                  ${mrr.toLocaleString()}
                </span>
              </div>
            );
          })}
        </div>
      </GlassCard>
    </div>
  );
}
