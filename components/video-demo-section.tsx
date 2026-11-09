"use client"

import Image from "next/image"
import Link from "next/link"
import { ShieldCheck, Sparkles } from "lucide-react"

import { Button } from "@/components/ui/button"

export function VideoDemoSection() {

  return (
    <section id="demo-video" className="relative overflow-hidden bg-gradient-to-b from-white via-purple-50/40 to-white py-20">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -left-10 h-72 w-72 rounded-full bg-purple-400/15 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-pink-400/10 blur-3xl" />
      </div>

      <div className="container relative px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-purple-100/70 px-4 py-2 text-sm font-medium text-purple-700 shadow-sm shadow-purple-500/20">
              <Sparkles className="h-4 w-4" />
              Veja na prática
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl lg:text-5xl">
              Assista ao Ateliê Pro cuidando da gestão criativa do seu negócio
            </h2>

            <p className="text-lg text-slate-600 leading-relaxed">
              Descubra como a plataforma centraliza pedidos, precificação inteligente e relacionamento com clientes em uma única tela. O vídeo demonstra fluxos reais usados por ateliês que já emitem notas fiscais e automatizam entregas.
            </p>

            <ul className="space-y-3 text-sm text-slate-600">
              <li className="flex items-start gap-3">
                <ShieldCheck className="h-5 w-5 text-emerald-500 mt-0.5" aria-hidden="true" />
                <span>
                  Passo a passo da emissão de pedidos, cálculo de custos e envio de orçamentos multicanal sem perder o controle financeiro.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <ShieldCheck className="h-5 w-5 text-emerald-500 mt-0.5" aria-hidden="true" />
                <span>
                  Demonstração do novo emissor de notas fiscais integrado e sincronizado com o módulo de vendas.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <ShieldCheck className="h-5 w-5 text-emerald-500 mt-0.5" aria-hidden="true" />
                <span>Insights para melhorar a produtividade do seu time criativo com dashboards em tempo real.</span>
              </li>
            </ul>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="h-12 w-full sm:w-auto bg-gradient-to-r from-purple-600 via-purple-500 to-pink-600 text-white shadow-lg shadow-purple-500/30 hover:shadow-purple-500/40 hover:scale-105 transition-all duration-300"
              >
                <Link
                  href="https://app.ateliepro.online/cadastro"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-analytics="cta-demo-video-primary"
                >
                  Experimente agora
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-12 w-full sm:w-auto border-purple-200 text-purple-700 hover:bg-purple-50"
              >
                <Link href="#precos" data-analytics="cta-demo-video-secondary">
                  Compare planos
                </Link>
              </Button>
            </div>

            <p className="text-sm text-slate-500">
              Preferir assistir com equipe? <Link href="https://cal.com/ateliepro/demo" target="_blank" rel="noopener noreferrer" className="font-semibold text-purple-600 hover:text-purple-700">Agende uma apresentação guiada</Link>.
            </p>
          </div>

          <div className="relative">
            {/* ATELIEPRO_CHANGE: Melhoria 5 - Imagem do dashboard na seção de demonstração */}
            <div className="relative rounded-3xl border border-purple-400/30 bg-white/5 backdrop-blur-sm shadow-2xl shadow-purple-500/30 overflow-hidden hover:shadow-3xl hover:shadow-purple-500/50 transition-all duration-500 hover:scale-[1.02] group">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 group-hover:from-purple-500/20 group-hover:to-pink-500/20 transition-all duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
              <Image
                src="/dashboard-screenshot.png"
                alt="Dashboard do Ateliê Pro - Visão geral do sistema de gestão"
                width={1200}
                height={675}
                className="w-full h-auto object-cover relative z-10 group-hover:scale-105 transition-transform duration-700"
                priority={false}
                quality={90}
              />
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-500 -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


