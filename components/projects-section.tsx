"use client"

import Image from "next/image"
import { Github, ExternalLink, Link as LinkIcon } from "lucide-react"
import { projects, type Project } from "@/lib/data"
import { Reveal } from "@/components/reveal"

export function ProjectsSection() {
  return (
    <section id="projects" className="relative border-y border-mauve-6 bg-mauve-1 py-20 md:py-28 overflow-hidden">
      {/* Ambient background glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 right-1/4 h-96 w-96 rounded-full bg-accent-9/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 left-1/3 h-96 w-96 rounded-full bg-accent-11/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-5">
        {/* Section Heading matching Parcours & Skills */}
        <div className="text-center mb-14">
          <Reveal>
            <h2 className="font-heading text-3xl font-extrabold tracking-tight text-mauve-12 uppercase md:text-4xl">
              Portfolio
            </h2>
            <p className="mt-3 text-sm italic text-mauve-11 md:text-base max-w-2xl mx-auto">
              Ci-dessous, quelques exemples de réalisations effectuées durant la formation, le stage et plus encore :
            </p>
          </Reveal>
        </div>

        {/* 3-Column Responsive Grid with reference neo-card design */}
        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Reveal
      as="article"
      delay={index * 60}
      className="group card-hover flex flex-col overflow-hidden rounded-[26px] border-2 border-mauve-6 bg-mauve-1 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-accent-9/60 hover:shadow-xl dark:bg-mauve-2 dark:border-mauve-6"
    >
      {/* Top Visual Compartment matching the reference card design */}
      <div className="relative aspect-[4/3] w-full bg-[#f2f1ee] dark:bg-mauve-3/50 p-3.5 flex items-center justify-center overflow-hidden border-b-2 border-mauve-6/60">        <div className="relative h-full w-full overflow-hidden rounded-[16px] border border-black/10 dark:border-white/10 shadow-sm">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={`Aperçu du projet ${project.title}`}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />

          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />



          {/* Floating quick action buttons on image hover */}
          <div className="absolute bottom-2.5 right-2.5 flex items-center gap-1.5 opacity-0 transition-all duration-300 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub source"
                className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-mauve-12 shadow-md backdrop-blur-sm transition-transform hover:scale-110 dark:bg-mauve-12 dark:text-mauve-1"
              >
                <Github className="h-3.5 w-3.5" />
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Live preview"
                className="flex h-7 w-7 items-center justify-center rounded-full bg-accent-9 text-accent-contrast shadow-md backdrop-blur-sm transition-transform hover:scale-110"
              >
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Content Compartment matching reference design */}
      <div className="flex flex-1 flex-col p-4 md:p-5 text-left bg-mauve-1 dark:bg-mauve-2">        {/* Title with Link Icon */}
        <div className="flex items-center gap-2">
          <LinkIcon className="h-4 w-4 text-accent-11 shrink-0 transition-transform duration-200 group-hover:rotate-45" />
          <h3 className="font-heading text-base md:text-lg font-bold text-mauve-12 group-hover:text-accent-11 transition-colors leading-snug">
            {project.title}
          </h3>
        </div>

        {/* Subtitle / Tech stack in parentheses */}
        {project.subtitle && (
          <p className="mt-1.5 text-xs md:text-sm font-semibold text-accent-11">
            {project.subtitle}
          </p>
        )}

        {/* Description */}
        <p className="mt-2.5 text-xs md:text-sm text-mauve-11 leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* Tech tags */}
          <div className="mt-4 flex flex-wrap gap-1.5">          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-mauve-6/70 bg-mauve-2/80 px-2 py-0.5 text-[11px] font-medium text-mauve-11 transition-colors group-hover:border-accent-9/20 group-hover:text-mauve-12 dark:bg-mauve-3/50"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        <div className="mt-auto pt-4 flex items-center justify-start gap-3 text-xs font-semibold">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-mauve-6 bg-mauve-2/60 px-3 py-1.5 text-mauve-12 hover:bg-mauve-3 hover:border-accent-9/30 transition-all cursor-pointer"
            >
              <Github className="h-3.5 w-3.5" />
              Code GitHub
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg bg-accent-9 px-3 py-1.5 text-accent-contrast hover:bg-accent-10 transition-all cursor-pointer shadow-sm"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              Voir en ligne
            </a>
          )}
        </div>
      </div>
    </Reveal>
  )
}
