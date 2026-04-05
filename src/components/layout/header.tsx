'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { getTranslations } from '@/lib/i18n'
import type { Locale } from '@/lib/i18n/config'
import { useLocale } from '@/lib/i18n/hooks'

export function Header() {
  const pathname = usePathname()
  const locale = useLocale()
  const t = getTranslations(locale)

  const pathWithoutLocale = pathname.replace(`/${locale}`, '') || '/'

  const isHome = pathWithoutLocale === '/'
  const isBlogPost = pathWithoutLocale.startsWith('/blog/') && pathWithoutLocale !== '/blog'

  const navLinks = [
    { path: '/experience', label: t.nav.experience },
    { path: '/projects', label: t.nav.projects },
    { path: '/blog', label: t.nav.blog },
  ]

  return (
    <header className="py-6 md:py-8">
      <div
        className={`mx-auto w-full transition-[max-width] duration-500 ease-in-out ${
          isBlogPost ? 'max-w-5xl' : 'max-w-2xl'
        }`}
      >
        <nav aria-label="Main navigation" className="flex items-center justify-between">
          <Link href={`/${locale}`} className="relative">
            {isHome ? (
              <span className="font-semibold tracking-tight invisible" aria-hidden="true">
                Enea Scaccabarozzi
              </span>
            ) : (
              <span className="font-semibold tracking-tight text-foreground">
                Enea Scaccabarozzi
              </span>
            )}
          </Link>
          <div className="flex items-center gap-4 md:gap-6">
            <ul className="flex items-center gap-4 md:gap-6">
              {navLinks.map(link => {
                const href = `/${locale}${link.path === '/' ? '' : link.path}`
                const isActive =
                  pathWithoutLocale === link.path ||
                  (link.path !== '/' && pathWithoutLocale.startsWith(link.path))
                return (
                  <li key={link.path}>
                    <Link
                      href={href}
                      className={`text-sm link-hover ${
                        isActive ? 'text-foreground active' : 'text-muted'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                )
              })}
            </ul>
            <LanguageSwitcher locale={locale} pathWithoutLocale={pathWithoutLocale} />
          </div>
        </nav>
      </div>
    </header>
  )
}

function LanguageSwitcher({
  locale,
  pathWithoutLocale,
}: {
  locale: Locale
  pathWithoutLocale: string
}) {
  const otherLocale = locale === 'it' ? 'en' : 'it'
  return (
    <Link
      href={`/${otherLocale}${pathWithoutLocale === '/' ? '' : pathWithoutLocale}`}
      className="text-sm text-muted link-hover uppercase"
      aria-label={`Switch to ${otherLocale === 'en' ? 'English' : 'Italiano'}`}
    >
      {otherLocale.toUpperCase()}
    </Link>
  )
}
