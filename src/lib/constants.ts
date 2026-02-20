import type { AgentId } from "@/types";

export const SOSTAC_PHASES = [
  { letter: "S", name: "Situacional", color: "#3B82F6", description: "Análisis de dónde estás ahora" },
  { letter: "O", name: "Objetivos", color: "#F59E0B", description: "Definir a dónde quieres llegar" },
  { letter: "ST", name: "Estrategia", color: "#10B981", description: "Cómo vas a llegar" },
  { letter: "T", name: "Tácticas", color: "#EF4444", description: "Qué vas a hacer específicamente" },
  { letter: "A", name: "Acción", color: "#8B5CF6", description: "Quién hace qué y cuándo" },
  { letter: "C", name: "Control", color: "#06B6D4", description: "Cómo medir y mejorar" },
] as const;

export const AGENTS: Record<AgentId, {
  id: AgentId;
  name: string;
  emoji: string;
  role: string;
  color: string;
  phase: string;
  description: string;
}> = {
  delfino: {
    id: "delfino",
    name: "Delfino",
    emoji: "🐬",
    role: "Brief Express",
    color: "#06B6D4",
    phase: "S",
    description: "Captura tu visión en 15 minutos con preguntas rápidas y precisas.",
  },
  forge: {
    id: "forge",
    name: "Forge",
    emoji: "🐜",
    role: "Análisis Interno",
    color: "#FF6B00",
    phase: "S",
    description: "Diagnostica los 8 pilares internos de tu negocio con honestidad quirúrgica.",
  },
  atlas: {
    id: "atlas",
    name: "Atlas",
    emoji: "🌍",
    role: "Análisis Externo",
    color: "#22c55e",
    phase: "S",
    description: "Tu oficial de inteligencia de mercado con datos y competencia.",
  },
  pulse: {
    id: "pulse",
    name: "Pulse",
    emoji: "💜",
    role: "Centro de Decisión",
    color: "#3B82F6",
    phase: "S",
    description: "Mapea el proceso de compra y los centros de poder de tus clientes.",
  },
  vega: {
    id: "vega",
    name: "Vega",
    emoji: "⭐",
    role: "Arquitectura de Oferta",
    color: "#3B82F6",
    phase: "S",
    description: "Diseña una oferta irresistible con escalera de valor y garantías.",
  },
  orlando: {
    id: "orlando",
    name: "Orlando",
    emoji: "🦉",
    role: "Objetivos SMART",
    color: "#F59E0B",
    phase: "O",
    description: "Define objetivos estratégicos validados contra tu capacidad real.",
  },
  fernando: {
    id: "fernando",
    name: "Fernando",
    emoji: "🐊",
    role: "Estrategia",
    color: "#10B981",
    phase: "ST",
    description: "Construye la hoja de ruta estratégica que conecta objetivos con tácticas.",
  },
  tavo: {
    id: "tavo",
    name: "Tavo",
    emoji: "🐙",
    role: "Tácticas",
    color: "#EF4444",
    phase: "T",
    description: "Traduce la estrategia en planes tácticos priorizados por impacto.",
  },
  carla: {
    id: "carla",
    name: "Carla",
    emoji: "🐝",
    role: "Acción",
    color: "#8B5CF6",
    phase: "A",
    description: "Convierte tácticas en planes de acción ejecutables con timelines.",
  },
  ivan: {
    id: "ivan",
    name: "Iván",
    emoji: "🦎",
    role: "Control / PM Loop",
    color: "#06B6D4",
    phase: "C",
    description: "Monitorea KPIs y mantiene el ciclo de mejora continua activo.",
  },
};

export const STATUS_MAP = {
  borrador: { label: "Borrador", color: "#F59E0B", icon: "🟡" },
  en_revision: { label: "En revisión", color: "#3B82F6", icon: "🔵" },
  aprobado: { label: "Aprobado", color: "#10B981", icon: "🟢" },
  rehacer: { label: "Rehacer", color: "#EF4444", icon: "🔴" },
  pendiente: { label: "Pendiente", color: "#6B7280", icon: "⚪" },
} as const;

export const NAV_ITEMS = [
  { label: "Dashboard", href: "/dashboard", icon: "LayoutDashboard" },
  { label: "Mi Academia", href: "/academy", icon: "GraduationCap" },
  { label: "Entregables", href: "/academy/deliverables", icon: "FileCheck" },
  { label: "Comunidad", href: "/community", icon: "Users" },
] as const;

export const NAV_ITEMS_BOTTOM = [
  { label: "Configuración", href: "/settings", icon: "Settings" },
  { label: "Facturación", href: "/billing", icon: "CreditCard" },
  { label: "Admin", href: "/admin", icon: "Shield" },
] as const;
