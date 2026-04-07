import { mkdir, readFile, writeFile } from 'node:fs/promises'

const SITE_URL = 'https://eneascaccabarozzi.xyz'

interface PostData {
  title: string
  slug: string
  lang: string
  date: string
  description: string
  tags: string[]
  permalink: string
}

interface FeedConfig {
  locale: string
  title: string
  description: string
}

const feedConfigs: FeedConfig[] = [
  {
    locale: 'en',
    title: 'Enea Scaccabarozzi — Blog',
    description: 'Technical notes and knowledge collected over the years.',
  },
  {
    locale: 'it',
    title: 'Enea Scaccabarozzi — Blog',
    description: 'Note tecniche e conoscenze accumulate negli anni.',
  },
]

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

function buildRssFeed(posts: PostData[], config: FeedConfig): string {
  const items = posts
    .map(
      post => `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${SITE_URL}/${config.locale}${post.permalink}/</link>
      <guid isPermaLink="true">${SITE_URL}/${config.locale}${post.permalink}/</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <description>${escapeXml(post.description)}</description>${
        post.tags.length > 0
          ? `\n${post.tags.map(tag => `      <category>${escapeXml(tag)}</category>`).join('\n')}`
          : ''
      }
    </item>`,
    )
    .join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(config.title)}</title>
    <link>${SITE_URL}/${config.locale}/blog/</link>
    <description>${escapeXml(config.description)}</description>
    <language>${config.locale}</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${SITE_URL}/${config.locale}/feed.xml" rel="self" type="application/rss+xml"/>
${items}
  </channel>
</rss>
`
}

async function main() {
  const raw = await readFile('.velite/posts.json', 'utf-8')
  const allPosts: PostData[] = JSON.parse(raw)

  for (const config of feedConfigs) {
    const slugs = [...new Set(allPosts.map(p => p.slug))]
    const posts = slugs
      .map(slug => {
        const bySlug = allPosts.filter(p => p.slug === slug)
        return (
          bySlug.find(p => p.lang === config.locale) ??
          bySlug.find(p => p.lang === 'en') ??
          bySlug[0]
        )
      })
      .filter((p): p is PostData => p !== undefined)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

    const xml = buildRssFeed(posts, config)
    const dir = `public/${config.locale}`
    await mkdir(dir, { recursive: true })
    await writeFile(`${dir}/feed.xml`, xml, 'utf-8')
    console.log(`✓ Generated ${dir}/feed.xml (${posts.length} posts)`)
  }
}

main().catch(err => {
  console.error('Failed to generate RSS feeds:', err)
  process.exit(1)
})
