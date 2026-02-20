import { GlassCard } from "@/components/shared/glass-card";
import { TrendingUp, TrendingDown, Users, BookOpen, FileCheck, DollarSign } from "lucide-react";

interface KPICardProps {
  title: string;
  value: string;
  trend: number;
  icon: React.ReactNode;
  color: string;
}

function KPICard({ title, value, trend, icon, color }: KPICardProps) {
  const isPositive = trend >= 0;

  return (
    <GlassCard className="p-5">
      <div className="flex items-start justify-between mb-3">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center"
          style={{ backgroundColor: `${color}15`, border: `1px solid ${color}25` }}
        >
          <span style={{ color }}>{icon}</span>
        </div>
        <div
          className="flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full"
          style={{
            backgroundColor: isPositive ? "rgba(16,185,129,0.10)" : "rgba(239,68,68,0.10)",
            color: isPositive ? "#10B981" : "#EF4444",
          }}
        >
          {isPositive ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
          {isPositive ? "+" : ""}{trend}%
        </div>
      </div>
      <p className="text-2xl font-bold text-white mb-0.5">{value}</p>
      <p className="text-xs text-[#9CA3AF]">{title}</p>
    </GlassCard>
  );
}

export function AdminAnalytics() {
  const kpis: KPICardProps[] = [
    {
      title: "Total Usuarios",
      value: "1,284",
      trend: 12,
      icon: <Users className="w-5 h-5" />,
      color: "#3B82F6",
    },
    {
      title: "Academias Activas",
      value: "847",
      trend: 8,
      icon: <BookOpen className="w-5 h-5" />,
      color: "#10B981",
    },
    {
      title: "Entregables Aprobados",
      value: "3,492",
      trend: 23,
      icon: <FileCheck className="w-5 h-5" />,
      color: "#FF6B00",
    },
    {
      title: "Revenue (MRR)",
      value: "$42,180",
      trend: 15,
      icon: <DollarSign className="w-5 h-5" />,
      color: "#8B5CF6",
    },
  ];

  return (
    <div className="flex flex-col gap-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpis.map((kpi) => (
          <KPICard key={kpi.title} {...kpi} />
        ))}
      </div>

      <GlassCard className="p-5">
        <p className="text-xs font-medium text-[#9CA3AF] uppercase tracking-wide mb-4">Actividad por fase SOSTAC</p>
        <div className="flex flex-col gap-3">
          {[
            { phase: "S", label: "Situacional", count: 524, color: "#3B82F6" },
            { phase: "O", label: "Objetivos", count: 198, color: "#F59E0B" },
            { phase: "ST", label: "Estrategia", count: 87, color: "#10B981" },
            { phase: "T", label: "Tácticas", count: 43, color: "#EF4444" },
            { phase: "A", label: "Acción", count: 18, color: "#8B5CF6" },
            { phase: "C", label: "Control", count: 7, color: "#06B6D4" },
          ].map(({ phase, label, count, color }) => {
            const maxCount = 524;
            const pct = Math.round((count / maxCount) * 100);

            return (
              <div key={phase} className="flex items-center gap-3">
                <div
                  className="w-6 h-6 rounded-md flex items-center justify-center text-[10px] font-bold flex-shrink-0"
                  style={{ backgroundColor: `${color}20`, color }}
                >
                  {phase}
                </div>
                <span className="text-xs text-[#9CA3AF] w-20 flex-shrink-0">{label}</span>
                <div className="flex-1 h-1.5 rounded-full bg-[#1A1A20] overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{ width: `${pct}%`, backgroundColor: color }}
                  />
                </div>
                <span className="text-xs font-semibold text-white w-10 text-right flex-shrink-0">{count}</span>
              </div>
            );
          })}
        </div>
      </GlassCard>
    </div>
  );
}
