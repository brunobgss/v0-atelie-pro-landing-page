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
    <section className="py-20 md:py-28 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-red-400/10 to-orange-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl" />
      </div>

      <div className="container relative px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl font-bold tracking-tight text-balance text-slate-900 md:text-4xl lg:text-5xl mb-4 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 bg-clip-text text-transparent">
              Problemas que Resolvemos
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto text-pretty leading-relaxed">
              Veja como o Ateliê Pro resolve os principais desafios de gestão do seu negócio
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problems.map((problem, index) => (
              <div
                key={index}
                className="group flex items-start gap-4 p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-red-200/50 hover:border-red-300/70 transition-all duration-500 hover:shadow-2xl hover:shadow-red-500/20 hover:-translate-y-2 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-3 rounded-xl bg-gradient-to-br from-red-500 via-red-400 to-orange-500 flex-shrink-0 shadow-xl shadow-red-500/30 group-hover:shadow-2xl group-hover:shadow-red-500/50 transition-all duration-300 group-hover:scale-110">
                  <AlertCircle className="h-6 w-6 text-white group-hover:animate-pulse" />
                </div>
                <div className="flex-1">
                  <span className="text-slate-800 font-semibold block mb-2 text-base group-hover:text-slate-900 transition-colors">{problem}</span>
                  <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                    <ArrowRight className="h-4 w-4 text-red-500" />
                    <span className="text-sm text-red-500 font-medium">Solução completa</span>
                  </div>
                </div>
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-red-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
