"use client"

import { skills, type SkillCategory } from "@/lib/data"
import { Reveal } from "@/components/reveal"
import { TechIcon } from "@/components/tech-icons"
import { Code2, Server, Terminal, Layers } from "lucide-react"

export function SkillsSection() {
  return (
      <section id="skills" className="relative border-y border-mauve-6 bg-mauve-2/70 py-20 md:py-28 overflow-hidden">
        {/* Ambient background glow matching skills.jpeg mood */}
        <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-accent-9/15 blur-3xl"
        />
        <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-20 right-1/4 h-80 w-80 rounded-full bg-accent-11/10 blur-3xl"
        />

        <div className="relative mx-auto max-w-5xl px-5">
          {/* Centered Heading matching skills.jpeg */}
          <div className="text-center mb-14">
            <Reveal>
              <h2 className="font-heading text-3xl font-extrabold tracking-tight text-mauve-12 uppercase md:text-4xl">
                Skills
              </h2>
              <p className="mt-3 text-sm italic text-mauve-11 md:text-base">
                Technologies et outils que j&apos;utilise pour concevoir des applications performantes et évolutives.
              </p>
            </Reveal>
          </div>

          {/* Categorized Columns matching skills.jpeg */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {skills.map((categoryGroup, catIndex) => (
                <SkillCategoryColumn
                    key={categoryGroup.category}
                    group={categoryGroup}
                    index={catIndex}
                />
            ))}
          </div>
        </div>
      </section>
  )
}

function getCategoryIcon(category: string) {
  const norm = category.toLowerCase()
  if (norm.includes("front")) return <Code2 className="h-4 w-4 text-accent-11" />
  if (norm.includes("back")) return <Server className="h-4 w-4 text-accent-11" />
  if (norm.includes("devops") || norm.includes("cloud")) return <Terminal className="h-4 w-4 text-accent-11" />
  return <Layers className="h-4 w-4 text-accent-11" />
}

function SkillCategoryColumn({
                               group,
                               index,
                             }: {
  group: SkillCategory
  index: number
}) {
  return (
      <Reveal
          delay={index * 60}
          className="card-hover flex flex-col rounded-2xl border border-mauve-6 bg-mauve-1/90 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-accent-9/40 hover:shadow-lg dark:bg-mauve-1"
      >
        {/* Category Header */}
        <div className="flex items-center gap-2.5 pb-4 border-b border-mauve-6/60">
        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-accent-9/10">
          {getCategoryIcon(group.category)}
        </span>
          <h3 className="font-heading text-base font-bold text-mauve-12 tracking-wide">
            {group.category}
          </h3>
        </div>

        {/* Tech list with authentic logos & modern typography */}
        <ul className="mt-5 flex flex-col gap-3.5">
          {group.items.map((techName) => (
              <li
                  key={techName}
                  className="group flex items-center gap-3 rounded-lg px-2.5 py-1.5 transition-all duration-200 hover:bg-mauve-3 hover:translate-x-1 cursor-default"
              >
                {/* Tech Logo */}
                <div className="flex h-6 w-6 shrink-0 items-center justify-center transition-transform duration-200 group-hover:scale-110">
                  <TechIcon name={techName} className="h-5 w-5" />
                </div>

                {/* Tech Name */}
                <span className="text-sm font-medium text-mauve-12 tracking-wide group-hover:text-accent-11 transition-colors">
              {techName}
            </span>
              </li>
          ))}
        </ul>
      </Reveal>
  )
}
