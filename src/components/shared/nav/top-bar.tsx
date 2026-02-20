"use client";

import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ProgressBar } from "../progress-bar";
import { cn } from "@/lib/utils";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface TopBarProps {
  breadcrumb?: BreadcrumbItem[];
  showBack?: boolean;
  progress?: number;
  className?: string;
}

export function TopBar({ breadcrumb, showBack = false, progress, className }: TopBarProps) {
  return (
    <header
      className={cn("flex items-center justify-between px-4 flex-shrink-0", className)}
      style={{
        height: "56px",
        backgroundColor: "#141418",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div className="flex items-center gap-3">
        {showBack && (
          <button
            type="button"
            onClick={() => history.back()}
            className="flex items-center justify-center rounded-md text-[#9CA3AF] hover:text-white hover:bg-white/5 transition-all duration-150"
            style={{ width: "32px", height: "32px" }}
            aria-label="Volver"
          >
            <ChevronLeft size={20} />
          </button>
        )}
        <Link href="/" className="flex items-center gap-1.5 font-bold text-white">
          <span style={{ color: "#FF6B00" }}>⚡</span>
          <span className="text-sm">NivelatuAcademy</span>
        </Link>
        {breadcrumb && breadcrumb.length > 0 && (
          <nav className="flex items-center gap-1" aria-label="Breadcrumb">
            {breadcrumb.map((item, i) => (
              <div key={item.href} className="flex items-center gap-1">
                <ChevronRight size={14} className="text-[#6B7280]" />
                {i === breadcrumb.length - 1 ? (
                  <span className="text-sm text-[#9CA3AF]">{item.label}</span>
                ) : (
                  <Link href={item.href} className="text-sm text-[#9CA3AF] hover:text-white transition-colors duration-150">
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>
        )}
      </div>

      <div className="flex items-center gap-3">
        {progress !== undefined && (
          <div className="flex items-center gap-2">
            <span className="text-xs text-[#9CA3AF]">{progress}%</span>
            <div style={{ width: "80px" }}>
              <ProgressBar value={progress} agentColor />
            </div>
          </div>
        )}
        <Avatar className="w-8 h-8">
          <AvatarFallback className="text-xs font-semibold" style={{ backgroundColor: "#1A1A20", color: "#9CA3AF" }}>
            U
          </AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
