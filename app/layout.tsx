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
    default: "Sistema para Gestão de Ateliê e Confecção | Ateliê Pro — ERP Criativo",
    template: "%s | Ateliê Pro",
  },
  description:
    "Sistema completo para gestão de ateliê e confecção. ERP criativo com emissor de NF-e, calculadora de precificação, integração WhatsApp e controle de pedidos. Teste grátis por 7 dias.",
  keywords: [
    "sistema para gestão de ateliê",
    "sistema para gestão de confecção",
    "gestão de ateliê",
    "gestão de confecção",
    "ERP para ateliê",
    "ERP para confecção",
    "software para ateliê",
    "software para confecção",
    "sistema de gestão para ateliês",
    "sistema de gestão para confecções",
    "gestão criativa",
    "emissor de notas fiscais",
    "sistema para bordados",
    "precificação de ateliê",
    "software ERP ateliê",
    "software ERP confecção",
    "gestão de pedidos ateliê",
    "controle de estoque confecção",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", type: "image/png", sizes: "96x96" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", type: "image/png", sizes: "180x180" },
    ],
  },
  generator: "v0.app",
  alternates: {
    canonical: "https://ateliepro.online",
  },
  openGraph: {
    title: "Sistema para Gestão de Ateliê e Confecção | Ateliê Pro",
    description:
      "Sistema completo para gestão de ateliê e confecção. ERP criativo com emissor de NF-e, calculadora de precificação e integração WhatsApp. Teste grátis por 7 dias.",
    type: "website",
    url: "https://ateliepro.online",
    siteName: "Ateliê Pro",
    locale: "pt_BR",
    images: [
      {
        url: "https://ateliepro.online/dashboard-screenshot.png",
        width: 1200,
        height: 675,
        alt: "Dashboard do Ateliê Pro - Sistema para gestão de ateliê e confecção",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sistema para Gestão de Ateliê e Confecção | Ateliê Pro",
    description:
      "ERP criativo completo para gestão de ateliês e confecções com emissor de NF-e, calculadora de precificação e integração WhatsApp.",
    images: ["https://ateliepro.online/dashboard-screenshot.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Ateliê Pro",
  "applicationCategory": "BusinessApplication",
  "applicationSubCategory": "ERP para Ateliês e Confecções",
  "operatingSystem": "Web",
  "keywords": "sistema para gestão de ateliê, sistema para gestão de confecção, ERP para ateliê, software para confecção, gestão de ateliê, gestão de confecção, sistema de gestão para ateliês, software ERP ateliê",
  "offers": [
    {
      "@type": "Offer",
      "price": "39.90",
      "priceCurrency": "BRL",
      "priceValidUntil": "2025-12-31",
      "availability": "https://schema.org/InStock",
      "name": "Plano Básico"
    },
    {
      "@type": "Offer",
      "price": "99.90",
      "priceCurrency": "BRL",
      "priceValidUntil": "2025-12-31",
      "availability": "https://schema.org/InStock",
      "name": "Plano Profissional com Emissor de NF-e"
    }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "ratingCount": "500",
    "bestRating": "5",
    "worstRating": "1"
  },
  "description": "ERP criativo para ateliês, bordados e confecções que centraliza pedidos, precificação inteligente, integração WhatsApp e emissor de notas fiscais.",
  "url": "https://ateliepro.online",
  "screenshot": "https://ateliepro.online/dashboard-screenshot.png",
  "featureList": [
    "Calculadora de Precificação Profissional",
    "Integração WhatsApp Business",
    "Gestão Completa de Pedidos",
    "Agenda com Avisos em Tempo Real",
    "Controle de Estoque Inteligente",
    "Emissor de Notas Fiscais (NF-e)",
    "Relatórios Detalhados",
    "Controle Financeiro"
  ]
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={poppins.variable}>
      <head>
        <meta name="google-site-verification" content="FjI2LKCSn8rXl5GiQXA4bcBQ5H279tYb0qSrGDVCT5w" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="font-sans antialiased">
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
