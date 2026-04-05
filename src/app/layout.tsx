import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { siteConfig } from '@/lib/metadata'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: siteConfig.name, template: `%s — ${siteConfig.name}` },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // biome-ignore lint/a11y/useHtmlLang: LangSetter sets lang client-side from URL locale
    <html className={inter.variable}>
      <body className="bg-background text-foreground font-sans antialiased min-h-screen">
        {children}
      </body>
    </html>
  )
}
