"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  GraduationCap,
  FileCheck,
  Users,
  Settings,
  CreditCard,
  Shield,
  type LucideIcon,
} from "lucide-react";
import { NAV_ITEMS, NAV_ITEMS_BOTTOM } from "@/lib/constants";
import { cn } from "@/lib/utils";

const ICON_MAP: Record<string, LucideIcon> = {
  LayoutDashboard,
  GraduationCap,
  FileCheck,
  Users,
  Settings,
  CreditCard,
  Shield,
};

interface SidebarNavProps {
  activeHref: string;
  className?: string;
}

interface NavItemProps {
  label: string;
  href: string;
  icon: string;
  isActive: boolean;
}

function NavItem({ label, href, icon, isActive }: NavItemProps) {
  const Icon = ICON_MAP[icon];
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-3 px-3 py-2 transition-all duration-150 text-sm font-medium",
        isActive
          ? "text-white"
          : "text-[#9CA3AF] hover:text-white hover:bg-white/5"
      )}
      style={{
        borderRadius: "10px",
        backgroundColor: isActive ? "rgba(255,107,0,0.12)" : "transparent",
      }}
    >
      {Icon && (
        <Icon
          size={20}
          style={{ color: isActive ? "#FF6B00" : undefined }}
        />
      )}
      {label}
    </Link>
  );
}

export function SidebarNav({ activeHref, className }: SidebarNavProps) {
  return (
    <aside
      className={cn("flex flex-col h-full", className)}
      style={{
        width: "260px",
        backgroundColor: "#0A0A0E",
        borderRight: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div className="flex items-center gap-2 px-4 py-4 flex-shrink-0" style={{ height: "56px" }}>
        <span className="text-lg">⚡</span>
        <span className="text-sm font-bold text-white">NivelatuAcademy</span>
      </div>

      <nav className="flex-1 px-2 py-2 flex flex-col gap-1 overflow-y-auto">
        {NAV_ITEMS.map((item) => (
          <NavItem
            key={item.href}
            label={item.label}
            href={item.href}
            icon={item.icon}
            isActive={activeHref === item.href || activeHref.startsWith(item.href + "/")}
          />
        ))}
      </nav>

      <div
        className="px-2 py-2 flex flex-col gap-1 flex-shrink-0"
        style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
      >
        {NAV_ITEMS_BOTTOM.map((item) => (
          <NavItem
            key={item.href}
            label={item.label}
            href={item.href}
            icon={item.icon}
            isActive={activeHref === item.href}
          />
        ))}
      </div>
    </aside>
  );
}
