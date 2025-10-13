import { Badge } from "@/components/ui/badge"
import { TrendingUp, Clock, Target, Award, BarChart, Rocket } from "lucide-react"
import { Card } from "@/components/ui/card"

const benefits = [
  {
    icon: TrendingUp,
    stat: "+40%",
    label: "Aumento em vendas",
    description: "Clientes reportam crescimento médio de 40% nas vendas após implementar o sistema",
    gradient: "from-green-500 to-emerald-500",
    bgGradient: "from-green-500/10 to-emerald-500/10",
  },
  {
    icon: Clock,
    stat: "-60%",
    label: "Tempo de gestão",
    description: "Reduza o tempo gasto com tarefas administrativas e foque no que importa",
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-500/10 to-cyan-500/10",
  },
  {
    icon: Target,
    stat: "100%",
    label: "Controle de pedidos",
    description: "Nunca mais perca um pedido ou esqueça um prazo de entrega",
    gradient: "from-purple-500 to-pink-500",
    bgGradient: "from-purple-500/10 to-pink-500/10",
  },
  {
    icon: Award,
    stat: "5 estrelas",
    label: "Satisfação dos clientes",
    description: "Atendimento profissional que impressiona e fideliza clientes",
    gradient: "from-orange-500 to-red-500",
    bgGradient: "from-orange-500/10 to-red-500/10",
  },
  {
    icon: BarChart,
    stat: "Dados reais",
    label: "Decisões inteligentes",
    description: "Relatórios completos para tomar decisões baseadas em dados",
    gradient: "from-indigo-500 to-purple-500",
    bgGradient: "from-indigo-500/10 to-purple-500/10",
  },
  {
    icon: Rocket,
    stat: "Crescimento",
    label: "Escalável",
    description: "Sistema que cresce junto com seu negócio, sem limites",
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

      <div className="container relative">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-primary/20 bg-primary/5">
              Benefícios
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight text-balance text-foreground md:text-4xl lg:text-5xl mb-4 font-serif">
              Resultados Reais para Seu Negócio
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              Veja o impacto que o Ateliê Pro pode ter no seu ateliê
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
