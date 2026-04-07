import type { Metadata } from 'next'
import Link from 'next/link'
import { HomeHeading } from '@/components/home-heading'
import { JsonLd } from '@/components/json-ld'
import { getTranslations } from '@/lib/i18n'
import type { Locale } from '@/lib/i18n/config'
import { siteConfig } from '@/lib/metadata'

interface HomeProps {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: HomeProps): Promise<Metadata> {
  const { locale } = (await params) as { locale: Locale }
  const t = getTranslations(locale)
  return { description: t.meta.siteDescription }
}

export default async function Home({ params }: HomeProps) {
  const { locale } = (await params) as { locale: Locale }
  const t = getTranslations(locale)

  const sectionLinks = [
    { href: `/${locale}/experience`, label: t.nav.experience },
    { href: `/${locale}/projects`, label: t.nav.projects },
    { href: `/${locale}/blog`, label: t.nav.blog },
  ]

  const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.name,
    url: `${siteConfig.url}/`,
    jobTitle: siteConfig.author.jobTitle,
    email: `mailto:${siteConfig.author.email}`,
    sameAs: [siteConfig.social.github, siteConfig.social.linkedin],
  }

  return (
    <>
      <JsonLd data={personJsonLd} />
      <div className="max-w-2xl mx-auto">
        <HomeHeading />
        <p className="mt-3 text-lg text-muted">{t.home.role}</p>
        <p className="mt-6 text-base leading-relaxed text-foreground">{t.home.bio}</p>
        <nav aria-label="Sections" className="mt-12 md:mt-16">
          <ul className="flex items-center gap-4 md:gap-6">
            {sectionLinks.map(link => (
              <li key={link.href}>
                <Link href={link.href} className="text-muted link-hover">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  )
}
