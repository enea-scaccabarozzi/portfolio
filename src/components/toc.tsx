'use client'

import { useEffect, useState } from 'react'

interface TocItem {
  title: string
  url: string
  items?: TocItem[]
}

interface TableOfContentsProps {
  toc: TocItem[]
  onThisPageLabel?: string
}

export function TableOfContents({ toc, onThisPageLabel }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    const headings = document.querySelectorAll(
      'article h2, article h3, article h4, article h5, article h6',
    )
    if (headings.length === 0) return

    const observer = new IntersectionObserver(
      entries => {
        const visible = entries.filter(e => e.isIntersecting)
        if (visible.length > 0) {
          const topmost = visible.reduce((a, b) =>
            a.boundingClientRect.top < b.boundingClientRect.top ? a : b,
          )
          setActiveId(topmost.target.id)
        }
      },
      { rootMargin: '0px 0px -80% 0px', threshold: 0 },
    )

    for (const heading of headings) {
      observer.observe(heading)
    }

    return () => observer.disconnect()
  }, [])

  if (toc.length === 0) return null

  return (
    <nav className="sticky top-24" aria-label="Table of contents">
      <p className="text-xs font-semibold uppercase tracking-wide text-muted mb-3">
        {onThisPageLabel ?? 'On this page'}
      </p>
      <TocList items={toc} activeId={activeId} depth={0} />
    </nav>
  )
}

function TocList({
  items,
  activeId,
  depth,
}: {
  items: TocItem[]
  activeId: string
  depth: number
}) {
  return (
    <ul className={depth > 0 ? 'ml-3' : ''}>
      {items.map(item => {
        const id = item.url.replace('#', '')
        const isActive = activeId === id
        return (
          <li key={item.url}>
            <a
              href={item.url}
              className={`block w-fit py-1 text-sm ${
                isActive ? 'text-foreground font-medium' : 'text-muted link-hover'
              }`}
            >
              {item.title}
            </a>
            {item.items && item.items.length > 0 && (
              <TocList items={item.items} activeId={activeId} depth={depth + 1} />
            )}
          </li>
        )
      })}
    </ul>
  )
}
