// ATELIEPRO_CHANGE: Melhoria 2 - Hook customizado para contador de urgência
import { useState, useEffect } from "react"

interface CountdownState {
  days: number
  hours: number
  minutes: number
  seconds: number
  isExpired: boolean
}

export function useUrgencyCountdown(): CountdownState {
  const [countdown, setCountdown] = useState<CountdownState>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isExpired: false,
  })

  useEffect(() => {
    const STORAGE_KEY = "ateliepro_urgency_deadline"
    const now = Date.now()
    let deadline = localStorage.getItem(STORAGE_KEY)

    if (!deadline) {
      // Se não existir prazo salvo, cria um novo (7 dias a partir de agora)
      const sevenDaysFromNow = now + 7 * 24 * 60 * 60 * 1000
      deadline = sevenDaysFromNow.toString()
      localStorage.setItem(STORAGE_KEY, deadline)
    }

    const updateCountdown = () => {
      const deadlineTime = parseInt(deadline || "0", 10)
      const remaining = deadlineTime - Date.now()

      if (remaining <= 0) {
        setCountdown({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isExpired: true,
        })
        return
      }

      const totalSeconds = Math.floor(remaining / 1000)
      const days = Math.floor(totalSeconds / (24 * 60 * 60))
      const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60))
      const minutes = Math.floor((totalSeconds % (60 * 60)) / 60)
      const seconds = totalSeconds % 60

      setCountdown({
        days,
        hours,
        minutes,
        seconds,
        isExpired: false,
      })
    }

    updateCountdown()
    const interval = setInterval(updateCountdown, 1000)

    return () => clearInterval(interval)
  }, [])

  return countdown
}
