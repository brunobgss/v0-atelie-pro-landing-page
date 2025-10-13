import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ProblemsSection } from "@/components/problems-section"
import { FeaturesSection } from "@/components/features-section"
import { WhatsAppFeatureSection } from "@/components/whatsapp-feature-section"
import { AgendaFeatureSection } from "@/components/agenda-feature-section"
import { AppDemoSection } from "@/components/app-demo-section"
import { UseCasesSection } from "@/components/use-cases-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { CalculatorPreviewSection } from "@/components/calculator-preview-section"
import { BenefitsSection } from "@/components/benefits-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { PricingSection } from "@/components/pricing-section"
import { FAQSection } from "@/components/faq-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ProblemsSection />
        <FeaturesSection />
        <WhatsAppFeatureSection />
        <AgendaFeatureSection />
        <AppDemoSection />
        <UseCasesSection />
        <HowItWorksSection />
        <CalculatorPreviewSection />
        <BenefitsSection />
        <TestimonialsSection />
        <PricingSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
