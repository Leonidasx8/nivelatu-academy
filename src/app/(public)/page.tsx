import { HeroSection } from "@/components/landing/sections/hero-section";
import { StatsBar } from "@/components/landing/sections/stats-bar";
import { AgentsSection } from "@/components/landing/sections/agents-section";
import { SOSTACSection } from "@/components/landing/sections/sostac-section";
import { HowItWorksSection } from "@/components/landing/sections/how-it-works";
import { TestimonialsSection } from "@/components/landing/sections/testimonials-section";
import { PricingTeaser } from "@/components/landing/sections/pricing-teaser";
import { FooterCTA } from "@/components/landing/sections/footer-cta";
import { SiteFooter } from "@/components/landing/sections/site-footer";

export default function LandingPage() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <AgentsSection />
      <SOSTACSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <PricingTeaser />
      <FooterCTA />
      <SiteFooter />
    </>
  );
}
