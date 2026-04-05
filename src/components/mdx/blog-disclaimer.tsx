import type { Locale } from '@/lib/i18n/config'

const disclaimers: Record<Locale, { text: string; linkText: string }> = {
  en: {
    text: 'Found an error or want to suggest a correction?',
    linkText: 'Open a PR or issue on GitHub',
  },
  it: {
    text: 'Hai trovato un errore o vuoi suggerire una correzione?',
    linkText: 'Apri una PR o issue su GitHub',
  },
}

const REPO_URL = 'https://github.com/enea-scaccabarozzi/portfolio'

export function BlogDisclaimer({ locale }: { locale: Locale }) {
  const t = disclaimers[locale]
  return (
    <div className="mt-16 pt-8 border-t border-border">
      <p className="text-sm text-muted">
        {t.text}{' '}
        <a
          href={REPO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground link-hover"
        >
          {t.linkText}
        </a>
      </p>
    </div>
  )
}
