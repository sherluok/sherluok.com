import { cx } from '^/lib/common/css';
import { getSessionUser } from '^/lib/server/auth';
import { getColorSchemeCookieValue } from '^/lib/server/color-scheme';
import Image from 'next/image';
import Link from 'next/link';
import { ColorSchemeSwitcher } from './color-scheme-switcher';
import * as s from './global-footer.css';

interface GlobalFooterProps {
  className?: string;
}

export async function GlobalFooter(props: GlobalFooterProps) {
  const { className, ...restProps } = props;

  const colorScheme = await getColorSchemeCookieValue();
  const user = await getSessionUser();

  return (
    <footer className={cx(s.footer, className)}>
      <div className={s.footerMain}>
        <Link className={s.home} href="/">
          <Image src="/logo.png" alt="" width={20} height={20} />
          <span>SherLuoK</span>
        </Link>
        <div>© 2024 sherluok.com</div>
        <div className={s.footerLinks}>
          <Link className={s.footerLink} href="/about">About Me</Link>
          {!user ? (
            <Link className={s.footerLink} href="/api/auth/signin">Log In</Link>
          ) : (
            <>
              <Link className={s.footerLink} href="/api/auth/signout">Sign Out</Link>
              <Link className={s.footerLink} href="/dashboard/posts">Go to Dashboard</Link>
            </>
          )}
          <a className={s.footerLink} href="https://github.com/sherluok" target="_blank">GitHub 🡥</a>
          <a className={s.footerLink} href="https://space.bilibili.com/18645748" target="_blank">Bilibili 🡥</a>
          <ColorSchemeSwitcher value={colorScheme} />
        </div>
      </div>
    </footer>
  );
}
