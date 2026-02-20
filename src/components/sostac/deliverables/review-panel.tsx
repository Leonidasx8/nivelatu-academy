import { GlassCard } from "@/components/shared/glass-card";
import { AGENTS, STATUS_MAP } from "@/lib/constants";
import type { Deliverable } from "@/types/saas";
import { Clock, CheckCircle, XCircle, Eye, AlertCircle } from "lucide-react";

interface ReviewPanelProps {
  deliverable: Deliverable;
}

const STATUS_ICONS = {
  borrador: Clock,
  en_revision: Eye,
  aprobado: CheckCircle,
  rehacer: XCircle,
  pendiente: AlertCircle,
};

// Simulate review history based on deliverable state
function buildReviewHistory(deliverable: Deliverable) {
  const events = [];

  events.push({
    date: deliverable.createdAt,
    status: "pendiente" as const,
    note: "Entregable creado y marcado como pendiente.",
    reviewer: "Sistema",
  });

  if (deliverable.status !== "pendiente") {
    events.push({
      date: deliverable.updatedAt,
      status: deliverable.status,
      note: deliverable.reviewNotes ?? `Estado actualizado a ${STATUS_MAP[deliverable.status].label}.`,
      reviewer: "Equipo NivelatuAcademy",
    });
  }

  return events.reverse();
}

export function ReviewPanel({ deliverable }: ReviewPanelProps) {
  const history = buildReviewHistory(deliverable);
  const currentStatusInfo = STATUS_MAP[deliverable.status];

  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-sm font-semibold text-white">Historial de revisión</h3>

      {/* Current status prominent */}
      <GlassCard className="p-4">
        <div className="flex items-center gap-3">
          <div
            className="flex items-center justify-center rounded-full flex-shrink-0"
            style={{
              width: "40px",
              height: "40px",
              backgroundColor: `${currentStatusInfo.color}15`,
              border: `1px solid ${currentStatusInfo.color}30`,
            }}
          >
            <span className="text-lg">{currentStatusInfo.icon}</span>
          </div>
          <div>
            <p className="text-xs text-[#9CA3AF]">Estado actual</p>
            <p
              className="text-base font-bold"
              style={{ color: currentStatusInfo.color }}
            >
              {currentStatusInfo.label}
            </p>
          </div>
        </div>

        {deliverable.reviewNotes && (
          <div
            className="mt-3 p-3 rounded-md text-sm text-[#E5E5E5]"
            style={{
              backgroundColor: "rgba(255,255,255,0.03)",
              borderLeft: `3px solid ${currentStatusInfo.color}`,
            }}
          >
            {deliverable.reviewNotes}
          </div>
        )}
      </GlassCard>

      {/* History timeline */}
      <div className="flex flex-col gap-3">
        {history.map((event, index) => {
          const statusInfo = STATUS_MAP[event.status];
          const StatusIcon = STATUS_ICONS[event.status];

          return (
            <div key={index} className="flex items-start gap-3">
              <div
                className="flex-shrink-0 flex items-center justify-center rounded-full mt-0.5"
                style={{
                  width: "28px",
                  height: "28px",
                  backgroundColor: `${statusInfo.color}15`,
                  border: `1px solid ${statusInfo.color}30`,
                }}
              >
                <StatusIcon size={13} style={{ color: statusInfo.color }} />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span
                    className="text-xs font-semibold"
                    style={{ color: statusInfo.color }}
                  >
                    {statusInfo.label}
                  </span>
                  <span className="text-xs text-[#6B7280]">por {event.reviewer}</span>
                </div>
                <p className="text-xs text-[#9CA3AF] mt-0.5">{event.note}</p>
                <p className="text-[10px] text-[#6B7280] mt-0.5">
                  {new Date(event.date).toLocaleDateString("es-MX", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
