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

export const metadata: Metadata = {
  title: "Ateliê Pro — Gestão para Bordados, Confecções e Uniformes",
  description:
    "Transforme seu ateliê em um negócio profissional. Controle pedidos, precifique com precisão e envie orçamentos via WhatsApp. Teste grátis 7 dias.",
  generator: "v0.app",
  openGraph: {
    title: "Ateliê Pro — Gestão para Bordados, Confecções e Uniformes",
    description:
      "Transforme seu ateliê em um negócio profissional. Controle pedidos, precifique com precisão e envie orçamentos via WhatsApp. Teste grátis 7 dias.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ateliê Pro — Gestão para Bordados, Confecções e Uniformes",
    description:
      "Transforme seu ateliê em um negócio profissional. Controle pedidos, precifique com precisão e envie orçamentos via WhatsApp. Teste grátis 7 dias.",
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
