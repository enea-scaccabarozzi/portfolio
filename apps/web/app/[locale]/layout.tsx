import { redirect } from 'next/navigation';
import { Inter, Roboto_Mono } from 'next/font/google';

import { locales } from '@portfolio/frontend-utils';

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
  if (!locales.some((l) => l === locale)) {
    redirect('/not/found');
  }

  return (
    <html lang={locale} className={`${inter.variable} ${roboto_mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
