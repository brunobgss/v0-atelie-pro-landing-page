"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { Play, Volume2, VolumeX } from "lucide-react"

export function HeroVideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  return (
    <div className="space-y-3">
      {/* Label above the player */}
      <div className="text-center">
        <p className="text-sm md:text-base text-purple-300 font-medium">
          ▶ Veja como funciona em 2 minutos
        </p>
      </div>

      {/* Video player container */}
      <div className="relative rounded-3xl border border-purple-400/30 bg-white/5 backdrop-blur-sm shadow-2xl shadow-purple-500/30 overflow-hidden hover:shadow-3xl hover:shadow-purple-500/50 transition-all duration-500 hover:scale-[1.02] group">
        {!isPlaying ? (
          <button
            type="button"
            onClick={() => {
              setIsPlaying(true)
              setTimeout(() => videoRef.current?.play(), 100)
            }}
            className="group/btn relative block w-full focus-visible:outline-none z-20"
            aria-label="Assistir demonstração de 2 minutos do Ateliê Pro"
          >
            <div className="relative aspect-video bg-slate-950">
              <Image
                src="/demo-profissional-ateliepro-h-folha.jpg"
                alt="Pré-visualização do vídeo de demonstração do Ateliê Pro"
                fill
                className="object-cover"
                priority
                quality={90}
              />

              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 group-hover/btn:from-purple-500/20 group-hover/btn:to-pink-500/20 transition-all duration-500 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent pointer-events-none" />

              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="flex h-20 w-20 md:h-24 md:w-24 items-center justify-center rounded-full bg-white/95 text-pink-600 shadow-2xl transition-transform duration-300 group-hover/btn:scale-110 group-hover/btn:bg-white pointer-events-auto">
                  <Play className="h-8 w-8 md:h-10 md:w-10 fill-current" aria-hidden="true" />
                </span>
              </div>

              <div className="absolute bottom-4 right-4 rounded-lg bg-slate-900/70 backdrop-blur-sm px-3 py-2 text-xs font-medium text-white pointer-events-none">
                1:53
              </div>
            </div>
          </button>
        ) : (
          <div className="relative aspect-video bg-slate-950 z-20">
            <video
              ref={videoRef}
              className="h-full w-full"
              controls
              autoPlay
              poster="/demo-profissional-ateliepro-h-folha.jpg"
            >
              <source src="/demo-profissional-ateliepro.mp4" type="video/mp4" />
              Seu navegador não suporta vídeo HTML5.
            </video>
          </div>
        )}

        {/* Glow effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-500 -z-10" />
      </div>

      {/* Info text below player */}
      <div className="mt-4 text-center rounded-xl bg-purple-50/60 border border-purple-200/40 p-3 backdrop-blur-sm">
        <p className="text-xs text-purple-700 font-medium">
          ▶️ Assista como o Ateliê Pro organiza tudo em poucos minutos. Sem instalação, sem complicação.
        </p>
      </div>
    </div>
  )
}
