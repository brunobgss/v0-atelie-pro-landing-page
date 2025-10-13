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
            <h3 className="text-2xl font-bold mb-8 text-center">Destaques Principais</h3>
            <div className="grid lg:grid-cols-2 gap-8">
              {features
                .filter((f) => f.priority === "high")
                .map((feature, index) => {
                  const Icon = feature.icon
                  return (
                    <Card
                      key={index}
                      className="border-2 border-purple-200/50 hover:border-purple-400 transition-all duration-300 shadow-lg shadow-purple-500/10 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-1 bg-white"
                    >
                      <CardHeader>
                        <div className="flex items-start gap-4 mb-4">
                          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 shrink-0 shadow-lg shadow-purple-500/30">
                            <Icon className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                            <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                          </div>
                        </div>
                        {feature.screenshot && (
                          <div className="rounded-xl overflow-hidden border-2 border-purple-100 shadow-md hover:shadow-xl transition-shadow duration-300">
                            <img
                              src={feature.screenshot || "/placeholder.svg"}
                              alt={feature.title}
                              className="w-full h-auto object-cover"
                            />
                          </div>
                        )}
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {feature.bullets.map((bullet, bulletIndex) => (
                            <li key={bulletIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <span className="text-primary mt-1">✓</span>
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
            <h3 className="text-2xl font-bold mb-8 text-center">Funcionalidades Completas</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features
                .filter((f) => f.priority !== "high")
                .map((feature, index) => {
                  const Icon = feature.icon
                  return (
                    <Card
                      key={index}
                      className="border border-purple-100 hover:border-purple-300 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1 bg-white"
                    >
                      <CardHeader>
                        <div className="flex items-start gap-3 mb-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 shrink-0 shadow-md shadow-purple-500/30">
                            <Icon className="h-5 w-5 text-white" />
                          </div>
                          <CardTitle className="text-lg leading-tight">{feature.title}</CardTitle>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-1.5">
                          {feature.bullets.map((bullet, bulletIndex) => (
                            <li key={bulletIndex} className="flex items-start gap-2 text-xs text-muted-foreground">
                              <span className="text-primary mt-0.5">•</span>
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
