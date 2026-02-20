"use client";

import { useState } from "react";
import { Check, Minus, Zap } from "lucide-react";
import { plans, planFeatures } from "@/data/plans";
import { faqs } from "@/data/faqs";
import { PlanCard } from "@/components/landing/plan-card";
import { FAQItem } from "@/components/landing/faq-item";
import { FooterCTA } from "@/components/landing/sections/footer-cta";
import { SiteFooter } from "@/components/landing/sections/site-footer";
import { Accordion } from "@/components/ui/accordion";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { BillingCycle } from "@/types";
import { cn } from "@/lib/utils";

function FeatureValue({ value }: { value: boolean | string }) {
  if (value === true) {
    return <Check className="w-4 h-4 text-green-400 mx-auto" />;
  }
  if (value === false) {
    return <Minus className="w-4 h-4 text-text-disabled mx-auto" />;
  }
  return (
    <span className="text-text-body font-body text-sm text-center block">{value}</span>
  );
}

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>("monthly");

  // Group features by category
  const categories = Array.from(new Set(planFeatures.map((f) => f.category)));

  return (
    <>
      {/* Header section */}
      <section className="py-24 bg-bg-deep relative overflow-hidden">
        {/* Radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% 30%, rgba(255,107,0,0.08) 0%, transparent 65%)",
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-sans font-black text-text-primary mb-4">
            Planes que crecen{" "}
            <span
              className="text-accent"
              style={{ textShadow: "0 0 30px rgba(255,107,0,0.3)" }}
            >
              contigo
            </span>
          </h1>
          <p className="text-text-secondary font-body text-lg mb-10 max-w-xl mx-auto">
            Sin contratos. Sin sorpresas. 14 días gratis en todos los planes.
            Cancela cuando quieras.
          </p>

          {/* Billing toggle */}
          <div className="inline-flex items-center gap-1 p-1 rounded-xl bg-bg-card border border-glass-border">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={cn(
                "px-6 py-2.5 rounded-lg text-sm font-sans font-semibold transition-all duration-200",
                billingCycle === "monthly"
                  ? "bg-accent text-white"
                  : "text-text-secondary hover:text-text-primary"
              )}
            >
              Mensual
            </button>
            <button
              onClick={() => setBillingCycle("annual")}
              className={cn(
                "px-6 py-2.5 rounded-lg text-sm font-sans font-semibold transition-all duration-200 flex items-center gap-2",
                billingCycle === "annual"
                  ? "bg-accent text-white"
                  : "text-text-secondary hover:text-text-primary"
              )}
            >
              Anual
              <span
                className={cn(
                  "text-[10px] px-2 py-0.5 rounded-full font-bold",
                  billingCycle === "annual"
                    ? "bg-white/20 text-white"
                    : "bg-green-500/20 text-green-400"
                )}
              >
                Ahorra 20%
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Plan cards */}
      <section className="py-12 bg-bg-primary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6 items-start">
            {plans.map((plan) => (
              <PlanCard
                key={plan.id}
                plan={plan}
                featured={plan.featured}
                billingCycle={billingCycle}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Feature comparison table */}
      <section className="py-20 bg-bg-deep">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-sans font-black text-text-primary mb-3">
              Comparación completa de características
            </h2>
            <p className="text-text-secondary font-body">
              Todo lo que necesitas saber sobre cada plan
            </p>
          </div>

          <div className="glass-card rounded-2xl overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="border-b border-glass-border hover:bg-transparent">
                  <TableHead className="text-text-secondary font-body text-sm py-4 pl-6 w-[40%]">
                    Característica
                  </TableHead>
                  <TableHead className="text-center text-text-primary font-sans font-bold text-sm py-4">
                    Starter
                  </TableHead>
                  <TableHead className="text-center py-4">
                    <div className="flex flex-col items-center gap-1">
                      <span className="text-accent font-sans font-bold text-sm">Pro</span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-accent/20 text-accent font-bold">
                        POPULAR
                      </span>
                    </div>
                  </TableHead>
                  <TableHead className="text-center text-text-primary font-sans font-bold text-sm py-4 pr-6">
                    Enterprise
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {categories.map((category) => {
                  const categoryFeatures = planFeatures.filter(
                    (f) => f.category === category
                  );
                  return (
                    <>
                      {/* Category row */}
                      <TableRow
                        key={`cat-${category}`}
                        className="border-b border-glass-border bg-glass-bg hover:bg-transparent"
                      >
                        <TableCell
                          colSpan={4}
                          className="py-3 pl-6 text-accent font-sans font-bold text-xs uppercase tracking-wider"
                        >
                          {category}
                        </TableCell>
                      </TableRow>

                      {/* Feature rows */}
                      {categoryFeatures.map((feature, idx) => (
                        <TableRow
                          key={feature.feature}
                          className={cn(
                            "border-b border-glass-border/50 hover:bg-glass-bg-hover transition-colors duration-150",
                            idx === categoryFeatures.length - 1 &&
                              "border-b-glass-border"
                          )}
                        >
                          <TableCell className="py-3.5 pl-6 text-text-body font-body text-sm">
                            {feature.feature}
                          </TableCell>
                          <TableCell className="py-3.5 text-center">
                            <FeatureValue value={feature.starter} />
                          </TableCell>
                          <TableCell className="py-3.5 text-center bg-accent/5">
                            <FeatureValue value={feature.pro} />
                          </TableCell>
                          <TableCell className="py-3.5 text-center pr-6">
                            <FeatureValue value={feature.enterprise} />
                          </TableCell>
                        </TableRow>
                      ))}
                    </>
                  );
                })}
              </TableBody>
            </Table>
          </div>
        </div>
      </section>

      {/* FAQ section */}
      <section className="py-20 bg-bg-primary">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-sans font-black text-text-primary mb-3">
              Preguntas frecuentes
            </h2>
            <p className="text-text-secondary font-body">
              Todo lo que necesitas saber antes de empezar
            </p>
          </div>

          <div className="glass-card rounded-2xl px-6">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq) => (
                <FAQItem key={faq.id} faq={faq} />
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Footer CTA and site footer */}
      <FooterCTA />
      <SiteFooter />
    </>
  );
}
