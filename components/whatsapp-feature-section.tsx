import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageSquare, CheckCircle2, Clock, FileText, Send, TrendingUp, Sparkles } from "lucide-react"

const sellingPoints = [
  {
    icon: FileText,
    title: "Templates inteligentes",
    description: "Cada mensagem acompanha saudação, resumo do pedido, condições e próximos passos prontos para envio.",
  },
  {
    icon: Send,
    title: "Envio em 1 clique",
    description: "Selecione o contato e o Ateliê Pro cuida do texto, anexos e contexto. Sem copiar e colar.",
  },
  {
    icon: Clock,
    title: "Follow-up automático",
    description: "Lembretes são disparados se o cliente não responder em até 24h, mantendo o funil sempre ativo.",
  },
]

const steps = [
  {
    number: "01",
    title: "Monte o orçamento",
    description: "Use os preços calculados pelo sistema e personalize observações antes de enviar.",
  },
  {
    number: "02",
    title: "Envie no WhatsApp",
    description: "Escolha o contato: a mensagem já vai com layout profissional e link para assinatura.",
  },
  {
    number: "03",
    title: "Receba a aprovação",
    description: "O cliente responde 'aprovar' e o pedido muda de status automaticamente para produção.",
  },
]

export function WhatsAppFeatureSection() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-primary/5 to-background">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge
                  variant="outline"
                  className="inline-flex items-center gap-2 bg-green-500/10 text-green-700 border-green-500/20 px-4 py-2"
                >
                  <MessageSquare className="h-4 w-4" />
                  WhatsApp Business integrado
                </Badge>
                <div className="space-y-3">
                  <h2 className="text-3xl font-bold tracking-tight text-balance text-foreground md:text-4xl lg:text-5xl font-serif">
                    Orçamentos profissionais direto no WhatsApp
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Transforme respostas em vendas com mensagens que entregam clareza, urgência e confiança. O cliente recebe
                    tudo o que precisa para aprovar sem sair do chat.
                  </p>
                </div>
              </div>

              <div className="space-y-5">
                {sellingPoints.map((point) => {
                  const Icon = point.icon
                  return (
                    <div
                      key={point.title}
                      className="group flex items-start gap-4 rounded-2xl border border-green-500/20 bg-white/90 p-5 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-green-500/40 hover:shadow-xl"
                    >
                      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-500/15 text-green-600 shadow-inner shadow-green-500/20">
                        <Icon className="h-6 w-6" />
                      </span>
                      <div className="space-y-1.5">
                        <h3 className="text-base font-semibold text-foreground group-hover:text-green-600 transition-colors">
                          {point.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{point.description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>

              <Card className="border-green-500/30 bg-gradient-to-br from-green-500/10 via-white to-green-500/5 shadow-xl">
                <CardContent className="flex flex-col gap-4 p-6 md:flex-row md:items-center md:justify-between">
                  <div className="flex items-center gap-3">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-white shadow-lg">
                      <TrendingUp className="h-6 w-6" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-green-700">+85% taxa média de resposta</p>
                      <p className="text-xs text-muted-foreground">
                        Clientes confirmam pedidos até 3x mais rápido usando o fluxo automático do WhatsApp.
                      </p>
                    </div>
                  </div>
                  <Button
                    asChild
                    size="lg"
                    className="h-11 w-full bg-gradient-to-r from-green-600 to-emerald-500 text-white shadow-lg hover:shadow-xl md:w-auto"
                  >
                    <Link href="https://app.ateliepro.online" target="_blank" rel="noopener noreferrer">
                      Gerar orçamento agora
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button
                  asChild
                  variant="outline"
                  className="h-11 w-full border-green-600 text-green-700 hover:bg-green-50 sm:w-auto"
                >
                  <Link href="https://cal.com/ateliepro/demo-whatsapp" target="_blank" rel="noopener noreferrer">
                    Ver demonstração guiada
                  </Link>
                </Button>
                <p className="text-xs text-muted-foreground sm:pl-4">
                  Inclua anexos, PDFs e catálogos no mesmo envio. Tudo fica registrado na linha do tempo do pedido.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-8">
              <Card className="border-green-500/30 bg-white/90 shadow-xl">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-2 text-sm font-semibold text-green-700 uppercase">
                    <Sparkles className="h-4 w-4" />
                    Fluxo de aprovação
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {steps.map((step, index) => (
                    <div key={step.number} className="relative flex gap-4">
                      <div className="flex flex-col items-center">
                        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500 text-white text-xs font-semibold shadow-lg">
                          {step.number}
                        </span>
                        {index < steps.length - 1 && <span className="mt-1 h-12 w-px bg-green-500/30" />}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground">{step.title}</p>
                        <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <div className="relative mx-auto w-full max-w-xs">
                <div className="relative m-4 overflow-hidden rounded-[24px] border border-green-500/20 bg-white shadow-xl">
                  <Image
                    src="/whatsapp-message-screenshot.png"
                    alt="Exemplo de mensagem de orçamento no WhatsApp"
                    width={540}
                    height={960}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="mt-4 rounded-2xl bg-white/85 p-3 text-xs text-muted-foreground shadow-lg ring-1 ring-green-500/20 backdrop-blur">
                  <p>
                    <strong className="text-green-700">Dica:</strong> personalize as mensagens por grupo de clientes e acompanhe a taxa de abertura
                    dentro do painel.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
