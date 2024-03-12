/**
 * next-auth
 * https://github.com/nextauthjs/next-auth/blob/main/apps/examples/nextjs/auth.ts
 */

import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { prisma } from '^/lib/server/prisma';
import { ISODateString, default as createAuthHandler, getServerSession, type AuthOptions } from 'next-auth';
import { AdapterUser } from 'next-auth/adapters';
import { default as createGitHubProvider } from 'next-auth/providers/github';
import { notFound } from 'next/navigation';

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
      return {
        ...session,
        user: {
          ...session.user,
          ...user,
        },
      };
    },
  },
};

export const handler = createAuthHandler(config);

interface Session {
  expires: ISODateString;
  user?: AdapterUser;
}

function getSession(): Promise<Session | null> {
  return getServerSession(config) as Promise<Session>;
}

export async function getSessionUser(): Promise<AdapterUser | null> {
  const session = await getSession();
  return session?.user ?? null;
}

export async function useUser(): Promise<AdapterUser> {
  const session = await getSession();

  if (!session || !session.user) {
    throw notFound();
  }

  return session.user;
}
