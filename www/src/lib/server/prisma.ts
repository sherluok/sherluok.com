// https://vercel.com/guides/nextjs-prisma-postgres

import { PrismaClient } from '../../../prisma/client';
export * from '../../../prisma/client';

let prisma: PrismaClient;

declare global {
  var __prisma: PrismaClient;
}

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  if (!global.__prisma) {
    global.__prisma = new PrismaClient();
  }
  prisma = global.__prisma;
}

export {
  prisma
};
