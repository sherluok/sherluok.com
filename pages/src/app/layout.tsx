import { Metadata } from 'next';
import { PropsWithChildren } from 'react';

// https://github.com/cloudflare/next-on-pages/tree/main/packages/next-on-pages#2-configure-the-application-to-use-the-edge-runtime
// https://nextjs.org/docs/app/building-your-application/rendering/edge-and-nodejs-runtimes
export const runtime = 'edge';

export const metadata: Metadata = {
  title: 'SherLuoK',
  description: `Sherluok's Personal Website`,
};

export default async function RootLayout(props: PropsWithChildren) {
  return (
    <html>
      <head>
        <link rel="shortcut icon" href="/logo-light.png" type="image/png" media="(prefers-color-scheme: dark)" />
        <link rel="shortcut icon" href="/logo-dark.png" type="image/png" media="(prefers-color-scheme: light)" />
      </head>
      {props.children}
    </html>
  );
}
