"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { AlertTriangle } from "lucide-react";

interface CancelModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const CANCEL_REASONS = [
  { value: "too_expensive", label: "Es demasiado costoso" },
  { value: "not_using", label: "No lo estoy usando suficiente" },
  { value: "missing_features", label: "Le faltan funciones que necesito" },
  { value: "found_alternative", label: "Encontré una alternativa" },
  { value: "technical_issues", label: "Problemas técnicos" },
  { value: "other", label: "Otro motivo" },
];

const LOSSES = [
  "Acceso a los 10 agentes IA",
  "Todos tus entregables y progreso SOSTAC",
  "Académias ilimitadas y estudiantes",
  "Exportaciones en PDF, DOC y Sheets",
  "Soporte prioritario",
];

export function CancelModal({ open, onOpenChange }: CancelModalProps) {
  const [selectedReason, setSelectedReason] = useState<string>("");

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-[#141418] border-white/[0.10] max-w-lg">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-1">
            <div className="w-9 h-9 rounded-lg bg-[#EF4444]/10 border border-[#EF4444]/20 flex items-center justify-center flex-shrink-0">
              <AlertTriangle className="w-5 h-5 text-[#EF4444]" />
            </div>
            <DialogTitle className="text-white text-base">¿Estás seguro de cancelar?</DialogTitle>
          </div>
        </DialogHeader>

        {/* What you'll lose */}
        <div className="p-4 rounded-xl border border-[#EF4444]/20 bg-[#EF4444]/5 mb-2">
          <p className="text-xs font-semibold text-[#EF4444] mb-2 uppercase tracking-wide">Perderás acceso a:</p>
          <ul className="space-y-1.5">
            {LOSSES.map((loss) => (
              <li key={loss} className="flex items-center gap-2 text-xs text-[#F87171]">
                <span className="text-[#EF4444]">✕</span>
                {loss}
              </li>
            ))}
          </ul>
        </div>

        {/* Reason */}
        <div>
          <p className="text-xs font-medium text-[#9CA3AF] mb-2">¿Por qué quieres cancelar? (opcional)</p>
          <div className="flex flex-col gap-1.5">
            {CANCEL_REASONS.map((reason) => (
              <button
                key={reason.value}
                onClick={() => setSelectedReason(reason.value)}
                className={cn(
                  "flex items-center gap-3 p-2.5 rounded-lg border text-left text-sm transition-all duration-150",
                  selectedReason === reason.value
                    ? "border-[#EF4444]/40 bg-[#EF4444]/08 text-white"
                    : "border-white/[0.06] text-[#9CA3AF] hover:border-white/15 hover:text-white"
                )}
              >
                <div
                  className={cn(
                    "w-4 h-4 rounded-full border-2 flex-shrink-0 flex items-center justify-center",
                    selectedReason === reason.value
                      ? "border-[#EF4444]"
                      : "border-[#374151]"
                  )}
                >
                  {selectedReason === reason.value && (
                    <div className="w-2 h-2 rounded-full bg-[#EF4444]" />
                  )}
                </div>
                {reason.label}
              </button>
            ))}
          </div>
        </div>

        <DialogFooter className="flex-col sm:flex-row gap-2 mt-2">
          <Button
            onClick={() => onOpenChange(false)}
            className="text-white font-semibold w-full sm:w-auto order-first sm:order-last"
            style={{ backgroundColor: "#FF6B00" }}
            size="sm"
          >
            Mantener mi plan
          </Button>
          <Button
            variant="destructive"
            onClick={() => onOpenChange(false)}
            className="font-semibold w-full sm:w-auto"
            size="sm"
          >
            Cancelar suscripción
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
