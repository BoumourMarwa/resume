import { Mail, Phone } from "lucide-react"
import { social } from "@/lib/data"

export function ContactSection() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-5 py-16 text-center md:py-24">
      <p className="mb-2 text-sm font-medium text-accent-11">Contact</p>
      <h2 className="font-heading text-2xl font-bold tracking-tight text-mauve-12 text-balance md:text-3xl">
        Travaillons ensemble
      </h2>
      <p className="mx-auto mt-3 max-w-md leading-relaxed text-mauve-11">
        Une question, un projet ou une opportunité ? N&apos;hésitez pas à me contacter.
      </p>

      <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <a
          href={`mailto:${social.email}`}
          className="inline-flex items-center gap-2.5 rounded-lg border border-mauve-6 bg-mauve-2 px-5 py-3 text-sm font-medium text-mauve-12 hover:bg-mauve-3"
        >
          <Mail className="h-4 w-4 text-accent-9" />
          {social.email}
        </a>
        <a
          href={`tel:${social.phoneHref}`}
          className="inline-flex items-center gap-2.5 rounded-lg border border-mauve-6 bg-mauve-2 px-5 py-3 text-sm font-medium text-mauve-12 hover:bg-mauve-3"
        >
          <Phone className="h-4 w-4 text-accent-9" />
          {social.phone}
        </a>
      </div>
    </section>
  )
}
