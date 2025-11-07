import Image from "next/image"
import { Calendar, Bell, Clock, CheckCircle2 } from "lucide-react"

export function AgendaFeatureSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-orange-50/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div>
              <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full mb-6">
                <Calendar className="w-4 h-4" />
                <span className="font-semibold text-sm">Gestão de Prazos Inteligente</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Nunca Mais Atrase uma Entrega</h2>

              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                A Agenda de Entregas do Ateliê Pro organiza automaticamente todos os seus pedidos por prazo, envia
                lembretes inteligentes e mantém você sempre no controle da produção.
              </p>

              {/* Benefits */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-orange-100 rounded-lg flex-shrink-0">
                    <Bell className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Lembretes Automáticos</h3>
                    <p className="text-slate-600">
                      Receba alertas de pedidos próximos ao prazo, atrasados ou que precisam de atenção urgente.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-blue-100 rounded-lg flex-shrink-0">
                    <Clock className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Cronograma Visual</h3>
                    <p className="text-slate-600">
                      Visualize todos os pedidos em um cronograma organizado por cliente, status e data de entrega.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-green-100 rounded-lg flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Status em Tempo Real</h3>
                    <p className="text-slate-600">
                      Acompanhe o progresso de cada pedido: aguardando aprovação, em produção ou pronto para entrega.
                    </p>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 p-6 bg-white rounded-xl shadow-lg border border-slate-200">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-1">0%</div>
                  <div className="text-sm text-slate-600">Atrasos com lembretes</div>
                </div>
                <div className="text-center border-x border-slate-200">
                  <div className="text-3xl font-bold text-blue-600 mb-1">100%</div>
                  <div className="text-sm text-slate-600">Prazos organizados</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-1">3min</div>
                  <div className="text-sm text-slate-600">Para visualizar agenda</div>
                </div>
              </div>
            </div>

            {/* Right: Screenshot */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-red-400 rounded-2xl blur-3xl opacity-20"></div>
              <div className="relative bg-white rounded-2xl shadow-2xl p-4 border border-slate-200">
                <div className="relative aspect-[9/16] rounded-xl overflow-hidden bg-slate-100">
                  <Image
                    src="/agenda-screenshot.png"
                    alt="Agenda de Entregas do Ateliê Pro"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 border border-slate-200">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-orange-100 rounded-lg">
                    <Calendar className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-600">Entregas Hoje</div>
                    <div className="text-2xl font-bold text-slate-900">0 atrasadas</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
