import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { BlogArticleTitle } from '@/components/blog-article-title'
import { BlogDisclaimer } from '@/components/mdx/blog-disclaimer'
import { MDXContent } from '@/components/mdx-content'
import { TableOfContents } from '@/components/toc'
import { getAllPostSlugs, getPostForLocale } from '@/lib/blog'
import { formatDate } from '@/lib/format'
import { getTranslations } from '@/lib/i18n'
import type { Locale } from '@/lib/i18n/config'
import { siteConfig } from '@/lib/metadata'

interface PostPageProps {
  params: Promise<{ locale: string; slug: string }>
}

export function generateStaticParams() {
  return getAllPostSlugs().map(slug => ({ slug }))
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { locale, slug } = (await params) as { locale: Locale; slug: string }
  const post = getPostForLocale(slug, locale)
  if (!post) return {}
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      type: 'article',
      publishedTime: post.date,
      authors: [siteConfig.name],
      images: [{ url: '/og/default.png', width: 1200, height: 630 }],
    },
    alternates: {
      canonical: `${siteConfig.url}/${locale}/blog/${slug}`,
      languages: {
        it: `${siteConfig.url}/it/blog/${slug}`,
        en: `${siteConfig.url}/en/blog/${slug}`,
      },
    },
  }
}

export default async function PostPage({ params }: PostPageProps) {
  const { locale, slug } = (await params) as { locale: Locale; slug: string }
  const post = getPostForLocale(slug, locale)
  if (!post) notFound()

  const t = getTranslations(locale)

  return (
    <div className="max-w-5xl mx-auto lg:grid lg:grid-cols-[1fr_220px] lg:gap-12">
      <article className="max-w-2xl">
        <header>
          <BlogArticleTitle slug={slug}>{post.title}</BlogArticleTitle>
          <div className="mt-3 flex items-center gap-3 text-sm text-muted">
            <time dateTime={post.date}>{formatDate(post.date, locale)}</time>
            <span aria-hidden="true">·</span>
            <span>
              {post.metadata.readingTime} {t.blog.minRead}
            </span>
          </div>
        </header>
        <div className="prose mt-12 md:mt-16 max-w-none">
          <MDXContent code={post.content} />
        </div>
        <BlogDisclaimer locale={locale} />
      </article>
      <aside className="hidden lg:block">
        <TableOfContents toc={post.toc} onThisPageLabel={t.blog.onThisPage} />
      </aside>
    </div>
  )
}
