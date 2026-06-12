"use client"

import { useState } from "react"
import Image from "next/image"
import { Play } from "lucide-react"

const HERO_VIDEO_ID = "8SKqrGt4w0k"
const HERO_VIDEO_EMBED_URL = `https://www.youtube.com/embed/${HERO_VIDEO_ID}?autoplay=1&rel=0&modestbranding=1`

export function HeroVideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <div className="space-y-3">
      {/* Label above the player */}
      <div className="text-center">
        <p className="text-sm md:text-base text-purple-300 font-medium">
          ▶ Veja seu ateliê organizado em 2 minutos
        </p>
      </div>

      {/* Video player container */}
      <div className="relative rounded-3xl border border-purple-400/30 bg-white/5 backdrop-blur-sm shadow-2xl shadow-purple-500/30 overflow-hidden hover:shadow-3xl hover:shadow-purple-500/50 transition-all duration-500 hover:scale-[1.02] group">
        {!isPlaying ? (
          <button
            type="button"
            onClick={() => setIsPlaying(true)}
            className="group/btn relative block w-full focus-visible:outline-none z-20"
            aria-label="Assistir demonstração de 2 minutos do Ateliê Pro"
          >
            <div className="relative aspect-video bg-slate-950">
              {/* Thumbnail image - using dashboard as fallback */}
              <Image
                src="/dashboard-screenshot.png"
                alt="Pré-visualização do vídeo de demonstração do Ateliê Pro"
                fill
                className="object-cover"
                priority
                quality={90}
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 group-hover/btn:from-purple-500/20 group-hover/btn:to-pink-500/20 transition-all duration-500 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent pointer-events-none" />

              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="flex h-20 w-20 md:h-24 md:w-24 items-center justify-center rounded-full bg-white/95 text-purple-600 shadow-2xl transition-transform duration-300 group-hover/btn:scale-110 group-hover/btn:bg-white pointer-events-auto">
                  <Play className="h-8 w-8 md:h-10 md:w-10 fill-current" aria-hidden="true" />
                </span>
              </div>

              {/* Duration badge */}
              <div className="absolute bottom-4 right-4 rounded-lg bg-slate-900/70 backdrop-blur-sm px-3 py-2 text-xs font-medium text-white pointer-events-none">
                2:47
              </div>
            </div>
          </button>
        ) : (
          <iframe
            className="relative z-20 aspect-video h-full w-full"
            src={HERO_VIDEO_EMBED_URL}
            title="Demonstração do Ateliê Pro - Veja seu ateliê organizado em 2 minutos"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          />
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
