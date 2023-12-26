import { NextMiddleware } from 'next/server';

export type IMiddlewareConfig = {
  middleware: NextMiddleware;
  matcher: string[];
};
