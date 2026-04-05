import { posts } from '.velite'
import type { Metadata } from 'next'
import { BlogPostTitle } from '@/components/blog-post-title'
import { formatDate } from '@/lib/format'
import { getTranslations } from '@/lib/i18n'
import type { Locale } from '@/lib/i18n/config'
import { siteConfig } from '@/lib/metadata'

interface BlogPageProps {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { locale } = (await params) as { locale: Locale }
  const t = getTranslations(locale)
  const otherLocale = locale === 'it' ? 'en' : 'it'
  return {
    title: t.blog.title,
    description: t.meta.blogDescription,
    alternates: {
      canonical: `${siteConfig.url}/${locale}/blog`,
      languages: {
        [locale]: `${siteConfig.url}/${locale}/blog`,
        [otherLocale]: `${siteConfig.url}/${otherLocale}/blog`,
      },
    },
  }
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { locale } = (await params) as { locale: Locale }
  const t = getTranslations(locale)
  const sorted = posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-semibold tracking-tight text-foreground">{t.blog.title}</h1>
      <div className="mt-12 md:mt-16 divide-y divide-border">
        {sorted.map(post => (
          <article key={post.slug} className="py-8 first:pt-0 last:pb-0">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4">
              <BlogPostTitle slug={post.slug} href={`/${locale}${post.permalink}`}>
                {post.title}
              </BlogPostTitle>
              <span className="text-muted text-sm shrink-0">{formatDate(post.date, locale)}</span>
            </div>
            <p className="text-sm text-muted mt-1 leading-relaxed">{post.description}</p>
          </article>
        ))}
      </div>
    </div>
  )
}
