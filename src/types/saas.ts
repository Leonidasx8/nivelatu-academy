import type { AgentId, DeliverableStatus, PlanTier, SOSTACPhase } from "./index";

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  avatar?: string;
  role: string[];
  industry: string[];
  experienceLevel: "beginner" | "intermediate" | "advanced" | "expert";
  plan: PlanTier;
  createdAt: string;
}

export interface Academy {
  id: string;
  name: string;
  slug: string;
  description?: string;
  logo?: string;
  primaryColor?: string;
  ownerId: string;
  plan: PlanTier;
  createdAt: string;
  timezone: string;
}

export interface SOSTACProgress {
  phase: SOSTACPhase;
  label: string;
  color: string;
  completedSteps: number;
  totalSteps: number;
  percentage: number;
  status: "locked" | "available" | "in_progress" | "completed";
}

export interface Deliverable {
  id: string;
  name: string;
  phase: SOSTACPhase;
  agentId: AgentId;
  format: "pdf" | "doc" | "sheet" | "link";
  status: DeliverableStatus;
  version: number;
  tags: string[];
  createdAt: string;
  updatedAt: string;
  reviewNotes?: string;
}

export interface ActivityItem {
  id: string;
  type: "step_completed" | "deliverable_submitted" | "deliverable_reviewed" | "agent_interaction" | "insight_generated";
  title: string;
  description: string;
  agentId?: AgentId;
  timestamp: string;
}

export interface Invoice {
  id: string;
  date: string;
  amount: number;
  status: "paid" | "pending" | "failed";
  downloadUrl: string;
}

export interface NotificationSetting {
  key: string;
  label: string;
  email: boolean;
  inApp: boolean;
}

export interface AdminUser extends User {
  academyCount: number;
  lastActive: string;
  status: "active" | "suspended" | "trial";
}

export interface AdminAcademy extends Academy {
  ownerName: string;
  progress: number;
  deliverableCount: number;
  lastActivity: string;
}
