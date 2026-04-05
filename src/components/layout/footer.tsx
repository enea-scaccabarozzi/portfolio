import { getTranslations } from '@/lib/i18n'
import type { Locale } from '@/lib/i18n/config'

const socialLinks = [
  {
    href: 'https://github.com/enea-scaccabarozzi',
    label: 'GitHub',
  },
  {
    href: 'https://www.linkedin.com/in/enea-scaccabarozzi-9660ba266',
    label: 'LinkedIn',
  },
  {
    href: 'mailto:me@eneascaccabarozzi.xyz',
    label: 'Email',
  },
  {
    href: 'https://keys.openpgp.org/vks/v1/by-fingerprint/90C9F3394510E1F8AA51F0120D88E46B2B9C6700',
    label: 'PGP',
  },
]

interface FooterProps {
  locale: Locale
}

export function Footer({ locale }: FooterProps) {
  const t = getTranslations(locale)
  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-2xl mx-auto w-full flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
        <p className="text-sm text-muted">
          {t.footer.copyright.replace('{year}', String(new Date().getFullYear()))}
        </p>
        <ul className="flex items-center gap-4">
          {socialLinks.map(link => (
            <li key={link.label}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted link-hover"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
