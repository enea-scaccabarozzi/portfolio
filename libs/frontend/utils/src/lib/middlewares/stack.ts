import {
  NextRequest,
  NextResponse,
  NextMiddleware,
  NextFetchEvent,
} from 'next/server';

import { IMiddlewareConfig } from '@portfolio/frontend-types';

export const stackMiddlewares = (
  middlewareConfigs: IMiddlewareConfig[]
): NextMiddleware => {
  return async (req: NextRequest, ev: NextFetchEvent) => {
    for (const { middleware, matcher } of middlewareConfigs) {
      if (matchRequest(req, matcher)) {
        const response = await middleware(req, ev);
        if (response instanceof NextResponse) {
          return response;
        }
      }
    }
    return NextResponse.next();
  };
};

const matchRequest = (req: NextRequest, matcher: string[]): boolean => {
  return matcher.some((pattern) =>
    new RegExp(pattern).test(req.nextUrl.pathname)
  );
};
