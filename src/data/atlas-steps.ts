import type { Step } from "@/types/sostac";

export const atlasSteps: Step[] = [
  // ═══════════════════════════════════════════════════════════════════
  // MODULE 1: Tamaño de Mercado (3 steps) — COMPLETED
  // ═══════════════════════════════════════════════════════════════════

  // M1-S1: Mercado Total Direccionable (TAM)
  {
    id: "step-atlas-m1-s1",
    moduleId: "atlas-m1",
    title: "Mercado Total Direccionable (TAM)",
    order: 1,
    status: "completed",
    agentInstruction:
      "Vamos a dimensionar tu mercado. Necesito que pienses en grande primero — ¿cuántas personas en el mundo podrían beneficiarse de lo que enseñas? No te limites por geografía ni capacidad actual. Estamos midiendo el universo total de oportunidad.",
    formFields: [
      {
        id: "market-region",
        type: "chip-selector",
        label: "¿En qué regiones geográficas opera tu mercado objetivo?",
        description:
          "Selecciona todas las regiones donde existen potenciales clientes para tu academia.",
        required: true,
        options: [
          { value: "latam", label: "Latinoamérica", emoji: "🌎" },
          { value: "spain", label: "España", emoji: "🇪🇸" },
          { value: "usa-hispanic", label: "USA Hispano", emoji: "🇺🇸" },
          {
            value: "global-spanish",
            label: "Global hispanohablante",
            emoji: "🌍",
          },
          { value: "global-english", label: "Global (inglés)", emoji: "🌐" },
        ],
      },
      {
        id: "tam-estimate",
        type: "slider",
        label: "¿Cuál es tu estimación del tamaño total de mercado?",
        description:
          "Personas que podrían pagar por educación en tu área de conocimiento.",
        required: true,
        sliderPositions: ["< 10K", "10K–50K", "50K–200K", "200K–1M", "1M+"],
      },
      {
        id: "tam-industry",
        type: "radio",
        label: "¿En qué industria principal se enmarca tu academia?",
        required: true,
        options: [
          {
            value: "tech",
            label: "Tecnología y Programación",
            description:
              "Desarrollo web, IA, data science, ciberseguridad, etc.",
          },
          {
            value: "business",
            label: "Negocios y Emprendimiento",
            description: "Marketing, ventas, liderazgo, finanzas, etc.",
          },
          {
            value: "creative",
            label: "Creatividad y Diseño",
            description: "Diseño gráfico, UX/UI, fotografía, video, etc.",
          },
          {
            value: "health",
            label: "Salud y Bienestar",
            description: "Nutrición, fitness, psicología, coaching, etc.",
          },
          {
            value: "education",
            label: "Educación y Desarrollo Personal",
            description: "Idiomas, productividad, habilidades blandas, etc.",
          },
          {
            value: "other",
            label: "Otra industria",
            description: "Mi nicho no encaja en las categorías anteriores.",
          },
        ],
      },
    ],
  },

  // M1-S2: Mercado Accesible (SAM)
  {
    id: "step-atlas-m1-s2",
    moduleId: "atlas-m1",
    title: "Mercado Accesible (SAM)",
    order: 2,
    status: "completed",
    agentInstruction:
      "Ahora vamos a aterrizar. Del mercado total que definimos, ¿a qué porción puedes realmente llegar con tus recursos, idioma y canales actuales? Aquí filtramos el TAM para quedarnos con el segmento al que puedes servir de forma realista.",
    formFields: [
      {
        id: "sam-language",
        type: "chip-selector",
        label: "¿En qué idiomas impartirás tus cursos?",
        required: true,
        options: [
          { value: "es", label: "Español", emoji: "🗣️" },
          { value: "en", label: "Inglés", emoji: "🇬🇧" },
          { value: "pt", label: "Portugués", emoji: "🇧🇷" },
          { value: "es-en", label: "Bilingüe (ES/EN)", emoji: "🔄" },
        ],
      },
      {
        id: "sam-format-reach",
        type: "toggle-list",
        label: "¿Qué formatos de entrega puedes ofrecer?",
        description:
          "Cada formato amplía o reduce tu mercado accesible. Selecciona los que puedes sostener.",
        required: true,
        options: [
          {
            value: "async-video",
            label: "Cursos grabados (asíncronos)",
            description: "Videos pregrabados que el alumno consume a su ritmo.",
          },
          {
            value: "live-cohort",
            label: "Cohortes en vivo",
            description:
              "Clases grupales con horario fijo y duración determinada.",
          },
          {
            value: "mentorship",
            label: "Mentoría 1:1",
            description:
              "Sesiones individuales personalizadas con cada estudiante.",
          },
          {
            value: "community",
            label: "Comunidad con contenido",
            description:
              "Acceso a una comunidad privada con recursos y soporte.",
          },
          {
            value: "hybrid",
            label: "Híbrido (grabado + live)",
            description:
              "Combinación de contenido pregrabado con sesiones en vivo.",
          },
        ],
      },
      {
        id: "sam-percentage",
        type: "slider",
        label: "¿Qué porcentaje del TAM crees que puedes alcanzar realistamente?",
        description:
          "Considera tu idioma, formato y canales de distribución actuales.",
        required: true,
        sliderPositions: ["1–5%", "5–10%", "10–20%", "20–40%", "40%+"],
      },
    ],
  },

  // M1-S3: Mercado Objetivo (SOM)
  {
    id: "step-atlas-m1-s3",
    moduleId: "atlas-m1",
    title: "Mercado Objetivo (SOM)",
    order: 3,
    status: "completed",
    agentInstruction:
      "Último paso del dimensionamiento: tu mercado objetivo inicial. Es el grupo específico con el que vas a lanzar. Piensa en los primeros 6-12 meses — ¿a quién le vas a vender primero? Esto define tu beachhead market, el punto de entrada desde donde crecerás.",
    formFields: [
      {
        id: "som-initial-target",
        type: "textarea",
        label:
          "Describe en 2-3 oraciones a tu cliente ideal para los primeros 6 meses",
        description:
          "Sé lo más específico posible: profesión, nivel de experiencia, problema urgente que resuelves.",
        required: true,
        placeholder:
          "Ej: Diseñadores gráficos freelance con 1-3 años de experiencia que quieren aprender UX/UI para subir sus tarifas y conseguir clientes internacionales...",
        maxLength: 500,
      },
      {
        id: "som-revenue-goal",
        type: "radio",
        label: "¿Cuál es tu meta de facturación para los primeros 12 meses?",
        required: true,
        options: [
          {
            value: "starter",
            label: "USD $1K–5K/mes",
            description: "Validar la idea y generar primeros ingresos.",
          },
          {
            value: "growth",
            label: "USD $5K–15K/mes",
            description: "Negocio sostenible con dedicación parcial o total.",
          },
          {
            value: "scale",
            label: "USD $15K–50K/mes",
            description:
              "Escalar con equipo, publicidad e infraestructura seria.",
          },
          {
            value: "enterprise",
            label: "USD $50K+/mes",
            description:
              "Operación empresarial con múltiples productos y equipos.",
          },
        ],
      },
      {
        id: "som-students-estimate",
        type: "slider",
        label: "¿Cuántos estudiantes esperas captar en tu primer año?",
        description:
          "Estima basándote en tu audiencia actual y capacidad de captación.",
        required: true,
        sliderPositions: [
          "1–50",
          "50–200",
          "200–500",
          "500–1,000",
          "1,000+",
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════
  // MODULE 2: Segmentación y Buyer Persona (5 steps) — COMPLETED
  // ═══════════════════════════════════════════════════════════════════

  // M2-S1: Segmentos de Mercado
  {
    id: "step-atlas-m2-s1",
    moduleId: "atlas-m2",
    title: "Segmentos de Mercado",
    order: 1,
    status: "completed",
    agentInstruction:
      "Vamos a dividir tu mercado en segmentos claros. No todos tus potenciales clientes son iguales — tienen diferentes niveles de experiencia, presupuestos y urgencias. Identificar estos segmentos te permitirá crear mensajes y productos que resuenen con cada grupo.",
    formFields: [
      {
        id: "segment-experience-levels",
        type: "toggle-list",
        label:
          "¿Qué niveles de experiencia tienen tus potenciales estudiantes?",
        description: "Selecciona todos los niveles que planeas atender.",
        required: true,
        options: [
          {
            value: "absolute-beginner",
            label: "Principiante absoluto",
            description:
              "No tiene conocimiento previo del tema. Empieza de cero.",
          },
          {
            value: "beginner",
            label: "Principiante con nociones",
            description:
              "Ha explorado el tema por su cuenta pero sin estructura.",
          },
          {
            value: "intermediate",
            label: "Intermedio",
            description:
              "Tiene fundamentos sólidos pero quiere profundizar o especializarse.",
          },
          {
            value: "advanced",
            label: "Avanzado",
            description:
              "Profesional que busca actualización o habilidades de punta.",
          },
          {
            value: "professional",
            label: "Profesional en transición",
            description:
              "Quiere cambiar de carrera o industria usando esta habilidad.",
          },
        ],
      },
      {
        id: "segment-budget-willingness",
        type: "slider",
        label:
          "¿Cuánto están dispuestos a pagar tus segmentos principales por un curso/programa?",
        description: "Rango de precios que consideras viable para tu mercado.",
        required: true,
        sliderPositions: [
          "< $50",
          "$50–$150",
          "$150–$500",
          "$500–$1,500",
          "$1,500+",
        ],
      },
      {
        id: "segment-primary",
        type: "radio",
        label: "¿Cuál es tu segmento primario (donde enfocarás el 80% del esfuerzo)?",
        required: true,
        options: [
          {
            value: "students",
            label: "Estudiantes y recién graduados",
            description:
              "Buscan su primera oportunidad laboral o skill complementario.",
          },
          {
            value: "professionals",
            label: "Profesionales activos",
            description:
              "Quieren ascender, mejorar su salario o cambiar de rol.",
          },
          {
            value: "entrepreneurs",
            label: "Emprendedores",
            description:
              "Necesitan la habilidad para crear o hacer crecer su negocio.",
          },
          {
            value: "companies",
            label: "Empresas (B2B)",
            description:
              "Capacitación corporativa para equipos o departamentos.",
          },
          {
            value: "hobbyists",
            label: "Apasionados/Hobbyistas",
            description:
              "Aprenden por placer personal, no por necesidad profesional.",
          },
        ],
      },
    ],
  },

  // M2-S2: Demografía del Cliente Ideal
  {
    id: "step-atlas-m2-s2",
    moduleId: "atlas-m2",
    title: "Demografía del Cliente Ideal",
    order: 2,
    status: "completed",
    agentInstruction:
      "Ahora vamos a ponerle cara a tu cliente ideal. ¿Quién es esta persona? Necesito datos demográficos concretos — edad, ubicación, nivel de ingresos. Esto no es un ejercicio abstracto: entre más preciso seas, mejor podrás encontrar a estas personas y hablarles en su idioma.",
    formFields: [
      {
        id: "demo-age-range",
        type: "chip-selector",
        label: "¿Qué rango de edad tiene tu cliente ideal?",
        description: "Puedes seleccionar múltiples rangos si aplica.",
        required: true,
        options: [
          { value: "18-24", label: "18–24 años", emoji: "🎓" },
          { value: "25-34", label: "25–34 años", emoji: "💼" },
          { value: "35-44", label: "35–44 años", emoji: "🚀" },
          { value: "45-54", label: "45–54 años", emoji: "📊" },
          { value: "55+", label: "55+ años", emoji: "🏆" },
        ],
      },
      {
        id: "demo-income-level",
        type: "slider",
        label: "¿Cuál es el nivel de ingreso mensual de tu cliente ideal?",
        description: "Ingreso aproximado en USD equivalente.",
        required: true,
        sliderPositions: [
          "< $500",
          "$500–$1,500",
          "$1,500–$3,000",
          "$3,000–$6,000",
          "$6,000+",
        ],
      },
      {
        id: "demo-education",
        type: "radio",
        label: "¿Qué nivel educativo predomina en tu audiencia?",
        required: true,
        options: [
          {
            value: "high-school",
            label: "Secundaria/Bachillerato",
            description: "Sin estudios universitarios formales.",
          },
          {
            value: "undergraduate",
            label: "Universitario (en curso o completo)",
            description: "Licenciatura o ingeniería.",
          },
          {
            value: "postgraduate",
            label: "Posgrado",
            description: "Maestría, especialización o doctorado.",
          },
          {
            value: "self-taught",
            label: "Autodidacta",
            description:
              "Formación informal, cursos online, experiencia práctica.",
          },
        ],
      },
      {
        id: "demo-location-detail",
        type: "textarea",
        label:
          "Describe las ciudades o países específicos donde se concentra tu audiencia",
        description:
          "Sé tan específico como puedas — esto impacta tu estrategia de marketing y precios.",
        required: false,
        placeholder:
          "Ej: Principalmente Ciudad de México, Bogotá y Buenos Aires. También hay una comunidad fuerte en Madrid y Miami...",
        maxLength: 400,
      },
    ],
  },

  // M2-S3: Psicografía y Motivaciones
  {
    id: "step-atlas-m2-s3",
    moduleId: "atlas-m2",
    title: "Psicografía y Motivaciones",
    order: 3,
    status: "completed",
    agentInstruction:
      "Aquí es donde profundizamos en lo que realmente mueve a tu cliente. Los datos demográficos dicen QUIÉN es — la psicografía dice POR QUÉ compra. Necesito que pienses en sus deseos profundos, sus miedos y las narrativas internas que tienen sobre el tema que enseñas.",
    formFields: [
      {
        id: "psycho-motivations",
        type: "toggle-list",
        label:
          "¿Qué motiva a tu cliente ideal a buscar formación en tu área?",
        description: "Selecciona las motivaciones principales.",
        required: true,
        options: [
          {
            value: "salary-increase",
            label: "Aumentar su ingreso",
            description: "Quiere ganar más dinero con esta nueva habilidad.",
          },
          {
            value: "career-change",
            label: "Cambiar de carrera",
            description:
              "Está insatisfecho con su trabajo actual y busca un nuevo rumbo.",
          },
          {
            value: "start-business",
            label: "Emprender su propio negocio",
            description:
              "Quiere independencia financiera y ser su propio jefe.",
          },
          {
            value: "stay-relevant",
            label: "Mantenerse actualizado",
            description:
              "Teme quedarse obsoleto en un mercado que cambia rápido.",
          },
          {
            value: "passion",
            label: "Seguir su pasión",
            description:
              "Tiene un interés genuino que quiere convertir en algo más.",
          },
          {
            value: "credibility",
            label: "Ganar credibilidad profesional",
            description:
              "Necesita certificaciones o portafolio para ser tomado en serio.",
          },
        ],
      },
      {
        id: "psycho-fears",
        type: "chip-selector",
        label: "¿Cuáles son los principales miedos de tu cliente?",
        description: "Los obstáculos emocionales que frenan la decisión de compra.",
        required: true,
        options: [
          {
            value: "waste-money",
            label: "Perder dinero en algo que no sirva",
            emoji: "💸",
          },
          {
            value: "too-difficult",
            label: "Que sea demasiado difícil",
            emoji: "😰",
          },
          {
            value: "no-time",
            label: "No tener tiempo suficiente",
            emoji: "⏰",
          },
          {
            value: "already-late",
            label: "Que ya sea tarde para aprender",
            emoji: "🕐",
          },
          {
            value: "not-get-results",
            label: "No obtener resultados reales",
            emoji: "📉",
          },
          {
            value: "overwhelm",
            label: "Sentirse abrumado",
            emoji: "🤯",
          },
        ],
      },
      {
        id: "psycho-transformation",
        type: "textarea",
        label:
          "¿Cuál es la transformación que tu cliente espera lograr?",
        description:
          "Describe el antes y después. ¿Cómo se ve su vida después de completar tu programa?",
        required: true,
        placeholder:
          "Ej: Pasa de ser un empleado frustrado que diseña banners por $200, a un UX Designer freelance que cobra $2,000+ por proyecto y elige sus clientes...",
        maxLength: 600,
      },
    ],
  },

  // M2-S4: Comportamiento de Compra
  {
    id: "step-atlas-m2-s4",
    moduleId: "atlas-m2",
    title: "Comportamiento de Compra",
    order: 4,
    status: "completed",
    agentInstruction:
      "Entender cómo compra tu cliente es tan importante como saber quién es. ¿Investiga mucho antes de decidir? ¿Compra por impulso? ¿Busca reseñas? ¿Compara opciones? Estos patrones definen toda tu estrategia de venta y los puntos de contacto que necesitas crear.",
    formFields: [
      {
        id: "buying-research-behavior",
        type: "radio",
        label: "¿Cómo investiga tu cliente antes de comprar un curso?",
        required: true,
        options: [
          {
            value: "quick-impulse",
            label: "Compra rápida / impulso",
            description:
              "Si el precio es bajo y la promesa es clara, compra en la primera visita.",
          },
          {
            value: "moderate-research",
            label: "Investigación moderada (1-7 días)",
            description:
              "Compara 2-3 opciones, lee reseñas y busca la página de ventas completa.",
          },
          {
            value: "deep-research",
            label: "Investigación profunda (1-4 semanas)",
            description:
              "Busca testimonios, pide opiniones, consume contenido gratuito antes de decidir.",
          },
          {
            value: "referral-driven",
            label: "Guiado por recomendaciones",
            description:
              "Solo compra si alguien de confianza se lo recomienda directamente.",
          },
        ],
      },
      {
        id: "buying-channels",
        type: "chip-selector",
        label:
          "¿Dónde descubre tu cliente ofertas de formación online?",
        description: "Selecciona los canales principales de descubrimiento.",
        required: true,
        options: [
          { value: "youtube", label: "YouTube", emoji: "📺" },
          { value: "instagram", label: "Instagram/TikTok", emoji: "📱" },
          { value: "google", label: "Búsquedas en Google", emoji: "🔍" },
          { value: "linkedin", label: "LinkedIn", emoji: "💼" },
          { value: "twitter", label: "X (Twitter)", emoji: "🐦" },
          { value: "podcast", label: "Podcasts", emoji: "🎙️" },
          { value: "word-of-mouth", label: "Boca a boca", emoji: "🗣️" },
          { value: "ads", label: "Publicidad pagada", emoji: "📢" },
        ],
      },
      {
        id: "buying-decision-factor",
        type: "rating",
        label:
          "¿Qué tan importante es el precio vs. la calidad percibida para tu cliente?",
        description:
          "1 = Solo le importa el precio más bajo. 5 = Paga premium si percibe alto valor.",
        required: true,
      },
    ],
  },

  // M2-S5: Persona Final
  {
    id: "step-atlas-m2-s5",
    moduleId: "atlas-m2",
    title: "Persona Final",
    order: 5,
    status: "completed",
    agentInstruction:
      "Excelente trabajo. Ahora vamos a consolidar todo lo que hemos descubierto en un perfil de buyer persona concreto. Dale un nombre, una historia y una vida a esta persona. Cuanto más real se sienta, mejores decisiones tomarás en marketing, producto y ventas.",
    formFields: [
      {
        id: "persona-name",
        type: "text",
        label: "Dale un nombre a tu buyer persona principal",
        description:
          "Un nombre ficticio que represente a tu cliente ideal. Lo usaremos como referencia en todo el plan.",
        required: true,
        placeholder: "Ej: María García, Carlos Mendoza, Ana Martínez...",
        maxLength: 60,
      },
      {
        id: "persona-story",
        type: "textarea",
        label: "Escribe la historia de tu buyer persona en primera persona",
        description:
          "Escribe como si fueras esta persona. Incluye su situación actual, su frustración y lo que sueña lograr.",
        required: true,
        placeholder:
          "Ej: Me llamo María, tengo 28 años y trabajo como community manager en una agencia. Gano $1,200/mes y sé que puedo ganar mucho más si aprendo UX Design. He intentado aprender sola pero me pierdo...",
        maxLength: 800,
      },
      {
        id: "persona-objections",
        type: "toggle-list",
        label:
          "¿Cuáles son las principales objeciones que tendría esta persona antes de comprar?",
        required: true,
        options: [
          {
            value: "price-objection",
            label: "\"Es muy caro para mí\"",
            description: "Percibe el precio como una barrera importante.",
          },
          {
            value: "time-objection",
            label: "\"No tengo tiempo\"",
            description:
              "Su agenda ya está llena y no sabe dónde meter el estudio.",
          },
          {
            value: "trust-objection",
            label: "\"¿Funcionará para mí?\"",
            description:
              "Duda de que los resultados prometidos apliquen a su caso.",
          },
          {
            value: "comparison-objection",
            label: "\"Hay opciones más baratas/gratuitas\"",
            description:
              "Sabe que hay contenido gratis y no ve por qué pagar.",
          },
          {
            value: "readiness-objection",
            label: "\"No estoy listo todavía\"",
            description:
              "Procrastina la decisión esperando el 'momento perfecto'.",
          },
        ],
      },
      {
        id: "persona-confidence",
        type: "rating",
        label:
          "¿Qué tan seguro estás de que este perfil representa a tu cliente real?",
        description:
          "1 = Es una suposición. 5 = He hablado con personas exactamente así y valido este perfil.",
        required: true,
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════
  // MODULE 3: Análisis de Competencia (4 steps) — IN_PROGRESS
  // ═══════════════════════════════════════════════════════════════════

  // M3-S1: Mapeo de Competidores Directos
  {
    id: "step-atlas-m3-s1",
    moduleId: "atlas-m3",
    title: "Mapeo de Competidores Directos",
    order: 1,
    status: "completed",
    agentInstruction:
      "Es hora de conocer a tu competencia. No para copiarlos, sino para entender el terreno. ¿Quiénes están vendiendo cursos o programas similares al tuyo? Necesito que los identifiques y clasificamos juntos su nivel de amenaza. Recuerda: tener competidores es buena señal — significa que hay mercado.",
    formFields: [
      {
        id: "competitor-names",
        type: "textarea",
        label:
          "Lista tus 3-5 competidores principales (nombre + URL si la tienes)",
        description:
          "Incluye academias online, cursos independientes, creadores de contenido y plataformas que enseñen lo mismo que tú.",
        required: true,
        placeholder:
          "Ej:\n1. Platzi - platzi.com (cursos de tech generales)\n2. @designerPro en Instagram (cursos de UX)\n3. Domestika - domestika.org (cursos creativos)\n4. Juan Diseñador - juandisena.com (mentoría 1:1)",
        maxLength: 800,
      },
      {
        id: "competitor-type",
        type: "chip-selector",
        label: "¿Qué tipo de competidores predominan en tu mercado?",
        description: "Selecciona todos los tipos que apliquen.",
        required: true,
        options: [
          {
            value: "big-platforms",
            label: "Plataformas grandes",
            emoji: "🏢",
          },
          { value: "indie-creators", label: "Creadores independientes", emoji: "🎯" },
          { value: "universities", label: "Universidades online", emoji: "🎓" },
          { value: "bootcamps", label: "Bootcamps", emoji: "⚡" },
          { value: "youtube-free", label: "Contenido gratuito (YouTube)", emoji: "📺" },
          { value: "corporate-training", label: "Capacitación corporativa", emoji: "🏗️" },
        ],
      },
      {
        id: "competitor-threat-level",
        type: "rating",
        label: "¿Qué tan intensa es la competencia en tu nicho actual?",
        description:
          "1 = Casi no hay competidores. 5 = Mercado saturado con muchos jugadores fuertes.",
        required: true,
      },
    ],
  },

  // M3-S2: Análisis de Propuestas de Valor
  {
    id: "step-atlas-m3-s2",
    moduleId: "atlas-m3",
    title: "Análisis de Propuestas de Valor",
    order: 2,
    status: "completed",
    agentInstruction:
      "Ahora vamos a diseccionar qué prometen tus competidores y cómo lo entregan. ¿Cuál es su propuesta de valor? ¿Qué los hace atractivos? Y más importante — ¿dónde están fallando? Cada debilidad de un competidor es una oportunidad para ti.",
    formFields: [
      {
        id: "competitor-strengths",
        type: "toggle-list",
        label:
          "¿Cuáles son las fortalezas más comunes de tus competidores?",
        description:
          "Selecciona las ventajas que observas en tus competidores principales.",
        required: true,
        options: [
          {
            value: "brand-recognition",
            label: "Marca reconocida",
            description:
              "Tienen nombre conocido y presencia establecida en el mercado.",
          },
          {
            value: "large-catalog",
            label: "Catálogo amplio de cursos",
            description: "Ofrecen muchos cursos en diversas áreas.",
          },
          {
            value: "low-price",
            label: "Precios agresivos/bajos",
            description:
              "Compiten principalmente por precio con ofertas constantes.",
          },
          {
            value: "production-quality",
            label: "Alta calidad de producción",
            description:
              "Videos, materiales y plataforma con acabado profesional.",
          },
          {
            value: "community",
            label: "Comunidad activa",
            description:
              "Tienen una comunidad de estudiantes que genera valor adicional.",
          },
          {
            value: "certifications",
            label: "Certificaciones reconocidas",
            description:
              "Sus certificados tienen peso en el mercado laboral.",
          },
        ],
      },
      {
        id: "competitor-weaknesses",
        type: "chip-selector",
        label: "¿Dónde fallan o se quedan cortos tus competidores?",
        description: "Identifica las debilidades que tú podrías convertir en ventaja.",
        required: true,
        options: [
          {
            value: "no-personalization",
            label: "Sin personalización",
            emoji: "🤖",
          },
          {
            value: "outdated-content",
            label: "Contenido desactualizado",
            emoji: "📅",
          },
          {
            value: "no-support",
            label: "Soporte deficiente",
            emoji: "🚫",
          },
          {
            value: "generic-approach",
            label: "Enfoque genérico",
            emoji: "😐",
          },
          {
            value: "no-practice",
            label: "Poca práctica real",
            emoji: "📝",
          },
          {
            value: "no-mentorship",
            label: "Sin mentoría",
            emoji: "🙅",
          },
          {
            value: "bad-ux",
            label: "Mala experiencia de usuario",
            emoji: "💔",
          },
        ],
      },
      {
        id: "your-differentiator",
        type: "textarea",
        label:
          "¿Qué puedes ofrecer tú que tus competidores no están haciendo?",
        description:
          "Piensa en tu ventaja única: experiencia, metodología, nicho específico, formato innovador...",
        required: true,
        placeholder:
          "Ej: Mi experiencia de 10 años en la industria me permite enseñar con casos reales actuales. Además, ofrezco feedback personalizado en cada proyecto, algo que las plataformas grandes no pueden hacer...",
        maxLength: 600,
      },
    ],
  },

  // M3-S3: Gaps de Mercado
  {
    id: "step-atlas-m3-s3",
    moduleId: "atlas-m3",
    title: "Gaps de Mercado",
    order: 3,
    status: "in_progress",
    agentInstruction:
      "Estamos en el punto más estratégico del análisis competitivo: los gaps de mercado. Estos son los espacios vacíos que nadie está cubriendo bien. Cada gap es una puerta de entrada. Vamos a identificar dónde están las oportunidades que tus competidores están dejando sobre la mesa.",
    formFields: [
      {
        id: "gap-topics",
        type: "toggle-list",
        label:
          "¿Qué temas o subtemas de tu área NO están bien cubiertos por la competencia?",
        description:
          "Piensa en los temas que la gente pregunta pero nadie enseña bien.",
        required: true,
        options: [
          {
            value: "advanced-niche",
            label: "Temas avanzados de nicho",
            description:
              "Temas especializados que los competidores no profundizan.",
          },
          {
            value: "local-context",
            label: "Aplicación al contexto local",
            description:
              "Contenido adaptado a la realidad latinoamericana/hispana.",
          },
          {
            value: "practical-projects",
            label: "Proyectos prácticos reales",
            description:
              "Ejercicios aplicados a casos reales, no solo teoría.",
          },
          {
            value: "career-transition",
            label: "Guía de transición laboral",
            description:
              "Cómo pasar de aprender a conseguir trabajo o clientes.",
          },
          {
            value: "tool-specific",
            label: "Herramientas específicas",
            description:
              "Dominio profundo de herramientas que otros solo tocan superficialmente.",
          },
          {
            value: "soft-skills",
            label: "Habilidades blandas del área",
            description:
              "Comunicación, gestión de clientes, negociación en tu industria.",
          },
        ],
      },
      {
        id: "gap-audience-underserved",
        type: "chip-selector",
        label: "¿Qué audiencias están desatendidas en tu mercado?",
        description: "Grupos de personas que no encuentran formación adecuada.",
        required: true,
        options: [
          {
            value: "spanish-speakers",
            label: "Hispanohablantes (contenido en español)",
            emoji: "🌎",
          },
          {
            value: "career-changers",
            label: "Personas cambiando de carrera",
            emoji: "🔄",
          },
          {
            value: "busy-professionals",
            label: "Profesionales con poco tiempo",
            emoji: "⏰",
          },
          {
            value: "low-budget",
            label: "Personas con bajo presupuesto",
            emoji: "💵",
          },
          {
            value: "women-minorities",
            label: "Mujeres y minorías en tech",
            emoji: "👩‍💻",
          },
          {
            value: "seniors",
            label: "Adultos mayores de 40",
            emoji: "🧑‍💼",
          },
        ],
      },
      {
        id: "gap-opportunity-description",
        type: "textarea",
        label:
          "Describe el gap de mercado más grande que has identificado",
        description:
          "¿Qué necesidad del mercado no está siendo satisfecha? ¿Por qué crees que existe este vacío?",
        required: true,
        placeholder:
          "Ej: No existe un programa en español que enseñe UX Research con metodología aplicada al mercado LATAM. Los cursos disponibles son traducciones literales del inglés que no consideran las diferencias culturales...",
        maxLength: 600,
      },
    ],
  },

  // M3-S4: Fosos Competitivos (Moats)
  {
    id: "step-atlas-m3-s4",
    moduleId: "atlas-m3",
    title: "Fosos Competitivos (Moats)",
    order: 4,
    status: "locked",
    agentInstruction:
      "Los fosos competitivos son las barreras que protegen tu negocio de ser copiado fácilmente. Warren Buffett dice que los mejores negocios tienen un foso profundo. Vamos a diseñar el tuyo — ¿qué hará que sea difícil para otros competir contigo una vez que estés establecido?",
    formFields: [
      {
        id: "moat-type",
        type: "toggle-list",
        label: "¿Qué tipo de foso competitivo puedes construir?",
        description:
          "Selecciona los fosos que son realistas para tu negocio en los próximos 12-24 meses.",
        required: true,
        options: [
          {
            value: "personal-brand",
            label: "Marca personal fuerte",
            description:
              "Tu nombre y reputación como experto son difíciles de replicar.",
          },
          {
            value: "community-moat",
            label: "Comunidad activa",
            description:
              "Una comunidad de estudiantes que genera valor por sí misma.",
          },
          {
            value: "methodology",
            label: "Metodología propia",
            description:
              "Un sistema de enseñanza único que solo tú ofreces.",
          },
          {
            value: "content-depth",
            label: "Profundidad de contenido",
            description:
              "Cantidad y calidad de material que tomaría años replicar.",
          },
          {
            value: "network-effects",
            label: "Efectos de red",
            description:
              "Tu producto mejora con cada nuevo usuario (ej: feedback entre pares).",
          },
          {
            value: "switching-costs",
            label: "Costos de cambio altos",
            description:
              "Progreso acumulado que hace costoso cambiar a otro proveedor.",
          },
        ],
      },
      {
        id: "moat-timeline",
        type: "slider",
        label: "¿Cuánto tiempo necesitas para construir un foso sólido?",
        description:
          "Tiempo estimado para que tu ventaja competitiva sea difícil de replicar.",
        required: true,
        sliderPositions: [
          "3 meses",
          "6 meses",
          "12 meses",
          "18 meses",
          "24+ meses",
        ],
      },
      {
        id: "moat-sustainability",
        type: "rating",
        label:
          "¿Qué tan sostenible es tu ventaja competitiva a largo plazo?",
        description:
          "1 = Cualquiera puede copiarme mañana. 5 = Mi ventaja se fortalece con el tiempo.",
        required: true,
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════
  // MODULE 4: Tendencias del Sector (3 steps) — AVAILABLE
  // ═══════════════════════════════════════════════════════════════════

  // M4-S1: Tendencias Macro
  {
    id: "step-atlas-m4-s1",
    moduleId: "atlas-m4",
    title: "Tendencias Macro",
    order: 1,
    status: "available",
    agentInstruction:
      "Vamos a mirar el panorama general de tu industria. ¿Hacia dónde va el mercado? Las tendencias macro son corrientes que afectan a toda la industria. Si nadas a favor de la corriente, el crecimiento viene natural. Si vas en contra, hasta el mejor producto fracasa. Identifiquemos las fuerzas que van a definir los próximos 3-5 años.",
    formFields: [
      {
        id: "trend-industry-direction",
        type: "chip-selector",
        label:
          "¿Cuáles son las megatendencias que impactan tu industria?",
        description: "Selecciona las tendencias que consideras más relevantes.",
        required: true,
        options: [
          { value: "ai-automation", label: "IA y Automatización", emoji: "🤖" },
          {
            value: "remote-work",
            label: "Trabajo remoto/híbrido",
            emoji: "🏠",
          },
          { value: "creator-economy", label: "Economía de creadores", emoji: "🎨" },
          {
            value: "sustainability",
            label: "Sostenibilidad y ESG",
            emoji: "🌱",
          },
          {
            value: "personalization",
            label: "Hiperpersonalización",
            emoji: "🎯",
          },
          { value: "no-code", label: "No-code / Low-code", emoji: "⚡" },
          {
            value: "web3-blockchain",
            label: "Web3 y Blockchain",
            emoji: "🔗",
          },
          {
            value: "mental-health",
            label: "Bienestar y salud mental",
            emoji: "🧠",
          },
        ],
      },
      {
        id: "trend-market-growth",
        type: "slider",
        label:
          "¿A qué ritmo crees que está creciendo tu sector específico?",
        description:
          "Crecimiento anual estimado del mercado de formación en tu área.",
        required: true,
        sliderPositions: [
          "Decreciendo",
          "Estancado (0-5%)",
          "Moderado (5-15%)",
          "Alto (15-30%)",
          "Explosivo (30%+)",
        ],
      },
      {
        id: "trend-impact-description",
        type: "textarea",
        label:
          "¿Cómo impactan estas tendencias directamente en tu academia?",
        description:
          "Explica cómo estas corrientes crean oportunidad (o riesgo) para tu negocio educativo.",
        required: true,
        placeholder:
          "Ej: La IA está reemplazando tareas básicas de diseño, lo que aumenta la demanda de habilidades estratégicas de UX que no se pueden automatizar. Esto hace que mi curso de UX Research sea cada vez más relevante...",
        maxLength: 600,
      },
    ],
  },

  // M4-S2: Tendencias en Educación Online
  {
    id: "step-atlas-m4-s2",
    moduleId: "atlas-m4",
    title: "Tendencias en Educación Online",
    order: 2,
    status: "locked",
    agentInstruction:
      "Ahora enfoquémonos en las tendencias específicas del e-learning. Este mercado está cambiando rápidamente — lo que funcionaba hace 2 años puede ser obsoleto hoy. ¿Qué formatos, modelos de negocio y tecnologías están definiendo el futuro de la educación online?",
    formFields: [
      {
        id: "elearning-format-trends",
        type: "toggle-list",
        label:
          "¿Qué tendencias de formato educativo están ganando tracción?",
        description: "Selecciona las que observas como tendencias crecientes.",
        required: true,
        options: [
          {
            value: "cohort-based",
            label: "Cursos basados en cohortes (CBC)",
            description:
              "Grupos que avanzan juntos con fechas fijas de inicio y fin.",
          },
          {
            value: "micro-learning",
            label: "Micro-learning (lecciones de 5-15 min)",
            description:
              "Contenido ultra-breve optimizado para consumo rápido.",
          },
          {
            value: "ai-tutoring",
            label: "Tutorías con IA",
            description:
              "Asistentes IA que personalizan la experiencia de aprendizaje.",
          },
          {
            value: "live-workshops",
            label: "Talleres prácticos en vivo",
            description:
              "Sesiones de trabajo real donde se construye algo concreto.",
          },
          {
            value: "mobile-first",
            label: "Educación mobile-first",
            description:
              "Plataformas diseñadas para consumo desde el celular.",
          },
          {
            value: "gamification",
            label: "Gamificación avanzada",
            description:
              "Puntos, rankings, streaks y mecánicas de juego aplicadas al aprendizaje.",
          },
        ],
      },
      {
        id: "elearning-business-model",
        type: "radio",
        label:
          "¿Qué modelo de negocio educativo crees que dominará en los próximos años?",
        required: true,
        options: [
          {
            value: "subscription",
            label: "Suscripción mensual/anual",
            description: "Acceso ilimitado a todo el catálogo por una tarifa recurrente.",
          },
          {
            value: "one-time-premium",
            label: "Pago único premium",
            description: "Cursos de alto valor con un solo pago significativo.",
          },
          {
            value: "freemium",
            label: "Freemium con upsell",
            description:
              "Contenido gratuito que escala a opciones de pago.",
          },
          {
            value: "community-membership",
            label: "Membresía de comunidad",
            description:
              "Acceso a comunidad + contenido por una tarifa mensual.",
          },
          {
            value: "hybrid-tiers",
            label: "Modelo híbrido por niveles",
            description: "Combinación de cursos, mentoría y comunidad en tiers.",
          },
        ],
      },
      {
        id: "elearning-adoption",
        type: "rating",
        label:
          "¿Qué tan preparado estás para adoptar estas tendencias en tu academia?",
        description:
          "1 = No tengo idea de cómo implementarlas. 5 = Ya las estoy incorporando activamente.",
        required: true,
      },
    ],
  },

  // M4-S3: Oportunidades Emergentes
  {
    id: "step-atlas-m4-s3",
    moduleId: "atlas-m4",
    title: "Oportunidades Emergentes",
    order: 3,
    status: "locked",
    agentInstruction:
      "Momento de conectar los puntos. De todas las tendencias que hemos analizado — tanto de tu industria como del e-learning — ¿dónde se cruzan para crear oportunidades únicas? Las mejores academias online surgen en la intersección entre una tendencia de mercado fuerte y un formato educativo innovador.",
    formFields: [
      {
        id: "emerging-opportunity",
        type: "textarea",
        label:
          "Describe la oportunidad emergente más prometedora que identificas",
        description:
          "Combina una tendencia de tu industria con un formato o modelo de negocio educativo innovador.",
        required: true,
        placeholder:
          "Ej: Con la explosión de la IA generativa, hay una demanda masiva de profesionales que sepan hacer 'prompt engineering' aplicado al diseño. Puedo crear un programa de cohortes que combine UX + IA con proyectos reales para empresas...",
        maxLength: 700,
      },
      {
        id: "emerging-timing",
        type: "slider",
        label: "¿En qué momento de madurez está esta oportunidad?",
        description:
          "¿Es demasiado temprano, perfecto o ya está madura/saturada?",
        required: true,
        sliderPositions: [
          "Muy temprano",
          "Temprano (ideal para pioneros)",
          "Momento justo",
          "Madurez temprana",
          "Mercado maduro",
        ],
      },
      {
        id: "emerging-alignment",
        type: "chip-selector",
        label:
          "¿Qué recursos ya tienes para aprovechar esta oportunidad?",
        description: "Selecciona los activos con los que ya cuentas.",
        required: true,
        options: [
          { value: "expertise", label: "Expertise en el tema", emoji: "🧠" },
          { value: "audience", label: "Audiencia existente", emoji: "👥" },
          { value: "network", label: "Red de contactos", emoji: "🤝" },
          { value: "content", label: "Contenido creado", emoji: "📚" },
          { value: "tech-skills", label: "Habilidades técnicas", emoji: "💻" },
          { value: "capital", label: "Capital para invertir", emoji: "💰" },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════
  // MODULE 5: Análisis PESTEL (4 steps) — LOCKED
  // ═══════════════════════════════════════════════════════════════════

  // M5-S1: Factores Políticos y Legales
  {
    id: "step-atlas-m5-s1",
    moduleId: "atlas-m5",
    title: "Factores Políticos y Legales",
    order: 1,
    status: "locked",
    agentInstruction:
      "Entramos al análisis PESTEL — factores externos que no controlas pero necesitas entender. Empezamos con lo político y legal. ¿Qué regulaciones, leyes o políticas gubernamentales afectan tu negocio de educación online? Desde impuestos digitales hasta regulaciones de privacidad de datos, todo cuenta.",
    formFields: [
      {
        id: "political-regulations",
        type: "toggle-list",
        label: "¿Qué regulaciones afectan tu negocio de educación online?",
        description:
          "Selecciona las áreas regulatorias que debes considerar.",
        required: true,
        options: [
          {
            value: "data-privacy",
            label: "Protección de datos (GDPR, ley local)",
            description:
              "Regulaciones sobre recolección y manejo de datos personales de estudiantes.",
          },
          {
            value: "digital-taxes",
            label: "Impuestos digitales / IVA",
            description:
              "Obligaciones tributarias por venta de servicios digitales transfronterizos.",
          },
          {
            value: "education-certification",
            label: "Certificaciones educativas oficiales",
            description:
              "Requisitos para que tus certificados tengan validez oficial.",
          },
          {
            value: "consumer-protection",
            label: "Protección al consumidor",
            description:
              "Políticas de reembolso, garantías y derechos del estudiante.",
          },
          {
            value: "intellectual-property",
            label: "Propiedad intelectual",
            description:
              "Protección de tu contenido y uso de material de terceros.",
          },
        ],
      },
      {
        id: "legal-preparedness",
        type: "radio",
        label: "¿Qué tan preparado estás legalmente para operar?",
        required: true,
        options: [
          {
            value: "not-started",
            label: "No he considerado el aspecto legal",
            description: "Necesito asesoría desde cero.",
          },
          {
            value: "basic-research",
            label: "He investigado lo básico",
            description: "Conozco los requerimientos pero no los he implementado.",
          },
          {
            value: "partial",
            label: "Parcialmente preparado",
            description:
              "Tengo algunos documentos legales pero me faltan otros.",
          },
          {
            value: "ready",
            label: "Legalmente preparado",
            description: "Tengo empresa registrada, términos y políticas listas.",
          },
        ],
      },
      {
        id: "legal-risk-assessment",
        type: "rating",
        label: "¿Qué nivel de riesgo legal percibes para tu academia?",
        description:
          "1 = Riesgo bajo, sector poco regulado. 5 = Alto riesgo, muchas regulaciones que cumplir.",
        required: true,
      },
    ],
  },

  // M5-S2: Factores Económicos
  {
    id: "step-atlas-m5-s2",
    moduleId: "atlas-m5",
    title: "Factores Económicos",
    order: 2,
    status: "locked",
    agentInstruction:
      "Los factores económicos determinan cuánto puede y quiere gastar tu mercado. Inflación, tipo de cambio, poder adquisitivo, desempleo... Todo esto impacta directamente tu pricing y la velocidad de crecimiento. Entender el clima económico te permite ajustar tu estrategia antes de que el mercado te obligue.",
    formFields: [
      {
        id: "economic-context",
        type: "chip-selector",
        label: "¿Qué factores económicos impactan más a tu mercado objetivo?",
        description:
          "Selecciona los factores que más afectan la disposición de compra de tus clientes.",
        required: true,
        options: [
          {
            value: "inflation",
            label: "Inflación alta",
            emoji: "📈",
          },
          {
            value: "unemployment",
            label: "Desempleo creciente",
            emoji: "📉",
          },
          {
            value: "currency-devaluation",
            label: "Devaluación de moneda",
            emoji: "💱",
          },
          {
            value: "growing-digital-economy",
            label: "Crecimiento de economía digital",
            emoji: "🌐",
          },
          {
            value: "freelance-growth",
            label: "Auge del freelancing",
            emoji: "💻",
          },
          {
            value: "recession-fears",
            label: "Riesgo de recesión",
            emoji: "⚠️",
          },
        ],
      },
      {
        id: "economic-pricing-impact",
        type: "slider",
        label:
          "¿Cuánto afecta la situación económica actual la disposición de pago de tu audiencia?",
        description:
          "Considera el contexto económico de los países donde están tus clientes.",
        required: true,
        sliderPositions: [
          "No afecta",
          "Afecta poco",
          "Impacto moderado",
          "Impacto significativo",
          "Impacto crítico",
        ],
      },
      {
        id: "economic-adaptation",
        type: "textarea",
        label:
          "¿Cómo planeas adaptar tu modelo de negocio al contexto económico?",
        description:
          "Estrategias de pricing, planes de pago, versiones gratuitas, etc.",
        required: false,
        placeholder:
          "Ej: Ofreceré planes de pago en cuotas sin interés, precios regionales (PPP) ajustados al poder adquisitivo de cada país, y una versión gratuita con contenido limitado para construir confianza...",
        maxLength: 500,
      },
    ],
  },

  // M5-S3: Factores Sociales y Tecnológicos
  {
    id: "step-atlas-m5-s3",
    moduleId: "atlas-m5",
    title: "Factores Sociales y Tecnológicos",
    order: 3,
    status: "locked",
    agentInstruction:
      "Dos fuerzas poderosas: los cambios sociales y la tecnología. ¿Cómo está cambiando la percepción de la educación online en tu mercado? ¿Qué tecnologías están transformando la forma de aprender? Estos factores pueden ser un viento a favor enorme si los entiendes y te posicionas correctamente.",
    formFields: [
      {
        id: "social-perception",
        type: "radio",
        label:
          "¿Cómo percibe tu mercado objetivo la educación online vs. la presencial?",
        required: true,
        options: [
          {
            value: "prefers-online",
            label: "Prefiere online claramente",
            description:
              "Valoran la flexibilidad y el acceso global que ofrece lo digital.",
          },
          {
            value: "open-to-online",
            label: "Abierto a online con condiciones",
            description:
              "Acepta online si hay interacción, soporte y calidad demostrable.",
          },
          {
            value: "skeptical",
            label: "Escéptico pero abierto",
            description:
              "Prefiere presencial pero considera online si no hay alternativa.",
          },
          {
            value: "resistant",
            label: "Resistente al cambio",
            description:
              "Todavía valora mucho más la educación presencial tradicional.",
          },
        ],
      },
      {
        id: "tech-adoption",
        type: "toggle-list",
        label: "¿Qué tecnologías están transformando tu sector educativo?",
        description:
          "Selecciona las tecnologías que consideras más relevantes para tu academia.",
        required: true,
        options: [
          {
            value: "generative-ai",
            label: "IA generativa (ChatGPT, Claude, etc.)",
            description:
              "Creación de contenido, tutorías automatizadas, evaluaciones.",
          },
          {
            value: "video-streaming",
            label: "Streaming de alta calidad",
            description:
              "Video en vivo y grabado con calidad profesional accesible.",
          },
          {
            value: "no-code-platforms",
            label: "Plataformas no-code",
            description:
              "Herramientas que permiten crear academias sin programar.",
          },
          {
            value: "mobile-apps",
            label: "Apps móviles educativas",
            description:
              "Aprendizaje desde el celular con experiencia nativa.",
          },
          {
            value: "vr-ar",
            label: "Realidad virtual/aumentada",
            description:
              "Experiencias inmersivas para aprendizaje práctico.",
          },
        ],
      },
      {
        id: "social-trends-impact",
        type: "rating",
        label: "¿Qué tan favorable es el contexto social y tecnológico para tu academia?",
        description:
          "1 = El contexto me dificulta las cosas. 5 = Las tendencias sociales y tecnológicas impulsan mi negocio.",
        required: true,
      },
    ],
  },

  // M5-S4: Impacto Ambiental y Regulatorio
  {
    id: "step-atlas-m5-s4",
    moduleId: "atlas-m5",
    title: "Impacto Ambiental y Regulatorio",
    order: 4,
    status: "locked",
    agentInstruction:
      "Cerramos el PESTEL con factores ambientales y regulatorios. Aunque una academia online tiene bajo impacto ambiental comparado con educación presencial, hay consideraciones importantes: huella digital, accesibilidad, regulaciones de contenido y responsabilidad social. Estos factores también te pueden diferenciar positivamente.",
    formFields: [
      {
        id: "environmental-positioning",
        type: "chip-selector",
        label:
          "¿Qué iniciativas de responsabilidad social/ambiental resonarían con tu audiencia?",
        description: "Selecciona las que podrías implementar en tu academia.",
        required: true,
        options: [
          {
            value: "carbon-neutral",
            label: "Huella de carbono neutral",
            emoji: "🌿",
          },
          {
            value: "accessibility",
            label: "Accesibilidad e inclusión",
            emoji: "♿",
          },
          {
            value: "scholarships",
            label: "Becas para comunidades vulnerables",
            emoji: "🎓",
          },
          {
            value: "open-content",
            label: "Contenido abierto/gratuito parcial",
            emoji: "📖",
          },
          {
            value: "diversity",
            label: "Diversidad en instructores invitados",
            emoji: "🌈",
          },
          {
            value: "local-impact",
            label: "Impacto en comunidades locales",
            emoji: "🏘️",
          },
        ],
      },
      {
        id: "regulatory-compliance",
        type: "toggle-list",
        label: "¿Qué áreas regulatorias necesitas cubrir para tu mercado?",
        description:
          "Considera las regulaciones de los países donde operarás.",
        required: true,
        options: [
          {
            value: "terms-of-service",
            label: "Términos de servicio y política de privacidad",
            description:
              "Documentos legales obligatorios para cualquier plataforma.",
          },
          {
            value: "refund-policy",
            label: "Política de reembolso",
            description:
              "Reglas claras sobre devoluciones según la legislación local.",
          },
          {
            value: "content-licensing",
            label: "Licencias de contenido",
            description:
              "Permisos para usar imágenes, música, software en tus cursos.",
          },
          {
            value: "student-data",
            label: "Protección de datos de estudiantes",
            description:
              "Cumplimiento con GDPR, CCPA o leyes locales de privacidad.",
          },
        ],
      },
      {
        id: "pestel-summary-confidence",
        type: "rating",
        label: "Después de este análisis PESTEL, ¿qué tan favorable ves el entorno externo para tu academia?",
        description:
          "1 = El entorno presenta muchos obstáculos. 5 = El entorno externo favorece claramente mi proyecto.",
        required: true,
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════
  // MODULE 6: Benchmarking de Precios (3 steps) — LOCKED
  // ═══════════════════════════════════════════════════════════════════

  // M6-S1: Rango de Precios del Mercado
  {
    id: "step-atlas-m6-s1",
    moduleId: "atlas-m6",
    title: "Rango de Precios del Mercado",
    order: 1,
    status: "locked",
    agentInstruction:
      "Vamos a analizar cuánto cobra la competencia. El precio correcto no se elige al azar — se basa en datos del mercado. Necesito que investigues y me digas qué precios manejan tus competidores para productos similares. Esto nos dará el marco de referencia para tu estrategia de pricing.",
    formFields: [
      {
        id: "price-range-competitors",
        type: "slider",
        label: "¿Cuál es el rango de precios de cursos similares al tuyo?",
        description:
          "Rango de precios que has observado en tus competidores directos.",
        required: true,
        sliderPositions: [
          "$0–$50",
          "$50–$150",
          "$150–$500",
          "$500–$2,000",
          "$2,000+",
        ],
      },
      {
        id: "price-model-competitors",
        type: "chip-selector",
        label:
          "¿Qué modelos de precios usan tus competidores principales?",
        description: "Selecciona todos los modelos que has observado.",
        required: true,
        options: [
          { value: "one-time", label: "Pago único", emoji: "💳" },
          { value: "subscription", label: "Suscripción mensual", emoji: "🔄" },
          { value: "annual", label: "Plan anual", emoji: "📅" },
          { value: "installments", label: "Pago en cuotas", emoji: "📊" },
          { value: "freemium", label: "Freemium", emoji: "🆓" },
          { value: "tiered", label: "Niveles (Basic/Pro/Premium)", emoji: "🏅" },
        ],
      },
      {
        id: "price-outliers",
        type: "textarea",
        label: "¿Hay competidores que cobren precios muy altos o muy bajos? ¿Por qué?",
        description:
          "Identifica los extremos del mercado y explica qué justifica esos precios.",
        required: false,
        placeholder:
          "Ej: Platzi cobra $49/mes por acceso a todo, pero no tiene mentoría. En el otro extremo, DesignLab cobra $5,000+ por un bootcamp de 6 meses con mentoría 1:1 de profesionales de Google y Facebook...",
        maxLength: 500,
      },
    ],
  },

  // M6-S2: Percepción de Valor
  {
    id: "step-atlas-m6-s2",
    moduleId: "atlas-m6",
    title: "Percepción de Valor",
    order: 2,
    status: "locked",
    agentInstruction:
      "El precio no es solo un número — es una señal de valor. ¿Qué hace que la gente sienta que algo 'vale la pena'? Vamos a analizar los elementos que construyen percepción de valor en tu mercado. Esto te permitirá justificar tu precio y evitar la trampa de competir solo por precio bajo.",
    formFields: [
      {
        id: "value-drivers",
        type: "toggle-list",
        label: "¿Qué elementos aumentan la percepción de valor en tu mercado?",
        description:
          "Selecciona los factores que hacen que los estudiantes perciban un curso como 'caro pero vale la pena'.",
        required: true,
        options: [
          {
            value: "certificate",
            label: "Certificado reconocido",
            description:
              "Un certificado que tenga peso en el currículum.",
          },
          {
            value: "mentor-access",
            label: "Acceso directo al instructor/mentor",
            description:
              "Poder hacer preguntas y recibir feedback personalizado.",
          },
          {
            value: "job-placement",
            label: "Apoyo en colocación laboral",
            description:
              "Ayuda para conseguir trabajo o clientes después del curso.",
          },
          {
            value: "real-projects",
            label: "Proyectos con empresas reales",
            description:
              "Trabajar en casos reales, no ejercicios ficticios.",
          },
          {
            value: "community-lifetime",
            label: "Comunidad de por vida",
            description:
              "Acceso permanente a una red de profesionales y egresados.",
          },
          {
            value: "updates",
            label: "Actualizaciones constantes",
            description:
              "Contenido que se mantiene al día con los cambios del mercado.",
          },
        ],
      },
      {
        id: "value-price-sensitivity",
        type: "radio",
        label: "¿Qué tan sensible al precio es tu audiencia?",
        required: true,
        options: [
          {
            value: "very-sensitive",
            label: "Muy sensible — buscan lo más barato",
            description:
              "Comparan precios obsesivamente y eligen la opción más económica.",
          },
          {
            value: "moderate",
            label: "Moderada — comparan calidad/precio",
            description:
              "Están dispuestos a pagar más si ven valor claro.",
          },
          {
            value: "low-sensitivity",
            label: "Baja — priorizan resultado sobre precio",
            description:
              "Si creen que funciona, el precio es secundario.",
          },
          {
            value: "split",
            label: "Segmentada — varía mucho por subsegmento",
            description:
              "Algunos son muy sensibles y otros no, necesitas múltiples opciones.",
          },
        ],
      },
      {
        id: "value-willingness-to-pay",
        type: "rating",
        label:
          "¿Qué tan alta es la disposición de pago de tu audiencia por la transformación que ofreces?",
        description:
          "1 = Esperan contenido gratuito o muy barato. 5 = Dispuestos a invertir significativamente.",
        required: true,
      },
    ],
  },

  // M6-S3: Estrategia de Pricing Óptima
  {
    id: "step-atlas-m6-s3",
    moduleId: "atlas-m6",
    title: "Estrategia de Pricing Óptima",
    order: 3,
    status: "locked",
    agentInstruction:
      "Con toda la información de mercado que hemos recopilado, es hora de definir tu estrategia de precios. No existe un precio 'correcto' universal — existe el precio correcto para TU posicionamiento, TU audiencia y TU propuesta de valor. Vamos a construir tu modelo de pricing basado en datos, no en suposiciones.",
    formFields: [
      {
        id: "pricing-strategy",
        type: "radio",
        label: "¿Qué estrategia de pricing quieres adoptar?",
        required: true,
        options: [
          {
            value: "penetration",
            label: "Penetración — precio bajo para captar mercado rápido",
            description:
              "Entras con precios bajos para ganar volumen y luego subes.",
          },
          {
            value: "premium",
            label: "Premium — precio alto que filtra clientes serios",
            description:
              "Posicionas tu academia como la opción de alta calidad.",
          },
          {
            value: "value-based",
            label: "Basado en valor — precio proporcional al ROI",
            description:
              "El precio refleja el resultado que el estudiante obtendrá.",
          },
          {
            value: "tiered",
            label: "Escalonado — múltiples niveles para distintos segmentos",
            description:
              "Ofrecerás 2-3 opciones de precio para captar distintos perfiles.",
          },
        ],
      },
      {
        id: "pricing-initial",
        type: "slider",
        label:
          "¿Cuál sería tu precio de lanzamiento para tu producto principal?",
        description:
          "Basándote en el análisis del mercado, selecciona un rango realista.",
        required: true,
        sliderPositions: [
          "$27–$97",
          "$97–$297",
          "$297–$697",
          "$697–$1,497",
          "$1,497+",
        ],
      },
      {
        id: "pricing-payment-options",
        type: "chip-selector",
        label: "¿Qué opciones de pago ofrecerás?",
        description: "Selecciona todas las facilidades de pago que planeas implementar.",
        required: true,
        options: [
          { value: "full-payment", label: "Pago completo", emoji: "💳" },
          { value: "installments-3", label: "3 cuotas", emoji: "3️⃣" },
          { value: "installments-6", label: "6 cuotas", emoji: "6️⃣" },
          { value: "installments-12", label: "12 cuotas", emoji: "🔢" },
          { value: "ppp", label: "Paridad de poder adquisitivo", emoji: "🌍" },
          { value: "early-bird", label: "Descuento early bird", emoji: "🐣" },
          {
            value: "scholarship",
            label: "Becas parciales",
            emoji: "🎓",
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════
  // MODULE 7: Canales de Adquisición (4 steps) — LOCKED
  // ═══════════════════════════════════════════════════════════════════

  // M7-S1: Canales Orgánicos
  {
    id: "step-atlas-m7-s1",
    moduleId: "atlas-m7",
    title: "Canales Orgánicos",
    order: 1,
    status: "locked",
    agentInstruction:
      "Empezamos con los canales orgánicos — aquellos que no requieren inversión publicitaria directa. SEO, contenido en redes, YouTube, blog... Son la base de un crecimiento sostenible. ¿Dónde está tu audiencia y cómo puedes atraerla sin gastar en ads? Esto define tu estrategia de contenido.",
    formFields: [
      {
        id: "organic-channels",
        type: "toggle-list",
        label: "¿Qué canales orgánicos usarás para atraer estudiantes?",
        description:
          "Selecciona los canales donde invertirás tiempo y esfuerzo de contenido.",
        required: true,
        options: [
          {
            value: "youtube",
            label: "YouTube — Videos educativos",
            description:
              "Crear contenido gratuito en video para atraer audiencia.",
          },
          {
            value: "blog-seo",
            label: "Blog + SEO — Artículos optimizados",
            description:
              "Escribir contenido que posicione en Google para búsquedas clave.",
          },
          {
            value: "instagram-reels",
            label: "Instagram/TikTok — Contenido corto",
            description:
              "Reels, stories y TikToks para generar alcance y engagement.",
          },
          {
            value: "linkedin",
            label: "LinkedIn — Contenido profesional",
            description:
              "Artículos y posts para atraer profesionales B2B.",
          },
          {
            value: "twitter",
            label: "X (Twitter) — Hilos y comunidad",
            description:
              "Hilos educativos y participación en conversaciones del sector.",
          },
          {
            value: "podcast",
            label: "Podcast — Contenido de audio",
            description:
              "Episodios que profundizan en temas de tu nicho.",
          },
          {
            value: "newsletter",
            label: "Newsletter — Email marketing",
            description:
              "Boletín periódico para nutrir relación con tu audiencia.",
          },
        ],
      },
      {
        id: "organic-current-presence",
        type: "chip-selector",
        label: "¿En cuáles de estos canales ya tienes presencia activa?",
        description: "Selecciona donde ya publicas contenido regularmente.",
        required: true,
        options: [
          { value: "youtube", label: "YouTube", emoji: "📺" },
          { value: "instagram", label: "Instagram", emoji: "📸" },
          { value: "tiktok", label: "TikTok", emoji: "🎵" },
          { value: "linkedin", label: "LinkedIn", emoji: "💼" },
          { value: "twitter", label: "X / Twitter", emoji: "🐦" },
          { value: "blog", label: "Blog propio", emoji: "📝" },
          { value: "none", label: "Ninguno todavía", emoji: "🆕" },
        ],
      },
      {
        id: "organic-content-frequency",
        type: "slider",
        label:
          "¿Con qué frecuencia puedes producir contenido orgánico de calidad?",
        description:
          "Sé realista — mejor poco consistente que mucho inconsistente.",
        required: true,
        sliderPositions: [
          "1 vez/mes",
          "2-3 veces/mes",
          "1 vez/semana",
          "2-3 veces/semana",
          "Diario",
        ],
      },
    ],
  },

  // M7-S2: Canales de Pago
  {
    id: "step-atlas-m7-s2",
    moduleId: "atlas-m7",
    title: "Canales de Pago",
    order: 2,
    status: "locked",
    agentInstruction:
      "Los canales de pago te permiten acelerar resultados. Ads en Meta, Google, YouTube, sponsorships... Si tienes presupuesto, puedes llegar a tu audiencia mucho más rápido. Pero el dinero mal gastado en ads es dinero quemado. Vamos a definir una estrategia de paid media inteligente.",
    formFields: [
      {
        id: "paid-platforms",
        type: "chip-selector",
        label: "¿En qué plataformas de publicidad planeas invertir?",
        description: "Selecciona las plataformas de ads que consideras.",
        required: true,
        options: [
          { value: "meta-ads", label: "Meta Ads (FB + IG)", emoji: "📘" },
          { value: "google-ads", label: "Google Ads (Search)", emoji: "🔍" },
          { value: "youtube-ads", label: "YouTube Ads", emoji: "📺" },
          { value: "tiktok-ads", label: "TikTok Ads", emoji: "🎵" },
          { value: "linkedin-ads", label: "LinkedIn Ads", emoji: "💼" },
          { value: "influencers", label: "Influencer marketing", emoji: "🌟" },
          { value: "none", label: "No planeo invertir en ads", emoji: "🚫" },
        ],
      },
      {
        id: "paid-budget",
        type: "slider",
        label: "¿Cuánto presupuesto mensual puedes dedicar a publicidad?",
        description: "Presupuesto mensual disponible para campañas pagadas.",
        required: true,
        sliderPositions: ["$0", "$100–$500", "$500–$2,000", "$2,000–$5,000", "$5,000+"],
      },
      {
        id: "paid-experience",
        type: "radio",
        label: "¿Cuánta experiencia tienes corriendo campañas de publicidad online?",
        required: true,
        options: [
          {
            value: "none",
            label: "Ninguna — nunca he hecho ads",
            description: "Necesitaré aprender desde cero o contratar ayuda.",
          },
          {
            value: "basic",
            label: "Básica — he boosteado posts o hecho ads simples",
            description:
              "He gastado algo en publicidad pero sin estrategia clara.",
          },
          {
            value: "intermediate",
            label: "Intermedia — he corrido campañas con resultados medibles",
            description:
              "Entiendo métricas, públicos y optimización básica.",
          },
          {
            value: "advanced",
            label: "Avanzada — manejo campañas profesionalmente",
            description:
              "Domino funnels, retargeting, CPA y ROAS optimization.",
          },
        ],
      },
    ],
  },

  // M7-S3: Canales de Referencia
  {
    id: "step-atlas-m7-s3",
    moduleId: "atlas-m7",
    title: "Canales de Referencia",
    order: 3,
    status: "locked",
    agentInstruction:
      "Los canales de referencia son oro puro — cuando alguien más recomienda tu academia, la confianza es automática. Partnerships, afiliados, alianzas estratégicas, programas de referidos... Vamos a diseñar cómo otros van a promover tu academia por ti.",
    formFields: [
      {
        id: "referral-strategies",
        type: "toggle-list",
        label: "¿Qué estrategias de referencia planeas implementar?",
        description:
          "Selecciona las tácticas de referencia que usarás para crecer.",
        required: true,
        options: [
          {
            value: "affiliate-program",
            label: "Programa de afiliados",
            description:
              "Otros promocionan tu curso y ganan comisión por cada venta.",
          },
          {
            value: "referral-rewards",
            label: "Programa de referidos con recompensas",
            description:
              "Tus estudiantes actuales refieren amigos a cambio de descuentos o beneficios.",
          },
          {
            value: "strategic-partnerships",
            label: "Alianzas estratégicas con empresas",
            description:
              "Acuerdos con empresas que necesitan capacitar a su personal.",
          },
          {
            value: "co-creation",
            label: "Co-creación con otros creadores",
            description:
              "Cursos o contenido en colaboración con otros expertos.",
          },
          {
            value: "press-pr",
            label: "Prensa y relaciones públicas",
            description:
              "Apariciones en medios, entrevistas, artículos sobre tu academia.",
          },
          {
            value: "speaking",
            label: "Conferencias y webinars invitados",
            description:
              "Participar como speaker en eventos para ganar visibilidad.",
          },
        ],
      },
      {
        id: "referral-network-size",
        type: "slider",
        label: "¿Qué tan grande es tu red profesional actual?",
        description:
          "Personas que podrían referirte estudiantes o promover tu academia.",
        required: true,
        sliderPositions: [
          "< 100 contactos",
          "100–500",
          "500–2,000",
          "2,000–10,000",
          "10,000+",
        ],
      },
      {
        id: "referral-commission",
        type: "radio",
        label:
          "Si implementas un programa de afiliados, ¿qué comisión ofrecerías?",
        required: false,
        options: [
          {
            value: "10-percent",
            label: "10-15% por venta",
            description: "Comisión conservadora, común en productos digitales.",
          },
          {
            value: "20-percent",
            label: "20-30% por venta",
            description:
              "Comisión competitiva que atrae afiliados de calidad.",
          },
          {
            value: "40-percent",
            label: "40-50% por venta",
            description:
              "Comisión agresiva que maximiza la promoción por terceros.",
          },
          {
            value: "not-applicable",
            label: "No planeo programa de afiliados",
            description:
              "Prefiero otros canales de referencia.",
          },
        ],
      },
    ],
  },

  // M7-S4: Mix de Canales Óptimo
  {
    id: "step-atlas-m7-s4",
    moduleId: "atlas-m7",
    title: "Mix de Canales Óptimo",
    order: 4,
    status: "locked",
    agentInstruction:
      "Momento de armar el rompecabezas. De todos los canales que hemos evaluado — orgánicos, pagados y de referencia — necesitamos definir tu mix ideal. No puedes estar en todos lados. ¿Cuáles son los 2-3 canales donde concentrarás tu energía en la fase de lanzamiento? La clave es enfoque, no dispersión.",
    formFields: [
      {
        id: "channel-priority",
        type: "chip-selector",
        label:
          "Selecciona tus 3 canales principales para los primeros 6 meses",
        description:
          "Estos serán los canales donde invertirás el 80% de tu esfuerzo de adquisición.",
        required: true,
        options: [
          { value: "youtube", label: "YouTube", emoji: "📺" },
          { value: "instagram", label: "Instagram/TikTok", emoji: "📱" },
          { value: "seo-blog", label: "SEO + Blog", emoji: "🔍" },
          { value: "meta-ads", label: "Meta Ads", emoji: "📘" },
          { value: "email", label: "Email marketing", emoji: "📧" },
          { value: "affiliates", label: "Afiliados", emoji: "🤝" },
          { value: "linkedin", label: "LinkedIn", emoji: "💼" },
          { value: "webinars", label: "Webinars gratuitos", emoji: "🎥" },
          { value: "partnerships", label: "Alianzas B2B", emoji: "🏢" },
        ],
      },
      {
        id: "channel-budget-split",
        type: "textarea",
        label:
          "¿Cómo distribuirías tu tiempo y presupuesto entre estos canales?",
        description:
          "Asigna porcentajes aproximados. Ejemplo: YouTube 40%, Instagram 30%, Email 30%.",
        required: true,
        placeholder:
          "Ej: YouTube (40%) — 2 videos semanales de contenido educativo, Instagram (30%) — reels diarios y stories, Email marketing (30%) — newsletter semanal + secuencia de nurturing...",
        maxLength: 500,
      },
      {
        id: "channel-success-metrics",
        type: "toggle-list",
        label: "¿Qué métricas usarás para medir el éxito de cada canal?",
        description:
          "Selecciona las KPIs que vas a trackear regularmente.",
        required: true,
        options: [
          {
            value: "cac",
            label: "CAC (Costo de Adquisición de Cliente)",
            description:
              "Cuánto te cuesta convertir un visitante en estudiante de pago.",
          },
          {
            value: "ltv",
            label: "LTV (Valor de Vida del Cliente)",
            description:
              "Cuánto genera cada estudiante durante toda la relación.",
          },
          {
            value: "conversion-rate",
            label: "Tasa de conversión por canal",
            description:
              "Porcentaje de visitantes que se convierten en leads o clientes.",
          },
          {
            value: "engagement",
            label: "Engagement rate",
            description:
              "Nivel de interacción con tu contenido en cada plataforma.",
          },
          {
            value: "email-list-growth",
            label: "Crecimiento de lista de email",
            description:
              "Velocidad a la que crece tu base de suscriptores.",
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════
  // MODULE 8: Oportunidades de Nicho (3 steps) — LOCKED
  // ═══════════════════════════════════════════════════════════════════

  // M8-S1: Nichos Desatendidos
  {
    id: "step-atlas-m8-s1",
    moduleId: "atlas-m8",
    title: "Nichos Desatendidos",
    order: 1,
    status: "locked",
    agentInstruction:
      "La riqueza está en los nichos. En vez de competir con gigantes en un mercado amplio, vamos a identificar micro-segmentos donde puedes ser el referente absoluto. ¿Qué nichos específicos dentro de tu área están mal atendidos? ¿Dónde puedes ser el número 1 más rápido?",
    formFields: [
      {
        id: "niche-candidates",
        type: "textarea",
        label: "Lista 3-5 nichos específicos dentro de tu área de expertise",
        description:
          "Piensa en intersecciones únicas: tu habilidad + una industria o perfil específico.",
        required: true,
        placeholder:
          "Ej:\n1. UX Design para startups fintech en LATAM\n2. UX Research para equipos de producto remotos\n3. Design Systems para empresas medianas\n4. UX Writing en español para apps de salud\n5. Diseño de onboarding para apps SaaS B2B",
        maxLength: 700,
      },
      {
        id: "niche-demand-signals",
        type: "chip-selector",
        label: "¿Qué señales de demanda has observado en estos nichos?",
        description: "Selecciona las señales que validan que hay demanda real.",
        required: true,
        options: [
          {
            value: "search-volume",
            label: "Búsquedas crecientes en Google",
            emoji: "📊",
          },
          {
            value: "social-questions",
            label: "Preguntas frecuentes en redes",
            emoji: "❓",
          },
          {
            value: "job-postings",
            label: "Ofertas de trabajo crecientes",
            emoji: "💼",
          },
          {
            value: "community-gaps",
            label: "Vacíos en comunidades del sector",
            emoji: "🕳️",
          },
          {
            value: "direct-requests",
            label: "Me lo han pedido directamente",
            emoji: "🗣️",
          },
          {
            value: "competitor-absence",
            label: "Ningún competidor lo cubre bien",
            emoji: "🏜️",
          },
        ],
      },
      {
        id: "niche-passion-alignment",
        type: "rating",
        label: "¿Qué tanto te apasionan estos nichos específicos?",
        description:
          "1 = Solo veo oportunidad de negocio. 5 = Me apasiona profundamente este nicho.",
        required: true,
      },
    ],
  },

  // M8-S2: Validación de Oportunidad
  {
    id: "step-atlas-m8-s2",
    moduleId: "atlas-m8",
    title: "Validación de Oportunidad",
    order: 2,
    status: "locked",
    agentInstruction:
      "Identificamos nichos prometedores, ahora toca validar. No basta con que un nicho 'se vea' bien — necesitamos evidencia de que la gente pagaría por lo que ofreces ahí. Vamos a aplicar un framework rápido de validación para cada nicho candidato.",
    formFields: [
      {
        id: "validation-criteria",
        type: "toggle-list",
        label:
          "Para tu nicho principal, ¿cuáles de estos criterios de validación se cumplen?",
        description:
          "Mientras más criterios se cumplan, más sólida es la oportunidad.",
        required: true,
        options: [
          {
            value: "paying-customers-exist",
            label: "Ya existen clientes que pagan por algo similar",
            description:
              "Hay evidencia de que la gente gasta dinero en este tipo de formación.",
          },
          {
            value: "can-reach-audience",
            label: "Puedo llegar a esta audiencia con mis canales",
            description:
              "Sé dónde están y tengo forma de contactarlos.",
          },
          {
            value: "unique-angle",
            label: "Tengo un ángulo único y creíble",
            description:
              "Mi experiencia o perspectiva me diferencia genuinamente.",
          },
          {
            value: "scalable",
            label: "Es escalable sin multiplicar costos",
            description:
              "Puedo servir a 10x más clientes sin 10x más esfuerzo.",
          },
          {
            value: "recurring-need",
            label: "La necesidad es recurrente, no puntual",
            description:
              "Los clientes necesitarán formación continua, no un solo curso.",
          },
          {
            value: "willingness-to-pay",
            label: "Disposición de pago demostrada",
            description:
              "Este nicho tiene poder adquisitivo y valora la formación.",
          },
        ],
      },
      {
        id: "validation-score",
        type: "slider",
        label:
          "¿Cómo calificas la oportunidad general de tu nicho principal?",
        description:
          "Basándote en los criterios anteriores, ¿qué tan fuerte es esta oportunidad?",
        required: true,
        sliderPositions: [
          "Débil",
          "Prometedora con riesgos",
          "Sólida",
          "Muy fuerte",
          "Oportunidad excepcional",
        ],
      },
      {
        id: "validation-risks",
        type: "textarea",
        label:
          "¿Cuáles son los principales riesgos de entrar en este nicho?",
        description:
          "Sé honesto — ¿qué podría salir mal? ¿Qué supuestos podrían ser incorrectos?",
        required: true,
        placeholder:
          "Ej: El principal riesgo es que el nicho sea demasiado pequeño para sostener un negocio rentable. También existe el riesgo de que una plataforma grande (ej: Coursera) lance un programa certificado por Google que me deje fuera...",
        maxLength: 500,
      },
    ],
  },

  // M8-S3: Estrategia de Entrada al Nicho
  {
    id: "step-atlas-m8-s3",
    moduleId: "atlas-m8",
    title: "Estrategia de Entrada al Nicho",
    order: 3,
    status: "locked",
    agentInstruction:
      "Validamos tu nicho — ahora diseñemos la estrategia de entrada. ¿Cómo vas a posicionarte como EL referente? ¿Cuál es tu beachhead strategy? Piensa en esto como una operación militar: necesitas un punto de entrada claro, un mensaje contundente y un plan para expandir desde ahí.",
    formFields: [
      {
        id: "entry-strategy",
        type: "radio",
        label: "¿Cuál será tu estrategia de entrada al nicho?",
        required: true,
        options: [
          {
            value: "free-content-first",
            label: "Contenido gratuito primero — construir audiencia antes de vender",
            description:
              "3-6 meses de contenido gratuito de alto valor antes de lanzar el curso.",
          },
          {
            value: "mvp-launch",
            label: "MVP rápido — lanzar un producto mínimo y iterar",
            description:
              "Crear una versión básica del curso y mejorar con feedback real.",
          },
          {
            value: "beta-cohort",
            label: "Cohorte beta — grupo pequeño a precio especial",
            description:
              "Lanzar con 10-20 estudiantes piloto para refinar antes de escalar.",
          },
          {
            value: "authority-build",
            label: "Construcción de autoridad — posicionarme como experto primero",
            description:
              "Publicar, hablar en eventos, escribir artículos antes de vender.",
          },
        ],
      },
      {
        id: "entry-first-product",
        type: "textarea",
        label: "Describe tu primer producto/oferta para este nicho",
        description:
          "¿Qué vas a vender primero? ¿Cuál es la promesa central? ¿En qué formato?",
        required: true,
        placeholder:
          "Ej: Un workshop intensivo de 4 semanas llamado 'UX Research Sprint' donde profesionales de producto aprenden a hacer investigación de usuarios en 2 horas/semana. Precio de lanzamiento: $197. Incluye templates, casos reales y certificado...",
        maxLength: 600,
      },
      {
        id: "entry-timeline",
        type: "chip-selector",
        label: "¿En cuánto tiempo planeas estar listo para tu primer lanzamiento?",
        description: "Tiempo desde hoy hasta que vendas tu primer producto.",
        required: true,
        options: [
          { value: "2-weeks", label: "2 semanas", emoji: "⚡" },
          { value: "1-month", label: "1 mes", emoji: "🗓️" },
          { value: "2-months", label: "2 meses", emoji: "📅" },
          { value: "3-months", label: "3 meses", emoji: "🎯" },
          { value: "6-months", label: "6 meses", emoji: "🏗️" },
          { value: "6-plus", label: "Más de 6 meses", emoji: "🔮" },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════
  // MODULE 9: Validación de Demanda (4 steps) — LOCKED
  // ═══════════════════════════════════════════════════════════════════

  // M9-S1: Señales de Demanda
  {
    id: "step-atlas-m9-s1",
    moduleId: "atlas-m9",
    title: "Señales de Demanda",
    order: 1,
    status: "locked",
    agentInstruction:
      "Último módulo y el más crítico: validación de demanda. Antes de invertir meses creando un curso, necesitamos evidencia CONCRETA de que la gente quiere lo que vas a ofrecer. Empezamos buscando señales existentes en el mercado — ¿qué dice internet sobre la demanda por tu tema?",
    formFields: [
      {
        id: "demand-search-signals",
        type: "toggle-list",
        label: "¿Qué señales de demanda has identificado en el mercado?",
        description:
          "Selecciona las señales que has verificado personalmente.",
        required: true,
        options: [
          {
            value: "google-trends-up",
            label: "Google Trends muestra crecimiento",
            description:
              "Las búsquedas de tu tema están en tendencia ascendente.",
          },
          {
            value: "keyword-volume",
            label: "Alto volumen de búsqueda en keywords relevantes",
            description:
              "Las palabras clave de tu nicho tienen miles de búsquedas mensuales.",
          },
          {
            value: "social-engagement",
            label: "Alto engagement en contenido del tema en redes",
            description:
              "Posts sobre tu tema reciben likes, comentarios y compartidos.",
          },
          {
            value: "competitor-sales",
            label: "Competidores con ventas verificables",
            description:
              "Puedes ver que competidores están vendiendo cursos similares.",
          },
          {
            value: "forum-questions",
            label: "Preguntas frecuentes en foros y comunidades",
            description:
              "La gente pregunta activamente sobre tu tema en Reddit, Quora, etc.",
          },
          {
            value: "job-market",
            label: "Demanda laboral creciente para esta habilidad",
            description:
              "Hay ofertas de trabajo que requieren lo que tú enseñas.",
          },
        ],
      },
      {
        id: "demand-volume-estimate",
        type: "slider",
        label: "¿Cuál es el volumen de búsqueda mensual estimado para tu tema principal?",
        description:
          "Búsquedas mensuales en Google para keywords relacionadas con tu curso.",
        required: true,
        sliderPositions: [
          "< 1,000",
          "1,000–5,000",
          "5,000–20,000",
          "20,000–100,000",
          "100,000+",
        ],
      },
      {
        id: "demand-evidence-confidence",
        type: "rating",
        label: "¿Qué tan sólida es la evidencia de demanda que has encontrado?",
        description:
          "1 = Intuición, sin datos. 5 = Tengo datos cuantitativos concretos que lo respaldan.",
        required: true,
      },
    ],
  },

  // M9-S2: Tests de Validación
  {
    id: "step-atlas-m9-s2",
    moduleId: "atlas-m9",
    title: "Tests de Validación",
    order: 2,
    status: "locked",
    agentInstruction:
      "Las señales del mercado son un buen inicio, pero la validación real viene de acciones concretas de tus potenciales clientes. ¿Están dispuestos a darte su email, su tiempo o su dinero? Vamos a diseñar tests de validación que te den respuestas definitivas antes de crear tu curso completo.",
    formFields: [
      {
        id: "validation-tests",
        type: "toggle-list",
        label: "¿Qué tests de validación estás dispuesto a ejecutar?",
        description:
          "Selecciona los tests que implementarás antes de crear tu curso completo.",
        required: true,
        options: [
          {
            value: "landing-page",
            label: "Landing page con lista de espera",
            description:
              "Crear una página de venta y medir cuántos se registran para ser notificados.",
          },
          {
            value: "presale",
            label: "Pre-venta con descuento de lanzamiento",
            description:
              "Vender el curso antes de crearlo a un precio especial.",
          },
          {
            value: "free-workshop",
            label: "Workshop gratuito como prueba",
            description:
              "Dar una clase gratuita y al final medir interés de compra.",
          },
          {
            value: "survey",
            label: "Encuesta a audiencia target",
            description:
              "Encuestar directamente a potenciales clientes sobre su interés y disposición de pago.",
          },
          {
            value: "content-test",
            label: "Publicar contenido y medir respuesta",
            description:
              "Crear contenido gratuito del tema y medir engagement y solicitudes.",
          },
          {
            value: "direct-outreach",
            label: "Contacto directo 1:1 con potenciales clientes",
            description:
              "Hablar individualmente con 10-20 personas del target y proponerles tu oferta.",
          },
        ],
      },
      {
        id: "validation-success-criteria",
        type: "radio",
        label: "¿Cuál es tu criterio mínimo de éxito para considerar tu idea validada?",
        required: true,
        options: [
          {
            value: "email-signups",
            label: "100+ registros en lista de espera",
            description:
              "Si 100 personas dejan su email, hay interés suficiente.",
          },
          {
            value: "presales",
            label: "10+ pre-ventas pagadas",
            description:
              "Si 10 personas pagan por adelantado, la demanda es real.",
          },
          {
            value: "survey-responses",
            label: "50+ respuestas positivas en encuesta",
            description:
              "Si 50+ personas dicen que pagarían, vale la pena seguir.",
          },
          {
            value: "workshop-conversion",
            label: "20%+ de conversión en workshop gratuito",
            description:
              "Si 1 de cada 5 asistentes al workshop quiere pagar, es viable.",
          },
        ],
      },
      {
        id: "validation-timeline",
        type: "slider",
        label: "¿En cuánto tiempo ejecutarás tus tests de validación?",
        description:
          "Tiempo que dedicarás a validar antes de empezar a crear el curso.",
        required: true,
        sliderPositions: [
          "1 semana",
          "2 semanas",
          "1 mes",
          "2 meses",
          "3+ meses",
        ],
      },
    ],
  },

  // M9-S3: Feedback del Mercado
  {
    id: "step-atlas-m9-s3",
    moduleId: "atlas-m9",
    title: "Feedback del Mercado",
    order: 3,
    status: "locked",
    agentInstruction:
      "Los datos cuantitativos son importantes, pero el feedback cualitativo te da la profundidad que los números no pueden. Necesitas escuchar directamente a tu mercado. ¿Qué dicen cuando les describes tu idea? ¿Qué objeciones ponen? ¿Qué ajustes sugieren? Esta información vale oro para refinar tu oferta.",
    formFields: [
      {
        id: "feedback-sources",
        type: "chip-selector",
        label: "¿De dónde obtendrás feedback cualitativo?",
        description: "Selecciona las fuentes de feedback que vas a utilizar.",
        required: true,
        options: [
          { value: "interviews", label: "Entrevistas 1:1", emoji: "🎙️" },
          { value: "focus-groups", label: "Grupos focales", emoji: "👥" },
          { value: "social-comments", label: "Comentarios en redes", emoji: "💬" },
          { value: "dm-conversations", label: "Conversaciones por DM", emoji: "📩" },
          { value: "community-feedback", label: "Feedback en comunidades", emoji: "🏘️" },
          { value: "beta-testers", label: "Beta testers", emoji: "🧪" },
        ],
      },
      {
        id: "feedback-key-questions",
        type: "textarea",
        label: "¿Cuáles son las 3-5 preguntas más importantes que le harías a un potencial cliente?",
        description:
          "Preguntas que te ayudarían a validar la idea y refinar tu oferta.",
        required: true,
        placeholder:
          "Ej:\n1. ¿Cuál es tu mayor frustración actual con [tema]?\n2. ¿Has pagado por formación en este área antes? ¿Cuánto?\n3. ¿Qué tendría que incluir un programa para que digas 'toma mi dinero'?\n4. ¿Qué te ha frenado de aprender esto hasta ahora?\n5. Si existiera [mi curso], ¿lo comprarías hoy?",
        maxLength: 700,
      },
      {
        id: "feedback-synthesis-approach",
        type: "radio",
        label: "¿Cómo planeas sintetizar y actuar sobre el feedback recibido?",
        required: true,
        options: [
          {
            value: "iterate-fast",
            label: "Iterar rápido — ajustar la oferta con cada feedback",
            description:
              "Modificar mi propuesta en tiempo real según lo que escucho.",
          },
          {
            value: "batch-analyze",
            label: "Recopilar y analizar en lote después de N entrevistas",
            description:
              "Juntar todo el feedback y buscar patrones antes de hacer cambios.",
          },
          {
            value: "ab-test",
            label: "Crear variantes A/B basadas en el feedback",
            description:
              "Probar diferentes versiones de mi oferta según los insights.",
          },
          {
            value: "expert-review",
            label: "Revisar con un mentor o asesor antes de decidir",
            description:
              "Contrastar el feedback del mercado con la opinión de alguien experto.",
          },
        ],
      },
    ],
  },

  // M9-S4: Decisión Go/No-Go
  {
    id: "step-atlas-m9-s4",
    moduleId: "atlas-m9",
    title: "Decisión Go/No-Go",
    order: 4,
    status: "locked",
    agentInstruction:
      "Este es el momento de la verdad. Hemos analizado el mercado, la competencia, las tendencias, los precios, los canales, los nichos y la demanda. Ahora necesitas tomar UNA decisión: ¿sigues adelante con tu academia o pivotas? No hay respuesta incorrecta — hay decisiones informadas. Los datos que hemos recopilado te dan la claridad para decidir con confianza.",
    formFields: [
      {
        id: "go-nogo-decision",
        type: "radio",
        label: "Basándote en toda la investigación de mercado, ¿cuál es tu decisión?",
        required: true,
        options: [
          {
            value: "strong-go",
            label: "GO firme — Los datos respaldan claramente la oportunidad",
            description:
              "La demanda es real, el nicho es viable y tengo ventajas competitivas.",
          },
          {
            value: "cautious-go",
            label: "GO con precaución — Viable pero necesita más validación",
            description:
              "Los indicadores son positivos pero quiero validar más antes de invertir fuerte.",
          },
          {
            value: "pivot",
            label: "PIVOT — Cambiar enfoque o nicho antes de avanzar",
            description:
              "Los datos sugieren que mi enfoque actual no es óptimo. Necesito ajustar.",
          },
          {
            value: "no-go",
            label: "NO-GO — Detener y reconsiderar fundamentalmente",
            description:
              "La investigación revela que esta oportunidad no es viable en este momento.",
          },
        ],
      },
      {
        id: "go-nogo-confidence",
        type: "rating",
        label: "¿Qué tan seguro estás de esta decisión?",
        description:
          "1 = Muy inseguro, necesito más datos. 5 = Completamente seguro, los datos son claros.",
        required: true,
      },
      {
        id: "go-nogo-next-steps",
        type: "textarea",
        label: "¿Cuáles son tus 3 próximos pasos inmediatos?",
        description:
          "Sin importar tu decisión, define las acciones concretas que tomarás en los próximos 7 días.",
        required: true,
        placeholder:
          "Ej:\n1. Crear la landing page de mi curso y activar lista de espera\n2. Grabar 3 videos de contenido gratuito para YouTube\n3. Contactar 10 personas de mi red que encajen con mi buyer persona y ofrecerles ser beta testers",
        maxLength: 600,
      },
      {
        id: "go-nogo-key-learning",
        type: "textarea",
        label: "¿Cuál fue tu aprendizaje más valioso de todo este análisis de mercado?",
        description:
          "Reflexiona sobre qué descubriste que no sabías antes de empezar este proceso.",
        required: false,
        placeholder:
          "Ej: Descubrí que mi verdadera ventaja no es el tema que enseño, sino la forma en que lo enseño. También me di cuenta de que mi audiencia principal no son principiantes sino profesionales en transición, lo cual cambia completamente mi pricing y posicionamiento...",
        maxLength: 500,
      },
    ],
  },
];
