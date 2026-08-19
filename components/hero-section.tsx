import Image from "next/image"
import { Github, Linkedin, ArrowDown } from "lucide-react"
import { social } from "@/lib/data"

export function HeroSection() {
  const BASE_PATH = "/resume";
  return (
      <section
          id="home"
          className="hero-section mx-auto max-w-5xl px-5 pt-20 pb-16 md:pt-28"
      >
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-center md:gap-12">

          {/* Photo */}
          <div className="hero-photo shrink-0">
            <div className="relative h-36 w-36 overflow-hidden rounded-full border-2 border-mauve-6 md:h-44 md:w-44">
              <Image
                  src={"/profile.jpg"}
                  alt="Portrait de Marwa Boumour"
                  fill
                  sizes="176px"
                  className="object-cover"
                  priority
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left">

            <p className="hero-item hero-role mb-3 text-sm font-medium text-accent-11">
              Software &amp; AI Engineer
            </p>

            <h1 className="hero-item hero-title font-heading text-3xl font-bold leading-tight tracking-tight text-mauve-12 text-balance md:text-4xl">
              Je suis Marwa Boumour
            </h1>

            <p className="hero-item hero-description mt-4 max-w-xl leading-relaxed text-mauve-11 text-pretty">
              Étudiante ingénieure en 5ᵉ année à l&apos;INSA Centre Val de Loire,
              dans le cadre d&apos;un double diplôme en Génie Informatique et
              Sécurité et Technologies Informatiques. Je m&apos;intéresse
              particulièrement au Software Engineering, à l&apos;Intelligence
              Artificielle et à la conception d&apos;applications modernes,
              robustes et sécurisées.
            </p>

            <div className="hero-item hero-actions mt-7 flex flex-wrap items-center justify-center gap-3 md:justify-start">
              <a
                  href={social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-mauve-6 bg-mauve-2 px-4 py-2 text-sm font-medium text-mauve-12 hover:bg-mauve-3"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>

              <a
                  href={social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-mauve-6 bg-mauve-2 px-4 py-2 text-sm font-medium text-mauve-12 hover:bg-mauve-3"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>

              <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-lg bg-accent-9 px-4 py-2 text-sm font-medium text-accent-contrast hover:bg-accent-10"
              >
                Me contacter
                <ArrowDown className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
  )
}