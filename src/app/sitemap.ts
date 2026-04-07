import type { MetadataRoute } from 'next'
import { getAllPostSlugs } from '@/lib/blog'
import { LOCALES } from '@/lib/i18n/config'
import { siteConfig } from '@/lib/metadata'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = ['', '/experience', '/projects', '/blog']

  const staticRoutes: MetadataRoute.Sitemap = LOCALES.flatMap(locale =>
    staticPaths.map(path => ({
      url: `${siteConfig.url}/${locale}${path}`,
      lastModified: new Date(),
      priority: path === '' ? 1.0 : path === '/blog' ? 0.9 : 0.8,
    })),
  )

  const blogRoutes: MetadataRoute.Sitemap = LOCALES.flatMap(locale =>
    getAllPostSlugs().map(slug => ({
      url: `${siteConfig.url}/${locale}/blog/${slug}`,
      lastModified: new Date(),
      priority: 0.7,
    })),
  )

  return [...staticRoutes, ...blogRoutes]
}
