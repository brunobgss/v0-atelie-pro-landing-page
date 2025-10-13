import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Calculator,
  MessageSquare,
  ClipboardList,
  Calendar,
  Package,
  BookOpen,
  BarChart3,
  DollarSign,
  Bell,
  FileText,
} from "lucide-react"

const features = [
  {
    icon: Calculator,
    title: "Calculadora de Precificação Profissional",
    description:
      "Calcule preços com precisão usando dois métodos: por pontos (bordado) ou por horas trabalhadas. Inclui materiais, margem de lucro e análise de rentabilidade em tempo real.",
    screenshot: "/calculator-screenshot.png",
    priority: "high",
    bullets: [
      "Modo por pontos e por horas",
      "Cálculo automático de materiais",
      "Margem de lucro configurável (30-50%)",
      "Templates pré-configurados",
      "Análise de rentabilidade instantânea",
    ],
  },
  {
    icon: MessageSquare,
    title: "Integração WhatsApp Business",
    description:
      "Envie orçamentos profissionais direto pelo WhatsApp com templates formatados. Lembretes automáticos de entrega e comunicação integrada com clientes.",
    screenshot: "/catalog-screenshot.png",
    priority: "high",
    bullets: [
      "Envio automático de orçamentos",
      "Templates profissionais pré-formatados",
      "Lembretes de entrega automáticos",
      "Notificações de status em tempo real",
    ],
  },
  {
    icon: ClipboardList,
    title: "Gestão Completa de Pedidos",
    description:
      "Controle total sobre seus pedidos com status automático, duplicação inteligente e geração de ordens de produção profissionais.",
    screenshot: "/dashboard-screenshot.png",
    priority: "medium",
    bullets: [
      "Timeline visual de pedidos",
      "Status automático (Aguardando, Em produção, Pronto)",
      "Duplicação de pedidos recorrentes",
      "Impressão de ordem de produção",
      "Histórico completo de clientes",
    ],
  },
  {
    icon: Calendar,
    title: "Agenda com Avisos em Tempo Real",
    description:
      "Calendário inteligente de entregas com notificações automáticas de pedidos atrasados e lembretes de urgência.",
    screenshot: "/agenda-screenshot.png",
    priority: "medium",
    bullets: [
      "Calendário de entregas automático",
      "Alertas de pedidos atrasados",
      "Lembretes 2 dias antes da entrega",
      "Notificações via WhatsApp",
      "Visão mensal e semanal",
    ],
  },
  {
    icon: Package,
    title: "Controle de Estoque Inteligente",
    description:
      "Gestão automática de estoque com alertas visuais quando materiais estão acabando. Nunca mais perca vendas por falta de insumos.",
    priority: "medium",
    bullets: [
      "Controle de estoque mínimo",
      "Alertas de reposição urgente",
      "Status: Crítico, Baixo, Normal",
      "Gestão de materiais e insumos",
    ],
  },
  {
    icon: BookOpen,
    title: "Catálogo de Produtos",
    description:
      "Biblioteca de produtos salvos com preços pré-configurados e templates reutilizáveis para agilizar orçamentos.",
    priority: "low",
    bullets: [
      "Templates de produtos prontos",
      "Preços pré-configurados",
      "Histórico de vendas por produto",
      "Galeria de trabalhos realizados",
    ],
  },
  {
    icon: BarChart3,
    title: "Relatórios Detalhados",
    description:
      "Análise completa do seu negócio com métricas de vendas, produtos mais lucrativos e performance financeira.",
    priority: "low",
    bullets: [
      "Análise de vendas por período",
      "Produtos mais vendidos",
      "Clientes mais lucrativos",
      "Métricas de crescimento",
    ],
  },
  {
    icon: DollarSign,
    title: "Controle Financeiro",
    description: "Acompanhamento completo de pagamentos, saldos pendentes e análise de rentabilidade do seu ateliê.",
    screenshot: "/financial-screenshot.png",
    priority: "medium",
    bullets: [
      "Controle de pagamentos parciais",
      "Acompanhamento de saldos",
      "Relatórios de receita",
      "Análise de rentabilidade",
    ],
  },
  {
    icon: Bell,
    title: "Lembretes Automáticos",
    description:
      "Sistema inteligente de notificações que avisa sobre prazos, entregas e tarefas importantes automaticamente.",
    priority: "low",
    bullets: [
      "Notificações de prazo próximo",
      "Alertas de pedidos urgentes",
      "Lembretes de follow-up",
      "Avisos de estoque baixo",
    ],
  },
  {
    icon: FileText,
    title: "Orçamentos Profissionais",
    description: "Crie e envie orçamentos profissionais em PDF com aprovação que vira pedido automaticamente.",
    priority: "medium",
    bullets: [
      "Geração de PDF profissional",
      "Envio via WhatsApp",
      "Aprovação automática",
      "Controle de status (Pendente, Aprovado)",
    ],
  },
]

export function FeaturesSection() {
  return (
    <section id="funcionalidades" className="py-20 md:py-28 bg-white">
      <div className="container">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Funcionalidades
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight text-balance text-foreground md:text-4xl lg:text-5xl mb-4 font-serif">
              Tudo Que Você Precisa Para Crescer
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              10 funcionalidades poderosas para transformar seu ateliê em um negócio profissional e lucrativo
            </p>
          </div>

          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Destaques Principais</h3>
            <div className="grid lg:grid-cols-2 gap-8">
              {features
                .filter((f) => f.priority === "high")
                .map((feature, index) => {
                  const Icon = feature.icon
                  return (
                    <Card
                      key={index}
                      className="group border-2 border-purple-200/30 hover:border-purple-400/60 transition-all duration-500 shadow-xl shadow-purple-500/10 hover:shadow-2xl hover:shadow-purple-500/30 hover:-translate-y-3 hover:scale-105 bg-white/90 backdrop-blur-sm animate-fade-in"
                      style={{ animationDelay: `${index * 0.2}s` }}
                    >
                      <CardHeader className="relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="flex items-start gap-4 mb-4 relative z-10">
                          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-600 via-purple-500 to-pink-600 shrink-0 shadow-xl shadow-purple-500/40 group-hover:shadow-2xl group-hover:shadow-purple-500/60 group-hover:scale-110 transition-all duration-300">
                            <Icon className="h-7 w-7 text-white group-hover:animate-pulse" />
                          </div>
                          <div>
                            <CardTitle className="text-xl mb-2 group-hover:text-purple-700 transition-colors">{feature.title}</CardTitle>
                            <p className="text-sm text-slate-600 leading-relaxed">{feature.description}</p>
                          </div>
                        </div>
                        {feature.screenshot && (
                          <div className="rounded-2xl overflow-hidden border border-purple-200/50 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                            <img
                              src={feature.screenshot || "/placeholder.svg"}
                              alt={feature.title}
                              className="w-full h-auto object-cover"
                            />
                          </div>
                        )}
                      </CardHeader>
                      <CardContent className="relative z-10">
                        <ul className="space-y-3">
                          {feature.bullets.map((bullet, bulletIndex) => (
                            <li key={bulletIndex} className="flex items-start gap-3 text-sm text-slate-600">
                              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-r from-green-500 to-emerald-500 shrink-0 mt-0.5">
                                <span className="text-white text-xs font-bold">✓</span>
                              </div>
                              <span className="leading-relaxed">{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  )
                })}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-8 text-center bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text text-transparent">Funcionalidades Completas</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features
                .filter((f) => f.priority !== "high")
                .map((feature, index) => {
                  const Icon = feature.icon
                  return (
                    <Card
                      key={index}
                      className="group border border-purple-200/40 hover:border-purple-400/60 transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/15 hover:-translate-y-2 hover:scale-105 bg-white/80 backdrop-blur-sm animate-fade-in"
                      style={{ animationDelay: `${(index + 2) * 0.1}s` }}
                    >
                      <CardHeader className="relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/3 to-pink-500/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="flex items-start gap-3 mb-3 relative z-10">
                          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 via-purple-400 to-pink-500 shrink-0 shadow-lg shadow-purple-500/30 group-hover:shadow-xl group-hover:shadow-purple-500/50 group-hover:scale-110 transition-all duration-300">
                            <Icon className="h-6 w-6 text-white group-hover:animate-pulse" />
                          </div>
                          <CardTitle className="text-lg leading-tight group-hover:text-purple-700 transition-colors">{feature.title}</CardTitle>
                        </div>
                        <p className="text-sm text-slate-600 leading-relaxed relative z-10">{feature.description}</p>
                      </CardHeader>
                      <CardContent className="relative z-10">
                        <ul className="space-y-2">
                          {feature.bullets.map((bullet, bulletIndex) => (
                            <li key={bulletIndex} className="flex items-start gap-2 text-xs text-slate-600">
                              <div className="flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 to-green-500 shrink-0 mt-0.5">
                                <span className="text-white text-xs font-bold">•</span>
                              </div>
                              <span className="leading-relaxed">{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  )
                })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
