import { Github, Linkedin, Mail } from "lucide-react"
import { social } from "@/lib/data"

export function Footer() {
  return (
    <footer className="border-t border-mauve-6 bg-mauve-1">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-5 py-8 sm:flex-row sm:justify-between">
        <p className="text-sm text-mauve-11">
          © {new Date().getFullYear()} Marwa Boumour. Tous droits réservés.
        </p>
        <div className="flex items-center gap-4">
          <a
            href={social.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-mauve-11 hover:text-mauve-12"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href={social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-mauve-11 hover:text-mauve-12"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a href={`mailto:${social.email}`} aria-label="Email" className="text-mauve-11 hover:text-mauve-12">
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  )
}
