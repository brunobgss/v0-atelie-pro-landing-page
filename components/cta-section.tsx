import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 bg-grid-white/10 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-spin" style={{ animationDuration: "20s" }} />
      
      {/* Floating particles */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: "0.5s" }} />
      <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: "1.5s" }} />
      <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-violet-400 rounded-full animate-bounce" style={{ animationDelay: "2s" }} />

      <div className="container relative px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-semibold mb-8 shadow-2xl hover:bg-white/20 transition-all duration-300 animate-fade-in">
            <Sparkles className="h-5 w-5 animate-pulse" />
            Oferta Especial de Lançamento
          </div>

          <h2
            className="text-3xl font-bold tracking-tight text-balance md:text-5xl lg:text-6xl mb-6 drop-shadow-lg bg-gradient-to-r from-white via-purple-100 to-pink-100 bg-clip-text text-transparent animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Teste o ERP criativo referência em gestão de ateliês
          </h2>

          <p
            className="text-lg md:text-xl text-purple-100 mb-10 max-w-2xl mx-auto text-pretty leading-relaxed drop-shadow animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            Junte-se a centenas de estúdios criativos que otimizam fluxos de produção, notas fiscais e finanças com o Ateliê Pro.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <Button
              size="lg"
              asChild
              className="text-base px-12 h-16 gap-3 shadow-2xl hover:shadow-3xl transition-all hover:scale-110 font-semibold text-lg group bg-gradient-to-r from-white to-purple-50 text-purple-900 hover:from-purple-50 hover:to-white border-0"
            >
              <Link href="https://app.ateliepro.online" target="_blank" rel="noopener noreferrer">
                Começar Agora - É Grátis
                <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-purple-200 mb-8 animate-fade-in" style={{ animationDelay: "0.8s" }}>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300">
              <CheckCircle2 className="h-5 w-5 text-green-400" />
              <span className="font-medium">Sem cartão de crédito</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300">
              <CheckCircle2 className="h-5 w-5 text-green-400" />
              <span className="font-medium">Sem compromisso</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300">
              <CheckCircle2 className="h-5 w-5 text-green-400" />
              <span className="font-medium">Resultados em 7 dias</span>
            </div>
          </div>

          <div className="flex items-center justify-center gap-8 pt-8 border-t border-white/20 animate-fade-in" style={{ animationDelay: "1s" }}>
            <div className="text-center group hover:scale-110 transition-transform duration-300">
              <div className="text-4xl font-bold mb-1 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">500+</div>
              <div className="text-sm text-purple-200">Ateliês ativos</div>
            </div>
            <div className="text-center group hover:scale-110 transition-transform duration-300">
              <div className="text-4xl font-bold mb-1 bg-gradient-to-r from-white to-pink-200 bg-clip-text text-transparent">4.9/5</div>
              <div className="text-sm text-purple-200">Avaliação média</div>
            </div>
            <div className="text-center group hover:scale-110 transition-transform duration-300">
              <div className="text-4xl font-bold mb-1 bg-gradient-to-r from-white to-violet-200 bg-clip-text text-transparent">98%</div>
              <div className="text-sm text-purple-200">Satisfação</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
