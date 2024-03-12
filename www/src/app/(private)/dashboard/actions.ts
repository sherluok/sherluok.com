'use server';

import { getSessionUser } from '^/lib/server/auth';
import { Language, prisma } from '^/lib/server/prisma';
import { revalidatePath } from 'next/cache';

export async function createNewPost() {
  const user = await getSessionUser();

  if (!user) {
    throw new Error('Unauthorized!');
  }

  const post = await prisma.post.create({
    data: {
      author: {
        connect: {
          id: user.id,
        },
      },
      title: 'Initial Title',
      description: 'Initial description...',
      language: Language.zhCN,
      source: `Initial content...`,
      drafts: {
        create: {
          source: `Initial draft content...`,
        },
      },
    },
  });
  console.log('createNewPost()');

  revalidatePath('/dashboard/posts');

  return post;
}
