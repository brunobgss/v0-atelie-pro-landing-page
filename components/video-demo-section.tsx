"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Play, ShieldCheck, Sparkles } from "lucide-react"

import { Button } from "@/components/ui/button"

const DEMO_VIDEO_BASE_URL = "https://www.youtube.com/embed/iQvDdFipwWs"
const DEMO_VIDEO_SHARE_URL = "https://youtu.be/iQvDdFipwWs?si=eY1Z8gJNuVLBPwN-"

export function VideoDemoSection() {
  const [isPlaying, setIsPlaying] = useState(false)

  const videoUrl = `${DEMO_VIDEO_BASE_URL}?rel=0&enablejsapi=1&playsinline=1&modestbranding=1&autoplay=${isPlaying ? "1" : "0"}&mute=${isPlaying ? "0" : "1"}`
  const posterImage = "/modern-atelier-management-dashboard-interface.jpg"

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
                  href="https://app.ateliepro.online"
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
            <div className="relative overflow-hidden rounded-3xl border border-purple-200/60 bg-slate-950/90 shadow-2xl">
              {!isPlaying && (
                <button
                  type="button"
                  onClick={() => setIsPlaying(true)}
                  className="group relative block w-full focus-visible:outline-none"
                  aria-label="Assistir à demonstração do Ateliê Pro"
                >
                  <div className="relative aspect-video">
                    <Image
                      src={posterImage}
                      alt="Prévia do vídeo de demonstração do Ateliê Pro"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 640px"
                      priority={false}
                    />
                    <div className="absolute inset-0 bg-slate-900/40" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-purple-600 shadow-xl transition-transform duration-300 group-hover:scale-110">
                        <Play className="h-7 w-7" aria-hidden="true" />
                      </span>
                    </div>
                  </div>
                </button>
              )}

              {isPlaying && (
                <iframe
                  className="aspect-video h-full w-full"
                  src={videoUrl}
                  title="Demonstração do Ateliê Pro"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              )}
            </div>

            <div className="mt-4 rounded-2xl bg-white/80 p-4 shadow-lg shadow-purple-500/10 backdrop-blur">
              <p className="text-sm text-slate-600">
                Para navegadores que não suportam o player incorporado, <Link href={DEMO_VIDEO_SHARE_URL} className="font-semibold text-purple-600 hover:text-purple-700" target="_blank" rel="noopener noreferrer">abra a demonstração em uma nova aba</Link>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


