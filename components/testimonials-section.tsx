import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, TrendingUp, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Maria Silva",
    business: "Ateliê Maria Bordados",
    location: "São Paulo, SP",
    avatar: "/maria-silva.png",
    initials: "MS",
    quote:
      "Consegui organizar meu ateliê e aumentar vendas em 35% no primeiro mês. O sistema é intuitivo e me economiza horas por dia. A calculadora de preços foi um divisor de águas!",
    rating: 5,
    metric: "+35% em vendas",
  },
  {
    name: "João Santos",
    business: "Confecção J&J Uniformes",
    location: "Rio de Janeiro, RJ",
    avatar: "/joao-santos.png",
    initials: "JS",
    quote:
      "Finalmente tenho controle total dos meus pedidos e clientes. A calculadora de precificação me ajudou a precificar corretamente e aumentar minha margem de lucro.",
    rating: 5,
    metric: "+40% margem de lucro",
  },
  {
    name: "Ana Costa",
    business: "Bordados Ana Costa",
    location: "Belo Horizonte, MG",
    avatar: "/ana-costa.png",
    initials: "AC",
    quote:
      "O melhor investimento que fiz para meu negócio. A integração com WhatsApp profissionalizou meu atendimento completamente. Meus clientes adoram receber orçamentos pelo app!",
    rating: 5,
    metric: "100% satisfação",
  },
  {
    name: "Patricia Oliveira",
    business: "Confecção PR Moda",
    location: "Curitiba, PR",
    avatar: "/patricia-oliveira.png",
    initials: "PO",
    quote:
      "Antes eu anotava tudo em papel e perdia prazos. Agora com o Ateliê Pro, meus clientes veem o status em tempo real. Aumentei meu faturamento em 50% esse semestre!",
    rating: 5,
    metric: "+50% faturamento",
  },
  {
    name: "Fernanda Gomes",
    business: "Atelier Fernanda",
    location: "Salvador, BA",
    avatar: "/fernanda-gomes.png",
    initials: "FG",
    quote:
      "A calculadora de preços é incrível! Nunca mais vendo no prejuízo. Meus lucros aumentaram drasticamente. É como ter um assessor financeiro dentro do app!",
    rating: 5,
    metric: "+45% lucro líquido",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0.6))] -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="container relative px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-primary/20 bg-primary/5">
              Depoimentos
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight text-balance text-foreground md:text-4xl lg:text-5xl mb-4 font-serif">
              500+ Ateliês Aumentaram Lucro com Ateliê Pro
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              Confira como costureiras e confecções aumentaram vendas, organizaram pedidos e profissionalizaram atendimento em poucos dias
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="group border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 bg-gradient-to-br from-background to-muted/20 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <CardContent className="pt-8 pb-8 px-8 relative">
                  <Quote className="absolute top-6 right-6 h-16 w-16 text-primary/15 group-hover:text-primary/25 transition-colors" />

                  <div className="flex items-start justify-between mb-8">
                    <div className="flex gap-1.5">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="h-6 w-6 fill-amber-400 text-amber-400 drop-shadow-md" />
                      ))}
                    </div>
                    <Badge
                      className="gap-2 px-5 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-base shadow-lg"
                    >
                      <TrendingUp className="h-5 w-5" />
                      {testimonial.metric.toUpperCase()}
                    </Badge>
                  </div>

                  <p className="text-foreground mb-8 leading-relaxed text-lg italic">"{testimonial.quote}"</p>

                  <div className="flex items-center gap-4 pt-6 border-t border-border/50">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-full blur-sm opacity-50" />
                      <Avatar className="h-16 w-16 border-2 border-background relative">
                        <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                        <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-primary-foreground font-semibold">
                          {testimonial.initials}
                        </AvatarFallback>
                      </Avatar>
                    </div>
                    <div>
                      <div className="font-bold text-foreground text-lg">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground font-medium">{testimonial.business} • {testimonial.location}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
