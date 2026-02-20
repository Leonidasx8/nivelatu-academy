import { GlassCard } from "@/components/shared/glass-card";
import { DeliverableCard } from "@/components/shared/deliverable-card";
import { STATUS_MAP } from "@/lib/constants";
import type { DeliverableStatus } from "@/types";
import type { Deliverable } from "@/types/saas";
import Link from "next/link";

interface DeliverablesOverviewProps {
  deliverables: Deliverable[];
}

const STATUS_ORDER: DeliverableStatus[] = ["borrador", "en_revision", "aprobado", "rehacer", "pendiente"];

export function DeliverablesOverview({ deliverables }: DeliverablesOverviewProps) {
  const statusCounts = STATUS_ORDER.reduce(
    (acc, status) => {
      const count = deliverables.filter((d) => d.status === status).length;
      if (count > 0) acc[status] = count;
      return acc;
    },
    {} as Record<DeliverableStatus, number>
  );

  const recentDeliverables = deliverables
    .slice()
    .sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime())
    .slice(0, 4);

  return (
    <GlassCard className="p-5">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-base font-semibold text-white">Entregables</h2>
        <Link
          href="/academy/deliverables"
          className="text-xs text-[#FF6B00] hover:text-[#FF8C33] transition-colors font-medium"
        >
          Ver todos →
        </Link>
      </div>

      {/* Status summary */}
      <div className="flex flex-wrap gap-2 mb-4 pb-4 border-b border-white/5">
        {(Object.entries(statusCounts) as [DeliverableStatus, number][]).map(([status, count]) => {
          const info = STATUS_MAP[status];
          return (
            <span
              key={status}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium"
              style={{
                backgroundColor: `${info.color}15`,
                color: info.color,
                border: `1px solid ${info.color}30`,
              }}
            >
              <span>{info.icon}</span>
              {count} {info.label}
            </span>
          );
        })}
      </div>

      {/* Recent deliverables */}
      <div className="flex flex-col gap-2">
        {recentDeliverables.map((deliverable) => (
          <Link key={deliverable.id} href={`/academy/deliverables/${deliverable.id}`}>
            <DeliverableCard deliverable={deliverable} />
          </Link>
        ))}
      </div>
    </GlassCard>
  );
}
