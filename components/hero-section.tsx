import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play, CheckCircle2, Sparkles } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-pink-50 py-20 md:py-32">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-20 left-10 w-[500px] h-[500px] bg-gradient-to-br from-violet-400/20 to-fuchsia-400/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-purple-300/10 to-pink-300/10 rounded-full blur-3xl" />
      </div>

      <div className="container relative">
        <div className="mx-auto max-w-5xl text-center">
          <Badge
            variant="secondary"
            className="mb-6 px-4 py-2 text-sm font-medium shadow-lg shadow-purple-200/50 border border-purple-200/50"
          >
            <Sparkles className="w-3 h-3 mr-1 inline" />7 dias grátis • Sem cartão • Sem compromisso
          </Badge>

          <h1 className="mb-6 text-4xl font-bold tracking-tight text-balance text-foreground md:text-6xl lg:text-7xl font-serif">
            Gerencie Seu Ateliê Como um Profissional
          </h1>

          <p className="mb-10 text-lg text-pretty text-muted-foreground md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed">
            Sistema completo de gestão para ateliês, confecções e bordados. Calculadora de preços, controle de pedidos,
            integração WhatsApp e muito mais.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Button
              size="lg"
              className="text-base px-8 h-12 shadow-xl shadow-purple-500/30 hover:shadow-2xl hover:shadow-purple-500/40 hover:scale-105 transition-all duration-300 bg-gradient-to-r from-purple-600 to-pink-600"
            >
              Começar Teste Grátis — 7 Dias
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base px-8 h-12 gap-2 bg-white/80 backdrop-blur-sm hover:bg-white hover:shadow-lg transition-all duration-300"
            >
              <Play className="h-4 w-4" />
              Ver Demonstração
            </Button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground mb-16">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              <span>Sem instalação</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              <span>Backup automático</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              <span>Suporte especializado</span>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-6xl">
          <div className="relative rounded-2xl border-2 border-purple-200/50 bg-white shadow-2xl shadow-purple-500/20 overflow-hidden hover:shadow-3xl hover:shadow-purple-500/30 transition-all duration-500 hover:scale-[1.02]">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5" />
            <img
              src="/dashboard-screenshot.png"
              alt="Ateliê Pro Dashboard - Interface de gestão moderna"
              className="w-full h-full object-cover relative z-10"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
