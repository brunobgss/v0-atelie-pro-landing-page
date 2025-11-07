import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shirt, School, Palette, Scissors, Store } from "lucide-react"

const useCases = [
  {
    icon: Shirt,
    title: "Ateliês de Bordado Computadorizado",
    description: "Calcule preços por pontos, gerencie cores e controle produção de bordados personalizados.",
    benefits: ["Cálculo por pontos", "Controle de cores", "Templates de bordados"],
    gradient: "from-purple-500/10 to-pink-500/10",
    iconBg: "bg-gradient-to-br from-purple-500 to-pink-500",
  },
  {
    icon: School,
    title: "Uniformes Escolares e Corporativos",
    description: "Gerencie pedidos em lote, controle tamanhos (P, M, G, GG) e organize entregas por turma ou setor.",
    benefits: ["Pedidos em lote", "Controle de tamanhos", "Entregas organizadas"],
    gradient: "from-blue-500/10 to-cyan-500/10",
    iconBg: "bg-gradient-to-br from-blue-500 to-cyan-500",
  },
  {
    icon: Palette,
    title: "Empresas de Personalização",
    description: "Catálogo de produtos personalizáveis, cálculo de materiais e envio de orçamentos profissionais.",
    benefits: ["Catálogo flexível", "Cálculo de materiais", "Orçamentos rápidos"],
    gradient: "from-orange-500/10 to-red-500/10",
    iconBg: "bg-gradient-to-br from-orange-500 to-red-500",
  },
  {
    icon: Scissors,
    title: "Ateliês de Costura Artesanal",
    description: "Controle de tecidos, aviamentos e tempo de produção para peças sob medida.",
    benefits: ["Gestão de tecidos", "Controle de tempo", "Peças exclusivas"],
    gradient: "from-green-500/10 to-emerald-500/10",
    iconBg: "bg-gradient-to-br from-green-500 to-emerald-500",
  },
  {
    icon: Store,
    title: "Lojas de Produtos Personalizados",
    description: "Integre vendas, produção e entrega em um só lugar com controle financeiro completo.",
    benefits: ["Vendas integradas", "Controle financeiro", "Gestão completa"],
    gradient: "from-indigo-500/10 to-purple-500/10",
    iconBg: "bg-gradient-to-br from-indigo-500 to-purple-500",
  },
]

export function UseCasesSection() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10" />

      <div className="container relative px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-primary/20 bg-primary/5">
              Casos de Uso
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight text-balance text-foreground md:text-4xl lg:text-5xl mb-4 font-serif">
              Perfeito Para Seu Tipo de Negócio
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              Seja qual for seu segmento, o Ateliê Pro tem as ferramentas certas para você crescer
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => {
              const Icon = useCase.icon
              return (
                <Card
                  key={index}
                  className="group border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 bg-gradient-to-br from-background to-muted/20 overflow-hidden relative"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${useCase.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  />

                  <CardHeader className="relative">
                    <div className="flex items-start gap-3 mb-3">
                      <div
                        className={`flex h-14 w-14 items-center justify-center rounded-xl ${useCase.iconBg} shrink-0 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}
                      >
                        <Icon className="h-7 w-7 text-white" />
                      </div>
                      <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
                        {useCase.title}
                      </CardTitle>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{useCase.description}</p>
                  </CardHeader>
                  <CardContent className="relative">
                    <ul className="space-y-2">
                      {useCase.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span className="text-primary font-bold">✓</span>
                          <span>{benefit}</span>
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
    </section>
  )
}
