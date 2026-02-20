"use client";

import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/shared/glass-card";

interface Integration {
  id: string;
  name: string;
  description: string;
  emoji: string;
  connected: boolean;
  requiresPro: boolean;
}

const INTEGRATIONS: Integration[] = [
  {
    id: "zapier",
    name: "Zapier",
    description: "Conecta tu academia con más de 5,000 apps y automatiza flujos de trabajo.",
    emoji: "⚡",
    connected: false,
    requiresPro: true,
  },
  {
    id: "notion",
    name: "Notion",
    description: "Sincroniza tus entregables y planes directamente a tu workspace de Notion.",
    emoji: "📝",
    connected: false,
    requiresPro: true,
  },
  {
    id: "slack",
    name: "Slack",
    description: "Recibe notificaciones de progreso y alertas de agentes en tus canales.",
    emoji: "💬",
    connected: false,
    requiresPro: true,
  },
  {
    id: "google-drive",
    name: "Google Drive",
    description: "Exporta y guarda tus entregables automáticamente en Google Drive.",
    emoji: "📁",
    connected: false,
    requiresPro: true,
  },
];

interface TabIntegrationsProps {
  userPlan: "starter" | "pro" | "enterprise";
}

export function TabIntegrations({ userPlan }: TabIntegrationsProps) {
  const canConnect = userPlan === "pro" || userPlan === "enterprise";

  return (
    <div className="flex flex-col gap-6">
      <GlassCard className="p-5">
        <h3 className="text-sm font-semibold text-white mb-1">Integraciones</h3>
        <p className="text-xs text-[#9CA3AF] mb-5">
          Conecta tu academia con tus herramientas favoritas. Disponible en plan Pro y Enterprise.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {INTEGRATIONS.map((integration) => (
            <div
              key={integration.id}
              className="glass-card p-4 rounded-xl flex flex-col gap-3"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-xl">
                    {integration.emoji}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-semibold text-white">{integration.name}</p>
                      <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-[#FF6B00]/15 text-[#FF6B00] border border-[#FF6B00]/30">
                        PRO
                      </span>
                    </div>
                  </div>
                </div>
                {integration.connected && (
                  <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/20">
                    Conectado
                  </span>
                )}
              </div>

              <p className="text-xs text-[#9CA3AF] leading-relaxed">{integration.description}</p>

              <Button
                size="sm"
                disabled={!canConnect}
                className="w-full text-xs font-semibold"
                style={canConnect ? { backgroundColor: "#FF6B00", color: "white" } : undefined}
                variant={canConnect ? "default" : "outline"}
              >
                {!canConnect ? "Requiere plan Pro" : integration.connected ? "Desconectar" : "Conectar"}
              </Button>
            </div>
          ))}
        </div>

        {!canConnect && (
          <div className="mt-4 p-4 rounded-xl border border-[#FF6B00]/20 bg-[#FF6B00]/5 text-center">
            <p className="text-sm text-[#FF8C33] font-medium">Actualiza a Pro para desbloquear integraciones</p>
            <p className="text-xs text-[#9CA3AF] mt-1">Conecta Zapier, Notion, Slack y más desde $129/mes.</p>
          </div>
        )}
      </GlassCard>
    </div>
  );
}
