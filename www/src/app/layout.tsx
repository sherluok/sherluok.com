import '^/style/global';
import { Metadata } from 'next';
import { PropsWithChildren } from 'react';

export const metadata: Metadata = {
  title: 'SherLuoK',
  description: `Sherluok's Blog`,
  icons: '/logo.png',
};

export default function RootLayout(props: PropsWithChildren) {
  return (
    <html>
      {props.children}
    </html>
  );
}
