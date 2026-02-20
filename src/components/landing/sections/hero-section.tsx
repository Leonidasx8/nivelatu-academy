import Link from "next/link";
import { Zap, Play } from "lucide-react";
import { EnergyCables } from "../energy-cables";

export function HeroSection() {
  return (
    <section className="relative min-h-[820px] bg-bg-deep flex items-center justify-center overflow-hidden">
      {/* Background radial gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(255,107,0,0.07) 0%, transparent 65%)",
        }}
      />

      {/* Decorative energy cables */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <EnergyCables className="w-full h-full" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center gap-8 py-24">
        {/* Badge */}
        <div className="glass-card px-5 py-2 rounded-full inline-flex items-center gap-2">
          <Zap className="w-4 h-4 text-accent" fill="currentColor" />
          <span className="text-accent font-sans font-semibold text-sm tracking-wide">
            Metodología SOSTAC · 7 Agentes IA
          </span>
        </div>

        {/* H1 */}
        <h1 className="text-[64px] md:text-[72px] font-sans font-black text-text-primary leading-[1.05] tracking-tight">
          Lanza tu academia{" "}
          <span
            className="text-accent"
            style={{
              textShadow: "0 0 40px rgba(255,107,0,0.4)",
            }}
          >
            en 90 días
          </span>
          <br />
          <span
            className="text-accent"
            style={{
              textShadow: "0 0 40px rgba(255,107,0,0.4)",
            }}
          >
            con IA
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-text-secondary font-body text-lg md:text-xl max-w-2xl leading-relaxed">
          Plataforma de planificación estratégica guiada por 7 agentes de inteligencia
          artificial especializados. Desde el análisis hasta la acción, cada fase SOSTAC
          tiene su experto.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Link
            href="/register"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-white font-sans font-semibold px-8 py-4 rounded-xl btn-glow transition-all duration-200 text-base"
          >
            <Zap className="w-5 h-5" fill="currentColor" />
            Empieza tu plan ahora →
          </Link>
          <Link
            href="#demo"
            className="inline-flex items-center gap-2 border border-glass-border-hover text-text-primary hover:bg-glass-bg-hover hover:border-glass-border font-sans font-semibold px-8 py-4 rounded-xl transition-all duration-200 text-base"
          >
            <Play className="w-5 h-5" />
            Ver demostración
          </Link>
        </div>

        {/* Social proof */}
        <div className="flex items-center gap-2">
          <div className="flex text-yellow-400 text-lg">
            {"★★★★★"}
          </div>
          <span className="text-text-secondary font-body text-sm">
            Más de{" "}
            <span className="text-text-primary font-semibold">200 academias</span>{" "}
            lanzadas exitosamente
          </span>
        </div>
      </div>
    </section>
  );
}
