import { Button } from '^/components/button';
import { prisma } from '^/lib/server/prisma';
import Link from 'next/link';
import { PropsWithChildren } from 'react';
import { NewPostButton } from '../clients';
import * as s from './layout.css';

export default async function Layout(props: PropsWithChildren) {
  const posts = await prisma.post.findMany({
    where: {
      published: true,
      deletedAt: null,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  const unpublishedPosts = await prisma.post.findMany({
    where: {
      published: false,
      deletedAt: null,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  const deletedPosts = await prisma.post.findMany({
    where: {
      deletedAt: {
        not: null,
      },
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  return (
    <div className={s.container}>
      <div className={s.postList}>
        <NewPostButton />

        <div>
          <strong>Published</strong>
        </div>
        <ul>
          {posts.map(({ id, title }) => (
            <li key={id}>
              <Link href={`/dashboard/posts/${id}`}>{title}</Link>
            </li>
          ))}
        </ul>

        <strong>Drafts</strong>
        <ul>
          {unpublishedPosts.map(({ id, title }) => (
            <li key={id}>
              <Link href={`/dashboard/posts/${id}`}>{title}</Link>
            </li>
          ))}
        </ul>

        <strong>Deleted</strong>
        <ul>
          {deletedPosts.map(({ id, title }) => (
            <li key={id}>
              <Link href={`/dashboard/posts/${id}`}>{title}</Link>
              <Button>彻底删除</Button>
              <Button>恢复</Button>
            </li>
          ))}
        </ul>
      </div>
      {props.children}
    </div>
  );
}
