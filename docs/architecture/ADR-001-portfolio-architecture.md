# Portfolio Site Architecture

**Source:** Task 001 (April 2026)

## Decision

Build a static-export Next.js portfolio with Velite MDX blog, route-based i18n, and a Swiss-inspired design system — optimized for zero-cost serverless deploy and long-term visual durability.

## Why

- Portfolio sites age poorly when tied to visual trends or vendor-specific features
- Static export (`output: 'export'`) eliminates runtime dependencies and vendor lock-in
- Velite provides type-safe content with Zod validation while keeping raw MDX files portable
- Route-based i18n (`/[locale]/...`) works with static export — no middleware or server runtime needed
- Swiss/International Typographic Style chosen for timelessness over trendy aesthetics

## Solution

### Tech Stack

| Layer      | Choice                                                   | Rationale                                                   |
| ---------- | -------------------------------------------------------- | ----------------------------------------------------------- |
| Framework  | Next.js 16 (App Router)                                  | Static generation, SEO-native, mature ecosystem             |
| Content    | Velite + MDX                                             | Zod-validated frontmatter, type-safe imports from `.velite` |
| Styling    | Tailwind CSS v4 + `@tailwindcss/typography`              | Utility-first, prose classes for blog rendering             |
| Animations | Framer Motion                                            | Page transitions via `AnimatePresence`, layout animations   |
| Fonts      | Inter via `next/font`                                    | Zero layout shift, universal sans-serif                     |
| Tooling    | Biome (lint+format), Lefthook (git hooks), Bun (runtime) | Single-tool lint/format, fast CI                            |
| Deploy     | Static export → any CDN                                  | Platform-agnostic: CF Pages, GCP, Vercel, GitHub Pages      |

### Key Architectural Patterns

#### 1. Velite Content Pipeline

Velite runs as a side-effect import in `next.config.ts`, building content at dev/build time. Collections are defined with Zod schemas and consumed as typed imports:

```ts
// velite.config.ts
collections: {
  posts: {
    name: 'Post',
    pattern: 'blog/**/*.mdx',
    schema: s.object({
      title: s.string().max(99),
      slug: s.string(),           // plain string — duplicates across locales
      lang: s.enum(['en', 'it']), // per-article language
      date: s.isodate(),
      description: s.string().max(200),
      tags: s.array(s.string()).default([]),
      metadata: s.metadata(),     // reading time, word count
      toc: s.toc(),               // auto-generated table of contents
      content: s.mdx(),
    }).transform(data => ({ ...data, permalink: `/blog/${data.slug}` })),
  },
}

// Usage in pages — via locale-aware helpers, not direct import:
import { getPost, getPostList, getAllSlugs } from '@/lib/blog'
```

Content is organized in per-article directories with one MDX file per language:

```
content/blog/
  neverthrow-rop/
    en.mdx
    it.mdx
  thinking-in-nx/
    en.mdx
    it.mdx
```

#### 1b. Blog i18n Resolution Layer

Pages do not import `posts` directly. A helper module (`src/lib/blog.ts`) encapsulates locale-aware lookup with a fallback chain:

1. Exact match: `slug === target && lang === locale`
2. English fallback: `slug === target && lang === 'en'`
3. Any available: `slug === target` (first match)

The list page deduplicates by slug, preferring the active locale's version.

```ts
// src/lib/blog.ts
export function getPost(slug: string, locale: Locale) { /* fallback chain */ }
export function getPostList(locale: Locale) { /* deduplicated, locale-preferred */ }
export function getAllSlugs() { /* unique slugs for generateStaticParams */ }
```

#### 2. Route-Based i18n (No Library)

i18n uses a `[locale]` route segment with typed translation objects — no external i18n library. The approach works with static export via `generateStaticParams`:

```ts
// src/lib/i18n/config.ts
export const LOCALES = ['it', 'en'] as const
export type Locale = (typeof LOCALES)[number]
export const DEFAULT_LOCALE: Locale = 'it'

// src/lib/i18n/index.ts
const translations: Record<Locale, Translations> = { it, en }
export function getTranslations(locale: Locale): Translations {
  return translations[locale]
}

// src/app/[locale]/layout.tsx
export function generateStaticParams() {
  return LOCALES.map(locale => ({ locale }))
}
```

Data files (experiences, projects) store content as `Record<Locale, string>` and expose `getExperiences(locale)` accessors that resolve to the correct language.

#### 3. Static Export with Root Redirect

`next.config.ts` sets `output: 'export'`. The root `/` redirects to the default locale via the root `page.tsx`. All pages are pre-rendered at build time — no server runtime.

#### 4. Build-Time SEO Asset Pipeline

Static export means no runtime image generation or server-side rendering. All SEO assets (OG images, favicons, RSS feeds) are generated by build-time scripts that run between `velite build` and `next build`:

```
velite build → generate-favicons → generate-og → generate-rss → next build
```

Scripts read from `.velite/posts.json` (velite output) and write to `public/`. Next.js copies `public/` into the export output unchanged.

```ts
// scripts/generate-og.ts — satori + @resvg/resvg-js
// Reads: .velite/posts.json → Writes: public/og/default.png, public/og/blog/{slug}.png

// scripts/generate-favicons.ts — satori + @resvg/resvg-js
// Writes: public/favicon.svg, public/favicon.ico, public/favicon-*.png, public/apple-touch-icon.png

// scripts/generate-rss.ts — raw XML generation
// Reads: .velite/posts.json → Writes: public/{locale}/feed.xml
```

JSON-LD structured data is embedded via a generic `<JsonLd>` component that renders `<script type="application/ld+json">` with XSS-hardened output (HTML `<` escaped to `\u003c`).

## Implementation Phases

| Phase              | What Changed                                                               |
| ------------------ | -------------------------------------------------------------------------- |
| 1. Scaffolding     | Next.js + Tailwind + Biome + Lefthook + Bun base setup                     |
| 2. Design system   | Typography tokens, header/footer, page transitions (Framer Motion)         |
| 3. Home page       | Professional intro, navigation links                                       |
| 4. Experience page | Timeline list with locale-aware data from TypeScript file                  |
| 5. Projects page   | OSS contributions list with tech stack tags                                |
| 6. Blog system     | Velite pipeline, MDX rendering, post index + detail pages, TOC             |
| 7. SEO & deploy    | Sitemap, robots.txt, OG images, static export verification                 |
| 8. i18n            | `[locale]` routing, translation files, locale-aware metadata               |
| 9. Blog i18n       | Per-article `lang` field, locale fallback helpers, directory-based content |

## Current Structure

```
content/blog/              # MDX blog posts — per-article directories with en.mdx / it.mdx
scripts/
├── generate-favicons.ts   # Build-time favicon generation (satori + resvg)
├── generate-og.ts         # Build-time OG image generation (satori + resvg)
├── generate-rss.ts        # Build-time RSS feed generation (raw XML)
└── lib/
    └── fonts.ts           # Shared Inter font loader for satori
public/
├── favicon.svg            # SVG favicon with light/dark prefers-color-scheme
├── site.webmanifest       # PWA web manifest
├── og/                    # Generated OG images (default.png, blog/{slug}.png)
└── {locale}/
    └── feed.xml           # Generated RSS feeds per locale
src/
├── app/
│   ├── layout.tsx          # Root layout (html, body, fonts, icons, manifest, theme-color)
│   ├── page.tsx            # Root redirect to default locale
│   ├── robots.ts           # Robots.txt generation
│   ├── sitemap.ts          # Sitemap generation (real dates, changeFrequency)
│   └── [locale]/
│       ├── layout.tsx      # Locale layout (header, footer, transitions, RSS alternate)
│       ├── page.tsx         # Home page (Person + BreadcrumbList JSON-LD)
│       ├── blog/
│       │   ├── page.tsx     # Blog index (CollectionPage JSON-LD)
│       │   └── [slug]/
│       │       └── page.tsx # Blog post detail (BlogPosting JSON-LD, per-post OG)
│       ├── experience/
│       │   └── page.tsx     # Experience timeline (BreadcrumbList JSON-LD)
│       └── projects/
│           └── page.tsx     # Projects list (BreadcrumbList JSON-LD)
├── components/
│   ├── json-ld.tsx         # Generic JSON-LD <script> renderer (XSS-hardened)
│   ├── mdx-content.tsx     # MDX renderer
│   ├── page-transition.tsx # Framer Motion page transitions
│   ├── toc.tsx             # Table of contents
│   ├── lang-setter.tsx     # Locale detection from URL
│   ├── layout/             # Header, footer (with RSS link)
│   └── mdx/                # Custom MDX components (alert, etc.)
└── lib/
    ├── blog.ts             # Locale-aware post resolution (getPost, getPostList, getAllSlugs)
    ├── data.ts             # Experience/project data with locale accessors
    ├── format.ts           # Date formatting utilities
    ├── metadata.ts         # Site config, social links, metadata helpers
    └── i18n/
        ├── config.ts       # Locale constants and types
        ├── hooks.ts        # Client-side locale hook
        ├── index.ts        # getTranslations()
        └── translations/   # en.ts, it.ts
```

## Design Decisions Not Taken

- **No external i18n library** (next-intl, next-i18next) — static export incompatibility, unnecessary complexity for 2 locales
- **No CMS** — content lives in the repo as MDX and TypeScript data files
- **No `next-mdx-remote`** — archived Feb 2026; Velite chosen as maintained alternative
- **No dark mode** (initially) — palette defined but not implemented
- **No parallax/scroll-triggered animations** — intentionally excluded for timelessness

## Updates

| Date       | Task | Summary                                                                                                                        |
| ---------- | ---- | ------------------------------------------------------------------------------------------------------------------------------ |
| April 2026 | 004  | Blog i18n: added `lang` field to Velite schema, per-article directories, locale fallback helpers                               |
| April 2026 | 005  | SEO: build-time asset pipeline (OG images, favicons, RSS via satori/resvg), JSON-LD structured data, theme-color, web manifest |
