'use client'

import { usePathname } from 'next/navigation'
import { isValidLocale, type Locale } from './config'

export function useLocale(): Locale {
  const pathname = usePathname()
  const segment = pathname.split('/')[1]
  return isValidLocale(segment) ? segment : 'it'
}
