"use client";

import { useState } from "react";
import { currentUser, invoices } from "@/data/mock-user";
import { plans } from "@/data/plans";
import { CurrentPlanCard } from "@/components/saas/billing/current-plan-card";
import { PaymentMethod } from "@/components/saas/billing/payment-method";
import { BillingHistory } from "@/components/saas/billing/billing-history";
import { ChangePlanModal } from "@/components/saas/billing/change-plan-modal";
import { CancelModal } from "@/components/saas/billing/cancel-modal";

const CURRENT_PLAN_PRICE = 129;
const NEXT_BILLING_DATE = "2026-03-19T00:00:00Z";

export default function BillingPage() {
  const [changePlanOpen, setChangePlanOpen] = useState(false);
  const [cancelOpen, setCancelOpen] = useState(false);

  return (
    <div className="p-6 max-w-3xl mx-auto">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-white font-sans">Facturación</h1>
        <p className="text-sm text-[#9CA3AF] mt-1 font-body">
          Gestiona tu plan, método de pago e historial de facturas.
        </p>
      </div>

      <div className="flex flex-col gap-5">
        <CurrentPlanCard
          plan={currentUser.plan}
          price={CURRENT_PLAN_PRICE}
          nextBillingDate={NEXT_BILLING_DATE}
          onChangePlan={() => setChangePlanOpen(true)}
          onCancel={() => setCancelOpen(true)}
        />

        <PaymentMethod />

        <BillingHistory invoices={invoices} />
      </div>

      <ChangePlanModal
        open={changePlanOpen}
        onOpenChange={setChangePlanOpen}
        currentPlan={currentUser.plan}
        plans={plans}
      />

      <CancelModal
        open={cancelOpen}
        onOpenChange={setCancelOpen}
      />
    </div>
  );
}
