import { ArrowRight } from "lucide-react"

const steps = [
  {
    number: "1",
    title: "Crie o Orçamento Certo",
    description: "Use a calculadora: ela mostra exatamente quanto você deve cobrar para ganhar dinheiro. Ou escolha um modelo salvo e seja rápido.",
  },
  {
    number: "2",
    title: "Envie pelo WhatsApp (profissional)",
    description: "Um clique e o orçamento bonito vai no WhatsApp do cliente. Sem copiar e colar. Sem parecer amador. Resultado: cliente aprova mais rápido.",
  },
  {
    number: "3",
    title: "Produza Organizado, Entregue na Hora",
    description: "O pedido já está lá, com checklist de produção, prazo claro. Você não perde nada. Cliente recebe no prazo. Você cobra. E fica lindo.",
  },
]

export function HowItWorksSection() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-balance text-foreground md:text-4xl lg:text-5xl mb-4 font-serif">
              Como Funciona
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              Três passos simples para transformar seu ateliê
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground text-2xl font-bold mb-6 shadow-lg">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <ArrowRight className="hidden md:block absolute top-8 -right-4 h-6 w-6 text-primary/30" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
