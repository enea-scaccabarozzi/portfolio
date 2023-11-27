/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, type ProcReturns, type PrismaClient, db } from '.';
import $Schema from '@zenstackhq/runtime/zod/input';
import { checkRead, checkMutate } from '../helper';
import type { Prisma } from '@prisma/client';
import type {
    UseTRPCMutationOptions,
    UseTRPCMutationResult,
    UseTRPCQueryOptions,
    UseTRPCQueryResult,
    UseTRPCInfiniteQueryOptions,
    UseTRPCInfiniteQueryResult,
} from '@trpc/react-query/shared';
import type { TRPCClientErrorLike } from '@trpc/client';
import type { AnyRouter } from '@trpc/server';

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

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    aggregate: {
        useQuery: <T extends Prisma.TestAggregateArgs>(
            input: Prisma.Subset<T, Prisma.TestAggregateArgs>,
            opts?: UseTRPCQueryOptions<
                string,
                T,
                Prisma.GetTestAggregateType<T>,
                Prisma.GetTestAggregateType<T>,
                Error
            >,
        ) => UseTRPCQueryResult<Prisma.GetTestAggregateType<T>, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.TestAggregateArgs>(
            input: Omit<Prisma.Subset<T, Prisma.TestAggregateArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.GetTestAggregateType<T>, Error>,
        ) => UseTRPCInfiniteQueryResult<Prisma.GetTestAggregateType<T>, TRPCClientErrorLike<AppRouter>>;
    };
    create: {
        useMutation: <T extends Prisma.TestCreateArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.TestCreateArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.TestGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.TestGetPayload<T>,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.TestCreateArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.TestCreateArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.TestGetPayload<T>, Context>,
            ) => Promise<Prisma.TestGetPayload<T>>;
        };
    };
    deleteMany: {
        useMutation: <T extends Prisma.TestDeleteManyArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.TestDeleteManyArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.TestGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.BatchPayload,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.TestDeleteManyArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.TestDeleteManyArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>,
            ) => Promise<Prisma.BatchPayload>;
        };
    };
    delete: {
        useMutation: <T extends Prisma.TestDeleteArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.TestDeleteArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.TestGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.TestGetPayload<T>,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.TestDeleteArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.TestDeleteArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.TestGetPayload<T>, Context>,
            ) => Promise<Prisma.TestGetPayload<T>>;
        };
    };
    findFirst: {
        useQuery: <T extends Prisma.TestFindFirstArgs>(
            input: Prisma.SelectSubset<T, Prisma.TestFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.TestGetPayload<T>, Prisma.TestGetPayload<T>, Error>,
        ) => UseTRPCQueryResult<Prisma.TestGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.TestFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.TestFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.TestGetPayload<T>, Error>,
        ) => UseTRPCInfiniteQueryResult<Prisma.TestGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
    };
    findFirstOrThrow: {
        useQuery: <T extends Prisma.TestFindFirstOrThrowArgs>(
            input: Prisma.SelectSubset<T, Prisma.TestFindFirstOrThrowArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.TestGetPayload<T>, Prisma.TestGetPayload<T>, Error>,
        ) => UseTRPCQueryResult<Prisma.TestGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.TestFindFirstOrThrowArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.TestFindFirstOrThrowArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.TestGetPayload<T>, Error>,
        ) => UseTRPCInfiniteQueryResult<Prisma.TestGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
    };
    findMany: {
        useQuery: <T extends Prisma.TestFindManyArgs>(
            input: Prisma.SelectSubset<T, Prisma.TestFindManyArgs>,
            opts?: UseTRPCQueryOptions<
                string,
                T,
                Array<Prisma.TestGetPayload<T>>,
                Array<Prisma.TestGetPayload<T>>,
                Error
            >,
        ) => UseTRPCQueryResult<Array<Prisma.TestGetPayload<T>>, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.TestFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.TestFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.TestGetPayload<T>>, Error>,
        ) => UseTRPCInfiniteQueryResult<Array<Prisma.TestGetPayload<T>>, TRPCClientErrorLike<AppRouter>>;
    };
    findUnique: {
        useQuery: <T extends Prisma.TestFindUniqueArgs>(
            input: Prisma.SelectSubset<T, Prisma.TestFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.TestGetPayload<T>, Prisma.TestGetPayload<T>, Error>,
        ) => UseTRPCQueryResult<Prisma.TestGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.TestFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.TestFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.TestGetPayload<T>, Error>,
        ) => UseTRPCInfiniteQueryResult<Prisma.TestGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
    };
    findUniqueOrThrow: {
        useQuery: <T extends Prisma.TestFindUniqueOrThrowArgs>(
            input: Prisma.SelectSubset<T, Prisma.TestFindUniqueOrThrowArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.TestGetPayload<T>, Prisma.TestGetPayload<T>, Error>,
        ) => UseTRPCQueryResult<Prisma.TestGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.TestFindUniqueOrThrowArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.TestFindUniqueOrThrowArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.TestGetPayload<T>, Error>,
        ) => UseTRPCInfiniteQueryResult<Prisma.TestGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
    };
    groupBy: {
        useQuery: <
            T extends Prisma.TestGroupByArgs,
            HasSelectOrTake extends Prisma.Or<
                Prisma.Extends<'skip', Prisma.Keys<T>>,
                Prisma.Extends<'take', Prisma.Keys<T>>
            >,
            OrderByArg extends Prisma.True extends HasSelectOrTake
                ? { orderBy: Prisma.TestGroupByArgs['orderBy'] }
                : { orderBy?: Prisma.TestGroupByArgs['orderBy'] },
            OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>,
            ByFields extends Prisma.MaybeTupleToUnion<T['by']>,
            ByValid extends Prisma.Has<ByFields, OrderFields>,
            HavingFields extends Prisma.GetHavingFields<T['having']>,
            HavingValid extends Prisma.Has<ByFields, HavingFields>,
            ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False,
            InputErrors extends ByEmpty extends Prisma.True
                ? `Error: "by" must not be empty.`
                : HavingValid extends Prisma.False
                ? {
                      [P in HavingFields]: P extends ByFields
                          ? never
                          : P extends string
                          ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                          : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
                  }[HavingFields]
                : 'take' extends Prisma.Keys<T>
                ? 'orderBy' extends Prisma.Keys<T>
                    ? ByValid extends Prisma.True
                        ? {}
                        : {
                              [P in OrderFields]: P extends ByFields
                                  ? never
                                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                          }[OrderFields]
                    : 'Error: If you provide "take", you also need to provide "orderBy"'
                : 'skip' extends Prisma.Keys<T>
                ? 'orderBy' extends Prisma.Keys<T>
                    ? ByValid extends Prisma.True
                        ? {}
                        : {
                              [P in OrderFields]: P extends ByFields
                                  ? never
                                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                          }[OrderFields]
                    : 'Error: If you provide "skip", you also need to provide "orderBy"'
                : ByValid extends Prisma.True
                ? {}
                : {
                      [P in OrderFields]: P extends ByFields
                          ? never
                          : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
        >(
            input: Prisma.SubsetIntersection<T, Prisma.TestGroupByArgs, OrderByArg> & InputErrors,
            opts?: UseTRPCQueryOptions<
                string,
                T,
                {} extends InputErrors ? Prisma.GetTestGroupByPayload<T> : InputErrors,
                {} extends InputErrors ? Prisma.GetTestGroupByPayload<T> : InputErrors,
                Error
            >,
        ) => UseTRPCQueryResult<
            {} extends InputErrors ? Prisma.GetTestGroupByPayload<T> : InputErrors,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <
            T extends Prisma.TestGroupByArgs,
            HasSelectOrTake extends Prisma.Or<
                Prisma.Extends<'skip', Prisma.Keys<T>>,
                Prisma.Extends<'take', Prisma.Keys<T>>
            >,
            OrderByArg extends Prisma.True extends HasSelectOrTake
                ? { orderBy: Prisma.TestGroupByArgs['orderBy'] }
                : { orderBy?: Prisma.TestGroupByArgs['orderBy'] },
            OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>,
            ByFields extends Prisma.MaybeTupleToUnion<T['by']>,
            ByValid extends Prisma.Has<ByFields, OrderFields>,
            HavingFields extends Prisma.GetHavingFields<T['having']>,
            HavingValid extends Prisma.Has<ByFields, HavingFields>,
            ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False,
            InputErrors extends ByEmpty extends Prisma.True
                ? `Error: "by" must not be empty.`
                : HavingValid extends Prisma.False
                ? {
                      [P in HavingFields]: P extends ByFields
                          ? never
                          : P extends string
                          ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                          : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
                  }[HavingFields]
                : 'take' extends Prisma.Keys<T>
                ? 'orderBy' extends Prisma.Keys<T>
                    ? ByValid extends Prisma.True
                        ? {}
                        : {
                              [P in OrderFields]: P extends ByFields
                                  ? never
                                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                          }[OrderFields]
                    : 'Error: If you provide "take", you also need to provide "orderBy"'
                : 'skip' extends Prisma.Keys<T>
                ? 'orderBy' extends Prisma.Keys<T>
                    ? ByValid extends Prisma.True
                        ? {}
                        : {
                              [P in OrderFields]: P extends ByFields
                                  ? never
                                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                          }[OrderFields]
                    : 'Error: If you provide "skip", you also need to provide "orderBy"'
                : ByValid extends Prisma.True
                ? {}
                : {
                      [P in OrderFields]: P extends ByFields
                          ? never
                          : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
        >(
            input: Omit<Prisma.SubsetIntersection<T, Prisma.TestGroupByArgs, OrderByArg> & InputErrors, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<
                string,
                T,
                {} extends InputErrors ? Prisma.GetTestGroupByPayload<T> : InputErrors,
                Error
            >,
        ) => UseTRPCInfiniteQueryResult<
            {} extends InputErrors ? Prisma.GetTestGroupByPayload<T> : InputErrors,
            TRPCClientErrorLike<AppRouter>
        >;
    };
    updateMany: {
        useMutation: <T extends Prisma.TestUpdateManyArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.TestUpdateManyArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.TestGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.BatchPayload,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.TestUpdateManyArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.TestUpdateManyArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>,
            ) => Promise<Prisma.BatchPayload>;
        };
    };
    update: {
        useMutation: <T extends Prisma.TestUpdateArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.TestUpdateArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.TestGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.TestGetPayload<T>,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.TestUpdateArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.TestUpdateArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.TestGetPayload<T>, Context>,
            ) => Promise<Prisma.TestGetPayload<T>>;
        };
    };
    upsert: {
        useMutation: <T extends Prisma.TestUpsertArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.TestUpsertArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.TestGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.TestGetPayload<T>,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.TestUpsertArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.TestUpsertArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.TestGetPayload<T>, Context>,
            ) => Promise<Prisma.TestGetPayload<T>>;
        };
    };
    count: {
        useQuery: <T extends Prisma.TestCountArgs>(
            input: Prisma.Subset<T, Prisma.TestCountArgs>,
            opts?: UseTRPCQueryOptions<
                string,
                T,
                'select' extends keyof T
                    ? T['select'] extends true
                        ? number
                        : Prisma.GetScalarType<T['select'], Prisma.TestCountAggregateOutputType>
                    : number,
                'select' extends keyof T
                    ? T['select'] extends true
                        ? number
                        : Prisma.GetScalarType<T['select'], Prisma.TestCountAggregateOutputType>
                    : number,
                Error
            >,
        ) => UseTRPCQueryResult<
            'select' extends keyof T
                ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.TestCountAggregateOutputType>
                : number,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.TestCountArgs>(
            input: Omit<Prisma.Subset<T, Prisma.TestCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<
                string,
                T,
                'select' extends keyof T
                    ? T['select'] extends true
                        ? number
                        : Prisma.GetScalarType<T['select'], Prisma.TestCountAggregateOutputType>
                    : number,
                Error
            >,
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
                ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.TestCountAggregateOutputType>
                : number,
            TRPCClientErrorLike<AppRouter>
        >;
    };
}
