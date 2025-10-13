import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "Como funciona o teste grátis?",
    answer:
      "Você tem 7 dias para testar todas as funcionalidades do Ateliê Pro sem precisar cadastrar cartão de crédito. Após o período de teste, você pode escolher continuar com um dos nossos planos.",
  },
  {
    question: "Posso cancelar a qualquer momento?",
    answer:
      "Sim! Você pode cancelar sua assinatura a qualquer momento, sem multas ou taxas de cancelamento. Seus dados ficam salvos por 30 dias caso queira retornar.",
  },
  {
    question: "Preciso instalar algum programa?",
    answer:
      "Não! O Ateliê Pro funciona 100% online através do navegador. Você pode acessar de qualquer computador, tablet ou celular com internet.",
  },
  {
    question: "Meus dados estão seguros?",
    answer:
      "Sim! Utilizamos criptografia de ponta e servidores seguros para proteger todos os seus dados. Fazemos backup diário automático de todas as informações.",
  },
  {
    question: "Tem limite de pedidos ou clientes?",
    answer:
      "Não! Você pode cadastrar quantos pedidos, clientes e produtos quiser. Não há limites em nenhum dos nossos planos.",
  },
  {
    question: "Como funciona o suporte?",
    answer:
      "Oferecemos suporte via WhatsApp, email e chat dentro do sistema. Nossa equipe responde em até 24 horas em dias úteis. Também temos uma base de conhecimento completa.",
  },
]

export function FAQSection() {
  return (
    <section id="faq" className="py-20 md:py-28 bg-muted/30">
      <div className="container">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-balance text-foreground md:text-4xl lg:text-5xl mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
              Tire suas dúvidas sobre o Ateliê Pro
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-base font-semibold">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
