"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { GlassCard } from "@/components/shared/glass-card";
import type { User } from "@/types/saas";
import { Monitor, Smartphone, Globe } from "lucide-react";

interface TabAccountProps {
  user: User;
}

const sessions = [
  { id: "ses-1", device: "MacBook Pro", location: "Ciudad de México, MX", browser: "Chrome", current: true, icon: Monitor },
  { id: "ses-2", device: "iPhone 15", location: "Ciudad de México, MX", browser: "Safari", current: false, icon: Smartphone },
  { id: "ses-3", device: "Windows PC", location: "Guadalajara, MX", browser: "Firefox", current: false, icon: Globe },
];

export function TabAccount({ user }: TabAccountProps) {
  const [twoFAEnabled, setTwoFAEnabled] = useState(false);
  const [googleConnected] = useState(true);
  const [githubConnected] = useState(false);

  return (
    <div className="flex flex-col gap-6">
      {/* Email section */}
      <GlassCard className="p-5">
        <h3 className="text-sm font-semibold text-white mb-4">Correo electrónico</h3>
        <div className="space-y-2">
          <Label className="text-xs text-[#9CA3AF]">Email actual</Label>
          <Input
            value={user.email}
            disabled
            className="bg-white/[0.03] border-white/[0.08] text-[#6B7280] cursor-not-allowed"
          />
          <p className="text-xs text-[#6B7280]">Para cambiar tu email contacta a soporte.</p>
        </div>
      </GlassCard>

      {/* Password section */}
      <GlassCard className="p-5">
        <h3 className="text-sm font-semibold text-white mb-4">Cambiar contraseña</h3>
        <div className="flex flex-col gap-3">
          <div className="space-y-1.5">
            <Label className="text-xs text-[#9CA3AF]">Contraseña actual</Label>
            <Input
              type="password"
              placeholder="••••••••"
              className="bg-white/[0.04] border-white/[0.10] text-white placeholder:text-[#4B5563] focus:border-[#FF6B00]"
            />
          </div>
          <div className="space-y-1.5">
            <Label className="text-xs text-[#9CA3AF]">Nueva contraseña</Label>
            <Input
              type="password"
              placeholder="••••••••"
              className="bg-white/[0.04] border-white/[0.10] text-white placeholder:text-[#4B5563] focus:border-[#FF6B00]"
            />
          </div>
          <div className="space-y-1.5">
            <Label className="text-xs text-[#9CA3AF]">Confirmar nueva contraseña</Label>
            <Input
              type="password"
              placeholder="••••••••"
              className="bg-white/[0.04] border-white/[0.10] text-white placeholder:text-[#4B5563] focus:border-[#FF6B00]"
            />
          </div>
          <Button
            className="w-fit mt-1 text-white font-semibold"
            style={{ backgroundColor: "#FF6B00" }}
          >
            Actualizar contraseña
          </Button>
        </div>
      </GlassCard>

      {/* 2FA section */}
      <GlassCard className="p-5">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm font-semibold text-white">Autenticación de dos factores</h3>
            <p className="text-xs text-[#9CA3AF] mt-1">
              Agrega una capa extra de seguridad a tu cuenta con 2FA por app o SMS.
            </p>
          </div>
          <Switch
            checked={twoFAEnabled}
            onCheckedChange={setTwoFAEnabled}
            className="data-[state=checked]:bg-[#FF6B00]"
          />
        </div>
        {twoFAEnabled && (
          <div className="mt-4 p-3 rounded-lg border border-[#FF6B00]/20 bg-[#FF6B00]/5 text-xs text-[#FF8C33]">
            Escanea el código QR con tu app de autenticación para activar 2FA.
          </div>
        )}
      </GlassCard>

      {/* Connected accounts */}
      <GlassCard className="p-5">
        <h3 className="text-sm font-semibold text-white mb-4">Cuentas conectadas</h3>
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between p-3 rounded-lg bg-white/[0.02] border border-white/[0.06]">
            <div className="flex items-center gap-3">
              <span className="text-xl">🔵</span>
              <div>
                <p className="text-sm font-medium text-white">Google</p>
                <p className="text-xs text-[#6B7280]">{googleConnected ? user.email : "No conectado"}</p>
              </div>
            </div>
            {googleConnected ? (
              <span className="text-xs font-medium px-2 py-1 rounded-full bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/20">
                Conectado
              </span>
            ) : (
              <Button size="sm" variant="outline" className="border-white/10 text-[#9CA3AF] hover:text-white text-xs">
                Conectar
              </Button>
            )}
          </div>

          <div className="flex items-center justify-between p-3 rounded-lg bg-white/[0.02] border border-white/[0.06]">
            <div className="flex items-center gap-3">
              <span className="text-xl">⚫</span>
              <div>
                <p className="text-sm font-medium text-white">GitHub</p>
                <p className="text-xs text-[#6B7280]">{githubConnected ? "Conectado" : "No conectado"}</p>
              </div>
            </div>
            {githubConnected ? (
              <span className="text-xs font-medium px-2 py-1 rounded-full bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/20">
                Conectado
              </span>
            ) : (
              <Button size="sm" variant="outline" className="border-white/10 text-[#9CA3AF] hover:text-white text-xs">
                Conectar
              </Button>
            )}
          </div>
        </div>
      </GlassCard>

      {/* Active sessions */}
      <GlassCard className="p-5">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-semibold text-white">Sesiones activas</h3>
          <Button size="sm" variant="outline" className="border-white/10 text-[#9CA3AF] hover:text-white text-xs">
            Cerrar otras sesiones
          </Button>
        </div>
        <div className="flex flex-col gap-2">
          {sessions.map((session) => {
            const Icon = session.icon;
            return (
              <div
                key={session.id}
                className="flex items-center justify-between p-3 rounded-lg bg-white/[0.02] border border-white/[0.06]"
              >
                <div className="flex items-center gap-3">
                  <Icon className="w-4 h-4 text-[#9CA3AF]" />
                  <div>
                    <p className="text-sm font-medium text-white">{session.device} · {session.browser}</p>
                    <p className="text-xs text-[#6B7280]">{session.location}</p>
                  </div>
                </div>
                {session.current ? (
                  <span className="text-xs font-medium px-2 py-1 rounded-full bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/20">
                    Actual
                  </span>
                ) : (
                  <Button size="sm" variant="ghost" className="text-[#EF4444] hover:bg-[#EF4444]/10 text-xs">
                    Cerrar
                  </Button>
                )}
              </div>
            );
          })}
        </div>
      </GlassCard>
    </div>
  );
}
