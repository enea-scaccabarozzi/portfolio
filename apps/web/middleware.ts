import createMiddleware from 'next-intl/middleware';
import { locales, localePrefix } from '@portfolio/frontend-utils/server';

export default createMiddleware({
  defaultLocale: 'en',
  localePrefix,
  locales,
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(it|en)/:path*'],
};
