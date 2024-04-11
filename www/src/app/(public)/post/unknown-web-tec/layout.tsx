import { cx } from '^/lib/common/css';
import { mdx } from '^/mdx.css';
import { GlobalFooter } from '^/parts/global-footer';
import { PropsWithChildren } from 'react';
import * as s from './layout.css';

export default function PostLayout(props: PropsWithChildren) {

  return (
    <body className={s.container}>
      <main className={cx(s.main, mdx)}>
        {props.children}
      </main>
      <GlobalFooter />
    </body>
  );
}
