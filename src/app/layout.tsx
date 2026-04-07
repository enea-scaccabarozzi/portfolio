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
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // biome-ignore lint/a11y/useHtmlLang: LangSetter sets lang client-side from URL locale
    <html className={inter.variable}>
      <head>
        <meta name="theme-color" content="#fafaf9" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#0c0a09" media="(prefers-color-scheme: dark)" />
      </head>
      <body className="bg-background text-foreground font-sans antialiased min-h-screen">
        {children}
      </body>
    </html>
  )
}
