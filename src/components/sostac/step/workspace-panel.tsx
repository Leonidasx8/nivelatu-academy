"use client";

import { useState } from "react";
import { WorkspaceHeader } from "./workspace-header";
import { FormRenderer } from "./form-renderer";
import { StepNavigation } from "./step-navigation";
import type { Module, Step } from "@/types/sostac";

interface WorkspacePanelProps {
  module: Module;
  step: Step;
  stepIndex: number;
  onPrevious: () => void;
  onNext: () => void;
  isFirst: boolean;
  isLast: boolean;
}

export function WorkspacePanel({
  module,
  step,
  stepIndex,
  onPrevious,
  onNext,
  isFirst,
  isLast,
}: WorkspacePanelProps) {
  const [formValues, setFormValues] = useState<Record<string, unknown>>({});

  const handleChange = (fieldId: string, value: unknown) => {
    setFormValues((prev) => ({ ...prev, [fieldId]: value }));
  };

  // Determine if user can proceed (all required fields filled)
  const canGoNext = step.formFields
    .filter((f) => f.required)
    .every((f) => {
      const val = formValues[f.id];
      if (Array.isArray(val)) return val.length > 0;
      if (typeof val === "string") return val.trim().length > 0;
      if (typeof val === "number") return true;
      if (typeof val === "object" && val !== null) return Object.values(val).some(Boolean);
      return false;
    });

  return (
    <div className="flex flex-col flex-1 overflow-y-auto p-6">
      <WorkspaceHeader
        module={module}
        step={step}
        agentInstruction={step.agentInstruction}
        stepIndex={stepIndex}
      />

      <FormRenderer
        fields={step.formFields}
        values={formValues}
        onChange={handleChange}
      />

      <StepNavigation
        onPrevious={onPrevious}
        onNext={onNext}
        canGoNext={canGoNext || step.formFields.filter((f) => f.required).length === 0}
        isFirst={isFirst}
        isLast={isLast}
      />
    </div>
  );
}
