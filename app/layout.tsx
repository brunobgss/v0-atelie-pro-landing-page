import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
})

// TODO(Cursor): executar auditoria SEO end-to-end (title, meta description, Open Graph, canonical, heading H1 único, atributos alt, dados estruturados aplicáveis, métricas CLS/LCP/INP, acessibilidade, performance e copy). Ajustar textos para priorizar palavras-chave "gestão criativa", "ateliês", "emissor de notas fiscais", "ERP criativo" e validar recomendações via Lighthouse/PageSpeed.

export const metadata: Metadata = {
  title: {
    default: "Ateliê Pro — ERP criativo para ateliês com emissor de notas fiscais",
    template: "%s | Ateliê Pro",
  },
  description:
    "O Ateliê Pro é o ERP criativo para ateliês, bordados e confecções que centraliza pedidos, precificação inteligente, integração WhatsApp e emissor de notas fiscais em um só lugar.",
  keywords: [
    "gestão criativa",
    "ERP para ateliê",
    "emissor de notas fiscais",
    "sistema para bordados",
    "precificação de ateliê",
    "software para confecção",
  ],
  generator: "v0.app",
  alternates: {
    canonical: "https://ateliepro.online",
  },
  openGraph: {
    title: "Ateliê Pro — ERP criativo para ateliês com emissor de notas fiscais",
    description:
      "Centralize pedidos, calcule preços profissionais e emita NF-e com o Ateliê Pro. Um único ERP criativo para gestão completa do seu ateliê.",
    type: "website",
    url: "https://ateliepro.online",
    siteName: "Ateliê Pro",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ateliê Pro — ERP criativo para ateliês",
    description:
      "Sistema SaaS completo para gestão de ateliês com emissor de notas fiscais, integração WhatsApp e dashboards de produção.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={poppins.variable}>
      <body className="font-sans antialiased">
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
