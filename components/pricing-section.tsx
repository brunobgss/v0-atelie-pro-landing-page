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
    <section id="precos" className="py-20 md:py-28 bg-gradient-to-b from-white via-purple-50/50 to-white">
      <div className="container">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Preços
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight text-balance text-foreground md:text-4xl lg:text-5xl mb-4 font-serif">
              Planos Simples e Transparentes
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              Escolha o plano ideal para seu ateliê. Sem taxas escondidas, sem surpresas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Monthly Plan */}
            <Card className="border-2 border-purple-100 hover:border-purple-300 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2 bg-white">
              <CardHeader>
                <CardTitle className="text-2xl">Plano Mensal</CardTitle>
                <CardDescription>Flexibilidade total, cancele quando quiser</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-foreground font-serif">R$ 39</span>
                  <span className="text-muted-foreground">/mês</span>
                </div>
                <ul className="space-y-3">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full shadow-lg hover:shadow-xl transition-all duration-300" size="lg">
                  Começar Teste Grátis
                </Button>
              </CardFooter>
            </Card>

            {/* Annual Plan */}
            <Card className="border-2 border-purple-400 shadow-2xl shadow-purple-500/30 relative hover:shadow-3xl hover:shadow-purple-500/40 transition-all duration-300 hover:-translate-y-2 bg-white">
              <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-pink-600 shadow-lg">
                Mais Popular
              </Badge>
              <CardHeader>
                <CardTitle className="text-2xl">Plano Anual</CardTitle>
                <CardDescription>Economize R$ 78 por ano (2 meses grátis)</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-foreground font-serif">R$ 390</span>
                  <span className="text-muted-foreground">/ano</span>
                  <div className="text-sm text-primary font-medium mt-1">Equivalente a R$ 32,50/mês</div>
                </div>
                <ul className="space-y-3">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                  size="lg"
                >
                  Começar Teste Grátis
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div className="text-center mt-12 space-y-4">
            <p className="text-muted-foreground font-medium">
              ✅ 7 dias de teste grátis • Sem cartão de crédito • Cancele quando quiser
            </p>
            <p className="text-sm text-muted-foreground">
              💳 Aceitamos todas as formas de pagamento • 🔒 Pagamento 100% seguro
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
