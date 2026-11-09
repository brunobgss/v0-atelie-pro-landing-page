import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Sparkles, Play } from "lucide-react"
import Link from "next/link"
import { HeroVideoPlayer } from "@/components/hero-video-player"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-16 md:py-32">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-violet-500/15 to-fuchsia-500/15 rounded-full blur-3xl" />
      </div>

      <div className="container relative px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <Badge
            variant="secondary"
            className="mb-6 md:mb-6 px-6 py-3 text-xs sm:text-sm font-medium bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-400/30 text-white shadow-xl shadow-purple-500/25 hover:shadow-2xl hover:shadow-purple-500/40 transition-all duration-300 hover:scale-105"
          >
            {/* melhoria de conversão: urgência + eliminação de objeções */}
            <Sparkles className="w-4 h-4 mr-2 inline animate-pulse" />7 dias grátis • Sem cartão • Sem compromisso
          </Badge>

          <h1 className="mb-6 md:mb-6 text-2xl font-bold tracking-tight text-balance text-white sm:text-3xl md:text-5xl lg:text-6xl font-sans animate-fade-in leading-snug">
            Precificação Inteligente + Gestão de Pedidos em Um Lugar
          </h1>

          <p
            className="mb-10 md:mb-10 text-base text-pretty text-purple-100 sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Aumente lucro em até 40%, organize pedidos, envie orçamentos profissionais no WhatsApp. Teste grátis por 7 dias, sem cartão.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:gap-4 items-center justify-center mb-12 md:mb-16 animate-fade-in w-full sm:w-auto" style={{ animationDelay: "0.4s" }}>
            <Button
              size="lg"
              asChild
              className="w-full sm:w-auto text-base px-10 h-12 sm:h-14 shadow-2xl shadow-pink-500/40 hover:shadow-3xl hover:shadow-pink-500/60 hover:scale-105 transition-all duration-300 bg-pink-600 hover:bg-pink-700 text-white font-semibold border-0"
            >
              <Link
                href="https://app.ateliepro.online?source=landing-hero-primary"
                target="_blank"
                rel="noopener noreferrer"
                data-analytics="cta-hero-primary"
                aria-label="Começar teste grátis de 7 dias do Ateliê Pro"
              >
                <Sparkles className="w-5 h-5 mr-2" />
                Testar 7 Dias Grátis
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="w-full sm:w-auto text-base px-10 h-12 sm:h-14 gap-3 bg-white/10 backdrop-blur-md hover:bg-white/20 hover:shadow-2xl hover:shadow-white/20 transition-all duration-300 border-white/30 text-white"
            >
              <Link href="#demo-video" data-analytics="cta-hero-demo" aria-label="Ver demonstração em vídeo do Ateliê Pro">
                <Play className="h-5 w-5" />
                Ver demonstração
              </Link>
            </Button>
          </div>

          {/* ATELIEPRO_CHANGE: Melhoria 4 - Texto de tranquilização pós-trial (Lugar A) */}
          <p className="text-xs sm:text-sm text-purple-200/80 text-center mb-16 md:mb-20 animate-fade-in leading-relaxed px-2" style={{ animationDelay: "0.7s" }}>
            🔒 No 6º dia você recebe um e-mail de aviso que o teste está acabando. Para continuar usando, escolha um plano. Sem compromisso antes disso.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-purple-200 mb-16 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300">
              <CheckCircle2 className="h-4 w-4 text-green-400 flex-shrink-0" />
              <span>Sem instalação</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300">
              <CheckCircle2 className="h-4 w-4 text-green-400 flex-shrink-0" />
              <span>Backup automático</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300">
              <CheckCircle2 className="h-4 w-4 text-green-400 flex-shrink-0" />
              <span>Suporte especializado</span>
            </div>
          </div>
        </div>

        {/* ATELIEPRO_CHANGE: Melhoria 5 - Player de vídeo na hero section */}
        <div id="demo-video" className="mx-auto mt-12 md:mt-8 max-w-6xl animate-fade-in px-2 sm:px-0" style={{ animationDelay: "0.8s", scrollMarginTop: "80px" }}>
          <HeroVideoPlayer />
        </div>
      </div>
    </section>
  )
}
