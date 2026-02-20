import type { Metadata } from "next";
import { inter, dmSans, jetbrainsMono } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "NivelatuAcademy — Lanza tu academia con IA",
    template: "%s | NivelatuAcademy",
  },
  description:
    "Plataforma SaaS para lanzar tu academia online en 90 días con 7 agentes de IA y metodología SOSTAC.",
  openGraph: {
    title: "NivelatuAcademy — Lanza tu academia con IA",
    description:
      "Plataforma SaaS para lanzar tu academia online en 90 días con 7 agentes de IA y metodología SOSTAC.",
    type: "website",
    locale: "es_ES",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`dark ${inter.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen bg-bg-primary text-text-body font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
