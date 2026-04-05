'use client'

import Link from 'next/link'

interface BlogPostTitleProps {
  slug: string
  href: string
  children: React.ReactNode
}

export function BlogPostTitle({ href, children }: BlogPostTitleProps) {
  return (
    <h2 className="text-foreground font-medium">
      <Link href={href} className="text-foreground link-hover">
        <span>{children}</span>
      </Link>
    </h2>
  )
}
