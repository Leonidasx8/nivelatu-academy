"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Github, Eye, EyeOff, Lock, Zap } from "lucide-react";
import { AuthBrandPanel } from "@/components/landing/auth-brand-panel";

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);
    // Mock login — navigate to dashboard after brief delay
    setTimeout(() => router.push("/dashboard"), 800);
  };

  return (
    <div className="min-h-[calc(100vh-72px)] grid md:grid-cols-2">
      {/* Left: Brand panel */}
      <div className="hidden md:block">
        <AuthBrandPanel variant="login" />
      </div>

      {/* Right: Login form */}
      <div className="flex items-center justify-center bg-bg-primary px-6 py-12 min-h-[calc(100vh-72px)]">
        <div className="w-full max-w-[380px] flex flex-col gap-7">
          {/* Mobile logo */}
          <div className="flex md:hidden items-center gap-2 justify-center mb-2">
            <Zap className="w-5 h-5 text-accent" fill="currentColor" />
            <span className="font-sans font-bold text-base text-text-primary">
              NivelatuAcademy
            </span>
          </div>

          {/* Header */}
          <div>
            <h2 className="text-2xl font-sans font-black text-text-primary mb-1">
              Bienvenido de nuevo
            </h2>
            <p className="text-text-secondary font-body text-sm">
              Continúa con tu academia
            </p>
          </div>

          {/* OAuth buttons */}
          <div className="flex flex-col gap-3">
            <button onClick={handleLogin} className="glass-card glass-card-hover flex items-center justify-center gap-3 py-3 rounded-xl text-text-primary font-body text-sm font-semibold transition-all duration-200 border border-glass-border">
              <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Continuar con Google
            </button>
            <button onClick={handleLogin} className="glass-card glass-card-hover flex items-center justify-center gap-3 py-3 rounded-xl text-text-primary font-body text-sm font-semibold transition-all duration-200 border border-glass-border">
              <Github className="w-5 h-5" />
              Continuar con GitHub
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-3">
            <div className="flex-1 h-px bg-glass-border" />
            <span className="text-text-disabled font-body text-xs">— o —</span>
            <div className="flex-1 h-px bg-glass-border" />
          </div>

          {/* Email input */}
          <div className="flex flex-col gap-4">
            <div>
              <label className="block text-text-secondary font-body text-xs mb-1.5">
                Email
              </label>
              <input
                type="email"
                placeholder="ana@ejemplo.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="glass-input w-full rounded-xl px-4 py-3 text-text-primary font-body text-sm outline-none transition-all duration-200 placeholder:text-text-disabled"
              />
            </div>

            {/* Password input */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-text-secondary font-body text-xs">
                  Contraseña
                </label>
                <Link
                  href="/auth/forgot-password"
                  className="text-accent hover:text-accent-light font-body text-xs transition-colors duration-200"
                >
                  ¿Olvidaste tu contraseña?
                </Link>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Tu contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="glass-input w-full rounded-xl px-4 py-3 pr-12 text-text-primary font-body text-sm outline-none transition-all duration-200 placeholder:text-text-disabled"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-text-disabled hover:text-text-secondary transition-colors duration-200"
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* CTA */}
          <button
            onClick={handleLogin}
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 bg-accent hover:bg-accent-light text-white font-sans font-semibold py-3.5 rounded-xl btn-glow transition-all duration-200 disabled:opacity-60"
          >
            {loading ? (
              <span className="animate-spin w-4 h-4 border-2 border-white/30 border-t-white rounded-full" />
            ) : (
              <Zap className="w-4 h-4" fill="currentColor" />
            )}
            {loading ? "Ingresando..." : "Iniciar sesión"}
          </button>

          {/* Sign up link */}
          <p className="text-center text-text-secondary font-body text-sm">
            ¿No tienes cuenta?{" "}
            <Link
              href="/auth/register"
              className="text-accent hover:text-accent-light font-semibold transition-colors duration-200"
            >
              Regístrate gratis
            </Link>
          </p>

          {/* Security badge */}
          <div className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-glass-border bg-glass-bg">
            <Lock className="w-3.5 h-3.5 text-text-disabled" />
            <span className="text-text-disabled font-body text-xs">
              Conexión segura · SSL · Datos encriptados
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
