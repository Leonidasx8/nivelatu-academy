"use client";

import { useState } from "react";
import Link from "next/link";
import { Github, Eye, EyeOff, Zap } from "lucide-react";

interface StepAccountProps {
  onNext: () => void;
  formData: Record<string, string>;
  onChange: (field: string, value: string) => void;
}

function PasswordStrength({ password }: { password: string }) {
  const getStrength = (pwd: string) => {
    let score = 0;
    if (pwd.length >= 8) score++;
    if (/[A-Z]/.test(pwd)) score++;
    if (/[0-9]/.test(pwd)) score++;
    if (/[^A-Za-z0-9]/.test(pwd)) score++;
    return score;
  };

  const strength = getStrength(password);
  const colors = ["bg-red-500", "bg-orange-400", "bg-yellow-400", "bg-green-400"];
  const labels = ["Débil", "Regular", "Buena", "Fuerte"];

  if (!password) return null;

  return (
    <div className="flex items-center gap-2 mt-1.5">
      {[0, 1, 2, 3].map((i) => (
        <div
          key={i}
          className={`h-1 flex-1 rounded-full transition-all duration-300 ${
            i < strength ? colors[strength - 1] : "bg-glass-border"
          }`}
        />
      ))}
      <span className="text-[10px] font-body text-text-disabled whitespace-nowrap">
        {password ? labels[strength - 1] || "Débil" : ""}
      </span>
    </div>
  );
}

export function StepAccount({ onNext, formData, onChange }: StepAccountProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-2xl font-sans font-black text-text-primary mb-1">
          Crea tu cuenta
        </h2>
        <p className="text-text-secondary font-body text-sm">
          Comienza gratis, sin tarjeta de crédito
        </p>
      </div>

      {/* OAuth buttons */}
      <div className="flex flex-col gap-3">
        <button className="glass-card glass-card-hover flex items-center justify-center gap-3 py-3 rounded-xl text-text-primary font-body text-sm font-semibold transition-all duration-200">
          <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          Continuar con Google
        </button>
        <button className="glass-card glass-card-hover flex items-center justify-center gap-3 py-3 rounded-xl text-text-primary font-body text-sm font-semibold transition-all duration-200">
          <Github className="w-5 h-5" />
          Continuar con GitHub
        </button>
      </div>

      {/* Divider */}
      <div className="flex items-center gap-3">
        <div className="flex-1 h-px bg-glass-border" />
        <span className="text-text-disabled font-body text-xs">o</span>
        <div className="flex-1 h-px bg-glass-border" />
      </div>

      {/* Name fields */}
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-text-secondary font-body text-xs mb-1.5">
            Nombre
          </label>
          <input
            type="text"
            placeholder="Ana"
            value={formData.firstName || ""}
            onChange={(e) => onChange("firstName", e.target.value)}
            className="glass-input w-full rounded-lg px-4 py-3 text-text-primary font-body text-sm outline-none transition-all duration-200 placeholder:text-text-disabled"
          />
        </div>
        <div>
          <label className="block text-text-secondary font-body text-xs mb-1.5">
            Apellido
          </label>
          <input
            type="text"
            placeholder="García"
            value={formData.lastName || ""}
            onChange={(e) => onChange("lastName", e.target.value)}
            className="glass-input w-full rounded-lg px-4 py-3 text-text-primary font-body text-sm outline-none transition-all duration-200 placeholder:text-text-disabled"
          />
        </div>
      </div>

      {/* Email */}
      <div>
        <label className="block text-text-secondary font-body text-xs mb-1.5">
          Email
        </label>
        <input
          type="email"
          placeholder="ana@ejemplo.com"
          value={formData.email || ""}
          onChange={(e) => onChange("email", e.target.value)}
          className="glass-input w-full rounded-lg px-4 py-3 text-text-primary font-body text-sm outline-none transition-all duration-200 placeholder:text-text-disabled"
        />
      </div>

      {/* Password */}
      <div>
        <label className="block text-text-secondary font-body text-xs mb-1.5">
          Contraseña
        </label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Mínimo 8 caracteres"
            value={formData.password || ""}
            onChange={(e) => onChange("password", e.target.value)}
            className="glass-input w-full rounded-lg px-4 py-3 pr-12 text-text-primary font-body text-sm outline-none transition-all duration-200 placeholder:text-text-disabled"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-text-disabled hover:text-text-secondary transition-colors duration-200"
          >
            {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </button>
        </div>
        <PasswordStrength password={formData.password || ""} />
      </div>

      {/* Terms */}
      <label className="flex items-start gap-3 cursor-pointer">
        <div className="relative mt-0.5 flex-shrink-0">
          <input
            type="checkbox"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            className="sr-only"
          />
          <div
            className={`w-4 h-4 rounded border transition-all duration-200 flex items-center justify-center ${
              agreed
                ? "bg-accent border-accent"
                : "border-glass-border-hover bg-glass-bg"
            }`}
            onClick={() => setAgreed(!agreed)}
          >
            {agreed && (
              <svg className="w-3 h-3 text-white" viewBox="0 0 12 12" fill="none">
                <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </div>
        </div>
        <span className="text-text-secondary font-body text-xs leading-relaxed">
          Acepto los{" "}
          <Link href="#" className="text-accent hover:underline">
            Términos de uso
          </Link>{" "}
          y la{" "}
          <Link href="#" className="text-accent hover:underline">
            Política de privacidad
          </Link>
        </span>
      </label>

      {/* CTA */}
      <button
        onClick={onNext}
        className="w-full flex items-center justify-center gap-2 bg-accent hover:bg-accent-light text-white font-sans font-semibold py-3.5 rounded-xl btn-glow transition-all duration-200"
      >
        <Zap className="w-4 h-4" />
        Continuar →
      </button>
    </div>
  );
}
