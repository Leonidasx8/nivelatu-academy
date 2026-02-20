import { cn } from "@/lib/utils";
import { TopBar } from "@/components/shared/nav/top-bar";
import { PillarNav } from "@/components/shared/nav/pillar-nav";
import { BottomBar } from "@/components/shared/nav/bottom-bar";
import type { AgentId } from "@/types";
import type { Module } from "@/types/sostac";
import type { SOSTACProgress } from "@/types/saas";

const EMPTY_MODULES: Module[] = [];
const EMPTY_PROGRESS: SOSTACProgress[] = [];

interface SostacLayoutProps {
  children: React.ReactNode;
  agentId?: AgentId;
  modules?: Module[];
  activeModuleId?: string;
  progress?: SOSTACProgress[];
  totalProgress?: number;
  currentEpisode?: string;
  breadcrumb?: { label: string; href: string }[];
  showBack?: boolean;
  topBarProgress?: number;
  className?: string;
}

export function SostacLayout({
  children,
  agentId,
  modules = EMPTY_MODULES,
  activeModuleId = "",
  progress = EMPTY_PROGRESS,
  totalProgress,
  currentEpisode,
  breadcrumb,
  showBack = false,
  topBarProgress,
  className,
}: SostacLayoutProps) {
  return (
    <div
      className={cn("flex flex-col h-screen overflow-hidden bg-[#0D0D0F]", className)}
      data-agent={agentId}
    >
      <TopBar
        breadcrumb={breadcrumb}
        showBack={showBack}
        progress={topBarProgress}
      />

      {modules.length > 0 && agentId ? (
        <PillarNav
          modules={modules}
          activeModuleId={activeModuleId}
          agentId={agentId}
        />
      ) : (
        <div
          className="flex items-center px-4 flex-shrink-0"
          style={{
            height: "44px",
            backgroundColor: "#141418",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
          }}
        />
      )}

      <main className="flex-1 overflow-y-auto">
        {children}
      </main>

      <BottomBar
        className="hidden lg:flex"
        progress={progress}
        totalProgress={totalProgress}
        currentEpisode={currentEpisode}
      />
    </div>
  );
}
