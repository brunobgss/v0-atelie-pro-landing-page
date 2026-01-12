import { Badge } from "@/components/ui/badge"
import { Check, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const comparisonData = {
  ateliePro: {
    name: "Ateliê Pro",
    items: {
      "Gestão de pedidos": true,
      "Calculadora de precificação": true,
      "Integração WhatsApp": true,
      "Emissor de NF-e": true,
      "Agenda automática": true,
      "Controle de estoque": true,
      "Relatórios financeiros": true,
      "Backup automático": true,
      "Suporte especializado": true,
      "Acesso mobile": true,
      "Atualizações automáticas": true,
      "Multi-usuário": true,
    },
  },
  planilhas: {
    name: "Planilhas Excel/Google Sheets",
    items: {
      "Gestão de pedidos": true,
      "Calculadora de precificação": false,
      "Integração WhatsApp": false,
      "Emissor de NF-e": false,
      "Agenda automática": false,
      "Controle de estoque": true,
      "Relatórios financeiros": true,
      "Backup automático": false,
      "Suporte especializado": false,
      "Acesso mobile": true,
      "Atualizações automáticas": false,
      "Multi-usuário": true,
    },
  },
  sistemasGenericos: {
    name: "Sistemas Genéricos",
    items: {
      "Gestão de pedidos": true,
      "Calculadora de precificação": false,
      "Integração WhatsApp": false,
      "Emissor de NF-e": true,
      "Agenda automática": false,
      "Controle de estoque": true,
      "Relatórios financeiros": true,
      "Backup automático": true,
      "Suporte especializado": true,
      "Acesso mobile": true,
      "Atualizações automáticas": true,
      "Multi-usuário": true,
    },
  },
}

const features = Object.keys(comparisonData.ateliePro.items)

export function ComparisonSection() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-emerald-400/10 to-blue-400/10 rounded-full blur-3xl" />
      </div>

      <div className="container relative px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16 animate-fade-in">
            <Badge variant="outline" className="mb-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border-purple-300/50 text-purple-700">
              Comparação
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight text-balance text-slate-900 md:text-4xl lg:text-5xl mb-4 font-serif bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 bg-clip-text text-transparent">
              Por Que Escolher o Ateliê Pro?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto text-pretty leading-relaxed">
              Veja a diferença entre o Ateliê Pro e outras soluções de gestão
            </p>
          </div>

          <div className="overflow-x-auto">
            <div className="min-w-full inline-block">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                {/* Header row */}
                <div className="sticky left-0 z-10 bg-white/80 backdrop-blur-sm rounded-lg py-2.5 px-3 border border-slate-200">
                  <h3 className="text-xs font-semibold text-slate-900 uppercase tracking-wide">Funcionalidade</h3>
                </div>
                {Object.entries(comparisonData).map(([key, data]) => (
                  <div
                    key={key}
                    className={`rounded-lg border-2 py-2.5 px-3 ${
                      key === "ateliePro"
                        ? "border-purple-500/80 bg-gradient-to-br from-purple-50/50 to-pink-50/50 shadow-md"
                        : "border-slate-200 bg-white"
                    }`}
                  >
                    <div className="text-center">
                      {key === "ateliePro" && (
                        <Badge className="mb-1.5 text-[10px] px-2 py-0.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                          Recomendado
                        </Badge>
                      )}
                      <div className="text-xs font-bold text-slate-900 leading-tight">{data.name}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Features comparison */}
              <div className="space-y-1.5">
                {features.map((feature, index) => (
                  <div
                    key={feature}
                    className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center py-2.5 px-3 rounded-lg hover:bg-slate-50/50 transition-colors border-b border-slate-100 last:border-b-0"
                  >
                    <div className="text-xs font-medium text-slate-700">{feature}</div>
                    {Object.entries(comparisonData).map(([key, data]) => (
                      <div key={key} className="flex justify-center">
                        {data.items[feature as keyof typeof data.items] ? (
                          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 to-green-500">
                            <Check className="h-3 w-3 text-white" />
                          </div>
                        ) : (
                          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-slate-200">
                            <X className="h-3 w-3 text-slate-400" />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              asChild
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Link
                href="https://app.ateliepro.online"
                target="_blank"
                rel="noopener noreferrer"
                data-analytics="cta-comparison"
                aria-label="Começar teste grátis do Ateliê Pro"
              >
                Experimente Grátis por 7 Dias
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
