import { toRehypePrettyCodeOptions } from '^/lib/common/color-scheme';
import { cx } from '^/lib/common/css';
import { NextPageProps } from '^/lib/next';
import { getColorSchemeCookieValue } from '^/lib/server/color-scheme';
import { prisma } from '^/lib/server/prisma';
import { mdx } from '^/mdx.css';
import { GlobalFooter } from '^/parts/global-footer';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';
import { default as rehypePrettyCode } from 'rehype-pretty-code';
import * as s from './page.css';

export default async function PostPage(props: NextPageProps<'id'>) {
  const post = await prisma.post.findUnique({
    where: {
      id: props.params.id,
      published: true,
      deletedAt: null,
    },
  });

  if (!post) {
    return notFound();
  }

  const colorScheme = getColorSchemeCookieValue();

  return (
    <body className={s.container}>
      <main className={cx(s.main, mdx)}>
        <MDXRemote
          source={post.source}
          options={{
            mdxOptions: {
              rehypePlugins: [
                [rehypePrettyCode as any, toRehypePrettyCodeOptions(colorScheme)],
              ],
            },
          }}
        />
      </main>
      <GlobalFooter />
    </body>
  );
}
