/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, type ProcReturns, type PrismaClient, db } from '.';
import $Schema from '@zenstackhq/runtime/zod/input';
import { checkRead, checkMutate } from '../helper';

export default function createRouter<Router extends RouterFactory<BaseConfig>, Proc extends ProcBuilder<BaseConfig>>(
    router: Router,
    procedure: Proc,
) {
    return router({
        aggregate: procedure
            .input($Schema.TestInputSchema.aggregate)
            .query(({ ctx, input }) => checkRead(db(ctx).test.aggregate(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.TestInputSchema)['aggregate'],
            ReturnType<PrismaClient['test']['aggregate']>
        >,

        create: procedure
            .input($Schema.TestInputSchema.create)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).test.create(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.TestInputSchema)['create'],
            ReturnType<PrismaClient['test']['create']>
        >,

        deleteMany: procedure
            .input($Schema.TestInputSchema.deleteMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).test.deleteMany(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.TestInputSchema)['deleteMany'],
            ReturnType<PrismaClient['test']['deleteMany']>
        >,

        delete: procedure
            .input($Schema.TestInputSchema.delete)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).test.delete(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.TestInputSchema)['delete'],
            ReturnType<PrismaClient['test']['delete']>
        >,

        findFirst: procedure
            .input($Schema.TestInputSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).test.findFirst(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.TestInputSchema)['findFirst'],
            ReturnType<PrismaClient['test']['findFirst']>
        >,

        findFirstOrThrow: procedure
            .input($Schema.TestInputSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).test.findFirstOrThrow(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.TestInputSchema)['findFirst'],
            ReturnType<PrismaClient['test']['findFirstOrThrow']>
        >,

        findMany: procedure
            .input($Schema.TestInputSchema.findMany)
            .query(({ ctx, input }) => checkRead(db(ctx).test.findMany(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.TestInputSchema)['findMany'],
            ReturnType<PrismaClient['test']['findMany']>
        >,

        findUnique: procedure
            .input($Schema.TestInputSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).test.findUnique(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.TestInputSchema)['findUnique'],
            ReturnType<PrismaClient['test']['findUnique']>
        >,

        findUniqueOrThrow: procedure
            .input($Schema.TestInputSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).test.findUniqueOrThrow(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.TestInputSchema)['findUnique'],
            ReturnType<PrismaClient['test']['findUniqueOrThrow']>
        >,

        groupBy: procedure
            .input($Schema.TestInputSchema.groupBy)
            .query(({ ctx, input }) => checkRead(db(ctx).test.groupBy(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.TestInputSchema)['groupBy'],
            ReturnType<PrismaClient['test']['groupBy']>
        >,

        updateMany: procedure
            .input($Schema.TestInputSchema.updateMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).test.updateMany(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.TestInputSchema)['updateMany'],
            ReturnType<PrismaClient['test']['updateMany']>
        >,

        update: procedure
            .input($Schema.TestInputSchema.update)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).test.update(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.TestInputSchema)['update'],
            ReturnType<PrismaClient['test']['update']>
        >,

        upsert: procedure
            .input($Schema.TestInputSchema.upsert)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).test.upsert(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.TestInputSchema)['upsert'],
            ReturnType<PrismaClient['test']['upsert']>
        >,

        count: procedure
            .input($Schema.TestInputSchema.count)
            .query(({ ctx, input }) => checkRead(db(ctx).test.count(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.TestInputSchema)['count'],
            ReturnType<PrismaClient['test']['count']>
        >,
    });
}
