"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calculator, FileText, MessageSquare, Zap, Clock, Sparkles } from "lucide-react"

export function CalculatorPreviewSection() {
  const [calculationType, setCalculationType] = useState<"points" | "hours">("points")
  const [points, setPoints] = useState<string>("5000")
  const [pricePerThousand, setPricePerThousand] = useState<string>("1.5")
  const [hours, setHours] = useState<string>("2")
  const [hourlyRate, setHourlyRate] = useState<string>("50")
  const [materialCost, setMaterialCost] = useState<string>("0")
  const [margin, setMargin] = useState<string>("35")

  const [productionCost, setProductionCost] = useState<number>(0)
  const [materials, setMaterials] = useState<number>(0)
  const [subtotal, setSubtotal] = useState<number>(0)
  const [profit, setProfit] = useState<number>(0)
  const [totalPrice, setTotalPrice] = useState<number>(0)

  useEffect(() => {
    let baseCost = 0

    if (calculationType === "points") {
      const pointsNum = Number.parseFloat(points) || 0
      const pricePerK = Number.parseFloat(pricePerThousand) || 0
      baseCost = (pointsNum / 1000) * pricePerK
    } else {
      const hoursNum = Number.parseFloat(hours) || 0
      const rate = Number.parseFloat(hourlyRate) || 0
      baseCost = hoursNum * rate
    }

    const materialsNum = Number.parseFloat(materialCost) || 0
    const marginPercent = Number.parseFloat(margin) || 0
    const sub = baseCost + materialsNum
    const profitAmount = sub * (marginPercent / 100)
    const final = sub + profitAmount

    setProductionCost(baseCost)
    setMaterials(materialsNum)
    setSubtotal(sub)
    setProfit(profitAmount)
    setTotalPrice(final)
  }, [calculationType, points, pricePerThousand, hours, hourlyRate, materialCost, margin])

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-background via-primary/5 to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:radial-gradient(ellipse_at_center,white,transparent)] -z-10" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float -z-10" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float-delayed -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl -z-10" />

      <div className="container relative px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 border border-primary/30 text-primary text-sm font-semibold mb-6 shadow-lg hover:shadow-xl transition-all hover:scale-105">
              <Sparkles className="h-4 w-4 animate-pulse" />
              Calculadora Profissional
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-balance text-foreground md:text-4xl lg:text-5xl mb-4">
              Calculadora de Precificação
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              Ferramenta completa para calcular preços com precisão
            </p>
          </div>

          <div className="grid lg:grid-cols-[1fr,380px] gap-6 perspective-1000">
            <Card className="border-border/50 shadow-2xl hover:shadow-3xl transition-all duration-500 bg-gradient-to-br from-background via-background to-muted/20 transform hover:scale-[1.02] relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-primary/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />

              <CardHeader className="border-b bg-gradient-to-r from-muted/50 to-muted/30 relative">
                <CardTitle className="flex items-center gap-2 text-xl">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Calculator className="h-5 w-5 text-primary" />
                  </div>
                  Tipo de Produto
                </CardTitle>
                <CardDescription>Selecione o método de cálculo</CardDescription>
              </CardHeader>
              <CardContent className="p-6 space-y-6 relative">
                <Tabs
                  value={calculationType}
                  onValueChange={(v) => setCalculationType(v as "points" | "hours")}
                  className="w-full"
                >
                  <TabsList className="grid w-full grid-cols-2 h-12">
                    <TabsTrigger value="points" className="gap-2">
                      <Zap className="h-4 w-4" />
                      Por Pontos
                    </TabsTrigger>
                    <TabsTrigger value="hours" className="gap-2">
                      <Clock className="h-4 w-4" />
                      Por Horas
                    </TabsTrigger>
                  </TabsList>

                  <div className="mt-6">
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <Clock className="h-5 w-5 text-primary" />
                      Custos de Produção
                    </h3>

                    <TabsContent value="points" className="space-y-4 mt-0">
                      <div className="grid gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="points" className="text-sm font-medium">
                            Número de Pontos
                          </Label>
                          <Input
                            id="points"
                            type="number"
                            value={points}
                            onChange={(e) => setPoints(e.target.value)}
                            placeholder="0"
                            className="h-11"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="pricePerK" className="text-sm font-medium">
                            Preço por 1000 pontos (R$)
                          </Label>
                          <Input
                            id="pricePerK"
                            type="number"
                            step="0.1"
                            value={pricePerThousand}
                            onChange={(e) => setPricePerThousand(e.target.value)}
                            placeholder="1.5"
                            className="h-11"
                          />
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="hours" className="space-y-4 mt-0">
                      <div className="grid gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="hours" className="text-sm font-medium">
                            Tempo Estimado (horas)
                          </Label>
                          <Input
                            id="hours"
                            type="number"
                            step="0.5"
                            value={hours}
                            onChange={(e) => setHours(e.target.value)}
                            placeholder="2"
                            className="h-11"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="hourlyRate" className="text-sm font-medium">
                            Valor por Hora (R$)
                          </Label>
                          <Input
                            id="hourlyRate"
                            type="number"
                            value={hourlyRate}
                            onChange={(e) => setHourlyRate(e.target.value)}
                            placeholder="50"
                            className="h-11"
                          />
                        </div>
                      </div>
                    </TabsContent>
                  </div>
                </Tabs>

                <div className="space-y-4 pt-4 border-t">
                  <div className="space-y-2">
                    <Label htmlFor="materials" className="text-sm font-medium">
                      Materiais (R$)
                    </Label>
                    <Input
                      id="materials"
                      type="number"
                      step="0.01"
                      value={materialCost}
                      onChange={(e) => setMaterialCost(e.target.value)}
                      placeholder="0.00"
                      className="h-11"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="margin" className="text-sm font-medium">
                      Lucro (%)
                    </Label>
                    <Input
                      id="margin"
                      type="number"
                      value={margin}
                      onChange={(e) => setMargin(e.target.value)}
                      placeholder="35"
                      className="h-11"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-4">
              <Card className="border-primary/20 shadow-2xl hover:shadow-3xl transition-all duration-500 bg-gradient-to-br from-primary/5 via-background to-secondary/5 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent opacity-20 blur-xl group-hover:opacity-30 transition-opacity" />

                <CardHeader className="border-b border-primary/10 bg-gradient-to-r from-primary/5 to-secondary/5 relative">
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <div className="p-2.5 rounded-lg bg-primary/20 shadow-lg">
                      <Calculator className="h-5 w-5 text-primary" />
                    </div>
                    Resultado Final
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4 relative">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-muted-foreground">Custo de produção:</span>
                      <span className="font-medium">R$ {productionCost.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-muted-foreground">Materiais:</span>
                      <span className="font-medium">R$ {materials.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm pt-2 border-t">
                      <span className="text-muted-foreground">Subtotal:</span>
                      <span className="font-medium">R$ {subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-primary font-medium">Lucro ({margin}%):</span>
                      <span className="font-semibold text-primary">R$ {profit.toFixed(2)}</span>
                    </div>
                  </div>

                  <div className="rounded-xl bg-gradient-to-br from-primary/20 via-primary/10 to-secondary/20 border-2 border-primary/40 p-6 mt-6 shadow-xl relative overflow-hidden group/price">
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-0 group-hover/price:opacity-100 transition-opacity" />
                    <div className="text-center relative">
                      <p className="text-sm text-muted-foreground mb-2 font-medium">Valor Total:</p>
                      <p className="text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent drop-shadow-lg">
                        R$ {totalPrice.toFixed(2)}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 space-y-2">
                    <Button className="w-full gap-2 h-11 bg-primary hover:bg-primary/90">
                      <FileText className="h-4 w-4" />
                      Salvar Produto
                    </Button>
                    <Button variant="outline" className="w-full gap-2 h-11 bg-transparent">
                      <MessageSquare className="h-4 w-4" />
                      Gerar Orçamento
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-accent/20 shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-accent/5 via-background to-primary/5 hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <div className="rounded-full bg-gradient-to-br from-primary to-accent p-2.5 shadow-lg">
                      <Zap className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-1">Análise de Rentabilidade</h4>
                      <p className="text-xs text-muted-foreground">
                        Margem de lucro: <span className="font-semibold text-primary">{margin}%</span>
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {Number.parseFloat(margin) >= 30 ? "✓ Margem saudável" : "⚠ Considere aumentar a margem"}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
