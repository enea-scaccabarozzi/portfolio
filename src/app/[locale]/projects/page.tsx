import type { Metadata } from 'next'
import { JsonLd } from '@/components/json-ld'
import { getProjects } from '@/lib/data'
import { getTranslations } from '@/lib/i18n'
import type { Locale } from '@/lib/i18n/config'
import { siteConfig } from '@/lib/metadata'

interface ProjectsPageProps {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: ProjectsPageProps): Promise<Metadata> {
  const { locale } = (await params) as { locale: Locale }
  const t = getTranslations(locale)
  const otherLocale = locale === 'it' ? 'en' : 'it'
  return {
    title: t.projects.title,
    description: t.meta.projectsDescription,
    alternates: {
      canonical: `${siteConfig.url}/${locale}/projects/`,
      languages: {
        [locale]: `${siteConfig.url}/${locale}/projects/`,
        [otherLocale]: `${siteConfig.url}/${otherLocale}/projects/`,
      },
    },
  }
}

export default async function ProjectsPage({ params }: ProjectsPageProps) {
  const { locale } = (await params) as { locale: Locale }
  const t = getTranslations(locale)
  const projects = getProjects(locale)

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: t.breadcrumbs.home,
        item: `${siteConfig.url}/${locale}/`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: t.breadcrumbs.projects,
        item: `${siteConfig.url}/${locale}/projects/`,
      },
    ],
  }

  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-semibold tracking-tight text-foreground">
          {t.projects.title}
        </h1>
        <div className="mt-12 md:mt-16 divide-y divide-border">
          {projects.map(project => (
            <article key={project.name} className="py-8 first:pt-0 last:pb-0">
              <h2 className="text-foreground font-medium">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground link-hover"
                >
                  {project.name}
                </a>
              </h2>
              <p className="text-sm text-muted mt-1 leading-relaxed">{project.description}</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {project.stack.map(tech => (
                  <li
                    key={tech}
                    className="text-xs text-muted px-2 py-0.5 rounded-sm border border-border"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </>
  )
}
