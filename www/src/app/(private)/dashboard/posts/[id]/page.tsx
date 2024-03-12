import { NextPageProps } from '^/lib/next';
import { getColorSchemeCookieValue } from '^/lib/server/color-scheme';
import { prisma } from '^/lib/server/prisma';
import { notFound } from 'next/navigation';
import { PostEditor } from './clients';

export default async function Page(props: NextPageProps<'id'>) {
  const post = await prisma.post.findUnique({
    where: {
      id: props.params.id,
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

  if (!post || !post.drafts) {
    return notFound();
  }

  const colorScheme = getColorSchemeCookieValue();

  return (
    <PostEditor
      colorScheme={colorScheme}
      postId={props.params.id}
      initialValue={post.drafts[0].source}
    />
  );
}
