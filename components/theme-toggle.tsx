"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { Sun, Moon, Monitor } from "lucide-react"

const options = [
  { value: "light", label: "Thème clair", icon: Sun },
  { value: "system", label: "Thème système", icon: Monitor },
  { value: "dark", label: "Thème sombre", icon: Moon },
] as const

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  return (
    <div
      className="flex items-center gap-0.5 rounded-full border border-mauve-6 bg-mauve-2 p-0.5"
      role="radiogroup"
      aria-label="Choix du thème"
    >
      {options.map(({ value, label, icon: Icon }) => {
        const active = mounted && theme === value
        return (
          <button
            key={value}
            type="button"
            role="radio"
            aria-checked={active}
            aria-label={label}
            title={label}
            onClick={() => setTheme(value)}
            className={
              "flex h-7 w-7 items-center justify-center rounded-full " +
              (active
                ? "bg-accent-9 text-accent-contrast"
                : "text-mauve-11 hover:bg-mauve-4 hover:text-mauve-12")
            }
          >
            <Icon className="h-3.5 w-3.5" strokeWidth={2.25} />
          </button>
        )
      })}
    </div>
  )
}
