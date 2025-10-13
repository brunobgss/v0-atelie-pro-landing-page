import { AlertCircle, ArrowRight } from "lucide-react"

const problems = [
  "Não sabe quanto cobrar",
  "Pedidos espalhados pelo WhatsApp",
  "Atrasos na produção",
  "Retrabalhos e erros",
  "Estoque desorganizado",
  "Falta de profissionalismo no atendimento",
]

export function ProblemsSection() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-white via-purple-50/30 to-white">
      <div className="container">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-balance text-foreground md:text-4xl lg:text-5xl mb-4">
              Problemas que Resolvemos
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              Veja como o Ateliê Pro resolve os principais desafios de gestão do seu negócio
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problems.map((problem, index) => (
              <div
                key={index}
                className="group flex items-start gap-3 p-6 rounded-xl bg-white border border-purple-100 hover:border-purple-300 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1"
              >
                <div className="p-2 rounded-lg bg-gradient-to-br from-red-500 to-orange-500 flex-shrink-0 shadow-lg shadow-red-500/20">
                  <AlertCircle className="h-5 w-5 text-white" />
                </div>
                <div className="flex-1">
                  <span className="text-foreground font-semibold block mb-1">{problem}</span>
                  <ArrowRight className="h-4 w-4 text-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
