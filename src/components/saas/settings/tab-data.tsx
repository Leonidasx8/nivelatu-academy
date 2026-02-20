"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { GlassCard } from "@/components/shared/glass-card";
import { Download, Trash2, AlertTriangle } from "lucide-react";

export function TabData() {
  const [confirmText, setConfirmText] = useState("");
  const CONFIRM_PHRASE = "eliminar mi cuenta";

  return (
    <div className="flex flex-col gap-6">
      {/* Export data */}
      <GlassCard className="p-5">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-[#3B82F6]/10 border border-[#3B82F6]/20 flex items-center justify-center flex-shrink-0">
            <Download className="w-5 h-5 text-[#3B82F6]" />
          </div>
          <div className="flex-1">
            <h3 className="text-sm font-semibold text-white">Exportar mis datos</h3>
            <p className="text-xs text-[#9CA3AF] mt-1 leading-relaxed">
              Descarga un archivo ZIP con todos tus datos: perfil, entregables, progreso SOSTAC, historial de actividad y configuraciones. El archivo estará disponible por 24 horas.
            </p>
            <ul className="mt-2 flex flex-wrap gap-2">
              {["Perfil y configuración", "Entregables en PDF", "Progreso SOSTAC", "Historial de actividad"].map((item) => (
                <span key={item} className="text-[11px] px-2 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-[#9CA3AF]">
                  {item}
                </span>
              ))}
            </ul>
            <Button
              className="mt-4 text-white font-semibold"
              style={{ backgroundColor: "#3B82F6" }}
              size="sm"
            >
              <Download className="w-4 h-4 mr-2" />
              Descargar ZIP
            </Button>
          </div>
        </div>
      </GlassCard>

      {/* Delete account */}
      <div className="rounded-xl border border-[#EF4444]/30 bg-[#EF4444]/5 p-5">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-[#EF4444]/10 border border-[#EF4444]/20 flex items-center justify-center flex-shrink-0">
            <AlertTriangle className="w-5 h-5 text-[#EF4444]" />
          </div>
          <div className="flex-1">
            <h3 className="text-sm font-semibold text-white">Eliminar mi cuenta</h3>
            <p className="text-xs text-[#9CA3AF] mt-1 leading-relaxed">
              Esta acción es permanente e irreversible. Se eliminarán todos tus datos, academias, entregables y suscripciones activas.
            </p>

            <div className="mt-3 p-3 rounded-lg bg-[#EF4444]/10 border border-[#EF4444]/20">
              <p className="text-xs font-medium text-[#EF4444] mb-1">Si eliminas tu cuenta perderás:</p>
              <ul className="space-y-0.5">
                {[
                  "Todas tus academias y entregables",
                  "Tu progreso SOSTAC completo",
                  "Acceso a todos los agentes IA",
                  "Tu suscripción activa (sin reembolso)",
                ].map((item) => (
                  <li key={item} className="text-xs text-[#F87171] flex items-center gap-1.5">
                    <span className="text-[#EF4444]">·</span> {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-4 space-y-2">
              <p className="text-xs text-[#9CA3AF]">
                Escribe <span className="font-mono font-bold text-[#EF4444]">{CONFIRM_PHRASE}</span> para confirmar:
              </p>
              <Input
                value={confirmText}
                onChange={(e) => setConfirmText(e.target.value)}
                placeholder={CONFIRM_PHRASE}
                className="bg-white/[0.04] border-[#EF4444]/30 text-white focus:border-[#EF4444] font-mono text-sm"
              />
              <Button
                disabled={confirmText !== CONFIRM_PHRASE}
                variant="destructive"
                className="w-full sm:w-auto font-semibold disabled:opacity-30"
                size="sm"
              >
                <Trash2 className="w-4 h-4 mr-2" />
                Eliminar mi cuenta permanentemente
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
