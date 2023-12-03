import { z } from 'zod';

import { createTRPCRouter, publicProcedure } from '../trpc';

export const testRouter = createTRPCRouter({
  all: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.test.findMany({ orderBy: { id: 'desc' } });
  }),
  byId: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.prisma.test.findFirst({ where: { id: input.id } });
    }),
  create: publicProcedure
    .input(
      z.object({
        text: z.string().min(1),
      })
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.test.create({ data: input });
    }),
  delete: publicProcedure.input(z.string()).mutation(({ ctx, input }) => {
    return ctx.prisma.test.delete({ where: { id: input } });
  }),
});
