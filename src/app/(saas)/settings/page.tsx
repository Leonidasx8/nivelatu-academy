"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { currentUser, currentAcademy } from "@/data/mock-user";
import { TabAccount } from "@/components/saas/settings/tab-account";
import { TabProfile } from "@/components/saas/settings/tab-profile";
import { TabAcademy } from "@/components/saas/settings/tab-academy";
import { TabNotifications } from "@/components/saas/settings/tab-notifications";
import { TabIntegrations } from "@/components/saas/settings/tab-integrations";
import { TabData } from "@/components/saas/settings/tab-data";

const TABS = [
  { value: "cuenta", label: "Cuenta" },
  { value: "perfil", label: "Perfil" },
  { value: "academia", label: "Academia" },
  { value: "notificaciones", label: "Notificaciones" },
  { value: "integraciones", label: "Integraciones" },
  { value: "datos", label: "Datos" },
];

export default function SettingsPage() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-white font-sans">Configuración</h1>
        <p className="text-sm text-[#9CA3AF] mt-1 font-body">
          Gestiona tu cuenta, academia y preferencias.
        </p>
      </div>

      <Tabs defaultValue="cuenta">
        <TabsList className="mb-6 w-full flex-wrap h-auto gap-1 bg-white/[0.03] border border-white/[0.06] p-1 rounded-xl">
          {TABS.map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className="flex-1 text-xs font-medium data-[state=active]:bg-[#FF6B00]/10 data-[state=active]:text-[#FF6B00] data-[state=active]:border-[#FF6B00]/30 text-[#9CA3AF] rounded-lg"
            >
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="cuenta">
          <TabAccount user={currentUser} />
        </TabsContent>

        <TabsContent value="perfil">
          <TabProfile user={currentUser} />
        </TabsContent>

        <TabsContent value="academia">
          <TabAcademy academy={currentAcademy} />
        </TabsContent>

        <TabsContent value="notificaciones">
          <TabNotifications />
        </TabsContent>

        <TabsContent value="integraciones">
          <TabIntegrations userPlan={currentUser.plan} />
        </TabsContent>

        <TabsContent value="datos">
          <TabData />
        </TabsContent>
      </Tabs>
    </div>
  );
}
