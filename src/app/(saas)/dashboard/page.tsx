import { currentUser, currentAcademy, deliverables, activityItems, sostacProgress } from "@/data/mock-user";
import { SOSTACProgressWidget } from "@/components/saas/dashboard/sostac-progress-widget";
import { CurrentStepCard } from "@/components/saas/dashboard/current-step-card";
import { DeliverablesOverview } from "@/components/saas/dashboard/deliverables-overview";
import { AgentActivityPanel } from "@/components/saas/dashboard/agent-activity-panel";
import { RecentActivity } from "@/components/saas/dashboard/recent-activity";

export default function DashboardPage() {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-white font-sans">
          Bienvenida, {currentUser.firstName} 👋
        </h1>
        <p className="text-sm text-[#9CA3AF] mt-1 font-body">
          {currentAcademy.name} · Plan {currentUser.plan.charAt(0).toUpperCase() + currentUser.plan.slice(1)}
        </p>
      </div>

      {/* SOSTAC Progress — full width */}
      <div className="mb-6">
        <SOSTACProgressWidget progress={sostacProgress} />
      </div>

      {/* Main grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left column */}
        <div className="flex flex-col gap-6">
          <CurrentStepCard />
          <DeliverablesOverview deliverables={deliverables} />
        </div>

        {/* Right column */}
        <div className="flex flex-col gap-6">
          <AgentActivityPanel />
          <RecentActivity items={activityItems} />
        </div>
      </div>
    </div>
  );
}
