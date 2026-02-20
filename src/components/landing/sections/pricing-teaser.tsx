"use client";

import { useState } from "react";
import { plans } from "@/data/plans";
import { PlanCard } from "../plan-card";
import type { BillingCycle } from "@/types";
import { cn } from "@/lib/utils";

export function PricingTeaser() {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>("monthly");

  return (
    <section id="precios" className="py-24 bg-bg-primary">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-sans font-black text-text-primary mb-4">
            Elige tu plan
          </h2>
          <p className="text-text-secondary font-body text-lg mb-8">
            Sin contratos. Cancela cuando quieras. 14 días gratis en todos los planes.
          </p>

          {/* Billing cycle toggle */}
          <div className="inline-flex items-center gap-1 p-1 rounded-xl bg-bg-card border border-glass-border">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={cn(
                "px-5 py-2 rounded-lg text-sm font-sans font-semibold transition-all duration-200",
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
                "px-5 py-2 rounded-lg text-sm font-sans font-semibold transition-all duration-200 flex items-center gap-2",
                billingCycle === "annual"
                  ? "bg-accent text-white"
                  : "text-text-secondary hover:text-text-primary"
              )}
            >
              Anual
              <span
                className={cn(
                  "text-[10px] px-1.5 py-0.5 rounded-full font-bold",
                  billingCycle === "annual"
                    ? "bg-white/20 text-white"
                    : "bg-green-500/20 text-green-400"
                )}
              >
                -20%
              </span>
            </button>
          </div>
        </div>

        {/* Plan cards */}
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
  );
}
