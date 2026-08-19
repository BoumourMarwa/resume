"use client"

import { useState } from "react"
import Image from "next/image"
import { MapPin, Download, Clock, GraduationCap, Briefcase, Sparkles, Award } from "lucide-react"
import { education, experiences, type Education, type Experience } from "@/lib/data"
import { Reveal } from "@/components/reveal"

export function CareerSection() {
  const [activeTab, setActiveTab] = useState<"education" | "experience">("education")

  return (
    <section id="parcours" className="relative border-y border-mauve-6 bg-mauve-2/50 py-20 md:py-28 overflow-hidden">
      {/* Anchor targets for direct links */}
      <span id="education" className="absolute -top-20" aria-hidden="true" />
      <span id="experience" className="absolute -top-20" aria-hidden="true" />

      {/* Decorative ambient background glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-accent-9/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 left-1/4 h-80 w-80 rounded-full bg-accent-11/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-5xl px-5">
        {/* Section Heading matching formation-experience.png */}
        <div className="text-center mb-10">
          <Reveal>
            <h2 className="font-heading text-3xl font-extrabold tracking-tight text-mauve-12 uppercase md:text-4xl">
              {activeTab === "education" ? "Formation" : "Expérience"}
            </h2>
            <p className="mt-3 text-sm italic text-mauve-11 md:text-base">
              {activeTab === "education"
                ? "Voici mon parcours académique d'excellence en ingénierie et informatique."
                : "Voici mes expériences professionnelles, projets en entreprise et stages."}
            </p>
          </Reveal>

          {/* Interactive Switcher / Tab Pill */}
          <div className="mt-8 flex justify-center">
            <div
              role="tablist"
              aria-label="Sélectionner le parcours"
              className="inline-flex items-center rounded-full border border-mauve-6 bg-mauve-1 p-1.5 shadow-md backdrop-blur-sm"
            >
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === "education"}
                onClick={() => setActiveTab("education")}
                className={`relative flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  activeTab === "education"
                    ? "bg-accent-9 text-accent-contrast shadow-md scale-[1.02]"
                    : "text-mauve-11 hover:text-mauve-12 hover:bg-mauve-3/60"
                }`}
              >
                <GraduationCap className="h-4 w-4" />
                Formation
              </button>

              <button
                type="button"
                role="tab"
                aria-selected={activeTab === "experience"}
                onClick={() => setActiveTab("experience")}
                className={`relative flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  activeTab === "experience"
                    ? "bg-accent-9 text-accent-contrast shadow-md scale-[1.02]"
                    : "text-mauve-11 hover:text-mauve-12 hover:bg-mauve-3/60"
                }`}
              >
                <Briefcase className="h-4 w-4" />
                Expérience
              </button>
            </div>
          </div>
        </div>

        {/* Central Alternating Timeline View */}
        <div className="relative mt-14 transition-all duration-300">
          {/* Central Vertical Timeline Line */}
          <div
            aria-hidden="true"
            className="absolute left-7 top-8 bottom-8 w-0.5 bg-gradient-to-b from-accent-9 via-mauve-7 to-accent-9/20 md:left-1/2 md:-translate-x-1/2"
          />

          {/* Render Education Timeline */}
          {activeTab === "education" && (
            <div className="flex flex-col gap-12 md:gap-16">
              {education.map((item, index) => {
                const isEven = index % 2 === 0
                return (
                  <EducationTimelineItem
                    key={item.title + item.period}
                    item={item}
                    index={index}
                    isEven={isEven}
                  />
                )
              })}
            </div>
          )}

          {/* Render Experience Timeline */}
          {activeTab === "experience" && (
            <div className="flex flex-col gap-12 md:gap-16">
              {experiences.map((item, index) => {
                const isEven = index % 2 === 0
                return (
                  <ExperienceTimelineItem
                    key={item.company + item.period}
                    item={item}
                    index={index}
                    isEven={isEven}
                  />
                )
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

/* -------------------------------------------------------------------------- */
/* Education Timeline Item Component                                          */
/* -------------------------------------------------------------------------- */

function EducationTimelineItem({
  item,
  index,
  isEven,
}: {
  item: Education
  index: number
  isEven: boolean
}) {
 
  return (
    <div className="relative flex flex-col md:grid md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-8 group">
      {/* LEFT COLUMN (Desktop: visible when isEven) */}
      <div className={`pl-20 md:pl-0 ${isEven ? "block" : "md:hidden"}`}>
        {isEven && <EducationContent item={item} />}
      </div>

      {/* CENTER CIRCULAR LOGO BADGE (matching formation-experience.png with actual images) */}
      <div className="absolute left-0 top-0 md:static flex items-center justify-center shrink-0 z-10">
        <div className="relative flex h-16 w-16 md:h-24 md:w-24 items-center justify-center rounded-full border-4 border-mauve-1 bg-white shadow-xl ring-4 ring-accent-9/20 transition-all duration-300 group-hover:scale-110 group-hover:ring-accent-9/40 overflow-hidden dark:border-mauve-2 dark:bg-mauve-1">
          {item.image ? (
            <div className="relative h-full w-full p-1.5 flex items-center justify-center">
              <Image
                src={item.image}
                alt={`Logo ${item.school}`}
                fill
                sizes="(min-width: 768px) 96px, 64px"
                className="object-contain p-1 rounded-full"
              />
            </div>
          ) : (
            <div
              className={`flex h-full w-full items-center justify-center rounded-full bg-gradient-to-tr ${
                item.logoGradient || "from-accent-9 to-accent-11"
              } p-1 text-white shadow-inner`}
            >
              <span className="font-heading text-xs md:text-sm font-black tracking-wider uppercase">
                {item.logoText || "EDU"}
              </span>
            </div>
          )}

          {/* Glowing pulse indicator node */}
          <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-accent-9">
            <span className="h-2 w-2 rounded-full bg-white animate-ping opacity-75" />
          </span>
        </div>
      </div>

      {/* RIGHT COLUMN (Desktop: visible when !isEven, Mobile: always contains content) */}
      <div className={`pl-20 md:pl-0 ${!isEven ? "block" : "hidden md:block"}`}>
        {!isEven ? (
          <EducationContent item={item} />
        ) : (
          <div className="hidden md:block" />
        )}
      </div>
    </div>
  )
}

function EducationContent({ item }: { item: Education }) {
  return (
    <div
      className="card-hover rounded-[26px] border-2 border-mauve-6 bg-mauve-1 p-5 md:p-6 shadow-sm text-left transition-all duration-300 hover:-translate-y-2 hover:border-accent-9/60 hover:shadow-xl dark:bg-mauve-2 dark:border-mauve-6"
    >
      {/* Date in Bold Heading style from design — left-aligned */}
      <div className="flex items-center gap-2 mb-1.5 justify-start">
        <span className="font-heading text-sm md:text-base font-extrabold tracking-wide text-mauve-12">
          {item.year || item.period}
        </span>
      </div>

      {/* Degree / Title */}
      <h3 className="font-heading text-base md:text-lg font-bold text-mauve-12 leading-snug">
        {item.title}
      </h3>

      {/* School and Location */}
      <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs md:text-sm justify-start">
        <span className="font-semibold text-accent-11">{item.school}</span>
        <span className="inline-flex items-center gap-1 text-mauve-10">
          <MapPin className="h-3.5 w-3.5" />
          {item.location}
        </span>
      </div>

      {/* Distinction / Highlight Badge */}
      {item.highlight && (
        <div className="mt-3 flex justify-start">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-700 dark:text-amber-300">
            <Award className="h-3.5 w-3.5 text-amber-500" />
            {item.highlight}
          </span>
        </div>
      )}

      {/* Description */}
      {item.description && (
        <p className="mt-3 text-xs md:text-sm leading-relaxed text-mauve-11 text-left">
          {item.description}
        </p>
      )}
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/* Experience Timeline Item Component                                         */
/* -------------------------------------------------------------------------- */

function ExperienceTimelineItem({
  item,
  index,
  isEven,
}: {
  item: Experience
  index: number
  isEven: boolean
}) {
  return (
    <div className="relative flex flex-col md:grid md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-8 group">
      {/* LEFT COLUMN (Desktop: visible when isEven) */}
      <div className={`pl-20 md:pl-0 ${isEven ? "block" : "md:hidden"}`}>
        {isEven && <ExperienceContent item={item} />}
      </div>

      {/* CENTER CIRCULAR LOGO BADGE (matching formation-experience.png with actual images) */}
      <div className="absolute left-0 top-0 md:static flex items-center justify-center shrink-0 z-10">
        <div className="relative flex h-16 w-16 md:h-24 md:w-24 items-center justify-center rounded-full border-4 border-mauve-1 bg-white shadow-xl ring-4 ring-accent-9/20 transition-all duration-300 group-hover:scale-110 group-hover:ring-accent-9/40 overflow-hidden dark:border-mauve-2 dark:bg-mauve-1">
          {item.image ? (
            <div className="relative h-full w-full p-1.5 flex items-center justify-center">
              <Image
                src={item.image}
                alt={`Logo ${item.company}`}
                fill
                sizes="(min-width: 768px) 96px, 64px"
                className="object-contain p-1 rounded-full"
              />
            </div>
          ) : (
            <div
              className={`flex h-full w-full items-center justify-center rounded-full bg-gradient-to-tr ${
                item.logoGradient || "from-accent-9 to-accent-11"
              } p-1 text-white shadow-inner`}
            >
              <span className="font-heading text-xs md:text-sm font-black tracking-wider uppercase">
                {item.logoText || "EXP"}
              </span>
            </div>
          )}

          {/* Pulse node */}
          <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-accent-9">
            <span className="h-2 w-2 rounded-full bg-white animate-ping opacity-75" />
          </span>
        </div>
      </div>

      {/* RIGHT COLUMN (Desktop: visible when !isEven, Mobile: always contains content) */}
      <div className={`pl-20 md:pl-0 ${!isEven ? "block" : "hidden md:block"}`}>
        {!isEven ? (
          <ExperienceContent item={item} />
        ) : (
          <div className="hidden md:block" />
        )}
      </div>
    </div>
  )
}

function ExperienceContent({ item }: { item: Experience }) {
  return (
    <div
      className="card-hover rounded-[26px] border-2 border-mauve-6 bg-mauve-1 p-5 md:p-6 shadow-sm text-left transition-all duration-300 hover:-translate-y-2 hover:border-accent-9/60 hover:shadow-xl dark:bg-mauve-2 dark:border-mauve-6"
    >
      {/* Date in Bold Heading style from design — left-aligned */}
      <div className="flex items-center gap-2 mb-1.5 justify-start">
        <span className="font-heading text-sm md:text-base font-extrabold tracking-wide text-mauve-12">
          {item.year || item.period}
        </span>

      </div>

      {/* Role Title */}
      <h3 className="font-heading text-base md:text-lg font-bold text-mauve-12 leading-snug">
        {item.role}
      </h3>

      {/* Company and Location */}
      <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs md:text-sm justify-start">
        <span className="font-semibold text-accent-11">{item.company}</span>
        <span className="inline-flex items-center gap-1 text-mauve-10">
          <MapPin className="h-3.5 w-3.5" />
          {item.location}
        </span>
      </div>

      {/* Bullet Points */}
      <ul className="mt-3.5 flex flex-col gap-2 text-left">
        {item.points.map((point) => (
          <li
            key={point}
            className="flex gap-2 text-xs md:text-sm leading-relaxed text-mauve-11 text-left"
          >
            <span className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent-9" />
            <span>{point}</span>
          </li>
        ))}
      </ul>

      {/* Attestation footer */}
      <div className="mt-4 pt-3 border-t border-mauve-6/60 flex justify-start">
        {item.attestation ? (
          <a
            href={item.attestation}
            download
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent-11 hover:text-accent-9 transition-colors cursor-pointer"
          >
            <Download className="h-3.5 w-3.5" />
            Télécharger l&apos;attestation
          </a>
        ) : (
          <span
            className="inline-flex items-center gap-1.5 text-xs font-medium text-mauve-10"
            title="Le stage n'est pas encore terminé, l'attestation sera disponible à la fin."
          >
            <Clock className="h-3.5 w-3.5" />
            Attestation en fin de mission
          </span>
        )}
      </div>
    </div>
  )
}
