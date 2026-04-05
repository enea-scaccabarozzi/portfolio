import type { Metadata } from 'next'
import { getExperiences } from '@/lib/data'
import { getTranslations } from '@/lib/i18n'
import type { Locale } from '@/lib/i18n/config'
import { siteConfig } from '@/lib/metadata'

interface ExperiencePageProps {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: ExperiencePageProps): Promise<Metadata> {
  const { locale } = (await params) as { locale: Locale }
  const t = getTranslations(locale)
  const otherLocale = locale === 'it' ? 'en' : 'it'
  return {
    title: t.experience.title,
    description: t.meta.experienceDescription,
    alternates: {
      canonical: `${siteConfig.url}/${locale}/experience`,
      languages: {
        [locale]: `${siteConfig.url}/${locale}/experience`,
        [otherLocale]: `${siteConfig.url}/${otherLocale}/experience`,
      },
    },
  }
}

export default async function ExperiencePage({ params }: ExperiencePageProps) {
  const { locale } = (await params) as { locale: Locale }
  const t = getTranslations(locale)
  const experiences = getExperiences(locale)

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-semibold tracking-tight text-foreground">
        {t.experience.title}
      </h1>
      <div className="mt-12 md:mt-16 divide-y divide-border">
        {experiences.map(exp => (
          <article key={`${exp.company}-${exp.startYear}`} className="py-8 first:pt-0 last:pb-0">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4">
              <h2 className="text-foreground font-medium">
                {exp.url ? (
                  <a
                    href={exp.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground link-hover"
                  >
                    {exp.company}
                  </a>
                ) : (
                  exp.company
                )}
              </h2>
              <span className="text-muted text-sm shrink-0">
                {exp.startYear} – {exp.endYear ?? t.experience.present}
              </span>
            </div>
            <p className="text-muted text-sm mt-1">{exp.title}</p>
            {exp.progression && (
              <p className="text-muted text-sm mt-1">{exp.progression.join(' → ')}</p>
            )}
            <ul className="mt-3 space-y-1.5 list-disc list-outside pl-5 marker:text-muted">
              {exp.highlights.map(highlight => (
                <li key={highlight} className="text-sm text-foreground leading-relaxed">
                  {highlight}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  )
}
