import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MessageSquare, CheckCircle2, Clock, FileText } from "lucide-react"

export function WhatsAppFeatureSection() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-primary/5 to-background">
      <div className="container">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 bg-green-500/10 text-green-700 border-green-500/20">
              <MessageSquare className="h-3 w-3 mr-1" />
              WhatsApp Business
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight text-balance text-foreground md:text-4xl lg:text-5xl mb-4 font-serif">
              Orçamentos Profissionais Direto no WhatsApp
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              Envie orçamentos formatados automaticamente para seus clientes com apenas um clique. Profissionalismo que
              impressiona e converte.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-500/10 shrink-0">
                    <FileText className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Templates Profissionais</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Mensagens formatadas automaticamente com todos os detalhes do orçamento: produtos, quantidades,
                      valores e próximos passos.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-500/10 shrink-0">
                    <CheckCircle2 className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Aprovação Simplificada</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Cliente responde a mensagem para aprovar ou solicitar alterações. Processo simples e direto que
                      aumenta suas conversões.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-500/10 shrink-0">
                    <Clock className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Lembretes Automáticos</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Sistema envia lembretes automáticos de entrega 2 dias antes do prazo. Seus clientes sempre
                      informados, sem esforço manual.
                    </p>
                  </div>
                </div>

                <Card className="bg-green-500/5 border-green-500/20">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <MessageSquare className="h-5 w-5 text-green-600 mt-1 shrink-0" />
                      <div>
                        <p className="font-semibold text-foreground mb-1">Comunicação Profissional</p>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Cada mensagem inclui saudação personalizada, lista detalhada de produtos, valor total e
                          instruções claras para aprovação. Seus clientes percebem o profissionalismo.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="pt-4">
                  <Button size="lg" className="w-full sm:w-auto">
                    Começar Teste Grátis
                  </Button>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-green-500/20 to-primary/20 blur-3xl rounded-full" />
                <div className="relative">
                  <img
                    src="/whatsapp-message-screenshot.png"
                    alt="Exemplo de mensagem de orçamento no WhatsApp"
                    className="w-full max-w-sm mx-auto drop-shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-6">
            <Card className="text-center border-border">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2">+85%</div>
                <p className="text-sm text-muted-foreground">Taxa de resposta dos clientes</p>
              </CardContent>
            </Card>
            <Card className="text-center border-border">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2">3min</div>
                <p className="text-sm text-muted-foreground">Tempo médio para enviar orçamento</p>
              </CardContent>
            </Card>
            <Card className="text-center border-border">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <p className="text-sm text-muted-foreground">Mensagens formatadas profissionalmente</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
