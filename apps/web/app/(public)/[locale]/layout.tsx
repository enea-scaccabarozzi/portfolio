'use client';

import { notFound } from 'next/navigation';
import { Inter, Roboto_Mono } from 'next/font/google';

import { RootProvider, locales } from '@portfolio/frontend-features-core';

import './global.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
});

interface IProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

export default function RootLayout({ children, params: { locale } }: IProps) {
  if (!locales.some((l) => l === locale)) notFound();

  return (
    <html lang={locale} className={`${inter.variable} ${roboto_mono.variable}`}>
      <body>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
