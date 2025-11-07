"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { MessageCircle } from "lucide-react"

import { cn } from "@/lib/utils"

const WHATSAPP_URL = "https://wa.me/5535998498798"

export function WhatsAppFloatingButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 120)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className={cn(
        "pointer-events-none fixed bottom-6 right-4 z-50 flex flex-col items-end gap-3 sm:bottom-8 sm:right-8",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
        "transition-all duration-300 ease-out"
      )}
      aria-live="polite"
    >
      <Link
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto inline-flex items-center gap-3 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white shadow-2xl shadow-emerald-500/30 ring-offset-slate-900 transition-all duration-300 hover:-translate-y-1 hover:shadow-emerald-500/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
        data-analytics="floating-whatsapp"
        aria-label="Falar com o time do Ateliê Pro pelo WhatsApp"
      >
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
          <MessageCircle className="h-5 w-5" aria-hidden="true" />
        </span>
        <span className="hidden text-left sm:flex sm:flex-col">
          <strong className="text-xs uppercase tracking-wide text-white/80">Precisa de ajuda?</strong>
          <span className="text-sm font-semibold leading-tight">Fale no WhatsApp</span>
        </span>
        <span className="sm:hidden text-sm font-semibold">WhatsApp</span>
      </Link>

      <span className="pointer-events-auto rounded-full bg-slate-900/80 px-4 py-2 text-xs text-white shadow-lg backdrop-blur-sm">
        Atendimento comercial 9h-18h (BRT)
      </span>
    </div>
  )
}


