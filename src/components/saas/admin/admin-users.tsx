"use client";

import { useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import type { AdminUser } from "@/types/saas";
import { Search, MoreHorizontal } from "lucide-react";

interface AdminUsersProps {
  users: AdminUser[];
}

const STATUS_CONFIG = {
  active: { label: "Activo", color: "#10B981" },
  suspended: { label: "Suspendido", color: "#EF4444" },
  trial: { label: "Prueba", color: "#F59E0B" },
};

const PLAN_CONFIG = {
  starter: { label: "Starter", color: "#6B7280" },
  pro: { label: "Pro", color: "#FF6B00" },
  enterprise: { label: "Enterprise", color: "#8B5CF6" },
};

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

export function AdminUsers({ users }: AdminUsersProps) {
  const [search, setSearch] = useState("");

  const filtered = users.filter(
    (u) =>
      `${u.firstName} ${u.lastName}`.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex flex-col gap-4">
      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B7280]" />
        <Input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Buscar por nombre o email..."
          className="pl-9 bg-white/[0.04] border-white/[0.10] text-white placeholder:text-[#4B5563] focus:border-[#FF6B00]"
        />
      </div>

      {/* Table */}
      <div className="glass-card rounded-xl overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="border-white/[0.06] hover:bg-transparent">
              <TableHead className="text-[#6B7280] font-medium text-xs h-10 px-4">Usuario</TableHead>
              <TableHead className="text-[#6B7280] font-medium text-xs h-10 hidden sm:table-cell">Email</TableHead>
              <TableHead className="text-[#6B7280] font-medium text-xs h-10">Plan</TableHead>
              <TableHead className="text-[#6B7280] font-medium text-xs h-10">Estado</TableHead>
              <TableHead className="text-[#6B7280] font-medium text-xs h-10 hidden lg:table-cell">Última actividad</TableHead>
              <TableHead className="text-[#6B7280] font-medium text-xs h-10 text-right pr-4">Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filtered.map((user) => {
              const statusConfig = STATUS_CONFIG[user.status];
              const planConfig = PLAN_CONFIG[user.plan];

              return (
                <TableRow key={user.id} className="border-white/[0.04] hover:bg-white/[0.02]">
                  <TableCell className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-white/[0.06] border border-white/[0.10] flex items-center justify-center text-xs font-bold text-white flex-shrink-0">
                        {user.firstName.charAt(0)}{user.lastName.charAt(0)}
                      </div>
                      <span className="text-sm font-medium text-white">
                        {user.firstName} {user.lastName}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="text-xs text-[#9CA3AF] py-3 hidden sm:table-cell">
                    {user.email}
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
                    <span
                      className="text-xs font-medium px-2 py-0.5 rounded-full"
                      style={{
                        backgroundColor: `${statusConfig.color}15`,
                        color: statusConfig.color,
                        border: `1px solid ${statusConfig.color}30`,
                      }}
                    >
                      {statusConfig.label}
                    </span>
                  </TableCell>
                  <TableCell className="text-xs text-[#6B7280] py-3 hidden lg:table-cell">
                    {getRelativeTime(user.lastActive)}
                  </TableCell>
                  <TableCell className="py-3 text-right pr-4">
                    <Button variant="ghost" size="icon-sm" className="text-[#6B7280] hover:text-white">
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>

        {filtered.length === 0 && (
          <div className="py-10 text-center text-sm text-[#6B7280]">
            No se encontraron usuarios con ese criterio.
          </div>
        )}
      </div>
    </div>
  );
}
