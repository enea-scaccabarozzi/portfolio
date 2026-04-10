import type { Metadata } from 'next'
import { LangSetter } from '@/components/lang-setter'
import { Footer } from '@/components/layout/footer'
import { Header } from '@/components/layout/header'
import { PageTransition } from '@/components/page-transition'
import { getTranslations } from '@/lib/i18n'
import { LOCALES, type Locale } from '@/lib/i18n/config'
import { siteConfig } from '@/lib/metadata'

interface LayoutProps {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export function generateStaticParams() {
  return LOCALES.map(locale => ({ locale }))
}

export async function generateMetadata({ params }: LayoutProps): Promise<Metadata> {
  const { locale } = (await params) as { locale: Locale }
  const t = getTranslations(locale)
  const otherLocale = locale === 'it' ? 'en' : 'it'
  return {
    description: t.meta.siteDescription,
    openGraph: {
      type: 'website',
      siteName: siteConfig.name,
      locale: siteConfig.locales[locale],
      images: [{ url: '/og/default.png', width: 1200, height: 630 }],
    },
    twitter: { card: 'summary_large_image' },
    alternates: {
      canonical: `${siteConfig.url}/${locale}/`,
      languages: {
        [locale]: `${siteConfig.url}/${locale}/`,
        [otherLocale]: `${siteConfig.url}/${otherLocale}/`,
      },
      types: {
        'application/rss+xml': `${siteConfig.url}/${locale}/feed.xml`,
      },
    },
  }
}

export default async function LocaleLayout({ children, params }: LayoutProps) {
  const { locale } = (await params) as { locale: Locale }
  return (
    <>
      <LangSetter />
      <div className="mx-auto max-w-5xl px-5 min-h-screen flex flex-col overflow-x-clip">
        <Header />
        <main className="flex-1 py-16 md:py-24">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer locale={locale} />
      </div>
    </>
  )
}
