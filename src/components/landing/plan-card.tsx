import { Check, Zap } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { Plan, BillingCycle } from "@/types";

interface PlanCardProps {
  plan: Plan;
  featured?: boolean;
  billingCycle: BillingCycle;
}

export function PlanCard({ plan, featured = false, billingCycle }: PlanCardProps) {
  const isEnterprise = plan.id === "enterprise";
  const displayPrice = billingCycle === "annual" && !isEnterprise
    ? Math.round(plan.annualPrice / 12)
    : plan.price;

  return (
    <div
      className={cn(
        "relative flex flex-col rounded-xl transition-all duration-200",
        featured
          ? "glass-card-strong border-accent"
          : "glass-card",
        featured && "shadow-[0_0_40px_rgba(255,107,0,0.15)]"
      )}
      style={featured ? { border: "1px solid rgba(255,107,0,0.5)" } : undefined}
    >
      {/* Featured badge */}
      {featured && plan.badge && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span className="inline-flex items-center gap-1 px-4 py-1 rounded-full text-xs font-sans font-bold bg-accent text-white whitespace-nowrap">
            {plan.badge}
          </span>
        </div>
      )}

      <div className="p-6 flex flex-col gap-5 flex-1">
        {/* Plan name */}
        <div>
          <h3 className="text-text-primary font-sans font-bold text-xl">
            {plan.name}
          </h3>
          <p className="text-text-secondary font-body text-sm mt-1">
            {plan.description}
          </p>
        </div>

        {/* Price */}
        <div className="flex items-end gap-2">
          {isEnterprise ? (
            <span className="text-4xl font-sans font-black text-text-primary">
              Personalizado
            </span>
          ) : (
            <>
              <span className="text-4xl font-sans font-black text-text-primary">
                ${displayPrice}
              </span>
              <span className="text-text-secondary font-body text-sm mb-1.5">
                /mes
              </span>
            </>
          )}
        </div>

        {/* Annual price note */}
        {!isEnterprise && billingCycle === "monthly" && (
          <p className="text-text-disabled font-body text-xs -mt-3">
            O{" "}
            <span className="line-through">
              ${plan.price * 12}/año
            </span>{" "}
            <span className="text-green-400 font-semibold">
              ${plan.annualPrice}/año — ahorra 20%
            </span>
          </p>
        )}
        {!isEnterprise && billingCycle === "annual" && (
          <p className="text-green-400 font-body text-xs font-semibold -mt-3">
            ${plan.annualPrice}/año — ahorras $
            {plan.price * 12 - plan.annualPrice}
          </p>
        )}

        {/* Features */}
        <ul className="flex flex-col gap-2.5">
          {plan.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2.5">
              <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
              <span className="text-text-body font-body text-sm">{feature}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          href={isEnterprise ? "#" : "/auth/register"}
          className={cn(
            "mt-auto flex items-center justify-center gap-2 rounded-lg py-3 px-5 text-sm font-sans font-semibold transition-all duration-200",
            featured
              ? "bg-accent hover:bg-accent-light text-white btn-glow"
              : "border border-glass-border-hover text-text-primary hover:bg-glass-bg-hover hover:border-glass-border"
          )}
        >
          <Zap className="w-4 h-4" />
          {plan.cta}
        </Link>
      </div>
    </div>
  );
}
