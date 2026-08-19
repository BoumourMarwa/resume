import { MapPin, Download, Clock, Briefcase } from "lucide-react"
import { experiences } from "@/lib/data"
import { Reveal } from "@/components/reveal"

export function ExperienceSection() {
  return (
    <section id="experience" className="border-y border-mauve-6 bg-mauve-2">
      <div className="mx-auto max-w-5xl px-5 py-16 md:py-20">
        <Reveal className="mb-12">
          <p className="mb-2 text-sm font-medium text-accent-11">Stages &amp; missions</p>
          <h2 className="font-heading text-2xl font-bold tracking-tight text-mauve-12 md:text-3xl">Expérience</h2>
        </Reveal>

        <div className="flex flex-col gap-5">
          {experiences.map((exp, i) => (
            <Reveal
              as="article"
              key={exp.company + exp.period}
              delay={i * 40}
              className="card-hover overflow-hidden rounded-xl border border-mauve-6 bg-mauve-1"
            >
              <div className="p-5 md:p-6">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent-9/10 text-accent-11">
                      <Briefcase className="h-4.5 w-4.5" />
                    </span>
                    <div>
                      <h3 className="font-heading text-lg font-bold leading-tight text-mauve-12 text-balance md:text-xl">
                        {exp.role}
                      </h3>
                      <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
                        <span className="font-semibold text-accent-11">{exp.company}</span>
                        <span className="inline-flex items-center gap-1 text-mauve-11">
                          <MapPin className="h-3.5 w-3.5" />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                  </div>
                  <span className="shrink-0 rounded-full bg-mauve-3 px-3 py-1 text-xs font-semibold text-mauve-11">
                    {exp.period}
                  </span>
                </div>

                <ul className="mt-4 flex flex-col gap-2.5 md:pl-12">
                  {exp.points.map((point) => (
                    <li key={point} className="flex gap-2.5 text-sm leading-relaxed text-mauve-11">
                      <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent-9" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Attestation footer bar — integrated into the card */}
              <div className="border-t border-mauve-6 bg-mauve-2 px-5 py-3 md:px-6">
                {exp.attestation ? (
                  <a
                    href={exp.attestation}
                    download
                    className="inline-flex items-center gap-2 text-sm font-semibold text-accent-11 hover:text-accent-9"
                  >
                    <Download className="h-4 w-4" />
                    Télécharger l&apos;attestation
                  </a>
                ) : (
                  <span
                    className="inline-flex items-center gap-2 text-sm font-medium text-mauve-10"
                    title="Le stage n'est pas encore terminé, l'attestation sera disponible à la fin."
                  >
                    <Clock className="h-4 w-4" />
                    Attestation disponible en fin de stage
                  </span>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
