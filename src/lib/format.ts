import type { Locale } from '@/lib/i18n/config'

const dateLocaleMap: Record<Locale, string> = {
  en: 'en-US',
  it: 'it-IT',
}

export function formatDate(date: string, locale: Locale = 'it'): string {
  return new Date(date).toLocaleDateString(dateLocaleMap[locale], {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
