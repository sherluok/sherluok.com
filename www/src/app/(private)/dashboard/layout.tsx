import Link from 'next/link';
import { PropsWithChildren } from 'react';
import * as s from './layout.css';

export default async function DashboardLayout(props: PropsWithChildren) {
  return (
    <body className={s.container}>
      <div className={s.titleBar}>
        <Link href="/">Go Back to Home</Link>
      </div>
      <div className={s.sideBar}>
        <Link href="/dashboard/posts">Posts</Link>
        <Link href="/dashboard/blobs">Blobs</Link>
      </div>
      {props.children}
    </body>
  );
}
