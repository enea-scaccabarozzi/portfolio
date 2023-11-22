import { initTRPC } from '@trpc/server';

import { createRouter } from '../generated/routers';

const t = initTRPC.context().create();

export const modelRouter = createRouter(t.router, t.procedure);
