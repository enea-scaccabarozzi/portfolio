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
      slug: s.slug('posts'),
      date: s.isodate(),
      description: s.string().max(200),
      tags: s.array(s.string()).default([]),
      metadata: s.metadata(),   // reading time, word count
      toc: s.toc(),             // auto-generated table of contents
      content: s.mdx(),
    }).transform(data => ({ ...data, permalink: `/blog/${data.slug}` })),
  },
}

// Usage in pages:
import { posts } from '.velite'
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

## Implementation Phases

| Phase              | What Changed                                                       |
| ------------------ | ------------------------------------------------------------------ |
| 1. Scaffolding     | Next.js + Tailwind + Biome + Lefthook + Bun base setup             |
| 2. Design system   | Typography tokens, header/footer, page transitions (Framer Motion) |
| 3. Home page       | Professional intro, navigation links                               |
| 4. Experience page | Timeline list with locale-aware data from TypeScript file          |
| 5. Projects page   | OSS contributions list with tech stack tags                        |
| 6. Blog system     | Velite pipeline, MDX rendering, post index + detail pages, TOC     |
| 7. SEO & deploy    | Sitemap, robots.txt, OG images, static export verification         |
| 8. i18n            | `[locale]` routing, translation files, locale-aware metadata       |

## Current Structure

```
content/blog/              # MDX blog posts (Velite source)
src/
├── app/
│   ├── layout.tsx          # Root layout (html, body, fonts)
│   ├── page.tsx            # Root redirect to default locale
│   ├── robots.ts           # Robots.txt generation
│   ├── sitemap.ts          # Sitemap generation
│   └── [locale]/
│       ├── layout.tsx      # Locale layout (header, footer, transitions)
│       ├── page.tsx         # Home page
│       ├── blog/
│       │   ├── page.tsx     # Blog index
│       │   └── [slug]/
│       │       └── page.tsx # Blog post detail
│       ├── experience/
│       │   └── page.tsx     # Experience timeline
│       └── projects/
│           └── page.tsx     # Projects list
├── components/
│   ├── mdx-content.tsx     # MDX renderer
│   ├── page-transition.tsx # Framer Motion page transitions
│   ├── toc.tsx             # Table of contents
│   ├── lang-setter.tsx     # Locale detection from URL
│   ├── layout/             # Header, footer
│   └── mdx/                # Custom MDX components (alert, etc.)
└── lib/
    ├── data.ts             # Experience/project data with locale accessors
    ├── format.ts           # Date formatting utilities
    ├── metadata.ts         # Site config and metadata helpers
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
