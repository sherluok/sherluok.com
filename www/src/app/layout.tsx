import { getColorSchemeCookieValue } from '^/lib/server/color-scheme';
import { Metadata } from 'next';
import { PropsWithChildren } from 'react';

import './fonts.css';
import './layout.css';

export const metadata: Metadata = {
  title: 'SherLuoK',
  description: `Sherluok's Blog`,
  // icons: '/logo.jpg',
};

// console.log({
//   POSTGRES_PRISMA_URL: process.env.POSTGRES_PRISMA_URL,
//   GITHUB_ID: process.env.GITHUB_ID,
//   BLOB_READ_WRITE_TOKEN: process.env.BLOB_READ_WRITE_TOKEN,
// });

export default async function RootLayout(props: PropsWithChildren) {
  const colorScheme = await getColorSchemeCookieValue();
  return (
    <html data-scheme={colorScheme}>
      <head>
        <link rel="shortcut icon" href="/logo-dark.png" type="image/png" media="(prefers-color-scheme: light)" />
        <link rel="shortcut icon" href="/logo-light.png" type="image/png" media="(prefers-color-scheme: dark)" />
      </head>
      {props.children}
    </html>
  );
}
