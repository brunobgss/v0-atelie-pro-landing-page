"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"
import Link from "next/link"

type BillingCycle = "monthly" | "annual"

type PlanBadgeTone = "highlight" | "outline" | "subtle"

type PlanBadge = {
  label: string
  tone: PlanBadgeTone
}

type PlanBilling = {
  price: string
  period: string
  note: string
  ctaLabel: string
  ctaHref: string
  analyticsId: string
  guarantee?: string
  badge?: PlanBadge
  extraFeatures?: string[]
}

type PlanGroup = {
  id: string
  name: string
  description: string
  features: string[]
  billing: Record<BillingCycle, PlanBilling>
}

const planGroups: PlanGroup[] = [
  {
    id: "basic",
    name: "Plano Básico",
    description: "Para ateliês e confecções que estão profissionalizando a gestão de pedidos, custos e produção.",
    features: [
      "Pedidos e clientes ilimitados",
      "Calculadora de precificação inteligente",
      "Agenda visual com lembretes automáticos",
      "Integração WhatsApp para orçamentos",
      "Relatórios essenciais de produção e financeiro",
    ],
    billing: {
      monthly: {
        price: "R$ 39,90",
        period: "/mês",
        note: "Cobrança recorrente mensal. Cancelamento simples, sem multas.",
        ctaLabel: "Começar teste grátis",
        ctaHref: "https://app.ateliepro.online",
        analyticsId: "pricing-basico-mensal",
        guarantee: "7 dias grátis para testar com sua equipe",
        badge: { label: "Comece hoje", tone: "subtle" },
      },
      annual: {
        price: "R$ 390,00",
        period: "/ano",
        note: "Equivalente a R$ 32,50/mês com 2 meses grátis no plano anual.",
        ctaLabel: "Assinar plano anual",
        ctaHref: "https://app.ateliepro.online",
        analyticsId: "pricing-basico-anual",
        guarantee: "Inclui suporte prioritário por e-mail",
        badge: { label: "2 meses grátis", tone: "highlight" },
        extraFeatures: ["Histórico estendido de pedidos e indicadores comparativos"],
      },
    },
  },
  {
    id: "professional",
    name: "Plano Profissional com Emissor de NF-e",
    description:
      "Para confecções e estúdios com alto volume que precisam de emissor fiscal integrado, automações e governança financeira.",
    features: [
      "Tudo do Plano Básico",
      "Emissor de notas fiscais ilimitado (NF-e)",
      "Dashboards financeiros avançados com DRE simplificada",
      "Fluxos automáticos de aprovação e checklist de produção",
      "Centros de custo e relatórios detalhados",
      "Suporte dedicado via WhatsApp e e-mail",
    ],
    billing: {
      monthly: {
        price: "R$ 99,90",
        period: "/mês",
        note: "Ative o módulo fiscal sem fidelidade e com onboarding guiado.",
        ctaLabel: "Ativar emissor NF-e",
        ctaHref: "https://app.ateliepro.online",
        analyticsId: "pricing-profissional-mensal",
        guarantee: "Onboarding fiscal guiado incluso",
        badge: { label: "Completo", tone: "outline" },
      },
      annual: {
        price: "R$ 999,00",
        period: "/ano",
        note: "2 meses grátis + brinde exclusivo para novas contas anuais.",
        ctaLabel: "Contratar plano anual",
        ctaHref: "https://app.ateliepro.online",
        analyticsId: "pricing-profissional-anual",
        guarantee: "Suporte fiscal premium e treinamento in-company",
        badge: { label: "Mais vendido", tone: "highlight" },
        extraFeatures: ["Integrações com contabilidade e API aberta inclusas"],
      },
    },
  },
]

export function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>("monthly")

  const displayedPlans = planGroups.map((plan) => {
    const activeBilling = plan.billing[billingCycle]
    const features = activeBilling.extraFeatures
      ? [...plan.features, ...activeBilling.extraFeatures]
      : plan.features

    return {
      ...plan,
      activeBilling,
      features,
    }
  })

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

          <div className="grid gap-8 md:grid-cols-2">
            {displayedPlans.map((plan, index) => (
              <Card
                key={plan.name}
                className={`group relative h-full border-2 transition-all duration-500 ${
                  plan.activeBilling.badge?.tone === "highlight"
                    ? "border-purple-500/80 bg-white shadow-2xl shadow-purple-500/20 hover:-translate-y-3 hover:shadow-purple-500/40"
                    : "border-purple-200/40 bg-white/90 backdrop-blur hover:-translate-y-2 hover:border-purple-400/60 hover:shadow-xl"
                } animate-fade-in`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {plan.activeBilling.badge && (
                  <Badge
                    className={`absolute -top-3 left-1/2 -translate-x-1/2 shadow-lg ${
                      plan.activeBilling.badge.tone === "highlight"
                        ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                        : plan.activeBilling.badge.tone === "outline"
                          ? "border border-purple-600 bg-white text-purple-600"
                          : "bg-purple-100 text-purple-700"
                    }`}
                  >
                    {plan.activeBilling.badge.label}
                  </Badge>
                )}

                <CardHeader className="space-y-3 text-center">
                  <CardTitle className="text-2xl font-semibold text-slate-900">
                    {plan.name}
                  </CardTitle>
                  <p className="text-sm text-slate-500">{plan.description}</p>
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-5xl font-bold text-slate-900 font-serif">{plan.activeBilling.price}</span>
                    <span className="text-slate-600">{plan.activeBilling.period}</span>
                  </div>
                  <p className="text-xs text-slate-500">{plan.activeBilling.note}</p>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-left">
                        <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 to-green-500">
                          <Check className="h-3 w-3 text-white" aria-hidden="true" />
                        </span>
                        <span className="text-sm text-slate-700 leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter className="mt-auto flex flex-col gap-3">
                  <Button
                    asChild
                    size="lg"
                    className="h-12 w-full font-semibold transition-all duration-300 bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md hover:shadow-xl"
                  >
                    <Link
                      href={plan.activeBilling.ctaHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-analytics={plan.activeBilling.analyticsId}
                    >
                      {plan.activeBilling.ctaLabel}
                    </Link>
                  </Button>
                  {plan.activeBilling.guarantee && (
                    <p className="text-xs text-slate-500 text-center">{plan.activeBilling.guarantee}</p>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-12 space-y-4 text-center animate-fade-in" style={{ animationDelay: "0.45s" }}>
            <p className="inline-flex items-center justify-center gap-2 rounded-full border border-emerald-200/60 bg-white/80 px-6 py-3 text-sm font-medium text-slate-600 backdrop-blur">
              ✅ 7 dias de teste grátis • 🔐 Pagamento 100% seguro • 💬 Onboarding assistido para quem ativa o módulo fiscal
            </p>
            <p className="text-xs text-slate-500">
              Aceitamos Pix, cartão de crédito e boleto recorrente. Você pode migrar de mensal para anual (e vice-versa) a qualquer momento com ajuda do nosso time.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
