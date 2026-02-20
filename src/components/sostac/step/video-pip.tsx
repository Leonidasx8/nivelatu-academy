"use client";

import { X, Maximize2, Play } from "lucide-react";
import type { Episode } from "@/types/sostac";

interface VideoPiPProps {
  episode?: Episode;
  onClose: () => void;
  onExpand: () => void;
}

export function VideoPiP({ episode, onClose, onExpand }: VideoPiPProps) {
  return (
    <div
      className="absolute bottom-4 right-4 z-20 flex flex-col overflow-hidden rounded-lg"
      style={{
        width: "240px",
        height: "155px",
        backgroundColor: "#0A0A0A",
        border: "1px solid #2A2A2A",
        boxShadow: "0 4px 24px rgba(0,0,0,0.60)",
      }}
    >
      {/* Header */}
      <div
        className="flex items-center justify-between px-2 shrink-0"
        style={{ height: "28px" }}
      >
        <span className="text-[10px] text-[#999999] truncate">
          {episode?.title ?? "Video Tutorial"}
        </span>
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={onExpand}
            className="flex items-center justify-center"
            aria-label="Expandir video"
          >
            <Maximize2 size={11} style={{ color: "#999999" }} />
          </button>
          <button
            type="button"
            onClick={onClose}
            className="flex items-center justify-center"
            aria-label="Cerrar video"
          >
            <X size={11} style={{ color: "#999999" }} />
          </button>
        </div>
      </div>

      {/* Thumbnail */}
      <div
        className="flex-1 flex items-center justify-center"
        style={{ backgroundColor: "#1A1A1A" }}
      >
        <div
          className="flex items-center justify-center rounded-full"
          style={{
            width: "40px",
            height: "40px",
            backgroundColor: "#F97316",
          }}
        >
          <Play size={18} className="text-white ml-0.5" />
        </div>
      </div>

      {/* Progress bar */}
      <div
        className="shrink-0"
        style={{ height: "3px", backgroundColor: "#2A2A2A" }}
      >
        <div
          style={{
            width: "30%",
            height: "100%",
            backgroundColor: "#F97316",
          }}
        />
      </div>
    </div>
  );
}
