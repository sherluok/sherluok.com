import { GlobalFooter } from '^/parts/global-footer';
import * as s from './not-found.css';

export default function NotFoundPage() {
  return (
    <body className={s.body}>
      <main className={s.main}>
        <span>404 | Not Found</span>
      </main>
      <GlobalFooter />
    </body>
  );
}
