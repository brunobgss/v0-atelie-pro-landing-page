import Link from "next/link"
import { Scissors, Facebook, Instagram, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                <Scissors className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-lg md:text-xl font-bold text-foreground">Ateliê Pro</span>
            </Link>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              O sistema completo de gestão para ateliês, confecções e lojas de bordado.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4 text-sm sm:text-base">Produto</h3>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li>
                <Link href="#funcionalidades" className="text-muted-foreground hover:text-foreground transition-colors py-2 block">
                  Funcionalidades
                </Link>
              </li>
              <li>
                <Link href="#precos" className="text-muted-foreground hover:text-foreground transition-colors py-2 block">
                  Preços
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors py-2 block">
                  Demonstração
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors py-2 block">
                  Atualizações
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4 text-sm sm:text-base">Empresa</h3>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors py-2 block">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors py-2 block">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors py-2 block">
                  Contato
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors py-2 block">
                  Carreiras
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4 text-sm sm:text-base">Suporte</h3>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors py-2 block">
                  Central de Ajuda
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-muted-foreground hover:text-foreground transition-colors py-2 block">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors py-2 block">
                  Tutoriais
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors py-2 block">
                  Contato
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs sm:text-sm text-muted-foreground text-center md:text-left">© 2025 Ateliê Pro. Todos os direitos reservados.</p>
          <div className="flex items-center gap-6 md:gap-4">
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors p-2">
              <Facebook className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors p-2">
              <Instagram className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors p-2">
              <Youtube className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
