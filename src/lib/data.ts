import type { Locale } from '@/lib/i18n/config'

export interface Experience {
  company: string
  url?: string
  title: Record<Locale, string>
  progression?: Record<Locale, string[]>
  startYear: number
  endYear: number | null
  highlights: Record<Locale, string[]>
}

export interface LocalizedExperience {
  company: string
  url?: string
  title: string
  progression?: string[]
  startYear: number
  endYear: number | null
  highlights: string[]
}

export function getExperiences(locale: Locale): LocalizedExperience[] {
  return experiences.map(exp => ({
    company: exp.company,
    url: exp.url,
    title: exp.title[locale],
    progression: exp.progression?.[locale],
    startYear: exp.startYear,
    endYear: exp.endYear,
    highlights: exp.highlights[locale],
  }))
}

export const experiences: Experience[] = [
  {
    company: 'Apuliasoft SRL',
    url: 'https://www.apuliasoft.com/',
    title: {
      en: 'Senior Developer',
      it: 'Senior Developer',
    },
    progression: {
      en: ['Trainee', 'Associate Developer', 'Professional Developer', 'Senior Developer'],
      it: ['Tirocinante', 'Associate Developer', 'Professional Developer', 'Senior Developer'],
    },
    startYear: 2022,
    endYear: null,
    highlights: {
      en: [
        'Four promotions in three years at a company recognized as Best Place to Work since 2023',
        'Grew from trainee to mentor within agile teams, leading by example on process and collaboration',
        'Mastered structured engineering culture: code review, sprint ceremonies, and cross-team alignment',
      ],
      it: [
        "Quattro promozioni in tre anni in un'azienda riconosciuta come Best Place to Work dal 2023",
        "Da tirocinante a mentor in team agile, guidando con l'esempio su processi e collaborazione",
        'Padronanza di una cultura ingegneristica strutturata: code review, cerimonie sprint e allineamento tra team',
      ],
    },
  },
  {
    company: 'Swtch SRL',
    title: {
      en: 'Full Stack Developer',
      it: 'Full Stack Developer',
    },
    url: 'https://getswitch.io/',
    startYear: 2023,
    endYear: null,
    highlights: {
      en: [
        'Designed and built cloud infrastructure and data pipelines, leading the migration from AWS to GCP',
        'Owned the full backend and frontend stack: APIs, services, and client applications',
        'Built AI-powered agentic features, working with cutting-edge ML infrastructure',
      ],
      it: [
        'Progettazione e sviluppo di infrastrutture cloud e pipeline dati, guidando la migrazione da AWS a GCP',
        'Gestione completa dello stack backend e frontend: API, servizi e applicazioni client',
        "Sviluppo di funzionalità agentiche basate su AI, lavorando con infrastruttura ML all'avanguardia",
      ],
    },
  },
  {
    company: 'Freelance',
    title: {
      en: 'Web Developer',
      it: 'Sviluppatore Web',
    },
    startYear: 2020,
    endYear: 2022,
    highlights: {
      en: [
        'Built websites and web applications for small businesses as an independent developer',
        'Developed a professional mindset around client communication, deadlines, and self-directed learning',
      ],
      it: [
        'Sviluppo di siti web e applicazioni per piccole imprese come sviluppatore indipendente',
        'Maturazione di un approccio professionale nella comunicazione con i clienti, gestione delle scadenze e apprendimento autonomo',
      ],
    },
  },
]

export interface Project {
  name: string
  url: string
  description: Record<Locale, string>
  stack: string[]
}

export interface LocalizedProject {
  name: string
  url: string
  description: string
  stack: string[]
}

export function getProjects(locale: Locale): LocalizedProject[] {
  return projects.map(p => ({
    name: p.name,
    url: p.url,
    description: p.description[locale],
    stack: p.stack,
  }))
}

export const projects: Project[] = [
  {
    name: 'coding-agents',
    url: 'https://github.com/enea-scaccabarozzi/coding-agents',
    description: {
      en: 'A customizable AI-powered development workflow for pairing with coding agents. Work in progress.',
      it: 'Un workflow di sviluppo personalizzabile basato su AI per lavorare con agenti di codice. Work in progress.',
    },
    stack: ['Python', 'Bash', 'Claude Code', 'VS Code Copilot', 'Markdown'],
  },
  {
    name: 'trade-republic-pac',
    url: 'https://github.com/enea-scaccabarozzi/trade-republic-pac',
    description: {
      en: 'A data-driven PAC manager for Trade Republic, extensible and automated.',
      it: 'Un gestore PAC data-driven per Trade Republic, estensibile e automatizzato.',
    },
    stack: ['Python', 'Docker', 'BDD'],
  },
]
