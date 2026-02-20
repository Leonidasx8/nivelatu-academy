import type { Plan, PlanFeature } from "@/types";

export const plans: Plan[] = [
  {
    id: "starter",
    name: "Starter",
    price: 49,
    annualPrice: 470,
    description: "Para emprendedores que están comenzando a construir su academia.",
    features: [
      "1 academia",
      "Hasta 50 estudiantes",
      "Agentes Delfino y Forge",
      "Exportación PDF",
      "Soporte por email",
      "Actualizaciones incluidas",
    ],
    cta: "Comenzar gratis",
    featured: false,
  },
  {
    id: "pro",
    name: "Pro",
    price: 129,
    annualPrice: 1238,
    description: "Para coaches y consultores que quieren lanzar con velocidad y claridad estratégica.",
    features: [
      "Academias ilimitadas",
      "Estudiantes ilimitados",
      "Todos los agentes IA (10 agentes)",
      "Exportación PDF, DOC y Sheets",
      "Soporte prioritario",
      "Plantillas avanzadas",
      "Análisis de progreso",
      "Integraciones nativas",
    ],
    cta: "Comenzar con Pro",
    featured: true,
    badge: "MÁS POPULAR ⚡",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: 0,
    annualPrice: 0,
    description: "Para organizaciones que necesitan escala, personalización y control total.",
    features: [
      "Todo lo de Pro",
      "White label completo",
      "SSO y autenticación empresarial",
      "API acceso completo",
      "SLA garantizado",
      "Gerente de cuenta dedicado",
      "Onboarding personalizado",
      "Reportes personalizados",
    ],
    cta: "Contactar ventas",
    featured: false,
  },
];

export const planFeatures: PlanFeature[] = [
  // Plataforma
  { category: "Plataforma", feature: "Número de academias", starter: "1", pro: "Ilimitadas", enterprise: "Ilimitadas" },
  { category: "Plataforma", feature: "Estudiantes activos", starter: "50", pro: "Ilimitados", enterprise: "Ilimitados" },
  { category: "Plataforma", feature: "Almacenamiento", starter: "5 GB", pro: "100 GB", enterprise: "Personalizado" },
  { category: "Plataforma", feature: "Dominio personalizado", starter: false, pro: true, enterprise: true },
  { category: "Plataforma", feature: "White label", starter: false, pro: false, enterprise: true },
  { category: "Plataforma", feature: "SSO empresarial", starter: false, pro: false, enterprise: true },
  { category: "Plataforma", feature: "API acceso completo", starter: false, pro: false, enterprise: true },
  { category: "Plataforma", feature: "Multi-idioma", starter: false, pro: true, enterprise: true },

  // Agentes IA
  { category: "Agentes IA", feature: "Delfino (Brief Express)", starter: true, pro: true, enterprise: true },
  { category: "Agentes IA", feature: "Forge (Análisis Interno)", starter: true, pro: true, enterprise: true },
  { category: "Agentes IA", feature: "Atlas (Análisis Externo)", starter: false, pro: true, enterprise: true },
  { category: "Agentes IA", feature: "Pulse (Centro de Decisión)", starter: false, pro: true, enterprise: true },
  { category: "Agentes IA", feature: "Vega (Arquitectura de Oferta)", starter: false, pro: true, enterprise: true },
  { category: "Agentes IA", feature: "Orlando (Objetivos SMART)", starter: false, pro: true, enterprise: true },
  { category: "Agentes IA", feature: "Fernando (Estrategia)", starter: false, pro: true, enterprise: true },
  { category: "Agentes IA", feature: "Tavo (Tácticas)", starter: false, pro: true, enterprise: true },
  { category: "Agentes IA", feature: "Carla (Acción)", starter: false, pro: true, enterprise: true },
  { category: "Agentes IA", feature: "Iván (Control / PM Loop)", starter: false, pro: true, enterprise: true },

  // Exportación
  { category: "Exportación", feature: "Exportar a PDF", starter: true, pro: true, enterprise: true },
  { category: "Exportación", feature: "Exportar a DOC", starter: false, pro: true, enterprise: true },
  { category: "Exportación", feature: "Exportar a Google Sheets", starter: false, pro: true, enterprise: true },
  { category: "Exportación", feature: "Exportar a Notion", starter: false, pro: true, enterprise: true },
  { category: "Exportación", feature: "Historial de versiones", starter: "7 días", pro: "90 días", enterprise: "Ilimitado" },
  { category: "Exportación", feature: "Reportes personalizados", starter: false, pro: false, enterprise: true },
  { category: "Exportación", feature: "Plantillas de exportación", starter: "2", pro: "20+", enterprise: "Personalizadas" },
  { category: "Exportación", feature: "Marca de agua en exports", starter: true, pro: false, enterprise: false },

  // Soporte
  { category: "Soporte", feature: "Soporte por email", starter: true, pro: true, enterprise: true },
  { category: "Soporte", feature: "Soporte prioritario", starter: false, pro: true, enterprise: true },
  { category: "Soporte", feature: "Chat en vivo", starter: false, pro: true, enterprise: true },
  { category: "Soporte", feature: "Gerente de cuenta dedicado", starter: false, pro: false, enterprise: true },
  { category: "Soporte", feature: "Onboarding personalizado", starter: false, pro: false, enterprise: true },
  { category: "Soporte", feature: "SLA garantizado", starter: false, pro: false, enterprise: true },
];
