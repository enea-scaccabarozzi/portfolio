import type { Locale } from './config'
import type { Translations } from './translations/en'
import { en } from './translations/en'
import { it } from './translations/it'

const translations: Record<Locale, Translations> = { it, en }

export type { Translations }

export function getTranslations(locale: Locale): Translations {
  return translations[locale]
}
