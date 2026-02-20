const STEPS = [
  {
    number: 1,
    title: "Brief Express",
    subtitle: "con Delfino",
    description:
      "Delfino captura tu visión, expertise y objetivos en menos de 15 minutos con preguntas estratégicas precisas.",
    emoji: "🐬",
    color: "#06B6D4",
  },
  {
    number: 2,
    title: "Análisis profundo",
    subtitle: "con Forge y Atlas",
    description:
      "Forge diagnostica tus 8 pilares internos y Atlas mapea el mercado, competencia y oportunidades externas.",
    emoji: "🐜",
    color: "#FF6B00",
  },
  {
    number: 3,
    title: "Estrategia y plan",
    subtitle: "con Orlando, Fernando y Tavo",
    description:
      "Orlando fija objetivos SMART, Fernando construye la hoja de ruta estratégica y Tavo la convierte en tácticas.",
    emoji: "🦉",
    color: "#F59E0B",
  },
  {
    number: 4,
    title: "Acción y control",
    subtitle: "con Carla e Iván",
    description:
      "Carla ejecuta los planes de acción con timelines e Iván monitorea KPIs para mantener el ciclo de mejora.",
    emoji: "🐝",
    color: "#8B5CF6",
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-24 bg-bg-primary">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-sans font-black text-text-primary mb-4">
            Cómo funciona
          </h2>
          <p className="text-text-secondary font-body text-lg max-w-xl mx-auto">
            De cero a academia lanzada en 90 días, guiado por IA en cada paso.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-4 gap-6">
          {STEPS.map((step, index) => (
            <div key={step.number} className="relative flex flex-col">
              {/* Connector line */}
              {index < STEPS.length - 1 && (
                <div
                  className="hidden md:block absolute top-8 left-[calc(100%-0px)] w-full h-px z-0"
                  style={{
                    background: `linear-gradient(90deg, ${step.color}40, transparent)`,
                  }}
                />
              )}

              <div className="glass-card rounded-xl p-6 flex flex-col gap-4 relative z-10">
                {/* Number circle */}
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center font-sans font-black text-base flex-shrink-0"
                    style={{
                      backgroundColor: `${step.color}20`,
                      color: step.color,
                      border: `1.5px solid ${step.color}50`,
                    }}
                  >
                    {step.number}
                  </div>
                  <span className="text-2xl" role="img" aria-label={step.title}>
                    {step.emoji}
                  </span>
                </div>

                <div>
                  <h3 className="text-text-primary font-sans font-bold text-base mb-0.5">
                    {step.title}
                  </h3>
                  <p
                    className="text-xs font-body font-semibold mb-2"
                    style={{ color: step.color }}
                  >
                    {step.subtitle}
                  </p>
                  <p className="text-text-secondary font-body text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
