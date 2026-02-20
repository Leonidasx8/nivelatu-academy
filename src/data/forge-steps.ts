import type { Step } from "@/types/sostac";

export const forgeSteps: Step[] = [
  // ============================================================
  // MODULE 1: Mision (4 steps) — status: completed
  // ============================================================
  {
    id: "step-forge-m1-s1",
    moduleId: "forge-m1",
    title: "Proposito Fundacional",
    order: 1,
    status: "completed",
    agentInstruction:
      "Empecemos por lo mas importante: \u00bfpor que existe tu academia? No me digas 'para ganar dinero' \u2014 eso es el resultado, no el proposito. Si no sabes por que estas haciendo esto, tu audiencia tampoco lo va a saber.",
    formFields: [
      {
        id: "purpose-type",
        type: "radio",
        label: "\u00bfCual es el motor principal detras de tu academia?",
        description:
          "Se honesto/a. No hay respuesta correcta, pero hay respuestas mas sostenibles que otras.",
        required: true,
        options: [
          {
            value: "passion",
            label: "Pasion por ensenar mi conocimiento",
          },
          {
            value: "impact",
            label: "Quiero generar impacto en mi industria",
          },
          {
            value: "freedom",
            label: "Busco libertad financiera y de tiempo",
          },
          {
            value: "legacy",
            label: "Quiero construir un legado duradero",
          },
          {
            value: "demand",
            label: "Hay demanda y quiero capitalizarla",
          },
        ],
      },
      {
        id: "mission-statement-draft",
        type: "textarea",
        label: "Escribe tu declaracion de mision (primera version)",
        description:
          "No te preocupes por que sea perfecta. La vamos a pulir en el paso 4.",
        placeholder: "Mi academia existe para...",
        required: true,
        maxLength: 300,
      },
      {
        id: "years-in-field",
        type: "slider",
        label: "\u00bfCuantos anos de experiencia tienes en tu area de expertise?",
        description:
          "Esto me ayuda a calibrar que tan profundo podemos ir con tu contenido.",
        required: true,
        sliderPositions: [
          "Menos de 1 ano",
          "1\u20133 anos",
          "3\u20135 anos",
          "5\u201310 anos",
          "Mas de 10 anos",
        ],
      },
    ],
  },
  {
    id: "step-forge-m1-s2",
    moduleId: "forge-m1",
    title: "Audiencia Ideal",
    order: 2,
    status: "completed",
    agentInstruction:
      "Ahora necesito entender a quien vas a servir. Y no, 'todo el mundo' no es una respuesta. El que le habla a todos, no le habla a nadie. Vamos a afinar tu punteria.",
    formFields: [
      {
        id: "audience-segments",
        type: "chip-selector",
        label: "\u00bfQuienes son tus estudiantes ideales?",
        description: "Selecciona los segmentos que mejor describen a tu audiencia objetivo.",
        required: true,
        options: [
          {
            value: "profesionales",
            label: "Profesionales activos",
            emoji: "\ud83d\udcbc",
          },
          {
            value: "emprendedores",
            label: "Emprendedores",
            emoji: "\ud83d\ude80",
          },
          {
            value: "freelancers",
            label: "Freelancers",
            emoji: "\ud83c\udfaf",
          },
          {
            value: "estudiantes",
            label: "Estudiantes universitarios",
            emoji: "\ud83c\udf93",
          },
          {
            value: "career-changers",
            label: "Personas en transicion de carrera",
            emoji: "\ud83d\udd04",
          },
          {
            value: "corporativos",
            label: "Equipos corporativos",
            emoji: "\ud83c\udfe2",
          },
          {
            value: "creadores",
            label: "Creadores de contenido",
            emoji: "\ud83c\udfa8",
          },
          {
            value: "madres-padres",
            label: "Madres/Padres emprendedores",
            emoji: "\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67",
          },
        ],
      },
      {
        id: "audience-age-range",
        type: "radio",
        label: "\u00bfEn que rango de edad se concentra tu audiencia?",
        required: true,
        options: [
          { value: "18-25", label: "18\u201325 anos (Gen Z)" },
          { value: "26-35", label: "26\u201335 anos (Millennials jovenes)" },
          { value: "36-45", label: "36\u201345 anos (Millennials maduros)" },
          { value: "46-55", label: "46\u201355 anos (Gen X)" },
          { value: "55+", label: "55+ anos" },
        ],
      },
      {
        id: "audience-geo",
        type: "text",
        label: "\u00bfEn que paises o regiones esta tu audiencia principal?",
        placeholder: "Ej: Mexico, Colombia, Espana, Latinoamerica en general...",
        required: true,
        maxLength: 150,
      },
    ],
  },
  {
    id: "step-forge-m1-s3",
    moduleId: "forge-m1",
    title: "Problema Central",
    order: 3,
    status: "completed",
    agentInstruction:
      "Toda academia exitosa resuelve un problema real. No un problema inventado que tu crees que la gente tiene \u2014 sino uno que les quita el sueno. Vamos a encontrar el tuyo.",
    formFields: [
      {
        id: "pain-points",
        type: "toggle-list",
        label: "\u00bfCuales de estos dolores experimentan tus estudiantes potenciales?",
        description: "Activa los que has observado directamente o que te han mencionado.",
        required: true,
        options: [
          {
            value: "falta-conocimiento",
            label: "No saben por donde empezar",
            description: "Estan perdidos y abrumados con tanta informacion gratuita contradictoria",
          },
          {
            value: "falta-resultados",
            label: "Saben la teoria pero no logran resultados",
            description: "Consumen contenido pero no ejecutan o no ven retorno",
          },
          {
            value: "falta-comunidad",
            label: "Se sienten solos en el proceso",
            description: "No tienen un grupo de pares ni mentor que los guie",
          },
          {
            value: "falta-estructura",
            label: "Les falta un sistema paso a paso",
            description: "Tienen piezas sueltas pero no un framework completo",
          },
          {
            value: "falta-accountability",
            label: "No tienen accountability",
            description: "Empiezan y abandonan porque nadie los mantiene enfocados",
          },
          {
            value: "falta-certificacion",
            label: "Necesitan credenciales",
            description: "Requieren una certificacion para avanzar profesionalmente",
          },
        ],
      },
      {
        id: "core-problem-statement",
        type: "textarea",
        label: "Describe el problema central que tu academia resuelve, en una sola oracion",
        placeholder: "Mi audiencia sufre de... y mi academia les ayuda a...",
        required: true,
        maxLength: 250,
      },
    ],
  },
  {
    id: "step-forge-m1-s4",
    moduleId: "forge-m1",
    title: "Declaracion de Mision",
    order: 4,
    status: "completed",
    agentInstruction:
      "Hora de consolidar todo lo que me has dicho en una declaracion de mision solida. Esta sera tu brujula \u2014 cada decision que tomes de aqui en adelante deberia pasar por este filtro.",
    formFields: [
      {
        id: "mission-confidence",
        type: "rating",
        label: "\u00bfQue tan claro/a tienes el proposito de tu academia despues de estos ejercicios?",
        description: "1 = todavia confuso, 5 = cristalino",
        required: true,
      },
      {
        id: "mission-final",
        type: "textarea",
        label: "Escribe tu declaracion de mision final",
        description:
          "Usa este formato: '[Nombre de tu academia] existe para ayudar a [audiencia] a [resultado deseado] a traves de [metodo/enfoque unico].'",
        placeholder:
          "[Mi academia] existe para ayudar a [quien] a [lograr que] a traves de [como].",
        required: true,
        maxLength: 400,
      },
      {
        id: "mission-test",
        type: "radio",
        label: "\u00bfTu mision pasa la 'prueba de la abuela'? (Es decir, \u00bfuna persona ajena a tu industria la entenderia?)",
        required: true,
        options: [
          { value: "yes", label: "Si, cualquiera la entenderia" },
          { value: "mostly", label: "Mas o menos, podria ser mas simple" },
          { value: "no", label: "No, usa mucho jargon tecnico" },
          {
            value: "unsure",
            label: "No estoy seguro/a, necesito feedback",
          },
        ],
      },
    ],
  },

  // ============================================================
  // MODULE 2: Producto / Servicio (5 steps) — status: completed
  // ============================================================
  {
    id: "step-forge-m2-s1",
    moduleId: "forge-m2",
    title: "Inventario de Conocimiento",
    order: 1,
    status: "completed",
    agentInstruction:
      "Antes de crear un producto, necesitas saber exactamente que tienes para ofrecer. La mayoria de los expertos subestiman su propio conocimiento. Vamos a hacer un inventario real.",
    formFields: [
      {
        id: "expertise-areas",
        type: "chip-selector",
        label: "\u00bfEn que areas tienes conocimiento profundo que podrias ensenar?",
        description: "Selecciona todas las que dominas a nivel avanzado.",
        required: true,
        options: [
          { value: "tecnica", label: "Habilidades tecnicas", emoji: "\u2699\ufe0f" },
          { value: "estrategia", label: "Estrategia de negocio", emoji: "\ud83c\udfaf" },
          {
            value: "creatividad",
            label: "Creatividad y diseno",
            emoji: "\ud83c\udfa8",
          },
          {
            value: "liderazgo",
            label: "Liderazgo y gestion",
            emoji: "\ud83d\udc51",
          },
          {
            value: "ventas",
            label: "Ventas y persuasion",
            emoji: "\ud83d\udcb0",
          },
          {
            value: "marketing",
            label: "Marketing digital",
            emoji: "\ud83d\udce3",
          },
          {
            value: "bienestar",
            label: "Bienestar y salud",
            emoji: "\ud83c\udf3f",
          },
          {
            value: "datos",
            label: "Datos y analitica",
            emoji: "\ud83d\udcca",
          },
          {
            value: "desarrollo-personal",
            label: "Desarrollo personal",
            emoji: "\ud83e\udde0",
          },
          {
            value: "finanzas",
            label: "Finanzas personales o empresariales",
            emoji: "\ud83d\udcc8",
          },
        ],
      },
      {
        id: "content-volume",
        type: "slider",
        label: "\u00bfCuanto contenido original ya tienes creado?",
        description:
          "Cuenta todo: posts, videos, presentaciones, documentos, talleres que has dado...",
        required: true,
        sliderPositions: [
          "Nada aun",
          "Algo (menos de 10 piezas)",
          "Moderado (10\u201350 piezas)",
          "Bastante (50\u2013200 piezas)",
          "Mucho (200+ piezas)",
        ],
      },
      {
        id: "teaching-experience",
        type: "toggle-list",
        label: "\u00bfEn que formatos ya has ensenado o compartido tu conocimiento?",
        required: true,
        options: [
          {
            value: "talleres-presenciales",
            label: "Talleres presenciales",
            description: "Has facilitado sesiones cara a cara",
          },
          {
            value: "webinars",
            label: "Webinars o sesiones en vivo online",
            description: "Has dado clases en Zoom, Meet, etc.",
          },
          {
            value: "contenido-social",
            label: "Contenido en redes sociales",
            description: "Publicas contenido educativo regularmente",
          },
          {
            value: "podcast",
            label: "Podcast o canal de YouTube",
            description: "Tienes un canal de contenido largo",
          },
          {
            value: "blog-newsletter",
            label: "Blog o newsletter",
            description: "Escribes contenido escrito con regularidad",
          },
          {
            value: "mentoria-informal",
            label: "Mentoria informal",
            description: "Has mentoreado colegas o conocidos sin cobrar",
          },
        ],
      },
    ],
  },
  {
    id: "step-forge-m2-s2",
    moduleId: "forge-m2",
    title: "Formato de Entrega",
    order: 2,
    status: "completed",
    agentInstruction:
      "El formato en que entregas tu conocimiento importa tanto como el contenido mismo. Un buen curso en el formato incorrecto fracasa. Vamos a elegir bien.",
    formFields: [
      {
        id: "delivery-format",
        type: "radio",
        label: "\u00bfCual sera el formato principal de entrega de tu academia?",
        description:
          "Elige el que mejor se adapte a tu estilo y al de tu audiencia.",
        required: true,
        options: [
          {
            value: "self-paced",
            label: "100% grabado (a su ritmo)",
            description: "El estudiante avanza solo con videos y materiales pregrabados",
          },
          {
            value: "cohort",
            label: "Cohortes en vivo (con fechas fijas)",
            description: "Grupos que empiezan y terminan juntos",
          },
          {
            value: "hybrid",
            label: "Hibrido (grabado + sesiones en vivo)",
            description: "Contenido pregrabado complementado con llamadas grupales",
          },
          {
            value: "community",
            label: "Comunidad con contenido continuo",
            description: "Acceso permanente a contenido nuevo y comunidad activa",
          },
          {
            value: "mentorship",
            label: "Programa de mentoria intensivo",
            description: "Contacto directo y personalizado con el mentor",
          },
        ],
      },
      {
        id: "content-types",
        type: "chip-selector",
        label: "\u00bfQue tipos de contenido incluira tu programa?",
        required: true,
        options: [
          { value: "video-lessons", label: "Video lecciones", emoji: "\ud83c\udfa5" },
          { value: "workbooks", label: "Workbooks / PDFs", emoji: "\ud83d\udcdd" },
          { value: "live-calls", label: "Llamadas en vivo", emoji: "\ud83d\udcf9" },
          { value: "quizzes", label: "Quizzes / Evaluaciones", emoji: "\u2705" },
          { value: "templates", label: "Templates descargables", emoji: "\ud83d\udccb" },
          { value: "community", label: "Foro o comunidad", emoji: "\ud83d\udcac" },
          { value: "case-studies", label: "Casos de estudio", emoji: "\ud83d\udd0d" },
          { value: "challenges", label: "Retos semanales", emoji: "\ud83c\udfc6" },
        ],
      },
      {
        id: "lesson-duration",
        type: "slider",
        label: "\u00bfCual sera la duracion ideal de cada leccion?",
        description: "Piensa en la atencion de tu audiencia y la complejidad del tema.",
        required: true,
        sliderPositions: [
          "5\u201310 min (micro-lecciones)",
          "10\u201320 min (lecciones cortas)",
          "20\u201340 min (lecciones estandar)",
          "40\u201360 min (lecciones profundas)",
          "60+ min (masterclasses)",
        ],
      },
    ],
  },
  {
    id: "step-forge-m2-s3",
    moduleId: "forge-m2",
    title: "Experiencia del Estudiante",
    order: 3,
    status: "completed",
    agentInstruction:
      "El contenido es solo una parte de la ecuacion. La experiencia que vive tu estudiante determina si termina el programa, si recomienda, y si vuelve a comprarte. Disenemos esa experiencia.",
    formFields: [
      {
        id: "completion-strategy",
        type: "toggle-list",
        label: "\u00bfQue mecanismos usaras para que tus estudiantes terminen el programa?",
        description:
          "La tasa promedio de finalizacion de cursos online es del 15%. Necesitas estrategias activas.",
        required: true,
        options: [
          {
            value: "gamification",
            label: "Gamificacion (puntos, badges, rankings)",
            description: "Elementos de juego que motivan el progreso",
          },
          {
            value: "deadlines",
            label: "Fechas limite por modulo",
            description: "Urgencia que previene la procrastinacion",
          },
          {
            value: "community-support",
            label: "Grupo de apoyo entre estudiantes",
            description: "Peers que se motivan mutuamente",
          },
          {
            value: "accountability-partner",
            label: "Sistema de accountability partner",
            description: "Pareja de estudio que se reportan mutuamente",
          },
          {
            value: "certificate",
            label: "Certificado al completar",
            description: "Incentivo tangible al final del camino",
          },
          {
            value: "drip-content",
            label: "Contenido liberado progresivamente",
            description: "No dar todo de golpe para evitar overwhelm",
          },
        ],
      },
      {
        id: "onboarding-quality",
        type: "rating",
        label: "\u00bfQue tan desarrollado tienes tu proceso de onboarding para nuevos estudiantes?",
        description: "1 = no tengo nada, 5 = tengo un flujo automatizado y probado",
        required: true,
      },
      {
        id: "student-journey-notes",
        type: "textarea",
        label: "Describe el viaje ideal de tu estudiante desde que compra hasta que logra el resultado prometido",
        placeholder:
          "Dia 1: El estudiante recibe... Semana 1: Completa el modulo de... Al final: Logra...",
        maxLength: 600,
      },
    ],
  },
  {
    id: "step-forge-m2-s4",
    moduleId: "forge-m2",
    title: "Diferenciador Clave",
    order: 4,
    status: "completed",
    agentInstruction:
      "En un mercado saturado de cursos online, si no puedes decir en 10 segundos por que tu academia es diferente, tienes un problema. Vamos a encontrar tu edge.",
    formFields: [
      {
        id: "differentiator-type",
        type: "radio",
        label: "\u00bfCual es tu principal ventaja competitiva?",
        description: "Elige la que genuinamente te diferencia, no la que suena mas bonita.",
        required: true,
        options: [
          {
            value: "methodology",
            label: "Metodologia propia o framework unico",
          },
          {
            value: "results",
            label: "Resultados comprobados con casos reales",
          },
          {
            value: "access",
            label: "Acceso directo al experto (tu)",
          },
          {
            value: "community",
            label: "Comunidad exclusiva de alto nivel",
          },
          {
            value: "niche",
            label: "Especializacion ultra-nicho",
          },
          {
            value: "tech",
            label: "Tecnologia o plataforma superior",
          },
        ],
      },
      {
        id: "unique-value-proposition",
        type: "textarea",
        label: "Escribe tu propuesta de valor unica (UVP) en una sola frase",
        description:
          "Formato sugerido: 'Ayudo a [audiencia] a [resultado] en [tiempo] sin [objecion comun]'",
        placeholder:
          "Ayudo a [quien] a [lograr que] en [cuanto tiempo] sin [que dolor evitan]...",
        required: true,
        maxLength: 200,
      },
      {
        id: "proof-elements",
        type: "chip-selector",
        label: "\u00bfQue pruebas tienes de que tu metodo funciona?",
        required: true,
        options: [
          { value: "testimonials", label: "Testimonios de clientes", emoji: "\u2b50" },
          { value: "case-studies", label: "Casos de estudio documentados", emoji: "\ud83d\udcca" },
          { value: "credentials", label: "Certificaciones o titulos", emoji: "\ud83c\udf96\ufe0f" },
          { value: "media", label: "Apariciones en medios", emoji: "\ud83d\udcfa" },
          { value: "metrics", label: "Metricas de resultados", emoji: "\ud83d\udcc8" },
          { value: "portfolio", label: "Portfolio de proyectos", emoji: "\ud83d\udcc2" },
          { value: "community-size", label: "Tamano de comunidad", emoji: "\ud83d\udc65" },
          { value: "years", label: "Anos de experiencia", emoji: "\u23f3" },
        ],
      },
    ],
  },
  {
    id: "step-forge-m2-s5",
    moduleId: "forge-m2",
    title: "Producto Minimo Viable",
    order: 5,
    status: "completed",
    agentInstruction:
      "Ultimo paso de este modulo y es crucial: no necesitas tener TODO listo para lanzar. Necesitas tu MVP \u2014 lo minimo viable para validar que la gente pague. Dejemos de perfeccionar y empecemos a ejecutar.",
    formFields: [
      {
        id: "mvp-scope",
        type: "slider",
        label: "\u00bfQue tan grande es el alcance de tu primer lanzamiento?",
        description:
          "El error mas comun es querer lanzar con todo. El MVP te permite validar rapido.",
        required: true,
        sliderPositions: [
          "Un solo taller en vivo",
          "Mini-curso (3\u20135 lecciones)",
          "Curso completo (10+ lecciones)",
          "Programa con comunidad",
          "Plataforma completa con multiples cursos",
        ],
      },
      {
        id: "mvp-timeline",
        type: "radio",
        label: "\u00bfEn cuanto tiempo puedes tener tu MVP listo para vender?",
        required: true,
        options: [
          { value: "1-week", label: "1 semana o menos" },
          { value: "2-weeks", label: "2 semanas" },
          { value: "1-month", label: "1 mes" },
          { value: "2-3-months", label: "2\u20133 meses" },
          { value: "6-months", label: "6 meses o mas" },
        ],
      },
      {
        id: "mvp-readiness",
        type: "rating",
        label: "\u00bfQue tan listo/a te sientes para lanzar tu primer producto al mercado?",
        description: "1 = no estoy listo, 5 = puedo lanzar manana",
        required: true,
      },
      {
        id: "mvp-blockers",
        type: "textarea",
        label: "\u00bfQue es lo que te falta para poder hacer tu primer venta?",
        placeholder:
          "Ej: Necesito grabar las lecciones, configurar la plataforma, crear la pagina de ventas...",
        maxLength: 400,
      },
    ],
  },

  // ============================================================
  // MODULE 3: Modelo de Negocio (4 steps) — status: in_progress
  // Steps 1-3 completed, step 4 in_progress
  // ============================================================
  {
    id: "step-forge-m3-s1",
    moduleId: "forge-m3",
    title: "Fuentes de Ingresos",
    order: 1,
    status: "completed",
    agentInstruction:
      "Vamos a mapear como genera dinero tu academia. No quiero suposiciones \u2014 quiero claridad. Si no sabes exactamente de donde viene cada dolar, no tienes un negocio, tienes un hobby caro.",
    formFields: [
      {
        id: "income-sources",
        type: "chip-selector",
        label: "\u00bfCuales son tus fuentes de ingresos actuales o planeadas?",
        description: "Selecciona todas las que apliquen a tu modelo de academia.",
        required: true,
        options: [
          { value: "cursos-grabados", label: "Cursos grabados", emoji: "\ud83c\udfac" },
          { value: "membresia", label: "Membresia recurrente", emoji: "\ud83d\udd04" },
          { value: "mentoria-grupal", label: "Mentoria grupal", emoji: "\ud83d\udc65" },
          { value: "coaching-1a1", label: "Coaching 1:1", emoji: "\ud83e\udd1d" },
          { value: "talleres-vivos", label: "Talleres en vivo", emoji: "\ud83c\udfa4" },
          { value: "certificaciones", label: "Certificaciones", emoji: "\ud83c\udfc5" },
          { value: "comunidad-paga", label: "Comunidad de pago", emoji: "\ud83d\udcac" },
          { value: "consultorias", label: "Consultorias", emoji: "\ud83d\udcbc" },
          { value: "licencias", label: "Licencias de contenido", emoji: "\ud83d\udcc4" },
          { value: "afiliados", label: "Programa de afiliados", emoji: "\ud83d\udd17" },
        ],
      },
      {
        id: "primary-revenue",
        type: "radio",
        label: "\u00bfCual es tu fuente de ingresos PRINCIPAL (la que genera o generara mas del 50%)?",
        required: true,
        options: [
          { value: "cursos-grabados", label: "Cursos grabados" },
          { value: "membresia", label: "Membresia recurrente" },
          { value: "mentoria-grupal", label: "Mentoria grupal" },
          { value: "coaching-1a1", label: "Coaching 1:1" },
          { value: "talleres-vivos", label: "Talleres en vivo" },
        ],
      },
      {
        id: "revenue-diversification",
        type: "rating",
        label: "\u00bfQue tan diversificadas estan tus fuentes de ingresos?",
        description:
          "1 = dependo 100% de una sola fuente, 5 = tengo multiples fuentes balanceadas",
        required: true,
      },
    ],
  },
  {
    id: "step-forge-m3-s2",
    moduleId: "forge-m3",
    title: "Estructura de Precios",
    order: 2,
    status: "completed",
    agentInstruction:
      "Ahora entendamos tu estructura de precios. Muchos coaches y creadores se subestiman brutalmente. Si tu precio no te da un poco de miedo, probablemente es demasiado bajo.",
    formFields: [
      {
        id: "price-range",
        type: "slider",
        label: "\u00bfEn que rango de precio esta tu oferta principal?",
        description:
          "Mueve el slider al rango mas cercano a tu precio actual o planeado.",
        required: true,
        sliderPositions: [
          "$0\u2013$97",
          "$97\u2013$297",
          "$297\u2013$997",
          "$997\u2013$3,000",
          "$3,000+",
        ],
      },
      {
        id: "pricing-model",
        type: "radio",
        label: "\u00bfQue modelo de pricing usas o planeas usar?",
        required: true,
        options: [
          { value: "one-time", label: "Pago unico" },
          { value: "subscription", label: "Suscripcion mensual" },
          { value: "payment-plan", label: "Plan de pagos (3\u20136 cuotas)" },
          { value: "tiered", label: "Tiers (basico / pro / premium)" },
          { value: "freemium", label: "Freemium (gratis + premium)" },
        ],
      },
      {
        id: "pricing-confidence",
        type: "rating",
        label: "\u00bfQue tan seguro/a te sientes con tu precio actual?",
        description: "1 = muy inseguro, 5 = totalmente confiado",
        required: true,
      },
    ],
  },
  {
    id: "step-forge-m3-s3",
    moduleId: "forge-m3",
    title: "Costos Operativos",
    order: 3,
    status: "completed",
    agentInstruction:
      "Ingresos sin control de costos es una ilusion de rentabilidad. Vamos a mapear a donde se va tu dinero. Se que no es sexy, pero es la diferencia entre un negocio y una quemada de cash.",
    formFields: [
      {
        id: "cost-categories",
        type: "toggle-list",
        label: "\u00bfEn que areas estas gastando (o planeas gastar) dinero?",
        description: "Activa todas las categorias de costo que aplican a tu operacion.",
        required: true,
        options: [
          {
            value: "plataforma",
            label: "Plataforma LMS / hosting",
            description: "Kajabi, Teachable, Thinkific, WordPress, etc.",
          },
          {
            value: "produccion",
            label: "Produccion de contenido",
            description: "Equipo de grabacion, edicion de video, diseno grafico",
          },
          {
            value: "marketing",
            label: "Marketing y publicidad",
            description: "Ads en Meta, Google, influencers, email marketing",
          },
          {
            value: "equipo",
            label: "Equipo / asistentes",
            description: "VA, community manager, soporte al cliente",
          },
          {
            value: "herramientas",
            label: "Herramientas SaaS",
            description: "Zoom, Canva, email, CRM, analytics",
          },
          {
            value: "comisiones",
            label: "Comisiones y fees",
            description: "Pasarelas de pago, afiliados, marketplace fees",
          },
          {
            value: "legal",
            label: "Legal y contabilidad",
            description: "Abogados, contadores, permisos",
          },
        ],
      },
      {
        id: "monthly-costs",
        type: "slider",
        label: "\u00bfCual es tu costo operativo mensual estimado (o proyectado)?",
        required: true,
        sliderPositions: [
          "Menos de $100/mes",
          "$100\u2013$500/mes",
          "$500\u2013$2,000/mes",
          "$2,000\u2013$5,000/mes",
          "Mas de $5,000/mes",
        ],
      },
      {
        id: "biggest-expense",
        type: "text",
        label: "\u00bfCual es tu gasto mas grande actualmente?",
        placeholder: "Ej: Publicidad en Meta, $800/mes",
        required: true,
        maxLength: 150,
      },
    ],
  },
  {
    id: "step-forge-m3-s4",
    moduleId: "forge-m3",
    title: "Proyecciones de Rentabilidad",
    order: 4,
    status: "in_progress",
    agentInstruction:
      "Ultimo paso del modelo de negocio. Aqui es donde la realidad te mira a los ojos. Vamos a proyectar si tu modelo es sostenible o si necesitamos hacer ajustes antes de que inviertas mas tiempo y dinero.",
    formFields: [
      {
        id: "monthly-revenue-target",
        type: "slider",
        label: "\u00bfCual es tu meta de ingresos mensuales para los proximos 12 meses?",
        description:
          "Se ambicioso pero realista. No me digas un millon si aun no has hecho tu primera venta.",
        required: true,
        sliderPositions: [
          "Menos de $1,000/mes",
          "$1,000\u2013$3,000/mes",
          "$3,000\u2013$10,000/mes",
          "$10,000\u2013$30,000/mes",
          "Mas de $30,000/mes",
        ],
      },
      {
        id: "break-even-timeline",
        type: "radio",
        label: "\u00bfEn cuanto tiempo esperas alcanzar el punto de equilibrio (break-even)?",
        description: "El punto donde tus ingresos cubren todos tus costos.",
        required: true,
        options: [
          { value: "already", label: "Ya lo alcance" },
          { value: "3-months", label: "En los proximos 3 meses" },
          { value: "6-months", label: "En 6 meses" },
          { value: "12-months", label: "En 12 meses" },
          { value: "unsure", label: "No tengo idea" },
        ],
      },
      {
        id: "financial-confidence",
        type: "rating",
        label: "\u00bfQue tan confiado/a te sientes en la viabilidad financiera de tu modelo?",
        description: "1 = preocupado, 5 = totalmente confiado",
        required: true,
      },
      {
        id: "financial-concerns",
        type: "textarea",
        label: "\u00bfCual es tu mayor preocupacion financiera con tu academia?",
        placeholder:
          "Ej: No se si puedo sostener los costos de marketing antes de ver retorno...",
        maxLength: 400,
      },
    ],
  },

  // ============================================================
  // MODULE 4: Estructura Operativa (4 steps) — status: available
  // Step 1 available, rest locked
  // ============================================================
  {
    id: "step-forge-m4-s1",
    moduleId: "forge-m4",
    title: "Roles y Responsabilidades",
    order: 1,
    status: "available",
    agentInstruction:
      "Hablemos de quien hace que en tu academia. Si la respuesta a todo es 'yo', tenemos un problema de escalabilidad que hay que resolver antes de que te quemes.",
    formFields: [
      {
        id: "current-roles",
        type: "toggle-list",
        label: "\u00bfQue roles estas cumpliendo tu personalmente ahora mismo?",
        description:
          "Se brutalmente honesto. Si lo haces todo tu, no pasa nada \u2014 pero necesitamos verlo.",
        required: true,
        options: [
          {
            value: "ceo",
            label: "CEO / Direccion general",
            description: "Tomas todas las decisiones estrategicas",
          },
          {
            value: "instructor",
            label: "Instructor / Creador de contenido",
            description: "Grabas, escribes y produces el material",
          },
          {
            value: "marketing",
            label: "Director de marketing",
            description: "Manejas redes, ads, email, funnels",
          },
          {
            value: "ventas",
            label: "Vendedor / Cerrador",
            description: "Haces las llamadas de venta o cierras en DMs",
          },
          {
            value: "soporte",
            label: "Soporte al cliente",
            description: "Respondes dudas, quejas, solicitudes",
          },
          {
            value: "tech",
            label: "Tecnologo / Webmaster",
            description: "Configuras la plataforma, resuelves bugs",
          },
          {
            value: "admin",
            label: "Administracion y finanzas",
            description: "Facturas, impuestos, contabilidad",
          },
          {
            value: "community",
            label: "Community manager",
            description: "Moderas el grupo, animas la comunidad",
          },
        ],
      },
      {
        id: "team-size",
        type: "radio",
        label: "\u00bfCon cuantas personas cuentas actualmente en tu equipo?",
        required: true,
        options: [
          { value: "solo", label: "Solo yo (solopreneur)" },
          { value: "1-2", label: "1\u20132 personas (freelancers o VA)" },
          { value: "3-5", label: "3\u20135 personas (equipo pequeno)" },
          { value: "6-10", label: "6\u201310 personas" },
          { value: "10+", label: "Mas de 10 personas" },
        ],
      },
      {
        id: "first-hire",
        type: "text",
        label: "Si pudieras contratar a UNA persona manana, \u00bfque rol seria?",
        placeholder: "Ej: Editor de video, Community Manager, Asistente virtual...",
        required: true,
        maxLength: 100,
      },
    ],
  },
  {
    id: "step-forge-m4-s2",
    moduleId: "forge-m4",
    title: "Dependencia del Fundador",
    order: 2,
    status: "locked",
    agentInstruction:
      "Este es un tema que muchos fundadores evitan: \u00bfque pasa con tu academia si tu te enfermas una semana? \u00bfO un mes? Si todo depende de ti, no tienes un negocio \u2014 tienes un empleo autoimpuesto.",
    formFields: [
      {
        id: "founder-dependency",
        type: "slider",
        label: "\u00bfQue porcentaje de las operaciones diarias depende exclusivamente de ti?",
        description:
          "Piensa en un dia normal: \u00bfcuantas cosas se detienen si no estas?",
        required: true,
        sliderPositions: [
          "Menos del 20%",
          "20\u201340%",
          "40\u201360%",
          "60\u201380%",
          "Mas del 80%",
        ],
      },
      {
        id: "automated-processes",
        type: "chip-selector",
        label: "\u00bfQue procesos ya tienes automatizados o delegados?",
        description: "Selecciona los que funcionan sin tu intervencion directa.",
        options: [
          { value: "email-marketing", label: "Email marketing", emoji: "\ud83d\udce7" },
          { value: "onboarding", label: "Onboarding de alumnos", emoji: "\ud83d\udc4b" },
          { value: "cobros", label: "Cobros y facturacion", emoji: "\ud83d\udcb3" },
          { value: "soporte", label: "Soporte basico (FAQ/chatbot)", emoji: "\ud83e\udd16" },
          { value: "publicacion", label: "Publicacion de contenido", emoji: "\ud83d\udcc5" },
          { value: "reportes", label: "Reportes y analytics", emoji: "\ud83d\udcca" },
          { value: "seguimiento", label: "Seguimiento de leads", emoji: "\ud83c\udfaf" },
          { value: "nada", label: "Nada esta automatizado", emoji: "\u274c" },
        ],
      },
      {
        id: "vacation-test",
        type: "rating",
        label: "\u00bfPodrias irte de vacaciones 2 semanas sin que tu academia se detenga?",
        description:
          "1 = imposible, todo se detiene / 5 = si, todo sigue funcionando",
        required: true,
      },
    ],
  },
  {
    id: "step-forge-m4-s3",
    moduleId: "forge-m4",
    title: "Herramientas y Stack Tecnologico",
    order: 3,
    status: "locked",
    agentInstruction:
      "Tus herramientas son la columna vertebral operativa de tu academia. Demasiadas herramientas = caos. Muy pocas = cuellos de botella. Encontremos el balance.",
    formFields: [
      {
        id: "current-tools",
        type: "toggle-list",
        label: "\u00bfQue herramientas usas actualmente para operar tu academia?",
        description: "Activa las que ya tienes contratadas o en uso.",
        required: true,
        options: [
          {
            value: "lms",
            label: "Plataforma LMS",
            description: "Teachable, Kajabi, Thinkific, Hotmart, etc.",
          },
          {
            value: "email",
            label: "Email marketing",
            description: "Mailchimp, ConvertKit, ActiveCampaign, etc.",
          },
          {
            value: "video",
            label: "Plataforma de video",
            description: "Vimeo, YouTube, Loom, etc.",
          },
          {
            value: "comunidad",
            label: "Plataforma de comunidad",
            description: "Discord, Slack, Circle, Facebook Groups, etc.",
          },
          {
            value: "pago",
            label: "Procesador de pagos",
            description: "Stripe, PayPal, Mercado Pago, etc.",
          },
          {
            value: "crm",
            label: "CRM",
            description: "HubSpot, Pipedrive, Notion, etc.",
          },
          {
            value: "diseno",
            label: "Herramientas de diseno",
            description: "Canva, Figma, Adobe, etc.",
          },
          {
            value: "analytics",
            label: "Analytics",
            description: "Google Analytics, Hotjar, Mixpanel, etc.",
          },
        ],
      },
      {
        id: "tech-satisfaction",
        type: "rating",
        label: "\u00bfQue tan satisfecho/a estas con tu stack tecnologico actual?",
        description: "1 = es un desastre, 5 = funciona perfecto",
        required: true,
      },
      {
        id: "tech-budget",
        type: "slider",
        label: "\u00bfCuanto inviertes mensualmente en herramientas y tecnologia?",
        required: true,
        sliderPositions: [
          "Menos de $50/mes",
          "$50\u2013$150/mes",
          "$150\u2013$500/mes",
          "$500\u2013$1,500/mes",
          "Mas de $1,500/mes",
        ],
      },
    ],
  },
  {
    id: "step-forge-m4-s4",
    moduleId: "forge-m4",
    title: "Procesos y SOPs",
    order: 4,
    status: "locked",
    agentInstruction:
      "SOPs = Standard Operating Procedures. Son las recetas paso a paso que permiten que cualquier persona haga las cosas como tu las harias. Sin SOPs, no puedes delegar \u2014 y si no puedes delegar, no puedes escalar.",
    formFields: [
      {
        id: "documented-processes",
        type: "chip-selector",
        label: "\u00bfQue procesos tienes documentados actualmente?",
        description: "Selecciona los que tienen algun tipo de guia, checklist o manual escrito.",
        options: [
          { value: "produccion-contenido", label: "Produccion de contenido", emoji: "\ud83c\udfa5" },
          { value: "lanzamiento", label: "Proceso de lanzamiento", emoji: "\ud83d\ude80" },
          { value: "onboarding-alumno", label: "Onboarding de alumno", emoji: "\ud83d\udc4b" },
          { value: "atencion-cliente", label: "Atencion al cliente", emoji: "\ud83d\udcde" },
          { value: "publicacion-social", label: "Publicacion en redes", emoji: "\ud83d\udcf1" },
          { value: "contabilidad", label: "Contabilidad mensual", emoji: "\ud83d\udcb0" },
          { value: "ninguno", label: "Ningun proceso documentado", emoji: "\ud83d\ude45" },
        ],
      },
      {
        id: "process-maturity",
        type: "radio",
        label: "\u00bfComo describirias tu nivel de madurez operativa?",
        required: true,
        options: [
          {
            value: "chaos",
            label: "Caos organizado \u2014 todo esta en mi cabeza",
          },
          {
            value: "basic",
            label: "Basico \u2014 tengo algunos checklists sueltos",
          },
          {
            value: "intermediate",
            label: "Intermedio \u2014 procesos clave documentados",
          },
          {
            value: "advanced",
            label: "Avanzado \u2014 SOPs para casi todo, con automatizaciones",
          },
        ],
      },
      {
        id: "bottleneck",
        type: "textarea",
        label: "\u00bfCual es el cuello de botella mas grande en tu operacion actual?",
        description:
          "Eso que te consume mas tiempo del que deberia o que siempre te retrasa.",
        placeholder: "Ej: La edicion de video me toma 3 dias por cada leccion...",
        required: true,
        maxLength: 300,
      },
    ],
  },

  // ============================================================
  // MODULE 5: Valores y Cultura (3 steps) — status: locked
  // ============================================================
  {
    id: "step-forge-m5-s1",
    moduleId: "forge-m5",
    title: "Valores Fundamentales",
    order: 1,
    status: "locked",
    agentInstruction:
      "Los valores no son frases bonitas para poner en tu pagina web. Son los filtros con los que tomas decisiones dificiles. Si tus valores no te han hecho decir que no a algo, probablemente no son valores reales.",
    formFields: [
      {
        id: "core-values",
        type: "chip-selector",
        label: "\u00bfCuales son los valores que realmente guian tus decisiones de negocio?",
        description:
          "Maximo 5. Si seleccionas mas, no son valores \u2014 son deseos.",
        required: true,
        options: [
          { value: "excelencia", label: "Excelencia", emoji: "\ud83c\udfc6" },
          { value: "transparencia", label: "Transparencia", emoji: "\ud83d\udd0d" },
          { value: "innovacion", label: "Innovacion", emoji: "\ud83d\udca1" },
          { value: "comunidad", label: "Comunidad", emoji: "\ud83e\udd1d" },
          { value: "accesibilidad", label: "Accesibilidad", emoji: "\ud83c\udf0d" },
          { value: "resultados", label: "Orientacion a resultados", emoji: "\ud83c\udfaf" },
          { value: "autenticidad", label: "Autenticidad", emoji: "\u2764\ufe0f" },
          { value: "simplicidad", label: "Simplicidad", emoji: "\u2728" },
          { value: "empoderamiento", label: "Empoderamiento", emoji: "\ud83d\udcaa" },
          { value: "curiosidad", label: "Curiosidad", emoji: "\ud83e\uddd0" },
          { value: "compromiso", label: "Compromiso", emoji: "\ud83d\udd25" },
          { value: "libertad", label: "Libertad", emoji: "\ud83e\udeb6" },
        ],
      },
      {
        id: "values-in-action",
        type: "textarea",
        label: "Dame un ejemplo real de cuando uno de tus valores te hizo tomar una decision dificil",
        description:
          "Si no puedes dar un ejemplo, probablemente ese valor es aspiracional, no real.",
        placeholder:
          "Ej: Elegi transparencia y le dije a un cliente que mi curso no era para el...",
        required: true,
        maxLength: 400,
      },
      {
        id: "values-alignment",
        type: "rating",
        label: "\u00bfQue tan alineadas estan tus acciones diarias con tus valores declarados?",
        description:
          "1 = vivo en contradiccion constante, 5 = mis acciones reflejan mis valores al 100%",
        required: true,
      },
    ],
  },
  {
    id: "step-forge-m5-s2",
    moduleId: "forge-m5",
    title: "Cultura de Aprendizaje",
    order: 2,
    status: "locked",
    agentInstruction:
      "Tu academia no es solo contenido \u2014 es una cultura. La forma en que tus estudiantes se sienten dentro de tu ecosistema define si se quedan, si recomiendan, y si se convierten en embajadores de tu marca.",
    formFields: [
      {
        id: "learning-philosophy",
        type: "radio",
        label: "\u00bfCual es tu filosofia de ensenanza?",
        description: "Esto define como disenaremos toda la experiencia del estudiante.",
        required: true,
        options: [
          {
            value: "practice-first",
            label: "Aprender haciendo \u2014 practica primero, teoria despues",
          },
          {
            value: "theory-first",
            label: "Fundamentos solidos \u2014 teoria primero, practica despues",
          },
          {
            value: "mentorship",
            label: "Mentoria activa \u2014 guio paso a paso con retroalimentacion",
          },
          {
            value: "peer-learning",
            label: "Aprendizaje entre pares \u2014 la comunidad ensena",
          },
          {
            value: "self-directed",
            label: "Autodirigido \u2014 doy herramientas, el estudiante elige su camino",
          },
        ],
      },
      {
        id: "community-tone",
        type: "chip-selector",
        label: "\u00bfComo quieres que se sienta tu comunidad de estudiantes?",
        description: "Selecciona los 3 adjetivos que mejor describen el ambiente que quieres crear.",
        required: true,
        options: [
          { value: "retadora", label: "Retadora", emoji: "\ud83d\udcaa" },
          { value: "acogedora", label: "Acogedora", emoji: "\ud83e\uddf8" },
          { value: "profesional", label: "Profesional", emoji: "\ud83d\udc54" },
          { value: "divertida", label: "Divertida", emoji: "\ud83c\udf89" },
          { value: "exclusiva", label: "Exclusiva", emoji: "\ud83d\udc8e" },
          { value: "colaborativa", label: "Colaborativa", emoji: "\ud83e\udd1d" },
          { value: "inspiradora", label: "Inspiradora", emoji: "\ud83c\udf1f" },
          { value: "sin-filtros", label: "Sin filtros", emoji: "\ud83d\udd25" },
        ],
      },
      {
        id: "failure-approach",
        type: "textarea",
        label: "\u00bfComo manejas el fracaso o los errores de tus estudiantes?",
        placeholder:
          "Ej: Celebramos los errores como oportunidades de aprendizaje...",
        required: true,
        maxLength: 300,
      },
    ],
  },
  {
    id: "step-forge-m5-s3",
    moduleId: "forge-m5",
    title: "Promesa de Marca",
    order: 3,
    status: "locked",
    agentInstruction:
      "La promesa de marca es el contrato emocional que haces con tu estudiante. No es tu slogan \u2014 es lo que la gente ESPERA de ti cada vez que interactua con tu academia. Romperla cuesta caro.",
    formFields: [
      {
        id: "brand-personality",
        type: "radio",
        label: "\u00bfCual es la personalidad dominante de tu marca?",
        required: true,
        options: [
          {
            value: "mentor",
            label: "El Mentor \u2014 sabio, experimentado, confiable",
          },
          {
            value: "amigo",
            label: "El Amigo \u2014 cercano, accesible, empatico",
          },
          {
            value: "retador",
            label: "El Retador \u2014 directo, exigente, sin rodeos",
          },
          {
            value: "visionario",
            label: "El Visionario \u2014 innovador, inspirador, futuro-orientado",
          },
          {
            value: "cientifico",
            label: "El Cientifico \u2014 datos, evidencia, metodico",
          },
        ],
      },
      {
        id: "brand-promise-statement",
        type: "textarea",
        label: "Escribe tu promesa de marca en una frase",
        description:
          "Formato: 'Cuando entras a [tu academia], puedes contar con que siempre...'",
        placeholder:
          "Cuando entras a mi academia, puedes contar con que siempre...",
        required: true,
        maxLength: 250,
      },
      {
        id: "brand-consistency",
        type: "rating",
        label: "\u00bfQue tan consistente eres cumpliendo tu promesa de marca en cada punto de contacto?",
        description:
          "1 = inconsistente, varia mucho / 5 = siempre cumplo, sin excepciones",
        required: true,
      },
    ],
  },

  // ============================================================
  // MODULE 6: Canales de Distribucion (4 steps) — status: locked
  // ============================================================
  {
    id: "step-forge-m6-s1",
    moduleId: "forge-m6",
    title: "Canales de Adquisicion Actuales",
    order: 1,
    status: "locked",
    agentInstruction:
      "Puedes tener el mejor producto del mundo, pero si nadie lo ve, no existe. Vamos a auditar como llegan (o llegarian) las personas a tu academia. Sin vanidad metrics \u2014 quiero saber que realmente funciona.",
    formFields: [
      {
        id: "current-channels",
        type: "toggle-list",
        label: "\u00bfQue canales de adquisicion estas usando actualmente?",
        description: "Activa solo los que realmente usas, no los que 'quisieras' usar.",
        required: true,
        options: [
          {
            value: "instagram",
            label: "Instagram",
            description: "Publicaciones, reels, stories, DMs",
          },
          {
            value: "youtube",
            label: "YouTube",
            description: "Videos largos, shorts, livestreams",
          },
          {
            value: "tiktok",
            label: "TikTok",
            description: "Videos cortos virales",
          },
          {
            value: "linkedin",
            label: "LinkedIn",
            description: "Posts, articulos, networking profesional",
          },
          {
            value: "email",
            label: "Email marketing",
            description: "Newsletter, secuencias, campanas",
          },
          {
            value: "seo",
            label: "SEO / Blog",
            description: "Trafico organico de busquedas",
          },
          {
            value: "paid-ads",
            label: "Publicidad pagada",
            description: "Meta Ads, Google Ads, YouTube Ads",
          },
          {
            value: "referrals",
            label: "Referidos / boca a boca",
            description: "Recomendaciones de clientes actuales",
          },
          {
            value: "podcast",
            label: "Podcast",
            description: "Propio o como invitado en otros",
          },
          {
            value: "webinars",
            label: "Webinars / Masterclasses gratis",
            description: "Eventos en vivo como lead magnet",
          },
        ],
      },
      {
        id: "best-channel",
        type: "radio",
        label: "\u00bfCual canal te ha generado (o crees que generara) mas ventas?",
        required: true,
        options: [
          { value: "organic-social", label: "Redes sociales organicas" },
          { value: "paid-ads", label: "Publicidad pagada" },
          { value: "email", label: "Email marketing" },
          { value: "referrals", label: "Referidos" },
          { value: "content-seo", label: "Contenido / SEO" },
          { value: "events", label: "Eventos (webinars, conferencias)" },
        ],
      },
    ],
  },
  {
    id: "step-forge-m6-s2",
    moduleId: "forge-m6",
    title: "Presencia Digital",
    order: 2,
    status: "locked",
    agentInstruction:
      "Tu presencia digital es tu vitrina 24/7. Si alguien busca tu nombre en Google, \u00bfque encuentra? Si la respuesta es 'nada' o 'cosas desactualizadas', estas perdiendo ventas mientras duermes.",
    formFields: [
      {
        id: "digital-assets",
        type: "chip-selector",
        label: "\u00bfQue activos digitales tienes actualmente?",
        description: "Selecciona los que estan activos y actualizados.",
        required: true,
        options: [
          { value: "website", label: "Sitio web propio", emoji: "\ud83c\udf10" },
          { value: "landing-pages", label: "Landing pages", emoji: "\ud83d\udcc4" },
          { value: "blog", label: "Blog activo", emoji: "\u270d\ufe0f" },
          { value: "email-list", label: "Lista de email", emoji: "\ud83d\udce7" },
          { value: "social-profiles", label: "Perfiles sociales", emoji: "\ud83d\udcf1" },
          { value: "podcast-channel", label: "Podcast / Canal YouTube", emoji: "\ud83c\udfa7" },
          { value: "lead-magnet", label: "Lead magnet", emoji: "\ud83e\uddf2" },
          { value: "funnel", label: "Funnel de ventas", emoji: "\ud83d\udd3b" },
        ],
      },
      {
        id: "email-list-size",
        type: "slider",
        label: "\u00bfCual es el tamano de tu lista de email?",
        description:
          "La lista de email sigue siendo el activo digital mas valioso para vender cursos.",
        required: true,
        sliderPositions: [
          "No tengo lista",
          "Menos de 500",
          "500\u20132,000",
          "2,000\u201310,000",
          "Mas de 10,000",
        ],
      },
      {
        id: "website-quality",
        type: "rating",
        label: "\u00bfComo calificas la calidad y profesionalismo de tu sitio web actual?",
        description: "1 = no tengo o es muy basico, 5 = profesional y optimizado para conversion",
        required: true,
      },
    ],
  },
  {
    id: "step-forge-m6-s3",
    moduleId: "forge-m6",
    title: "Estrategia de Contenido",
    order: 3,
    status: "locked",
    agentInstruction:
      "El contenido gratuito es el motor que alimenta tu funnel. Pero contenido sin estrategia es ruido. Vamos a entender que tan intencional eres con lo que publicas y por que.",
    formFields: [
      {
        id: "content-frequency",
        type: "radio",
        label: "\u00bfCon que frecuencia publicas contenido educativo gratuito?",
        required: true,
        options: [
          { value: "daily", label: "Diario" },
          { value: "3-5-week", label: "3\u20135 veces por semana" },
          { value: "1-2-week", label: "1\u20132 veces por semana" },
          { value: "few-month", label: "Algunas veces al mes" },
          { value: "rarely", label: "Rara vez o nunca" },
        ],
      },
      {
        id: "content-pillars",
        type: "chip-selector",
        label: "\u00bfSobre que temas publicas (o publicarias) contenido?",
        description: "Selecciona tus 3\u20134 pilares de contenido principales.",
        required: true,
        options: [
          { value: "educativo", label: "Contenido educativo (how-to)", emoji: "\ud83d\udcda" },
          { value: "inspiracional", label: "Historias inspiracionales", emoji: "\u2728" },
          { value: "detras-camaras", label: "Detras de camaras", emoji: "\ud83c\udfac" },
          { value: "casos-estudio", label: "Casos de estudio", emoji: "\ud83d\udcca" },
          { value: "tendencias", label: "Tendencias de la industria", emoji: "\ud83d\udcc8" },
          { value: "opiniones", label: "Opiniones controversial", emoji: "\ud83d\udd25" },
          { value: "personal", label: "Contenido personal", emoji: "\ud83d\ude4b" },
          { value: "testimonios", label: "Testimonios de clientes", emoji: "\u2b50" },
        ],
      },
      {
        id: "content-strategy-clarity",
        type: "rating",
        label: "\u00bfQue tan clara tienes tu estrategia de contenido?",
        description:
          "1 = publico lo que se me ocurre / 5 = tengo un calendario editorial con objetivos claros",
        required: true,
      },
    ],
  },
  {
    id: "step-forge-m6-s4",
    moduleId: "forge-m6",
    title: "Partnerships y Alianzas",
    order: 4,
    status: "locked",
    agentInstruction:
      "Las alianzas estrategicas pueden ser el atajo mas poderoso para crecer. Un buen partner te presta su audiencia, su credibilidad y su alcance. Pero tiene que ser win-win o no funciona.",
    formFields: [
      {
        id: "partnership-types",
        type: "toggle-list",
        label: "\u00bfQue tipos de alianzas tienes o te interesa explorar?",
        description: "Activa las que ya tienes o las que consideras viables.",
        required: true,
        options: [
          {
            value: "afiliados",
            label: "Programa de afiliados",
            description: "Otros promocionan tu curso a cambio de comision",
          },
          {
            value: "co-creacion",
            label: "Co-creacion de contenido",
            description: "Colaboraciones con otros expertos",
          },
          {
            value: "empresas",
            label: "Alianzas con empresas (B2B)",
            description: "Vender licencias o paquetes corporativos",
          },
          {
            value: "influencers",
            label: "Influencers y creadores",
            description: "Que promocionen tu academia a su audiencia",
          },
          {
            value: "universidades",
            label: "Universidades o instituciones",
            description: "Alianzas academicas para certificaciones conjuntas",
          },
          {
            value: "medios",
            label: "Medios de comunicacion",
            description: "PR, articulos, entrevistas",
          },
        ],
      },
      {
        id: "partnership-experience",
        type: "radio",
        label: "\u00bfCual es tu experiencia con alianzas estrategicas?",
        required: true,
        options: [
          { value: "none", label: "Nunca he hecho alianzas" },
          { value: "informal", label: "He hecho colaboraciones informales" },
          { value: "some", label: "Tengo algunas alianzas activas" },
          { value: "strong", label: "Tengo un ecosistema de partners solido" },
        ],
      },
      {
        id: "dream-partner",
        type: "text",
        label: "\u00bfQuien seria tu partner sonado? (persona, empresa o institucion)",
        placeholder: "Ej: Tony Robbins, Google, Universidad de los Andes...",
        maxLength: 150,
      },
    ],
  },

  // ============================================================
  // MODULE 7: Vision (3 steps) — status: locked
  // ============================================================
  {
    id: "step-forge-m7-s1",
    moduleId: "forge-m7",
    title: "Vision a 3 Anos",
    order: 1,
    status: "locked",
    agentInstruction:
      "Si tu mision es el 'por que hoy', tu vision es el 'hacia donde vamos'. Necesito que pienses en grande pero con los pies en la tierra. \u00bfComo se ve tu academia en 3 anos si todo sale bien?",
    formFields: [
      {
        id: "revenue-goal-3y",
        type: "slider",
        label: "\u00bfCual es tu meta de ingresos anuales en 3 anos?",
        description: "Se ambicioso pero realista con tu contexto actual.",
        required: true,
        sliderPositions: [
          "Menos de $50K/ano",
          "$50K\u2013$150K/ano",
          "$150K\u2013$500K/ano",
          "$500K\u2013$1M/ano",
          "Mas de $1M/ano",
        ],
      },
      {
        id: "student-impact",
        type: "radio",
        label: "\u00bfA cuantos estudiantes quieres haber impactado en 3 anos?",
        required: true,
        options: [
          { value: "100", label: "Hasta 100 (enfoque premium)" },
          { value: "500", label: "100\u2013500 (nicho especializado)" },
          { value: "2000", label: "500\u20132,000 (crecimiento moderado)" },
          { value: "10000", label: "2,000\u201310,000 (escala media)" },
          { value: "50000+", label: "10,000+ (escala masiva)" },
        ],
      },
      {
        id: "vision-narrative",
        type: "textarea",
        label: "Describe un dia tipico tuyo en 3 anos, si tu academia cumple su vision",
        description:
          "No me digas numeros \u2014 pintame una imagen. \u00bfDonde estas? \u00bfQue haces? \u00bfCon quien trabajas?",
        placeholder:
          "En 3 anos, me despierto en... y dedico mi manana a... Mi equipo se encarga de...",
        required: true,
        maxLength: 500,
      },
    ],
  },
  {
    id: "step-forge-m7-s2",
    moduleId: "forge-m7",
    title: "Hitos Clave",
    order: 2,
    status: "locked",
    agentInstruction:
      "Una vision sin hitos es un sueno bonito. Vamos a definir los checkpoints que necesitas alcanzar para llegar a esa vision. Cada hito es un paso concreto y medible.",
    formFields: [
      {
        id: "year-1-milestones",
        type: "chip-selector",
        label: "\u00bfQue hitos quieres alcanzar en el PRIMER ano?",
        description: "Selecciona los que son realmente prioritarios.",
        required: true,
        options: [
          { value: "first-sale", label: "Primera venta", emoji: "\ud83d\udcb0" },
          { value: "first-100", label: "Primeros 100 estudiantes", emoji: "\ud83d\udc65" },
          { value: "10k-mrr", label: "$10K MRR", emoji: "\ud83d\udcc8" },
          { value: "team-hire", label: "Primer contratacion", emoji: "\ud83e\udd1d" },
          { value: "course-complete", label: "Curso flagship completo", emoji: "\ud83c\udf93" },
          { value: "email-1000", label: "1,000 suscriptores email", emoji: "\ud83d\udce7" },
          { value: "brand-recognition", label: "Reconocimiento en el nicho", emoji: "\u2b50" },
          { value: "automation", label: "Ventas automatizadas", emoji: "\ud83e\udd16" },
        ],
      },
      {
        id: "biggest-milestone",
        type: "text",
        label: "\u00bfCual es el hito mas importante que NECESITAS alcanzar en los proximos 12 meses?",
        description: "Solo uno. El que haria que todo lo demas sea mas facil.",
        placeholder: "Ej: Validar mi curso con 50 estudiantes pagados...",
        required: true,
        maxLength: 200,
      },
      {
        id: "milestone-confidence",
        type: "rating",
        label: "\u00bfQue tan confiado/a estas en alcanzar tu hito principal este ano?",
        description: "1 = poco probable, 5 = casi seguro",
        required: true,
      },
    ],
  },
  {
    id: "step-forge-m7-s3",
    moduleId: "forge-m7",
    title: "Declaracion de Vision",
    order: 3,
    status: "locked",
    agentInstruction:
      "Hora de plasmar todo en una declaracion de vision poderosa. Esto no es para ponerlo en un cuadro y olvidarlo \u2014 es para leerlo cada manana y recordar hacia donde vas cuando las cosas se pongan dificiles.",
    formFields: [
      {
        id: "vision-statement",
        type: "textarea",
        label: "Escribe tu declaracion de vision",
        description:
          "Formato sugerido: 'En [plazo], [tu academia] sera [que] para [quien], logrando [impacto].'",
        placeholder:
          "En 3 anos, mi academia sera la referencia en [nicho] para [audiencia], habiendo transformado a [numero] de personas en...",
        required: true,
        maxLength: 400,
      },
      {
        id: "vision-emotion",
        type: "radio",
        label: "\u00bfQue emocion quieres que la gente asocie con tu academia?",
        required: true,
        options: [
          { value: "empowerment", label: "Empoderamiento \u2014 'Puedo lograrlo'" },
          { value: "belonging", label: "Pertenencia \u2014 'Encontre mi tribu'" },
          { value: "transformation", label: "Transformacion \u2014 'Ya no soy el mismo'" },
          { value: "confidence", label: "Confianza \u2014 'Se exactamente que hacer'" },
          { value: "inspiration", label: "Inspiracion \u2014 'Quiero mas'" },
        ],
      },
      {
        id: "legacy-question",
        type: "textarea",
        label: "\u00bfComo quieres que la gente recuerde tu academia dentro de 10 anos?",
        placeholder:
          "La academia que... / El lugar donde... / La comunidad que cambio...",
        maxLength: 300,
      },
    ],
  },

  // ============================================================
  // MODULE 8: FODA (5 steps) — status: locked
  // ============================================================
  {
    id: "step-forge-m8-s1",
    moduleId: "forge-m8",
    title: "Fortalezas Internas",
    order: 1,
    status: "locked",
    agentInstruction:
      "Empecemos el FODA por lo positivo: tus fortalezas. Pero ojo \u2014 solo cuenta como fortaleza si es algo que tu TIENES, no algo que 'todos' tienen. Si tu competencia tambien lo tiene, no es tu fortaleza, es el precio de entrada.",
    formFields: [
      {
        id: "strengths",
        type: "toggle-list",
        label: "\u00bfCuales de estas fortalezas aplican genuinamente a tu academia?",
        description:
          "Solo activa las que realmente son superiores comparadas con tu competencia.",
        required: true,
        options: [
          {
            value: "expertise-depth",
            label: "Profundidad de expertise",
            description: "Tienes conocimiento mas profundo que la mayoria en tu nicho",
          },
          {
            value: "track-record",
            label: "Track record comprobado",
            description: "Tienes resultados medibles con clientes anteriores",
          },
          {
            value: "personal-brand",
            label: "Marca personal fuerte",
            description: "La gente te reconoce y confia en ti en tu industria",
          },
          {
            value: "audience",
            label: "Audiencia existente",
            description: "Ya tienes seguidores, suscriptores o una comunidad",
          },
          {
            value: "unique-method",
            label: "Metodologia unica",
            description: "Tienes un framework o proceso que nadie mas ofrece",
          },
          {
            value: "network",
            label: "Red de contactos poderosa",
            description: "Conoces a las personas clave en tu industria",
          },
          {
            value: "content-assets",
            label: "Banco de contenido",
            description: "Tienes mucho material creado que puedes reutilizar",
          },
          {
            value: "tech-skills",
            label: "Habilidades tecnicas",
            description: "Puedes construir y operar sin depender de terceros",
          },
        ],
      },
      {
        id: "top-strength",
        type: "text",
        label: "\u00bfCual es tu fortaleza #1? La que nadie puede copiar facilmente.",
        placeholder: "Ej: 15 anos de experiencia liderando equipos de ventas en Latinoamerica...",
        required: true,
        maxLength: 200,
      },
    ],
  },
  {
    id: "step-forge-m8-s2",
    moduleId: "forge-m8",
    title: "Debilidades Internas",
    order: 2,
    status: "locked",
    agentInstruction:
      "Ahora viene la parte que duele: tus debilidades. No voy a ser suave aqui. Si no identificas tus puntos debiles, se van a convertir en minas terrestres cuando intentes escalar. Mejor verlos ahora.",
    formFields: [
      {
        id: "weaknesses",
        type: "toggle-list",
        label: "\u00bfCuales de estas debilidades reconoces en tu academia o en ti como fundador/a?",
        description:
          "La honestidad aqui es tu mejor aliado. Nadie mas va a ver estas respuestas.",
        required: true,
        options: [
          {
            value: "no-systems",
            label: "Falta de sistemas y procesos",
            description: "Todo depende de tu memoria y esfuerzo manual",
          },
          {
            value: "no-team",
            label: "Sin equipo o equipo insuficiente",
            description: "Haces todo solo o tu equipo no da abasto",
          },
          {
            value: "no-audience",
            label: "Audiencia pequena o inexistente",
            description: "No tienes seguidores significativos aun",
          },
          {
            value: "no-sales-skill",
            label: "Dificultad para vender",
            description: "Te cuesta cerrar ventas o pedir dinero por tu conocimiento",
          },
          {
            value: "inconsistency",
            label: "Inconsistencia en la ejecucion",
            description: "Empiezas fuerte pero te cuesta mantener el ritmo",
          },
          {
            value: "perfectionism",
            label: "Perfeccionismo paralizante",
            description: "Nada esta 'suficientemente bueno' para lanzar",
          },
          {
            value: "tech-gap",
            label: "Brecha tecnologica",
            description: "La tecnologia te abruma o te frena",
          },
          {
            value: "no-differentiation",
            label: "Falta de diferenciacion clara",
            description: "Tu oferta se parece demasiado a la de otros",
          },
        ],
      },
      {
        id: "critical-weakness",
        type: "textarea",
        label: "\u00bfCual es la debilidad que MAS te preocupa y por que?",
        placeholder:
          "Ej: Mi mayor debilidad es la inconsistencia. Empiezo proyectos con mucha energia pero a los 2 meses pierdo motivacion...",
        required: true,
        maxLength: 400,
      },
      {
        id: "weakness-awareness",
        type: "rating",
        label: "\u00bfQue tanto conoces y entiendes tus propias debilidades?",
        description:
          "1 = prefiero no pensar en eso / 5 = las tengo mapeadas y estoy trabajando en ellas",
        required: true,
      },
    ],
  },
  {
    id: "step-forge-m8-s3",
    moduleId: "forge-m8",
    title: "Oportunidades Externas",
    order: 3,
    status: "locked",
    agentInstruction:
      "Salgamos de tu burbuja interna y miremos el mercado. \u00bfQue tendencias, cambios o huecos existen ahi afuera que podrias aprovechar? Las oportunidades tienen fecha de vencimiento \u2014 hay que actuar mientras existan.",
    formFields: [
      {
        id: "market-opportunities",
        type: "chip-selector",
        label: "\u00bfQue oportunidades de mercado ves para tu academia?",
        description: "Selecciona las que son relevantes para tu nicho especifico.",
        required: true,
        options: [
          {
            value: "ai-adoption",
            label: "Boom de IA y automatizacion",
            emoji: "\ud83e\udd16",
          },
          {
            value: "remote-work",
            label: "Trabajo remoto normalizado",
            emoji: "\ud83c\udfe0",
          },
          {
            value: "latam-growth",
            label: "Crecimiento del mercado LATAM",
            emoji: "\ud83c\udf0e",
          },
          {
            value: "creator-economy",
            label: "Auge de la creator economy",
            emoji: "\ud83c\udfa8",
          },
          {
            value: "upskilling-demand",
            label: "Demanda de upskilling",
            emoji: "\ud83d\udcda",
          },
          {
            value: "distrust-universities",
            label: "Desconfianza en educacion formal",
            emoji: "\ud83c\udfeb",
          },
          {
            value: "community-trend",
            label: "Tendencia de comunidades pagas",
            emoji: "\ud83d\udc65",
          },
          {
            value: "video-short-form",
            label: "Contenido corto como lead gen",
            emoji: "\ud83d\udcf1",
          },
          {
            value: "micro-credentials",
            label: "Micro-credenciales y badges",
            emoji: "\ud83c\udfc5",
          },
        ],
      },
      {
        id: "timing-advantage",
        type: "radio",
        label: "\u00bfCrees que el timing del mercado esta a tu favor?",
        required: true,
        options: [
          {
            value: "perfect",
            label: "Perfecto \u2014 la demanda esta creciendo rapido",
          },
          {
            value: "good",
            label: "Bueno \u2014 hay espacio pero tambien competencia",
          },
          {
            value: "neutral",
            label: "Neutral \u2014 el mercado esta estable",
          },
          {
            value: "late",
            label: "Tarde \u2014 siento que el mercado esta saturado",
          },
        ],
      },
      {
        id: "untapped-opportunity",
        type: "textarea",
        label: "Describe una oportunidad que VES pero que NADIE esta aprovechando en tu nicho",
        placeholder:
          "Ej: Nadie esta ensenando [tema] en espanol con un enfoque practico para [audiencia]...",
        required: true,
        maxLength: 350,
      },
    ],
  },
  {
    id: "step-forge-m8-s4",
    moduleId: "forge-m8",
    title: "Amenazas Externas",
    order: 4,
    status: "locked",
    agentInstruction:
      "No todo es oportunidad. Tambien hay amenazas reales que pueden afectar tu academia. No para asustarte \u2014 sino para que no te agarren desprevenido. El que ve venir el golpe, puede esquivarlo.",
    formFields: [
      {
        id: "external-threats",
        type: "toggle-list",
        label: "\u00bfQue amenazas externas podrian impactar tu academia?",
        description: "Activa las que consideras riesgos reales, no solo teoricos.",
        required: true,
        options: [
          {
            value: "ai-disruption",
            label: "IA reemplazando cursos tradicionales",
            description: "ChatGPT y similares ofreciendo educacion gratuita personalizada",
          },
          {
            value: "market-saturation",
            label: "Saturacion del mercado de cursos online",
            description: "Cada vez mas personas lanzan academias similares",
          },
          {
            value: "economic-downturn",
            label: "Recesion economica",
            description: "La gente reduce gastos en educacion no formal",
          },
          {
            value: "platform-dependency",
            label: "Dependencia de plataformas de terceros",
            description: "Cambios en algoritmos de redes, politicas de pago, etc.",
          },
          {
            value: "big-player-entry",
            label: "Entrada de un competidor grande",
            description: "Una empresa grande entra a tu nicho con mas recursos",
          },
          {
            value: "regulation",
            label: "Cambios regulatorios",
            description: "Nuevas leyes de educacion online, impuestos, privacidad",
          },
          {
            value: "attention-economy",
            label: "Deficit de atencion del consumidor",
            description: "Cada vez es mas dificil captar y mantener la atencion",
          },
        ],
      },
      {
        id: "biggest-threat",
        type: "radio",
        label: "\u00bfCual consideras la amenaza MAS seria para tu academia?",
        required: true,
        options: [
          { value: "ai", label: "Disrupcion por IA" },
          { value: "competition", label: "Competencia creciente" },
          { value: "economy", label: "Condiciones economicas" },
          { value: "relevance", label: "Perder relevancia en mi nicho" },
          { value: "burnout", label: "Mi propio burnout" },
        ],
      },
      {
        id: "threat-preparedness",
        type: "rating",
        label: "\u00bfQue tan preparado/a te sientes para enfrentar estas amenazas?",
        description: "1 = nada preparado, 5 = tengo un plan B para todo",
        required: true,
      },
    ],
  },
  {
    id: "step-forge-m8-s5",
    moduleId: "forge-m8",
    title: "Matriz FODA Consolidada",
    order: 5,
    status: "locked",
    agentInstruction:
      "Ultimo paso del analisis interno. Vamos a cruzar todo lo que me dijiste \u2014 fortalezas, debilidades, oportunidades y amenazas \u2014 para encontrar tus movimientos estrategicos. Aqui es donde el diagnostico se convierte en accion.",
    formFields: [
      {
        id: "fo-strategy",
        type: "textarea",
        label: "Estrategia FO: \u00bfComo puedes usar tus FORTALEZAS para aprovechar las OPORTUNIDADES?",
        description:
          "Esta es tu estrategia de ataque. Combina lo mejor de ti con lo mejor del mercado.",
        placeholder:
          "Ej: Mi experiencia de 10 anos + la demanda de upskilling en LATAM = oportunidad de posicionarme como el referente en...",
        required: true,
        maxLength: 400,
      },
      {
        id: "do-strategy",
        type: "textarea",
        label: "Estrategia DO: \u00bfQue OPORTUNIDADES puedes aprovechar para superar tus DEBILIDADES?",
        description:
          "Esta es tu estrategia de mejora. Usa las tendencias del mercado para compensar tus puntos debiles.",
        placeholder:
          "Ej: La IA puede automatizar mi soporte al cliente, compensando que no tengo equipo...",
        required: true,
        maxLength: 400,
      },
      {
        id: "strategic-priority",
        type: "radio",
        label: "\u00bfCual deberia ser tu PRIORIDAD estrategica #1 basada en tu FODA?",
        description:
          "Despues de ver todo el panorama, \u00bfque movimiento tiene mas impacto?",
        required: true,
        options: [
          {
            value: "attack",
            label: "Atacar \u2014 ir agresivo con mis fortalezas y las oportunidades",
          },
          {
            value: "improve",
            label: "Mejorar \u2014 corregir debilidades antes de escalar",
          },
          {
            value: "defend",
            label: "Defender \u2014 protegerme de amenazas con mis fortalezas",
          },
          {
            value: "survive",
            label: "Sobrevivir \u2014 minimizar debilidades y amenazas primero",
          },
        ],
      },
      {
        id: "foda-confidence",
        type: "rating",
        label: "\u00bfQue tan claro tienes tu panorama estrategico despues de completar el FODA?",
        description: "1 = sigo confundido / 5 = veo el camino con total claridad",
        required: true,
      },
    ],
  },
];
