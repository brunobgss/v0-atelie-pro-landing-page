import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
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
    title: "Método de Precificação Inteligente Ateliê Pro™",
    description:
      "Descubra exatamente quanto cobrar para NUNCA mais trabalhar com prejuízo. Com o sistema inteligente, você leva em conta tempo, material e margem real — evitando perder dinheiro em cada peça.",
    screenshot: "/calculator-screenshot.png",
    priority: "high",
    bullets: [
      "Calcula tempo + material + lucro real",
      "Dois métodos: por pontos ou horas trabalhadas",
      "Vê se o pedido vale a pena ANTES de aceitar",
      "Margem de lucro que você controla (30-50%)",
      "Resultado: +40% de ganho por pedido em média",
    ],
  },
  {
    icon: MessageSquare,
    title: "Orçamentos Profissionais no WhatsApp",
    description:
      "Cliente vê seu orçamento bonito, profissional e confiável — não aquele textão bagunçado. Resultado: aprova 3x mais rápido e não nega sem motivo.",
    screenshot: "/catalog-screenshot.png",
    priority: "high",
    bullets: [
      "Orçamento profissional que impressiona",
      "Manda em um clique, sem copiar/colar",
      "Rastreia quem viu, acenou, recusou",
      "Lembra automaticamente de quem não respondeu",
      "Transforma interessado em cliente",
    ],
  },
  {
    icon: ClipboardList,
    title: "Sistema Anti-Atraso™ de Pedidos",
    description:
      "Não é mais aquele caos de pedidos espalhados no WhatsApp. Todo pedido organizado, prazos claros, ninguém fica para trás. E você ainda recebe avisos antes de atrasar.",
    screenshot: "/dashboard-screenshot.png",
    priority: "medium",
    bullets: [
      "Tudo em um único lugar (sem cacos)",
      "Status claro: espera → produção → pronto",
      "Copia pedidos que repetem (economia de tempo)",
      "Imprime ordem de produção profissional",
      "Cliente sabe sempre onde está o pedido",
    ],
  },
  {
    icon: Calendar,
    title: "Agenda Inteligente que Te Protege",
    description:
      "Calendário que faz você nunca mais atrasar. Avisa com antecedência, mostra no WhatsApp, e você recebe lembretes antes do caos.",
    screenshot: "/agenda-screenshot.png",
    priority: "medium",
    bullets: [
      "Calendário visual de tudo que sai",
      "Alerta de atraso 2 dias antes",
      "Aviso urgente se algo está atrasando",
      "Notificação no WhatsApp (não perde)",
      "Visão semana ou mês, como quiser",
    ],
  },
  {
    icon: Package,
    title: "Controle de Estoque que Previne Desastre",
    description:
      "Gestão automática de estoque com alertas visuais quando materiais estão acabando. Nunca mais perca vendas por falta de insumos.",
    priority: "medium",
    bullets: [
      "Avisa quando está acabando",
      "Você define o mínimo que quer ter",
      "Status claro: Crítico, Baixo, OK",
      "Histórico de uso de materiais",
    ],
  },
  {
    icon: BookOpen,
    title: "Catálogo de Produtos Pronto",
    description:
      "Salva seus produtos uma vez, reutiliza para sempre. Preços já vêm certos, economiza digitação. Seu trabalho mais rápido.",
    priority: "low",
    bullets: [
      "Salva cada modelo e preço",
      "Reutiliza quantas vezes quiser",
      "Vê todos os trabalhos que fez",
      "Fotos dos seus projetos",
    ],
  },
  {
    icon: BarChart3,
    title: "Dashboard que Mostra Verdades",
    description:
      "Pare de adivinhar. Você vê em um gráfico qual produto vende mais, qual lucra mais, qual cliente é melhor. Dados que te ajudam a crescer.",
    priority: "low",
    bullets: [
      "O que vendeu mais este mês",
      "Qual produto lucra mesmo",
      "Qual cliente é o mais importante",
      "Crescimento semana a semana",
    ],
  },
  {
    icon: DollarSign,
    title: "Controle Financeiro Para Não Falir",
    description: "Saiba exatamente quanto entrou, quanto saiu, e quanto você realmente lucrou. Chega de susto com custos escondidos.",
    screenshot: "/financial-screenshot.png",
    priority: "medium",
    bullets: [
      "Rastreia cada centavo que entra",
      "Identifica quem ainda deve",
      "Vê quanto você está lucrando",
      "Prevê se vai faltar dinheiro",
    ],
  },
  {
    icon: Bell,
    title: "Lembretes que Salvam",
    description:
      "Automático avisa antes que você esqueça. Antes do prazo, antes de perder cliente, antes do caos. Você sempre lembrado.",
    priority: "low",
    bullets: [
      "Aviso quando está próximo o prazo",
      "Alerta de pedidos urgentes",
      "Lembra de acompanhar cliente",
      "Aviso quando material está acabando",
    ],
  },
  {
    icon: FileText,
    title: "Orçamentos Profissionais e Impressionantes",
    description: "Aquele orçamento que cliente olha e pensa: 'Esses são profissionais mesmo'. Bonito, claro, completo. Muda a percepção.",
    priority: "medium",
    bullets: [
      "Orçamento em PDF profissional",
      "Manda pelo WhatsApp",
      "Aprovação automática",
      "Controle de status (Pendente, Aprovado)",
    ],
  },
]

export function FeaturesSection() {
  return (
    <section id="funcionalidades" className="py-20 md:py-28 bg-white">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              {/* foco em transformação e benefício */}
              Suas Soluções
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight text-balance text-foreground md:text-4xl lg:text-5xl mb-4 font-serif">
              {/* do problema para a solução */}
              Não é Só um Sistema. É Tudo Que Faltava No Seu Ateliê.
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              {/* linguagem simples e direta sobre benefício */}
              10 ferramentas que trabalham juntas para você organizar, cobrar certo e crescer. Cada uma resolve um problema real que você enfrenta hoje.
            </p>

            <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-purple-100 to-pink-100 border-2 border-purple-300">
              <p className="text-center text-purple-900 font-semibold text-lg">
                💡 <strong>Não é só um sistema. É o que transforma seu ateliê em um negócio profissional.</strong>
              </p>
            </div>
          </div>

          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Os Dois Que Mudam Tudo</h3>
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
                            <Image
                              src={feature.screenshot || "/placeholder.svg"}
                              alt={feature.title}
                              width={800}
                              height={450}
                              className="w-full h-auto object-cover"
                              quality={85}
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
            <h3 className="text-2xl font-bold mb-8 text-center bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text text-transparent">Mais 8 Ferramentas Essenciais</h3>
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
