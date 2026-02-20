"use client";

import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { GlassCard } from "@/components/shared/glass-card";
import { Separator } from "@/components/ui/separator";
import { Server, Shield, Activity } from "lucide-react";

interface FeatureFlag {
  key: string;
  label: string;
  description: string;
  enabled: boolean;
  warning?: string;
}

const INITIAL_FLAGS: FeatureFlag[] = [
  {
    key: "maintenance_mode",
    label: "Modo mantenimiento",
    description: "Desactiva el acceso a la plataforma para todos los usuarios excepto admins.",
    enabled: false,
    warning: "Activar esto bloqueará el acceso a todos los usuarios.",
  },
  {
    key: "open_registration",
    label: "Registro abierto",
    description: "Permite que nuevos usuarios se registren en la plataforma.",
    enabled: true,
  },
  {
    key: "public_api",
    label: "API pública",
    description: "Habilita el acceso a la API REST pública para integraciones externas.",
    enabled: false,
  },
];

const SYSTEM_INFO = [
  { label: "Versión", value: "1.4.2", icon: Shield },
  { label: "Uptime", value: "99.94%", icon: Activity },
  { label: "Entorno", value: "Production", icon: Server },
  { label: "Región", value: "us-east-1 / sa-east-1", icon: Server },
  { label: "Última actualización", value: "19 feb 2026, 03:00 UTC", icon: Activity },
  { label: "Usuarios en línea", value: "142", icon: Activity },
];

export function AdminSystem() {
  const [flags, setFlags] = useState<FeatureFlag[]>(INITIAL_FLAGS);

  const toggle = (key: string) => {
    setFlags((prev) =>
      prev.map((f) => (f.key === key ? { ...f, enabled: !f.enabled } : f))
    );
  };

  return (
    <div className="flex flex-col gap-5">
      {/* Feature flags */}
      <GlassCard className="p-5">
        <p className="text-xs font-medium text-[#9CA3AF] uppercase tracking-wide mb-4">Feature flags</p>
        <div className="flex flex-col gap-1">
          {flags.map((flag, index) => (
            <div key={flag.key}>
              <div className="flex items-start justify-between gap-4 p-3 rounded-lg hover:bg-white/[0.02] transition-colors">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-medium text-white">{flag.label}</p>
                    {flag.enabled && (
                      <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/20">
                        ON
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-[#6B7280] mt-0.5">{flag.description}</p>
                  {flag.warning && flag.enabled && (
                    <p className="text-xs text-[#EF4444] mt-1 font-medium">{flag.warning}</p>
                  )}
                </div>
                <Switch
                  checked={flag.enabled}
                  onCheckedChange={() => toggle(flag.key)}
                  className="data-[state=checked]:bg-[#FF6B00] flex-shrink-0 mt-0.5"
                />
              </div>
              {index < flags.length - 1 && <Separator className="bg-white/[0.04] mx-3" />}
            </div>
          ))}
        </div>
      </GlassCard>

      {/* System info */}
      <GlassCard className="p-5">
        <p className="text-xs font-medium text-[#9CA3AF] uppercase tracking-wide mb-4">Información del sistema</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {SYSTEM_INFO.map(({ label, value }) => (
            <div
              key={label}
              className="flex items-center justify-between p-3 rounded-lg bg-white/[0.02] border border-white/[0.06]"
            >
              <span className="text-xs text-[#9CA3AF]">{label}</span>
              <span className="text-xs font-semibold text-white font-mono">{value}</span>
            </div>
          ))}
        </div>
      </GlassCard>
    </div>
  );
}
