import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { BlogArticleTitle } from '@/components/blog-article-title'
import { JsonLd } from '@/components/json-ld'
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
    keywords: post.tags,
    openGraph: {
      type: 'article',
      publishedTime: post.date,
      authors: [siteConfig.name],
      tags: post.tags,
      images: [{ url: `/og/blog/${slug}.png`, width: 1200, height: 630 }],
    },
    alternates: {
      canonical: `${siteConfig.url}/${locale}/blog/${slug}/`,
      languages: {
        it: `${siteConfig.url}/it/blog/${slug}/`,
        en: `${siteConfig.url}/en/blog/${slug}/`,
      },
    },
  }
}

export default async function PostPage({ params }: PostPageProps) {
  const { locale, slug } = (await params) as { locale: Locale; slug: string }
  const post = getPostForLocale(slug, locale)
  if (!post) notFound()

  const t = getTranslations(locale)

  const canonicalUrl = `${siteConfig.url}/${locale}/blog/${slug}/`

  const blogPostingJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    url: canonicalUrl,
    keywords: post.tags,
    author: {
      '@type': 'Person',
      name: siteConfig.name,
      url: `${siteConfig.url}/`,
    },
    image: `${siteConfig.url}/og/blog/${slug}.png`,
    mainEntityOfPage: { '@type': 'WebPage', '@id': canonicalUrl },
    publisher: {
      '@type': 'Person',
      name: siteConfig.name,
      url: `${siteConfig.url}/`,
    },
  }

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: t.breadcrumbs.home,
        item: `${siteConfig.url}/${locale}/`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: t.breadcrumbs.blog,
        item: `${siteConfig.url}/${locale}/blog/`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: canonicalUrl,
      },
    ],
  }

  return (
    <>
      <JsonLd data={blogPostingJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
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
    </>
  )
}
