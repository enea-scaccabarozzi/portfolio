import { authRouter } from './router/auth';
import { modelRouter } from './router/model';
import { testRouter } from './router/example';
import { createTRPCRouter } from './trpc';

export const appRouter = createTRPCRouter({
  test: testRouter,
  auth: authRouter,
  model: modelRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
