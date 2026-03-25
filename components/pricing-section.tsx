"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, X } from "lucide-react"
import Link from "next/link"

type BillingCycle = "monthly" | "annual"

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
        note: "Sem cartão de crédito. Renovação automática ao fim dos 7 dias (requer plano pago).",
        ctaLabel: "Começar teste grátis",
        ctaHref: "https://app.ateliepro.online",
        analyticsId: "pricing-trial",
        badge: { label: "Comece agora", tone: "subtle" },
      },
      annual: {
        price: "Grátis",
        period: "7 dias",
        note: "Sem cartão de crédito. Renovação automática ao fim dos 7 dias (requer plano pago).",
        ctaLabel: "Começar teste grátis",
        ctaHref: "https://app.ateliepro.online",
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
        ctaHref: "https://app.ateliepro.online",
        analyticsId: "pricing-basico-mensal",
        guarantee: "7 dias grátis para testar",
      },
      annual: {
        price: "R$ 390,00",
        period: "/ano",
        note: "Equivalente a R$ 32,50/mês. Economiza R$ 78 (2 meses grátis).",
        ctaLabel: "Assinar anual",
        ctaHref: "https://app.ateliepro.online",
        analyticsId: "pricing-basico-anual",
        badge: { label: "2 meses grátis", tone: "highlight" },
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
        note: "Ative o módulo fiscal sem fidelidade e com onboarding guiado.",
        ctaLabel: "Ativar plano",
        ctaHref: "https://app.ateliepro.online",
        analyticsId: "pricing-prof-mensal",
        guarantee: "Onboarding fiscal guiado incluso",
        badge: { label: "Mais popular", tone: "highlight" },
      },
      annual: {
        price: "R$ 999,90",
        period: "/ano",
        note: "Equivalente a R$ 83,32/mês. Economiza ~R$ 300 (2 meses grátis).",
        ctaLabel: "Assinar anual",
        ctaHref: "https://app.ateliepro.online",
        analyticsId: "pricing-prof-anual",
        badge: { label: "Economize R$ 300", tone: "highlight" },
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
        note: "Ideal para ateliés em crescimento com até 300 notas/mês.",
        ctaLabel: "Ativar plano",
        ctaHref: "https://app.ateliepro.online",
        analyticsId: "pricing-prof-plus",
      },
      annual: {
        price: "Consulte",
        period: "/ano",
        note: "Fale com nosso time para descontos anuais.",
        ctaLabel: "Falar com time",
        ctaHref: "https://wa.me/5561982321534",
        analyticsId: "pricing-prof-plus-anual",
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
        note: "Para ateliés com múltiplos confeccionistas e alto volume.",
        ctaLabel: "Ativar plano",
        ctaHref: "https://app.ateliepro.online",
        analyticsId: "pricing-prof-enterprise",
      },
      annual: {
        price: "Consulte",
        period: "/ano",
        note: "Fale com nosso time para descontos especiais.",
        ctaLabel: "Falar com time",
        ctaHref: "https://wa.me/5561982321534",
        analyticsId: "pricing-prof-enterprise-anual",
      },
    },
  },
]

export function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>("monthly")

  return (
    <section id="precos" className="py-20 md:py-28 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-emerald-400/10 to-blue-400/10 rounded-full blur-3xl" />
      </div>

      <div className="container relative px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <Badge variant="outline" className="mb-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border-purple-300/50 text-purple-700">
              Preços
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight text-balance text-slate-900 md:text-4xl lg:text-5xl mb-4 font-serif bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 bg-clip-text text-transparent">
              Planos pensados para ateliês e confecções de qualquer porte
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto text-pretty leading-relaxed">
              Escolha a melhor forma de contratação para o momento do seu negócio. Alterne entre faturamento mensal ou anual a qualque momento.
            </p>
          </div>

          <div className="mx-auto mb-12 flex w-full max-w-md items-center justify-center rounded-full bg-white/80 p-1 shadow-inner shadow-purple-500/10">
            {(["monthly", "annual"] as const).map((cycle) => {
              const isActive = billingCycle === cycle
              return (
                <button
                  key={cycle}
                  type="button"
                  onClick={() => setBillingCycle(cycle)}
                  aria-pressed={isActive}
                  className={`flex-1 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? "bg-gradient-to-r from-purple-600 via-purple-500 to-pink-600 text-white shadow-lg shadow-purple-500/30"
                      : "text-slate-600 hover:text-purple-600"
                  }`}
                >
                  {cycle === "monthly" ? "Faturamento mensal" : "Faturamento anual"}
                </button>
              )
            })}
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {plans.map((plan, index) => {
              const billing = plan.billing[billingCycle]
              return (
                <Card
                  key={plan.id}
                  className={`group relative h-full border-2 transition-all duration-500 ${
                    plan.recommended
                      ? "border-purple-500/80 bg-white shadow-2xl shadow-purple-500/20 hover:-translate-y-3 hover:shadow-purple-500/40 md:col-span-2 lg:col-span-1"
                      : "border-purple-200/40 bg-white/90 backdrop-blur hover:-translate-y-2 hover:border-purple-400/60 hover:shadow-xl"
                  } animate-fade-in`}
                  style={{ animationDelay: `${index * 0.1}s` }}
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

                  <CardHeader className="space-y-3 text-center">
                    <CardTitle className="text-2xl font-semibold text-slate-900">
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
                  </CardContent>

                  <CardFooter className="mt-auto flex flex-col gap-3">
                    <Button
                      asChild
                      size="lg"
                      className={`h-12 w-full font-semibold transition-all duration-300 ${
                        plan.recommended
                          ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md hover:shadow-xl"
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
              )
            })}
          </div>

          <div className="mt-12 space-y-4 text-center animate-fade-in" style={{ animationDelay: "0.45s" }}>
            <p className="inline-flex items-center justify-center gap-2 rounded-full border border-emerald-200/60 bg-white/80 px-6 py-3 text-sm font-medium text-slate-600 backdrop-blur">
              ✅ 7 dias de teste grátis • 🔐 Pagamento 100% seguro • 💬 Suporte dedicado para novas contas
            </p>
            <p className="text-xs text-slate-500">
              Aceitamos Pix, cartão de crédito e boleto recorrente. Você pode migrar de mensal para anual (e vice-versa) a qualquer momento. Sem multas, sem fidelidade.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
