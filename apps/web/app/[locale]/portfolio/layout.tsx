import { NextIntlClientProvider, useMessages } from 'next-intl';

import { FooterComponent } from '@portfolio/frontend-ui-shared/server';

interface IProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

export default function RootLayout({ children, params: { locale } }: IProps) {
  const messages = useMessages();
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
      <FooterComponent />
    </NextIntlClientProvider>
  );
}
