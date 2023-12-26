import createMiddleware from 'next-intl/middleware';
import { withAuth } from 'next-auth/middleware';

import {
  locales,
  localePrefix,
  stackMiddlewares,
} from '@portfolio/frontend-utils/server';
import { NextMiddleware } from 'next/server';

const intlMiddleware = createMiddleware({
  defaultLocale: 'en',
  localePrefix,
  locales,
});

const authMiddleware = withAuth() as unknown as NextMiddleware;

export default stackMiddlewares([
  {
    middleware: intlMiddleware,
    matcher: ['^/$', '^/(it|en)(/.*)?'],
  },
  {
    middleware: authMiddleware,
    matcher: ['^/(admin)(/.*)?'],
  },
]);
