import type { AgentId, SOSTACPhase } from "./index";

export type FormFieldType =
  | "toggle-list"
  | "slider"
  | "radio"
  | "chip-selector"
  | "text"
  | "textarea"
  | "rating";

export interface FormFieldOption {
  value: string;
  label: string;
  description?: string;
  emoji?: string;
}

export interface FormField {
  id: string;
  type: FormFieldType;
  label: string;
  description?: string;
  required?: boolean;
  options?: FormFieldOption[];
  placeholder?: string;
  maxLength?: number;
  sliderPositions?: string[];
  prefilled?: boolean;
  prefilledSource?: string;
}

export interface Module {
  id: string;
  name: string;
  emoji: string;
  agentId: AgentId;
  phase: SOSTACPhase;
  order: number;
  totalSteps: number;
  completedSteps: number;
  status: "locked" | "available" | "in_progress" | "completed";
}

export interface Step {
  id: string;
  moduleId: string;
  title: string;
  order: number;
  formFields: FormField[];
  status: "locked" | "available" | "in_progress" | "completed";
  agentInstruction?: string;
}

export interface Episode {
  id: string;
  title: string;
  description: string;
  duration: string;
  stepId: string;
  mediaUrl?: string;
  thumbnailUrl?: string;
  status: "completed" | "active" | "locked";
}

export interface ChatMessage {
  id: string;
  role: "agent" | "user" | "insight" | "system";
  content: string;
  agentId?: AgentId;
  timestamp: string;
  prefilledData?: boolean;
  sourceLabel?: string;
}

export interface MapNode {
  id: string;
  agentId: AgentId;
  label: string;
  phase: SOSTACPhase;
  status: "locked" | "available" | "in_progress" | "completed";
  x: number;
  y: number;
  prerequisiteIds: string[];
}

export interface MapCable {
  fromId: string;
  toId: string;
  status: "inactive" | "flowing" | "completed";
}
