"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const NAV_LINKS = [
  { label: "Agentes", href: "/#agentes" },
  { label: "SOSTAC", href: "/#sostac" },
  { label: "Precios", href: "/pricing" },
];

interface PublicLayoutProps {
  children: React.ReactNode;
}

export function PublicLayout({ children }: PublicLayoutProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-bg-primary">
      {/* Navbar */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 h-[72px] flex items-center transition-all duration-300",
          scrolled
            ? "bg-bg-deep/80 backdrop-blur-xl border-b border-glass-border shadow-[0_4px_24px_rgba(0,0,0,0.4)]"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto w-full px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Zap
              className="w-5 h-5 text-accent transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(255,107,0,0.8)]"
              fill="currentColor"
            />
            <span className="font-sans font-bold text-base text-text-primary tracking-tight">
              NivelatuAcademy
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-text-secondary hover:text-text-primary transition-colors duration-200 font-body"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              asChild
              variant="outline"
              size="sm"
              className="border-glass-border bg-transparent text-text-secondary hover:text-text-primary hover:bg-glass-bg-hover hover:border-glass-border-hover transition-all duration-200"
            >
              <Link href="/auth/login">Iniciar sesión</Link>
            </Button>
            <Button
              asChild
              size="sm"
              className="bg-accent hover:bg-accent-light text-white font-semibold btn-glow transition-all duration-200"
            >
              <Link href="/auth/register">
                Empieza gratis <span aria-hidden="true">→</span>
              </Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <button
                  aria-label="Abrir menú"
                  className="p-2 rounded-md text-text-secondary hover:text-text-primary hover:bg-glass-bg-hover transition-colors duration-200"
                >
                  {mobileOpen ? (
                    <X className="w-5 h-5" />
                  ) : (
                    <Menu className="w-5 h-5" />
                  )}
                </button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-72 bg-bg-deep border-l border-glass-border p-0"
              >
                <div className="flex flex-col h-full">
                  {/* Sheet Header */}
                  <div className="flex items-center gap-2 px-6 py-5 border-b border-glass-border">
                    <Zap className="w-5 h-5 text-accent" fill="currentColor" />
                    <span className="font-sans font-bold text-base text-text-primary">
                      NivelatuAcademy
                    </span>
                  </div>

                  {/* Sheet Nav */}
                  <nav className="flex flex-col gap-1 px-4 py-4">
                    {NAV_LINKS.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className="px-4 py-3 rounded-[10px] text-sm text-text-secondary hover:text-text-primary hover:bg-glass-bg-hover transition-all duration-200 font-body"
                      >
                        {link.label}
                      </a>
                    ))}
                  </nav>

                  {/* Sheet CTAs */}
                  <div className="mt-auto px-4 pb-6 flex flex-col gap-3">
                    <Button
                      asChild
                      variant="outline"
                      className="w-full border-glass-border bg-transparent text-text-secondary hover:text-text-primary hover:bg-glass-bg-hover"
                    >
                      <Link href="/auth/login" onClick={() => setMobileOpen(false)}>
                        Iniciar sesión
                      </Link>
                    </Button>
                    <Button
                      asChild
                      className="w-full bg-accent hover:bg-accent-light text-white font-semibold btn-glow"
                    >
                      <Link href="/auth/register" onClick={() => setMobileOpen(false)}>
                        Empieza gratis →
                      </Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Page content — top padding accounts for fixed navbar */}
      <main className="pt-[72px]">{children}</main>
    </div>
  );
}
