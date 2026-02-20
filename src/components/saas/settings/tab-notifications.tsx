"use client";

import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { GlassCard } from "@/components/shared/glass-card";
import type { NotificationSetting } from "@/types/saas";

const DEFAULT_NOTIFICATIONS: NotificationSetting[] = [
  { key: "deliverable_reviewed", label: "Entregable revisado", email: true, inApp: true },
  { key: "step_unlocked", label: "Paso desbloqueado", email: false, inApp: true },
  { key: "insight_available", label: "Insight disponible", email: true, inApp: true },
  { key: "weekly_report", label: "Reporte semanal", email: true, inApp: false },
  { key: "payment_reminder", label: "Recordatorio de pago", email: true, inApp: true },
  { key: "platform_updates", label: "Actualizaciones de plataforma", email: false, inApp: true },
];

export function TabNotifications() {
  const [settings, setSettings] = useState<NotificationSetting[]>(DEFAULT_NOTIFICATIONS);

  const toggle = (key: string, channel: "email" | "inApp") => {
    setSettings((prev) =>
      prev.map((s) =>
        s.key === key ? { ...s, [channel]: !s[channel] } : s
      )
    );
  };

  return (
    <div className="flex flex-col gap-6">
      <GlassCard className="p-5">
        <h3 className="text-sm font-semibold text-white mb-1">Preferencias de notificación</h3>
        <p className="text-xs text-[#9CA3AF] mb-5">
          Controla cómo y cuándo quieres recibir notificaciones.
        </p>

        {/* Header row */}
        <div className="grid grid-cols-[1fr_auto_auto] gap-4 items-center mb-3 px-1">
          <span className="text-xs font-medium text-[#6B7280] uppercase tracking-wide">Tipo de notificación</span>
          <span className="text-xs font-medium text-[#6B7280] uppercase tracking-wide w-16 text-center">Email</span>
          <span className="text-xs font-medium text-[#6B7280] uppercase tracking-wide w-16 text-center">En App</span>
        </div>

        <div className="flex flex-col gap-1">
          {settings.map((setting, index) => (
            <div
              key={setting.key}
              className="grid grid-cols-[1fr_auto_auto] gap-4 items-center p-3 rounded-lg hover:bg-white/[0.02] transition-colors"
            >
              <span className="text-sm text-white">{setting.label}</span>
              <div className="w-16 flex justify-center">
                <Switch
                  checked={setting.email}
                  onCheckedChange={() => toggle(setting.key, "email")}
                  className="data-[state=checked]:bg-[#FF6B00]"
                />
              </div>
              <div className="w-16 flex justify-center">
                <Switch
                  checked={setting.inApp}
                  onCheckedChange={() => toggle(setting.key, "inApp")}
                  className="data-[state=checked]:bg-[#FF6B00]"
                />
              </div>
            </div>
          ))}
        </div>
      </GlassCard>
    </div>
  );
}
