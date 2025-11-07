"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Calculator,
  LayoutDashboard,
  Package,
  Calendar,
  DollarSign,
  FileText,
  TrendingUp,
  MessageSquare,
} from "lucide-react"

const demoScreens = [
  {
    id: "dashboard",
    title: "Dashboard Completo",
    description: "Visão geral do seu negócio com métricas em tempo real, pedidos em andamento e ações rápidas.",
    icon: LayoutDashboard,
    image: "/dashboard-screenshot.png",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: "calculator",
    title: "Calculadora de Preços",
    description: "Calcule preços profissionais por pontos ou horas, com análise de rentabilidade automática.",
    icon: Calculator,
    image: "/calculator-screenshot.png",
    color: "from-blue-500 to-purple-500",
  },
  {
    id: "catalog",
    title: "Catálogo de Produtos",
    description: "Organize seus produtos com preços, tempo de produção e materiais necessários.",
    icon: Package,
    image: "/catalog-screenshot.png",
    color: "from-green-500 to-teal-500",
  },
  {
    id: "agenda",
    title: "Agenda de Entregas",
    description: "Gerencie prazos com lembretes automáticos e cronograma visual de entregas.",
    icon: Calendar,
    image: "/agenda-screenshot.png",
    color: "from-orange-500 to-red-500",
  },
  {
    id: "quotes",
    title: "Orçamentos",
    description: "Crie e gerencie orçamentos profissionais com aprovação via WhatsApp.",
    icon: FileText,
    image: "/quotes-screenshot.png",
    color: "from-indigo-500 to-purple-500",
  },
  {
    id: "financial",
    title: "Controle Financeiro",
    description: "Acompanhe pagamentos, cobranças e status financeiro de cada pedido.",
    icon: DollarSign,
    image: "/financial-screenshot.png",
    color: "from-emerald-500 to-green-500",
  },
  {
    id: "reports",
    title: "Relatórios Financeiros",
    description: "Análise completa de vendas, lucros, produtos mais vendidos e clientes ativos.",
    icon: TrendingUp,
    image: "/reports-screenshot.png",
    color: "from-violet-500 to-purple-500",
  },
  {
    id: "whatsapp",
    title: "Integração WhatsApp",
    description: "Envie orçamentos profissionais automaticamente para seus clientes.",
    icon: MessageSquare,
    image: "/whatsapp-message-screenshot.png",
    color: "from-green-500 to-emerald-500",
  },
]

export function AppDemoSection() {
  const [activeScreen, setActiveScreen] = useState(demoScreens[0])

  return (
    <section className="py-24 bg-gradient-to-b from-white to-purple-50/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Conheça o Sistema por Dentro</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Explore todas as funcionalidades do Ateliê Pro e veja como cada ferramenta foi pensada para facilitar sua
            gestão
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Navigation Tabs */}
          <div className="lg:col-span-1 space-y-2">
            {demoScreens.map((screen) => {
              const Icon = screen.icon
              const isActive = activeScreen.id === screen.id

              return (
                <button
                  key={screen.id}
                  onClick={() => setActiveScreen(screen)}
                  className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${
                    isActive
                      ? "bg-white shadow-lg shadow-purple-100 border-2 border-purple-200"
                      : "bg-white/50 hover:bg-white hover:shadow-md border-2 border-transparent"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`p-2 rounded-lg bg-gradient-to-br ${screen.color} flex-shrink-0`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className={`font-semibold mb-1 ${isActive ? "text-purple-600" : "text-slate-900"}`}>
                        {screen.title}
                      </h3>
                      <p className="text-sm text-slate-600 line-clamp-2">{screen.description}</p>
                    </div>
                  </div>
                </button>
              )
            })}
          </div>

          {/* Screenshot Display */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-8 shadow-2xl">
              <div className="bg-white rounded-xl overflow-hidden shadow-xl">
                <div className="relative aspect-[16/10] bg-slate-100">
                  <Image
                    src={activeScreen.image || "/placeholder.svg"}
                    alt={activeScreen.title}
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>

              <div className="mt-6 text-white">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`p-2 rounded-lg bg-white/20 backdrop-blur-sm`}>
                    {(() => {
                      const Icon = activeScreen.icon
                      return <Icon className="w-6 h-6" />
                    })()}
                  </div>
                  <h3 className="text-2xl font-bold">{activeScreen.title}</h3>
                </div>
                <p className="text-purple-100 text-lg leading-relaxed">{activeScreen.description}</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-slate-600 mb-6 text-lg">Pronto para experimentar todas essas funcionalidades?</p>
          <Link 
            href="https://app.ateliepro.online" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Começar Teste Grátis de 7 Dias
          </Link>
        </div>
      </div>
    </section>
  )
}
