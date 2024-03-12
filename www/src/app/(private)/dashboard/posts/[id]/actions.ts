'use server';

import { getSessionUser } from '^/lib/server/auth';
import { Language, prisma } from '^/lib/server/prisma';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

async function assertPermission() {
  const user = await getSessionUser();
  if (!user) {
    throw new Error(`Unauthorized!`);
  }
}

export async function saveDraft(postId: string, source: string) {
  await assertPermission();

  const post = await prisma.post.findUnique({
    where: {
      id: postId,
    },
    include: {
      drafts: {
        orderBy: {
          createdAt: 'desc',
        },
        take: 1,
      },
    },
  });

  if (!post) {
    throw new Error(`Unkndow post!`);
  }

  const draft = post.drafts[0];

  if (!draft) {
    throw new Error(`Unkndow draft!`);
  }

  if (draft.source === source) {
    return draft;
  }

  const second = 1000;
  const minute = 60 * second;

  // Update draft if less than 5 minute
  if (Date.now() - +draft.createdAt < 5 * minute) {
    await prisma.draft.update({
      where: {
        id: draft.id,
      },
      data: {
        source,
      },
    });
    return draft;
  }

  // Create new draft if more than 5 minute
  return await prisma.draft.create({
    data: {
      post: {
        connect: {
          id: postId,
        },
      },
      source,
    },
  });
}

export async function publishPost(postId: string) {
  await assertPermission();

  const post = await prisma.post.findUnique({
    where: {
      id: postId,
    },
    include: {
      drafts: {
        orderBy: {
          createdAt: 'desc',
        },
        take: 1,
      },
    },
  });

  if (!post) {
    throw new Error(`Unkndow post!`);
  }

  const draft = post.drafts[0];

  if (!draft) {
    throw new Error(`Unkndow draft!`);
  }

  await prisma.post.update({
    where: {
      id: postId,
    },
    data: {
      published: true,
      source: draft.source,
    },
  });

  revalidatePath(`/`);
  revalidatePath(`/post`);
  revalidatePath(`/post/${postId}`);
  revalidatePath(`/dashboard/posts`);

  // redirect(`/post/${postId}`);
}

export async function unpublishPost(postId: string) {
  await assertPermission();

  await prisma.post.update({
    where: {
      id: postId,
    },
    data: {
      published: false,
    },
  });

  revalidatePath(`/`);
  revalidatePath(`/post`);
  revalidatePath(`/post/${postId}`);
  revalidatePath(`/dashboard/posts`);

  // redirect(`/`);
}

export async function getHistoryDrafts(postId: string) {
  return await prisma.draft.findMany({
    where: {
      postId,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });
}

export async function getPostMetadata(postId: string) {
  return await prisma.post.findUnique({
    where: {
      id: postId,
    },
  });
}

export async function savePostMetadata(postId: string, data: {
  title: string;
  language: Language,
}) {
  await prisma.post.update({
    where: {
      id: postId,
    },
    data: data,
  });

  revalidatePath(`/dashboard/posts`);
}

export async function deletePost(postId: string) {
  await prisma.post.update({
    where: {
      id: postId,
    },
    data: {
      published: false,
      deletedAt: new Date(),
    },
  });

  revalidatePath(`/dashboard/posts`);

  redirect(`/dashboard/posts`);
}
