export type Education = {
  title: string
  school: string
  location: string
  period: string
  year: string
  description?: string
  highlight?: string
  logoText?: string
  logoGradient?: string
  image?: string
}

export const education: Education[] = [
  {
    year: "2025 — Présent",
    period: "Sept 2025 — Présent",
    title: "Cycle d'ingénieur en Sécurité et Technologies Informatiques (STI)",
    school: "INSA Centre Val de Loire",
    location: "Bourges, France",
    description:
      "Formation d'excellence axée sur la sécurité informatique, le big data, l'intelligence artificielle ainsi que l'architecture logicielle sécurisée.",
    logoText: "INSA",
    image: "/images/parcours/insa-cvl.png",
    logoGradient: "from-rose-500 via-purple-600 to-indigo-700",
  },
  {
    year: "2023 — 2025",
    period: "Sept 2023 — Juin 2025",
    title: "Cycle d'ingénieur en Génie Informatique",
    school: "ENSA Khouribga",
    location: "Khouribga, Maroc",
    description:
      "Spécialisation en génie logiciel, développement web & mobile avancé, architectures distribuées, cloud et pratiques DevOps.",
    highlight: "Majorante de promotion",
    logoText: "ENSA",
    image: "/images/parcours/ensa.png",
    logoGradient: "from-blue-600 via-cyan-500 to-teal-400",
  },
  {
    year: "2021 — 2023",
    period: "Sept 2021 — Juin 2023",
    title: "Cycle Préparatoire Intégré",
    school: "ENSA Khouribga",
    location: "Maroc",
    description:
      "Formation scientifique et technique intensive : mathématiques appliquées, physique fondamentale, algorithmique et bases du développement.",
    logoText: "CP",
    image: "/images/parcours/ensa.png",
    logoGradient: "from-indigo-600 via-blue-700 to-sky-500",
  },
  {
    year: "2020 — 2021",
    period: "Sept 2020 — Juin 2021",
    title: "Baccalauréat en Sciences Physiques",
    school: "Lycée Fatima Ezzahra",
    location: "Casablanca, Maroc",
    description: "Baccalauréat Scientifique mention Très Bien avec spécialisation en sciences expérimentales et mathématiques.",
    highlight: "Mention Très Bien",
    logoText: "BAC",
    image: "/images/parcours/fatima-zahra.jpg",
    logoGradient: "from-amber-500 via-orange-600 to-red-600",
  },
]

export type Experience = {
  role: string
  company: string
  location: string
  period: string
  year: string
  points: string[]
  attestation?: string
  ongoing?: boolean
  logoText?: string
  logoGradient?: string
  image?: string
}

export const experiences: Experience[] = [
  {
    year: "2026",
    period: "Mai 2026 — En cours (fin prévue le 04/09)",
    role: "Stagiaire en Développement Web",
    company: "P Plus Formation",
    location: "Bordeaux, France",
    points: [
      "Conception et développement d'une plateforme e-learning (LMS) moderne et modulaire avec Next.js, TypeScript et PostgreSQL.",
      "Optimisation des performances UI, mise en place de flux d'apprentissage interactifs et gestion sécurisée des rôles.",
    ],
    ongoing: true,
    logoText: "P+",
    image: "/images/parcours/pplus.png",
    logoGradient: "from-emerald-500 via-teal-600 to-cyan-700",
  },
  {
    year: "2025",
    period: "Juin 2025 — Août 2025",
    role: "Stagiaire en Développement IA",
    company: "Technology & Telecom (T&T)",
    location: "Rabat, Maroc",
    points: [
      "Conception de DocuBot, chatbot d'assistance documentaire intelligent basé sur LLM, RAG et ElasticSearch, développé avec FastAPI.",
      "Amélioration de l'accessibilité de 50% via l'intégration Speech-to-Text (Whisper) et Text-to-Speech (XTTS_V2).",
      "Suivi et coordination des tâches de développement via Google Chat et GitLab CI/CD.",
    ],
    attestation: "/attestations/attestation-tt-docubot-2025.pdf",
    logoText: "T&T",
    image: "/images/parcours/t&t.png",
    logoGradient: "from-violet-600 via-indigo-600 to-blue-600",
  },
  {
    year: "2024",
    period: "Juillet 2024",
    role: "Stagiaire en Développement Web",
    company: "OCP / SOTREG",
    location: "Khouribga, Maroc",
    points: [
      "Conception et développement d'une solution web métier de gestion du transport des employés (Laravel, PHP, MySQL, Docker).",
      "Développement d'une API REST réduisant les délais de planification de 40%, avec suivi temps réel via Google Maps API.",
      "Création d'une interface utilisateur (HTML, CSS, JavaScript) augmentant l'engagement de 30%.",
    ],
    attestation: "/attestations/attestation-ocp-sotreg-2024.pdf",
    logoText: "OCP",
    image: "/images/parcours/ocp.jpg",
    logoGradient: "from-amber-600 via-yellow-500 to-lime-600",
  },
]

export type SkillCategory = {
  category: string
  description?: string
  illustration?: string
  items: string[]
}

export const skills: SkillCategory[] = [
  {
    category: "Front-end",
    description: "Interfaces réactives, dynamiques et animations fluides pour le web et mobile.",
    illustration: "/images/web-design.svg",
    items: ["next.js", "react", "typescript"],
  },
  {
    category: "Back-end",
    description: "Architectures robustes, API REST sécurisées et gestion de données performantes.",
    illustration: "/images/product-design.svg",
    items: ["spring boot", "java", "fastapi", "python", "laravel", "cpp", "postgresql"],
   },
  {
    category: "DevOps & Cloud",
    description: "Conteneurisation Docker, pipelines CI/CD et gestion de versions avec Git.",
    illustration: "/images/ui-ux-design.svg",
    items: ["docker", "git", "jenkins"],
  },
  {
    category: "Design & Tools",
    description: "Prototypage d'interfaces, maquettage haute fidélité et design systems.",
    illustration: "/images/motion-graphics.svg",
    items: ["figma", "tailwind"],
  },
]

export type Project = {
  title: string
  subtitle?: string
  description: string
  image: string
  tags: string[]
  github?: string
  live?: string
}

export const projects: Project[] = [
  {
    title: "Nine Men's Morris",
    subtitle: "Jeu de stratégie développé en C avec interface graphique et IA",
    description:
        "Implémentation complète du jeu de Moulin avec une interface graphique interactive développée en C et SDL. Le projet intègre une IA pour affronter le joueur et a été compilé en WebAssembly avec Emscripten afin de permettre son exécution directement dans un navigateur.",
    image: "/projects/moulin.jpg",
    tags: ["C", "SDL2", "IA", "WebAssembly", "Emscripten"],
    github: "https://github.com/BoumourMarwa/nine-mens-morris",
    live: "https://boumourmarwa.github.io/nine-mens-morris/",
  },
  {
    title: "DevEvent",
    subtitle: "Plateforme web de découverte et de gestion d'événements pour développeurs",
    description:
        "Application full-stack permettant de découvrir des événements tech, consulter leurs détails, s'inscrire et accéder à des événements similaires. Le projet intègre une API REST, une base de données MongoDB, le stockage d'images avec Cloudinary et le suivi des interactions utilisateurs avec PostHog.",
    image: "/projects/event.jpeg",
    tags: ["Next.js", "TypeScript", "MongoDB", "Mongoose", "Cloudinary", "Tailwind CSS", "PostHog"],
    github: "https://github.com/BoumourMarwa/DevEvent",
    live: "https://marwabmr-devevent.vercel.app/",
  },
  {
    title: "Gestion du bibliothèque",
    subtitle: "Application en ligne de commande pour la gestion des adhérents, des livres et des emprunts",
    description:"Application développée en C permettant de gérer les adhérents et les livres, ainsi que les opérations d’emprunt et de retour. Les données sont sauvegardées dans des fichiers JSON et l'application peut être exécutée localement ou via Docker.",
    image: "/projects/gestionlivre.png",
    tags: ["C", "JSON", "Docker"],
    github: "https://github.com/BoumourMarwa/borrow-books-manager",
  },

]

export const social = {
  github: "https://github.com/BoumourMarwa",
  linkedin: "https://www.linkedin.com/in/marwa-boumour-854399306/",
  email: "marwa.boumour1@gmail.com",
  phone: "+33 7 80 86 13 32",
  phoneHref: "+33780861332",
}

