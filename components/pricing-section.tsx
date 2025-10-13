import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"

const features = [
  "Pedidos ilimitados",
  "Orçamentos profissionais",
  "Calculadora de precificação",
  "Agenda de produção",
  "Controle de estoque",
  "Catálogo de produtos",
  "Relatórios completos",
  "Integração WhatsApp",
  "Suporte prioritário",
  "Atualizações gratuitas",
  "Backup automático na nuvem",
  "Acesso em qualquer dispositivo",
]

export function PricingSection() {
  return (
    <section id="precos" className="py-20 md:py-28 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-emerald-400/10 to-blue-400/10 rounded-full blur-3xl" />
      </div>

      <div className="container relative">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <Badge variant="outline" className="mb-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border-purple-300/50 text-purple-700">
              Preços
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight text-balance text-slate-900 md:text-4xl lg:text-5xl mb-4 font-serif bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 bg-clip-text text-transparent">
              Planos Simples e Transparentes
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto text-pretty leading-relaxed">
              Escolha o plano ideal para seu ateliê. Sem taxas escondidas, sem surpresas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Monthly Plan */}
            <Card className="group border-2 border-purple-200/40 hover:border-purple-400/60 transition-all duration-500 shadow-xl shadow-purple-500/10 hover:shadow-2xl hover:shadow-purple-500/25 hover:-translate-y-3 hover:scale-105 bg-white/90 backdrop-blur-sm animate-fade-in">
              <CardHeader className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <CardTitle className="text-2xl group-hover:text-purple-700 transition-colors">Plano Mensal</CardTitle>
                  <CardDescription className="text-slate-600">Flexibilidade total, cancele quando quiser</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="mb-6">
                  <span className="text-5xl font-bold text-slate-900 font-serif">R$ 39</span>
                  <span className="text-slate-600">/mês</span>
                </div>
                <ul className="space-y-3">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 to-green-500 shrink-0">
                        <Check className="h-3 w-3 text-white" />
                      </div>
                      <span className="text-sm text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="relative z-10">
                <Button className="w-full shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-semibold h-12" size="lg">
                  Começar Teste Grátis
                </Button>
              </CardFooter>
            </Card>

            {/* Annual Plan */}
            <Card className="group border-2 border-purple-400/60 shadow-2xl shadow-purple-500/30 relative hover:shadow-3xl hover:shadow-purple-500/40 transition-all duration-500 hover:-translate-y-3 hover:scale-105 bg-white/95 backdrop-blur-sm animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-pink-600 shadow-xl text-white border-0">
                Mais Popular
              </Badge>
              <CardHeader className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <CardTitle className="text-2xl group-hover:text-purple-700 transition-colors">Plano Anual</CardTitle>
                  <CardDescription className="text-slate-600">Economize R$ 78 por ano (2 meses grátis)</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="mb-6">
                  <span className="text-5xl font-bold text-slate-900 font-serif">R$ 390</span>
                  <span className="text-slate-600">/ano</span>
                  <div className="text-sm text-emerald-600 font-medium mt-1">Equivalente a R$ 32,50/mês</div>
                </div>
                <ul className="space-y-3">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 to-green-500 shrink-0">
                        <Check className="h-3 w-3 text-white" />
                      </div>
                      <span className="text-sm text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="relative z-10">
                <Button
                  className="w-full bg-gradient-to-r from-purple-600 via-purple-500 to-pink-600 hover:from-purple-500 hover:via-purple-400 hover:to-pink-500 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 text-white font-semibold h-12"
                  size="lg"
                >
                  Começar Teste Grátis
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div className="text-center mt-12 space-y-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <p className="text-slate-600 font-medium bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-emerald-200/50 inline-block">
              ✅ 7 dias de teste grátis • Sem cartão de crédito • Cancele quando quiser
            </p>
            <p className="text-sm text-slate-500">
              💳 Aceitamos todas as formas de pagamento • 🔒 Pagamento 100% seguro
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
