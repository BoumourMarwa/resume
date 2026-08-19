"use client"

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react"

type RevealProps = {
  children: ReactNode
  /** Stagger delay in ms (keep short: 30-50ms steps). */
  delay?: number
  /** Element to render as (e.g. "li", "article"). Defaults to "div". */
  as?: ElementType
  className?: string
}

/**
 * Lightweight enter animation using IntersectionObserver (no scroll listener,
 * no external library). Reveals once, then disconnects. The actual transition
 * (translateY 8px + opacity, 180ms ease-out) lives in the `.reveal` utility.
 */
export function Reveal({ children, delay = 0, as, className }: RevealProps) {
  const Tag = (as ?? "div") as ElementType
  const ref = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // If motion is reduced, or IO is unavailable, show immediately.
    if (
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
    ) {
      setVisible(true)
      return
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          io.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      data-visible={visible}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={`reveal${className ? ` ${className}` : ""}`}
    >
      {children}
    </Tag>
  )
}
