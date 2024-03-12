import * as s from '^/mdx.css';
import { PropsWithChildren } from 'react';

export default function Layout(props: PropsWithChildren) {
  return (
    <body className={s.mdx}>
      {props.children}
    </body>
  );
}
