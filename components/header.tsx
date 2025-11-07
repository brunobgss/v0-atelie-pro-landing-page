import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-purple-200/20 bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/60 shadow-lg shadow-purple-500/10">
      <div className="container flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center group">
          <Image src="/logo-atelie-pro.png" alt="Ateliê PRO" width={180} height={40} className="h-8 w-auto group-hover:scale-105 transition-transform duration-300" priority />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="#funcionalidades"
            className="text-sm font-medium text-slate-600 hover:text-purple-600 transition-colors duration-300 hover:scale-105 transform"
          >
            Funcionalidades
          </Link>
          <Link
            href="#emissor-notas"
            className="text-sm font-medium text-slate-600 hover:text-purple-600 transition-colors duration-300 hover:scale-105 transform"
          >
            Emissor NF-e
          </Link>
          <Link
            href="#beneficios"
            className="text-sm font-medium text-slate-600 hover:text-purple-600 transition-colors duration-300 hover:scale-105 transform"
          >
            Benefícios
          </Link>
          <Link
            href="#precos"
            className="text-sm font-medium text-slate-600 hover:text-purple-600 transition-colors duration-300 hover:scale-105 transform"
          >
            Preços
          </Link>
          <Link
            href="#faq"
            className="text-sm font-medium text-slate-600 hover:text-purple-600 transition-colors duration-300 hover:scale-105 transform"
          >
            FAQ
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" asChild className="text-slate-600 hover:text-purple-600 hover:bg-purple-50 transition-all duration-300">
            <Link href="#login">Entrar</Link>
          </Button>
          <Button size="sm" asChild className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <Link href="https://app.ateliepro.online" target="_blank" rel="noopener noreferrer">Teste Grátis</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
