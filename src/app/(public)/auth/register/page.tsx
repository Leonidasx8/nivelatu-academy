"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Zap } from "lucide-react";
import { AuthBrandPanel } from "@/components/landing/auth-brand-panel";
import { StepIndicator } from "@/components/landing/step-indicator";
import { StepAccount } from "@/components/landing/register/step-account";
import { StepProfile } from "@/components/landing/register/step-profile";
import { StepPlan } from "@/components/landing/register/step-plan";

export default function RegisterPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<Record<string, string>>({});

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const goNext = () => {
    if (step === 3) {
      // Mock registration complete — navigate to dashboard
      router.push("/dashboard");
    } else {
      setStep((s) => Math.min(s + 1, 3));
    }
  };
  const goBack = () => setStep((s) => Math.max(s - 1, 1));

  return (
    <div className="min-h-[calc(100vh-72px)] grid md:grid-cols-2">
      {/* Left: Brand panel */}
      <div className="hidden md:block">
        <AuthBrandPanel variant="register" />
      </div>

      {/* Right: Form */}
      <div className="flex items-center justify-center bg-bg-primary px-6 py-12 min-h-[calc(100vh-72px)]">
        <div className="w-full max-w-[400px] flex flex-col gap-8">
          {/* Mobile logo */}
          <div className="flex md:hidden items-center gap-2 justify-center">
            <Zap className="w-5 h-5 text-accent" fill="currentColor" />
            <span className="font-sans font-bold text-base text-text-primary">
              NivelatuAcademy
            </span>
          </div>

          {/* Step indicator */}
          <div className="flex justify-center">
            <StepIndicator currentStep={step} totalSteps={3} />
          </div>

          {/* Step content */}
          {step === 1 && (
            <StepAccount
              onNext={goNext}
              formData={formData}
              onChange={handleChange}
            />
          )}
          {step === 2 && (
            <StepProfile
              onNext={goNext}
              onBack={goBack}
              formData={formData}
              onChange={handleChange}
            />
          )}
          {step === 3 && (
            <StepPlan onNext={goNext} onBack={goBack} />
          )}
        </div>
      </div>
    </div>
  );
}
