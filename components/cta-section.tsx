import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-primary via-secondary to-accent text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/10 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-float-delayed" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl" />

      <div className="container relative">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white text-sm font-semibold mb-8 shadow-xl">
            <Sparkles className="h-4 w-4 animate-pulse" />
            Oferta Especial de Lançamento
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-balance md:text-5xl lg:text-6xl mb-6 drop-shadow-lg">
            Comece Seu Teste Grátis Agora
          </h2>

          <p className="text-lg md:text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto text-pretty leading-relaxed drop-shadow">
            Junte-se a centenas de ateliês que já transformaram seus negócios com o Ateliê Pro
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button
              size="lg"
              variant="secondary"
              className="text-base px-10 h-14 gap-2 shadow-2xl hover:shadow-3xl transition-all hover:scale-105 font-semibold text-lg group"
            >
              Começar Agora - É Grátis
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-primary-foreground/90 mb-6">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5" />
              <span className="font-medium">Sem cartão de crédito</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5" />
              <span className="font-medium">Sem compromisso</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5" />
              <span className="font-medium">Resultados em 7 dias</span>
            </div>
          </div>

          <div className="flex items-center justify-center gap-8 pt-8 border-t border-white/20">
            <div className="text-center">
              <div className="text-3xl font-bold mb-1">500+</div>
              <div className="text-sm text-primary-foreground/80">Ateliês ativos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-1">4.9/5</div>
              <div className="text-sm text-primary-foreground/80">Avaliação média</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-1">98%</div>
              <div className="text-sm text-primary-foreground/80">Satisfação</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
