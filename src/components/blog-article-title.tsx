'use client'

interface BlogArticleTitleProps {
  slug: string
  children: React.ReactNode
}

export function BlogArticleTitle({ children }: BlogArticleTitleProps) {
  return (
    <h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground">
      {children}
    </h1>
  )
}
