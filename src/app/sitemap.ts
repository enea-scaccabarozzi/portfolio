import type { MetadataRoute } from 'next'
import { getAllPostSlugs, getPostForLocale } from '@/lib/blog'
import { LOCALES } from '@/lib/i18n/config'
import { siteConfig } from '@/lib/metadata'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = ['', '/experience', '/projects', '/blog'] as const

  const changeFreqMap: Record<string, 'monthly' | 'weekly'> = {
    '': 'monthly',
    '/experience': 'monthly',
    '/projects': 'monthly',
    '/blog': 'weekly',
  }

  const staticRoutes: MetadataRoute.Sitemap = LOCALES.flatMap(locale =>
    staticPaths.map(path => ({
      url: `${siteConfig.url}/${locale}${path}/`,
      lastModified: new Date(),
      changeFrequency: changeFreqMap[path],
      priority: path === '' ? 1.0 : path === '/blog' ? 0.9 : 0.8,
    })),
  )

  const blogRoutes: MetadataRoute.Sitemap = LOCALES.flatMap(locale =>
    getAllPostSlugs().map(slug => {
      const post = getPostForLocale(slug, locale)
      return {
        url: `${siteConfig.url}/${locale}/blog/${slug}/`,
        lastModified: post ? new Date(post.date) : new Date(),
        changeFrequency: 'yearly' as const,
        priority: 0.7,
      }
    }),
  )

  return [...staticRoutes, ...blogRoutes]
}
