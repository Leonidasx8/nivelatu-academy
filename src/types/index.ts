// ═══════════════════════════════════════════════════════════════
// CORE TYPES
// ═══════════════════════════════════════════════════════════════

export type SOSTACPhase = "S" | "O" | "ST" | "T" | "A" | "C";

export type AgentId =
  | "delfino"
  | "forge"
  | "atlas"
  | "pulse"
  | "vega"
  | "orlando"
  | "fernando"
  | "tavo"
  | "carla"
  | "ivan";

export type DeliverableStatus =
  | "borrador"
  | "en_revision"
  | "aprobado"
  | "rehacer"
  | "pendiente";

export type PlanTier = "starter" | "pro" | "enterprise";
export type BillingCycle = "monthly" | "annual";

export interface Agent {
  id: AgentId;
  name: string;
  emoji: string;
  role: string;
  color: string;
  phase: SOSTACPhase;
  description: string;
  personality?: string;
}

export interface Plan {
  id: PlanTier;
  name: string;
  price: number;
  annualPrice: number;
  description: string;
  features: string[];
  cta: string;
  featured?: boolean;
  badge?: string;
}

export interface PlanFeature {
  category: string;
  feature: string;
  starter: boolean | string;
  pro: boolean | string;
  enterprise: boolean | string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  avatar: string;
  rating: number;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}
