/**
 * next-auth
 * https://github.com/nextauthjs/next-auth/blob/main/apps/examples/nextjs/auth.ts
 */

import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { default as createAuthHandler, getServerSession, type AuthOptions } from 'next-auth';
import { default as createGitHubProvider } from 'next-auth/providers/github';
import { notFound } from 'next/navigation';
import { prisma } from './prisma';

const config: AuthOptions = {
  theme: {
    logo: '/logo.png',
  },
  // https://authjs.dev/reference/adapter/prisma
  adapter: PrismaAdapter(prisma),
  providers: [
    // https://next-auth.js.org/getting-started/example#add-api-route
    createGitHubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
  ],
  // https://next-auth.js.org/configuration/callbacks
  callbacks: {
    session({ session, user, token }) {
      return session;
    },
  },
};

export const handler = createAuthHandler(config);

export function useSession() {
  return getServerSession(config);
}

export async function useUser() {
  const session = await getServerSession(config);

  if (!session || !session.user) {
    throw notFound();
  }

  return session.user;
}
