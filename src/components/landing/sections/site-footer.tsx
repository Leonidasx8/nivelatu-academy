import Link from "next/link";
import { Zap, Github, Twitter, Linkedin } from "lucide-react";

const FOOTER_LINKS = {
  Producto: [
    { label: "Características", href: "#agentes" },
    { label: "Precios", href: "#precios" },
    { label: "Metodología SOSTAC", href: "#sostac" },
    { label: "Integraciones", href: "#" },
  ],
  Recursos: [
    { label: "Documentación", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Casos de éxito", href: "#" },
    { label: "Comunidad", href: "#" },
  ],
  Soporte: [
    { label: "Centro de ayuda", href: "#" },
    { label: "Contacto", href: "#" },
    { label: "Estado del sistema", href: "#" },
    { label: "Reportar problema", href: "#" },
  ],
  Legal: [
    { label: "Privacidad", href: "#" },
    { label: "Términos de uso", href: "#" },
    { label: "Cookies", href: "#" },
    { label: "GDPR", href: "#" },
  ],
};

export function SiteFooter() {
  return (
    <footer className="bg-bg-deep border-t border-glass-border">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 group mb-4">
              <Zap
                className="w-5 h-5 text-accent transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(255,107,0,0.8)]"
                fill="currentColor"
              />
              <span className="font-sans font-bold text-base text-text-primary">
                NivelatuAcademy
              </span>
            </Link>
            <p className="text-text-secondary font-body text-sm leading-relaxed">
              La plataforma de planificación estratégica con IA para lanzar academias
              online exitosas.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-text-primary font-sans font-semibold text-sm mb-4">
                {category}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-text-secondary hover:text-text-primary font-body text-sm transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-glass-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-text-disabled font-body text-sm">
            © 2026 NivelatuAcademy. Todos los derechos reservados.
          </p>
          {/* Social icons */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-text-disabled hover:text-text-secondary transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-text-disabled hover:text-text-secondary transition-colors duration-200"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-text-disabled hover:text-text-secondary transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
