import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"
import Link from "next/link"

export function TestimonialsCTASection() {
  return (
    <section className="py-16 md:py-20 lg:py-28 bg-gradient-to-b from-background via-slate-50 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-purple-400/15 to-pink-400/15 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-pink-400/10 to-purple-400/10 rounded-full blur-3xl" />
      </div>

      <div className="container relative px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-balance text-foreground md:text-4xl lg:text-5xl mb-6 font-serif">
            Você Pode Ser O Próximo
          </h2>

          <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto text-pretty leading-relaxed mb-8">
            Mais de 500 ateliês já têm faturamento aumentado. Teste grátis por 7 dias, sem cartão de crédito.
          </p>

          <Button
            size="lg"
            asChild
            className="w-full sm:w-auto text-base px-12 h-12 sm:h-14 shadow-2xl shadow-pink-500/40 hover:shadow-3xl hover:shadow-pink-500/60 hover:scale-105 transition-all duration-300 bg-pink-600 hover:bg-pink-700 text-white font-semibold border-0"
          >
            <Link
              href="https://app.ateliepro.online?source=landing-testimonials-cta"
              target="_blank"
              rel="noopener noreferrer"
              data-analytics="cta-testimonials-primary"
              aria-label="Começar teste grátis de 7 dias do Ateliê Pro"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              Testar 7 Dias Grátis
            </Link>
          </Button>

          <p className="text-xs text-muted-foreground mt-6">
            🔒 No 6º dia você recebe um e-mail de aviso que o teste está acabando. Para continuar, escolha um plano.
          </p>
        </div>
      </div>
    </section>
  )
}
