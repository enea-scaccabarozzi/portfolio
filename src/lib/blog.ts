import type { Post } from '.velite'
import { posts } from '.velite'
import type { Locale } from '@/lib/i18n/config'

/**
 * Find the best post match for a slug in the given locale.
 * Fallback chain: exact locale → 'en' → any available.
 */
export function getPostForLocale(slug: string, locale: Locale): Post | undefined {
  const bySlug = posts.filter(p => p.slug === slug)
  return (
    bySlug.find(p => p.lang === locale) ??
    // English is the content lingua franca — always prefer it over an
    // arbitrary variant.  We intentionally hardcode 'en' here rather than
    // using DEFAULT_LOCALE (which is 'it' for routing) because English
    // content is the most universally understandable fallback.
    bySlug.find(p => p.lang === 'en') ??
    bySlug[0]
  )
}

/**
 * Get all posts for a locale, deduplicated by slug.
 * For each unique slug, picks: locale match → 'en' fallback → any.
 * Sorted by date descending.
 */
export function getPostsForLocale(locale: Locale): Post[] {
  const slugs = [...new Set(posts.map(p => p.slug))]
  const resolved = slugs
    .map(slug => getPostForLocale(slug, locale))
    .filter((p): p is Post => p !== undefined)
  return resolved.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

/**
 * Get all unique slugs (for generateStaticParams).
 */
export function getAllPostSlugs(): string[] {
  return [...new Set(posts.map(p => p.slug))]
}
