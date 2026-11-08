"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, X, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import { useUrgencyCountdown } from "@/hooks/useUrgencyCountdown"

type BillingCycle = "monthly" | "quarterly" | "annual"

type PlanBadgeTone = "highlight" | "outline" | "subtle"

type PlanBadge = {
  label: string
  tone: PlanBadgeTone
}

type PlanBilling = {
  price: string
  originalPrice?: string
  period: string
  note: string
  ctaLabel: string
  ctaHref: string
  analyticsId: string
  guarantee?: string
  badge?: PlanBadge
}

type PlanFeature = {
  text: string
  included: boolean
}

type Plan = {
  id: string
  name: string
  description: string
  features: PlanFeature[]
  nfLimit: number
  billing: Record<BillingCycle, PlanBilling>
  recommended?: boolean
  type: "trial" | "basic" | "professional"
}

const plans: Plan[] = [
  {
    id: "trial",
    name: "Trial",
    description: "Teste grátis por 7 dias com acesso a todas as funcionalidades básicas",
    type: "trial",
    nfLimit: 0,
    features: [
      { text: "Gestão completa de pedidos", included: true },
      { text: "Calculadora de preços profissional", included: true },
      { text: "Catálogo de produtos", included: true },
      { text: "Relatórios financeiros", included: true },
      { text: "Integração WhatsApp", included: true },
      { text: "Backup automático", included: true },
      { text: "Emissão de notas fiscais", included: false },
    ],
    billing: {
      monthly: {
        price: "Grátis",
        period: "7 dias",
        note: "Sem cartão de crédito. Renovação automática ao fim dos 7 dias.",
        ctaLabel: "Começar teste grátis",
        ctaHref: "https://app.ateliepro.online?source=landing-pricing-trial",
        analyticsId: "pricing-trial",
        badge: { label: "Comece agora", tone: "subtle" },
      },
      quarterly: {
        price: "Grátis",
        period: "7 dias",
        note: "Sem cartão de crédito. Renovação automática ao fim dos 7 dias.",
        ctaLabel: "Começar teste grátis",
        ctaHref: "https://app.ateliepro.online?source=landing-pricing-trial",
        analyticsId: "pricing-trial",
        badge: { label: "Comece agora", tone: "subtle" },
      },
      annual: {
        price: "Grátis",
        period: "7 dias",
        note: "Sem cartão de crédito. Renovação automática ao fim dos 7 dias.",
        ctaLabel: "Começar teste grátis",
        ctaHref: "https://app.ateliepro.online?source=landing-pricing-trial",
        analyticsId: "pricing-trial",
        badge: { label: "Comece agora", tone: "subtle" },
      },
    },
  },
  {
    id: "basic-monthly",
    name: "Básico Mensal",
    description: "Para ateliês iniciantes que estão profissionalizando a gestão",
    type: "basic",
    nfLimit: 0,
    features: [
      { text: "Gestão completa de pedidos", included: true },
      { text: "Calculadora de preços profissional", included: true },
      { text: "Catálogo de produtos completo", included: true },
      { text: "Relatórios financeiros", included: true },
      { text: "Integração WhatsApp", included: true },
      { text: "Suporte por email", included: true },
      { text: "Backup automático", included: true },
      { text: "Emissão de notas fiscais", included: false },
    ],
    billing: {
      monthly: {
        price: "R$ 39,00",
        period: "/mês",
        note: "Cobrança recorrente. Cancelamento simples, sem multas.",
        ctaLabel: "Assinar plano",
        ctaHref: "https://app.ateliepro.online?source=landing-pricing-basico-mensal",
        analyticsId: "pricing-basico-mensal",
        guarantee: "7 dias grátis para testar",
      },
      quarterly: {
        price: "R$ 79,90",
        period: "/trimestre",
        note: "Equivalente a R$ 26,63/mês. Economiza R$ 20.",
        ctaLabel: "Garantir promoção",
        ctaHref: "https://app.ateliepro.online?source=landing-pricing-basico-quarterly",
        analyticsId: "pricing-basico-quarterly",
        badge: { label: "🎁 Pague 2, use 3", tone: "highlight" },
      },
      annual: {
        price: "R$ 390,00",
        period: "/ano",
        note: "Equivalente a R$ 32,50/mês. Economiza R$ 78.",
        ctaLabel: "Escolher plano",
        ctaHref: "https://app.ateliepro.online?source=landing-pricing-basico-annual",
        analyticsId: "pricing-basico-annual",
        badge: { label: "💰 2 meses grátis", tone: "highlight" },
      },
    },
  },
  {
    id: "professional-monthly",
    name: "Profissional Mensal",
    description: "Com emissor de notas fiscais integrado. O mais popular.",
    type: "professional",
    nfLimit: 100,
    recommended: true,
    features: [
      { text: "Tudo do Plano Básico", included: true },
      { text: "Emissão de notas fiscais (até 100/mês)", included: true },
      { text: "Integração FocusNFe", included: true },
      { text: "1 CNPJ", included: true },
      { text: "Suporte prioritário", included: true },
      { text: "Backup premium", included: true },
      { text: "Alertas de uso avançados", included: true },
      { text: "Recursos premium inclusos", included: true },
    ],
    billing: {
      monthly: {
        price: "R$ 99,90",
        period: "/mês",
        note: "Até 100 notas fiscais/mês com onboarding guiado.",
        ctaLabel: "Escolher plano",
        ctaHref: "https://app.ateliepro.online?source=landing-pricing-prof-mensal",
        analyticsId: "pricing-prof-mensal",
        badge: { label: "⭐ Mais popular", tone: "highlight" },
      },
      quarterly: {
        price: "R$ 280,00",
        period: "/trimestre",
        note: "Equivalente a R$ 93,33/mês. Economiza R$ 19,70.",
        ctaLabel: "Escolher plano",
        ctaHref: "https://app.ateliepro.online?source=landing-pricing-prof-quarterly",
        analyticsId: "pricing-prof-quarterly",
        badge: { label: "💼 Upgrade com desconto", tone: "highlight" },
      },
      annual: {
        price: "R$ 999,90",
        period: "/ano",
        note: "Equivalente a R$ 83,32/mês. Economiza R$ 199,90.",
        ctaLabel: "Escolher plano",
        ctaHref: "https://app.ateliepro.online?source=landing-pricing-prof-annual",
        analyticsId: "pricing-prof-annual",
        badge: { label: "💰 2 meses grátis", tone: "highlight" },
      },
    },
  },
  {
    id: "professional-plus",
    name: "Profissional Plus",
    description: "Para ateliés com maior volume de notas fiscais",
    type: "professional",
    nfLimit: 300,
    features: [
      { text: "Tudo do Profissional Mensal", included: true },
      { text: "Emissão de notas fiscais (até 300/mês)", included: true },
      { text: "Alertas de uso avançados", included: true },
      { text: "Prioridade maior no suporte", included: true },
      { text: "1 CNPJ", included: true },
      { text: "Integração completa FocusNFe", included: true },
      { text: "Backup premium", included: true },
      { text: "Recursos premium avançados", included: true },
    ],
    billing: {
      monthly: {
        price: "R$ 189,90",
        period: "/mês",
        note: "Até 300 notas fiscais/mês. Até 5 operadores.",
        ctaLabel: "Escolher plano",
        ctaHref: "https://app.ateliepro.online?source=landing-pricing-prof-plus",
        analyticsId: "pricing-prof-plus",
      },
      quarterly: {
        price: "R$ 189,90",
        period: "/mês",
        note: "Disponível em ciclo mensal.",
        ctaLabel: "Escolher plano",
        ctaHref: "https://app.ateliepro.online?source=landing-pricing-prof-plus",
        analyticsId: "pricing-prof-plus",
      },
      annual: {
        price: "R$ 189,90",
        period: "/mês",
        note: "Disponível em ciclo mensal.",
        ctaLabel: "Escolher plano",
        ctaHref: "https://app.ateliepro.online?source=landing-pricing-prof-plus",
        analyticsId: "pricing-prof-plus",
      },
    },
  },
  {
    id: "professional-enterprise",
    name: "Profissional Enterprise",
    description: "Para ateliés de alto volume com até 1.000 notas/mês",
    type: "professional",
    nfLimit: 1000,
    features: [
      { text: "Tudo do Profissional Plus", included: true },
      { text: "Emissão de notas fiscais (até 1.000/mês)", included: true },
      { text: "Suporte muito próximo", included: true },
      { text: "Preparado para alto volume", included: true },
      { text: "1 CNPJ", included: true },
      { text: "Foco em crescimento e estabilidade", included: true },
      { text: "Integração premium FocusNFe", included: true },
      { text: "Backup premium com restore prioritário", included: true },
    ],
    billing: {
      monthly: {
        price: "R$ 389,90",
        period: "/mês",
        note: "Até 1.000 notas/mês. Até 5 operadores. Alto volume.",
        ctaLabel: "Escolher plano",
        ctaHref: "https://app.ateliepro.online?source=landing-pricing-prof-enterprise",
        analyticsId: "pricing-prof-enterprise",
      },
      quarterly: {
        price: "R$ 389,90",
        period: "/mês",
        note: "Disponível em ciclo mensal.",
        ctaLabel: "Escolher plano",
        ctaHref: "https://app.ateliepro.online?source=landing-pricing-prof-enterprise",
        analyticsId: "pricing-prof-enterprise",
      },
      annual: {
        price: "R$ 389,90",
        period: "/mês",
        note: "Disponível em ciclo mensal.",
        ctaLabel: "Escolher plano",
        ctaHref: "https://app.ateliepro.online?source=landing-pricing-prof-enterprise",
        analyticsId: "pricing-prof-enterprise",
      },
    },
  },
]

export function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>("monthly")
  const [carouselIndex, setCarouselIndex] = useState(0)
  const countdown = useUrgencyCountdown()

  const handlePrevious = () => {
    setCarouselIndex((prev) => Math.max(0, prev - 1))
  }

  const handleNext = () => {
    setCarouselIndex((prev) => Math.min(Math.max(0, plans.length - 3), prev + 1))
  }

  return (
    <section id="precos" className="py-20 md:py-28 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-emerald-400/10 to-blue-400/10 rounded-full blur-3xl" />
      </div>

      <div className="container relative px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          {/* ancoragem de preço estratégica - REFORÇADA */}
          <div className="mb-12 p-8 rounded-2xl bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-200/50 shadow-lg">
            <p className="text-center text-red-900 font-semibold text-lg mb-3">
              ⚠️ <strong>Um único pedido cobrado errado = meses inteiros de mensalidade perdida</strong>
            </p>
            <p className="text-center text-red-800 text-sm">
              Se você cobra no achismo, está deixando 15-30% do seu lucro ir embora. Silenciosamente. Agora mesmo.
            </p>
          </div>

          <div className="text-center mb-16 animate-fade-in">
            <Badge variant="outline" className="mb-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border-purple-300/50 text-purple-700">
              {/* foco em valor e escolha */}
              Sem Surpresas • Escolha Seu Ritmo
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight text-balance text-slate-900 md:text-4xl lg:text-5xl mb-4 font-serif bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 bg-clip-text text-transparent">
              {/* foco em transformação */}
              Planos Que Cabem No Seu Bolso. E No Seu Crescimento.
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto text-pretty leading-relaxed">
              {/* linguagem simples e confiança */}
              Comece grátis, cresça do seu jeito. Sem fidelidade, sem multa. Você quer sair? Saí. Você quer ficar? Agora está ganhando mais dinheiro.
            </p>
          </div>

          <div className="mx-auto mb-12 flex w-full max-w-2xl items-center justify-center gap-2 rounded-full bg-white/80 p-1 shadow-inner">
            {(["monthly", "quarterly", "annual"] as const).map((cycle) => {
              const isActive = billingCycle === cycle
              return (
                <button
                  key={cycle}
                  type="button"
                  onClick={() => setBillingCycle(cycle)}
                  aria-pressed={isActive}
                  className={`flex-1 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? "bg-pink-600 text-white shadow-lg shadow-pink-500/30"
                      : "text-slate-600 hover:text-pink-600"
                  }`}
                >
                  {cycle === "monthly" ? "Mensal" : cycle === "quarterly" ? "Trimestral" : "Anual"}
                </button>
              )
            })}
          </div>

          {/* ATELIEPRO_CHANGE: Melhoria 2 - Banner de urgência com contador para plano anual */}
          {billingCycle === "annual" && !countdown.isExpired && (
            <div className="mb-12 rounded-lg bg-gradient-to-r from-amber-50 to-yellow-50 border-2 border-amber-300/60 p-8 text-center shadow-md animate-pulse-subtle">
              <p className="text-lg font-semibold text-amber-900 mb-4">
                🔥 Oferta por tempo limitado — Plano Anual com desconto especial
              </p>
              <p className="text-sm text-amber-800 mb-4">Essa condição expira em:</p>
              <div className="flex gap-3 justify-center items-center mb-6">
                <div className="flex flex-col items-center gap-1">
                  <div className="bg-white border-2 border-amber-300 rounded px-3 py-2 min-w-12 font-mono font-bold text-lg text-slate-900">
                    {String(countdown.days).padStart(2, "0")}
                  </div>
                  <span className="text-xs font-medium text-amber-700">dias</span>
                </div>
                <span className="text-2xl font-bold text-amber-900">:</span>
                <div className="flex flex-col items-center gap-1">
                  <div className="bg-white border-2 border-amber-300 rounded px-3 py-2 min-w-12 font-mono font-bold text-lg text-slate-900">
                    {String(countdown.hours).padStart(2, "0")}
                  </div>
                  <span className="text-xs font-medium text-amber-700">horas</span>
                </div>
                <span className="text-2xl font-bold text-amber-900">:</span>
                <div className="flex flex-col items-center gap-1">
                  <div className="bg-white border-2 border-amber-300 rounded px-3 py-2 min-w-12 font-mono font-bold text-lg text-slate-900">
                    {String(countdown.minutes).padStart(2, "0")}
                  </div>
                  <span className="text-xs font-medium text-amber-700">minutos</span>
                </div>
                <span className="text-2xl font-bold text-amber-900">:</span>
                <div className="flex flex-col items-center gap-1">
                  <div className="bg-white border-2 border-amber-300 rounded px-3 py-2 min-w-12 font-mono font-bold text-lg text-slate-900">
                    {String(countdown.seconds).padStart(2, "0")}
                  </div>
                  <span className="text-xs font-medium text-amber-700">segundos</span>
                </div>
              </div>
              <p className="text-sm font-medium text-amber-900">Garanta agora antes que o preço volte ao normal.</p>
            </div>
          )}

          {/* ATELIEPRO_CHANGE: Melhoria 2 - Mensagem de oferta encerrada */}
          {billingCycle === "annual" && countdown.isExpired && (
            <div className="mb-12 rounded-lg bg-gradient-to-r from-slate-100 to-slate-50 border-2 border-slate-300 p-8 text-center shadow-md">
              <p className="text-lg font-semibold text-slate-900 mb-4">
                ⏰ Oferta encerrada. Fale com nosso time para condições especiais
              </p>
              <Button
                asChild
                className="gap-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:shadow-lg transition-all"
              >
                <Link href="https://wa.me/5561982321534" target="_blank" rel="noopener noreferrer">
                  💬 Falar no WhatsApp
                </Link>
              </Button>
            </div>
          )}

          {/* Carrossel horizontal com 3 cards visíveis */}
          <div className="relative">
            {/* Botões de navegação */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 z-10">
              <button
                onClick={handlePrevious}
                disabled={carouselIndex === 0}
                className="p-2 rounded-full bg-pink-600 text-white hover:bg-pink-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                aria-label="Planos anteriores"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
            </div>

            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 z-10">
              <button
                onClick={handleNext}
                disabled={carouselIndex >= Math.max(0, plans.length - 3)}
                className="p-2 rounded-full bg-pink-600 text-white hover:bg-pink-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                aria-label="Próximos planos"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>

            {/* Carousel viewport - 3 cards por vez */}
            <div className="w-full overflow-hidden">
              <div
                className="flex gap-6 px-4"
                style={{
                  transform: `translateX(-${carouselIndex * 33.333}%)`,
                  transition: 'transform 500ms ease-out',
                  width: '100%',
                  display: 'flex',
                }}
              >
                {plans.map((plan, index) => {
                  const billing = plan.billing[billingCycle]
                  return (
                    <div key={plan.id} style={{ flex: '0 0 calc(33.333% - 1rem)' }}>
                      <Card
                        className={`group relative border-2 transition-all duration-500 flex flex-col ${
                          plan.recommended
                            ? "border-pink-500/80 bg-white shadow-2xl shadow-pink-500/20 hover:-translate-y-2 hover:shadow-pink-500/40"
                            : "border-slate-200/60 bg-white/90 backdrop-blur hover:-translate-y-2 hover:border-slate-400/60 hover:shadow-xl"
                        }`}
                      >
                  {billing.badge && (
                    <Badge
                      className={`absolute -top-3 left-1/2 -translate-x-1/2 shadow-lg ${
                        billing.badge.tone === "highlight"
                          ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                          : billing.badge.tone === "outline"
                            ? "border border-purple-600 bg-white text-purple-600"
                            : "bg-purple-100 text-purple-700"
                      }`}
                    >
                      {billing.badge.label}
                    </Badge>
                  )}

                  <CardHeader className="space-y-4 text-center pb-8">
                    <CardTitle className="text-2xl font-semibold text-slate-900 min-h-24 flex items-center justify-center">
                      {plan.name}
                    </CardTitle>
                    <p className="text-sm text-slate-500">{plan.description}</p>
                    <div className="flex flex-col items-center gap-1">
                      <span className="text-5xl font-bold text-slate-900 font-serif">{billing.price}</span>
                      <span className="text-slate-600">{billing.period}</span>
                    </div>
                    {plan.nfLimit > 0 && (
                      <p className="text-xs font-semibold text-purple-600 bg-purple-50 rounded-full py-1 px-3 inline-block mx-auto">
                        Até {plan.nfLimit.toLocaleString("pt-BR")} notas fiscais/mês
                      </p>
                    )}
                    <p className="text-xs text-slate-500">{billing.note}</p>
                  </CardHeader>

                  <CardContent>
                    <ul className="space-y-3">
                      {plan.features.map((feature) => (
                        <li key={feature.text} className="flex items-start gap-3 text-left">
                          <span
                            className={`mt-1 flex h-5 w-5 items-center justify-center rounded-full flex-shrink-0 ${
                              feature.included
                                ? "bg-gradient-to-r from-emerald-500 to-green-500"
                                : "bg-slate-200"
                            }`}
                          >
                            {feature.included ? (
                              <Check className="h-3 w-3 text-white" aria-hidden="true" />
                            ) : (
                              <X className="h-3 w-3 text-slate-400" aria-hidden="true" />
                            )}
                          </span>
                          <span
                            className={`text-sm leading-relaxed ${
                              feature.included ? "text-slate-700" : "text-slate-400"
                            }`}
                          >
                            {feature.text}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* ATELIEPRO_CHANGE: Melhoria 4 - Lugar B: Explicar funcionamento do trial */}
                    {plan.type === "trial" && (
                      <div className="mt-6 pt-6 border-t border-slate-200 space-y-3">
                        <div className="flex items-start gap-2">
                          <span className="text-lg leading-none mt-0.5">ℹ️</span>
                          <span className="text-xs font-semibold text-slate-700">Como funciona o trial:</span>
                        </div>
                        <ul className="space-y-2 text-xs text-slate-600">
                          <li className="flex gap-2">
                            <span className="font-semibold text-slate-700 flex-shrink-0">•</span>
                            <span><strong>Dia 1–7:</strong> acesso completo, sem cartão cadastrado</span>
                          </li>
                          <li className="flex gap-2">
                            <span className="font-semibold text-slate-700 flex-shrink-0">•</span>
                            <span><strong>Dia 6:</strong> você recebe um e-mail perguntando se quer continuar</span>
                          </li>
                          <li className="flex gap-2">
                            <span className="font-semibold text-slate-700 flex-shrink-0">•</span>
                            <span><strong>Dia 7:</strong> se não escolher um plano, o acesso pausa — sem cobranças</span>
                          </li>
                          <li className="flex gap-2">
                            <span className="font-semibold text-slate-700 flex-shrink-0">•</span>
                            <span><strong>Retomar:</strong> escolha um plano e continue de onde parou</span>
                          </li>
                        </ul>
                      </div>
                    )}
                  </CardContent>

                  <CardFooter className="mt-auto flex flex-col gap-3">
                    <Button
                      asChild
                      size="lg"
                      className={`h-12 w-full font-semibold transition-all duration-300 ${
                        plan.recommended
                          ? "bg-pink-600 hover:bg-pink-700 text-white shadow-md hover:shadow-xl"
                          : "bg-slate-900 text-white shadow-md hover:shadow-lg hover:bg-slate-800"
                      }`}
                    >
                      <Link
                        href={billing.ctaHref}
                        target={billing.ctaHref.startsWith("http") ? "_blank" : undefined}
                        rel={billing.ctaHref.startsWith("http") ? "noopener noreferrer" : undefined}
                        data-analytics={billing.analyticsId}
                      >
                        {billing.ctaLabel}
                      </Link>
                    </Button>
                    {billing.guarantee && (
                      <p className="text-xs text-slate-500 text-center">{billing.guarantee}</p>
                    )}
                  </CardFooter>
                      </Card>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          <div className="mt-12 space-y-4 text-center animate-fade-in" style={{ animationDelay: "0.45s" }}>
            <p className="inline-flex items-center justify-center gap-2 rounded-full border border-emerald-200/60 bg-white/80 px-6 py-3 text-sm font-medium text-slate-600 backdrop-blur">
              {/* prova social + urgência + redução de objeções */}
              ✅ 7 dias de teste grátis • 🔐 Sem cartão de crédito • 💬 Suporte real de verdade
            </p>
            <p className="text-xs text-slate-500">
              {/* foco em confiança e facilidade */}
              Aceitamos Pix, cartão de crédito e boleto. Sem fidelidade, sem multa, sem surpresa. Você sai quando quiser. Mas a maioria fica porque está ganhando muito mais.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
