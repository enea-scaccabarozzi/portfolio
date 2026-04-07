import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { Resvg } from '@resvg/resvg-js'
import satori from 'satori'
import { loadInterFont } from './lib/fonts'

const WIDTH = 1200
const HEIGHT = 630

interface PostData {
  title: string
  slug: string
  lang: string
  date: string
}

async function loadPosts(): Promise<PostData[]> {
  const raw = await readFile('.velite/posts.json', 'utf-8')
  const posts: PostData[] = JSON.parse(raw)

  const bySlug = new Map<string, PostData>()
  for (const post of posts) {
    const existing = bySlug.get(post.slug)
    if (!existing || (post.lang === 'en' && existing.lang !== 'en')) {
      bySlug.set(post.slug, post)
    }
  }
  return Array.from(bySlug.values())
}

async function renderOgImage(
  element: Parameters<typeof satori>[0],
  fontData: ArrayBuffer,
): Promise<Buffer> {
  const svg = await satori(element, {
    width: WIDTH,
    height: HEIGHT,
    fonts: [{ name: 'Inter', data: fontData, weight: 600, style: 'normal' }],
  })
  const resvg = new Resvg(svg, { fitTo: { mode: 'width', value: WIDTH } })
  return Buffer.from(resvg.render().asPng())
}

function defaultOgElement(): Parameters<typeof satori>[0] {
  return {
    type: 'div',
    props: {
      style: {
        width: WIDTH,
        height: HEIGHT,
        display: 'flex',
        flexDirection: 'column' as const,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fafaf9',
      },
      children: [
        {
          type: 'span',
          props: {
            style: {
              fontSize: 120,
              fontFamily: 'Inter',
              fontWeight: 600,
              color: '#1c1917',
            },
            children: 'ES',
          },
        },
        {
          type: 'span',
          props: {
            style: {
              fontSize: 28,
              fontFamily: 'Inter',
              fontWeight: 600,
              color: '#78716c',
              marginTop: 16,
            },
            children: 'eneascaccabarozzi.xyz',
          },
        },
      ],
    },
  }
}

function postOgElement(title: string, date: string): Parameters<typeof satori>[0] {
  const formatted = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
  return {
    type: 'div',
    props: {
      style: {
        width: WIDTH,
        height: HEIGHT,
        display: 'flex',
        flexDirection: 'column' as const,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fafaf9',
        padding: 60,
      },
      children: [
        {
          type: 'span',
          props: {
            style: {
              fontSize: 48,
              fontFamily: 'Inter',
              fontWeight: 600,
              color: '#1c1917',
              textAlign: 'center' as const,
            },
            children: title,
          },
        },
        {
          type: 'span',
          props: {
            style: {
              fontSize: 24,
              fontFamily: 'Inter',
              fontWeight: 600,
              color: '#78716c',
              marginTop: 24,
            },
            children: 'Enea Scaccabarozzi',
          },
        },
        {
          type: 'span',
          props: {
            style: {
              fontSize: 20,
              fontFamily: 'Inter',
              fontWeight: 600,
              color: '#78716c',
              marginTop: 8,
            },
            children: formatted,
          },
        },
      ],
    },
  }
}

async function main(): Promise<void> {
  console.log('Generating OG images...')
  const fontData = await loadInterFont()

  await mkdir('public/og/blog', { recursive: true })

  const defaultPng = await renderOgImage(defaultOgElement(), fontData)
  await writeFile('public/og/default.png', defaultPng)
  console.log('  public/og/default.png')

  const posts = await loadPosts()
  for (const post of posts) {
    const safeSlug = post.slug.replace(/[^a-z0-9-]/gi, '-')
    const png = await renderOgImage(postOgElement(post.title, post.date), fontData)
    await writeFile(`public/og/blog/${safeSlug}.png`, png)
    console.log(`  public/og/blog/${safeSlug}.png`)
  }

  console.log('OG images generated successfully')
}

main().catch(e => {
  console.error(e)
  process.exit(1)
})
