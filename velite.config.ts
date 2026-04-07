import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import { defineConfig, s } from 'velite'

export default defineConfig({
  mdx: {
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: {
            dark: 'rose-pine-moon',
            light: 'rose-pine-dawn',
          },
          keepBackground: false,
        },
      ],
      [
        rehypeAutolinkHeadings,
        {
          behavior: 'wrap',
          properties: {
            className: ['heading-anchor'],
          },
        },
      ],
    ],
  },
  collections: {
    posts: {
      name: 'Post',
      pattern: 'blog/**/*.mdx',
      schema: s
        .object({
          title: s.string().max(99),
          slug: s.string(),
          lang: s.enum(['en', 'it']),
          date: s.isodate(),
          description: s.string().max(200),
          tags: s.array(s.string()).default([]),
          metadata: s.metadata(),
          toc: s.toc(),
          content: s.mdx(),
        })
        .transform(data => ({ ...data, permalink: `/blog/${data.slug}` })),
    },
  },
})
