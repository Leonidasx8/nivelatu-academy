"use client";

import { useState } from "react";
import { ToggleList } from "@/components/shared/forms/toggle-list";
import { CustomSlider } from "@/components/shared/forms/slider";
import { AgentRadioGroup } from "@/components/shared/forms/radio-group";
import { ChipSelector } from "@/components/shared/forms/chip-selector";
import { TextInput } from "@/components/shared/forms/text-input";
import { TextArea } from "@/components/shared/forms/textarea";
import type { FormField } from "@/types/sostac";

interface FormRendererProps {
  fields: FormField[];
  values: Record<string, unknown>;
  onChange: (fieldId: string, value: unknown) => void;
}

export function FormRenderer({ fields, values, onChange }: FormRendererProps) {
  return (
    <div className="flex flex-col gap-6">
      {fields.map((field) => (
        <div key={field.id} className="flex flex-col gap-2">
          {/* Field header — only for non-text/textarea (those handle their own label) */}
          {field.type !== "text" && field.type !== "textarea" && (
            <div>
              <p className="text-sm font-medium text-[#E5E5E5]">
                {field.label}
                {field.required && <span className="text-red-400 ml-1">*</span>}
              </p>
              {field.description && (
                <p className="text-xs text-[#9CA3AF] mt-0.5">{field.description}</p>
              )}
            </div>
          )}

          {/* Field renderer */}
          {field.type === "toggle-list" && field.options && (
            <ToggleList
              items={field.options.map((opt) => ({
                id: opt.value,
                label: opt.label,
                description: opt.description,
              }))}
              values={(values[field.id] as Record<string, boolean>) ?? {}}
              onChange={(id, val) => {
                const current = (values[field.id] as Record<string, boolean>) ?? {};
                onChange(field.id, { ...current, [id]: val });
              }}
            />
          )}

          {field.type === "slider" && field.sliderPositions && (
            <CustomSlider
              positions={field.sliderPositions}
              value={(values[field.id] as number) ?? 0}
              onChange={(val) => onChange(field.id, val)}
            />
          )}

          {field.type === "radio" && field.options && (
            <AgentRadioGroup
              options={field.options.map((opt) => ({
                value: opt.value,
                label: opt.label,
                description: opt.description,
              }))}
              value={(values[field.id] as string) ?? ""}
              onChange={(val) => onChange(field.id, val)}
            />
          )}

          {field.type === "chip-selector" && field.options && (
            <ChipSelector
              options={field.options.map((opt) => ({
                value: opt.value,
                label: field.options
                  ? `${opt.emoji ? opt.emoji + " " : ""}${opt.label}`
                  : opt.label,
              }))}
              selected={(values[field.id] as string[]) ?? []}
              onChange={(val) => onChange(field.id, val)}
            />
          )}

          {field.type === "text" && (
            <TextInput
              label={field.label}
              value={(values[field.id] as string) ?? ""}
              onChange={(e) => onChange(field.id, e.target.value)}
              placeholder={field.placeholder}
              required={field.required}
              maxLength={field.maxLength}
              prefilled={field.prefilled}
              prefilledSource={field.prefilledSource}
            />
          )}

          {field.type === "textarea" && (
            <TextArea
              label={field.label}
              value={(values[field.id] as string) ?? ""}
              onChange={(e) => onChange(field.id, e.target.value)}
              placeholder={field.placeholder}
              required={field.required}
              maxLength={field.maxLength}
              prefilled={field.prefilled}
              prefilledSource={field.prefilledSource}
            />
          )}

          {field.type === "rating" && (
            <div className="flex items-center gap-3">
              {[1, 2, 3, 4, 5].map((rating) => {
                const isSelected = (values[field.id] as number) === rating;
                return (
                  <button
                    key={rating}
                    type="button"
                    onClick={() => onChange(field.id, rating)}
                    className="flex items-center justify-center rounded-full text-sm font-bold transition-all duration-150"
                    style={{
                      width: "40px",
                      height: "40px",
                      backgroundColor: isSelected
                        ? "var(--agent-color, #FF6B00)"
                        : "rgba(255,255,255,0.04)",
                      border: `2px solid ${isSelected ? "var(--agent-color, #FF6B00)" : "rgba(255,255,255,0.10)"}`,
                      color: isSelected ? "white" : "#9CA3AF",
                    }}
                  >
                    {rating}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
