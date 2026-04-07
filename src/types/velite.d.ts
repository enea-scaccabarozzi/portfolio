declare module '.velite' {
  export interface TocItem {
    title: string
    url: string
    items?: TocItem[]
  }

  export interface Post {
    title: string
    slug: string
    lang: 'en' | 'it'
    date: string
    description: string
    tags: string[]
    metadata: {
      readingTime: string
    }
    toc: TocItem[]
    content: string
    permalink: string
  }

  export const posts: Post[]
}
