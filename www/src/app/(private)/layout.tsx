import { getSessionUser } from '^/lib/server/auth';
import { notFound } from 'next/navigation';
import { PropsWithChildren } from 'react';

export default async function PrivateRootLayout(props: PropsWithChildren) {
  const user = await getSessionUser();

  if (!user) {
    return notFound();
  }

  // Only allow admin user, might remove later
  if (user.email !== 'sherluok@126.com') {
    return notFound();
  }

  return <>{props.children}</>;
}
