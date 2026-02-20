import { GlassCard } from "@/components/shared/glass-card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import type { Invoice } from "@/types/saas";
import { Download } from "lucide-react";

interface BillingHistoryProps {
  invoices: Invoice[];
}

const STATUS_CONFIG = {
  paid: { label: "Pagado", color: "#10B981" },
  pending: { label: "Pendiente", color: "#F59E0B" },
  failed: { label: "Fallido", color: "#EF4444" },
};

export function BillingHistory({ invoices }: BillingHistoryProps) {
  return (
    <GlassCard className="p-5">
      <p className="text-xs font-medium text-[#9CA3AF] uppercase tracking-wide mb-4">Historial de facturación</p>

      <Table>
        <TableHeader>
          <TableRow className="border-white/[0.06] hover:bg-transparent">
            <TableHead className="text-[#6B7280] font-medium text-xs h-8 px-0">Fecha</TableHead>
            <TableHead className="text-[#6B7280] font-medium text-xs h-8">Monto</TableHead>
            <TableHead className="text-[#6B7280] font-medium text-xs h-8">Estado</TableHead>
            <TableHead className="text-[#6B7280] font-medium text-xs h-8 text-right">Factura</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => {
            const statusConfig = STATUS_CONFIG[invoice.status];
            const formattedDate = new Date(invoice.date).toLocaleDateString("es-ES", {
              day: "2-digit",
              month: "long",
              year: "numeric",
            });

            return (
              <TableRow key={invoice.id} className="border-white/[0.04] hover:bg-white/[0.02]">
                <TableCell className="text-sm text-white px-0 py-3">{formattedDate}</TableCell>
                <TableCell className="text-sm font-semibold text-white py-3">
                  ${invoice.amount} USD
                </TableCell>
                <TableCell className="py-3">
                  <span
                    className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium"
                    style={{
                      backgroundColor: `${statusConfig.color}15`,
                      color: statusConfig.color,
                      border: `1px solid ${statusConfig.color}30`,
                    }}
                  >
                    {statusConfig.label}
                  </span>
                </TableCell>
                <TableCell className="py-3 text-right">
                  <a
                    href={invoice.downloadUrl}
                    className="inline-flex items-center gap-1.5 text-xs text-[#FF6B00] hover:text-[#FF8C33] transition-colors font-medium"
                  >
                    <Download className="w-3.5 h-3.5" />
                    PDF
                  </a>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </GlassCard>
  );
}
