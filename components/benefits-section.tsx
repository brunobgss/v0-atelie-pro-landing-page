import { Badge } from "@/components/ui/badge"
import { TrendingUp, Clock, Target, Award, BarChart, Rocket } from "lucide-react"
import { Card } from "@/components/ui/card"

const benefits = [
  {
    icon: TrendingUp,
    stat: "+40%",
    label: "Mais dinheiro no seu bolso",
    description: "Clientes reais que implementaram descobriram quanto estavam deixando de ganhar. Cobrança certa = lucro garantido.",
    gradient: "from-green-500 to-emerald-500",
    bgGradient: "from-green-500/10 to-emerald-500/10",
  },
  {
    icon: Clock,
    stat: "-60%",
    label: "Menos trabalho chato",
    description: "Nada de ficar horas procurando pedidos ou calculando preço na mão. Tudo automatizado. Você produz, o sistema cuida.",
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-500/10 to-cyan-500/10",
  },
  {
    icon: Target,
    stat: "0 perdas",
    label: "Nunca mais perca um pedido",
    description: "Todo pedido, prazo e detalhe organizado. Sem WhatsApp desorganizado, sem atrasos que custem a reputação.",
    gradient: "from-purple-500 to-pink-500",
    bgGradient: "from-purple-500/10 to-pink-500/10",
  },
  {
    icon: Award,
    stat: "Profissional",
    label: "Clientes levam você a sério",
    description: "Orçamentos bonitos, prazos respeitados, atendimento impecável. Seus clientes vão acreditar que você é profissional (porque você vai ser).",
    gradient: "from-orange-500 to-red-500",
    bgGradient: "from-orange-500/10 to-red-500/10",
  },
  {
    icon: BarChart,
    stat: "Poder",
    label: "Números na mão",
    description: "Saiba exatamente quanto está faturando, quanto está gastando e quanto está lucrando. Não é achismo. É dado real.",
    gradient: "from-indigo-500 to-purple-500",
    bgGradient: "from-indigo-500/10 to-purple-500/10",
  },
  {
    icon: Rocket,
    stat: "Infinito",
    label: "Crescimento sem limite",
    description: "Seu ateliê pode crescer que o sistema acompanha. Sem travamentos, sem limitações. Quanto maior, melhor.",
    gradient: "from-pink-500 to-rose-500",
    bgGradient: "from-pink-500/10 to-rose-500/10",
  },
]

export function BenefitsSection() {
  return (
    <section
      id="beneficios"
      className="py-20 md:py-28 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:radial-gradient(ellipse_at_center,white,transparent)] -z-10" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float-delayed -z-10" />

      <div className="container relative px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-primary/20 bg-primary/5">
              {/* prova social + urgência */}
              Resultados que Comprovam
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight text-balance text-foreground md:text-4xl lg:text-5xl mb-4 font-serif">
              {/* transformação emocional: antes vs depois */}
              Isso é Possível Para Você Também
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              {/* foco em transformação pessoal, não em features */}
              500+ ateliês já conquistaram o que você está procurando. Hora de ser a próxima história de sucesso.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <Card
                  key={index}
                  className="group text-center p-8 border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 bg-gradient-to-br from-background to-muted/20 relative overflow-hidden"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${benefit.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />

                  <div className="relative">
                    <div
                      className={`inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br ${benefit.gradient} mb-6 shadow-xl group-hover:shadow-2xl group-hover:scale-110 transition-all duration-500`}
                    >
                      <Icon className="h-10 w-10 text-white" />
                    </div>

                    <div
                      className={`text-5xl font-bold bg-gradient-to-r ${benefit.gradient} bg-clip-text text-transparent mb-3 font-serif drop-shadow-lg`}
                    >
                      {benefit.stat}
                    </div>

                    <div className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {benefit.label}
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
