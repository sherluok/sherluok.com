import { prisma } from '^/lib/server/prisma';
import { GlobalFooter } from '^/parts/global-footer';
import Link from 'next/link';
import * as s from './page.css';

export default async function HomePage() {
  const posts = await prisma.post.findMany({
    where: {
      published: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  return (
    <body className={s.container}>
      <main className={s.main}>
        <header className={s.header}>
          <div className={s.title}>
            <span className={s.sherluok}>SherLuoK</span>
            <span className={s.dotcom}>.com</span>
          </div>
        </header>
        <div className={s.group2x2}>
          <div className={s.groupHeader}>
            <div className={s.groupTitle}>Posts...</div>
          </div>
          <ul className={s.groupItemList}>
            {posts.map(({ id, title }) => (
              <li className={s.groupItem} key={id}>
                <Link className={s.link} href={`/post/${id}`}>{title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={s.group}>
          <div className={s.groupHeader}>
            <div className={s.groupTitle}>Online utilities...</div>
          </div>
          <ul className={s.groupItemList}>
            <li className={s.groupItem}>
              <Link className={s.link} href="/util/developers-home-page">程序员的浏览器首页</Link>
            </li>
            <li className={s.groupItem}>
              <Link className={s.link} href="/util/web-serial-terminal-emulator">串口终端模拟器</Link>
            </li>
          </ul>
        </div>
        <div className={s.group1x2}>
          <div className={s.groupHeader}>
            <div className={s.groupTitle}>Open source projects...</div>
          </div>
          <ul className={s.groupItemList}>
            <li className={s.groupItem}>
              <a className={s.link} href="https://github.com/sherluok/binary-bmp" target="_blank">Bitmap File Javascript Codec</a>
            </li>
            <li className={s.groupItem}>
              <a className={s.link} href="https://github.com/sherluok/sherluok.com" target="_blank">sherluok.com</a>
            </li>
          </ul>
        </div>
        <div className={s.group1x2}>
          <img className={s.img} src="https://8uym5ktpenz5s5ws.public.blob.vercel-storage.com/IMG_0538-qJbfata4dMoR73Fjv1jeiGus7QrTQa.JPG" />
        </div>
        <div className={s.group}>
        </div>
        <div className={s.group2x1}>
        </div>
        <div className={s.group3x1}>
          <img className={s.img} src="https://8uym5ktpenz5s5ws.public.blob.vercel-storage.com/IMG_0533-2SCixXM7c7NYh0sel1PaF4uxIrdluq.JPG" />
        </div>
      </main>
      <GlobalFooter />
    </body>
  );
}
