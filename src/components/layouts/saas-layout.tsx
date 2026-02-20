"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bell, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { SidebarNav } from "@/components/shared/nav/sidebar-nav";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import type { AgentId } from "@/types";

// ── Top Header ────────────────────────────────────────────────────────────────
function SaasTopHeader() {
  return (
    <header
      className="sticky top-0 z-30 flex items-center justify-between px-6 flex-shrink-0"
      style={{
        height: "56px",
        backgroundColor: "#141418",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      {/* Left: page title slot — pages can portal content here in the future */}
      <div className="flex items-center gap-2" />

      {/* Right: actions */}
      <div className="flex items-center gap-3">
        {/* Notification bell */}
        <button
          type="button"
          aria-label="Notificaciones"
          className="relative flex items-center justify-center rounded-[10px] text-[#9CA3AF] hover:text-white hover:bg-white/5 transition-all duration-150"
          style={{ width: "36px", height: "36px" }}
        >
          <Bell size={16} />
          <span
            className="absolute rounded-full bg-[#FF6B00]"
            style={{ width: "6px", height: "6px", top: "8px", right: "8px" }}
          />
        </button>

        {/* Avatar dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              type="button"
              className="flex items-center gap-2 rounded-[10px] hover:bg-white/5 transition-colors duration-150 px-1.5 py-1"
            >
              <Avatar className="w-7 h-7">
                <AvatarFallback
                  className="text-xs font-semibold"
                  style={{ backgroundColor: "#1A1A20", color: "#9CA3AF" }}
                >
                  U
                </AvatarFallback>
              </Avatar>
              <ChevronDown size={12} className="text-[#6B7280]" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="w-48"
            style={{
              backgroundColor: "#0D0D0F",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <DropdownMenuItem asChild>
              <Link
                href="/settings"
                className="text-sm cursor-pointer"
                style={{ color: "#9CA3AF" }}
              >
                Mi perfil
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link
                href="/billing"
                className="text-sm cursor-pointer"
                style={{ color: "#9CA3AF" }}
              >
                Facturación
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator
              style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
            />
            <DropdownMenuItem asChild>
              <Link
                href="/"
                className="text-sm cursor-pointer"
                style={{ color: "#EF4444" }}
              >
                Cerrar sesión
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}

// ── Main Layout ───────────────────────────────────────────────────────────────
interface SaasLayoutProps {
  children: React.ReactNode;
  /** Optional agent context — sets data-agent on root for CSS color propagation */
  agentId?: AgentId;
  className?: string;
}

export function SaasLayout({ children, agentId, className }: SaasLayoutProps) {
  const pathname = usePathname();

  return (
    <div
      className={cn("min-h-screen bg-[#0D0D0F]", className)}
      data-agent={agentId}
    >
      {/* Fixed sidebar */}
      <SidebarNav activeHref={pathname} className="fixed left-0 top-0 bottom-0 z-40" />

      {/* Content area offset by sidebar width */}
      <div className="ml-[260px] min-h-screen flex flex-col">
        <SaasTopHeader />
        <main className="flex-1 p-6 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
