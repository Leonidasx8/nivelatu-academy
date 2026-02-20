import { GlassCard } from "@/components/shared/glass-card";
import { FileEdit } from "lucide-react";

export function AdminContent() {
  return (
    <GlassCard className="p-10 flex flex-col items-center justify-center text-center">
      <div className="w-14 h-14 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center mb-4">
        <FileEdit className="w-7 h-7 text-[#6B7280]" />
      </div>
      <h3 className="text-base font-semibold text-white mb-2">Gestión de contenido</h3>
      <p className="text-sm text-[#6B7280] max-w-xs">
        El editor de contenido de la plataforma estará disponible próximamente. Aquí podrás gestionar módulos, guiones de agentes y materiales de aprendizaje.
      </p>
      <span className="mt-4 px-3 py-1.5 rounded-full text-xs font-medium bg-[#FF6B00]/10 text-[#FF6B00] border border-[#FF6B00]/20">
        Próximamente
      </span>
    </GlassCard>
  );
}
