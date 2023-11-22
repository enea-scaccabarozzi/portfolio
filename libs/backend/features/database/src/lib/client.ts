import { env } from '@portfolio/backend-shared';
import { PrismaClient } from '@prisma/client';

export * from '@prisma/client';

const globalForPrisma = globalThis as { prisma?: PrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log:
      env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
  });

if (env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
