"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-purple-200/20 bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/60 shadow-lg shadow-purple-500/10">
      <div className="container flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center group" aria-label="Ateliê Pro - Página inicial">
          <Image src="/logo-atelie-pro.png" alt="Ateliê PRO" width={180} height={40} className="h-8 w-auto group-hover:scale-105 transition-transform duration-300" priority />
        </Link>

        <nav className="hidden md:flex items-center gap-8" aria-label="Navegação principal">
          <Link
            href="#funcionalidades"
            className="text-sm font-medium text-slate-600 hover:text-purple-600 transition-colors duration-300 hover:scale-105 transform"
            aria-label="Ver funcionalidades"
          >
            Funcionalidades
          </Link>
          <Link
            href="#emissor-notas"
            className="text-sm font-medium text-slate-600 hover:text-purple-600 transition-colors duration-300 hover:scale-105 transform"
            aria-label="Sobre o emissor de notas fiscais"
          >
            Emissor NF-e
          </Link>
          <Link
            href="#beneficios"
            className="text-sm font-medium text-slate-600 hover:text-purple-600 transition-colors duration-300 hover:scale-105 transform"
            aria-label="Ver benefícios"
          >
            Benefícios
          </Link>
          <Link
            href="#precos"
            className="text-sm font-medium text-slate-600 hover:text-purple-600 transition-colors duration-300 hover:scale-105 transform"
            aria-label="Ver preços e planos"
          >
            Preços
          </Link>
          <Link
            href="#faq"
            className="text-sm font-medium text-slate-600 hover:text-purple-600 transition-colors duration-300 hover:scale-105 transform"
            aria-label="Perguntas frequentes"
          >
            FAQ
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" asChild className="text-slate-600 hover:text-purple-600 hover:bg-purple-50 transition-all duration-300">
            <Link 
              href="https://app.ateliepro.online" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Entrar no sistema Ateliê Pro"
              data-analytics="cta-header-login"
            >
              Entrar
            </Link>
          </Button>
          <Button size="sm" asChild className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <Link 
              href="https://app.ateliepro.online" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Começar teste grátis de 7 dias"
              data-analytics="cta-header-trial"
            >
              Teste Grátis
            </Link>
          </Button>
          
          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 rounded-lg text-slate-600 hover:text-purple-600 hover:bg-purple-50 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Abrir menu de navegação"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-purple-200/20 bg-white/95 backdrop-blur-md">
          <nav className="container px-4 py-4 space-y-3" aria-label="Menu mobile">
            <Link
              href="#funcionalidades"
              className="block px-4 py-2 text-sm font-medium text-slate-600 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Funcionalidades
            </Link>
            <Link
              href="#emissor-notas"
              className="block px-4 py-2 text-sm font-medium text-slate-600 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Emissor NF-e
            </Link>
            <Link
              href="#beneficios"
              className="block px-4 py-2 text-sm font-medium text-slate-600 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Benefícios
            </Link>
            <Link
              href="#precos"
              className="block px-4 py-2 text-sm font-medium text-slate-600 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Preços
            </Link>
            <Link
              href="#faq"
              className="block px-4 py-2 text-sm font-medium text-slate-600 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQ
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
