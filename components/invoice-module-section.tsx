import Link from "next/link"
import { Building2, CheckCircle2, Clock3, CloudCog, FileText, Workflow } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const highlights = [
  {
    title: "Emissão em segundos",
    description: "Preencha automaticamente dados do pedido e gere NF-e com layout alinhado às exigências municipais.",
    icon: FileText,
  },
  {
    title: "Armazenamento inteligente",
    description: "Arquive NF-e e recibos no mesmo lugar onde controla pedidos, com histórico de auditoria completo.",
    icon: CloudCog,
  },
  {
    title: "Integração com prefeituras",
    description: "Sincronize certificados digitais, valide tributos e acompanhe retornos sem sair do ERP criativo.",
    icon: Building2,
  },
]

const steps = [
  {
    title: "1. Configure uma vez",
    description:
      "Conecte seu certificado e personalize alíquotas e séries de emissão com assistente guiado. Tudo com suporte especializado.",
    icon: Workflow,
  },
  {
    title: "2. Gere a nota",
    description:
      "Selecione o pedido aprovado, revise os itens e gere NF-e com campos preenchidos automaticamente pelo Ateliê Pro.",
    icon: CheckCircle2,
  },
  {
    title: "3. Envie e acompanhe",
    description: "Compartilhe a nota por e-mail ou WhatsApp e monitore o status em tempo real na área financeira.",
    icon: Clock3,
  },
]

export function InvoiceModuleSection() {
  return (
    <section id="emissor-notas" className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-purple-900 py-24 text-white">
      <div className="absolute inset-0">
        <div className="absolute -top-40 left-0 h-96 w-96 rounded-full bg-purple-600/30 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[380px] w-[380px] rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.07),_transparent_70%)]" />
      </div>

      <div className="container relative px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl space-y-4">
            <Badge className="w-fit bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/30">
              Novo módulo
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              Emissor de Notas Fiscais integrado ao seu fluxo de produção
            </h2>
            <p className="text-lg text-purple-100 leading-relaxed">
              Elimine planilhas e sistemas paralelos. Com o Ateliê Pro, você emite notas fiscais de serviço ou produto sem
              quebrar o ritmo criativo, mantendo conformidade fiscal e histórico centralizado.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="h-12 w-full sm:w-auto bg-white text-slate-900 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all"
            >
              <Link
                href="https://app.ateliepro.online"
                target="_blank"
                rel="noopener noreferrer"
                data-analytics="cta-invoice-module-primary"
              >
                Comece a emitir agora
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-12 w-full border-white/40 text-white hover:bg-white/10 hover:text-white sm:w-auto"
            >
              <Link
                href="https://cal.com/ateliepro/fiscal"
                target="_blank"
                rel="noopener noreferrer"
                data-analytics="cta-invoice-module-secondary"
              >
                Fale com um especialista
              </Link>
            </Button>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr]">
          <div className="grid gap-6 md:grid-cols-3">
            {highlights.map((highlight) => {
              const Icon = highlight.icon

              return (
                <Card
                  key={highlight.title}
                  className="group h-full border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:border-purple-200/80 hover:bg-white/10"
                >
                  <CardContent className="space-y-4 p-6">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/30">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-white">{highlight.title}</h3>
                      <p className="text-sm text-purple-100 leading-relaxed">{highlight.description}</p>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <h3 className="text-xl font-semibold text-white">Como funciona na prática</h3>
            <div className="space-y-4">
              {steps.map((step) => {
                const Icon = step.icon
                return (
                  <div key={step.title} className="flex items-start gap-4 rounded-2xl bg-white/5 p-4 transition-all duration-300 hover:bg-white/10">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-500/70 text-white shadow-md">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div className="space-y-1">
                      <p className="text-sm font-semibold text-white uppercase tracking-wide">{step.title}</p>
                      <p className="text-sm text-purple-100 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
            <p className="text-xs text-purple-200">
              Compatível com certificados A1. Para municípios com regras específicas, utilize as notas internas do módulo de compliance ao acionar nossa equipe fiscal.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}


