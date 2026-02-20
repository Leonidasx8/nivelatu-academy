"use client";

import { type TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
  prefilled?: boolean;
  prefilledSource?: string;
  maxLength?: number;
  rows?: number;
}

export function TextArea({
  label,
  error,
  prefilled,
  prefilledSource,
  maxLength,
  rows = 4,
  className,
  value,
  id,
  ...props
}: TextAreaProps) {
  const textareaId = id ?? `textarea-${label.toLowerCase().replace(/\s+/g, "-")}`;
  const currentLength = typeof value === "string" ? value.length : 0;

  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex items-center justify-between gap-2">
        <label htmlFor={textareaId} className="text-sm font-medium text-[#E5E5E5]">
          {label}
          {props.required && <span className="text-red-400 ml-1">*</span>}
        </label>
        <div className="flex items-center gap-2">
          {prefilled && (
            <span
              className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-xs font-medium"
              style={{
                backgroundColor: "var(--agent-color-10, rgba(255,107,0,0.10))",
                color: "var(--agent-color, #FF6B00)",
                border: "1px solid var(--agent-color-20, rgba(255,107,0,0.20))",
              }}
            >
              ⚡ {prefilledSource ?? "Auto"}
            </span>
          )}
          {maxLength && (
            <span className="text-xs text-[#6B7280]">
              {currentLength}/{maxLength}
            </span>
          )}
        </div>
      </div>
      <textarea
        id={textareaId}
        value={value}
        maxLength={maxLength}
        rows={rows}
        className={cn(
          "glass-input glass-input-agent w-full px-3 py-2.5 rounded-md text-sm text-white placeholder:text-[#6B7280] outline-none transition-all duration-150 resize-none",
          error && "border-red-500 focus:border-red-500 focus:shadow-[0_0_0_3px_rgba(239,68,68,0.15)]",
          className
        )}
        {...props}
      />
      {error && <p className="text-xs text-red-400">{error}</p>}
    </div>
  );
}
