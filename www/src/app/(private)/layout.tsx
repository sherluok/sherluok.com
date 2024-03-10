import { useSession } from '^/lib/auth';
import { notFound } from 'next/navigation';
import { PropsWithChildren } from 'react';

export default async function PrivateRootLayout(props: PropsWithChildren) {
  const session = await useSession();

  if (!session) {
    throw notFound();
  }

  return (
    <body>
      {props.children}
    </body>
  );
}
