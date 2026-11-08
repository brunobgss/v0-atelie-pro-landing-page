import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Sparkles, Play } from "lucide-react"
import Link from "next/link"
import { HeroVideoPlayer } from "@/components/hero-video-player"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 md:py-32">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-purple-500/40 to-pink-500/40 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 left-10 w-[500px] h-[500px] bg-gradient-to-br from-violet-500/30 to-fuchsia-500/30 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-spin" style={{ animationDuration: "20s" }} />
        
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: "0.5s" }} />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: "1.5s" }} />
        <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-violet-400 rounded-full animate-bounce" style={{ animationDelay: "2s" }} />
        
        {/* Grid pattern overlay */}
        <div className='absolute inset-0 bg-[url("data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%239C92AC%22 fill-opacity=%220.05%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")] opacity-30' />
      </div>

      <div className="container relative px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <Badge
            variant="secondary"
            className="mb-6 px-6 py-3 text-sm font-medium bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-400/30 text-white shadow-xl shadow-purple-500/25 hover:shadow-2xl hover:shadow-purple-500/40 transition-all duration-300 hover:scale-105"
          >
            {/* melhoria de conversão: urgência + eliminação de objeções */}
            <Sparkles className="w-4 h-4 mr-2 inline animate-pulse" />7 dias grátis • Sem cartão • Sem compromisso
          </Badge>

          <h1 className="mb-6 text-4xl font-bold tracking-tight text-balance text-white md:text-5xl lg:text-6xl font-sans animate-fade-in">
            Precificação Inteligente + Gestão de Pedidos em Um Lugar
          </h1>

          <p
            className="mb-10 text-lg text-pretty text-purple-100 md:text-xl max-w-3xl mx-auto leading-relaxed animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Aumente lucro em até 40%, organize pedidos, envie orçamentos profissionais no WhatsApp. Teste grátis por 7 dias, sem cartão.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button
              size="lg"
              asChild
              className="text-base px-10 h-14 shadow-2xl shadow-pink-500/40 hover:shadow-3xl hover:shadow-pink-500/60 hover:scale-105 transition-all duration-300 bg-pink-600 hover:bg-pink-700 text-white font-semibold border-0"
            >
              <Link
                href="https://app.ateliepro.online"
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
              className="text-base px-10 h-14 gap-3 bg-white/10 backdrop-blur-md hover:bg-white/20 hover:shadow-2xl hover:shadow-white/20 transition-all duration-300 border-white/30 text-white hover:scale-105"
            >
              <Link href="#demo-video" data-analytics="cta-hero-demo" aria-label="Ver demonstração em vídeo do Ateliê Pro">
                <Play className="h-5 w-5" />
                Ver demonstração
              </Link>
            </Button>
          </div>

          {/* ATELIEPRO_CHANGE: Melhoria 4 - Texto de tranquilização pós-trial (Lugar A) */}
          <p className="text-xs text-purple-200/80 text-center mb-16 animate-fade-in" style={{ animationDelay: "0.7s" }}>
            🔒 No 6º dia você recebe um e-mail de aviso. Se não quiser continuar, cancele com 1 clique — sem pegadinhas, sem cobrança automática surpresa.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-purple-200 mb-16 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300">
              <CheckCircle2 className="h-4 w-4 text-green-400" />
              <span>Sem instalação</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300">
              <CheckCircle2 className="h-4 w-4 text-green-400" />
              <span>Backup automático</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300">
              <CheckCircle2 className="h-4 w-4 text-green-400" />
              <span>Suporte especializado</span>
            </div>
          </div>
        </div>

        {/* ATELIEPRO_CHANGE: Melhoria 5 - Player de vídeo na hero section */}
        <div className="mx-auto mt-8 max-w-6xl animate-fade-in" style={{ animationDelay: "0.8s" }}>
          <HeroVideoPlayer />
        </div>
      </div>
    </section>
  )
}
