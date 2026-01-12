import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ProblemsSection } from "@/components/problems-section"
import { FeaturesSection } from "@/components/features-section"
import { InvoiceModuleSection } from "@/components/invoice-module-section"
import { WhatsAppFeatureSection } from "@/components/whatsapp-feature-section"
import { AgendaFeatureSection } from "@/components/agenda-feature-section"
import { AppDemoSection } from "@/components/app-demo-section"
import { VideoDemoSection } from "@/components/video-demo-section"
import { UseCasesSection } from "@/components/use-cases-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { CalculatorPreviewSection } from "@/components/calculator-preview-section"
import { BenefitsSection } from "@/components/benefits-section"
import { ComparisonSection } from "@/components/comparison-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { PricingSection } from "@/components/pricing-section"
import { FAQSection } from "@/components/faq-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { WhatsAppFloatingButton } from "@/components/whatsapp-floating-button"

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <VideoDemoSection />
        <ProblemsSection />
        <FeaturesSection />
        <InvoiceModuleSection />
        <WhatsAppFeatureSection />
        <AgendaFeatureSection />
        <AppDemoSection />
        <UseCasesSection />
        <HowItWorksSection />
        <CalculatorPreviewSection />
        <BenefitsSection />
        <ComparisonSection />
        <TestimonialsSection />
        <PricingSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppFloatingButton />
    </div>
  )
}
