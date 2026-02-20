"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { adminUsers, adminAcademies, reviewQueue } from "@/data/mock-admin";
import { AdminUsers } from "@/components/saas/admin/admin-users";
import { AdminAcademies } from "@/components/saas/admin/admin-academies";
import { AdminDeliverables } from "@/components/saas/admin/admin-deliverables";
import { AdminContent } from "@/components/saas/admin/admin-content";
import { AdminAnalytics } from "@/components/saas/admin/admin-analytics";
import { AdminBilling } from "@/components/saas/admin/admin-billing";
import { AdminSystem } from "@/components/saas/admin/admin-system";
import { Shield } from "lucide-react";

const TABS = [
  { value: "usuarios", label: "Usuarios" },
  { value: "academias", label: "Academias" },
  { value: "entregables", label: "Entregables" },
  { value: "contenido", label: "Contenido" },
  { value: "analytics", label: "Analytics" },
  { value: "facturacion", label: "Facturación" },
  { value: "sistema", label: "Sistema" },
];

export default function AdminPage() {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-6 flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-[#8B5CF6]/10 border border-[#8B5CF6]/20 flex items-center justify-center">
          <Shield className="w-5 h-5 text-[#8B5CF6]" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-white font-sans">Panel de Administración</h1>
          <p className="text-sm text-[#9CA3AF] font-body">
            Gestión global de la plataforma NivelatuAcademy.
          </p>
        </div>
      </div>

      <Tabs defaultValue="usuarios">
        <TabsList className="mb-6 w-full flex-wrap h-auto gap-1 bg-white/[0.03] border border-white/[0.06] p-1 rounded-xl">
          {TABS.map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className="flex-1 text-xs font-medium data-[state=active]:bg-[#8B5CF6]/10 data-[state=active]:text-[#8B5CF6] data-[state=active]:border-[#8B5CF6]/30 text-[#9CA3AF] rounded-lg"
            >
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="usuarios">
          <AdminUsers users={adminUsers} />
        </TabsContent>

        <TabsContent value="academias">
          <AdminAcademies academies={adminAcademies} />
        </TabsContent>

        <TabsContent value="entregables">
          <AdminDeliverables deliverables={reviewQueue} />
        </TabsContent>

        <TabsContent value="contenido">
          <AdminContent />
        </TabsContent>

        <TabsContent value="analytics">
          <AdminAnalytics />
        </TabsContent>

        <TabsContent value="facturacion">
          <AdminBilling />
        </TabsContent>

        <TabsContent value="sistema">
          <AdminSystem />
        </TabsContent>
      </Tabs>
    </div>
  );
}
