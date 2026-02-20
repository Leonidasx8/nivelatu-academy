import Link from "next/link";
import { Zap } from "lucide-react";

export function FooterCTA() {
  return (
    <section className="py-24 bg-bg-deep relative overflow-hidden">
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(255,107,0,0.1) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center flex flex-col items-center gap-6">
        <h2 className="text-4xl md:text-5xl font-sans font-black text-text-primary">
          ¿Listo para lanzar tu academia?
        </h2>
        <p className="text-text-secondary font-body text-lg max-w-xl">
          Miles de coaches, consultores y formadores ya están construyendo su academia
          ideal con NivelatuAcademy. Tu turno.
        </p>
        <Link
          href="/register"
          className="inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-white font-sans font-bold px-10 py-4 rounded-xl btn-glow transition-all duration-200 text-base"
        >
          <Zap className="w-5 h-5" fill="currentColor" />
          Empieza gratis ahora →
        </Link>
        <p className="text-text-disabled font-body text-sm">
          Sin tarjeta de crédito · 14 días gratis · Cancela cuando quieras
        </p>
      </div>
    </section>
  );
}
