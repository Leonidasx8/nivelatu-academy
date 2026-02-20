import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import type { AdminAcademy } from "@/types/saas";

interface AdminAcademiesProps {
  academies: AdminAcademy[];
}

function getRelativeTime(timestamp: string): string {
  const now = new Date("2026-02-19T12:00:00Z");
  const then = new Date(timestamp);
  const diffHours = Math.floor((now.getTime() - then.getTime()) / (1000 * 60 * 60));
  const diffDays = Math.floor(diffHours / 24);
  if (diffHours < 1) return "ahora";
  if (diffHours < 24) return `hace ${diffHours}h`;
  if (diffDays === 1) return "ayer";
  return `hace ${diffDays} días`;
}

const PLAN_CONFIG = {
  starter: { label: "Starter", color: "#6B7280" },
  pro: { label: "Pro", color: "#FF6B00" },
  enterprise: { label: "Enterprise", color: "#8B5CF6" },
};

export function AdminAcademies({ academies }: AdminAcademiesProps) {
  return (
    <div className="glass-card rounded-xl overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow className="border-white/[0.06] hover:bg-transparent">
            <TableHead className="text-[#6B7280] font-medium text-xs h-10 px-4">Academia</TableHead>
            <TableHead className="text-[#6B7280] font-medium text-xs h-10 hidden sm:table-cell">Propietario</TableHead>
            <TableHead className="text-[#6B7280] font-medium text-xs h-10">Plan</TableHead>
            <TableHead className="text-[#6B7280] font-medium text-xs h-10">Progreso</TableHead>
            <TableHead className="text-[#6B7280] font-medium text-xs h-10 hidden md:table-cell">Entregables</TableHead>
            <TableHead className="text-[#6B7280] font-medium text-xs h-10 hidden lg:table-cell">Última actividad</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {academies.map((academy) => {
            const planConfig = PLAN_CONFIG[academy.plan];

            return (
              <TableRow key={academy.id} className="border-white/[0.04] hover:bg-white/[0.02]">
                <TableCell className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-8 h-8 rounded-lg flex-shrink-0"
                      style={{ backgroundColor: `${academy.primaryColor ?? "#6B7280"}20`, border: `1px solid ${academy.primaryColor ?? "#6B7280"}40` }}
                    />
                    <div>
                      <p className="text-sm font-medium text-white">{academy.name}</p>
                      <p className="text-xs text-[#6B7280] font-mono">{academy.slug}</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-sm text-[#9CA3AF] py-3 hidden sm:table-cell">
                  {academy.ownerName}
                </TableCell>
                <TableCell className="py-3">
                  <span
                    className="text-xs font-semibold px-2 py-0.5 rounded-full"
                    style={{
                      backgroundColor: `${planConfig.color}15`,
                      color: planConfig.color,
                      border: `1px solid ${planConfig.color}30`,
                    }}
                  >
                    {planConfig.label}
                  </span>
                </TableCell>
                <TableCell className="py-3">
                  <div className="flex items-center gap-2">
                    <div className="w-20 h-1.5 rounded-full bg-[#1A1A20] overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${academy.progress}%`,
                          backgroundColor: academy.progress === 100 ? "#10B981" : "#FF6B00",
                        }}
                      />
                    </div>
                    <span className="text-xs text-[#9CA3AF] flex-shrink-0">{academy.progress}%</span>
                  </div>
                </TableCell>
                <TableCell className="py-3 text-sm text-[#9CA3AF] hidden md:table-cell">
                  {academy.deliverableCount}
                </TableCell>
                <TableCell className="py-3 text-xs text-[#6B7280] hidden lg:table-cell">
                  {getRelativeTime(academy.lastActivity)}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
