import { MapPin, GraduationCap } from "lucide-react"
import { education } from "@/lib/data"
import { Reveal } from "@/components/reveal"

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <Reveal className="mb-12">
      <p className="mb-2 text-sm font-medium text-accent-11">{eyebrow}</p>
      <h2 className="font-heading text-2xl font-bold tracking-tight text-mauve-12 md:text-3xl">{title}</h2>
    </Reveal>
  )
}

export function EducationSection() {
  return (
    <section id="education" className="mx-auto max-w-5xl px-5 py-16 md:py-20">
      <SectionHeading eyebrow="Parcours académique" title="Formation" />

      <div className="relative">
        {/* Continuous vertical line */}
        <span
          aria-hidden
          className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-accent-9/60 via-mauve-6 to-transparent md:left-[9px]"
        />

        <ol className="flex flex-col gap-6">
          {education.map((item, i) => (
            <Reveal as="li" key={item.title + item.period} delay={i * 40} className="relative pl-8 md:pl-12">
              {/* Node marker */}
              <span
                aria-hidden
                className="absolute left-0 top-2 flex h-4 w-4 items-center justify-center rounded-full border-2 border-mauve-1 bg-accent-9 ring-4 ring-accent-9/10 md:h-5 md:w-5"
              />

              <div className="card-hover rounded-xl border border-mauve-6 bg-mauve-2 p-5 md:p-6">
                {/* Date pill */}
                <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-9/10 px-3 py-1 text-xs font-semibold tracking-wide text-accent-11">
                  <GraduationCap className="h-3.5 w-3.5" />
                  {item.period}
                </span>

                <h3 className="mt-3 font-heading text-base font-bold leading-snug text-mauve-12 text-balance md:text-lg">
                  {item.title}
                </h3>

                <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
                  <span className="font-semibold text-accent-11">{item.school}</span>
                  <span className="inline-flex items-center gap-1 text-mauve-11">
                    <MapPin className="h-3.5 w-3.5" />
                    {item.location}
                  </span>
                </div>

                {item.highlight && (
                  <span className="mt-3 inline-block rounded-md border border-accent-9/20 bg-accent-9/5 px-2.5 py-0.5 text-xs font-medium text-accent-11">
                    {item.highlight}
                  </span>
                )}

                {item.description && (
                  <p className="mt-3 text-sm leading-relaxed text-mauve-11">{item.description}</p>
                )}
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
