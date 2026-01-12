import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "Qual o melhor sistema para gestão de ateliê?",
    answer:
      "O Ateliê Pro é o sistema completo para gestão de ateliê e confecção, desenvolvido especificamente para ateliês, bordados e confecções. Com funcionalidades como calculadora de precificação, emissor de NF-e e integração WhatsApp, é a solução ideal para profissionalizar seu negócio. Teste grátis por 7 dias.",
  },
  {
    question: "Como funciona o sistema para gestão de confecção?",
    answer:
      "O sistema para gestão de confecção Ateliê Pro centraliza pedidos, controle de estoque, precificação inteligente e emissão de notas fiscais. Tudo em um único lugar, facilitando a gestão completa do seu negócio. Você pode gerenciar múltiplos clientes, produtos e pedidos de forma organizada e profissional.",
  },
  {
    question: "O sistema funciona para ateliês de costura e bordados?",
    answer:
      "Sim! O Ateliê Pro foi desenvolvido especialmente para ateliês de costura, bordados e confecções. Inclui calculadora de precificação por pontos (para bordados) e por horas trabalhadas, controle de materiais, gestão de pedidos personalizados e muito mais. Perfeito para ateliês que precisam de um sistema completo de gestão.",
  },
  {
    question: "Como funciona o teste grátis?",
    answer:
      "Você tem 7 dias para testar todas as funcionalidades do Ateliê Pro sem precisar cadastrar cartão de crédito. Após o período de teste, você pode escolher continuar com um dos nossos planos.",
  },
  {
    question: "O sistema emite notas fiscais?",
    answer:
      "Sim! O Ateliê Pro inclui emissor de notas fiscais eletrônicas (NF-e) integrado. No plano profissional, você pode emitir notas fiscais ilimitadas diretamente do sistema, sem precisar de outro software. O módulo fiscal inclui onboarding guiado e suporte especializado.",
  },
  {
    question: "Posso cancelar a qualquer momento?",
    answer:
      "Sim! Você pode cancelar sua assinatura a qualquer momento, sem multas ou taxas de cancelamento. Seus dados ficam salvos por 30 dias caso queira retornar.",
  },
  {
    question: "Preciso instalar algum programa?",
    answer:
      "Não! O Ateliê Pro funciona 100% online através do navegador. Você pode acessar de qualquer computador, tablet ou celular com internet. Não há necessidade de instalação ou configuração complexa.",
  },
  {
    question: "Meus dados estão seguros?",
    answer:
      "Sim! Utilizamos criptografia de ponta e servidores seguros para proteger todos os seus dados. Fazemos backup diário automático de todas as informações. Seus dados de clientes, pedidos e financeiro estão sempre protegidos.",
  },
  {
    question: "Tem limite de pedidos ou clientes?",
    answer:
      "Não! Você pode cadastrar quantos pedidos, clientes e produtos quiser. Não há limites em nenhum dos nossos planos. O sistema cresce junto com seu negócio.",
  },
  {
    question: "Como funciona o suporte?",
    answer:
      "Oferecemos suporte via WhatsApp, email e chat dentro do sistema. Nossa equipe responde em até 24 horas em dias úteis. Para clientes do plano profissional, oferecemos suporte prioritário e treinamento especializado. Também temos uma base de conhecimento completa.",
  },
]

export function FAQSection() {
  return (
    <section id="faq" className="py-20 md:py-28 bg-muted/30">
      <div className="container px-4 sm:px-6 lg:px-8">
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
